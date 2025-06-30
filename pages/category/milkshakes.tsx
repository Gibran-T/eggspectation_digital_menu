import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Milkshakes",
    subtitle: "Creamy indulgence in every sip",
    back: "Back",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "Vanilla Milkshake",
        description: "Classic vanilla flavour blended to perfection with premium ice cream and fresh milk",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "chocolate-milkshake",
        name: "Chocolate Milkshake",
        description: "Rich chocolate delight with a smooth finish, made with Belgian chocolate",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "strawberry-milkshake",
        name: "Strawberries Milkshake",
        description: "Bursting with real strawberry flavor and fresh berry pieces",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "coffee-milkshake",
        name: "Coffee Milkshake",
        description: "A bold blend for coffee lovers with espresso and vanilla ice cream",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "baileys-add-on",
        name: "Add Bailey's",
        description: "Enhance your milkshake with Bailey's Irish Cream for an adult twist",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
      },
    ],
  },
  fr: {
    title: "Milkshakes",
    subtitle: "Indulgence crémeuse à chaque gorgée",
    back: "Retour",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "Milkshake Vanille",
        description: "Saveur vanille classique parfaitement mixée avec glace premium et lait frais",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "chocolate-milkshake",
        name: "Milkshake Chocolat",
        description: "Délice au chocolat riche et fondant, préparé avec chocolat belge",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "strawberry-milkshake",
        name: "Milkshake Fraise",
        description: "Rempli de saveur de fraise naturelle avec morceaux de fruits frais",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "coffee-milkshake",
        name: "Milkshake Café",
        description: "Un mélange audacieux pour les amateurs de café avec espresso et glace vanille",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "baileys-add-on",
        name: "Ajoutez du Bailey's",
        description: "Rehaussez votre milkshake avec de la crème Bailey's pour une touche adulte",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
      },
    ],
  },
  es: {
    title: "Malteadas",
    subtitle: "Indulgencia cremosa en cada sorbo",
    back: "Volver",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "Malteada de Vainilla",
        description: "Sabor clásico de vainilla perfectamente mezclado con helado premium y leche fresca",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "chocolate-milkshake",
        name: "Malteada de Chocolate",
        description: "Delicia de chocolate rica y suave, hecha con chocolate belga",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "strawberry-milkshake",
        name: "Malteada de Fresa",
        description: "Llena de sabor a fresa natural con trozos de fruta fresca",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "coffee-milkshake",
        name: "Malteada de Café",
        description: "Mezcla intensa para amantes del café con espresso y helado de vainilla",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "baileys-add-on",
        name: "Añadir Bailey's",
        description: "Realza tu malteada con crema irlandesa Bailey's para un toque adulto",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
      },
    ],
  },
  cn: {
    title: "奶昔",
    subtitle: "每一口都是丝滑的享受",
    back: "返回",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "香草奶昔",
        description: "经典香草风味，用优质冰淇淋和新鲜牛奶完美混合",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "chocolate-milkshake",
        name: "巧克力奶昔",
        description: "浓郁巧克力风味，丝滑口感，采用比利时巧克力制作",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "strawberry-milkshake",
        name: "草莓奶昔",
        description: "充满天然草莓风味，含有新鲜浆果颗粒",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "coffee-milkshake",
        name: "咖啡奶昔",
        description: "为咖啡爱好者调配的浓郁风味，含浓缩咖啡和香草冰淇淋",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
      },
      {
        id: "baileys-add-on",
        name: "添加百利甜",
        description: "为奶昔增添百利甜酒香风味，成人专享",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
      },
    ],
  },
};

const getBadgeInfo = (item) => {
  if (item.featured) return { text: 'Classic', color: 'bg-amber-500' };
  if (item.premium) return { text: 'Premium', color: 'bg-purple-600' };
  if (item.special) return { text: 'Fresh', color: 'bg-pink-500' };
  if (item.energizing) return { text: 'Energizing', color: 'bg-orange-600' };
  if (item.addon) return { text: 'Add-On', color: 'bg-emerald-600' };
  return { text: 'Creamy', color: 'bg-blue-500' };
};

export default function MilkshakesPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden font-serif">
      
      {/* Unique Milkshake Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* Cream Swirls */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-40 w-48 h-48 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-2xl"></div>
        
        {/* Floating Cream Dots */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-pink-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-blue-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-pink-200 rounded-full opacity-35"></div>
      </div>

      {/* Header */}
      <header className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90">
              <svg className="w-5 h-5 text-purple-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-serif font-medium text-purple-900">{t.back}</span>
            </button>
          </Link>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-900/30 to-transparent"></div>
            <span className="text-3xl">{t.accent}</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-900/30 to-transparent"></div>
          </div>
          
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-purple-900 mb-4 uppercase tracking-wide">
            {t.title}
          </h1>
          
          <div className="relative inline-block">
            <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-purple-900/70 mb-6">
              {t.subtitle}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        {/* Tablet-optimized grid layout: Portrait (3 cards) / Landscape (4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {t.items.map((item, index) => {
            const badge = getBadgeInfo(item);
            return (
              <article
                key={item.id}
                className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Card container with glassmorphism - no fixed height for full text display */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                  
                  {/* Unique Milkshake Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b group-hover:from-pink-400/5 group-hover:via-purple-400/5 group-hover:to-blue-400/5 transition-all duration-500 rounded-3xl"></div>

                  {/* Cream Swirl Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-sm"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-300/20 to-pink-300/20 rounded-full blur-sm"></div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden rounded-t-3xl">
                    {/* Tablet-optimized images: object-cover for tablet, object-contain for PC */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center xl:object-contain 2xl:object-contain group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${badge.color}`}>
                        {badge.text}
                      </div>
                    </div>

                    {/* Cream Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Section - no height restrictions for full text display */}
                  <div className="relative p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl text-purple-900 mb-3 group-hover:text-purple-800 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      {/* Full text display without truncation */}
                      <p className="font-serif font-light text-sm md:text-base lg:text-sm xl:text-base text-purple-900/70 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Price Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-purple-900/10">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-purple-800">
                          ${item.price}
                        </span>
                        <span className="font-serif font-medium text-sm text-purple-900/50">
                          CAD
                        </span>
                      </div>
                      
                      {/* Cream Drop Icon */}
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 md:px-6 lg:px-8 pb-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-900/30 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-900/30 to-transparent"></div>
          </div>
          <p className="font-serif font-light text-purple-900/60 text-sm italic">
            Handcrafted with love and premium ingredients
          </p>
        </div>
      </footer>
    </div>
  );
}

