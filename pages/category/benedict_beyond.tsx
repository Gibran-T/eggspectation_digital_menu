// pages/category/benedict_beyond.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Benedict & Beyond",
    subtitle: "This is what we do best, and how we made our name. All served with our Lyonnaise-style potatoes. *Except Florentine Benedicts and Benedicts with fries",
    back: "Back",
    substitution: "Substitute Lyonnaise-style potatoes with fresh fruits or house salad 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium", 
      classic: "Classic",
      gourmet: "Gourmet",
      benedict: "Benedict",
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
      prime: "Prime"
    },
    items: [
      {
        id: "smoked-salmon-benny",
        name: "Smoked Salmon Benny",
        description: "Two poached eggs on English muffin with smoked salmon and cream cheese, topped with our famous hollandaise sauce and a sprinkle of red onions and capers.",
        price: "23.45",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_BENNY.jpg"
      },
      {
        id: "classic-benedicts",
        name: "Classic Benedicts",
        description: "Two perfectly poached eggs, ham served on a toasted English muffin, topped with our famous hollandaise sauce.",
        price: "18.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BENEDICTS.jpg"
      },
      {
        id: "florentine-benedicts",
        name: "Florentine Benedicts",
        description: "Florentine with sautéed spinach and mushrooms, strong white cheddar served on a toasted English muffin, topped with our famous hollandaise sauce. Served with green mixed salad tossed in creamy maple balsamic yogurt dressing.",
        price: "22.95",
        fresh: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FLORENTINE_BENEDICTS.jpg"
      },
      {
        id: "lobster-benny",
        name: "Lobster Benny",
        description: "Two perfectly poached with gently sautéed Maritime lobster on a toasted English muffin with our classic hollandaise sauce.",
        price: "30.45",
        premium: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_BENNY.jpg"
      },
      {
        id: "montreal-benny",
        name: "Montreal Benny",
        description: "English muffin with mustard, Montreal smoked meat and Swiss cheese, topped with two perfectly poached eggs and our famous hollandaise sauce. Served with fries.",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_BENNY.jpg"
      },
      {
        id: "nashville-chicken-benny",
        name: "Nashville Chicken Benny",
        description: "Crispy chicken tenders topped with our spicy Nashville hot sauce with two poached eggs on a toasted English muffin and our Hollandaise sauce.",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/NASHVILLE_CHICKEN_BENNY.jpg"
      },
      {
        id: "crab-cake-benedict",
        name: "Crab Cake Benedict",
        description: "Our own rendition of the crab cake with two poached eggs and topped with our famous Hollandaise sauce and green onions.",
        price: "24.95",
        specialty: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CRAB_CAKE_BENEDICT.jpg"
      },
      {
        id: "blackstone-eggs",
        name: "Blackstone Eggs",
        description: "Our famous Hollandaise sauce with two poached eggs served on toasted English muffin with grilled tomatoes, bacon and avocado.",
        price: "22.95",
        famous: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BLACKSTONE_EGGS.jpg"
      },
      {
        id: "prime-rib-benedict",
        name: "Prime Rib Benedict",
        description: "Thinly sliced prime rib and caramelized onions with two poached eggs on a toasted English muffin with Swiss cheese and our Hollandaise sauce.",
        price: "24.95",
        prime: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/PRIME_RIB_BENEDICT.jpg"
      }
    ],
    footer: {
      message: "Perfectly poached eggs and our famous hollandaise sauce in every benedict",
      tagline: "Where benedict mastery meets Montreal excellence"
    }
  },
  fr: {
    title: "Benedict & Au-Delà",
    subtitle: "C'est ce que nous faisons de mieux, et comment nous avons fait notre nom. Tous servis avec nos pommes de terre à la lyonnaise. *Sauf Benedicts Florentine et Benedicts avec frites",
    back: "Retour",
    substitution: "Substituer les pommes de terre à la lyonnaise avec des fruits frais ou salade maison 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Classique",
      gourmet: "Gourmet",
      benedict: "Benedict",
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
      prime: "Prime"
    },
    items: [
      {
        id: "smoked-salmon-benny",
        name: "Benny Saumon Fumé",
        description: "Deux œufs pochés sur muffin anglais avec saumon fumé et fromage à la crème, garnis de notre fameuse sauce hollandaise et une pincée d'oignons rouges et câpres.",
        price: "23.45",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_BENNY.jpg"
      },
      {
        id: "classic-benedicts",
        name: "Benedicts Classiques",
        description: "Deux œufs parfaitement pochés, jambon servi sur un muffin anglais grillé, garni de notre fameuse sauce hollandaise.",
        price: "18.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BENEDICTS.jpg"
      },
      {
        id: "florentine-benedicts",
        name: "Benedicts Florentine",
        description: "Florentine avec épinards sautés et champignons, cheddar blanc fort servi sur un muffin anglais grillé, garni de notre fameuse sauce hollandaise. Servi avec salade verte mélangée dans une vinaigrette crémeuse à l'érable et balsamique.",
        price: "22.95",
        fresh: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FLORENTINE_BENEDICTS.jpg"
      },
      {
        id: "lobster-benny",
        name: "Benny Homard",
        description: "Deux œufs parfaitement pochés avec homard des Maritimes délicatement sauté sur un muffin anglais grillé avec notre sauce hollandaise classique.",
        price: "30.45",
        premium: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_BENNY.jpg"
      },
      {
        id: "montreal-benny",
        name: "Benny Montréal",
        description: "Muffin anglais avec moutarde, viande fumée de Montréal et fromage suisse, garni de deux œufs parfaitement pochés et notre fameuse sauce hollandaise. Servi avec frites.",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_BENNY.jpg"
      },
      {
        id: "nashville-chicken-benny",
        name: "Benny Poulet Nashville",
        description: "Lanières de poulet croustillantes garnies de notre sauce piquante Nashville avec deux œufs pochés sur un muffin anglais grillé et notre sauce Hollandaise.",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/NASHVILLE_CHICKEN_BENNY.jpg"
      },
      {
        id: "crab-cake-benedict",
        name: "Benedict Gâteau de Crabe",
        description: "Notre propre version du gâteau de crabe avec deux œufs pochés et garni de notre fameuse sauce Hollandaise et oignons verts.",
        price: "24.95",
        specialty: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CRAB_CAKE_BENEDICT.jpg"
      },
      {
        id: "blackstone-eggs",
        name: "Œufs Blackstone",
        description: "Notre fameuse sauce Hollandaise avec deux œufs pochés servis sur muffin anglais grillé avec tomates grillées, bacon et avocat.",
        price: "22.95",
        famous: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BLACKSTONE_EGGS.jpg"
      },
      {
        id: "prime-rib-benedict",
        name: "Benedict Côte de Bœuf",
        description: "Côte de bœuf finement tranchée et oignons caramélisés avec deux œufs pochés sur un muffin anglais grillé avec fromage suisse et notre sauce Hollandaise.",
        price: "24.95",
        prime: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/PRIME_RIB_BENEDICT.jpg"
      }
    ],
    footer: {
      message: "Œufs parfaitement pochés et notre fameuse sauce hollandaise dans chaque benedict",
      tagline: "Où la maîtrise benedict rencontre l'excellence montréalaise"
    }
  },
  es: {
    title: "Benedict & Más Allá",
    subtitle: "Esto es lo que hacemos mejor, y cómo nos hicimos famosos. Todos servidos con nuestras papas estilo lyonnaise. *Excepto Benedicts Florentine y Benedicts con papas fritas",
    back: "Volver",
    substitution: "Sustituir papas estilo lyonnaise con frutas frescas o ensalada de la casa 6.00",
    badges: {
      signature: "Signature",
      premium: "Premium",
      classic: "Clásico",
      gourmet: "Gourmet",
      benedict: "Benedict",
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
      prime: "Prime"
    },
    items: [
      {
        id: "smoked-salmon-benny",
        name: "Benny Salmón Ahumado",
        description: "Dos huevos escalfados en muffin inglés con salmón ahumado y queso crema, cubierto con nuestra famosa salsa holandesa y una pizca de cebollas rojas y alcaparras.",
        price: "23.45",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_BENNY.jpg"
      },
      {
        id: "classic-benedicts",
        name: "Benedicts Clásicos",
        description: "Dos huevos perfectamente escalfados, jamón servido en un muffin inglés tostado, cubierto con nuestra famosa salsa holandesa.",
        price: "18.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BENEDICTS.jpg"
      },
      {
        id: "florentine-benedicts",
        name: "Benedicts Florentine",
        description: "Florentine con espinacas salteadas y champiñones, cheddar blanco fuerte servido en un muffin inglés tostado, cubierto con nuestra famosa salsa holandesa. Servido con ensalada verde mixta en aderezo cremoso de arce balsámico.",
        price: "22.95",
        fresh: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FLORENTINE_BENEDICTS.jpg"
      },
      {
        id: "lobster-benny",
        name: "Benny Langosta",
        description: "Dos huevos perfectamente escalfados con langosta marítima suavemente salteada en un muffin inglés tostado con nuestra salsa holandesa clásica.",
        price: "30.45",
        premium: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_BENNY.jpg"
      },
      {
        id: "montreal-benny",
        name: "Benny Montreal",
        description: "Muffin inglés con mostaza, carne ahumada de Montreal y queso suizo, cubierto con dos huevos perfectamente escalfados y nuestra famosa salsa holandesa. Servido con papas fritas.",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_BENNY.jpg"
      },
      {
        id: "nashville-chicken-benny",
        name: "Benny Pollo Nashville",
        description: "Tiras de pollo crujientes cubiertas con nuestra salsa picante Nashville con dos huevos escalfados en un muffin inglés tostado y nuestra salsa Holandesa.",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/NASHVILLE_CHICKEN_BENNY.jpg"
      },
      {
        id: "crab-cake-benedict",
        name: "Benedict Pastel de Cangrejo",
        description: "Nuestra propia versión del pastel de cangrejo con dos huevos escalfados y cubierto con nuestra famosa salsa Holandesa y cebollas verdes.",
        price: "24.95",
        specialty: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CRAB_CAKE_BENEDICT.jpg"
      },
      {
        id: "blackstone-eggs",
        name: "Huevos Blackstone",
        description: "Nuestra famosa salsa Holandesa con dos huevos escalfados servidos en muffin inglés tostado con tomates a la parrilla, tocino y aguacate.",
        price: "22.95",
        famous: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BLACKSTONE_EGGS.jpg"
      },
      {
        id: "prime-rib-benedict",
        name: "Benedict Costilla Prime",
        description: "Costilla prime finamente rebanada y cebollas caramelizadas con dos huevos escalfados en un muffin inglés tostado con queso suizo y nuestra salsa Holandesa.",
        price: "24.95",
        prime: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/PRIME_RIB_BENEDICT.jpg"
      }
    ],
    footer: {
      message: "Huevos perfectamente escalfados y nuestra famosa salsa holandesa en cada benedict",
      tagline: "Donde la maestría benedict se encuentra con la excelencia montrealeña"
    }
  },
  cn: {
    title: "班尼迪克及更多",
    subtitle: "这是我们最擅长的，也是我们成名的原因。全部配我们的里昂式土豆。*除了佛罗伦萨班尼迪克和配薯条的班尼迪克",
    back: "返回",
    substitution: "用新鲜水果或招牌沙拉替换里昂式土豆 6.00",
    badges: {
      signature: "招牌",
      premium: "高级",
      classic: "经典",
      gourmet: "美食",
      benedict: "班尼迪克",
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
      prime: "顶级"
    },
    items: [
      {
        id: "smoked-salmon-benny",
        name: "烟熏三文鱼班尼",
        description: "英式马芬配两个水波蛋、烟熏三文鱼和奶油奶酪，淋上我们著名的荷兰酱，撒上红洋葱和刺山柑。",
        price: "23.45",
        luxury: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_BENNY.jpg"
      },
      {
        id: "classic-benedicts",
        name: "经典班尼迪克",
        description: "两个完美水波蛋，火腿配烤英式马芬，淋上我们著名的荷兰酱。",
        price: "18.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CLASSIC_BENEDICTS.jpg"
      },
      {
        id: "florentine-benedicts",
        name: "佛罗伦萨班尼迪克",
        description: "佛罗伦萨配炒菠菜和蘑菇，浓郁白切达奶酪配烤英式马芬，淋上我们著名的荷兰酱。配绿色混合沙拉拌奶香枫糖香醋酸奶酱。",
        price: "22.95",
        fresh: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/FLORENTINE_BENEDICTS.jpg"
      },
      {
        id: "lobster-benny",
        name: "龙虾班尼",
        description: "两个完美水波蛋配轻炒海洋龙虾，烤英式马芬配我们经典荷兰酱。",
        price: "30.45",
        premium: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/LOBSTER_BENNY.jpg"
      },
      {
        id: "montreal-benny",
        name: "蒙特利尔班尼",
        description: "英式马芬配芥末、蒙特利尔烟熏肉和瑞士奶酪，配两个完美水波蛋和我们著名的荷兰酱。配薯条。",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREAL_BENNY.jpg"
      },
      {
        id: "nashville-chicken-benny",
        name: "纳什维尔鸡肉班尼",
        description: "酥脆鸡柳配我们辣味纳什维尔辣酱，两个水波蛋配烤英式马芬和我们的荷兰酱。",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/NASHVILLE_CHICKEN_BENNY.jpg"
      },
      {
        id: "crab-cake-benedict",
        name: "蟹饼班尼迪克",
        description: "我们自制蟹饼配两个水波蛋，淋上我们著名的荷兰酱和青葱。",
        price: "24.95",
        specialty: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CRAB_CAKE_BENEDICT.jpg"
      },
      {
        id: "blackstone-eggs",
        name: "黑石鸡蛋",
        description: "我们著名的荷兰酱配两个水波蛋，烤英式马芬配烤番茄、培根和牛油果。",
        price: "22.95",
        famous: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/BLACKSTONE_EGGS.jpg"
      },
      {
        id: "prime-rib-benedict",
        name: "顶级肋排班尼迪克",
        description: "薄切顶级肋排和焦糖洋葱配两个水波蛋，烤英式马芬配瑞士奶酪和我们的荷兰酱。",
        price: "24.95",
        prime: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/PRIME_RIB_BENEDICT.jpg"
      }
    ],
    footer: {
      message: "每份班尼迪克都有完美水波蛋和我们著名的荷兰酱",
      tagline: "班尼迪克大师技艺与蒙特利尔卓越的结合"
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
  if (item.premium) return { text: badges.premium, color: 'bg-purple-700' };
  if (item.classic) return { text: badges.classic, color: 'bg-blue-700' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-green-700' };
  if (item.montreal) return { text: badges.montreal, color: 'bg-red-700' };
  if (item.spicy) return { text: badges.spicy, color: 'bg-red-600' };
  if (item.specialty) return { text: badges.specialty, color: 'bg-indigo-700' };
  if (item.famous) return { text: badges.famous, color: 'bg-yellow-600' };
  if (item.prime) return { text: badges.prime, color: 'bg-amber-700' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-yellow-600' };
  if (item.elegant) return { text: badges.elegant, color: 'bg-indigo-700' };
  if (item.crispy) return { text: badges.crispy, color: 'bg-orange-600' };
  if (item.seafood) return { text: badges.seafood, color: 'bg-blue-600' };
  if (item.artisanal) return { text: badges.artisanal, color: 'bg-teal-600' };
  return { text: badges.benedict, color: "bg-slate-700" };
};

export default function BenedictBeyondPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Benedict Elegance Theme */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Benedict Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🍳</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🥚</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🥓</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🧈</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">👑</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🌟</div>
        <div className="absolute top-1/4 right-1/6 text-3xl opacity-25 transform rotate-30">🥖</div>
        <div className="absolute bottom-1/4 left-1/6 text-4xl opacity-20 transform -rotate-30">🦞</div>
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
          {/* Decorative Line with Crown Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">👑</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-amber-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Egg Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">🍳</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content - Optimized for Tablets 10-12 inches */}
      <main className="px-6 pb-20 pt-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 w-full">
          {t.items.map((item) => {
            const badge = getBadgeInfo(item, t.badges);
            return (
              <article 
                key={item.id} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-amber-200/40 w-full"
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
                  <h3 className="text-lg font-bold text-amber-900 leading-tight group-hover:text-amber-800 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-amber-800 leading-relaxed line-clamp-3 font-medium">
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
                  <div className="pt-4 border-t border-amber-200/60 flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-900">${item.price}</span>
                    <span className="text-sm text-amber-700 font-semibold">CAD</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Substitution Notice */}
        <div className="mt-12 w-full">
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
            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-2"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
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
            <span className="text-2xl mx-3">👑</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-24"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

