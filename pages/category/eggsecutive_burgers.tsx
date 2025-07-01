// pages/category/eggsecutive_burgers.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Eggsecutive Burgers",
    subtitle: "We dare you to pick your favourite! All of our burgers are made with Triple A Butcher's Block Reserve™ Angus beef and served on an artisanal brioche bun",
    servedWith: "All burgers are on artisanal brioche buns and served with choice of fries or house salad",
    back: "Back",
    freeEgg: "Add a sunny-side egg to your burger, it's on us!",
    substitutions: "Substitute french fries, mixed field green salad or sweet potato for $3.00. Add a poutine for $5.00",
    badges: {
      signature: "Signature",
      classic: "Classic", 
      premium: "Premium",
      spicy: "Spicy",
      gourmet: "Gourmet",
      hearty: "Hearty",
      artisanal: "Artisanal",
      comfort: "Comfort",
      bold: "Bold",
      crispy: "Crispy",
      fresh: "Fresh",
      indulgent: "Indulgent",
      smoky: "Smoky",
      loaded: "Loaded",
      healthy: "Healthy",
      wrap: "Wrap",
      melt: "Melt",
      omelette: "Omelette"
    },
    items: [
      {
        id: "eggspectation-burger",
        name: "Eggspectation Burger",
        description: "Burger dressed-up with chipotle aioli, lettuce, tomato and red onions with strips of crispy bacon over melted cheddar cheese and a sunny-side-up egg on top",
        price: "21.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/EGGSPECTATION_BURGER.jpg"
      },
      {
        id: "mushroom-melt",
        name: "Mushroom Melt",
        description: "Sautéed mushrooms and caramelized onions with brie cheese on our beef burger, topped with arugula and lemon aioli",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MUSHROOM_MELT_BURGER.jpg"
      },
      {
        id: "chicken-burger",
        name: "Chicken Burger",
        description: "Our grilled chicken burger served with our in-house chipotle aioli, lettuce, onions, fresh avocado, pico de Gallo, smoked bacon and Swiss cheese",
        price: "20.95",
        fresh: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/CHICKEN_BURGER.jpg"
      },
      {
        id: "bbq-burger",
        name: "The BBQ Burger",
        description: "This burger is sure to win you over with slices of crispy bacon and cheddar cheese, lettuce, tomato, smoky BBQ sauce and beer-battered onion rings",
        price: "21.95",
        smoky: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BBQ_BURGER.jpg"
      },
      {
        id: "big-daddy-burger",
        name: "Big Daddy Burger",
        description: "Beef burger with our tarragon aioli, double bacon and double cheddar cheese",
        price: "18.95",
        loaded: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BIG_DADDY_BURGER.jpg"
      },
      {
        id: "beyond-meat-burger",
        name: "Beyond Meat Burger",
        description: "Our beyond meat with chipotle aioli sauce, onions, tomatoes, and lettuce served with mixed field green salad",
        price: "23.95",
        healthy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BEYOND_MEAT_BURGER.jpg"
      },
      {
        id: "ham-swiss-omelette-burger",
        name: "Ham and Swiss Omelette Burger Sandwich",
        description: "Burger bun, 2 eggs ham and swiss cheese, chopped lettuces and drizzle with hollandaise sauce, served with fries",
        price: "16.95",
        omelette: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAM_SWISS_OMELETTE_BURGER.jpg"
      },
      {
        id: "classic-burger",
        name: "Classic Burger",
        description: "Burger patty, homemade sauce, chopped lettuce, red onions, slice of tomato served with fries",
        price: "16.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BURGER.jpg"
      }
    ],
    footer: {
      message: "Crafted with premium Angus beef, served with Montreal burger mastery",
      tagline: "Where every bite delivers executive-level satisfaction"
    }
  },
  fr: {
    title: "Burgers Exécutifs",
    subtitle: "Nous vous mettons au défi de choisir votre favori ! Tous nos burgers sont faits avec du bœuf Angus Triple A Butcher's Block Reserve™ et servis sur un pain brioche artisanal",
    servedWith: "Tous les burgers sont sur des pains brioche artisanaux et servis avec un choix de frites ou salade maison",
    back: "Retour",
    freeEgg: "Ajoutez un œuf au plat à votre burger, c'est offert !",
    substitutions: "Remplacez les frites, la salade verte mixte ou la patate douce pour 3,00 $. Ajoutez une poutine pour 5,00 $",
    badges: {
      signature: "Signature",
      classic: "Classique",
      premium: "Premium",
      spicy: "Épicé",
      gourmet: "Gourmet",
      hearty: "Copieux",
      artisanal: "Artisanal",
      comfort: "Réconfort",
      bold: "Audacieux",
      crispy: "Croustillant",
      fresh: "Frais",
      indulgent: "Gourmand",
      smoky: "Fumé",
      loaded: "Chargé",
      healthy: "Sain",
      wrap: "Wrap",
      melt: "Fondu",
      omelette: "Omelette"
    },
    items: [
      {
        id: "eggspectation-burger",
        name: "Burger Eggspectation",
        description: "Burger habillé avec aïoli chipotle, laitue, tomate et oignons rouges avec des lanières de bacon croustillant sur du fromage cheddar fondu et un œuf au plat sur le dessus",
        price: "21.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/EGGSPECTATION_BURGER.jpg"
      },
      {
        id: "mushroom-melt",
        name: "Burger Fondu aux Champignons",
        description: "Champignons sautés et oignons caramélisés avec fromage brie sur notre burger de bœuf, garni de roquette et aïoli au citron",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MUSHROOM_MELT_BURGER.jpg"
      },
      {
        id: "chicken-burger",
        name: "Burger au Poulet",
        description: "Notre burger de poulet grillé servi avec notre aïoli chipotle maison, laitue, oignons, avocat frais, pico de Gallo, bacon fumé et fromage suisse",
        price: "20.95",
        fresh: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/CHICKEN_BURGER.jpg"
      },
      {
        id: "bbq-burger",
        name: "Le Burger BBQ",
        description: "Ce burger vous séduira à coup sûr avec des tranches de bacon croustillant et fromage cheddar, laitue, tomate, sauce BBQ fumée et rondelles d'oignon à la bière",
        price: "21.95",
        smoky: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BBQ_BURGER.jpg"
      },
      {
        id: "big-daddy-burger",
        name: "Burger Big Daddy",
        description: "Burger de bœuf avec notre aïoli à l'estragon, double bacon et double fromage cheddar",
        price: "18.95",
        loaded: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BIG_DADDY_BURGER.jpg"
      },
      {
        id: "beyond-meat-burger",
        name: "Burger Beyond Meat",
        description: "Notre beyond meat avec sauce aïoli chipotle, oignons, tomates et laitue servi avec salade verte mixte",
        price: "23.95",
        healthy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BEYOND_MEAT_BURGER.jpg"
      },
      {
        id: "ham-swiss-omelette-burger",
        name: "Sandwich Burger Omelette Jambon et Suisse",
        description: "Pain burger, 2 œufs jambon et fromage suisse, laitues hachées et arrosé de sauce hollandaise, servi avec frites",
        price: "16.95",
        omelette: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAM_SWISS_OMELETTE_BURGER.jpg"
      },
      {
        id: "classic-burger",
        name: "Burger Classique",
        description: "Galette de burger, sauce maison, laitue hachée, oignons rouges, tranche de tomate servi avec frites",
        price: "16.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BURGER.jpg"
      }
    ],
    footer: {
      message: "Fabriqués avec du bœuf Angus premium, servis avec la maîtrise burger montréalaise",
      tagline: "Où chaque bouchée offre une satisfaction de niveau exécutif"
    }
  },
  es: {
    title: "Hamburguesas Ejecutivas",
    subtitle: "¡Te desafiamos a elegir tu favorita! Todas nuestras hamburguesas están hechas con carne Angus Triple A Butcher's Block Reserve™ y servidas en pan brioche artesanal",
    servedWith: "Todas las hamburguesas van en panes brioche artesanales y se sirven con opción de papas fritas o ensalada de la casa",
    back: "Volver",
    freeEgg: "¡Añade un huevo frito a tu hamburguesa, es gratis!",
    substitutions: "Sustituye papas fritas, ensalada verde mixta o batata por $3.00. Añade poutine por $5.00",
    badges: {
      signature: "Signature",
      classic: "Clásico",
      premium: "Premium",
      spicy: "Picante",
      gourmet: "Gourmet",
      hearty: "Abundante",
      artisanal: "Artesanal",
      comfort: "Reconfortante",
      bold: "Audaz",
      crispy: "Crujiente",
      fresh: "Fresco",
      indulgent: "Indulgente",
      smoky: "Ahumado",
      loaded: "Cargado",
      healthy: "Saludable",
      wrap: "Wrap",
      melt: "Derretido",
      omelette: "Tortilla"
    },
    items: [
      {
        id: "eggspectation-burger",
        name: "Hamburguesa Eggspectation",
        description: "Hamburguesa vestida con aioli chipotle, lechuga, tomate y cebollas rojas con tiras de tocino crujiente sobre queso cheddar derretido y un huevo frito encima",
        price: "21.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/EGGSPECTATION_BURGER.jpg"
      },
      {
        id: "mushroom-melt",
        name: "Hamburguesa Derretida de Champiñones",
        description: "Champiñones salteados y cebollas caramelizadas con queso brie en nuestra hamburguesa de res, cubierta con rúcula y aioli de limón",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MUSHROOM_MELT_BURGER.jpg"
      },
      {
        id: "chicken-burger",
        name: "Hamburguesa de Pollo",
        description: "Nuestra hamburguesa de pollo a la parrilla servida con nuestro aioli chipotle casero, lechuga, cebollas, aguacate fresco, pico de gallo, tocino ahumado y queso suizo",
        price: "20.95",
        fresh: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/CHICKEN_BURGER.jpg"
      },
      {
        id: "bbq-burger",
        name: "La Hamburguesa BBQ",
        description: "Esta hamburguesa seguramente te conquistará con rebanadas de tocino crujiente y queso cheddar, lechuga, tomate, salsa BBQ ahumada y aros de cebolla rebozados en cerveza",
        price: "21.95",
        smoky: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BBQ_BURGER.jpg"
      },
      {
        id: "big-daddy-burger",
        name: "Hamburguesa Big Daddy",
        description: "Hamburguesa de res con nuestro aioli de estragón, doble tocino y doble queso cheddar",
        price: "18.95",
        loaded: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BIG_DADDY_BURGER.jpg"
      },
      {
        id: "beyond-meat-burger",
        name: "Hamburguesa Beyond Meat",
        description: "Nuestra beyond meat con salsa aioli chipotle, cebollas, tomates y lechuga servida con ensalada verde mixta",
        price: "23.95",
        healthy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BEYOND_MEAT_BURGER.jpg"
      },
      {
        id: "ham-swiss-omelette-burger",
        name: "Sándwich Hamburguesa Tortilla Jamón y Suizo",
        description: "Pan de hamburguesa, 2 huevos jamón y queso suizo, lechugas picadas y rociado con salsa holandesa, servido con papas fritas",
        price: "16.95",
        omelette: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAM_SWISS_OMELETTE_BURGER.jpg"
      },
      {
        id: "classic-burger",
        name: "Hamburguesa Clásica",
        description: "Carne de hamburguesa, salsa casera, lechuga picada, cebollas rojas, rebanada de tomate servida con papas fritas",
        price: "16.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BURGER.jpg"
      }
    ],
    footer: {
      message: "Elaboradas con carne Angus premium, servidas con maestría burger montrealeña",
      tagline: "Donde cada bocado ofrece satisfacción de nivel ejecutivo"
    }
  },
  cn: {
    title: "行政汉堡",
    subtitle: "我们挑战你选择你的最爱！我们所有的汉堡都是用Triple A屠夫街区储备™安格斯牛肉制作，配手工布里欧修面包",
    servedWith: "所有汉堡都配手工布里欧修面包，可选择薯条或招牌沙拉",
    back: "返回",
    freeEgg: "为您的汉堡加个煎蛋，我们请客！",
    substitutions: "替换薯条、混合田园沙拉或红薯需加$3.00。加肉汁奶酪薯条需加$5.00",
    badges: {
      signature: "招牌",
      classic: "经典",
      premium: "高级",
      spicy: "辣味",
      gourmet: "美食",
      hearty: "丰盛",
      artisanal: "手工",
      comfort: "舒适",
      bold: "大胆",
      crispy: "酥脆",
      fresh: "新鲜",
      indulgent: "奢华",
      smoky: "烟熏",
      loaded: "满载",
      healthy: "健康",
      wrap: "卷饼",
      melt: "融化",
      omelette: "煎蛋"
    },
    items: [
      {
        id: "eggspectation-burger",
        name: "Eggspectation汉堡",
        description: "汉堡配墨西哥辣椒蛋黄酱、生菜、番茄和红洋葱，配酥脆培根条，融化的切达奶酪上放煎蛋",
        price: "21.95",
        signature: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/EGGSPECTATION_BURGER.jpg"
      },
      {
        id: "mushroom-melt",
        name: "蘑菇融化汉堡",
        description: "炒蘑菇和焦糖洋葱配布里奶酪在我们的牛肉汉堡上，配芝麻菜和柠檬蛋黄酱",
        price: "21.95",
        gourmet: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MUSHROOM_MELT_BURGER.jpg"
      },
      {
        id: "chicken-burger",
        name: "鸡肉汉堡",
        description: "我们的烤鸡汉堡配自制墨西哥辣椒蛋黄酱、生菜、洋葱、新鲜牛油果、墨西哥莎莎酱、烟熏培根和瑞士奶酪",
        price: "20.95",
        fresh: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/CHICKEN_BURGER.jpg"
      },
      {
        id: "bbq-burger",
        name: "BBQ汉堡",
        description: "这款汉堡一定会征服你，配酥脆培根片和切达奶酪、生菜、番茄、烟熏BBQ酱和啤酒面糊洋葱圈",
        price: "21.95",
        smoky: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BBQ_BURGER.jpg"
      },
      {
        id: "big-daddy-burger",
        name: "大爸爸汉堡",
        description: "牛肉汉堡配我们的龙蒿蛋黄酱、双倍培根和双倍切达奶酪",
        price: "18.95",
        loaded: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BIG_DADDY_BURGER.jpg"
      },
      {
        id: "beyond-meat-burger",
        name: "Beyond Meat汉堡",
        description: "我们的beyond meat配墨西哥辣椒蛋黄酱、洋葱、番茄和生菜，配混合田园沙拉",
        price: "23.95",
        healthy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 1,
        image: "/images/BEYOND_MEAT_BURGER.jpg"
      },
      {
        id: "ham-swiss-omelette-burger",
        name: "火腿瑞士煎蛋汉堡三明治",
        description: "汉堡面包、2个鸡蛋火腿和瑞士奶酪、切碎生菜淋荷兰酱，配薯条",
        price: "16.95",
        omelette: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/HAM_SWISS_OMELETTE_BURGER.jpg"
      },
      {
        id: "classic-burger",
        name: "经典汉堡",
        description: "汉堡肉饼、自制酱汁、切碎生菜、红洋葱、番茄片配薯条",
        price: "16.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BURGER.jpg"
      }
    ],
    footer: {
      message: "用高级安格斯牛肉制作，以蒙特利尔汉堡工艺呈现",
      tagline: "每一口都提供行政级别的满足感"
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
  if (item.premium) return { text: badges.premium, color: 'bg-indigo-600' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-yellow-600' };
  if (item.smoky) return { text: badges.smoky, color: 'bg-gray-600' };
  if (item.loaded) return { text: badges.loaded, color: 'bg-red-600' };
  if (item.healthy) return { text: badges.healthy, color: 'bg-green-500' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-emerald-500' };
  if (item.wrap) return { text: badges.wrap, color: 'bg-orange-500' };
  if (item.omelette) return { text: badges.omelette, color: 'bg-yellow-500' };
  if (item.classic) return { text: badges.classic, color: 'bg-blue-600' };
  if (item.spicy) return { text: badges.spicy, color: 'bg-red-500' };
  if (item.bold) return { text: badges.bold, color: 'bg-amber-600' };
  if (item.crispy) return { text: badges.crispy, color: 'bg-orange-400' };
  if (item.melt) return { text: badges.melt, color: 'bg-yellow-400' };
  return { text: badges.hearty, color: "bg-amber-500" };
};

export default function EggsecutiveBurgersPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Burger Grill Theme */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-red-300 to-amber-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-red-300 to-amber-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Burger & Grill Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🍔</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🥓</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🍟</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🧀</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">🥩</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🔥</div>
        <div className="absolute top-1/4 right-1/6 text-3xl opacity-25 transform rotate-30">🥚</div>
        <div className="absolute bottom-1/4 left-1/6 text-4xl opacity-20 transform -rotate-30">🌶️</div>
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
          {/* Decorative Line with Burger Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🍔</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-amber-800 max-w-5xl mx-auto leading-relaxed font-medium mb-4">
            {t.subtitle}
          </p>
          
          <p className="text-base text-amber-700 max-w-4xl mx-auto leading-relaxed italic mb-6">
            {t.servedWith}
          </p>
          
          {/* Free Egg Callout */}
          <div className="inline-block px-6 py-3 bg-yellow-100/80 backdrop-blur-sm rounded-full border border-yellow-200/60 shadow-lg mb-4">
            <span className="text-lg font-bold text-yellow-800">{t.freeEgg}</span>
          </div>
          
          {/* Substitutions Note */}
          <div className="inline-block px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full border border-amber-200/60 shadow-md mb-6">
            <span className="text-sm font-semibold text-amber-800">{t.substitutions}</span>
          </div>
          
          {/* Decorative Line with Bacon Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">🥓</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1 max-w-32"></div>
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
                  
                  {/* Full text without truncation */}
                  <p className="text-base text-amber-800 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  {/* Price Section */}
                  <div className="pt-5 border-t border-amber-200/60 flex justify-between items-center">
                    <span className="text-3xl font-bold text-amber-900">${item.price}</span>
                    <span className="text-base text-amber-700 font-semibold">CAD</span>
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
            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-2"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
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

