// lib/promotions.ts

// 1) Tipo local — evita problemas de path/case no Vercel
export type Promotion = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  tags?: string[];
  featured?: boolean;
  translations?: {
    en?: { name?: string; description?: string };
    fr?: { name?: string; description?: string };
  };
  priority?: number;
  valid_until?: string;
};

// 2) Config via ENV
const CSV_URL = process.env.SHEET_PUBLISHED_CSV_URL || ""; // publicado como CSV
const CACHE_SECONDS = Number(process.env.PROMOTIONS_CACHE_SECONDS ?? 300);

// 3) Cache simples em memória entre requests (em serverless, por invocação)
let cache: { at: number; data: Promotion[] } | null = null;

// 4) CSV parser robusto (respeita campos entre aspas e vírgulas internas)
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let cur = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === "," && !inQuotes) {
      row.push(cur);
      cur = "";
    } else if ((c === "\n" || c === "\r") && !inQuotes) {
      if (cur.length || row.length) {
        row.push(cur);
        rows.push(row);
        row = [];
        cur = "";
      }
      // se \r\n, pular um
      if (c === "\r" && text[i + 1] === "\n") i++;
    } else {
      cur += c;
    }
  }
  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows;
}

function idx(header: string[], name: string) {
  return header.findIndex((h) => h.trim() === name);
}

// 5) Normalização de boolean e listas
function toBool(v: string | undefined) {
  return ["1", "true", "yes", "y"].includes(String(v || "").trim().toLowerCase());
}

function toTags(v: string | undefined) {
  return String(v || "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
}

// 6) Fetch + transformação
export async function fetchPromotions(): Promise<Promotion[]> {
  if (!CSV_URL) return [];

  // cache
  const now = Date.now();
  if (cache && now - cache.at < CACHE_SECONDS * 1000) return cache.data;

  const res = await fetch(CSV_URL, {
    // Next 13/14/15 — ajuda no cache em edge/fc
    next: { revalidate: CACHE_SECONDS },
  });
  if (!res.ok) throw new Error(`CSV HTTP ${res.status}`);

  const text = await res.text();
  const rows = parseCSV(text);
  if (rows.length < 2) return [];

  const [header, ...lines] = rows;

  const i_id = idx(header, "id");
  const i_name_en = idx(header, "name_en");
  const i_name_fr = idx(header, "name_fr");
  const i_desc_en = idx(header, "description_en");
  const i_desc_fr = idx(header, "description_fr");
  const i_price = idx(header, "price");
  const i_image = idx(header, "image");
  const i_tags = idx(header, "tags");
  const i_featured = idx(header, "featured");
  const i_priority = idx(header, "priority");
  const i_valid_until = idx(header, "valid_until");

  const data: Promotion[] = lines
    .filter((r) => r.some((c) => c.trim().length)) // ignora linhas vazias
    .map((r) => {
      const price = i_price >= 0 ? Number(r[i_price] || 0) : 0;
      return {
        id: i_id >= 0 ? r[i_id] : "",
        name: (i_name_en >= 0 ? r[i_name_en] : "") || (i_name_fr >= 0 ? r[i_name_fr] : ""),
        description:
          (i_desc_en >= 0 ? r[i_desc_en] : "") || (i_desc_fr >= 0 ? r[i_desc_fr] : ""),
        price: isFinite(price) ? price : 0,
        image: i_image >= 0 ? r[i_image] || "" : "",
        tags: toTags(i_tags >= 0 ? r[i_tags] : ""),
        featured: toBool(i_featured >= 0 ? r[i_featured] : ""),
        translations: {
          en:
            i_name_en >= 0 || i_desc_en >= 0
              ? {
                  name: i_name_en >= 0 ? r[i_name_en] || undefined : undefined,
                  description: i_desc_en >= 0 ? r[i_desc_en] || undefined : undefined,
                }
              : undefined,
          fr:
            i_name_fr >= 0 || i_desc_fr >= 0
              ? {
                  name: i_name_fr >= 0 ? r[i_name_fr] || undefined : undefined,
                  description: i_desc_fr >= 0 ? r[i_desc_fr] || undefined : undefined,
                }
              : undefined,
        },
        priority: i_priority >= 0 ? Number(r[i_priority] || 0) : 0,
        valid_until: i_valid_until >= 0 ? r[i_valid_until] || undefined : undefined,
      };
    });

  cache = { at: now, data };
  return data;
}
