import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "The Sandwich Board",
    subtitle: "There's no messing with tradition here - these are straight-up, hard-hitting appetite busters that will have you coming back for more",
    callout: "Dream along!",
    back: "Back",
    accent: "🥪",
    badges: {
      ultimate: "Ultimate",
      perfect: "Perfect",
      classic: "Classic",
      delicious: "Delicious",
      fresh: "Fresh",
      montreal: "Montreal Style",
      signature: "Signature",
      artisanal: "Artisanal",
      gourmet: "Gourmet",
      comfort: "Comfort",
      premium: "Premium",
      traditional: "Traditional",
      hearty: "Hearty",
      authentic: "Authentic"
    },
    items: [
      {
        id: "ultimate-blt",
        name: "The Ultimate BLT",
        description: "Crispy bacon, fresh avocado, lettuce and tomatoes. Served with mayo on focaccia bread",
        price: "18.95",
        ultimate: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/THE_ULTIMATE_BLT.jpg"
      },
      {
        id: "steak-sandwich",
        name: "Steak Sandwich",
        description: "The perfect sandwich: a steak ciabatta panini with Swiss cheese and mushrooms",
        price: "28.95",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_SANDWICH1.jpg"
      },
      {
        id: "tuna-melt",
        name: "Tuna Melt",
        description: "The perfect sandwich: a tuna melt ciabatta panini with Swiss cheese and bruschetta",
        price: "18.45",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/TUNA_MELT.jpg"
      },
      {
        id: "rosemary-chicken",
        name: "Rosemary Chicken Sandwich",
        description: "A delicious grilled chicken breast on focaccia with melted Brie, avocado and rosemary aioli",
        price: "19.45",
        delicious: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ROSMARY_CHICKEN_SANDWICH.jpg"
      },
      {
        id: "avocado-toast",
        name: "Avocado Toast",
        description: "Avocado, tomato bruschetta, arugula, walnuts basil and drizzled with balsamic glaze. Served with fresh fruits",
        price: "18.45",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/AVOCADO_TOAST.jpg",
        addOns: [
          { name: "Add an egg", price: "+2.00" },
          { name: "Add smoked salmon", price: "+6.00" }
        ]
      },
      {
        id: "montreal-sandwich",
        name: "Montreal Sandwich",
        description: "A Montreal classic with a difference, pile of smoked meat, Swiss cheese, mustard on a ciabatta bread",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/montreal_sandwich.jpg"
      },
      {
        id: "club-sandwich",
        name: "Club Sandwich",
        description: "Our version of the classic deli sandwich includes grilled chicken, bacon, lettuce and tomatoes on toasted white bread",
        price: "20.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CLUB_SANDWICH.jpg"
      }
    ]
  },
  fr: {
    title: "The Sandwich Board",
    subtitle: "Ici, on ne plaisante pas avec la tradition - ce sont des sandwichs authentiques et savoureux qui vous feront revenir pour plus",
    callout: "Rêvez avec nous!",
    back: "Retour",
    accent: "🥪",
    badges: {
      ultimate: "Ultime",
      perfect: "Parfait",
      classic: "Classique",
      delicious: "Délicieux",
      fresh: "Frais",
      montreal: "Style Montréal",
      signature: "Signature",
      artisanal: "Artisanal",
      gourmet: "Gourmet",
      comfort: "Réconfort",
      premium: "Premium",
      traditional: "Traditionnel",
      hearty: "Copieux",
      authentic: "Authentique"
    },
    items: [
      {
        id: "ultimate-blt",
        name: "Le BLT Ultime",
        description: "Bacon croustillant, avocat frais, laitue et tomates. Servi avec mayo sur pain focaccia",
        price: "18.95",
        ultimate: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/THE_ULTIMATE_BLT.jpg"
      },
      {
        id: "steak-sandwich",
        name: "Sandwich au Steak",
        description: "Le sandwich parfait : un panini ciabatta au steak avec fromage suisse et champignons",
        price: "28.95",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_SANDWICH1.jpg"
      },
      {
        id: "tuna-melt",
        name: "Croque-Thon",
        description: "Le sandwich parfait : un panini ciabatta au thon avec fromage suisse et bruschetta",
        price: "18.45",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/TUNA_MELT.jpg"
      },
      {
        id: "rosemary-chicken",
        name: "Sandwich au Poulet Romarin",
        description: "Un délicieux blanc de poulet grillé sur focaccia avec brie fondu, avocat et aïoli au romarin",
        price: "19.45",
        delicious: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ROSMARY_CHICKEN_SANDWICH.jpg"
      },
      {
        id: "avocado-toast",
        name: "Toast à l'Avocat",
        description: "Avocat, bruschetta aux tomates, roquette, noix basilic et arrosé de glaçage balsamique. Servi avec fruits frais",
        price: "18.45",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/AVOCADO_TOAST.jpg",
        addOns: [
          { name: "Ajouter un œuf", price: "+2.00" },
          { name: "Ajouter saumon fumé", price: "+6.00" }
        ]
      },
      {
        id: "montreal-sandwich",
        name: "Sandwich Montréalais",
        description: "Un classique montréalais avec une différence, pile de viande fumée, fromage suisse, moutarde sur pain ciabatta",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/montreal_sandwich.jpg"
      },
      {
        id: "club-sandwich",
        name: "Club Sandwich",
        description: "Notre version du sandwich deli classique inclut poulet grillé, bacon, laitue et tomates sur pain blanc grillé",
        price: "20.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CLUB_SANDWICH.jpg"
      }
    ]
  },
  es: {
    title: "The Sandwich Board",
    subtitle: "Aquí no jugamos con la tradición - estos son sándwiches auténticos y contundentes que te harán volver por más",
    callout: "¡Sueña con nosotros!",
    back: "Volver",
    accent: "🥪",
    badges: {
      ultimate: "Supremo",
      perfect: "Perfecto",
      classic: "Clásico",
      delicious: "Delicioso",
      fresh: "Fresco",
      montreal: "Estilo Montreal",
      signature: "Firma",
      artisanal: "Artesanal",
      gourmet: "Gourmet",
      comfort: "Confort",
      premium: "Premium",
      traditional: "Tradicional",
      hearty: "Abundante",
      authentic: "Auténtico"
    },
    items: [
      {
        id: "ultimate-blt",
        name: "El BLT Supremo",
        description: "Tocino crujiente, aguacate fresco, lechuga y tomates. Servido con mayo en pan focaccia",
        price: "18.95",
        ultimate: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/THE_ULTIMATE_BLT.jpg"
      },
      {
        id: "steak-sandwich",
        name: "Sándwich de Bistec",
        description: "El sándwich perfecto: un panini ciabatta de bistec con queso suizo y champiñones",
        price: "28.95",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_SANDWICH1.jpg"
      },
      {
        id: "tuna-melt",
        name: "Tuna Melt",
        description: "El sándwich perfecto: un panini ciabatta de atún con queso suizo y bruschetta",
        price: "18.45",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/TUNA_MELT.jpg"
      },
      {
        id: "rosemary-chicken",
        name: "Sándwich de Pollo al Romero",
        description: "Una deliciosa pechuga de pollo a la parrilla en focaccia con brie derretido, aguacate y alioli de romero",
        price: "19.45",
        delicious: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ROSMARY_CHICKEN_SANDWICH.jpg"
      },
      {
        id: "avocado-toast",
        name: "Tostada de Aguacate",
        description: "Aguacate, bruschetta de tomate, rúcula, nueces albahaca y rociado con glaseado balsámico. Servido con frutas frescas",
        price: "18.45",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/AVOCADO_TOAST.jpg",
        addOns: [
          { name: "Agregar un huevo", price: "+2.00" },
          { name: "Agregar salmón ahumado", price: "+6.00" }
        ]
      },
      {
        id: "montreal-sandwich",
        name: "Sándwich de Montreal",
        description: "Un clásico de Montreal con diferencia, pila de carne ahumada, queso suizo, mostaza en pan ciabatta",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/montreal_sandwich.jpg"
      },
      {
        id: "club-sandwich",
        name: "Club Sándwich",
        description: "Nuestra versión del clásico sándwich deli incluye pollo a la parrilla, tocino, lechuga y tomates en pan blanco tostado",
        price: "20.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CLUB_SANDWICH.jpg"
      }
    ]
  },
  cn: {
    title: "三明治板",
    subtitle: "这里不会搞砸传统 - 这些都是直接、强力的食欲克星，会让你回来要更多",
    callout: "一起做梦吧！",
    back: "返回",
    accent: "🥪",
    badges: {
      ultimate: "终极",
      perfect: "完美",
      classic: "经典",
      delicious: "美味",
      fresh: "新鲜",
      montreal: "蒙特利尔风格",
      signature: "招牌",
      artisanal: "手工",
      gourmet: "美食",
      comfort: "温暖",
      premium: "高级",
      traditional: "传统",
      hearty: "丰盛",
      authentic: "正宗"
    },
    items: [
      {
        id: "ultimate-blt",
        name: "终极BLT",
        description: "酥脆培根、新鲜牛油果、生菜和西红柿。配蛋黄酱在佛卡夏面包上",
        price: "18.95",
        ultimate: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/THE_ULTIMATE_BLT.jpg"
      },
      {
        id: "steak-sandwich",
        name: "牛排三明治",
        description: "完美的三明治：牛排恰巴塔帕尼尼配瑞士奶酪和蘑菇",
        price: "28.95",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/STEAK_SANDWICH1.jpg"
      },
      {
        id: "tuna-melt",
        name: "金枪鱼融化",
        description: "完美的三明治：金枪鱼融化恰巴塔帕尼尼配瑞士奶酪和意式烤面包",
        price: "18.45",
        perfect: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/TUNA_MELT.jpg"
      },
      {
        id: "rosemary-chicken",
        name: "迷迭香鸡肉三明治",
        description: "美味的烤鸡胸肉在佛卡夏面包上配融化的布里奶酪、牛油果和迷迭香蒜泥蛋黄酱",
        price: "19.45",
        delicious: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/ROSMARY_CHICKEN_SANDWICH.jpg"
      },
      {
        id: "avocado-toast",
        name: "牛油果吐司",
        description: "牛油果、番茄意式烤面包、芝麻菜、核桃罗勒淋上香醋釉。配新鲜水果",
        price: "18.45",
        fresh: true,
        allergens: ["/icons/wheat_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/AVOCADO_TOAST.jpg",
        addOns: [
          { name: "加一个鸡蛋", price: "+2.00" },
          { name: "加烟熏三文鱼", price: "+6.00" }
        ]
      },
      {
        id: "montreal-sandwich",
        name: "蒙特利尔三明治",
        description: "有差异的蒙特利尔经典，一堆熏肉、瑞士奶酪、芥末在恰巴塔面包上",
        price: "20.95",
        montreal: true,
        allergens: ["/icons/wheat_icon.png", "/icons/dairy_icon.png"],
        spiciness: 1,
        image: "/images/montreal_sandwich.jpg"
      },
      {
        id: "club-sandwich",
        name: "俱乐部三明治",
        description: "我们版本的经典熟食三明治包括烤鸡、培根、生菜和西红柿在烤白面包上",
        price: "20.95",
        classic: true,
        allergens: ["/icons/wheat_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/CLUB_SANDWICH.jpg"
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
  if (item.ultimate) return { text: badges.ultimate, color: 'bg-red-600' };
  if (item.perfect) return { text: badges.perfect, color: 'bg-emerald-600' };
  if (item.delicious) return { text: badges.delicious, color: 'bg-orange-600' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-green-500' };
  if (item.montreal) return { text: badges.montreal, color: 'bg-blue-600' };
  if (item.classic) return { text: badges.classic, color: 'bg-amber-600' };
  if (item.signature) return { text: badges.signature, color: 'bg-purple-600' };
  if (item.artisanal) return { text: badges.artisanal, color: 'bg-yellow-600' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-indigo-600' };
  if (item.comfort) return { text: badges.comfort, color: 'bg-rose-500' };
  if (item.premium) return { text: badges.premium, color: 'bg-violet-600' };
  if (item.traditional) return { text: badges.traditional, color: 'bg-stone-600' };
  if (item.hearty) return { text: badges.hearty, color: 'bg-brown-600' };
  if (item.authentic) return { text: badges.authentic, color: 'bg-teal-600' };
  return { text: "Special", color: "bg-slate-500" };
};

export default function SandwichBoardPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden font-serif">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 bg-gradient-to-br from-red-300 to-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <header className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90">
              <svg className="w-5 h-5 text-amber-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-serif font-medium text-amber-900">{t.back}</span>
            </button>
          </Link>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
            <span className="text-3xl">{t.accent}</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
          </div>
          
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-900 mb-4 uppercase tracking-wide">
            {t.title}
          </h1>
          
          <div className="relative inline-block">
            <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-amber-900/70 mb-4 max-w-4xl">
              {t.subtitle}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-400 rounded-full"></div>
          </div>
          
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mt-4">
            <span className="font-serif font-bold text-lg italic">{t.callout}</span>
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
                  <div className="absolute inset-0 bg-gradient-to-b group-hover:from-amber-400/5 group-hover:via-orange-400/5 group-hover:to-red-400/5 transition-all duration-500 rounded-3xl"></div>

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
                      <h3 className="font-serif font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl text-amber-900 mb-3 group-hover:text-amber-800 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      {/* Full text display without truncation */}
                      <p className="font-serif font-light text-sm md:text-base lg:text-sm xl:text-base text-amber-900/70 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Add-ons */}
                      {item.addOns && (
                        <div className="mb-4 space-y-1">
                          {item.addOns.map((addon, idx) => (
                            <p key={idx} className="text-xs font-serif text-amber-700 italic">
                              {addon.name} {addon.price}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Price and Allergens Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-amber-900/10">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-amber-800">
                          ${item.price}
                        </span>
                        <span className="font-serif font-medium text-sm text-amber-900/50">
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
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
          </div>
          <p className="font-serif font-light text-amber-900/60 text-sm italic">
            Handcrafted with love, served with Montreal tradition
          </p>
        </div>
      </main>
    </div>
  );
}

