// pages/category/great_eggspectations.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Great Eggspectations",
    subtitle: "High rise pancakes. Hunting for a sure thing? Look no further than our signature plate. These are our most popular dishes, made from time-tested recipes that are exclusive to Eggspectation. We use free run eggs and maple smoked bacon.",
    back: "Back",
    substitution: "Substitute Lyonnaise-style potatoes with fresh fruits or house salad 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium", 
      classic: "Classic",
      gourmet: "Gourmet",
      hearty: "Hearty",
      comfort: "Comfort",
      fresh: "Fresh",
      traditional: "Traditional",
      elegant: "Elegant",
      indulgent: "Indulgent",
      artisanal: "Artisanal",
      breakfast: "Breakfast",
      brunch: "Brunch",
      morning: "Morning",
      stack: "Stack",
      loaded: "Loaded",
      crispy: "Crispy",
      golden: "Golden"
    },
    items: [
      {
        id: "high-rise-pancakes",
        name: "High Rise Pancakes",
        description: "Kick-start your day with a mighty stack of pancakes with sausage, bacon and potatoes layered between, with a sunny-side-up egg.",
        price: "23.45",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HIGH_RISE_PANCAKES.jpg"
      },
      {
        id: "yolk-around-the-clock",
        name: "Yolk Around the Clock",
        description: "Wood-fired bagel, grilled with a sunny-side-up free range egg in each hole. We then top it with bacon and cheddar on one half and Swiss cheese on the other, with our Lyonnaise-style potatoes.",
        price: "19.95",
        morning: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/YOLK_AROUND_THE_CLOCK.jpg"
      },
      {
        id: "bagel-and-lox",
        name: "Bagel and Lox",
        description: "A toasted Montreal bagel platter with cream cheese, smoked wild sockeye salmon, tomatoes, red onions, kalamata olive and capers.",
        price: "22.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BAGEL_AND_LOX.jpg"
      },
      {
        id: "breakfast-poutine",
        name: "Breakfast Poutine",
        description: "Lyonnaise-style potatoes with chunks of bacon, sausage, ham and cheese curds all smothered with our homemade breakfast gravy and topped with a sunny side egg.",
        price: "19.95",
        loaded: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/BREAKFAST_POUTINE.jpg"
      },
      {
        id: "breakfast-tacos",
        name: "Breakfast Tacos",
        description: "Three tacos, bacon, breakfast sausage and chorizo in flour tortillas filled with Lyonnaise-style potatoes, scrambled eggs, cheddar cheese, avocado, pico de gallo and a cilantro lime sour cream.",
        price: "20.95",
        hearty: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BREAKFAST_TACOS.jpg"
      },
      {
        id: "chicken-n-waffles",
        name: "Chicken 'N Waffles",
        description: "Our in house fried chicken tenders, fresh arugula, cherry tomatoes and drizzled with Balsamic glaze on our famous Belgian waffles. Served with Lyonnaise-Style potatoes and pure maple syrup.",
        price: "23.95",
        indulgent: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_N_WAFFLES.jpg"
      },
      {
        id: "chicken-poutine",
        name: "Chicken Poutine",
        description: "Our take on Quebec's late-night, an amount of fries with cheese curd and our poutine sauce drizzle with hollandaise sauce and topped on chopped deep fried chicken.",
        price: "24.95",
        crispy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_POUTINE.jpg"
      }
    ],
    footer: {
      message: "Free run eggs and maple smoked bacon in every signature breakfast",
      tagline: "Where morning dreams become delicious reality"
    }
  },
  fr: {
    title: "Grandes Eggspectations",
    subtitle: "Crêpes haute altitude. À la recherche d'une valeur sûre? Ne cherchez pas plus loin que notre assiette signature. Ce sont nos plats les plus populaires, faits à partir de recettes éprouvées exclusives à Eggspectation. Nous utilisons des œufs de poules en liberté et du bacon fumé à l'érable.",
    back: "Retour",
    substitution: "Substituer les pommes de terre à la lyonnaise avec des fruits frais ou salade maison 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Classique",
      gourmet: "Gourmet",
      hearty: "Copieux",
      comfort: "Réconfort",
      fresh: "Frais",
      traditional: "Traditionnel",
      elegant: "Élégant",
      indulgent: "Gourmand",
      artisanal: "Artisanal",
      breakfast: "Petit-déjeuner",
      brunch: "Brunch",
      morning: "Matinal",
      stack: "Pile",
      loaded: "Chargé",
      crispy: "Croustillant",
      golden: "Doré"
    },
    items: [
      {
        id: "high-rise-pancakes",
        name: "Crêpes Haute Altitude",
        description: "Commencez votre journée avec une pile imposante de crêpes avec saucisse, bacon et pommes de terre en couches, avec un œuf au plat.",
        price: "23.45",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HIGH_RISE_PANCAKES.jpg"
      },
      {
        id: "yolk-around-the-clock",
        name: "Jaune Autour de l'Horloge",
        description: "Bagel grillé au feu de bois avec un œuf au plat de poules en liberté dans chaque trou. Nous le garnissons ensuite de bacon et cheddar d'un côté et de fromage suisse de l'autre, avec nos pommes de terre à la lyonnaise.",
        price: "19.95",
        morning: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/YOLK_AROUND_THE_CLOCK.jpg"
      },
      {
        id: "bagel-and-lox",
        name: "Bagel et Saumon Fumé",
        description: "Un plateau de bagel montréalais grillé avec fromage à la crème, saumon sockeye sauvage fumé, tomates, oignons rouges, olives kalamata et câpres.",
        price: "22.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BAGEL_AND_LOX.jpg"
      },
      {
        id: "breakfast-poutine",
        name: "Poutine Petit-déjeuner",
        description: "Pommes de terre à la lyonnaise avec morceaux de bacon, saucisse, jambon et fromage en grains nappés de notre sauce petit-déjeuner maison et garnis d'un œuf au plat.",
        price: "19.95",
        loaded: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/BREAKFAST_POUTINE.jpg"
      },
      {
        id: "breakfast-tacos",
        name: "Tacos Petit-déjeuner",
        description: "Trois tacos, bacon, saucisse petit-déjeuner et chorizo dans tortillas de farine remplies de pommes de terre à la lyonnaise, œufs brouillés, fromage cheddar, avocat, pico de gallo et crème sure coriandre-lime.",
        price: "20.95",
        hearty: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BREAKFAST_TACOS.jpg"
      },
      {
        id: "chicken-n-waffles",
        name: "Poulet et Gaufres",
        description: "Nos lanières de poulet frit maison, roquette fraîche, tomates cerises et arrosées de glaçage balsamique sur nos fameuses gaufres belges. Servi avec pommes de terre à la lyonnaise et sirop d'érable pur.",
        price: "23.95",
        indulgent: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_N_WAFFLES.jpg"
      },
      {
        id: "chicken-poutine",
        name: "Poutine au Poulet",
        description: "Notre version du plat de fin de soirée du Québec, une quantité de frites avec fromage en grains et notre sauce poutine arrosée de sauce hollandaise et garnie de poulet frit haché.",
        price: "24.95",
        crispy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_POUTINE.jpg"
      }
    ],
    footer: {
      message: "Œufs de poules en liberté et bacon fumé à l'érable dans chaque petit-déjeuner signature",
      tagline: "Où les rêves matinaux deviennent délicieuse réalité"
    }
  },
  es: {
    title: "Grandes Eggspectativas",
    subtitle: "Panqueques de gran altura. ¿Buscas algo seguro? No busques más que nuestro plato signature. Estos son nuestros platos más populares, hechos con recetas probadas en el tiempo que son exclusivas de Eggspectation. Usamos huevos de gallinas libres y tocino ahumado con arce.",
    back: "Volver",
    substitution: "Sustituir papas estilo lyonnaise con frutas frescas o ensalada de la casa 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Clásico",
      gourmet: "Gourmet",
      hearty: "Abundante",
      comfort: "Reconfortante",
      fresh: "Fresco",
      traditional: "Tradicional",
      elegant: "Elegante",
      indulgent: "Indulgente",
      artisanal: "Artesanal",
      breakfast: "Desayuno",
      brunch: "Brunch",
      morning: "Matutino",
      stack: "Pila",
      loaded: "Cargado",
      crispy: "Crujiente",
      golden: "Dorado"
    },
    items: [
      {
        id: "high-rise-pancakes",
        name: "Panqueques de Gran Altura",
        description: "Comienza tu día con una poderosa pila de panqueques con salchicha, tocino y papas en capas, con un huevo estrellado.",
        price: "23.45",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HIGH_RISE_PANCAKES.jpg"
      },
      {
        id: "yolk-around-the-clock",
        name: "Yema Alrededor del Reloj",
        description: "Bagel a la leña, asado con un huevo estrellado de gallinas libres en cada agujero. Luego lo cubrimos con tocino y cheddar en una mitad y queso suizo en la otra, con nuestras papas estilo lyonnaise.",
        price: "19.95",
        morning: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/YOLK_AROUND_THE_CLOCK.jpg"
      },
      {
        id: "bagel-and-lox",
        name: "Bagel y Salmón Ahumado",
        description: "Un plato de bagel de Montreal tostado con queso crema, salmón sockeye salvaje ahumado, tomates, cebollas rojas, aceitunas kalamata y alcaparras.",
        price: "22.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BAGEL_AND_LOX.jpg"
      },
      {
        id: "breakfast-poutine",
        name: "Poutine de Desayuno",
        description: "Papas estilo lyonnaise con trozos de tocino, salchicha, jamón y cuajada de queso todo cubierto con nuestra salsa de desayuno casera y coronado con un huevo estrellado.",
        price: "19.95",
        loaded: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/BREAKFAST_POUTINE.jpg"
      },
      {
        id: "breakfast-tacos",
        name: "Tacos de Desayuno",
        description: "Tres tacos, tocino, salchicha de desayuno y chorizo en tortillas de harina rellenas con papas estilo lyonnaise, huevos revueltos, queso cheddar, aguacate, pico de gallo y crema agria de cilantro y lima.",
        price: "20.95",
        hearty: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BREAKFAST_TACOS.jpg"
      },
      {
        id: "chicken-n-waffles",
        name: "Pollo y Waffles",
        description: "Nuestras tiras de pollo frito casero, rúcula fresca, tomates cherry y rociado con glaseado balsámico en nuestros famosos waffles belgas. Servido con papas estilo lyonnaise y jarabe de arce puro.",
        price: "23.95",
        indulgent: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_N_WAFFLES.jpg"
      },
      {
        id: "chicken-poutine",
        name: "Poutine de Pollo",
        description: "Nuestra versión del plato nocturno de Quebec, una cantidad de papas fritas con cuajada de queso y nuestra salsa poutine rociada con salsa holandesa y coronada con pollo frito picado.",
        price: "24.95",
        crispy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_POUTINE.jpg"
      }
    ],
    footer: {
      message: "Huevos de gallinas libres y tocino ahumado con arce en cada desayuno signature",
      tagline: "Donde los sueños matutinos se vuelven deliciosa realidad"
    }
  },
  cn: {
    title: "伟大蛋期望",
    subtitle: "高层煎饼。寻找确定的选择？我们的招牌盘子就是您的不二之选。这些是我们最受欢迎的菜肴，采用Eggspectation独有的经过时间考验的食谱制作。我们使用自由放养鸡蛋和枫糖熏培根。",
    back: "返回",
    substitution: "用新鲜水果或招牌沙拉替换里昂式土豆 6.00",
    badges: {
      signature: "招牌",
      premium: "高级",
      classic: "经典",
      gourmet: "美食",
      hearty: "丰盛",
      comfort: "舒适",
      fresh: "新鲜",
      traditional: "传统",
      elegant: "优雅",
      indulgent: "奢华",
      artisanal: "手工",
      breakfast: "早餐",
      brunch: "早午餐",
      morning: "晨间",
      stack: "叠层",
      loaded: "满载",
      crispy: "酥脆",
      golden: "金黄"
    },
    items: [
      {
        id: "high-rise-pancakes",
        name: "高层煎饼",
        description: "用香肠、培根和土豆分层的强力煎饼堆开始您的一天，配一个煎蛋。",
        price: "23.45",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HIGH_RISE_PANCAKES.jpg"
      },
      {
        id: "yolk-around-the-clock",
        name: "全天蛋黄",
        description: "木火烤贝果，每个洞里烤一个自由放养的煎蛋。然后我们在一半上放培根和切达奶酪，另一半放瑞士奶酪，配我们的里昂式土豆。",
        price: "19.95",
        morning: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/YOLK_AROUND_THE_CLOCK.jpg"
      },
      {
        id: "bagel-and-lox",
        name: "贝果配熏鲑鱼",
        description: "烤蒙特利尔贝果拼盘，配奶油奶酪、野生红鲑鱼熏制、番茄、红洋葱、卡拉马塔橄榄和刺山柑。",
        price: "22.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BAGEL_AND_LOX.jpg"
      },
      {
        id: "breakfast-poutine",
        name: "早餐肉汁奶酪薯条",
        description: "里昂式土豆配培根块、香肠、火腿和奶酪凝乳，全部淋上我们自制的早餐肉汁，顶部配煎蛋。",
        price: "19.95",
        loaded: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/BREAKFAST_POUTINE.jpg"
      },
      {
        id: "breakfast-tacos",
        name: "早餐玉米饼",
        description: "三个玉米饼，培根、早餐香肠和西班牙辣肠装在面粉玉米饼里，配里昂式土豆、炒蛋、切达奶酪、牛油果、墨西哥莎莎酱和香菜青柠酸奶油。",
        price: "20.95",
        hearty: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BREAKFAST_TACOS.jpg"
      },
      {
        id: "chicken-n-waffles",
        name: "鸡肉华夫饼",
        description: "我们自制的炸鸡条、新鲜芝麻菜、樱桃番茄，淋上香醋釉，配我们著名的比利时华夫饼。配里昂式土豆和纯枫糖浆。",
        price: "23.95",
        indulgent: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_N_WAFFLES.jpg"
      },
      {
        id: "chicken-poutine",
        name: "鸡肉肉汁奶酪薯条",
        description: "我们对魁北克深夜美食的诠释，大量薯条配奶酪凝乳和我们的肉汁酱，淋上荷兰酱，顶部配切碎的炸鸡。",
        price: "24.95",
        crispy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHICKEN_POUTINE.jpg"
      }
    ],
    footer: {
      message: "每份招牌早餐都使用自由放养鸡蛋和枫糖熏培根",
      tagline: "晨间梦想变成美味现实的地方"
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
  if (item.signature) return { text: badges.signature, color: 'bg-purple-700' };
  if (item.premium) return { text: badges.premium, color: 'bg-purple-600' };
  if (item.morning) return { text: badges.morning, color: 'bg-yellow-600' };
  if (item.loaded) return { text: badges.loaded, color: 'bg-orange-700' };
  if (item.hearty) return { text: badges.hearty, color: 'bg-red-700' };
  if (item.indulgent) return { text: badges.indulgent, color: 'bg-amber-700' };
  if (item.crispy) return { text: badges.crispy, color: 'bg-orange-600' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-yellow-600' };
  if (item.elegant) return { text: badges.elegant, color: 'bg-indigo-700' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-emerald-600' };
  if (item.comfort) return { text: badges.comfort, color: 'bg-orange-600' };
  if (item.stack) return { text: badges.stack, color: 'bg-amber-600' };
  if (item.golden) return { text: badges.golden, color: 'bg-yellow-500' };
  if (item.breakfast) return { text: badges.breakfast, color: 'bg-orange-500' };
  if (item.brunch) return { text: badges.brunch, color: 'bg-yellow-500' };
  return { text: badges.classic, color: "bg-slate-700" };
};

export default function GreatEggspectationsPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Morning Glory Theme */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Breakfast Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🥞</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🍳</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🥓</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🧇</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">☀️</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🌅</div>
        <div className="absolute top-1/4 right-1/6 text-3xl opacity-25 transform rotate-30">🍯</div>
        <div className="absolute bottom-1/4 left-1/6 text-4xl opacity-20 transform -rotate-30">🥚</div>
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
            <span className="text-4xl mx-4">🌅</span>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-yellow-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Pancake Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">🥞</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content - Full Width Layout for Tablet */}
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

        {/* Substitution Notice */}
        <div className="mt-12 w-full">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <p className="text-yellow-900 font-semibold text-center text-lg">
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
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mx-2"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
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
            <span className="text-2xl mx-3">☀️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-24"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

