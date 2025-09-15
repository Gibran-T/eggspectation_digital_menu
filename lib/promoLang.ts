// lib/promoLang.ts
export type PromoLang = "en" | "fr";

// qualquer um dos 4 idiomas do app, ou string vazia
type AnyLang = "en" | "fr" | "es" | "cn" | string | undefined | null;

function normalize(v: AnyLang): PromoLang {
  const x = String(v || "").toLowerCase();
  if (x === "fr") return "fr";
  return "en";
}

/**
 * Regras:
 * 1) se vier ?lang= na URL (en|fr) -> usa isso
 * 2) senão, pega do contexto global (en|fr|es|cn) e reduz para en/fr
 * 3) senão, usa default vindo do .env (NEXT_PUBLIC_PROMOTIONS_DEFAULT_LANG)
 * 4) fallback final: "en"
 */
export function resolvePromoLang(opts: {
  fromQuery?: AnyLang;
  fromContext?: AnyLang;
  defaultEnv?: AnyLang;
}): PromoLang {
  if (opts.fromQuery) return normalize(opts.fromQuery);
  if (opts.fromContext) return normalize(opts.fromContext);
  if (opts.defaultEnv) return normalize(opts.defaultEnv);
  return "en";
}
