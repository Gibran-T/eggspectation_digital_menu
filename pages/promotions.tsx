// pages/promotions.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import ThemeToggle from "../components/ThemeToggle";

const LANGS = ["en", "fr"] as const;
type Lang = (typeof LANGS)[number];

type ApiPromo = {
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

type Props = { authorized: boolean };

/** Switch de idioma – preserva TODOS os query params (ex.: k=EGG2025) */
function LangSwitch({ current }: { current: Lang }) {
  const router = useRouter();
  const q = router.query;
  return (
    <div className="mt-4 flex items-center gap-2">
      {LANGS.map((l) => (
        <Link
          key={l}
          href={{ pathname: router.pathname, query: { ...q, lang: l } }}
          scroll={false}
          className={[
            "rounded-full border px-3 py-1 text-sm transition",
            l === current
              ? "bg-white text-black border-white"
              : "bg-white/10 text-white border-white/40 hover:bg-white/20",
          ].join(" ")}
          aria-current={l === current ? "page" : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

const PromotionsPage: NextPage<Props> = ({ authorized }) => {
  const router = useRouter();
  const queryLang = String(router.query.lang || "").toLowerCase();
  const lang: Lang = (LANGS.includes(queryLang as Lang) ? queryLang : "en") as Lang;

  // baseUrl para OG/Twitter (SSR no Vercel e CSR no browser)
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : (process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
          (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"));

  const [promos, setPromos] = useState<ApiPromo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filterTag, setFilterTag] = useState<string>("__all__");
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<"featured" | "price_asc" | "price_desc">("featured");

  const currency = useMemo(
    () =>
      new Intl.NumberFormat(lang === "fr" ? "fr-CA" : "en-CA", {
        style: "currency",
        currency: "CAD",
      }),
    [lang]
  );

  if (!authorized) {
    return (
      <>
        <Head>
          <title>404</title>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <div className="min-h-[60vh] grid place-items-center text-gray-600 dark:text-gray-300">
          404 — This page could not be found.
        </div>
      </>
    );
  }

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/promotions", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const payload = await res.json();
        if (alive) setPromos(payload?.data ?? []);
      } catch (e: any) {
        if (alive) setError(e?.message || "Failed to load");
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    (promos || []).forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [promos]);

  const visiblePromos = useMemo(() => {
    let list = (promos || []).slice();

    if (filterTag !== "__all__") list = list.filter((p) => (p.tags || []).includes(filterTag));

    const term = search.trim().toLowerCase();
    if (term) {
      list = list.filter((p) => {
        const t = p.translations?.[lang] || {};
        const name = (t.name || p.name || "").toLowerCase();
        const desc = (t.description || p.description || "").toLowerCase();
        return name.includes(term) || desc.includes(term);
      });
    }

    list.sort((a, b) => {
      if (sort === "featured") {
        const af = a.featured ? 1 : 0;
        const bf = b.featured ? 1 : 0;
        if (bf !== af) return bf - af; // primeiro os destacados
        const ap = a.priority || 0;
        const bp = b.priority || 0;
        return bp - ap; // prioridade desc
      }
      if (sort === "price_asc") return Number(a.price) - Number(b.price);
      if (sort === "price_desc") return Number(b.price) - Number(a.price);
      return 0;
    });

    return list;
  }, [promos, filterTag, search, sort, lang]);

  const title = lang === "fr" ? "Promotions de saison" : "Seasonal Promotions";
  const description =
    lang === "fr" ? "Offres en vedette chez eggspectation." : "Featured offers at eggspectation.";

  return (
    <>
      <Head>
        <title>Promotions</title>
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}/hero/promos.jpg`} />
        <meta property="og:url" content={`${baseUrl}/promotions`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}/hero/promos.jpg`} />
      </Head>

      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[240px] sm:h-[300px] lg:h-[360px]">
            <Image
              src="/hero/promos.jpg"
              alt="eggspectation facade in autumn in Montreal"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "left center" }}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
              <div className="flex items-center justify-between gap-3">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  {title}
                </h1>
                <ThemeToggle />
              </div>
              <LangSwitch current={lang} />
            </div>
          </div>
        </section>

        {/* CONTROLES */}
        <div className="mt-6 mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterTag("__all__")}
              className={[
                "px-3 py-1 rounded-full text-xs uppercase tracking-wide border transition",
                "border-gray-300 dark:border-white/15",
                filterTag === "__all__"
                  ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white"
                  : "hover:bg-gray-100 dark:hover:bg-white/10",
              ].join(" ")}
            >
              {lang === "fr" ? "Tous" : "All"}
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setFilterTag(t)}
                className={[
                  "px-3 py-1 rounded-full text-xs uppercase tracking-wide border transition",
                  "border-gray-300 dark:border-white/15",
                  filterTag === t
                    ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white"
                    : "hover:bg-gray-100 dark:hover:bg-white/10",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="search" className="sr-only">
              {lang === "fr" ? "Rechercher" : "Search"}
            </label>
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={lang === "fr" ? "Rechercher..." : "Search..."}
              className="w-56 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none
                         focus:border-black dark:focus:border-white
                         bg-white dark:bg-neutral-900 dark:text-white dark:border-white/15"
            />

            <label htmlFor="sort" className="sr-only">
              {lang === "fr" ? "Trier" : "Sort"}
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none
                         focus:border-black dark:focus:border-white
                         bg-white dark:bg-neutral-900 dark:text-white dark:border-white/15"
            >
              <option value="featured">{lang === "fr" ? "Mise en avant" : "Featured first"}</option>
              <option value="price_asc">{lang === "fr" ? "Prix ↑" : "Price ↑"}</option>
              <option value="price_desc">{lang === "fr" ? "Prix ↓" : "Price ↓"}</option>
            </select>
          </div>
        </div>

        {/* ESTADOS */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300">
            {lang === "fr" ? "Impossible de charger les promotions." : "Could not load promotions."} ({error})
          </div>
        )}

        {!promos && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-white/10" />
                <div className="space-y-2 p-4">
                  <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-white/10" />
                  <div className="h-3 w-full rounded bg-gray-200 dark:bg-white/10" />
                  <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!!promos && visiblePromos.length === 0 && (
          <div className="min-h-[30vh] grid place-items-center text-gray-600 dark:text-gray-300">
            {lang === "fr" ? "Aucune promotion trouvée." : "No promotions found."}
          </div>
        )}

        {/* GRID */}
        {!!promos && visiblePromos.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visiblePromos.map((p) => {
              const t = p.translations?.[lang] ?? {};
              const name = (t.name || p.name || "").trim();
              const desc = (t.description || p.description || "").trim();
              const featuredLabel = lang === "fr" ? "En vedette" : "Featured";

              return (
                <article
                  key={p.id}
                  className={[
                    "overflow-hidden rounded-2xl border transition",
                    "bg-white border-gray-200 hover:shadow-md",
                    "dark:bg-neutral-900/80 dark:border-white/10 dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
                    p.featured ? "ring-2 ring-yellow-400" : "",
                  ].join(" ")}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={name || p.id}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      priority={!!p.featured}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    {p.featured && (
                      <div className="absolute left-2 top-2 rounded-full bg-yellow-400/90 px-2 py-1 text-xs font-semibold text-black">
                        {featuredLabel}
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold shadow
                                    dark:bg-black/60 dark:text-white">
                      {currency.format(Number(p.price || 0))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-4">
                    <h2 className="line-clamp-2 text-lg font-medium leading-tight text-gray-900 dark:text-white">
                      {name}
                    </h2>
                    {desc && <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>}

                    {!!p.tags?.length && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {p.tags.map((tag) => (
                          <span
                            key={`${p.id}-${tag}`}
                            className="rounded-full bg-gray-100 px-2 py-1 text-[10px] uppercase tracking-wide
                                       dark:bg-white/10 dark:text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {p.valid_until && (
                      <div className="pt-1 text-xs text-gray-500 dark:text-gray-400">
                        {lang === "fr" ? "Valable jusqu’au" : "Valid until"}{" "}
                        {new Date(p.valid_until).toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA")}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default PromotionsPage;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const serverKey = String(process.env.PROMO_KEY || "");
  const key = String(ctx.query.k || "");
  const authorized = !serverKey || key === serverKey;
  return { props: { authorized } };
};
