import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useRouter } from "next/router";

const translations = {
  en: {
    back: "Back",
    title: "Beverages",
    subtitle: "Fresh & vibrant selections to energize your day",
    smoothies: {
      title: "Smoothies",
      subtitle: "Tropical blends crafted with fresh fruits",
      accent: "🌴",
      items: [
        {
          id: "tropical-teaser",
          name: "Tropical Teaser",
          description: "Exotic blend of tropical fruits with a refreshing twist",
          price: "9.00",
          featured: true,
          image: "/images/TROPICAL_TEASER_LANDSCAPE.jpg"
        },
        {
          id: "banana-java",
          name: "Banana Java",
          description: "Rich coffee blend with creamy banana and natural sweetness",
          price: "9.00",
          premium: true,
          image: "/images/BANANA_JAVA_LANDSCAPE.jpg"
        },
        {
          id: "green-light",
          name: "Green Light",
          description: "Energizing green smoothie packed with nutrients and vitality",
          price: "9.00",
          healthy: true,
          image: "/images/GREEN_LIGHT_LANDSCAPE.jpg"
        },
        {
          id: "page-tropical-paradise",
          name: "Pagé A Tropical Paradise",
          description: "Premium tropical escape in a glass with exotic fruit medley",
          price: "9.50",
          special: true,
          image: "/images/PAGE_TROPICAL_PARADISE_LANDSCAPE.jpg"
        },
        {
          id: "go-banana",
          name: "Go Banana",
          description: "Pure banana bliss with creamy texture and natural energy",
          price: "9.50",
          energizing: true,
          image: "/images/GO_BANANA_LANDSCAPE.jpg"
        }
      ]
    },
    juiceBar: {
      title: "Juice Bar",
      subtitle: "Freshly squeezed vitality in every sip",
      accent: "🍊",
      items: [
        {
          id: "cranberry-juice",
          name: "Cranberry",
          description: "Pure cranberry juice with antioxidant benefits and tart flavor",
          price: "5.00",
          antioxidant: true,
          image: "/images/CRANBERRY_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "apple-juice",
          name: "Apple",
          description: "Classic apple juice, crisp and naturally sweet",
          price: "5.00",
          classic: true,
          image: "/images/APPLE_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "tomato-juice",
          name: "Tomato",
          description: "Fresh tomato juice with savory richness and vitamins",
          price: "5.50",
          savory: true,
          image: "/images/TOMATO_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "grapefruit-juice",
          name: "Freshly Squeezed Grapefruit",
          description: "Vibrant grapefruit juice, freshly squeezed with citrus zing",
          price: "8.00",
          fresh: true,
          image: "/images/GRAPEFRUIT_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "orange-juice",
          name: "Freshly Squeezed Orange",
          description: "Premium orange juice, squeezed fresh daily for maximum flavor",
          price: "8.00",
          premium: true,
          image: "/images/ORANGE_JUICE_LANDSCAPE.jpg"
        }
      ]
    }
  },
  fr: {
    back: "Retour",
    title: "Boissons",
    subtitle: "Sélections fraîches et vibrantes pour énergiser votre journée",
    smoothies: {
      title: "Smoothies",
      subtitle: "Mélanges tropicaux préparés avec des fruits frais",
      accent: "🌴",
      items: [
        {
          id: "tropical-teaser",
          name: "Tropical Teaser",
          description: "Mélange exotique de fruits tropicaux avec une touche rafraîchissante",
          price: "9.00",
          featured: true,
          image: "/images/TROPICAL_TEASER_LANDSCAPE.jpg"
        },
        {
          id: "banana-java",
          name: "Banana Java",
          description: "Mélange riche de café avec banane crémeuse et douceur naturelle",
          price: "9.00",
          premium: true,
          image: "/images/BANANA_JAVA_LANDSCAPE.jpg"
        },
        {
          id: "green-light",
          name: "Green Light",
          description: "Smoothie vert énergisant rempli de nutriments et de vitalité",
          price: "9.00",
          healthy: true,
          image: "/images/GREEN_LIGHT_LANDSCAPE.jpg"
        },
        {
          id: "page-tropical-paradise",
          name: "Pagé A Tropical Paradise",
          description: "Évasion tropicale premium dans un verre avec mélange de fruits exotiques",
          price: "9.50",
          special: true,
          image: "/images/PAGE_TROPICAL_PARADISE_LANDSCAPE.jpg"
        },
        {
          id: "go-banana",
          name: "Go Banana",
          description: "Pur bonheur de banane avec texture crémeuse et énergie naturelle",
          price: "9.50",
          energizing: true,
          image: "/images/GO_BANANA_LANDSCAPE.jpg"
        }
      ]
    },
    juiceBar: {
      title: "Bar à Jus",
      subtitle: "Vitalité fraîchement pressée dans chaque gorgée",
      accent: "🍊",
      items: [
        {
          id: "cranberry-juice",
          name: "Canneberge",
          description: "Jus de canneberge pur avec bienfaits antioxydants et saveur acidulée",
          price: "5.00",
          antioxidant: true,
          image: "/images/CRANBERRY_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "apple-juice",
          name: "Pomme",
          description: "Jus de pomme classique, croquant et naturellement sucré",
          price: "5.00",
          classic: true,
          image: "/images/APPLE_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "tomato-juice",
          name: "Tomate",
          description: "Jus de tomate frais avec richesse savoureuse et vitamines",
          price: "5.50",
          savory: true,
          image: "/images/TOMATO_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "grapefruit-juice",
          name: "Pamplemousse Fraîchement Pressé",
          description: "Jus de pamplemousse vibrant, fraîchement pressé avec zeste d'agrumes",
          price: "8.00",
          fresh: true,
          image: "/images/GRAPEFRUIT_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "orange-juice",
          name: "Orange Fraîchement Pressée",
          description: "Jus d'orange premium, pressé frais quotidiennement pour un maximum de saveur",
          price: "8.00",
          premium: true,
          image: "/images/ORANGE_JUICE_LANDSCAPE.jpg"
        }
      ]
    }
  },
  es: {
    back: "Volver",
    title: "Bebidas",
    subtitle: "Selecciones frescas y vibrantes para energizar tu día",
    smoothies: {
      title: "Smoothies",
      subtitle: "Mezclas tropicales elaboradas con frutas frescas",
      accent: "🌴",
      items: [
        {
          id: "tropical-teaser",
          name: "Tropical Teaser",
          description: "Mezcla exótica de frutas tropicales con un toque refrescante",
          price: "9.00",
          featured: true,
          image: "/images/TROPICAL_TEASER_LANDSCAPE.jpg"
        },
        {
          id: "banana-java",
          name: "Banana Java",
          description: "Rica mezcla de café con plátano cremoso y dulzura natural",
          price: "9.00",
          premium: true,
          image: "/images/BANANA_JAVA_LANDSCAPE.jpg"
        },
        {
          id: "green-light",
          name: "Green Light",
          description: "Smoothie verde energizante lleno de nutrientes y vitalidad",
          price: "9.00",
          healthy: true,
          image: "/images/GREEN_LIGHT_LANDSCAPE.jpg"
        },
        {
          id: "page-tropical-paradise",
          name: "Pagé A Tropical Paradise",
          description: "Escape tropical premium en un vaso con mezcla de frutas exóticas",
          price: "9.50",
          special: true,
          image: "/images/PAGE_TROPICAL_PARADISE_LANDSCAPE.jpg"
        },
        {
          id: "go-banana",
          name: "Go Banana",
          description: "Pura felicidad de plátano con textura cremosa y energía natural",
          price: "9.50",
          energizing: true,
          image: "/images/GO_BANANA_LANDSCAPE.jpg"
        }
      ]
    },
    juiceBar: {
      title: "Bar de Jugos",
      subtitle: "Vitalidad recién exprimida en cada sorbo",
      accent: "🍊",
      items: [
        {
          id: "cranberry-juice",
          name: "Arándano",
          description: "Jugo puro de arándano con beneficios antioxidantes y sabor ácido",
          price: "5.00",
          antioxidant: true,
          image: "/images/CRANBERRY_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "apple-juice",
          name: "Manzana",
          description: "Jugo de manzana clásico, crujiente y naturalmente dulce",
          price: "5.00",
          classic: true,
          image: "/images/APPLE_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "tomato-juice",
          name: "Tomate",
          description: "Jugo de tomate fresco con riqueza sabrosa y vitaminas",
          price: "5.50",
          savory: true,
          image: "/images/TOMATO_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "grapefruit-juice",
          name: "Toronja Recién Exprimida",
          description: "Jugo de toronja vibrante, recién exprimido con chispa cítrica",
          price: "8.00",
          fresh: true,
          image: "/images/GRAPEFRUIT_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "orange-juice",
          name: "Naranja Recién Exprimida",
          description: "Jugo de naranja premium, exprimido fresco diariamente para máximo sabor",
          price: "8.00",
          premium: true,
          image: "/images/ORANGE_JUICE_LANDSCAPE.jpg"
        }
      ]
    }
  },
  cn: {
    back: "返回",
    title: "饮品",
    subtitle: "新鲜活力的精选饮品，为您的一天注入能量",
    smoothies: {
      title: "果昔",
      subtitle: "用新鲜水果调制的热带混合饮品",
      accent: "🌴",
      items: [
        {
          id: "tropical-teaser",
          name: "热带诱惑",
          description: "异国热带水果的清爽混合",
          price: "9.00",
          featured: true,
          image: "/images/TROPICAL_TEASER_LANDSCAPE.jpg"
        },
        {
          id: "banana-java",
          name: "香蕉咖啡",
          description: "浓郁咖啡与奶香香蕉的天然甜美组合",
          price: "9.00",
          premium: true,
          image: "/images/BANANA_JAVA_LANDSCAPE.jpg"
        },
        {
          id: "green-light",
          name: "绿色能量",
          description: "富含营养和活力的能量绿色果昔",
          price: "9.00",
          healthy: true,
          image: "/images/GREEN_LIGHT_LANDSCAPE.jpg"
        },
        {
          id: "page-tropical-paradise",
          name: "热带天堂",
          description: "杯中的高级热带度假体验，异国水果大荟萃",
          price: "9.50",
          special: true,
          image: "/images/PAGE_TROPICAL_PARADISE_LANDSCAPE.jpg"
        },
        {
          id: "go-banana",
          name: "香蕉狂欢",
          description: "纯正香蕉的奶香质感和天然能量",
          price: "9.50",
          energizing: true,
          image: "/images/GO_BANANA_LANDSCAPE.jpg"
        }
      ]
    },
    juiceBar: {
      title: "果汁吧",
      subtitle: "每一口都是新鲜榨取的活力",
      accent: "🍊",
      items: [
        {
          id: "cranberry-juice",
          name: "蔓越莓",
          description: "纯正蔓越莓汁，富含抗氧化剂，酸甜可口",
          price: "5.00",
          antioxidant: true,
          image: "/images/CRANBERRY_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "apple-juice",
          name: "苹果",
          description: "经典苹果汁，清脆天然甜美",
          price: "5.00",
          classic: true,
          image: "/images/APPLE_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "tomato-juice",
          name: "番茄",
          description: "新鲜番茄汁，浓郁鲜美，富含维生素",
          price: "5.50",
          savory: true,
          image: "/images/TOMATO_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "grapefruit-juice",
          name: "鲜榨西柚",
          description: "活力西柚汁，每日新鲜榨取，柑橘清香",
          price: "8.00",
          fresh: true,
          image: "/images/GRAPEFRUIT_JUICE_LANDSCAPE.jpg"
        },
        {
          id: "orange-juice",
          name: "鲜榨橙汁",
          description: "高级橙汁，每日新鲜榨取，口感浓郁",
          price: "8.00",
          premium: true,
          image: "/images/ORANGE_JUICE_LANDSCAPE.jpg"
        }
      ]
    }
  }
};

const getBadgeInfo = (item) => {
  if (item.featured) return { text: 'Popular', color: 'bg-amber-500' };
  if (item.premium) return { text: 'Premium', color: 'bg-blue-500' };
  if (item.special) return { text: 'Special', color: 'bg-purple-500' };
  if (item.healthy) return { text: 'Healthy', color: 'bg-green-500' };
  if (item.energizing) return { text: 'Energy', color: 'bg-orange-500' };
  if (item.antioxidant) return { text: 'Antioxidant', color: 'bg-red-500' };
  if (item.classic) return { text: 'Classic', color: 'bg-gray-500' };
  if (item.savory) return { text: 'Savory', color: 'bg-yellow-600' };
  if (item.fresh) return { text: 'Fresh', color: 'bg-teal-500' };
  return { text: 'Featured', color: 'bg-indigo-500' };
};

export default function BeveragesPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const t = translations[language] || translations.en;

  const SectionHeader = ({ title, subtitle, accent, gradient }) => (
    <div className="text-center mb-12 relative">
      <div className={`absolute inset-0 ${gradient} opacity-5 rounded-3xl`}></div>
      <div className="relative py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
          <span className="text-2xl">{accent}</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
        </div>
        <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-blue-900 mb-3 uppercase tracking-wide">
          {title}
        </h2>
        <p className="font-serif font-light italic text-lg md:text-xl text-blue-900/70">
          {subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-900 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-amber-500 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-blue-900 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-amber-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-400 rounded-full opacity-3"></div>
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
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent"></div>
            <span className="text-3xl">🥤</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent"></div>
          </div>
          <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-blue-900/70 leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-6 lg:px-8 pb-16 space-y-20">
        
        {/* Smoothies Section */}
        <section>
          <SectionHeader 
            title={t.smoothies.title}
            subtitle={t.smoothies.subtitle}
            accent={t.smoothies.accent}
            gradient="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
          />
          
          {/* UPDATED: Tablet-optimized grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {t.smoothies.items.map((item, index) => {
              const badge = getBadgeInfo(item);
              return (
                <article
                  key={item.id}
                  className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* UPDATED: Removed fixed height to prevent text truncation */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-b group-hover:from-green-400/5 group-hover:via-blue-400/5 group-hover:to-purple-400/5 transition-all duration-500 rounded-3xl"></div>

                    <div className="relative h-64 md:h-72 overflow-hidden rounded-t-3xl">
                      {/* UPDATED: Added xl:object-contain for PC optimization */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center xl:object-contain 2xl:object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${badge.color}`}>
                          {badge.text}
                        </div>
                      </div>
                    </div>

                    {/* UPDATED: Removed fixed height constraints */}
                    <div className="relative p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-xl md:text-2xl text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                          {item.name}
                        </h3>
                        {/* UPDATED: Removed height restrictions for full text display */}
                        <p className="font-serif font-light text-sm md:text-base text-blue-900/70 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-blue-900/10">
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif font-bold text-2xl md:text-3xl text-blue-800">
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
              );
            })}
          </div>
        </section>

        {/* Juice Bar Section */}
        <section>
          <SectionHeader 
            title={t.juiceBar.title}
            subtitle={t.juiceBar.subtitle}
            accent={t.juiceBar.accent}
            gradient="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
          />
          
          {/* UPDATED: Tablet-optimized grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {t.juiceBar.items.map((item, index) => {
              const badge = getBadgeInfo(item);
              return (
                <article
                  key={item.id}
                  className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* UPDATED: Removed fixed height to prevent text truncation */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-b group-hover:from-orange-400/5 group-hover:via-red-400/5 group-hover:to-pink-400/5 transition-all duration-500 rounded-3xl"></div>

                    <div className="relative h-64 md:h-72 overflow-hidden rounded-t-3xl">
                      {/* UPDATED: Added xl:object-contain for PC optimization */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center xl:object-contain 2xl:object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${badge.color}`}>
                          {badge.text}
                        </div>
                      </div>
                    </div>

                    {/* UPDATED: Removed fixed height constraints */}
                    <div className="relative p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-xl md:text-2xl text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                          {item.name}
                        </h3>
                        {/* UPDATED: Removed height restrictions for full text display */}
                        <p className="font-serif font-light text-sm md:text-base text-blue-900/70 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-blue-900/10">
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif font-bold text-2xl md:text-3xl text-blue-800">
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
              );
            })}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center">
        <div className="flex items-center justify-center gap-4 text-blue-900/40 text-sm font-serif">
          <div className="w-12 h-px bg-blue-900/20"></div>
          <span>Handcrafted with French tradition, served with Montreal passion</span>
          <div className="w-12 h-px bg-blue-900/20"></div>
        </div>
      </footer>
    </div>
  );
}

