import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function MimosasPage() {
  const { language } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsReady(true));
  }, []);

  const translations = {
    fr: {
      title: "Mimosas",
      back: "Retour",
      subtitle: "Élégance pétillante pour vos matins",
      items: [
        { name: "Mimosa Classique", description: "Avec jus d'orange ou de pamplemousse" },
        { name: "Hermosa", description: "Vin mousseux, jus de pamplemousse et tequila" },
        { name: "Mimosa au Litchi", description: "Jus de litchi, vin mousseux avec une touche de soho" },
        { name: "Grand Mimosa", description: "Notre mimosa classique avec une touche de Grand Marnier" },
        { name: "Mimosa Combo", description: "Un ensemble pétillant de tous les favoris de la maison" }
      ]
    },
    en: {
      title: "Mimosas",
      back: "Back",
      subtitle: "Sparkling elegance for your mornings",
      items: [
        { name: "Mimosa Classic", description: "With orange juice or grapefruit juice" },
        { name: "Hermosa", description: "Sparkling wine, grapefruit juice and tequila" },
        { name: "Lychee Mimosa", description: "Lychee juice, sparkling wine with a dab of soho" },
        { name: "Grand Mimosa", description: "Our classic mimosa with a dab of Grand Marnier" },
        { name: "Mimosa Combo", description: "A sparkling set of all house favorites" }
      ]
    },
    es: {
      title: "Mimosas",
      back: "Volver",
      subtitle: "Elegancia espumosa para tus mañanas",
      items: [
        { name: "Mimosa Clásica", description: "Con jugo de naranja o pomelo" },
        { name: "Hermosa", description: "Vino espumoso, jugo de pomelo y tequila" },
        { name: "Mimosa de Lichi", description: "Jugo de lichi, vino espumoso con un toque de soho" },
        { name: "Gran Mimosa", description: "Nuestra mimosa clásica con un toque de Grand Marnier" },
        { name: "Combo Mimosa", description: "Una selección burbujeante de los favoritos de la casa" }
      ]
    },
    cn: {
      title: "香槟鸡尾酒",
      back: "返回",
      subtitle: "为您的早晨带来起泡的优雅",
      items: [
        { name: "经典香槟鸡尾酒", description: "橙汁或葡萄柚汁" },
        { name: "赫莫萨", description: "起泡酒、葡萄柚汁和龙舌兰酒" },
        { name: "荔枝香槟鸡尾酒", description: "荔枝汁、起泡酒和少量Soho利口酒" },
        { name: "尊贵香槟鸡尾酒", description: "经典香槟加上一点Grand Marnier" },
        { name: "香槟组合", description: "所有本店招牌饮品的泡沫组合" }
      ]
    }
  };

  const t = translations[language] || translations.en;

  const mimosas = [
    {
      price: "10.00",
      image: "/images/MIMOSA_CLASSIC.jpg", // Updated to use the new standardized image
      tags: [],
      featured: true
    },
    {
      price: "12.00",
      image: "/images/HERMOSA_LANDSCAPE.jpg",
      tags: []
    },
    {
      price: "12.50",
      image: "/images/LYCHEE_MIMOSA_LANDSCAPE1.jpg",
      tags: []
    },
    {
      price: "14.00",
      image: "/images/GRAND_MIMOSA_LANDSCAPE1.jpg",
      tags: [],
      premium: true
    },
    {
      price: "80.00",
      image: "/images/MIMOSA_COMBO_LANDSCAPE1.jpg",
      tags: [],
      special: true
    }
  ];

  if (!t.items || t.items.length !== mimosas.length) {
    console.error("Translation items mismatch or missing");
    return <div className="text-center text-red-500 font-bold mt-10">Translation error: Items missing or invalid</div>;
  }

  if (!isReady) return <div className="text-center mt-20 text-blue-900 font-medium">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 font-serif overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="px-4 md:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex justify-between items-center mb-6">
          <Link href="/menu">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg className="w-4 h-4 text-blue-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-blue-900 font-serif font-medium">{t.back}</span>
            </button>
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-2">
            {t.title}
          </h1>
          <p className="text-blue-900/70 text-lg font-light italic">
            {t.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-6 lg:px-8 pb-12">
        {/* UPDATED: Same tablet-optimized grid as Cocktails & Sangrias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {mimosas.map((item, index) => (
            <article key={index} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.featured ? 'ring-2 ring-amber-400/50' : item.premium ? 'ring-2 ring-blue-400/50' : item.special ? 'ring-2 ring-purple-400/50' : ''}`}>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              {(item.featured || item.premium || item.special) && (
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${item.featured ? 'bg-amber-500' : item.premium ? 'bg-blue-500' : 'bg-purple-500'}`}>
                    {item.featured ? 'Popular' : item.premium ? 'Premium' : 'Special'}
                  </div>
                </div>
              )}
              <div className="relative z-10">
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  {/* UPDATED: Added xl:object-contain for PC optimization */}
                  <img 
                    src={item.image} 
                    alt={t.items[index].name} 
                    className="w-full h-full object-cover object-center xl:object-contain 2xl:object-contain group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <div className="flex justify-between items-start gap-3">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-blue-900 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                      {t.items[index].name}
                    </h2>
                    <div className="flex flex-col items-end">
                      <span className="text-xl md:text-2xl font-serif font-bold text-blue-800 leading-none">
                        ${item.price}
                      </span>
                      <span className="text-xs font-serif font-medium text-blue-900/50 uppercase tracking-wide">
                        CAD
                      </span>
                    </div>
                  </div>
                  {/* UPDATED: Removed any height restrictions to prevent text truncation */}
                  <p className="text-blue-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.items[index].description}
                  </p>
                  {item.tags.length > 0 && (
                    <div className="pt-2 border-t border-blue-900/10">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors duration-300">
                            <img src={icon} alt="allergen icon" className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-amber-400/5 group-hover:via-blue-400/5 group-hover:to-purple-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-blue-900/40 text-xs font-serif">
        <div className="flex justify-center items-center gap-3">
          <div className="h-px w-12 bg-blue-900/20"></div>
          <span>Eggspectation Montréal © {new Date().getFullYear()}</span>
          <div className="h-px w-12 bg-blue-900/20"></div>
        </div>
      </footer>
    </div>
  );
}

