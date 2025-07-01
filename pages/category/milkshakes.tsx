import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Milkshakes",
    subtitle: "Creamy indulgence in every sip",
    back: "Back",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "Vanilla Milkshake",
        description: "Classic vanilla flavour blended to perfection with premium ice cream and fresh milk",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "chocolate-milkshake",
        name: "Chocolate Milkshake",
        description: "Rich chocolate delight with a smooth finish, made with Belgian chocolate",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "strawberry-milkshake",
        name: "Strawberries Milkshake",
        description: "Bursting with real strawberry flavor and fresh berry pieces",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "coffee-milkshake",
        name: "Coffee Milkshake",
        description: "A bold blend for coffee lovers with espresso and vanilla ice cream",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "baileys-add-on",
        name: "Add Bailey's",
        description: "Enhance your milkshake with Bailey's Irish Cream for an adult twist",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
    ],
    footer: {
      message: "Creamy perfection crafted with love and premium ingredients",
      tagline: "Where every sip is a moment of pure indulgence"
    }
  },
  fr: {
    title: "Milkshakes",
    subtitle: "Indulgence crémeuse à chaque gorgée",
    back: "Retour",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "Milkshake Vanille",
        description: "Saveur vanille classique parfaitement mixée avec glace premium et lait frais",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "chocolate-milkshake",
        name: "Milkshake Chocolat",
        description: "Délice au chocolat riche et fondant, préparé avec chocolat belge",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "strawberry-milkshake",
        name: "Milkshake Fraise",
        description: "Rempli de saveur de fraise naturelle avec morceaux de fruits frais",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "coffee-milkshake",
        name: "Milkshake Café",
        description: "Un mélange audacieux pour les amateurs de café avec espresso et glace vanille",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "baileys-add-on",
        name: "Ajoutez du Bailey's",
        description: "Rehaussez votre milkshake avec de la crème Bailey's pour une touche adulte",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
    ],
    footer: {
      message: "Perfection crémeuse créée avec amour et ingrédients premium",
      tagline: "Où chaque gorgée est un moment de pure indulgence"
    }
  },
  es: {
    title: "Milkshakes",
    subtitle: "Indulgencia cremosa en cada sorbo",
    back: "Volver",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "Milkshake de Vainilla",
        description: "Sabor clásico de vainilla mezclado a la perfección con helado premium y leche fresca",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "chocolate-milkshake",
        name: "Milkshake de Chocolate",
        description: "Delicia rica en chocolate con acabado suave, hecho con chocolate belga",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "strawberry-milkshake",
        name: "Milkshake de Fresas",
        description: "Lleno de sabor real de fresa con trozos de bayas frescas",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "coffee-milkshake",
        name: "Milkshake de Café",
        description: "Una mezcla audaz para los amantes del café con espresso y helado de vainilla",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "baileys-add-on",
        name: "Agregar Bailey's",
        description: "Mejora tu milkshake con crema irlandesa Bailey's para un toque adulto",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
    ],
    footer: {
      message: "Perfección cremosa elaborada con amor e ingredientes premium",
      tagline: "Donde cada sorbo es un momento de pura indulgencia"
    }
  },
  cn: {
    title: "奶昔",
    subtitle: "每一口都是奶香的享受",
    back: "返回",
    accent: "🥤",
    items: [
      {
        id: "vanilla-milkshake",
        name: "香草奶昔",
        description: "经典香草口味，用优质冰淇淋和新鲜牛奶完美调制",
        price: "10.00",
        featured: true,
        image: "/images/VANILLA_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "chocolate-milkshake",
        name: "巧克力奶昔",
        description: "浓郁巧克力美味，口感顺滑，采用比利时巧克力制作",
        price: "11.00",
        premium: true,
        image: "/images/CHOCOLATE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "strawberry-milkshake",
        name: "草莓奶昔",
        description: "充满真正草莓风味和新鲜浆果块",
        price: "12.00",
        special: true,
        image: "/images/STRAWBERRY_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "coffee-milkshake",
        name: "咖啡奶昔",
        description: "为咖啡爱好者调制的浓郁混合，含浓缩咖啡和香草冰淇淋",
        price: "12.00",
        energizing: true,
        image: "/images/COFFEE_MILKSHAKE_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
      {
        id: "baileys-add-on",
        name: "添加百利甜酒",
        description: "用百利爱尔兰奶油增强您的奶昔，增添成人风味",
        price: "+4.00",
        addon: true,
        image: "/images/BAILEYS_ADDON_LANDSCAPE.jpg",
        tags: ["/icons/dairy_icon.png"]
      },
    ],
    footer: {
      message: "用爱心和优质原料制作的奶香完美",
      tagline: "每一口都是纯粹享受的时刻"
    }
  }
};

const getBadgeInfo = (item) => {
  if (item.featured) return { text: 'Classic', color: 'bg-amber-500' };
  if (item.premium) return { text: 'Premium', color: 'bg-purple-600' };
  if (item.special) return { text: 'Fresh', color: 'bg-pink-500' };
  if (item.energizing) return { text: 'Energizing', color: 'bg-orange-600' };
  if (item.addon) return { text: 'Add-On', color: 'bg-emerald-600' };
  return { text: 'Creamy', color: 'bg-blue-500' };
};

export default function MilkshakesPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden font-serif">
      
      {/* ENHANCED Milkshake Background Pattern - TOQUE MÁGICO */}
      <div className="absolute inset-0 opacity-4">
        {/* Cream Swirls - Enhanced */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-48 h-48 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Cream Dots - Enhanced with Animation */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-200 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-blue-200 rounded-full opacity-25 animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-pink-200 rounded-full opacity-35 animate-bounce delay-1000"></div>
        
        {/* Magical Milkshake Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12 animate-pulse">🥤</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12 animate-pulse delay-500">🍓</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45 animate-pulse delay-1000">🍫</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45 animate-pulse delay-1500">🥛</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12 animate-pulse delay-2000">✨</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12 animate-pulse delay-2500">🌟</div>
      </div>

      {/* ENHANCED Header - TOQUE MÁGICO */}
      <header className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="group flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-pink-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/95 hover:scale-105">
              <svg className="w-5 h-5 text-purple-900 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-serif font-semibold text-purple-900">{t.back}</span>
            </button>
          </Link>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Decorative Line with Animated Milkshake Emoji */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl animate-bounce">{t.accent}</span>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-purple-900 mb-4 uppercase tracking-wide">
            {t.title}
          </h1>
          
          <div className="relative inline-block">
            <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-purple-900/70 mb-6">
              {t.subtitle}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Enhanced Decorative Line with Sparkle Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4 animate-pulse">✨</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* ENHANCED Main Content - TOQUE MÁGICO */}
      <main className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        {/* Grid seguindo padrão EXATO estabelecido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {t.items.map((item, index) => {
            const badge = getBadgeInfo(item);
            return (
              <article
                key={item.id}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:rotate-1"
              >
                {/* Enhanced Glassmorphism Background */}
                <div className="absolute inset-0 bg-white/85 backdrop-blur-sm border border-white/70 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${badge.color}`}>
                    {badge.text}
                  </div>
                </div>

                <div className="relative z-10">
                  {/* CORRIGIDO: Container da imagem sem bordas e preenchimento completo - TOQUE MÁGICO */}
                  <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                    {/* CORRIGIDO: Imagem preenchendo completamente o espaço sem bordas - ENHANCED */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 rounded-t-3xl"
                      onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                    />
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-purple-900 leading-tight group-hover:text-purple-800 transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    {/* Texto completo sem truncamento */}
                    <p className="text-purple-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                      {item.description}
                    </p>
                    
                    {/* Preço APÓS a descrição, seguindo padrão estabelecido */}
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-xl md:text-2xl font-serif font-bold text-purple-800 leading-none">
                        ${item.price}
                      </span>
                      <span className="text-xs font-serif font-medium text-purple-900/50 uppercase tracking-wide">
                        CAD
                      </span>
                    </div>
                    
                    {/* ADICIONADO: Ícones de alergênicos de leite APÓS o preço - TOQUE MÁGICO */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="pt-2 border-t border-purple-900/10">
                        <div className="flex flex-wrap gap-2 justify-end">
                          {item.tags.map((icon, i) => (
                            <div key={i} className="p-2 rounded-lg bg-pink-50/50 hover:bg-pink-100/50 transition-colors duration-300 group/icon">
                              <img 
                                src={icon} 
                                alt="dairy allergen icon" 
                                className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-300 group-hover/icon:scale-110" 
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Cream Swirl Effect on Hover - TOQUE MÁGICO */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-sm animate-spin"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-300/30 to-pink-300/30 rounded-full blur-sm animate-spin delay-500"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-sm animate-ping"></div>
                </div>

                {/* Enhanced Gradient Overlay - TOQUE MÁGICO */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-pink-400/5 group-hover:via-purple-400/5 group-hover:to-blue-400/5 transition-all duration-500 pointer-events-none"></div>
              </article>
            );
          })}
        </div>
      </main>

      {/* ENHANCED Footer - TOQUE MÁGICO */}
      <div className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-bounce">🥤</span>
            <h3 className="text-xl font-bold">{t.footer.message}</h3>
            <span className="text-3xl animate-bounce delay-500">✨</span>
          </div>
          <p className="text-purple-100 text-lg italic">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

