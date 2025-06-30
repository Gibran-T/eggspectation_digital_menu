import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Entrées & Petits Plats",
    subtitle: "Delicious, innovative starters and snacks for every taste and appetite",
    back: "Back",
    accent: "🍽️",
    badges: {
      signature: "Signature",
      classic: "Classic",
      premium: "Premium",
      fresh: "Fresh",
      montreal: "Montreal Style",
      artisanal: "Artisanal",
      comfort: "Comfort",
      gourmet: "Gourmet",
      traditional: "Traditional",
      innovative: "Innovative",
      seasonal: "Seasonal",
      healthy: "Healthy",
      indulgent: "Indulgent",
      authentic: "Authentic"
    },
    items: [
      {
        id: "brie-walnut-crostini",
        name: "Brie and Walnut Crostini",
        description: "Ciabatta slices broiled with brie and drizzled with honey. Garnished with walnuts and fresh apple slices",
        price: "13.95",
        artisanal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/BRIE_AND_WALNUT_CROSTINI.jpg"
      },
      {
        id: "montreal-poutine",
        name: "Montreal Poutine",
        description: "A mound of fries covered with smoked meat, cheese curds and our poutine sauce",
        price: "18.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_POUTINE.jpg"
      },
      {
        id: "smoked-salmon-crostini",
        name: "Smoked Salmon Crostini",
        description: "Smoked salmon, served with capers, red onions and cucumbers with cream cheese spread on toast ciabatta slices",
        price: "17.95",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_CROSTINI.jpg"
      },
      {
        id: "classic-poutine",
        name: "Classic Poutine",
        description: "Our take on Quebec's classic late-night staple: a mound of fries smothered in cheese curd and our poutine sauce",
        price: "16.95",
        classic: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_POUTINE.jpg"
      },
      {
        id: "tacos",
        name: "Tacos",
        description: "Choice of three shrimp, three crispy chicken, or three crispy cod tacos made with chopped lettuce, avocado and mango salsa in flour tortillas",
        price: "18.95",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/seafood_icon.png"],
        spiciness: 1,
        image: "/images/TACOS.jpg"
      }
    ]
  },
  fr: {
    title: "Entrées & Petits Plats",
    subtitle: "Délicieuses entrées et collations innovantes pour tous les goûts et appétits",
    back: "Retour",
    accent: "🍽️",
    badges: {
      signature: "Signature",
      classic: "Classique",
      premium: "Premium",
      fresh: "Frais",
      montreal: "Style Montréal",
      artisanal: "Artisanal",
      comfort: "Réconfort",
      gourmet: "Gourmet",
      traditional: "Traditionnel",
      innovative: "Innovant",
      seasonal: "Saisonnier",
      healthy: "Sain",
      indulgent: "Gourmand",
      authentic: "Authentique"
    },
    items: [
      {
        id: "brie-walnut-crostini",
        name: "Crostini au Brie et Noix",
        description: "Tranches de ciabatta grillées avec du brie et arrosées de miel. Garnies de noix et de tranches de pomme fraîche",
        price: "13.95",
        artisanal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/BRIE_AND_WALNUT_CROSTINI.jpg"
      },
      {
        id: "montreal-poutine",
        name: "Poutine Montréalaise",
        description: "Un monticule de frites recouvert de viande fumée, de fromage en grains et de notre sauce poutine",
        price: "18.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_POUTINE.jpg"
      },
      {
        id: "smoked-salmon-crostini",
        name: "Crostini au Saumon Fumé",
        description: "Saumon fumé, servi avec câpres, oignons rouges et concombres avec fromage à la crème étalé sur tranches de ciabatta grillées",
        price: "17.95",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_CROSTINI.jpg"
      },
      {
        id: "classic-poutine",
        name: "Poutine Classique",
        description: "Notre version du classique québécois de fin de soirée : un monticule de frites nappées de fromage en grains et de notre sauce poutine",
        price: "16.95",
        classic: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_POUTINE.jpg"
      },
      {
        id: "tacos",
        name: "Tacos",
        description: "Choix de trois tacos aux crevettes, trois au poulet croustillant, ou trois à la morue croustillante avec laitue hachée, avocat et salsa à la mangue dans tortillas de farine",
        price: "18.95",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/seafood_icon.png"],
        spiciness: 1,
        image: "/images/TACOS.jpg"
      }
    ]
  },
  es: {
    title: "Entrées & Petits Plats",
    subtitle: "Deliciosas entradas y aperitivos innovadores para todos los gustos y apetitos",
    back: "Volver",
    accent: "🍽️",
    badges: {
      signature: "Firma",
      classic: "Clásico",
      premium: "Premium",
      fresh: "Fresco",
      montreal: "Estilo Montreal",
      artisanal: "Artesanal",
      comfort: "Confort",
      gourmet: "Gourmet",
      traditional: "Tradicional",
      innovative: "Innovador",
      seasonal: "Estacional",
      healthy: "Saludable",
      indulgent: "Delicioso",
      authentic: "Auténtico"
    },
    items: [
      {
        id: "brie-walnut-crostini",
        name: "Crostini de Brie y Nueces",
        description: "Rebanadas de ciabatta asadas con brie y rociadas con miel. Adornadas con nueces y rebanadas de manzana fresca",
        price: "13.95",
        artisanal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/BRIE_AND_WALNUT_CROSTINI.jpg"
      },
      {
        id: "montreal-poutine",
        name: "Poutine de Montreal",
        description: "Un montón de papas fritas cubiertas con carne ahumada, cuajada de queso y nuestra salsa poutine",
        price: "18.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_POUTINE.jpg"
      },
      {
        id: "smoked-salmon-crostini",
        name: "Crostini de Salmón Ahumado",
        description: "Salmón ahumado, servido con alcaparras, cebollas rojas y pepinos con queso crema untado en rebanadas de ciabatta tostadas",
        price: "17.95",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_CROSTINI.jpg"
      },
      {
        id: "classic-poutine",
        name: "Poutine Clásico",
        description: "Nuestra versión del clásico nocturno de Quebec: un montón de papas fritas bañadas en cuajada de queso y nuestra salsa poutine",
        price: "16.95",
        classic: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_POUTINE.jpg"
      },
      {
        id: "tacos",
        name: "Tacos",
        description: "Elección de tres tacos de camarón, tres de pollo crujiente, o tres de bacalao crujiente hechos con lechuga picada, aguacate y salsa de mango en tortillas de harina",
        price: "18.95",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/seafood_icon.png"],
        spiciness: 1,
        image: "/images/TACOS.jpg"
      }
    ]
  },
  cn: {
    title: "开胃菜与小食",
    subtitle: "美味创新的开胃菜和小食，满足各种口味和食欲",
    back: "返回",
    accent: "🍽️",
    badges: {
      signature: "招牌",
      classic: "经典",
      premium: "高级",
      fresh: "新鲜",
      montreal: "蒙特利尔风格",
      artisanal: "手工",
      comfort: "温暖",
      gourmet: "美食",
      traditional: "传统",
      innovative: "创新",
      seasonal: "时令",
      healthy: "健康",
      indulgent: "奢华",
      authentic: "正宗"
    },
    items: [
      {
        id: "brie-walnut-crostini",
        name: "布里奶酪核桃脆片",
        description: "烤制的意式面包片配布里奶酪，淋上蜂蜜。配以核桃和新鲜苹果片",
        price: "13.95",
        artisanal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/BRIE_AND_WALNUT_CROSTINI.jpg"
      },
      {
        id: "montreal-poutine",
        name: "蒙特利尔肉汁奶酪薯条",
        description: "一堆薯条配熏肉、奶酪凝乳和我们的肉汁酱",
        price: "18.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_POUTINE.jpg"
      },
      {
        id: "smoked-salmon-crostini",
        name: "烟熏三文鱼脆片",
        description: "烟熏三文鱼，配刺山柑、红洋葱和黄瓜，在烤制的意式面包片上涂抹奶油奶酪",
        price: "17.95",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_CROSTINI.jpg"
      },
      {
        id: "classic-poutine",
        name: "经典肉汁奶酪薯条",
        description: "我们对魁北克经典深夜小食的诠释：一堆薯条配奶酪凝乳和我们的肉汁酱",
        price: "16.95",
        classic: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_POUTINE.jpg"
      },
      {
        id: "tacos",
        name: "玉米饼",
        description: "可选择三个虾肉、三个酥脆鸡肉或三个酥脆鳕鱼玉米饼，配切碎生菜、牛油果和芒果莎莎酱，用面粉玉米饼皮制作",
        price: "18.95",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/seafood_icon.png"],
        spiciness: 1,
        image: "/images/TACOS.jpg"
      }
    ]
  }
};

const renderSpicinessIcons = (level) => {
  if (!level || level === 0) return null;
  return Array.from({ length: level }, (_, i) => (
    <img key={`spice-${i}`} src="/icons/spiciness_icon.png" alt="spice level" className="w-5 h-5" />
  ));
};

const renderAllergens = (icons = []) => {
  return icons.map((icon, i) => (
    <img key={`allergen-${i}`} src={icon} alt="allergen" className="w-6 h-6" />
  ));
};

const getBadgeInfo = (item, badges) => {
  if (item.signature) return { text: badges.signature, color: 'bg-red-600' };
  if (item.montreal) return { text: badges.montreal, color: 'bg-blue-600' };
  if (item.premium) return { text: badges.premium, color: 'bg-purple-600' };
  if (item.artisanal) return { text: badges.artisanal, color: 'bg-amber-600' };
  if (item.classic) return { text: badges.classic, color: 'bg-emerald-600' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-green-500' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-indigo-600' };
  if (item.traditional) return { text: badges.traditional, color: 'bg-orange-600' };
  if (item.innovative) return { text: badges.innovative, color: 'bg-cyan-500' };
  if (item.comfort) return { text: badges.comfort, color: 'bg-rose-500' };
  if (item.seasonal) return { text: badges.seasonal, color: 'bg-teal-500' };
  if (item.healthy) return { text: badges.healthy, color: 'bg-lime-500' };
  if (item.indulgent) return { text: badges.indulgent, color: 'bg-pink-600' };
  if (item.authentic) return { text: badges.authentic, color: 'bg-yellow-600' };
  return { text: "Special", color: "bg-slate-500" };
};

export default function EntreesPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden font-serif">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <header className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90">
              <svg className="w-5 h-5 text-slate-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-serif font-medium text-slate-900">{t.back}</span>
            </button>
          </Link>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-900/30 to-transparent" />
            <span className="text-3xl">{t.accent}</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-900/30 to-transparent" />
          </div>
          
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 mb-4 uppercase tracking-wide">
            {t.title}
          </h1>
          
          <div className="relative inline-block">
            <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-slate-900/70 mb-6 max-w-4xl">
              {t.subtitle}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        
        {/* Tablet-optimized grid layout: Portrait (3 cards) / Landscape (4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {t.items.map((item, index) => {
            const badge = getBadgeInfo(item, t.badges);
            return (
              <article
                key={item.id}
                className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Card container with glassmorphism - no fixed height for full text display */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b group-hover:from-blue-400/5 group-hover:via-indigo-400/5 group-hover:to-purple-400/5 transition-all duration-500 rounded-3xl"></div>

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
                  </div>

                  {/* Content Section - no height restrictions for full text display */}
                  <div className="relative p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      {/* Full text display without truncation */}
                      <p className="font-serif font-light text-sm md:text-base lg:text-sm xl:text-base text-slate-900/70 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Price and Allergens Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-900/10">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-slate-800">
                          ${item.price}
                        </span>
                        <span className="font-serif font-medium text-sm text-slate-900/50">
                          CAD
                        </span>
                      </div>
                      
                      {/* Allergens and Spiciness Icons */}
                      <div className="flex items-center gap-2">
                        {renderSpicinessIcons(item.spiciness)}
                        {renderAllergens(item.allergens)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-900/30 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-900/30 to-transparent"></div>
          </div>
          <p className="font-serif font-light text-slate-900/60 text-sm italic">
            Crafted with passion, served with Montreal flair
          </p>
        </div>
      </main>
    </div>
  );
}

