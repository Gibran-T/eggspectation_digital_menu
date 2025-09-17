// pages/api/promotions.js
import Papa from "papaparse";

let cache = { ts: 0, rows: null };

// TTL em segundos (env) e ms (memória)
const TTL_SEC = Number(process.env.PROMOTIONS_CACHE_SECONDS || 0);
const TTL_MS = TTL_SEC * 1000;

function parseBool(v) {
  if (typeof v === "boolean") return v;
  const s = String(v || "").trim().toLowerCase();
  return s === "true" || s === "1" || s === "yes" || s === "y" || s === "vrai" || s === "oui";
}

function todayYYYYMMDD_Toronto() {
  // en-CA => "YYYY-MM-DD"
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function inWindow(today, start, end) {
  const s = (start || "").trim();
  const e = (end || "").trim();
  return (!s || today >= s) && (!e || today <= e);
}

export default async function handler(req, res) {
  try {
    const csvUrl = process.env.SHEET_PUBLISHED_CSV_URL;
    if (!csvUrl) {
      res.setHeader("Cache-Control", "no-store");
      return res.status(500).json({ error: "Missing SHEET_PUBLISHED_CSV_URL" });
    }

    // ?bust=1 -> ignora CDN e pode ignorar cache em memória (útil durante testes)
    const bust = req.query.bust === "1" || req.query.bust === "true";

    const includeAll = req.query.all === "1" || req.query.all === "true";
    if (includeAll && process.env.PROMO_KEY && req.query.key !== process.env.PROMO_KEY) {
      res.setHeader("Cache-Control", "no-store");
      return res.status(403).json({ error: "Forbidden" });
    }

    const now = Date.now();
    let rows;

    // Cache em memória (a menos que bust)
    if (!bust && TTL_MS && cache.rows && now - cache.ts < TTL_MS) {
      rows = cache.rows;
    } else {
      // Sempre buscar o CSV sem cache local
      const resp = await fetch(csvUrl, { cache: "no-store" });
      if (!resp.ok) throw new Error(`Fetch CSV failed: ${resp.status}`);
      const text = await resp.text();
      const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
      rows = parsed.data; // array de objetos com cabeçalhos da planilha

      // Atualiza cache em memória (opcionalmente até quando bust)
      cache = { ts: now, rows };
    }

    // Mapear e normalizar campos
    const items = rows.map((r) => ({
      id: (r.id || "").trim(),
      name_en: r.name_en || "",
      name_fr: r.name_fr || "",
      description_en: r.description_en || "",
      description_fr: r.description_fr || "",
      price: Number(r.price || 0),
      image: r.image || "",
      tags: r.tags || "",
      featured: parseBool(r.featured),
      valid_from: r.valid_from || "",
      valid_until: r.valid_until || "",
      visible: parseBool(r.visible),
      priority: Number(r.priority || 0),
    }));

    const today = todayYYYYMMDD_Toronto();
    const filtered = includeAll
      ? items
      : items.filter((i) => i.visible && inWindow(today, i.valid_from, i.valid_until));

    // Ordenação: prioridade DESC, featured primeiro, depois nome
    filtered.sort(
      (a, b) =>
        (b.priority - a.priority) ||
        (Number(b.featured) - Number(a.featured)) ||
        a.name_en.localeCompare(b.name_en)
    );

    // >>> Cabeçalhos de cache
    if (!bust && TTL_SEC > 0) {
      // Cache em EDGE (Vercel) com SWR igual ao TTL
      res.setHeader("Cache-Control", `s-maxage=${TTL_SEC}, stale-while-revalidate=${TTL_SEC}`);
    } else {
      // Sem cache quando bust ou TTL=0
      res.setHeader("Cache-Control", "no-store");
    }

    return res.status(200).json(filtered);
  } catch (err) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(500).json({ error: err?.message || "Unknown error" });
  }
}
