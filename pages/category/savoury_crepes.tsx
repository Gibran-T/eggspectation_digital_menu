// pages/category/savoury_crepes.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Savoury Crepes",
    subtitle: "A delicious dash of creamy cheese sauce adds a personal touch to this homemade French favourite. A perfect choice - morning, noon and night! Served with mixed green salad.",
    back: "Back",
    accent: "🥞",
    badges: {
      signature: "Signature",
      gourmet: "Gourmet", 
      healthy: "Healthy",
      creamy: "Creamy",
      artisanal: "Artisanal",
      classic: "Classic",
      premium: "Premium",
      fresh: "Fresh",
      comfort: "Comfort",
      traditional: "Traditional",
      elegant: "Elegant",
      authentic: "Authentic",
      delicious: "Delicious",
      special: "Special"
    },
    items: [
      {
        id: "eggspectation-crepe",
        name: "Eggspectation Crepe",
        description: "Scrambled eggs with sautéed ham and a three cheese blend all folded into our tender crepe and topped with our classic hollandaise sauce.",
        price: "18.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_CREPE.jpg"
      },
      {
        id: "heavenly-crepe",
        name: "Heavenly Crepe",
        description: "A delicious homemade crepe filled with grilled chicken, sautéed spinach and mushrooms with a three cheese blend.",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HEAVENLY_CREPE.jpg"
      },
      {
        id: "veggie-dream-crepe",
        name: "Veggie Dream Crepe",
        description: "This crepe is sure to please everyone, stuffed with sautéed mushrooms, spinach, red onions, asparagus and authentic Greek Feta.",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_DREAM_CREPE.jpg"
      }
    ],
    footer: {
      message: "Handcrafted with French tradition, served with Montreal passion",
      tagline: "Where every fold tells a story of culinary artistry"
    }
  },
  fr: {
    title: "Crêpes Salées",
    subtitle: "Une délicieuse touche de sauce au fromage crémeuse ajoute une note personnelle à ce favori français fait maison. Un choix parfait - matin, midi et soir ! Servi avec salade verte mélangée.",
    back: "Retour",
    accent: "🥞",
    badges: {
      signature: "Signature",
      gourmet: "Gourmet",
      healthy: "Sain",
      creamy: "Crémeux",
      artisanal: "Artisanal",
      classic: "Classique",
      premium: "Premium",
      fresh: "Frais",
      comfort: "Réconfort",
      traditional: "Traditionnel",
      elegant: "Élégant",
      authentic: "Authentique",
      delicious: "Délicieux",
      special: "Spécial"
    },
    items: [
      {
        id: "eggspectation-crepe",
        name: "Crêpe Eggspectation",
        description: "Œufs brouillés avec jambon sauté et mélange de trois fromages, le tout plié dans notre crêpe tendre et garni de notre sauce hollandaise classique.",
        price: "18.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_CREPE.jpg"
      },
      {
        id: "heavenly-crepe",
        name: "Crêpe Céleste",
        description: "Une délicieuse crêpe maison garnie de poulet grillé, épinards et champignons sautés avec un mélange de trois fromages.",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HEAVENLY_CREPE.jpg"
      },
      {
        id: "veggie-dream-crepe",
        name: "Crêpe Rêve Végétarien",
        description: "Cette crêpe plaira à tous, farcie de champignons sautés, épinards, oignons rouges, asperges et feta grecque authentique.",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_DREAM_CREPE.jpg"
      }
    ],
    footer: {
      message: "Fabriquées avec tradition française, servies avec passion montréalaise",
      tagline: "Où chaque pli raconte une histoire d'art culinaire"
    }
  },
  es: {
    title: "Crepes Salados",
    subtitle: "Un delicioso toque de salsa cremosa de queso añade un toque personal a este favorito francés casero. ¡Una elección perfecta - mañana, mediodía y noche! Servido con ensalada verde mixta.",
    back: "Volver",
    accent: "🥞",
    badges: {
      signature: "Signature",
      gourmet: "Gourmet",
      healthy: "Saludable",
      creamy: "Cremoso",
      artisanal: "Artesanal",
      classic: "Clásico",
      premium: "Premium",
      fresh: "Fresco",
      comfort: "Reconfortante",
      traditional: "Tradicional",
      elegant: "Elegante",
      authentic: "Auténtico",
      delicious: "Delicioso",
      special: "Especial"
    },
    items: [
      {
        id: "eggspectation-crepe",
        name: "Crepe Eggspectation",
        description: "Huevos revueltos con jamón salteado y mezcla de tres quesos, todo doblado en nuestro tierno crepe y cubierto con nuestra salsa holandesa clásica.",
        price: "18.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_CREPE.jpg"
      },
      {
        id: "heavenly-crepe",
        name: "Crepe Celestial",
        description: "Un delicioso crepe casero relleno de pollo a la parrilla, espinacas salteadas y champiñones con mezcla de tres quesos.",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HEAVENLY_CREPE.jpg"
      },
      {
        id: "veggie-dream-crepe",
        name: "Crepe Sueño Vegetariano",
        description: "Este crepe seguramente complacerá a todos, relleno de champiñones salteados, espinacas, cebollas rojas, espárragos y feta griego auténtico.",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_DREAM_CREPE.jpg"
      }
    ],
    footer: {
      message: "Elaborados con tradición francesa, servidos con pasión montrealeña",
      tagline: "Donde cada pliegue cuenta una historia de arte culinario"
    }
  },
  cn: {
    title: "咸味可丽饼",
    subtitle: "美味的奶油奶酪酱为这道自制法式美食增添了个人风味。完美的选择 - 早中晚皆宜！配混合绿色沙拉。",
    back: "返回",
    accent: "🥞",
    badges: {
      signature: "招牌",
      gourmet: "美食",
      healthy: "健康",
      creamy: "奶香",
      artisanal: "手工",
      classic: "经典",
      premium: "高级",
      fresh: "新鲜",
      comfort: "舒适",
      traditional: "传统",
      elegant: "优雅",
      authentic: "正宗",
      delicious: "美味",
      special: "特色"
    },
    items: [
      {
        id: "eggspectation-crepe",
        name: "Eggspectation可丽饼",
        description: "炒蛋配炒火腿和三种奶酪混合，全部包在我们嫩滑的可丽饼中，淋上经典荷兰酱。",
        price: "18.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_CREPE.jpg"
      },
      {
        id: "heavenly-crepe",
        name: "天堂可丽饼",
        description: "美味的自制可丽饼，填充烤鸡肉、炒菠菜和蘑菇，配三种奶酪混合。",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HEAVENLY_CREPE.jpg"
      },
      {
        id: "veggie-dream-crepe",
        name: "素食梦想可丽饼",
        description: "这款可丽饼一定会让每个人都满意，填充炒蘑菇、菠菜、红洋葱、芦笋和正宗希腊羊奶酪。",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_DREAM_CREPE.jpg"
      }
    ],
    footer: {
      message: "以法式传统手工制作，以蒙特利尔热情呈现",
      tagline: "每一个褶皱都诉说着烹饪艺术的故事"
    }
  }
};

const renderSpicinessIcons = (level) => {
  if (!level || level === 0) return null;
  return (
    <div className="flex gap-1">
      {Array.from({ length: level }, (_, i) => (
        <img key={`spice-${i}`} src="/icons/spiciness_icon.png" alt="spice" className="w-5 h-5" />
      ))}
    </div>
  );
};

const renderAllergens = (icons = []) => {
  if (!icons || icons.length === 0) return null;
  return (
    <div className="flex gap-2 flex-wrap">
      {icons.map((icon, i) => (
        <img key={`allergen-${i}`} src={icon} alt="allergen" className="w-6 h-6" />
      ))}
    </div>
  );
};

const getBadgeInfo = (item, badges) => {
  if (item.signature) return { text: badges.signature, color: 'bg-purple-600' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-yellow-600' };
  if (item.healthy) return { text: badges.healthy, color: 'bg-green-500' };
  if (item.artisanal) return { text: badges.artisanal, color: 'bg-pink-500' };
  if (item.creamy) return { text: badges.creamy, color: 'bg-orange-400' };
  if (item.classic) return { text: badges.classic, color: 'bg-blue-500' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-emerald-500' };
  return { text: badges.delicious, color: "bg-slate-500" };
};

export default function SavouryCrepesPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - French Crepe Theme */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-28 h-28 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-36 h-36 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full blur-2xl transform -rotate-45" />
        
        {/* French Crepe Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-20 transform rotate-12">🥞</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-15 transform -rotate-12">🧀</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🥚</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-20 transform -rotate-45">🌿</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">🍄</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-25 transform -rotate-12">🥓</div>
      </div>

      {/* Header Section */}
      <header className="w-full px-6 pt-10 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-amber-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-amber-900 font-semibold">{t.back}</span>
            </button>
          </Link>
        </div>
        
        <div className="text-center w-full">
          {/* Decorative Line with Crepe Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🥞</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed italic font-medium">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Cheese Emoji */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">🧀</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content - Full Width Layout for Tablet */}
      <main className="px-6 pb-20 pt-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {t.items.map((item) => {
            const badge = getBadgeInfo(item, t.badges);
            return (
              <article 
                key={item.id} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-amber-200/40 w-full"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${badge.color} backdrop-blur-sm`}>
                    {badge.text}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 space-y-5">
                  <h3 className="text-2xl font-bold text-amber-900 leading-tight group-hover:text-amber-800 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-base text-amber-800 leading-relaxed line-clamp-4 font-medium">
                    {item.description}
                  </p>
                  
                  {/* Allergens and Spiciness */}
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex gap-3 items-center">
                      {renderAllergens(item.allergens)}
                    </div>
                    {renderSpicinessIcons(item.spiciness)}
                  </div>
                  
                  {/* Price Section */}
                  <div className="pt-5 border-t border-amber-200/60 flex justify-between items-center">
                    <span className="text-3xl font-bold text-amber-900">${item.price}</span>
                    <span className="text-base text-amber-700 font-semibold">CAD</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10 px-6 pb-8">
        <div className="w-full text-center">
          {/* Decorative Elements */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-2"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
          
          <p className="text-amber-800 font-semibold text-lg mb-2">
            {t.footer.message}
          </p>
          
          <p className="text-amber-700 italic text-sm">
            {t.footer.tagline}
          </p>
          
          {/* Final Decorative Line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-24"></div>
            <span className="text-2xl mx-3">🍽️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-24"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

