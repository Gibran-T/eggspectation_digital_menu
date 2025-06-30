import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Good Morning!",
    subtitle: "Start your day with our signature breakfast creations, crafted with passion and served with Montreal flair",
    back: "Back",
    accent: "🍳",
    badges: {
      special: "Special",
      featured: "Featured",
      indulgent: "Indulgent",
      premium: "Premium",
      sweet: "Sweet",
      refreshing: "Refreshing",
      classic: "Classic",
      kids: "Kids Favorite",
      signature: "Signature",
      artisanal: "Artisanal",
      comfort: "Comfort",
      healthy: "Healthy",
      seasonal: "Seasonal",
      montreal: "Montreal Style"
    },
    items: [
      {
        id: "french-toast-flambe",
        name: "French Toast Flambé",
        description: "Our French toast brioche topped with strawberries, bananas and walnuts flambéed in orange brandy liqueur and pure maple syrup",
        price: "19.95",
        special: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/FRENCH_TOAST_FLAMBE.jpg"
      },
      {
        id: "lemon-ricotta-pancakes",
        name: "Lemon, Ricotta and Blueberry Pancakes",
        description: "Fluffy pancakes with fresh blueberries, lemon ricotta, blueberry compote and 100% pure maple syrup",
        price: "22.95",
        featured: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/LEMON_RICOTTA_PANCAKES.jpg"
      },
      {
        id: "smores-toast",
        name: "S'Mores French Toast",
        description: "Brioche stuffed with Nutella and marshmallows, topped with strawberries and bananas, drizzled with chocolate sauce",
        price: "20.45",
        indulgent: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SMORES_FRENCH_TOAST.jpg"
      },
      {
        id: "pears-bacon-waffles",
        name: "Pears, Bacon and Maple Salted Caramel Waffles",
        description: "Belgian waffles with fresh pears, crispy bacon, and maple salted caramel",
        price: "21.45",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/PEARS_BACON_WAFFLES.jpg"
      },
      {
        id: "chocolate-banana-crepe",
        name: "Chocolate Banana Crêpe",
        description: "Crêpe stuffed with Nutella and banana, topped with chocolate sauce. Add strawberries + 3.00",
        price: "17.95",
        sweet: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_BANANA_CREPE.jpg"
      },
      {
        id: "strawberry-banana-waffle",
        name: "Strawberries and Bananas Salted Caramel Waffle",
        description: "Belgian waffles with strawberries, bananas, chocolate and maple caramel",
        price: "20.95",
        refreshing: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRIES_BANANAS_WAFFLE.jpg"
      },
      {
        id: "all-time-classics",
        name: "The All-Time Classics",
        description: "Choice of pancakes, waffles, crêpe or French toast, served with pure Canadian maple syrup",
        price: "17.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ALL_TIME_CLASSICS.jpg"
      },
      {
        id: "choco-chip-blueberry",
        name: "Chocolate Chips and Blueberry Pancakes",
        description: "Fluffy pancakes with chocolate chips and blueberries, served with Canadian maple syrup",
        price: "20.95",
        kids: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_CHIP_BLUEBERRY_PANCAKES.jpg"
      }
    ],
    notes: {
      fruitMix: "Add seasonal fruit & berry mix +6.00",
      singleFruit: "Choice of 1 fruit +3.00",
      chocolateChips: "Add chocolate chips +3.00",
      whippedCream: "Add whipped cream +3.00"
    }
  },
  fr: {
    title: "Bonjour!",
    subtitle: "Commencez votre journée avec nos créations signature de petit-déjeuner, préparées avec passion et servies avec le flair montréalais",
    back: "Retour",
    accent: "🍳",
    badges: {
      special: "Spécial",
      featured: "Vedette",
      indulgent: "Gourmand",
      premium: "Premium",
      sweet: "Sucré",
      refreshing: "Rafraîchissant",
      classic: "Classique",
      kids: "Favori des Enfants",
      signature: "Signature",
      artisanal: "Artisanal",
      comfort: "Réconfort",
      healthy: "Sain",
      seasonal: "Saisonnier",
      montreal: "Style Montréal"
    },
    items: [
      {
        id: "french-toast-flambe",
        name: "Pain Perdu Flambé",
        description: "Notre pain perdu brioche garni de fraises, bananes et noix flambées au liqueur de brandy à l'orange et sirop d'érable pur",
        price: "19.95",
        special: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/FRENCH_TOAST_FLAMBE.jpg"
      },
      {
        id: "lemon-ricotta-pancakes",
        name: "Crêpes au Citron, Ricotta et Myrtilles",
        description: "Crêpes moelleuses aux myrtilles fraîches, ricotta au citron, compote de myrtilles et sirop d'érable pur à 100%",
        price: "22.95",
        featured: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/LEMON_RICOTTA_PANCAKES.jpg"
      },
      {
        id: "smores-toast",
        name: "Pain Perdu S'Mores",
        description: "Brioche farcie au Nutella et guimauves, garnie de fraises et bananes, arrosée de sauce chocolat",
        price: "20.45",
        indulgent: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SMORES_FRENCH_TOAST.jpg"
      },
      {
        id: "pears-bacon-waffles",
        name: "Gaufres aux Poires, Bacon et Caramel Salé à l'Érable",
        description: "Gaufres belges aux poires fraîches, bacon croustillant et caramel salé à l'érable",
        price: "21.45",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/PEARS_BACON_WAFFLES.jpg"
      },
      {
        id: "chocolate-banana-crepe",
        name: "Crêpe Chocolat Banane",
        description: "Crêpe farcie au Nutella et banane, garnie de sauce chocolat. Ajoutez des fraises + 3.00",
        price: "17.95",
        sweet: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_BANANA_CREPE.jpg"
      },
      {
        id: "strawberry-banana-waffle",
        name: "Gaufre aux Fraises et Bananes Caramel Salé",
        description: "Gaufres belges aux fraises, bananes, chocolat et caramel à l'érable",
        price: "20.95",
        refreshing: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRIES_BANANAS_WAFFLE.jpg"
      },
      {
        id: "all-time-classics",
        name: "Les Classiques de Toujours",
        description: "Choix de crêpes, gaufres, crêpe ou pain perdu, servi avec sirop d'érable canadien pur",
        price: "17.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ALL_TIME_CLASSICS.jpg"
      },
      {
        id: "choco-chip-blueberry",
        name: "Crêpes aux Pépites de Chocolat et Myrtilles",
        description: "Crêpes moelleuses aux pépites de chocolat et myrtilles, servies avec sirop d'érable canadien",
        price: "20.95",
        kids: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_CHIP_BLUEBERRY_PANCAKES.jpg"
      }
    ],
    notes: {
      fruitMix: "Ajoutez un mélange de fruits et baies de saison +6.00",
      singleFruit: "Choix d'1 fruit +3.00",
      chocolateChips: "Ajoutez des pépites de chocolat +3.00",
      whippedCream: "Ajoutez de la crème fouettée +3.00"
    }
  },
  es: {
    title: "¡Buenos Días!",
    subtitle: "Comienza tu día con nuestras creaciones signature de desayuno, elaboradas con pasión y servidas con estilo montréalais",
    back: "Volver",
    accent: "🍳",
    badges: {
      special: "Especial",
      featured: "Destacado",
      indulgent: "Delicioso",
      premium: "Premium",
      sweet: "Dulce",
      refreshing: "Refrescante",
      classic: "Clásico",
      kids: "Favorito de Niños",
      signature: "Firma",
      artisanal: "Artesanal",
      comfort: "Confort",
      healthy: "Saludable",
      seasonal: "Estacional",
      montreal: "Estilo Montreal"
    },
    items: [
      {
        id: "french-toast-flambe",
        name: "Tostada Francesa Flameada",
        description: "Nuestra tostada francesa brioche cubierta con fresas, plátanos y nueces flameadas en licor de brandy de naranja y jarabe de arce puro",
        price: "19.95",
        special: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/FRENCH_TOAST_FLAMBE.jpg"
      },
      {
        id: "lemon-ricotta-pancakes",
        name: "Panqueques de Limón, Ricotta y Arándanos",
        description: "Panqueques esponjosos con arándanos frescos, ricotta de limón, compota de arándanos y jarabe de arce 100% puro",
        price: "22.95",
        featured: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/LEMON_RICOTTA_PANCAKES.jpg"
      },
      {
        id: "smores-toast",
        name: "Tostada Francesa S'Mores",
        description: "Brioche relleno con Nutella y malvaviscos, cubierto con fresas y plátanos, rociado con salsa de chocolate",
        price: "20.45",
        indulgent: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SMORES_FRENCH_TOAST.jpg"
      },
      {
        id: "pears-bacon-waffles",
        name: "Waffles de Peras, Tocino y Caramelo Salado de Arce",
        description: "Waffles belgas con peras frescas, tocino crujiente y caramelo salado de arce",
        price: "21.45",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/PEARS_BACON_WAFFLES.jpg"
      },
      {
        id: "chocolate-banana-crepe",
        name: "Crêpe de Chocolate y Plátano",
        description: "Crêpe relleno con Nutella y plátano, cubierto con salsa de chocolate. Agregar fresas + 3.00",
        price: "17.95",
        sweet: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_BANANA_CREPE.jpg"
      },
      {
        id: "strawberry-banana-waffle",
        name: "Waffle de Fresas y Plátanos con Caramelo Salado",
        description: "Waffles belgas con fresas, plátanos, chocolate y caramelo de arce",
        price: "20.95",
        refreshing: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRIES_BANANAS_WAFFLE.jpg"
      },
      {
        id: "all-time-classics",
        name: "Los Clásicos de Siempre",
        description: "Elección de panqueques, waffles, crêpe o tostada francesa, servido con jarabe de arce canadiense puro",
        price: "17.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ALL_TIME_CLASSICS.jpg"
      },
      {
        id: "choco-chip-blueberry",
        name: "Panqueques de Chispas de Chocolate y Arándanos",
        description: "Panqueques esponjosos con chispas de chocolate y arándanos, servidos con jarabe de arce canadiense",
        price: "20.95",
        kids: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_CHIP_BLUEBERRY_PANCAKES.jpg"
      }
    ],
    notes: {
      fruitMix: "Agregar mezcla de frutas y bayas de temporada +6.00",
      singleFruit: "Elección de 1 fruta +3.00",
      chocolateChips: "Agregar chispas de chocolate +3.00",
      whippedCream: "Agregar crema batida +3.00"
    }
  },
  cn: {
    title: "早安！",
    subtitle: "用我们的招牌早餐创作开始您的一天，用心制作，以蒙特利尔风情呈现",
    back: "返回",
    accent: "🍳",
    badges: {
      special: "特色",
      featured: "精选",
      indulgent: "奢华",
      premium: "优质",
      sweet: "甜品",
      refreshing: "清爽",
      classic: "经典",
      kids: "儿童最爱",
      signature: "招牌",
      artisanal: "手工",
      comfort: "温暖",
      healthy: "健康",
      seasonal: "时令",
      montreal: "蒙特利尔风味"
    },
    items: [
      {
        id: "french-toast-flambe",
        name: "法式吐司火焰",
        description: "我们的法式吐司布里欧修配草莓、香蕉和核桃，用橙白兰地利口酒和纯枫糖浆火焰",
        price: "19.95",
        special: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/FRENCH_TOAST_FLAMBE.jpg"
      },
      {
        id: "lemon-ricotta-pancakes",
        name: "柠檬瑞可塔蓝莓薄饼",
        description: "蓬松薄饼配新鲜蓝莓、柠檬瑞可塔、蓝莓果酱和100%纯枫糖浆",
        price: "22.95",
        featured: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/LEMON_RICOTTA_PANCAKES.jpg"
      },
      {
        id: "smores-toast",
        name: "S'Mores法式吐司",
        description: "布里欧修填充榛果酱和棉花糖，配草莓和香蕉，淋巧克力酱",
        price: "20.45",
        indulgent: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SMORES_FRENCH_TOAST.jpg"
      },
      {
        id: "pears-bacon-waffles",
        name: "梨子培根枫糖盐焦糖华夫饼",
        description: "比利时华夫饼配新鲜梨子、酥脆培根和枫糖盐焦糖",
        price: "21.45",
        premium: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/PEARS_BACON_WAFFLES.jpg"
      },
      {
        id: "chocolate-banana-crepe",
        name: "巧克力香蕉可丽饼",
        description: "可丽饼填充榛果酱和香蕉，配巧克力酱。加草莓 + 3.00",
        price: "17.95",
        sweet: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png", "/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_BANANA_CREPE.jpg"
      },
      {
        id: "strawberry-banana-waffle",
        name: "草莓香蕉盐焦糖华夫饼",
        description: "比利时华夫饼配草莓、香蕉、巧克力和枫糖焦糖",
        price: "20.95",
        refreshing: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRIES_BANANAS_WAFFLE.jpg"
      },
      {
        id: "all-time-classics",
        name: "永恒经典",
        description: "可选薄饼、华夫饼、可丽饼或法式吐司，配纯加拿大枫糖浆",
        price: "17.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ALL_TIME_CLASSICS.jpg"
      },
      {
        id: "choco-chip-blueberry",
        name: "巧克力豆蓝莓薄饼",
        description: "蓬松薄饼配巧克力豆和蓝莓，配加拿大枫糖浆",
        price: "20.95",
        kids: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CHOCOLATE_CHIP_BLUEBERRY_PANCAKES.jpg"
      }
    ],
    notes: {
      fruitMix: "加时令水果和浆果拼盘 +6.00",
      singleFruit: "选择1种水果 +3.00",
      chocolateChips: "加巧克力豆 +3.00",
      whippedCream: "加鲜奶油 +3.00"
    }
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
  if (item.special) return { text: badges.special, color: 'bg-red-600' };
  if (item.featured) return { text: badges.featured, color: 'bg-purple-600' };
  if (item.indulgent) return { text: badges.indulgent, color: 'bg-pink-600' };
  if (item.premium) return { text: badges.premium, color: 'bg-amber-600' };
  if (item.sweet) return { text: badges.sweet, color: 'bg-rose-500' };
  if (item.refreshing) return { text: badges.refreshing, color: 'bg-cyan-500' };
  if (item.classic) return { text: badges.classic, color: 'bg-blue-600' };
  if (item.kids) return { text: badges.kids, color: 'bg-green-500' };
  if (item.signature) return { text: badges.signature, color: 'bg-orange-600' };
  if (item.artisanal) return { text: badges.artisanal, color: 'bg-yellow-600' };
  if (item.comfort) return { text: badges.comfort, color: 'bg-yellow-500' };
  if (item.healthy) return { text: badges.healthy, color: 'bg-emerald-500' };
  if (item.seasonal) return { text: badges.seasonal, color: 'bg-teal-500' };
  if (item.montreal) return { text: badges.montreal, color: 'bg-red-500' };
  return { text: "Special", color: "bg-slate-500" };
};

export default function GoodMorningPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 relative overflow-hidden font-serif">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <header className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90">
              <svg className="w-5 h-5 text-orange-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-serif font-medium text-orange-900">{t.back}</span>
            </button>
          </Link>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-900/30 to-transparent" />
            <span className="text-3xl">{t.accent}</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-900/30 to-transparent" />
          </div>
          
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-orange-900 mb-4 uppercase tracking-wide">
            {t.title}
          </h1>
          
          <div className="relative inline-block">
            <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-orange-900/70 mb-6 max-w-4xl">
              {t.subtitle}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-400 rounded-full"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-b group-hover:from-orange-400/5 group-hover:via-yellow-400/5 group-hover:to-amber-400/5 transition-all duration-500 rounded-3xl"></div>

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
                      <h3 className="font-serif font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl text-orange-900 mb-3 group-hover:text-orange-800 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      {/* Full text display without truncation */}
                      <p className="font-serif font-light text-sm md:text-base lg:text-sm xl:text-base text-orange-900/70 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Price Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-orange-900/10">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-orange-800">
                          ${item.price}
                        </span>
                        <span className="font-serif font-medium text-sm text-orange-900/50">
                          CAD
                        </span>
                      </div>
                      
                      {/* Allergens and Spiciness */}
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

        {/* Notes Section */}
        <div className="text-center mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-900/30 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-900/30 to-transparent"></div>
          </div>
          
          <div className="space-y-2">
            {Object.values(t.notes).map((note, index) => (
              <p key={index} className="font-serif font-light text-orange-900/60 text-sm italic">
                {note}
              </p>
            ))}
          </div>
          
          <p className="font-serif font-light text-orange-900/60 text-sm mt-4">
            Crafted with passion in Montreal
          </p>
        </div>
      </main>
    </div>
  );
}

