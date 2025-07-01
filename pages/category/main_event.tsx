// pages/category/main_event.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "The Main Event",
    subtitle: "Whether you're looking for lunch or dinner, these world-class dishes are perfect for a romantic tête-à-tête or a meal with the gang",
    back: "Back",
    badges: {
      signature: "Signature",
      premium: "Premium", 
      classic: "Classic",
      gourmet: "Gourmet",
      steakhouse: "Steakhouse",
      comfort: "Comfort",
      fresh: "Fresh",
      traditional: "Traditional",
      elegant: "Elegant",
      hearty: "Hearty",
      artisanal: "Artisanal",
      grilled: "Grilled",
      crispy: "Crispy",
      tender: "Tender",
      savory: "Savory",
      rustic: "Rustic",
      mediterranean: "Mediterranean"
    },
    items: [
      {
        id: "steak-frites",
        name: "Steak Frites",
        description: "A 12 oz. Rib steak, cooked to your preference and served with fries and herbed garlic butter",
        price: "39.45",
        steakhouse: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_FRITES.jpg"
      },
      {
        id: "chicken-parm",
        name: "Chicken Parm",
        description: "A lightly breaded chicken breast broiled with mozzarella and served with our famous tomato sauce on a bed of tagliatelle",
        price: "26.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_PARM.jpg"
      },
      {
        id: "fish-n-chip",
        name: "Fish 'N Chip",
        description: "A beautifully golden piece of cod served with fries, our homemade coleslaw and tartar sauce",
        price: "24.95",
        traditional: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FISH_N_CHIP.jpg"
      },
      {
        id: "salmon-atlantic-cedar",
        name: "Salmon Atlantic Cedar Plank Maple BBQ",
        description: "On the spinach rice 8 oz serve with Spanish rice, green mix salad and mashed potato or fries",
        price: "24.95",
        gourmet: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SALMON_ATLANTIC_CEDAR.jpg"
      },
      {
        id: "lamb-chops",
        name: "Lamb Chops",
        description: "3 pieces of Lamb chops, cooked to your preference and served with Spanish rice, green mixed salad and choice of mashed potato, fries or our Lyonnaise style potatoes",
        price: "35.95",
        premium: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LAMB_CHOPS.jpg"
      },
      {
        id: "hamburger-steak",
        name: "Hamburger Steak",
        description: "6 oz Ground beef meat, with brown gravy and caramelized onion on the top serve with mashed potato, green mixed salad or fries",
        price: "17.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAMBURGER_STEAK.jpg"
      },
      {
        id: "chicken-skewer",
        name: "Chicken Skewer",
        description: "Served with rice, our Lyonnaise style potatoes and green mixed salad",
        price: "24.95",
        grilled: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CHICKEN_SKEWER.jpg"
      }
    ],
    footer: {
      message: "World-class cuisine crafted with Montreal passion and precision",
      tagline: "Where every dish is the star of your dining experience"
    }
  },
  fr: {
    title: "L'Événement Principal",
    subtitle: "Que vous cherchiez un déjeuner ou un dîner, ces plats de classe mondiale sont parfaits pour un tête-à-tête romantique ou un repas entre amis",
    back: "Retour",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Classique",
      gourmet: "Gourmet",
      steakhouse: "Steakhouse",
      comfort: "Réconfort",
      fresh: "Frais",
      traditional: "Traditionnel",
      elegant: "Élégant",
      hearty: "Copieux",
      artisanal: "Artisanal",
      grilled: "Grillé",
      crispy: "Croustillant",
      tender: "Tendre",
      savory: "Savoureux",
      rustic: "Rustique",
      mediterranean: "Méditerranéen"
    },
    items: [
      {
        id: "steak-frites",
        name: "Steak Frites",
        description: "Un steak de côte de 12 oz, cuit selon votre préférence et servi avec frites et beurre à l'ail aux herbes",
        price: "39.45",
        steakhouse: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_FRITES.jpg"
      },
      {
        id: "chicken-parm",
        name: "Poulet Parmigiana",
        description: "Une poitrine de poulet légèrement panée grillée avec mozzarella et servie avec notre fameuse sauce tomate sur un lit de tagliatelles",
        price: "26.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_PARM.jpg"
      },
      {
        id: "fish-n-chip",
        name: "Fish 'N Chip",
        description: "Un magnifique morceau de morue doré servi avec frites, notre salade de chou maison et sauce tartare",
        price: "24.95",
        traditional: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FISH_N_CHIP.jpg"
      },
      {
        id: "salmon-atlantic-cedar",
        name: "Saumon Atlantique Planche de Cèdre BBQ Érable",
        description: "Sur riz aux épinards 8 oz servi avec riz espagnol, salade verte mixte et purée de pommes de terre ou frites",
        price: "24.95",
        gourmet: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SALMON_ATLANTIC_CEDAR.jpg"
      },
      {
        id: "lamb-chops",
        name: "Côtelettes d'Agneau",
        description: "3 morceaux de côtelettes d'agneau, cuites selon votre préférence et servies avec riz espagnol, salade verte mixte et choix de purée de pommes de terre, frites ou nos pommes de terre style lyonnaise",
        price: "35.95",
        premium: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LAMB_CHOPS.jpg"
      },
      {
        id: "hamburger-steak",
        name: "Steak Haché",
        description: "6 oz de viande de bœuf hachée, avec sauce brune et oignon caramélisé sur le dessus servi avec purée de pommes de terre, salade verte mixte ou frites",
        price: "17.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAMBURGER_STEAK.jpg"
      },
      {
        id: "chicken-skewer",
        name: "Brochette de Poulet",
        description: "Servie avec riz, nos pommes de terre style lyonnaise et salade verte mixte",
        price: "24.95",
        grilled: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CHICKEN_SKEWER.jpg"
      }
    ],
    footer: {
      message: "Cuisine de classe mondiale élaborée avec passion et précision montréalaise",
      tagline: "Où chaque plat est la vedette de votre expérience culinaire"
    }
  },
  es: {
    title: "El Evento Principal",
    subtitle: "Ya sea que busques almuerzo o cena, estos platos de clase mundial son perfectos para un tête-à-tête romántico o una comida con la pandilla",
    back: "Volver",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Clásico",
      gourmet: "Gourmet",
      steakhouse: "Steakhouse",
      comfort: "Reconfortante",
      fresh: "Fresco",
      traditional: "Tradicional",
      elegant: "Elegante",
      hearty: "Abundante",
      artisanal: "Artesanal",
      grilled: "A la Parrilla",
      crispy: "Crujiente",
      tender: "Tierno",
      savory: "Sabroso",
      rustic: "Rústico",
      mediterranean: "Mediterráneo"
    },
    items: [
      {
        id: "steak-frites",
        name: "Steak Frites",
        description: "Un bistec de costilla de 12 oz, cocinado a tu preferencia y servido con papas fritas y mantequilla de ajo con hierbas",
        price: "39.45",
        steakhouse: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_FRITES.jpg"
      },
      {
        id: "chicken-parm",
        name: "Pollo Parmesano",
        description: "Una pechuga de pollo ligeramente empanizada asada con mozzarella y servida con nuestra famosa salsa de tomate sobre una cama de tagliatelle",
        price: "26.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_PARM.jpg"
      },
      {
        id: "fish-n-chip",
        name: "Fish 'N Chip",
        description: "Una hermosa pieza dorada de bacalao servida con papas fritas, nuestra ensalada de col casera y salsa tártara",
        price: "24.95",
        traditional: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FISH_N_CHIP.jpg"
      },
      {
        id: "salmon-atlantic-cedar",
        name: "Salmón Atlántico Tabla de Cedro BBQ Arce",
        description: "Sobre arroz con espinacas 8 oz servido con arroz español, ensalada verde mixta y puré de papas o papas fritas",
        price: "24.95",
        gourmet: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SALMON_ATLANTIC_CEDAR.jpg"
      },
      {
        id: "lamb-chops",
        name: "Chuletas de Cordero",
        description: "3 piezas de chuletas de cordero, cocinadas a tu preferencia y servidas con arroz español, ensalada verde mixta y elección de puré de papas, papas fritas o nuestras papas estilo lyonesa",
        price: "35.95",
        premium: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LAMB_CHOPS.jpg"
      },
      {
        id: "hamburger-steak",
        name: "Bistec de Hamburguesa",
        description: "6 oz de carne molida de res, con salsa marrón y cebolla caramelizada encima servido con puré de papas, ensalada verde mixta o papas fritas",
        price: "17.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAMBURGER_STEAK.jpg"
      },
      {
        id: "chicken-skewer",
        name: "Brocheta de Pollo",
        description: "Servida con arroz, nuestras papas estilo lyonesa y ensalada verde mixta",
        price: "24.95",
        grilled: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CHICKEN_SKEWER.jpg"
      }
    ],
    footer: {
      message: "Cocina de clase mundial elaborada con pasión y precisión montrealeña",
      tagline: "Donde cada plato es la estrella de tu experiencia gastronómica"
    }
  },
  cn: {
    title: "主要活动",
    subtitle: "无论您是在寻找午餐还是晚餐，这些世界级的菜肴都非常适合浪漫的二人世界或与朋友聚餐",
    back: "返回",
    badges: {
      signature: "招牌",
      premium: "高级",
      classic: "经典",
      gourmet: "美食",
      steakhouse: "牛排屋",
      comfort: "舒适",
      fresh: "新鲜",
      traditional: "传统",
      elegant: "优雅",
      hearty: "丰盛",
      artisanal: "手工",
      grilled: "烧烤",
      crispy: "酥脆",
      tender: "嫩滑",
      savory: "美味",
      rustic: "乡村",
      mediterranean: "地中海"
    },
    items: [
      {
        id: "steak-frites",
        name: "牛排薯条",
        description: "12盎司肋眼牛排，按您的喜好烹制，配薯条和香草蒜蓉黄油",
        price: "39.45",
        steakhouse: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_FRITES.jpg"
      },
      {
        id: "chicken-parm",
        name: "帕尔马鸡肉",
        description: "轻度裹粉的鸡胸肉配马苏里拉奶酪烤制，配我们著名的番茄酱，铺在意大利宽面条上",
        price: "26.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_PARM.jpg"
      },
      {
        id: "fish-n-chip",
        name: "炸鱼薯条",
        description: "一块美丽的金黄色鳕鱼配薯条、我们自制的卷心菜沙拉和塔塔酱",
        price: "24.95",
        traditional: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FISH_N_CHIP.jpg"
      },
      {
        id: "salmon-atlantic-cedar",
        name: "大西洋三文鱼雪松板枫糖烧烤",
        description: "在菠菜米饭上8盎司配西班牙米饭、混合绿色沙拉和土豆泥或薯条",
        price: "24.95",
        gourmet: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SALMON_ATLANTIC_CEDAR.jpg"
      },
      {
        id: "lamb-chops",
        name: "羊排",
        description: "3块羊排，按您的喜好烹制，配西班牙米饭、混合绿色沙拉和选择土豆泥、薯条或我们的里昂式土豆",
        price: "35.95",
        premium: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LAMB_CHOPS.jpg"
      },
      {
        id: "hamburger-steak",
        name: "汉堡牛排",
        description: "6盎司牛肉碎，配棕色肉汁和焦糖洋葱在顶部，配土豆泥、混合绿色沙拉或薯条",
        price: "17.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAMBURGER_STEAK.jpg"
      },
      {
        id: "chicken-skewer",
        name: "鸡肉串",
        description: "配米饭、我们的里昂式土豆和混合绿色沙拉",
        price: "24.95",
        grilled: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CHICKEN_SKEWER.jpg"
      }
    ],
    footer: {
      message: "以蒙特利尔的激情和精准工艺制作的世界级美食",
      tagline: "每道菜都是您用餐体验的明星"
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
  if (item.steakhouse) return { text: badges.steakhouse, color: 'bg-red-800' };
  if (item.premium) return { text: badges.premium, color: 'bg-purple-700' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-yellow-600' };
  if (item.comfort) return { text: badges.comfort, color: 'bg-orange-600' };
  if (item.traditional) return { text: badges.traditional, color: 'bg-blue-700' };
  if (item.hearty) return { text: badges.hearty, color: 'bg-amber-700' };
  if (item.grilled) return { text: badges.grilled, color: 'bg-green-700' };
  if (item.elegant) return { text: badges.elegant, color: 'bg-indigo-700' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-emerald-600' };
  if (item.tender) return { text: badges.tender, color: 'bg-pink-600' };
  if (item.crispy) return { text: badges.crispy, color: 'bg-orange-500' };
  if (item.savory) return { text: badges.savory, color: 'bg-brown-600' };
  if (item.rustic) return { text: badges.rustic, color: 'bg-stone-600' };
  if (item.mediterranean) return { text: badges.mediterranean, color: 'bg-cyan-700' };
  return { text: badges.signature, color: "bg-slate-700" };
};

export default function MainEventPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Elegant Fine Dining Theme */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-slate-400 to-gray-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-stone-300 to-slate-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-gray-400 to-stone-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-slate-300 to-gray-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-stone-300 to-slate-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Fine Dining Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🥩</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🍽️</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🐟</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🍷</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">🔥</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">⭐</div>
        <div className="absolute top-1/4 right-1/6 text-3xl opacity-25 transform rotate-30">🧄</div>
        <div className="absolute bottom-1/4 left-1/6 text-4xl opacity-20 transform -rotate-30">🌿</div>
      </div>

      {/* Header Section */}
      <header className="w-full px-6 pt-10 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-slate-900 font-semibold">{t.back}</span>
            </button>
          </Link>
        </div>
        
        <div className="text-center w-full">
          {/* Decorative Line with Fine Dining Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🍽️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Star Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">⭐</span>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content - Tablet Responsive Layout */}
      <main className="px-6 pb-20 pt-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {t.items.map((item) => {
            const badge = getBadgeInfo(item, t.badges);
            return (
              <article 
                key={item.id} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-slate-200/40 w-full"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${badge.color} backdrop-blur-sm`}>
                    {badge.text}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  {/* Full text without truncation */}
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  {/* Price Section */}
                  <div className="pt-4 border-t border-slate-200/60 flex justify-between items-center">
                    <span className="text-xl font-bold text-slate-900">${item.price}</span>
                    <span className="text-sm text-slate-700 font-semibold">CAD</span>
                  </div>
                  
                  {/* Allergens and Spiciness - moved to bottom right */}
                  <div className="flex gap-3 items-center justify-end">
                    {renderSpicinessIcons(item.spiciness)}
                    {renderAllergens(item.allergens)}
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
            <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-stone-400 rounded-full mx-2"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-stone-400 to-slate-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-stone-400 rounded-full"></div>
          </div>
          
          <p className="text-slate-800 font-semibold text-lg mb-2">
            {t.footer.message}
          </p>
          
          <p className="text-slate-700 italic text-sm">
            {t.footer.tagline}
          </p>
          
          {/* Final Decorative Line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1 max-w-24"></div>
            <span className="text-2xl mx-3">🌟</span>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1 max-w-24"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

