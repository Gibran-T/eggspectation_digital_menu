// pages/category/eggstraordinary_pasta.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Eggstraordinary Pasta",
    subtitle: "Classic pasta dishes with an added twist. You have to try them to believe them",
    back: "Back",
    badges: {
      signature: "Signature",
      premium: "Premium", 
      classic: "Classic",
      gourmet: "Gourmet",
      italian: "Italian",
      comfort: "Comfort",
      fresh: "Fresh",
      traditional: "Traditional",
      elegant: "Elegant",
      hearty: "Hearty",
      artisanal: "Artisanal",
      creamy: "Creamy",
      spicy: "Spicy",
      seafood: "Seafood",
      cheese: "Cheese",
      rustic: "Rustic",
      indulgent: "Indulgent"
    },
    items: [
      {
        id: "fradiavolo",
        name: "Fradiavolo",
        description: "Shrimps sautéed in extra virgin olive oil mixed with tagliatelle and tossed in our San Marzano tomato sauce",
        price: "24.95",
        spicy: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/FRADIAVOLO.jpg"
      },
      {
        id: "fiorentina",
        name: "Fiorentina",
        description: "Spinach, sun dried tomatoes, garlic, white wine and Feta cheese with tagliatelle pasta tossed in our San Marzano tomato sauce. Pasta for cheese lovers",
        price: "21.95",
        italian: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FIORENTINA.jpg"
      },
      {
        id: "mac-and-cheese",
        name: "Mac and Cheese",
        description: "A simple twist on an old favorite, cavatappi pasta tossed in a creamy cheese sauce",
        price: "18.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE.jpg"
      },
      {
        id: "bacon-mac-and-cheese",
        name: "Bacon Mac and Cheese",
        description: "A simple twist on an old favorite, cavatappi pasta tossed in a creamy cheese sauce with chopped crispy bacon and caramelized onions",
        price: "20.95",
        indulgent: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BACON_MAC_AND_CHEESE.jpg"
      },
      {
        id: "lobster-mac-and-cheese",
        name: "Lobster Mac and Cheese",
        description: "One of our signature dishes, cavatappi pasta tossed in a creamy cheese sauce with diced tomato and generous chunks of succulent lobster meat",
        price: "30.95",
        signature: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_MAC_AND_CHEESE.jpg"
      },
      {
        id: "mac-and-cheese-smoked-meat",
        name: "Mac and Cheese with Smoked Meat",
        description: "Old favorite, cavatappi pasta tossed in a creamy sauce and 3 cheeses gratin topped with chopped smoked meat served with 2 pieces of garlic bread",
        price: "22.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE_SMOKED_MEAT.jpg"
      },
      {
        id: "creamy-garlic-pasta-chicken",
        name: "Creamy Garlic Pasta with Chicken",
        description: "Tagliatelle pasta, creamy alfredo sauce topped with grilled chicken. Served with 2 pieces of garlic bread",
        price: "23.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_CHICKEN.jpg"
      },
      {
        id: "creamy-garlic-pasta-shrimps",
        name: "Creamy Garlic Pasta with Shrimps",
        description: "Tagliatelle pasta, creamy alfredo sauce topped with shrimps (6). Served with 2 pieces of garlic bread",
        price: "26.95",
        seafood: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_SHRIMPS.jpg"
      },
      {
        id: "penne-arabiata-chicken",
        name: "Penne Arabiata Sauce with Grilled Chicken",
        description: "Penne pasta with tomato spicy arabiata sauce, sundried tomato, parmesan cheese and arugula with grilled chicken on the top served with 2 pieces of garlic bread",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/PENNE_ARABIATA_CHICKEN.jpg"
      },
      {
        id: "pesto-cavatappi",
        name: "Pesto Cavatappi",
        description: "Cavatappi pasta mixed with pesto sauce, cucumber, bell peppers, boiled eggs, topped with chilly flakes and roasted walnuts",
        price: "19.95",
        fresh: true,
        allergens: ["/icons/nuts_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 1,
        image: "/images/PESTO_CAVATAPPI.jpg"
      }
    ],
    footer: {
      message: "Authentic Italian passion meets Montreal creativity in every bite",
      tagline: "Where traditional pasta becomes eggstraordinary"
    }
  },
  fr: {
    title: "Pâtes Eggstraordinaires",
    subtitle: "Plats de pâtes classiques avec une touche supplémentaire. Vous devez les essayer pour les croire",
    back: "Retour",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Classique",
      gourmet: "Gourmet",
      italian: "Italien",
      comfort: "Réconfort",
      fresh: "Frais",
      traditional: "Traditionnel",
      elegant: "Élégant",
      hearty: "Copieux",
      artisanal: "Artisanal",
      creamy: "Crémeux",
      spicy: "Épicé",
      seafood: "Fruits de Mer",
      cheese: "Fromage",
      rustic: "Rustique",
      indulgent: "Gourmand"
    },
    items: [
      {
        id: "fradiavolo",
        name: "Fradiavolo",
        description: "Crevettes sautées dans l'huile d'olive extra vierge mélangées avec des tagliatelles et mélangées dans notre sauce tomate San Marzano",
        price: "24.95",
        spicy: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/FRADIAVOLO.jpg"
      },
      {
        id: "fiorentina",
        name: "Fiorentina",
        description: "Épinards, tomates séchées, ail, vin blanc et fromage Feta avec pâtes tagliatelles mélangées dans notre sauce tomate San Marzano. Pâtes pour les amateurs de fromage",
        price: "21.95",
        italian: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FIORENTINA.jpg"
      },
      {
        id: "mac-and-cheese",
        name: "Mac and Cheese",
        description: "Une simple variante d'un ancien favori, pâtes cavatappi mélangées dans une sauce au fromage crémeuse",
        price: "18.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE.jpg"
      },
      {
        id: "bacon-mac-and-cheese",
        name: "Bacon Mac and Cheese",
        description: "Une simple variante d'un ancien favori, pâtes cavatappi mélangées dans une sauce au fromage crémeuse avec bacon croustillant haché et oignons caramélisés",
        price: "20.95",
        indulgent: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BACON_MAC_AND_CHEESE.jpg"
      },
      {
        id: "lobster-mac-and-cheese",
        name: "Lobster Mac and Cheese",
        description: "Un de nos plats signature, pâtes cavatappi mélangées dans une sauce au fromage crémeuse avec tomate en dés et généreux morceaux de chair de homard succulente",
        price: "30.95",
        signature: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_MAC_AND_CHEESE.jpg"
      },
      {
        id: "mac-and-cheese-smoked-meat",
        name: "Mac and Cheese avec Viande Fumée",
        description: "Ancien favori, pâtes cavatappi mélangées dans une sauce crémeuse et gratin de 3 fromages garni de viande fumée hachée servi avec 2 morceaux de pain à l'ail",
        price: "22.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE_SMOKED_MEAT.jpg"
      },
      {
        id: "creamy-garlic-pasta-chicken",
        name: "Pâtes Crémeuses à l'Ail avec Poulet",
        description: "Pâtes tagliatelles, sauce alfredo crémeuse garnie de poulet grillé. Servi avec 2 morceaux de pain à l'ail",
        price: "23.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_CHICKEN.jpg"
      },
      {
        id: "creamy-garlic-pasta-shrimps",
        name: "Pâtes Crémeuses à l'Ail avec Crevettes",
        description: "Pâtes tagliatelles, sauce alfredo crémeuse garnie de crevettes (6). Servi avec 2 morceaux de pain à l'ail",
        price: "26.95",
        seafood: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_SHRIMPS.jpg"
      },
      {
        id: "penne-arabiata-chicken",
        name: "Penne Sauce Arabiata avec Poulet Grillé",
        description: "Pâtes penne avec sauce tomate épicée arabiata, tomates séchées, fromage parmesan et roquette avec poulet grillé sur le dessus servi avec 2 morceaux de pain à l'ail",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/PENNE_ARABIATA_CHICKEN.jpg"
      },
      {
        id: "pesto-cavatappi",
        name: "Pesto Cavatappi",
        description: "Pâtes cavatappi mélangées avec sauce pesto, concombre, poivrons, œufs durs, garnies de flocons de piment et noix grillées",
        price: "19.95",
        fresh: true,
        allergens: ["/icons/nuts_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 1,
        image: "/images/PESTO_CAVATAPPI.jpg"
      }
    ],
    footer: {
      message: "La passion italienne authentique rencontre la créativité montréalaise à chaque bouchée",
      tagline: "Où les pâtes traditionnelles deviennent eggstraordinaires"
    }
  },
  es: {
    title: "Pasta Eggstraordinaria",
    subtitle: "Platos de pasta clásicos con un toque adicional. ¡Tienes que probarlos para creerlos",
    back: "Volver",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Clásico",
      gourmet: "Gourmet",
      italian: "Italiano",
      comfort: "Reconfortante",
      fresh: "Fresco",
      traditional: "Tradicional",
      elegant: "Elegante",
      hearty: "Abundante",
      artisanal: "Artesanal",
      creamy: "Cremoso",
      spicy: "Picante",
      seafood: "Mariscos",
      cheese: "Queso",
      rustic: "Rústico",
      indulgent: "Indulgente"
    },
    items: [
      {
        id: "fradiavolo",
        name: "Fradiavolo",
        description: "Camarones salteados en aceite de oliva extra virgen mezclados con tagliatelle y revueltos en nuestra salsa de tomate San Marzano",
        price: "24.95",
        spicy: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/FRADIAVOLO.jpg"
      },
      {
        id: "fiorentina",
        name: "Fiorentina",
        description: "Espinacas, tomates secos, ajo, vino blanco y queso Feta con pasta tagliatelle revuelta en nuestra salsa de tomate San Marzano. Pasta para amantes del queso",
        price: "21.95",
        italian: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FIORENTINA.jpg"
      },
      {
        id: "mac-and-cheese",
        name: "Mac and Cheese",
        description: "Un simple giro a un viejo favorito, pasta cavatappi revuelta en una salsa cremosa de queso",
        price: "18.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE.jpg"
      },
      {
        id: "bacon-mac-and-cheese",
        name: "Bacon Mac and Cheese",
        description: "Un simple giro a un viejo favorito, pasta cavatappi revuelta en una salsa cremosa de queso con tocino crujiente picado y cebollas caramelizadas",
        price: "20.95",
        indulgent: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BACON_MAC_AND_CHEESE.jpg"
      },
      {
        id: "lobster-mac-and-cheese",
        name: "Lobster Mac and Cheese",
        description: "Uno de nuestros platos signature, pasta cavatappi revuelta en una salsa cremosa de queso con tomate en cubitos y generosos trozos de carne de langosta suculenta",
        price: "30.95",
        signature: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_MAC_AND_CHEESE.jpg"
      },
      {
        id: "mac-and-cheese-smoked-meat",
        name: "Mac and Cheese con Carne Ahumada",
        description: "Viejo favorito, pasta cavatappi revuelta en una salsa cremosa y gratín de 3 quesos cubierto con carne ahumada picada servido con 2 piezas de pan de ajo",
        price: "22.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE_SMOKED_MEAT.jpg"
      },
      {
        id: "creamy-garlic-pasta-chicken",
        name: "Pasta Cremosa de Ajo con Pollo",
        description: "Pasta tagliatelle, salsa alfredo cremosa cubierta con pollo a la parrilla. Servida con 2 piezas de pan de ajo",
        price: "23.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_CHICKEN.jpg"
      },
      {
        id: "creamy-garlic-pasta-shrimps",
        name: "Pasta Cremosa de Ajo con Camarones",
        description: "Pasta tagliatelle, salsa alfredo cremosa cubierta con camarones (6). Servida con 2 piezas de pan de ajo",
        price: "26.95",
        seafood: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_SHRIMPS.jpg"
      },
      {
        id: "penne-arabiata-chicken",
        name: "Penne Salsa Arabiata con Pollo a la Parrilla",
        description: "Pasta penne con salsa de tomate picante arabiata, tomates secos, queso parmesano y rúcula con pollo a la parrilla encima servido con 2 piezas de pan de ajo",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/PENNE_ARABIATA_CHICKEN.jpg"
      },
      {
        id: "pesto-cavatappi",
        name: "Pesto Cavatappi",
        description: "Pasta cavatappi mezclada con salsa pesto, pepino, pimientos, huevos hervidos, cubierta con hojuelas de chile y nueces tostadas",
        price: "19.95",
        fresh: true,
        allergens: ["/icons/nuts_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 1,
        image: "/images/PESTO_CAVATAPPI.jpg"
      }
    ],
    footer: {
      message: "La auténtica pasión italiana se encuentra con la creatividad montrealeña en cada bocado",
      tagline: "Donde la pasta tradicional se vuelve eggstraordinaria"
    }
  },
  cn: {
    title: "非凡意面",
    subtitle: "经典意面菜肴加上额外的创意。你必须尝试才能相信它们",
    back: "返回",
    badges: {
      signature: "招牌",
      premium: "高级",
      classic: "经典",
      gourmet: "美食",
      italian: "意大利",
      comfort: "舒适",
      fresh: "新鲜",
      traditional: "传统",
      elegant: "优雅",
      hearty: "丰盛",
      artisanal: "手工",
      creamy: "奶香",
      spicy: "辣味",
      seafood: "海鲜",
      cheese: "奶酪",
      rustic: "乡村",
      indulgent: "奢华"
    },
    items: [
      {
        id: "fradiavolo",
        name: "魔鬼虾意面",
        description: "虾仁用特级初榨橄榄油炒制，配宽面条，拌入我们的圣马扎诺番茄酱",
        price: "24.95",
        spicy: true,
        allergens: ["/icons/seafood_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/FRADIAVOLO.jpg"
      },
      {
        id: "fiorentina",
        name: "佛罗伦萨意面",
        description: "菠菜、晒干番茄、大蒜、白酒和羊奶酪配宽面条，拌入我们的圣马扎诺番茄酱。奶酪爱好者的意面",
        price: "21.95",
        italian: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FIORENTINA.jpg"
      },
      {
        id: "mac-and-cheese",
        name: "芝士通心粉",
        description: "经典老菜的简单变化，螺旋面配奶香芝士酱",
        price: "18.95",
        comfort: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE.jpg"
      },
      {
        id: "bacon-mac-and-cheese",
        name: "培根芝士通心粉",
        description: "经典老菜的简单变化，螺旋面配奶香芝士酱，加切碎的酥脆培根和焦糖洋葱",
        price: "20.95",
        indulgent: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BACON_MAC_AND_CHEESE.jpg"
      },
      {
        id: "lobster-mac-and-cheese",
        name: "龙虾芝士通心粉",
        description: "我们的招牌菜之一，螺旋面配奶香芝士酱，加切丁番茄和大块鲜美龙虾肉",
        price: "30.95",
        signature: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_MAC_AND_CHEESE.jpg"
      },
      {
        id: "mac-and-cheese-smoked-meat",
        name: "烟熏肉芝士通心粉",
        description: "经典老菜，螺旋面配奶香酱汁和3种奶酪焗烤，配切碎烟熏肉，配2片蒜蓉面包",
        price: "22.95",
        hearty: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MAC_AND_CHEESE_SMOKED_MEAT.jpg"
      },
      {
        id: "creamy-garlic-pasta-chicken",
        name: "奶香蒜蓉鸡肉意面",
        description: "宽面条配奶香阿尔弗雷多酱，配烤鸡肉。配2片蒜蓉面包",
        price: "23.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_CHICKEN.jpg"
      },
      {
        id: "creamy-garlic-pasta-shrimps",
        name: "奶香蒜蓉虾仁意面",
        description: "宽面条配奶香阿尔弗雷多酱，配虾仁(6只)。配2片蒜蓉面包",
        price: "26.95",
        seafood: true,
        allergens: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CREAMY_GARLIC_PASTA_SHRIMPS.jpg"
      },
      {
        id: "penne-arabiata-chicken",
        name: "阿拉比亚塔烤鸡通心粉",
        description: "通心粉配番茄辣味阿拉比亚塔酱、晒干番茄、帕尔马干酪和芝麻菜，配烤鸡肉，配2片蒜蓉面包",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/PENNE_ARABIATA_CHICKEN.jpg"
      },
      {
        id: "pesto-cavatappi",
        name: "青酱螺旋面",
        description: "螺旋面配青酱、黄瓜、彩椒、水煮蛋，配辣椒片和烤核桃",
        price: "19.95",
        fresh: true,
        allergens: ["/icons/nuts_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 1,
        image: "/images/PESTO_CAVATAPPI.jpg"
      }
    ],
    footer: {
      message: "正宗意大利激情与蒙特利尔创意在每一口中相遇",
      tagline: "传统意面变得非凡的地方"
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
  if (item.spicy) return { text: badges.spicy, color: 'bg-red-600' };
  if (item.italian) return { text: badges.italian, color: 'bg-green-700' };
  if (item.comfort) return { text: badges.comfort, color: 'bg-orange-600' };
  if (item.indulgent) return { text: badges.indulgent, color: 'bg-amber-700' };
  if (item.premium) return { text: badges.premium, color: 'bg-purple-600' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-yellow-600' };
  if (item.elegant) return { text: badges.elegant, color: 'bg-indigo-700' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-emerald-600' };
  if (item.creamy) return { text: badges.creamy, color: 'bg-yellow-500' };
  if (item.seafood) return { text: badges.seafood, color: 'bg-blue-600' };
  if (item.cheese) return { text: badges.cheese, color: 'bg-orange-500' };
  if (item.hearty) return { text: badges.hearty, color: 'bg-brown-600' };
  if (item.rustic) return { text: badges.rustic, color: 'bg-stone-600' };
  if (item.artisanal) return { text: badges.artisanal, color: 'bg-teal-600' };
  return { text: badges.classic, color: "bg-slate-700" };
};

export default function EggstraordinaryPastaPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-green-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Italian Theme */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-green-300 to-red-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-orange-400 to-green-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-red-300 to-orange-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-green-300 to-orange-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Italian Pasta Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🍝</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🧀</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🍤</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🍅</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">🌿</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🥄</div>
        <div className="absolute top-1/4 right-1/6 text-3xl opacity-25 transform rotate-30">🇮🇹</div>
        <div className="absolute bottom-1/4 left-1/6 text-4xl opacity-20 transform -rotate-30">🦞</div>
      </div>

      {/* Header Section */}
      <header className="w-full px-6 pt-10 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-red-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-red-900 font-semibold">{t.back}</span>
            </button>
          </Link>
        </div>
        
        <div className="text-center w-full">
          {/* Decorative Line with Pasta Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🍝</span>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-red-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Italian Flag Line */}
          <div className="flex items-center justify-center my-6">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          <div className="text-3xl mx-4 drop-shadow-sm"></div>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
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
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-red-200/40 w-full"
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
                  <h3 className="text-lg font-bold text-red-900 leading-tight group-hover:text-red-800 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  {/* Full text without truncation */}
                  <p className="text-sm text-red-800 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  {/* Price Section */}
                  <div className="pt-4 border-t border-red-200/60 flex justify-between items-center">
                    <span className="text-xl font-bold text-red-900">${item.price}</span>
                    <span className="text-sm text-red-700 font-semibold">CAD</span>
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
            <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full mx-2"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-green-400 rounded-full"></div>
          </div>
          
          <p className="text-red-800 font-semibold text-lg mb-2">
            {t.footer.message}
          </p>
          
          <p className="text-red-700 italic text-sm">
            {t.footer.tagline}
          </p>
          
          {/* Final Decorative Line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-24"></div>
            <span className="text-2xl mx-3">🍝</span>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-24"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

