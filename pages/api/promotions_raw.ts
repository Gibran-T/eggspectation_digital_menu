import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = process.env.SHEET_PUBLISHED_CSV_URL!;
    const r = await fetch(url, { cache: "no-store" });
    const text = await r.text();
    res.status(200).json({
      ok: true,
      url,
      length: text.length,
      headerLine: text.split(/\r?\n/)[0] ?? "",  // primeira linha (cabeçalhos)
      first200: text.slice(0, 200)               // primeiros 200 caracteres
    });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
