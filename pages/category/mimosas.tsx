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
      image: "/images/MIMOSA_CLASSIC.jpg",
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Sparkling Elegance Theme ORIGINAL */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-400 to-blue-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-blue-300 to-amber-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-amber-400 to-blue-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-blue-300 to-amber-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-amber-300 to-blue-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Sparkling Mimosa Emojis Scattered ORIGINAL */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🥂</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">✨</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🍊</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🥃</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">💫</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🌟</div>
      </div>

      {/* Header Section */}
      <header className="w-full px-6 pt-10 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-blue-900 font-semibold">{t.back}</span>
            </button>
          </Link>
        </div>
        
        <div className="text-center w-full">
          {/* Decorative Line with Champagne Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🥂</span>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-blue-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6 italic">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Sparkle Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">✨</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 pb-12 relative z-10">
        {/* Grid seguindo padrão EXATO estabelecido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {mimosas.map((item, index) => (
            <article key={index} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.premium ? 'ring-2 ring-amber-400/50' : item.special ? 'ring-2 ring-blue-400/50' : item.featured ? 'ring-2 ring-amber-400/50' : ''}`}>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              {(item.featured || item.premium || item.special) && (
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${
                    item.featured ? 'bg-amber-600' : 
                    item.premium ? 'bg-blue-700' : 
                    item.special ? 'bg-purple-700' : 'bg-blue-600'
                  }`}>
                    {item.featured ? 'Popular' : 
                     item.premium ? 'Premium' : 
                     item.special ? 'Special' : 'Mimosa'}
                  </div>
                </div>
              )}
              <div className="relative z-10">
                {/* CORRIGIDO: Container da imagem sem bordas e preenchimento completo */}
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  {/* CORRIGIDO: Imagem preenchendo completamente o espaço sem bordas */}
                  <img 
                    src={item.image} 
                    alt={t.items[index].name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 rounded-t-3xl" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-blue-900 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                    {t.items[index].name}
                  </h2>
                  {/* Texto completo sem truncamento */}
                  <p className="text-blue-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.items[index].description}
                  </p>
                  {/* Preço APÓS a descrição, seguindo padrão estabelecido */}
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-xl md:text-2xl font-serif font-bold text-blue-800 leading-none">
                      ${item.price}
                    </span>
                    <span className="text-xs font-serif font-medium text-blue-900/50 uppercase tracking-wide">
                      CAD
                    </span>
                  </div>
                  {/* Ícones de alergênicos APÓS o preço, com tamanho correto w-6 h-6 */}
                  {item.tags.length > 0 && (
                    <div className="pt-2 border-t border-blue-900/10">
                      <div className="flex flex-wrap gap-2">
                        {/* Ícones de alergênicos */}
                        {item.tags.map((icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors duration-300">
                            <img src={icon} alt="allergen icon" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/0 via-blue-400/0 to-amber-400/0 group-hover:from-amber-400/5 group-hover:via-blue-400/5 group-hover:to-amber-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-800 to-amber-800 text-white py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl">🥂</span>
            <h3 className="text-xl font-bold">Sparkling moments crafted with elegance</h3>
            <span className="text-3xl">✨</span>
          </div>
          <p className="text-blue-100 text-lg italic">
            Where every sip sparkles with morning magic
          </p>
        </div>
      </div>
    </div>
  );
}

