import Papa from "papaparse";

let cache = { ts: 0, rows: null };
const TTL = Number(process.env.PROMOTIONS_CACHE_SECONDS || 0) * 1000;

export default async function handler(req, res) {
  try {
    if (process.env.PROMO_KEY && req.query.key !== process.env.PROMO_KEY) {
      res.setHeader("cache-control", "no-store");
      return res.status(403).json({ error: "Forbidden" });
    }
    const url = process.env.SHEET_PUBLISHED_CSV_URL;
    if (!url) {
      res.setHeader("cache-control", "no-store");
      return res.status(500).json({ error: "Missing SHEET_PUBLISHED_CSV_URL" });
    }

    const now = Date.now();
    let rows;
    if (TTL && cache.rows && now - cache.ts < TTL) {
      rows = cache.rows;
    } else {
      const resp = await fetch(url, { cache: "no-store" });
      if (!resp.ok) throw new Error(`Fetch CSV failed: ${resp.status}`);
      const text = await resp.text();
      rows = Papa.parse(text, { header: true, skipEmptyLines: true }).data;
      cache = { ts: now, rows };
    }

    res.setHeader("cache-control", "no-store");
    return res.status(200).json(rows);
  } catch (err) {
    res.setHeader("cache-control", "no-store");
    return res.status(500).json({ error: err?.message || "Unknown error" });
  }
}
