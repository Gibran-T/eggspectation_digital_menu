// pages/category/omelettes_eggectera.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Omelettes Eggectera",
    subtitle: "We know that once you've had one of our perfect free run 3-egg omelettes, you'll be back for many more. So we suggest you just start at the top of this list and work your way down. All served with our Lyonnaise-style potatoes. *Except Montrealer Omelette",
    back: "Back",
    lowFat: "Ask for a low-fat version: one yolk with three whites. It maintains the proper amino acid structure, giving it all the benefits of the protein in eggs for 2.95",
    addIngredient: "Add an additional ingredient to your omelette for 2.45",
    substitution: "Substitute Lyonnaise-style potatoes with fresh fruits or house salad 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium", 
      classic: "Classic",
      gourmet: "Gourmet",
      omelette: "Omelette",
      luxury: "Luxury",
      fresh: "Fresh",
      traditional: "Traditional",
      elegant: "Elegant",
      indulgent: "Indulgent",
      artisanal: "Artisanal",
      famous: "Famous",
      specialty: "Specialty",
      montreal: "Montreal",
      seafood: "Seafood",
      spicy: "Spicy",
      crispy: "Crispy",
      prime: "Prime",
      sunrise: "Sunrise",
      veggie: "Veggie",
      meat: "Meat",
      greek: "Greek",
      loaded: "Loaded"
    },
    items: [
      {
        id: "southwest-sunrise",
        name: "Southwest Sunrise",
        description: "A special omelette filled with 3 cheeses mix, peppers, then topped with strip of freshly sliced avocado, our special salsa and sour cream.",
        price: "19.95",
        sunrise: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/SOUTHWEST_SUNRISE.jpg"
      },
      {
        id: "veggie-omelette",
        name: "Veggie Omelette",
        description: "This omelette appeals to everyone, with sautéed mushrooms, peppers, spinach, asparagus and caramelized onions.",
        price: "18.95",
        veggie: true,
        allergens: ["/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_OMELETTE.jpg"
      },
      {
        id: "meat-lovers-omelette",
        name: "Meat Lovers Omelette",
        description: "Filled with bacon, sausage, ham and cheddar cheese.",
        price: "19.95",
        meat: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MEAT_LOVERS_OMELETTE.jpg"
      },
      {
        id: "eggspectation-omelette",
        name: "Eggspectation Omelette",
        description: "Where it all began! Three eggs mixed with mushrooms, onions, peppers, bacon, sausage, ham and cheddar cheese.",
        price: "20.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_OMELETTE.jpg"
      },
      {
        id: "lobster-omelette",
        name: "Lobster Omelette",
        description: "A generous portion of gently sautéed lobster, Swiss cheese and green onions, topped with our classic hollandaise sauce.",
        price: "30.95",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_OMELETTE.jpg"
      },
      {
        id: "montrealer-omelette",
        name: "Montrealer Omelette",
        description: "A true local favorite, filled with smoked meat and Swiss cheese and a pickle. Served with fries.",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_OMELETTE.jpg"
      },
      {
        id: "mykonos-omelette",
        name: "Mykonos Omelette",
        description: "Sundried tomato with red onion, spinach, Kalamata olives and feta cheese topped with oregano.",
        price: "20.95",
        greek: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MYKONOS_OMELETTE.jpg"
      }
    ],
    footer: {
      message: "Perfect free run 3-egg omelettes crafted with Montreal passion",
      tagline: "Where every fold tells a golden story of breakfast perfection"
    }
  },
  fr: {
    title: "Omelettes Eggectera",
    subtitle: "Nous savons qu'une fois que vous aurez goûté une de nos parfaites omelettes à 3 œufs de poules élevées au sol, vous reviendrez pour bien d'autres. Nous suggérons donc de commencer par le haut de cette liste et de descendre. Toutes servies avec nos pommes de terre à la lyonnaise. *Sauf Omelette Montréalaise",
    back: "Retour",
    lowFat: "Demandez une version faible en gras: un jaune avec trois blancs. Cela maintient la structure d'acides aminés appropriée, donnant tous les bénéfices des protéines d'œufs pour 2.95",
    addIngredient: "Ajoutez un ingrédient supplémentaire à votre omelette pour 2.45",
    substitution: "Substituer les pommes de terre à la lyonnaise avec des fruits frais ou salade maison 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Classique",
      gourmet: "Gourmet",
      omelette: "Omelette",
      luxury: "Luxe",
      fresh: "Frais",
      traditional: "Traditionnel",
      elegant: "Élégant",
      indulgent: "Gourmand",
      artisanal: "Artisanal",
      famous: "Célèbre",
      specialty: "Spécialité",
      montreal: "Montréal",
      seafood: "Fruits de Mer",
      spicy: "Épicé",
      crispy: "Croustillant",
      prime: "Prime",
      sunrise: "Lever du Soleil",
      veggie: "Végé",
      meat: "Viande",
      greek: "Grec",
      loaded: "Chargé"
    },
    items: [
      {
        id: "southwest-sunrise",
        name: "Lever du Soleil Sud-Ouest",
        description: "Une omelette spéciale remplie d'un mélange de 3 fromages, poivrons, puis garnie de lanières d'avocat fraîchement tranché, notre salsa spéciale et crème sure.",
        price: "19.95",
        sunrise: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/SOUTHWEST_SUNRISE.jpg"
      },
      {
        id: "veggie-omelette",
        name: "Omelette Végétarienne",
        description: "Cette omelette plaît à tous, avec champignons sautés, poivrons, épinards, asperges et oignons caramélisés.",
        price: "18.95",
        veggie: true,
        allergens: ["/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_OMELETTE.jpg"
      },
      {
        id: "meat-lovers-omelette",
        name: "Omelette Amateurs de Viande",
        description: "Remplie de bacon, saucisse, jambon et fromage cheddar.",
        price: "19.95",
        meat: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MEAT_LOVERS_OMELETTE.jpg"
      },
      {
        id: "eggspectation-omelette",
        name: "Omelette Eggspectation",
        description: "Là où tout a commencé! Trois œufs mélangés avec champignons, oignons, poivrons, bacon, saucisse, jambon et fromage cheddar.",
        price: "20.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_OMELETTE.jpg"
      },
      {
        id: "lobster-omelette",
        name: "Omelette au Homard",
        description: "Une portion généreuse de homard délicatement sauté, fromage suisse et oignons verts, garnie de notre sauce hollandaise classique.",
        price: "30.95",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_OMELETTE.jpg"
      },
      {
        id: "montrealer-omelette",
        name: "Omelette Montréalaise",
        description: "Un vrai favori local, remplie de viande fumée et fromage suisse avec un cornichon. Servie avec frites.",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_OMELETTE.jpg"
      },
      {
        id: "mykonos-omelette",
        name: "Omelette Mykonos",
        description: "Tomate séchée avec oignon rouge, épinards, olives Kalamata et fromage feta garni d'origan.",
        price: "20.95",
        greek: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MYKONOS_OMELETTE.jpg"
      }
    ],
    footer: {
      message: "Parfaites omelettes à 3 œufs de poules élevées au sol créées avec passion montréalaise",
      tagline: "Où chaque pli raconte une histoire dorée de perfection matinale"
    }
  },
  es: {
    title: "Omelettes Eggectera",
    subtitle: "Sabemos que una vez que hayas probado una de nuestras perfectas tortillas de 3 huevos de gallinas criadas en libertad, volverás por muchas más. Así que sugerimos que comiences desde arriba de esta lista y vayas bajando. Todas servidas con nuestras papas estilo lyonnaise. *Excepto Tortilla Montrealeña",
    back: "Volver",
    lowFat: "Pide una versión baja en grasa: una yema con tres claras. Mantiene la estructura de aminoácidos apropiada, dando todos los beneficios de la proteína de los huevos por 2.95",
    addIngredient: "Agrega un ingrediente adicional a tu tortilla por 2.45",
    substitution: "Sustituir papas estilo lyonnaise con frutas frescas o ensalada de la casa 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Clásico",
      gourmet: "Gourmet",
      omelette: "Tortilla",
      luxury: "Lujo",
      fresh: "Fresco",
      traditional: "Tradicional",
      elegant: "Elegante",
      indulgent: "Indulgente",
      artisanal: "Artesanal",
      famous: "Famoso",
      specialty: "Especialidad",
      montreal: "Montreal",
      seafood: "Mariscos",
      spicy: "Picante",
      crispy: "Crujiente",
      prime: "Prime",
      sunrise: "Amanecer",
      veggie: "Veggie",
      meat: "Carne",
      greek: "Griego",
      loaded: "Cargado"
    },
    items: [
      {
        id: "southwest-sunrise",
        name: "Amanecer del Suroeste",
        description: "Una tortilla especial rellena con mezcla de 3 quesos, pimientos, luego cubierta con tiras de aguacate recién rebanado, nuestra salsa especial y crema agria.",
        price: "19.95",
        sunrise: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/SOUTHWEST_SUNRISE.jpg"
      },
      {
        id: "veggie-omelette",
        name: "Tortilla Vegetariana",
        description: "Esta tortilla atrae a todos, con champiñones salteados, pimientos, espinacas, espárragos y cebollas caramelizadas.",
        price: "18.95",
        veggie: true,
        allergens: ["/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_OMELETTE.jpg"
      },
      {
        id: "meat-lovers-omelette",
        name: "Tortilla Amantes de la Carne",
        description: "Rellena con tocino, salchicha, jamón y queso cheddar.",
        price: "19.95",
        meat: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MEAT_LOVERS_OMELETTE.jpg"
      },
      {
        id: "eggspectation-omelette",
        name: "Tortilla Eggspectation",
        description: "¡Donde todo comenzó! Tres huevos mezclados con champiñones, cebollas, pimientos, tocino, salchicha, jamón y queso cheddar.",
        price: "20.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_OMELETTE.jpg"
      },
      {
        id: "lobster-omelette",
        name: "Tortilla de Langosta",
        description: "Una porción generosa de langosta suavemente salteada, queso suizo y cebollas verdes, cubierta con nuestra salsa holandesa clásica.",
        price: "30.95",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_OMELETTE.jpg"
      },
      {
        id: "montrealer-omelette",
        name: "Tortilla Montrealeña",
        description: "Un verdadero favorito local, rellena con carne ahumada y queso suizo con un pepinillo. Servida con papas fritas.",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_OMELETTE.jpg"
      },
      {
        id: "mykonos-omelette",
        name: "Tortilla Mykonos",
        description: "Tomate seco con cebolla roja, espinacas, aceitunas Kalamata y queso feta cubierto con orégano.",
        price: "20.95",
        greek: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MYKONOS_OMELETTE.jpg"
      }
    ],
    footer: {
      message: "Perfectas tortillas de 3 huevos de gallinas criadas en libertad creadas con pasión montrealeña",
      tagline: "Donde cada pliegue cuenta una historia dorada de perfección matutina"
    }
  },
  cn: {
    title: "煎蛋卷等等",
    subtitle: "我们知道一旦您品尝了我们完美的散养3蛋煎蛋卷，您会回来要更多。所以我们建议您从这个列表的顶部开始，一路往下。全部配我们的里昂式土豆。*除了蒙特利尔煎蛋卷",
    back: "返回",
    lowFat: "要求低脂版本：一个蛋黄配三个蛋白。它保持适当的氨基酸结构，提供鸡蛋蛋白质的所有好处，价格2.95",
    addIngredient: "为您的煎蛋卷添加额外配料2.45",
    substitution: "用新鲜水果或招牌沙拉替换里昂式土豆 6.00",
    badges: {
      signature: "招牌",
      premium: "高级",
      classic: "经典",
      gourmet: "美食",
      omelette: "煎蛋卷",
      luxury: "奢华",
      fresh: "新鲜",
      traditional: "传统",
      elegant: "优雅",
      indulgent: "奢华",
      artisanal: "手工",
      famous: "著名",
      specialty: "特色",
      montreal: "蒙特利尔",
      seafood: "海鲜",
      spicy: "辣味",
      crispy: "酥脆",
      prime: "顶级",
      sunrise: "日出",
      veggie: "蔬菜",
      meat: "肉类",
      greek: "希腊",
      loaded: "丰富"
    },
    items: [
      {
        id: "southwest-sunrise",
        name: "西南日出",
        description: "特制煎蛋卷配3种奶酪混合、彩椒，然后配新鲜牛油果片、我们特制莎莎酱和酸奶油。",
        price: "19.95",
        sunrise: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/SOUTHWEST_SUNRISE.jpg"
      },
      {
        id: "veggie-omelette",
        name: "蔬菜煎蛋卷",
        description: "这款煎蛋卷吸引所有人，配炒蘑菇、彩椒、菠菜、芦笋和焦糖洋葱。",
        price: "18.95",
        veggie: true,
        allergens: ["/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/VEGGIE_OMELETTE.jpg"
      },
      {
        id: "meat-lovers-omelette",
        name: "肉食爱好者煎蛋卷",
        description: "配培根、香肠、火腿和切达奶酪。",
        price: "19.95",
        meat: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MEAT_LOVERS_OMELETTE.jpg"
      },
      {
        id: "eggspectation-omelette",
        name: "Eggspectation煎蛋卷",
        description: "一切开始的地方！三个鸡蛋配蘑菇、洋葱、彩椒、培根、香肠、火腿和切达奶酪。",
        price: "20.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/EGGSPECTATION_OMELETTE.jpg"
      },
      {
        id: "lobster-omelette",
        name: "龙虾煎蛋卷",
        description: "大份轻炒龙虾、瑞士奶酪和青葱，配我们经典荷兰酱。",
        price: "30.95",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_OMELETTE.jpg"
      },
      {
        id: "montrealer-omelette",
        name: "蒙特利尔煎蛋卷",
        description: "真正的本地最爱，配烟熏肉和瑞士奶酪及泡菜。配薯条。",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_OMELETTE.jpg"
      },
      {
        id: "mykonos-omelette",
        name: "米科诺斯煎蛋卷",
        description: "晒干番茄配红洋葱、菠菜、卡拉马塔橄榄和羊奶酪，撒牛至。",
        price: "20.95",
        greek: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/MYKONOS_OMELETTE.jpg"
      }
    ],
    footer: {
      message: "完美的散养3蛋煎蛋卷，用蒙特利尔热情制作",
      tagline: "每一个褶皱都诉说着早餐完美的金色故事"
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
  if (item.luxury) return { text: badges.luxury, color: 'bg-purple-800' };
  if (item.signature) return { text: badges.signature, color: 'bg-purple-700' };
  if (item.sunrise) return { text: badges.sunrise, color: 'bg-orange-600' };
  if (item.veggie) return { text: badges.veggie, color: 'bg-green-700' };
  if (item.meat) return { text: badges.meat, color: 'bg-red-700' };
  if (item.montreal) return { text: badges.montreal, color: 'bg-red-800' };
  if (item.greek) return { text: badges.greek, color: 'bg-blue-700' };
  if (item.loaded) return { text: badges.loaded, color: 'bg-amber-700' };
  if (item.premium) return { text: badges.premium, color: 'bg-purple-600' };
  if (item.classic) return { text: badges.classic, color: 'bg-blue-600' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-green-600' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-yellow-600' };
  if (item.elegant) return { text: badges.elegant, color: 'bg-indigo-700' };
  if (item.crispy) return { text: badges.crispy, color: 'bg-orange-600' };
  if (item.seafood) return { text: badges.seafood, color: 'bg-blue-600' };
  if (item.artisanal) return { text: badges.artisanal, color: 'bg-teal-600' };
  return { text: badges.omelette, color: "bg-yellow-700" };
};

export default function OmelettesEggecteraPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Golden Sunrise Omelette Theme */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-16 left-16 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl transform rotate-12 animate-pulse" />
        <div className="absolute top-32 right-24 w-40 h-40 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-2xl transform -rotate-12 animate-pulse" />
        <div className="absolute bottom-32 left-32 w-52 h-52 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl transform rotate-45 animate-pulse" />
        <div className="absolute bottom-16 right-16 w-36 h-36 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl transform -rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-44 h-44 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-3xl transform rotate-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-2xl transform -rotate-30 animate-pulse" />
        
        {/* Golden Omelette Emojis Scattered */}
        <div className="absolute top-24 left-1/5 text-7xl opacity-15 transform rotate-12 animate-bounce">🍳</div>
        <div className="absolute top-1/4 right-1/5 text-6xl opacity-20 transform -rotate-12 animate-bounce">🥚</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl opacity-25 transform rotate-45 animate-bounce">🧀</div>
        <div className="absolute bottom-32 right-1/4 text-6xl opacity-15 transform -rotate-45 animate-bounce">🌅</div>
        <div className="absolute top-1/2 left-1/8 text-4xl opacity-30 transform rotate-12 animate-bounce">✨</div>
        <div className="absolute top-2/3 right-1/8 text-5xl opacity-20 transform -rotate-12 animate-bounce">🥓</div>
        <div className="absolute top-1/3 right-1/8 text-4xl opacity-25 transform rotate-30 animate-bounce">🌶️</div>
        <div className="absolute bottom-1/3 left-1/8 text-5xl opacity-20 transform -rotate-30 animate-bounce">🦞</div>
        <div className="absolute top-3/4 left-2/3 text-3xl opacity-35 transform rotate-15 animate-bounce">🍅</div>
        <div className="absolute top-1/6 left-2/3 text-4xl opacity-25 transform -rotate-15 animate-bounce">🥑</div>
      </div>

      {/* Header Section */}
      <header className="w-full px-6 pt-10 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-yellow-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-yellow-900 font-semibold">{t.back}</span>
            </button>
          </Link>
        </div>
        
        <div className="text-center w-full">
          {/* Decorative Line with Sunrise Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-5xl mx-4 animate-pulse">🌅</span>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-yellow-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Omelette Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4 animate-pulse">🍳</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content - Optimized for Tablets */}
      <main className="px-6 pb-20 pt-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 w-full">
          {t.items.map((item) => {
            const badge = getBadgeInfo(item, t.badges);
            return (
              <article 
                key={item.id} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-yellow-200/40 w-full"
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
                  <h3 className="text-lg font-bold text-yellow-900 leading-tight group-hover:text-yellow-800 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-yellow-800 leading-relaxed line-clamp-3 font-medium">
                    {item.description}
                  </p>
                  
                  {/* Allergens and Spiciness */}
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex gap-2 items-center">
                      {renderAllergens(item.allergens)}
                    </div>
                    {renderSpicinessIcons(item.spiciness)}
                  </div>
                  
                  {/* Price Section */}
                  <div className="pt-4 border-t border-yellow-200/60 flex justify-between items-center">
                    <span className="text-xl font-bold text-yellow-900">${item.price}</span>
                    <span className="text-sm text-yellow-700 font-semibold">CAD</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Special Offers Section */}
        <div className="mt-12 w-full space-y-6">
          {/* Low-Fat Option */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <p className="text-yellow-900 font-semibold text-center text-lg">
              {t.lowFat}
            </p>
          </div>
          
          {/* Additional Ingredient */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <p className="text-orange-900 font-semibold text-center text-lg">
              {t.addIngredient}
            </p>
          </div>
          
          {/* Substitution */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <p className="text-amber-900 font-semibold text-center text-lg">
              {t.substitution}
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10 px-6 pb-8">
        <div className="w-full text-center">
          {/* Decorative Elements */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mx-2 animate-pulse"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-2 animate-pulse"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-yellow-800 font-semibold text-lg mb-2">
            {t.footer.message}
          </p>
          
          <p className="text-yellow-700 italic text-sm">
            {t.footer.tagline}
          </p>
          
          {/* Final Decorative Line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-24"></div>
            <span className="text-3xl mx-3 animate-pulse">🌅</span>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-24"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

