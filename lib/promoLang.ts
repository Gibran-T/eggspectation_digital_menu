export type PromoLang = "en" | "fr";

export function resolvePromoLang(params: {
  fromQuery?: string;     // ?lang=...
  fromContext?: string;   // language do contexto global (pode ser es/cn)
  defaultEnv?: string;    // process.env.PROMOTIONS_DEFAULT_LANG
}): PromoLang {
  const q = (params.fromQuery || "").toLowerCase();
  if (q === "en" || q === "fr") return q;

  const c = (params.fromContext || "").toLowerCase();
  if (c === "en" || c === "fr") return c as PromoLang;

  const d = (params.defaultEnv || "en").toLowerCase();
  return d === "fr" ? "fr" : "en";
}
