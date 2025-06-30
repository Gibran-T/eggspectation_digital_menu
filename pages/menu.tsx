import React, { useRef, useEffect } from "react";
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
  const mainRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToCover = () => {
    router.push("/");
  };

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
    <main ref={mainRef} className="bg-gray-50 min-h-screen overflow-y-scroll">
      {/* Header fixo com botão de voltar */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={goToCover}
            className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition text-sm font-sans"
          >
            {t.cover}
          </button>
        </div>
      </div>

      {/* Container dos cards - Layout profissional balanceado */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 space-y-6 sm:space-y-8 lg:space-y-10">
        {categories.map((catKey, index) => (
          <div
            key={index}
            id={`${catKey}-section`}
            className="group relative w-full max-w-7xl mx-auto"
          >
            {/* Card Container - Proporções profissionalmente balanceadas */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 bg-white">
              
              {/* Container da imagem com aspect ratio otimizado */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] overflow-hidden">
                <img
                  src={`/categories/${catKey}.jpg`}
                  alt={t.categories[index]}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradiente otimizado para proeminência da imagem e legibilidade do texto */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
                
                {/* Gradiente inferior para área do botão */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                
                {/* Overlay de conteúdo - Posicionamento profissional */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
                  <div className="max-w-2xl lg:max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl mb-4 sm:mb-6 lg:mb-8 font-serif leading-tight tracking-wide">
                      {t.categories[index]}
                    </h2>
                    
                    <button
                      onClick={() => {
                        sessionStorage.setItem("returnToCategory", `${catKey}-section`);
                        router.push(`/category/${catKey}`);
                      }}
                      className="bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-base sm:text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-sans font-medium"
                    >
                      {t.view}
                    </button>
                  </div>
                </div>
              </div>

              {/* Borda inferior profissional */}
              <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900 opacity-90" />
              
              {/* Efeitos sutis de profundidade */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-inner pointer-events-none opacity-20" />
              
              {/* Highlights premium */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Botão de voltar ao topo */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-xl hover:scale-110 transition-all duration-300 z-50 font-sans text-sm sm:text-base"
        aria-label="Back to Top"
      >
        🔝 <span className="hidden sm:inline ml-1">{t.top}</span>
      </button>
    </main>
  );
}

