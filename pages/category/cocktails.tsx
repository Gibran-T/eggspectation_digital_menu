import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function CocktailsPage() {
  const { language } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsReady(true));
  }, []);

  const translations = {
    en: {
      title: "Cocktails & Sangrias",
      subtitle: "Refreshing blends crafted for every moment",
      back: "Back",
      badges: {
        popular: "Popular",
        classic: "Classic",
        elegant: "Elegant",
        refreshing: "Refreshing",
        fruity: "Fruity",
        citrus: "Citrus",
        premium: "Premium",
        tropical: "Tropical",
        indulgent: "Indulgent",
        smooth: "Smooth",
        special: "Special",
        exotic: "Exotic",
        featured: "Featured"
      },
      cocktails: {
        title: "Cocktails",
        subtitle: "Artisanal mixology for the discerning palate",
        items: [
          { name: "Bloody Caesar", description: "Vodka, Clamato, Tabasco, Worcestershire" },
          { name: "Mimosa", description: "Prosecco, freshly squeezed orange" },
          { name: "French 75", description: "Prosecco, Gin, lemon juice" },
          { name: "Aperol Spritz", description: "Aperol, Prosecco, orange juice" },
          { name: "Raspberry Mojito", description: "Rum, raspberry, mint, lemonade, soda" },
          { name: "Paloma", description: "Tequila, freshly squeezed grapefruit juice" },
          { name: "Maple Kiss", description: "Maple whiskey, Jameson, ginger ale" },
          { name: "Tropical Breeze", description: "Malibu, Spicy Rum, pineapple, cranberry, 7up" },
          { name: "Vodkaccino", description: "Kahlua, vodka, milk, espresso, whipped cream" },
          { name: "Bourbon Lemonade", description: "Bourbon, strawberry, lemonade, soda" }
        ]
      },
      sangrias: {
        title: "Sangrias",
        subtitle: "Spanish tradition with a modern twist",
        items: [
          { name: "Red Sangria", description: "Red wine, orange juice, Rum, Apricot brandy" },
          { name: "White Sangria", description: "White wine, orange juice, vodka, melon liquor" },
          { name: "Rosé Sangria", description: "Rosé wine, grapefruit juice, Gin, Peach Schnapps" },
          { name: "Blue Sangria", description: "White wine, pineapple, lime, Tequila, Blue Curacao" }
        ]
      }
    },
    fr: {
      title: "Cocktails & Sangrias",
      subtitle: "Des mélanges rafraîchissants et raffinés pour chaque moment",
      back: "Retour",
      badges: {
        popular: "Populaire",
        classic: "Classique",
        elegant: "Élégant",
        refreshing: "Rafraîchissant",
        fruity: "Fruité",
        citrus: "Agrumes",
        premium: "Premium",
        tropical: "Tropical",
        indulgent: "Gourmand",
        smooth: "Doux",
        special: "Spécial",
        exotic: "Exotique",
        featured: "Vedette"
      },
      cocktails: {
        title: "Cocktails",
        subtitle: "Mixologie artisanale pour les palais exigeants",
        items: [
          { name: "Bloody Caesar", description: "Vodka, Clamato, Tabasco, Worcestershire" },
          { name: "Mimosa", description: "Prosecco, orange fraîchement pressée" },
          { name: "French 75", description: "Prosecco, Gin, jus de citron" },
          { name: "Aperol Spritz", description: "Aperol, Prosecco, jus d'orange" },
          { name: "Raspberry Mojito", description: "Rhum, framboise, menthe, limonade, soda" },
          { name: "Paloma", description: "Tequila, jus de pamplemousse fraîchement pressé" },
          { name: "Maple Kiss", description: "Whiskey à l'érable, Jameson, ginger ale" },
          { name: "Tropical Breeze", description: "Malibu, Rhum épicé, ananas, canneberge, 7up" },
          { name: "Vodkaccino", description: "Kahlua, vodka, lait, espresso, crème fouettée" },
          { name: "Bourbon Lemonade", description: "Bourbon, fraise, limonade, soda" }
        ]
      },
      sangrias: {
        title: "Sangrias",
        subtitle: "Tradition espagnole avec une touche moderne",
        items: [
          { name: "Sangria Rouge", description: "Vin rouge, jus d'orange, Rhum, brandy d'abricot" },
          { name: "Sangria Blanche", description: "Vin blanc, jus d'orange, vodka, liqueur de melon" },
          { name: "Sangria Rosé", description: "Vin rosé, jus de pamplemousse, Gin, Peach Schnapps" },
          { name: "Sangria Bleue", description: "Vin blanc, ananas, lime, Tequila, Blue Curacao" }
        ]
      }
    },
    es: {
      title: "Cócteles y Sangrías",
      subtitle: "Mezclas refrescantes para cada ocasión",
      back: "Volver",
      badges: {
        popular: "Popular",
        classic: "Clásico",
        elegant: "Elegante",
        refreshing: "Refrescante",
        fruity: "Afrutado",
        citrus: "Cítrico",
        premium: "Premium",
        tropical: "Tropical",
        indulgent: "Indulgente",
        smooth: "Suave",
        special: "Especial",
        exotic: "Exótico",
        featured: "Destacado"
      },
      cocktails: {
        title: "Cócteles",
        subtitle: "Mixología artesanal para paladares exigentes",
        items: [
          { name: "Bloody Caesar", description: "Vodka, Clamato, Tabasco, Worcestershire" },
          { name: "Mimosa", description: "Prosecco, naranja recién exprimida" },
          { name: "French 75", description: "Prosecco, Gin, jugo de limón" },
          { name: "Aperol Spritz", description: "Aperol, Prosecco, jugo de naranja" },
          { name: "Raspberry Mojito", description: "Ron, frambuesa, menta, limonada, soda" },
          { name: "Paloma", description: "Tequila, jugo de toronja recién exprimido" },
          { name: "Maple Kiss", description: "Whiskey de arce, Jameson, ginger ale" },
          { name: "Tropical Breeze", description: "Malibu, Ron picante, piña, arándano, 7up" },
          { name: "Vodkaccino", description: "Kahlua, vodka, leche, espresso, crema batida" },
          { name: "Bourbon Lemonade", description: "Bourbon, fresa, limonada, soda" }
        ]
      },
      sangrias: {
        title: "Sangrías",
        subtitle: "Tradición española con un toque moderno",
        items: [
          { name: "Sangría Tinta", description: "Vino tinto, jugo de naranja, Ron, brandy de albaricoque" },
          { name: "Sangría Blanca", description: "Vino blanco, jugo de naranja, vodka, licor de melón" },
          { name: "Sangría Rosada", description: "Vino rosado, jugo de toronja, Gin, Peach Schnapps" },
          { name: "Sangría Azul", description: "Vino blanco, piña, lima, Tequila, Blue Curacao" }
        ]
      }
    },
    cn: {
      title: "鸡尾酒和水果酒",
      subtitle: "为每一刻打造的清新混合",
      back: "返回",
      badges: {
        popular: "热门",
        classic: "经典",
        elegant: "优雅",
        refreshing: "清爽",
        fruity: "果味",
        citrus: "柑橘",
        premium: "高级",
        tropical: "热带",
        indulgent: "奢华",
        smooth: "顺滑",
        special: "特色",
        exotic: "异域",
        featured: "精选"
      },
      cocktails: {
        title: "鸡尾酒",
        subtitle: "为挑剔味蕾精心调制的手工鸡尾酒",
        items: [
          { name: "血腥凯撒", description: "伏特加、蛤蜊汁、塔巴斯科、伍斯特沙司" },
          { name: "含羞草", description: "普罗塞克、鲜榨橙汁" },
          { name: "法式75", description: "普罗塞克、杜松子酒、柠檬汁" },
          { name: "阿佩罗气泡酒", description: "阿佩罗、普罗塞克、橙汁" },
          { name: "覆盆子莫吉托", description: "朗姆酒、覆盆子、薄荷、柠檬水、苏打" },
          { name: "帕洛玛", description: "龙舌兰、鲜榨西柚汁" },
          { name: "枫糖之吻", description: "枫糖威士忌、詹姆森、姜汁汽水" },
          { name: "热带微风", description: "马里布、辛辣朗姆酒、菠萝、蔓越莓、7喜" },
          { name: "伏特卡奇诺", description: "卡鲁瓦、伏特加、牛奶、浓缩咖啡、鲜奶油" },
          { name: "波旁柠檬水", description: "波旁威士忌、草莓、柠檬水、苏打" }
        ]
      },
      sangrias: {
        title: "水果酒",
        subtitle: "传统西班牙风味的现代演绎",
        items: [
          { name: "红酒水果酒", description: "红酒、橙汁、朗姆酒、杏白兰地" },
          { name: "白酒水果酒", description: "白酒、橙汁、伏特加、蜜瓜利口酒" },
          { name: "桃红水果酒", description: "桃红酒、西柚汁、杜松子酒、桃子烈酒" },
          { name: "蓝色水果酒", description: "白酒、菠萝、青柠、龙舌兰、蓝橙利口酒" }
        ]
      }
    }
  };

  const t = translations[language] || translations.en;

  // Cocktails data
  const cocktails = [
    {
      price: "14.00",
      image: "/images/BLOODY_CAESAR.jpg",
      tags: [],
      featured: true,
      spiciness: 2
    },
    {
      price: "10.00",
      image: "/images/MIMOSA_CLASSIC.jpg",
      tags: [],
      classic: true,
      spiciness: 0
    },
    {
      price: "13.00",
      image: "/images/FRENCH_75.jpg",
      tags: [],
      elegant: true,
      spiciness: 0
    },
    {
      price: "13.00",
      image: "/images/APEROL_SPRITZ.jpg",
      tags: [],
      refreshing: true,
      spiciness: 0
    },
    {
      price: "13.00",
      image: "/images/RASPBERRY_MOJITO.jpg",
      tags: [],
      fruity: true,
      spiciness: 0
    },
    {
      price: "13.00",
      image: "/images/PALOMA.jpg",
      tags: [],
      citrus: true,
      spiciness: 0
    },
    {
      price: "13.00",
      image: "/images/MAPLE_KISS.jpg",
      tags: [],
      premium: true,
      spiciness: 0
    },
    {
      price: "14.00",
      image: "/images/TROPICAL_BREEZE.jpg",
      tags: [],
      tropical: true,
      spiciness: 1
    },
    {
      price: "14.00",
      image: "/images/VODKACCINO.jpg",
      tags: ["/icons/dairy_icon.png"],
      indulgent: true,
      spiciness: 0
    },
    {
      price: "13.00",
      image: "/images/BOURBON_LEMONADE.jpg",
      tags: [],
      smooth: true,
      spiciness: 0
    }
  ];

  // Sangrias data
  const sangrias = [
    {
      price: "Glass 15 / Pitcher 38",
      image: "/images/RED_SANGRIA.jpg",
      tags: [],
      special: true,
      spiciness: 0
    },
    {
      price: "Glass 15 / Pitcher 38",
      image: "/images/WHITE_SANGRIA.jpg",
      tags: [],
      refreshing: true,
      spiciness: 0
    },
    {
      price: "Glass 15 / Pitcher 38",
      image: "/images/ROSE_SANGRIA.jpg",
      tags: [],
      elegant: true,
      spiciness: 0
    },
    {
      price: "Glass 15 / Pitcher 38",
      image: "/images/BLUE_SANGRIA.jpg",
      tags: [],
      exotic: true,
      spiciness: 0
    }
  ];

  // Function to render spiciness icons
  const renderSpicinessIcons = (level) => {
    if (level === 0) return null;
    
    const icons = [];
    for (let i = 0; i < level; i++) {
      icons.push(
        <img 
          key={`spice-${i}`} 
          src="/icons/spiciness_icon.png" 
          alt="spice level" 
          className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity duration-300" 
        />
      );
    }
    return icons;
  };

  const getBadgeInfo = (item, badges) => {
    if (item.featured) return { text: badges.featured, color: 'bg-amber-500' };
    if (item.classic) return { text: badges.classic, color: 'bg-blue-500' };
    if (item.elegant) return { text: badges.elegant, color: 'bg-purple-500' };
    if (item.refreshing) return { text: badges.refreshing, color: 'bg-teal-500' };
    if (item.fruity) return { text: badges.fruity, color: 'bg-pink-500' };
    if (item.citrus) return { text: badges.citrus, color: 'bg-orange-500' };
    if (item.premium) return { text: badges.premium, color: 'bg-indigo-500' };
    if (item.tropical) return { text: badges.tropical, color: 'bg-green-500' };
    if (item.indulgent) return { text: badges.indulgent, color: 'bg-red-500' };
    if (item.smooth) return { text: badges.smooth, color: 'bg-gray-500' };
    if (item.special) return { text: badges.special, color: 'bg-purple-600' };
    if (item.exotic) return { text: badges.exotic, color: 'bg-cyan-500' };
    return { text: badges.featured, color: 'bg-slate-500' };
  };

  const renderSection = (title, subtitle, items, translations, accent = "🍸") => (
    <section className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
          <span className="text-2xl">{accent}</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-blue-900 mb-3 uppercase tracking-wide">
          {title}
        </h2>
        <p className="font-serif font-light italic text-lg md:text-xl text-blue-900/70">
          {subtitle}
        </p>
      </div>

      {/* Items Grid - Responsive for both tablet orientations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {items.map((item, index) => {
          const badge = getBadgeInfo(item, t.badges);
          return (
            <article key={index} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.featured ? 'ring-2 ring-amber-400/50' : item.premium ? 'ring-2 ring-blue-400/50' : item.special ? 'ring-2 ring-purple-400/50' : item.elegant ? 'ring-2 ring-purple-400/50' : item.exotic ? 'ring-2 ring-cyan-400/50' : ''}`}>
              
              {/* Background with glassmorphism effect */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              
              {/* Badge */}
              {(item.featured || item.premium || item.special || item.classic || item.elegant || item.refreshing || item.fruity || item.citrus || item.tropical || item.indulgent || item.smooth || item.exotic) && (
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${badge.color}`}>
                    {badge.text}
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                {/* Image container - Same dimensions as Mimosas + PC correction */}
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  <img 
                    src={item.image} 
                    alt={translations[index].name} 
                    className="w-full h-full object-cover object-center xl:object-contain 2xl:object-contain group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                
                {/* Content - Same structure as Mimosas */}
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-blue-900 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                      {translations[index].name}
                    </h3>
                    <div className="flex flex-col items-end">
                      <span className="text-xl md:text-2xl font-serif font-bold text-blue-800 leading-none">
                        ${item.price}
                      </span>
                      <span className="text-xs font-serif font-medium text-blue-900/50 uppercase tracking-wide">
                        CAD
                      </span>
                    </div>
                  </div>
                  <p className="text-blue-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {translations[index].description}
                  </p>
                  
                  {/* Allergen icons and spiciness */}
                  {(item.tags.length > 0 || item.spiciness > 0) && (
                    <div className="pt-2 border-t border-blue-900/10">
                      <div className="flex flex-wrap gap-2 items-center">
                        {item.tags.map((icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors duration-300">
                            <img src={icon} alt="allergen icon" className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                        {renderSpicinessIcons(item.spiciness)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-amber-400/5 group-hover:via-blue-400/5 group-hover:to-purple-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          );
        })}
      </div>
    </section>
  );

  if (!isReady) return <div className="text-center mt-20 text-blue-900 font-medium">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 font-serif overflow-x-hidden flex flex-col">
      {/* Header - Same as Mimosas */}
      <header className="px-4 md:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex justify-between items-center mb-6">
          <Link href="/menu">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg className="w-4 h-4 text-blue-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-blue-900 font-serif font-medium">{t.back}</span>
            </button>
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-2">
            {t.title}
          </h1>
          <p className="text-blue-900/70 text-lg font-light italic">
            {t.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-6 lg:px-8 pb-12">
        {/* Cocktails Section */}
        {renderSection(t.cocktails.title, t.cocktails.subtitle, cocktails, t.cocktails.items, "🍸")}
        
        {/* Sangrias Section */}
        {renderSection(t.sangrias.title, t.sangrias.subtitle, sangrias, t.sangrias.items, "🍷")}
      </main>

      {/* Footer - Same as Mimosas */}
      <footer className="py-6 text-center text-blue-900/40 text-xs font-serif">
        <div className="flex justify-center items-center gap-3">
          <div className="h-px w-12 bg-blue-900/20"></div>
          <span>Eggspectation Montréal © {new Date().getFullYear()}</span>
          <div className="h-px w-12 bg-blue-900/20"></div>
        </div>
      </footer>
    </div>
  );
}

