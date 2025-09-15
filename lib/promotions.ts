// lib/promotions.ts
import type { Promotion } from "../types/promotions";

const CACHE_SECONDS = Number(process.env.PROMOTIONS_CACHE_SECONDS ?? 300);
const DEFAULT_LANG = (process.env.PROMOTIONS_DEFAULT_LANG ?? "en").toLowerCase();

let memoryCache: { data: Promotion[]; fetchedAt: number } | null = null;

// ---- helpers ---------------------------------------------------------------
function toBool(v: unknown, def = false): boolean {
  const s = String(v ?? "").trim().toLowerCase();
  if (["true","yes","1","y"].includes(s)) return true;
  if (["false","no","0","n"].includes(s)) return false;
  return def;
}
function parseTags(raw?: string): string[] | undefined {
  if (!raw) return;
  const arr = raw.split(/[;,]/).map(t => t.trim()).filter(Boolean);
  return arr.length ? arr : undefined;
}
function num(v: unknown, def = 0): number {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
}
function pickLang(rec: any, keyEn: string, keyFr?: string, lang = DEFAULT_LANG) {
  const v = (lang !== "en" && keyFr) ? rec[keyFr] : rec[keyEn];
  return String((v ?? rec[keyEn] ?? "")).trim();
}
// CSV: split por vírgulas respeitando trechos entre aspas
function parseCsvLine(line: string): string[] {
  return line
    .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
    .map(c => c.replace(/^"|"$/g, "").replace(/""/g, '"'));
}

// ---- parsing ---------------------------------------------------------------
function parseRow(row: string[], headers: string[], lang = DEFAULT_LANG): Promotion | null {
  const idx = (h: string) => headers.indexOf(h);                    // headers já estão normalizados
  const get = (h: string) => (idx(h) >= 0 ? row[idx(h)] ?? "" : "");

  const hasEn = idx("name_en") >= 0 || idx("description_en") >= 0;

  const id = get("id") || undefined;
  const name = hasEn
    ? pickLang({ name_en: get("name_en"), name_fr: get("name_fr") }, "name_en", "name_fr", lang)
    : (get("name") || "");
  if (!name) return null;

  const description = hasEn
    ? pickLang(
        { description_en: get("description_en"), description_fr: get("description_fr") },
        "description_en", "description_fr", lang
      ) || undefined
    : (get("description") || undefined);

  const price = num(get("price"));
  const image = String(get("image") || "").trim();
  const tags = parseTags(String(get("tags") || ""));
  const featured = toBool(get("featured"));

  const valid_from = get("valid_from") || undefined;
  const valid_until = get("valid_until") || undefined;
  const visible = idx("visible") >= 0 ? toBool(get("visible"), true) : true;
  const priority = idx("priority") >= 0 ? num(get("priority"), 0) : 0;

  const translations = hasEn ? {
    en: { name: get("name_en") || name, description: get("description_en") || description },
    fr: { name: get("name_fr") || name, description: get("description_fr") || description },
  } : undefined;

  return { id, name, description, price, image, tags, featured, translations, valid_from, valid_until, visible, priority };
}

// ---- fetch CSV -------------------------------------------------------------
async function fetchViaCsv(): Promise<Promotion[] | null> {
  const csvUrl = process.env.SHEET_PUBLISHED_CSV_URL;
  if (!csvUrl) return null;

  const res = await fetch(csvUrl, { cache: "no-store" });
  if (!res.ok) return null;

  const text = await res.text();
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return [];

  // normaliza cabeçalhos: remove BOM, trim, minúsculo
  const headers = parseCsvLine(lines[0])
    .map(h => h.replace(/^\uFEFF/, "").trim().toLowerCase());

  const rows = lines.slice(1).map(parseCsvLine);
  const parsed = rows.map(r => parseRow(r, headers)).filter(Boolean) as Promotion[];
  return parsed;
}

// ---- business rules --------------------------------------------------------
function withinValidity(p: Promotion): boolean {
  const now = new Date();
  const fromOk = p.valid_from ? new Date(p.valid_from) <= now : true;
  const untilOk = p.valid_until ? now <= new Date(p.valid_until) : true;
  return fromOk && untilOk;
}

// ---- public API ------------------------------------------------------------
export async function getPromotions(): Promise<Promotion[]> {
  const now = Date.now();
  if (memoryCache && now - memoryCache.fetchedAt < CACHE_SECONDS * 1000) {
    return memoryCache.data;
  }
  const data = await fetchViaCsv();
  const safe = (data ?? [])
    .filter(p => !!p?.name && p.visible !== false)
    .filter(withinValidity)
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  memoryCache = { data: safe, fetchedAt: now };
  return safe;
}
