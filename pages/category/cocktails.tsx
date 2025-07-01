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
      },
      footer: {
        message: "Crafted with passion, served with elegance",
        tagline: "Where every sip tells a story of flavor and artistry"
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
      },
      footer: {
        message: "Créés avec passion, servis avec élégance",
        tagline: "Où chaque gorgée raconte une histoire de saveur et d'art"
      }
    },
    es: {
      title: "Cocktails & Sangrias",
      subtitle: "Mezclas refrescantes elaboradas para cada momento",
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
        title: "Cocktails",
        subtitle: "Mixología artesanal para el paladar exigente",
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
        title: "Sangrias",
        subtitle: "Tradición española con un toque moderno",
        items: [
          { name: "Sangria Roja", description: "Vino tinto, jugo de naranja, Ron, brandy de albaricoque" },
          { name: "Sangria Blanca", description: "Vino blanco, jugo de naranja, vodka, licor de melón" },
          { name: "Sangria Rosé", description: "Vino rosé, jugo de toronja, Gin, Peach Schnapps" },
          { name: "Sangria Azul", description: "Vino blanco, piña, lima, Tequila, Blue Curacao" }
        ]
      },
      footer: {
        message: "Elaborados con pasión, servidos con elegancia",
        tagline: "Donde cada sorbo cuenta una historia de sabor y arte"
      }
    },
    cn: {
      title: "鸡尾酒与桑格利亚",
      subtitle: "为每个时刻精心调制的清爽混合饮品",
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
        subtitle: "为挑剔味蕾打造的手工调酒",
        items: [
          { name: "血腥凯撒", description: "伏特加、蛤蜊汁、塔巴斯科、伍斯特酱" },
          { name: "含羞草", description: "普罗塞克、新鲜橙汁" },
          { name: "法式75", description: "普罗塞克、杜松子酒、柠檬汁" },
          { name: "阿佩罗气泡酒", description: "阿佩罗、普罗塞克、橙汁" },
          { name: "覆盆子莫吉托", description: "朗姆酒、覆盆子、薄荷、柠檬水、苏打" },
          { name: "帕洛玛", description: "龙舌兰、新鲜葡萄柚汁" },
          { name: "枫叶之吻", description: "枫叶威士忌、詹姆森、姜汁汽水" },
          { name: "热带微风", description: "马里布、辛辣朗姆酒、菠萝、蔓越莓、7喜" },
          { name: "伏特卡奇诺", description: "卡鲁瓦、伏特加、牛奶、浓缩咖啡、鲜奶油" },
          { name: "波旁柠檬水", description: "波旁威士忌、草莓、柠檬水、苏打" }
        ]
      },
      sangrias: {
        title: "桑格利亚",
        subtitle: "现代风味的西班牙传统",
        items: [
          { name: "红桑格利亚", description: "红酒、橙汁、朗姆酒、杏白兰地" },
          { name: "白桑格利亚", description: "白酒、橙汁、伏特加、蜜瓜利口酒" },
          { name: "玫瑰桑格利亚", description: "玫瑰酒、葡萄柚汁、杜松子酒、桃子杜松子酒" },
          { name: "蓝桑格利亚", description: "白酒、菠萝、青柠、龙舌兰、蓝橙利口酒" }
        ]
      },
      footer: {
        message: "用激情调制，以优雅呈现",
        tagline: "每一口都诉说着风味与艺术的故事"
      }
    }
  };

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

  const t = translations[language] || translations.en;

  if (!isReady) return <div className="text-center mt-20 text-blue-900 font-medium">Loading...</div>;

  const getBadgeColor = (item) => {
    if (item.featured) return 'bg-orange-600';
    if (item.classic) return 'bg-blue-700';
    if (item.elegant) return 'bg-purple-700';
    if (item.refreshing) return 'bg-teal-600';
    if (item.fruity) return 'bg-pink-600';
    if (item.citrus) return 'bg-orange-500';
    if (item.premium) return 'bg-blue-800';
    if (item.tropical) return 'bg-green-600';
    if (item.indulgent) return 'bg-amber-700';
    if (item.smooth) return 'bg-gray-700';
    if (item.special) return 'bg-red-700';
    if (item.exotic) return 'bg-indigo-700';
    return 'bg-blue-600';
  };

  const getBadgeText = (item) => {
    if (item.featured) return t.badges.featured;
    if (item.classic) return t.badges.classic;
    if (item.elegant) return t.badges.elegant;
    if (item.refreshing) return t.badges.refreshing;
    if (item.fruity) return t.badges.fruity;
    if (item.citrus) return t.badges.citrus;
    if (item.premium) return t.badges.premium;
    if (item.tropical) return t.badges.tropical;
    if (item.indulgent) return t.badges.indulgent;
    if (item.smooth) return t.badges.smooth;
    if (item.special) return t.badges.special;
    if (item.exotic) return t.badges.exotic;
    return t.badges.popular;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Cocktail Elegance Theme ENHANCED */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Enhanced Cocktail Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🍸</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🍹</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🥃</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🍷</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">✨</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🌟</div>
        <div className="absolute top-1/4 right-1/6 text-3xl opacity-25 transform rotate-45">🍊</div>
        <div className="absolute bottom-1/4 left-1/6 text-4xl opacity-20 transform -rotate-30">🍋</div>
      </div>

      {/* Header Section - Enhanced Beauty */}
      <header className="w-full px-6 pt-10 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/95">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-blue-900 font-semibold">{t.back}</span>
            </button>
          </Link>
        </div>
        
        <div className="text-center w-full">
          {/* Enhanced Decorative Line with Cocktail Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4 animate-pulse">🍸</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-blue-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6 italic">
            {t.subtitle}
          </p>
          
          {/* Enhanced Decorative Line with Martini Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4 animate-pulse">🍹</span>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Cocktails Section */}
      <section className="px-4 md:px-6 lg:px-8 pb-12 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 uppercase tracking-wide">
            {t.cocktails.title}
          </h2>
          <p className="text-blue-800 italic font-medium">
            {t.cocktails.subtitle}
          </p>
        </div>
        
        {/* Enhanced Grid with Perfect Image Handling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16">
          {cocktails.map((item, index) => (
            <article key={index} className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
              <div className="absolute inset-0 bg-white/85 backdrop-blur-sm border border-white/70 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              <div className="absolute top-4 right-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${getBadgeColor(item)}`}>
                  {getBadgeText(item)}
                </div>
              </div>
              <div className="relative z-10">
                {/* CORRIGIDO: Container da imagem sem bordas e preenchimento completo - ENHANCED */}
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  {/* CORRIGIDO: Imagem preenchendo completamente o espaço sem bordas - ENHANCED */}
                  <img 
                    src={item.image} 
                    alt={t.cocktails.items[index].name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 rounded-t-3xl" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-blue-900 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                    {t.cocktails.items[index].name}
                  </h3>
                  {/* Texto completo sem truncamento */}
                  <p className="text-blue-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.cocktails.items[index].description}
                  </p>
                  {/* Preço APÓS a descrição, seguindo padrão estabelecido */}
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-xl md:text-2xl font-serif font-bold text-blue-800 leading-none">
                      ${item.price}
                    </span>
                    <span className="text-xs font-serif font-medium text-blue-900/50 uppercase tracking-wide">
                      CAD
                    </span>
                  </div>
                  {/* Ícones de alergênicos e picância APÓS o preço */}
                  <div className="pt-2 border-t border-blue-900/10">
                    <div className="flex flex-wrap gap-2 justify-end">
                      {/* Ícones de picância */}
                      {item.spiciness > 0 && (
                        <div className="flex gap-1">
                          {[...Array(item.spiciness)].map((_, i) => (
                            <span key={i} className="text-red-500 text-lg">🌶️</span>
                          ))}
                        </div>
                      )}
                      {/* Ícones de alergênicos */}
                      {item.tags.map((icon, i) => (
                        <div key={i} className="p-2 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors duration-300">
                          <img src={icon} alt="allergen icon" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-blue-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </section>

      {/* Sangrias Section */}
      <section className="px-4 md:px-6 lg:px-8 pb-12 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2 uppercase tracking-wide">
            {t.sangrias.title}
          </h2>
          <p className="text-purple-800 italic font-medium">
            {t.sangrias.subtitle}
          </p>
        </div>
        
        {/* Enhanced Grid for Sangrias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {sangrias.map((item, index) => (
            <article key={index} className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
              <div className="absolute inset-0 bg-white/85 backdrop-blur-sm border border-white/70 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              <div className="absolute top-4 right-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${getBadgeColor(item)}`}>
                  {getBadgeText(item)}
                </div>
              </div>
              <div className="relative z-10">
                {/* CORRIGIDO: Container da imagem sem bordas e preenchimento completo - ENHANCED */}
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  {/* CORRIGIDO: Imagem preenchendo completamente o espaço sem bordas - ENHANCED */}
                  <img 
                    src={item.image} 
                    alt={t.sangrias.items[index].name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 rounded-t-3xl" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-purple-900 leading-tight group-hover:text-purple-800 transition-colors duration-300">
                    {t.sangrias.items[index].name}
                  </h3>
                  {/* Texto completo sem truncamento */}
                  <p className="text-purple-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.sangrias.items[index].description}
                  </p>
                  {/* Preço APÓS a descrição, seguindo padrão estabelecido */}
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-lg md:text-xl font-serif font-bold text-purple-800 leading-none">
                      {item.price}
                    </span>
                    <span className="text-xs font-serif font-medium text-purple-900/50 uppercase tracking-wide">
                      CAD
                    </span>
                  </div>
                  {/* Ícones de alergênicos APÓS o preço */}
                  {item.tags.length > 0 && (
                    <div className="pt-2 border-t border-purple-900/10">
                      <div className="flex flex-wrap gap-2 justify-end">
                        {item.tags.map((icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-purple-50/50 hover:bg-purple-100/50 transition-colors duration-300">
                            <img src={icon} alt="allergen icon" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-purple-400/5 group-hover:via-blue-400/5 group-hover:to-purple-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </section>

      {/* Enhanced Footer */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-pulse">🍸</span>
            <h3 className="text-xl font-bold">{t.footer.message}</h3>
            <span className="text-3xl animate-pulse">🍹</span>
          </div>
          <p className="text-blue-100 text-lg italic">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

