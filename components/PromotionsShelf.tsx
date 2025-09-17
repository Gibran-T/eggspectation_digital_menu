// components/PromotionsShelf.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type Promotion = {
  id: string;
  name_en: string;
  name_fr: string;
  description_en: string;
  description_fr: string;
  price: number;
  image: string;
  tags: string;
  featured: boolean;
  valid_from: string;
  valid_until: string;
  visible: boolean;
  priority: number;
};

const fmtPrice = (n: number, lang: "en" | "fr") =>
  new Intl.NumberFormat(lang === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 2,
  }).format(Number(n) || 0);

export default function PromotionsShelf() {
  const { language } = useLanguage();
  // só temos en/fr na planilha; es/cn caem no inglês
  const lang: "en" | "fr" = language === "fr" ? "fr" : "en";

  const [items, setItems] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/promotions", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setItems(Array.isArray(json) ? json : []);
      } catch (e: any) {
        if (mounted) setErr(e?.message || "Failed to load promotions");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const content = useMemo(() => {
    const nameKey = lang === "fr" ? "name_fr" : "name_en";
    const descKey = lang === "fr" ? "description_fr" : "description_en";
    return items.map(p => ({
      id: p.id,
      name: (p as any)[nameKey] || p.name_en,
      desc: (p as any)[descKey] || p.description_en,
      price: p.price,
      image: p.image,
      tags: p.tags,
      featured: p.featured,
      priority: p.priority,
    }));
  }, [items, lang]);

  // skeleton
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto">
        <div className="animate-pulse h-8 w-48 bg-gray-200 rounded mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <div className="h-48 bg-gray-100" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-100 rounded w-2/3" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (err) {
    return <section className="max-w-7xl mx-auto text-red-700 p-4">Erro ao carregar promoções: {err}</section>;
  }

  if (!content.length) {
    return <section className="max-w-7xl mx-auto text-gray-500 p-4">Sem promoções ativas.</section>;
  }

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
        {lang === "fr" ? "Promotions" : "Promotions"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.map((p) => (
          <article
            key={p.id}
            className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-xl transition"
          >
            <div className="relative aspect-[16/9] bg-gray-100">
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {p.featured && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-full shadow">
                  Featured
                </span>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-lg leading-snug">{p.name}</h3>
                <span className="font-extrabold">{fmtPrice(p.price, lang)}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>

              {p.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.split(";").slice(0, 4).map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
