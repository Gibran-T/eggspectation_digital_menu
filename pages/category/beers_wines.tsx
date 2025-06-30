import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useRouter } from "next/router";

const translations = {
  en: {
    back: "Back",
    title: "Beers & Wines",
    subtitle: "Crafted selections for the discerning palate",
    items: [
      {
        id: "draft-beers",
        name: "Blond & Dark Draft Beers",
        description: "Selection of local draft beers, blond and dark styles",
        price: "9.00",
        featured: true,
        image: "/images/DRAFT_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "bottle-beers", 
        name: "Bottle Beers",
        description: "Available: Heineken, Sol",
        price: "8.00",
        premium: false,
        image: "/images/BOTTLE_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "house-wines",
        name: "House Wines",
        description: "Red, Rosé, White - Available in 6oz, 9oz, and Bottle. Please ask your server for other wine options",
        price: "6oz 10 / 9oz 14 / Bottle 32",
        special: true,
        image: "/images/HOUSE_WINES_LANDSCAPE.jpg"
      }
    ]
  },
  fr: {
    back: "Retour",
    title: "Bières & Vins",
    subtitle: "Sélections artisanales pour les palais exigeants",
    items: [
      {
        id: "draft-beers",
        name: "Bières pression blondes & brunes",
        description: "Sélection locale de bières blondes et brunes",
        price: "9.00",
        featured: true,
        image: "/images/DRAFT_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "bottle-beers",
        name: "Bières en bouteille", 
        description: "Disponibles : Heineken, Sol",
        price: "8.00",
        premium: false,
        image: "/images/BOTTLE_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "house-wines",
        name: "Vins maison",
        description: "Rouge, Rosé, Blanc - Servis en 6oz, 9oz ou bouteille. Demandez les autres options disponibles à votre serveur",
        price: "6oz 10 / 9oz 14 / Bouteille 32",
        special: true,
        image: "/images/HOUSE_WINES_LANDSCAPE.jpg"
      }
    ]
  },
  es: {
    back: "Volver",
    title: "Cervezas y Vinos",
    subtitle: "Selecciones artesanales para paladares exigentes",
    items: [
      {
        id: "draft-beers",
        name: "Cervezas de barril rubias y oscuras",
        description: "Selección de cervezas locales, estilos rubia y oscura",
        price: "9.00",
        featured: true,
        image: "/images/DRAFT_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "bottle-beers",
        name: "Cervezas en botella",
        description: "Disponibles: Heineken, Sol",
        price: "8.00", 
        premium: false,
        image: "/images/BOTTLE_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "house-wines",
        name: "Vinos de la casa",
        description: "Tinto, Rosado, Blanco - Disponible en 6oz, 9oz y botella. Pregunte por otras opciones disponibles",
        price: "6oz 10 / 9oz 14 / Botella 32",
        special: true,
        image: "/images/HOUSE_WINES_LANDSCAPE.jpg"
      }
    ]
  },
  cn: {
    back: "返回",
    title: "啤酒和葡萄酒",
    subtitle: "为挑剔味蕾精心挑选",
    items: [
      {
        id: "draft-beers",
        name: "淡色和黑啤",
        description: "本地精选淡色和黑色啤酒",
        price: "9.00",
        featured: true,
        image: "/images/DRAFT_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "bottle-beers",
        name: "瓶装啤酒",
        description: "提供：Heineken 和 Sol",
        price: "8.00",
        premium: false,
        image: "/images/BOTTLE_BEERS_LANDSCAPE.jpg"
      },
      {
        id: "house-wines",
        name: "餐厅精选葡萄酒",
        description: "红、桃红、白 - 提供 6oz、9oz 或整瓶。如需其他选择，请咨询服务员",
        price: "6oz 10 / 9oz 14 / 瓶装 32",
        special: true,
        image: "/images/HOUSE_WINES_LANDSCAPE.jpg"
      }
    ]
  }
};

export default function BeersWinesPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-900 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-amber-500 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-blue-900 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-amber-500 rounded-full"></div>
      </div>

      {/* Header */}
      <header className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex items-center justify-between mb-8">
          <button
  onClick={() => router.push("/menu")}
  className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80"
>
  <svg className="w-5 h-5 text-blue-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  <span className="font-serif font-medium text-blue-900">{t.back}</span>
</button>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-900 mb-4 uppercase tracking-wide">
            {t.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-blue-900/30"></div>
            <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-blue-900/70">
              {t.subtitle}
            </p>
            <div className="w-8 h-px bg-blue-900/30"></div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {t.items.map((item, index) => (
            <article
              key={item.id}
              className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Card Container - Increased height for better text spacing */}
              <div className="relative h-[480px] md:h-[520px] lg:h-[480px] xl:h-[520px] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                
                {/* Background with Glassmorphism */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b group-hover:from-amber-400/5 group-hover:via-blue-400/5 group-hover:to-purple-400/5 transition-all duration-500 rounded-3xl"></div>

                {/* Image Container - Reduced height to give more space for text */}
                <div className="relative h-64 md:h-72 lg:h-64 xl:h-72 overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${
                      item.featured ? 'bg-amber-500' : 
                      item.premium ? 'bg-blue-500' : 
                      'bg-purple-500'
                    }`}>
                      {item.featured ? 'Popular' : item.premium ? 'Premium' : 'Special'}
                    </div>
                  </div>
                </div>

                {/* Content - Increased height and better spacing */}
                <div className="relative p-6 h-[216px] md:h-[248px] lg:h-[216px] xl:h-[248px] flex flex-col justify-between">
                  <div className="flex-1">
                    <h2 className="font-serif font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                      {item.name}
                    </h2>
                    <p className="font-serif font-light text-sm md:text-base lg:text-sm xl:text-base text-blue-900/70 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Price section with better positioning */}
                  <div className="flex items-center justify-between pt-4 border-t border-blue-900/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-blue-800">
                        ${item.price}
                      </span>
                      <span className="font-serif font-medium text-sm text-blue-900/50">
                        CAD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 md:px-6 lg:px-8 pb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
          </div>
          <p className="font-serif font-light text-blue-900/60 text-sm">
            Crafted with excellence in Montreal
          </p>
        </div>
      </footer>
    </div>
  );
}

