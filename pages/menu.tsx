import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLanguage } from "../context/LanguageContext";

const translations: any = {
  fr: {
    top: "Haut",
    cover: "⬅ Retour",
    view: "VOIR LES PLATS",
    categories: [
      "Mimosas",
      "Cocktails & Sangrias",
      "Bières & Vins",
      "Jus & Smoothies",
      "Milkshakes",
      "Café & Espresso",
      "Bon Matin",
      "Entrées & Petits Plats",
      "Planche à Sandwichs",
      "Crêpes Salées",
      "Salades Fraîches",
      "Burgers Spéciaux",
      "Plats Principaux",
      "Pâtes Savoureuses",
      "Les Incontournables",
      "Benedict et au-delà",
      "Omelettes et Cie",
      "Les Classiques",
    ],
  },
  en: {
    top: "Top",
    cover: "⬅ Cover",
    view: "VIEW ITEMS",
    categories: [
      "Mimosas",
      "Cocktails & Sangrias",
      "Beers & Wines",
      "Juices & Smoothies",
      "Milkshakes",
      "Coffee Espresso Bar",
      "Good Morning",
      "Starters & Small Dishes",
      "The Sandwich Board",
      "Savoury Crepes",
      "The Right Saladitude",
      "Eggsecutive Burgers",
      "The Main Event",
      "Eggstraordinary Pasta",
      "Great Eggspectations",
      "Benedict & Beyond",
      "Omelettes Eggectera",
      "The Classics",
    ],
  },
  es: {
    top: "Inicio",
    cover: "⬅ Portada",
    view: "VER PLATOS",
    categories: [
      "Mimosas",
      "Cócteles y Sangrías",
      "Cervezas y Vinos",
      "Jugos y Batidos",
      "Malteadas",
      "Café y Espresso",
      "Buenos Días",
      "Entradas y Tapas",
      "Tablón de Sándwiches",
      "Crepes Salados",
      "Ensaladas",
      "Hamburguesas",
      "Platos Fuertes",
      "Pastas Especiales",
      "Huevos Famosos",
      "Benedict y Más",
      "Omelettes Variados",
      "Los Clásicos",
    ],
  },
  cn: {
    top: "顶部",
    cover: "⬅ 返回",
    view: "查看菜品",
    categories: [
      "含酒香槟",
      "鸡尾酒 & 桑格利亚",
      "啤酒和葡萄酒",
      "果汁和冰沙",
      "奶昔",
      "咖啡和浓缩咖啡",
      "早安套餐",
      "开胃菜 & 小吃",
      "三明治精选",
      "咸味可丽饼",
      "新鲜沙拉",
      "招牌汉堡",
      "主菜推荐",
      "特色意面",
      "经典精选",
      "班尼迪克蛋",
      "煎蛋卷拼盘",
      "传统美味",
    ],
  },
};

export default function MenuPage() {
  const [showTopButton, setShowTopButton] = useState(false);
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  const categories = [
    "mimosas",
    "cocktails",
    "beers_wines",
    "juices_smoothies",
    "milkshakes",
    "coffee",
    "good_morning",
    "starters_small_dishes",
    "sandwich_board",
    "savoury_crepes",
    "saladitude",
    "eggsecutive_burgers",
    "main_event",
    "eggstraordinary_pasta",
    "great_eggspectations",
    "benedict_beyond",
    "omelettes_eggspectera",
    "the_classics",
  ];

  // CORRIGIDO: Função scrollToTop que funciona
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };

  const goToCover = () => {
    router.push("/");
  };

  // Controle de visibilidade do botão Top
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetId = sessionStorage.getItem("returnToCategory");
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      sessionStorage.removeItem("returnToCategory");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      
      {/* Subtle Light Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Light Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-yellow-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white/20 to-blue-50/20 rounded-full blur-2xl"></div>
      </div>

      {/* Header with Sophisticated Lighting */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          {/* SOPHISTICATED Back Button with Restaurant Colors */}
          <button
            onClick={goToCover}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-yellow-400 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Light Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-xl shadow-inner opacity-20"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-serif">{t.cover}</span>
            </div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      {/* Main Content - Maintaining Large Images */}
      <main className="bg-gray-50 min-h-screen">
        {/* Container dos cards - Layout original mantido */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 space-y-6 sm:space-y-8 lg:space-y-10">
          {categories.map((catKey, index) => (
            <div
              key={index}
              id={`${catKey}-section`}
              className="group relative w-full max-w-7xl mx-auto"
            >
              {/* Card Container - Maintaining Original Large Image Design with Light Effects */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 bg-white">
                
                {/* Subtle Light Ring Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl ring-1 ring-white/20 group-hover:ring-2 group-hover:ring-blue-200/30 transition-all duration-500"></div>
                
                {/* Container da imagem - MANTENDO TAMANHO GRANDE ORIGINAL */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] overflow-hidden">
                  <img
                    src={`/categories/${catKey}.jpg`}
                    alt={t.categories[index]}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* MANTENDO Gradiente original - BOM COMO ESTÁ */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  
                  {/* Subtle Light Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-yellow-500/0 group-hover:from-blue-500/5 group-hover:to-yellow-500/5 transition-all duration-700"></div>
                  
                  {/* Overlay de conteúdo - Posicionamento original mantido */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
                    <div className="max-w-2xl lg:max-w-3xl">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl mb-4 sm:mb-6 lg:mb-8 font-serif leading-tight tracking-wide">
                        {t.categories[index]}
                      </h2>
                      
                      {/* SOPHISTICATED Button with Restaurant Colors and Light Effects */}
                      <button
                        onClick={() => {
                          sessionStorage.setItem("returnToCategory", `${catKey}-section`);
                          router.push(`/category/${catKey}`);
                        }}
                        className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-yellow-400 px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-serif font-medium"
                      >
                        {/* Inner Light Glow */}
                        <div className="absolute inset-0 rounded-full shadow-inner opacity-30"></div>
                        
                        {/* Light Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        
                        {/* Button Content */}
                        <div className="relative flex items-center gap-2">
                          <span>{t.view}</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* MANTENDO Borda inferior original - PROFISSIONAL */}
                <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900 opacity-90" />
                
                {/* MANTENDO Efeitos sutis originais */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-inner pointer-events-none opacity-20" />
                
                {/* MANTENDO Highlights premium originais */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Enhanced Light Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* SOPHISTICATED Top Button - CORRIGIDO PARA CANTO INFERIOR DIREITO */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-yellow-400 font-bold px-5 py-4 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 font-serif"
          aria-label="Back to Top"
          style={{ position: 'fixed', bottom: '24px', right: '24px' }}
        >
          {/* Inner Light Glow */}
          <div className="absolute inset-0 rounded-xl shadow-inner opacity-30"></div>
          
          {/* Light Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          
          {/* Button Content */}
          <div className="relative flex items-center gap-2">
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="hidden sm:inline text-sm">{t.top}</span>
          </div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
          
          {/* Pulse Light Effect */}
          <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 animate-pulse"></div>
        </button>
      )}
    </div>
  );
}

