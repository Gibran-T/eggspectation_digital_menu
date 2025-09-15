// pages/api/promotions_debug.ts
import type { NextApiRequest, NextApiResponse } from "next";

// split de CSV respeitando vírgulas dentro de aspas
const splitCsv = (line: string) =>
  line
    .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
    .map(c => c.replace(/^"|"$/g, "").replace(/""/g, '"'));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = process.env.SHEET_PUBLISHED_CSV_URL!;
    const r = await fetch(url, { cache: "no-store" });
    const text = await r.text();
    const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);

    const rawHeader = lines[0] ?? "";
    const headers = splitCsv(rawHeader).map(h => h.replace(/^\uFEFF/, "").trim().toLowerCase());
    const rows = lines.slice(1).map(splitCsv);

    // parse mínimo só para ver se “name_en/price/image...” estão vindo
    const preview = rows.slice(0, 5).map((row) => {
      const idx = (h: string) => headers.indexOf(h);
      const get = (h: string) => (idx(h) >= 0 ? row[idx(h)] ?? "" : "");
      return {
        id: get("id"),
        name_en: get("name_en"),
        name_fr: get("name_fr"),
        description_en: get("description_en"),
        price: get("price"),
        image: get("image"),
        tags: get("tags"),
        featured: get("featured"),
        valid_from: get("valid_from"),
        valid_until: get("valid_until"),
        visible: get("visible"),
        priority: get("priority"),
      };
    });

    res.status(200).json({
      ok: true,
      url,
      lineCount: lines.length,
      headers,
      firstRowRaw: rows[0] || null,
      previewCount: preview.length,
      preview,
    });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
