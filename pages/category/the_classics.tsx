import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function TheClassics() {
  const { language } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsReady(true));
  }, []);

  const translations = {
    en: {
      title: "The Classics",
      subtitle: "Eggspectation is the original Montreal brunch restaurant. People have been meeting and eating at Eggspectation restaurants since 1993! We use free run eggs, smoked bacon and smoked ham.",
      back: "Back",
      heritage: "Since 1993",
      substitution: "Substitute Lyonnaise-style potatoes with fresh fruits for 6.00",
      addCheese: "Add Cheddar or Swiss cheese to your eggs for 2.95",
      addSalmon: "Add Smoked salmon to Fresh Start for + 6.00",
      items: [
        {
          name: "The All-American",
          description: "Fill up with two, free-range eggs prepared any-style, our perfectly seasoned Lyonnaise-Style potatoes, bacon, ham and sausage"
        },
        {
          name: "The Montrealer",
          description: "A Montrealer favourite with two any-style eggs, pile of smoked meat, pickle and our Lyonnaise-Style potatoes"
        },
        {
          name: "Uneggspected",
          description: "A 8 oz Canadian Sirloin steak cooked just the way you like it, two any-style eggs and our homemade Lyonnaise-Style potatoes"
        },
        {
          name: "Eggstraordinary",
          description: "Our classic dish! Two eggs, prepared any style, choice of brioche French toast, buttermilk pancakes or waffle with maple syrup, a choice of ham, bacon or sausage and our Lyonnaise-Style potatoes"
        },
        {
          name: "Eggspectation Bagel Breakfast Sandwich",
          description: "A B.L.T., wood-fired oven bagel, lettuce and tomato and fried eggs sandwich with Swiss cheese, red onion, bacon or ham. Served with Lyonnaise-style potatoes"
        },
        {
          name: "Fresh Start",
          description: "2 any-style eggs, seasonal fruits and tomato. Add Smoked salmon for + 6.00"
        },
        {
          name: "Breakfast Parfait Bowl",
          description: "Greek fat free yogurt with fresh fruit, berries, honey and a wonderful layer of granola"
        }
      ],
      alaCarte: {
        title: "À la Carte",
        items: [
          { name: "Fresh Fruit Cup", price: "7.00" },
          { name: "Yogurt and Fruits", price: "8.00" },
          { name: "Breakfast Lyonnaise Potatoes", price: "4.00" },
          { name: "Bagel with Cream Cheese", price: "12.00" },
          { name: "Canadian Maple Syrup", price: "3.00" },
          { name: "Pancake (1) or Brioche French Toast (1)", price: "8.00" },
          { name: "Nutella", price: "5.00" }
        ]
      },
      footer: {
        message: "Heritage recipes crafted with Montreal passion since 1993",
        tagline: "Where tradition meets taste, and every bite tells our story",
        closing: "The original Montreal brunch experience"
      }
    },
    fr: {
      title: "Les Classiques",
      subtitle: "Eggspectation est le restaurant brunch original de Montréal. Les gens se rencontrent et mangent dans les restaurants Eggspectation depuis 1993! Nous utilisons des œufs de poules en liberté, du bacon fumé et du jambon fumé.",
      back: "Retour",
      heritage: "Depuis 1993",
      substitution: "Substituer les pommes de terre à la lyonnaise avec des fruits frais pour 6.00",
      addCheese: "Ajouter fromage cheddar ou suisse à vos œufs pour 2.95",
      addSalmon: "Ajouter saumon fumé au Nouveau Départ pour + 6.00",
      items: [
        {
          name: "L'Américain",
          description: "Remplissez-vous avec deux œufs de poules en liberté préparés à votre goût, nos pommes de terre à la lyonnaise parfaitement assaisonnées, bacon, jambon et saucisse"
        },
        {
          name: "Le Montréalais",
          description: "Un favori montréalais avec deux œufs à votre goût, pile de viande fumée, cornichon et nos pommes de terre à la lyonnaise"
        },
        {
          name: "Inattendu",
          description: "Un steak de surlonge canadien de 8 oz cuit comme vous l'aimez, deux œufs à votre goût et nos pommes de terre à la lyonnaise maison"
        },
        {
          name: "Extraordinaire",
          description: "Notre plat classique! Deux œufs, préparés à votre goût, choix de pain doré brioche, crêpes au babeurre ou gaufre avec sirop d'érable, choix de jambon, bacon ou saucisse et nos pommes de terre à la lyonnaise"
        },
        {
          name: "Sandwich Bagel Petit-déjeuner Eggspectation",
          description: "Un B.L.T., bagel de four à bois, laitue et tomate et sandwich aux œufs frits avec fromage suisse, oignon rouge, bacon ou jambon. Servi avec pommes de terre à la lyonnaise"
        },
        {
          name: "Nouveau Départ",
          description: "2 œufs à votre goût, fruits de saison et tomate. Ajouter saumon fumé pour + 6.00"
        },
        {
          name: "Bol Parfait Petit-déjeuner",
          description: "Yogourt grec sans gras avec fruits frais, baies, miel et une merveilleuse couche de granola"
        }
      ],
      alaCarte: {
        title: "À la Carte",
        items: [
          { name: "Coupe de fruits", price: "7.00" },
          { name: "Yogourt et Fruits", price: "8.00" },
          { name: "Pommes de terre déjeuner Lyonnaise", price: "4.00" },
          { name: "Bagel avec fromage à la crème", price: "12.00" },
          { name: "Sirop d'érable canadien", price: "3.00" },
          { name: "Crêpe (1) ou pain doré brioche (1)", price: "8.00" },
          { name: "Nutella", price: "5.00" }
        ]
      },
      footer: {
        message: "Recettes patrimoniales créées avec passion montréalaise depuis 1993",
        tagline: "Où la tradition rencontre le goût, et chaque bouchée raconte notre histoire",
        closing: "L'expérience brunch montréalaise originale"
      }
    },
    es: {
      title: "Los Clásicos",
      subtitle: "Eggspectation es el restaurante brunch original de Montreal. ¡La gente se ha estado reuniendo y comiendo en los restaurantes Eggspectation desde 1993! Usamos huevos de gallinas libres, tocino ahumado y jamón ahumado.",
      back: "Volver",
      heritage: "Desde 1993",
      substitution: "Sustituir papas Lyonnaise con frutas frescas por 6.00",
      addCheese: "Agregar queso cheddar o suizo a tus huevos por 2.95",
      addSalmon: "Agregar salmón ahumado al Comienzo Fresco por + 6.00",
      items: [
        {
          name: "El Americano",
          description: "Lléname con dos huevos de gallinas libres preparados a tu gusto, nuestras papas Lyonnaise perfectamente sazonadas, tocino, jamón y salchicha"
        },
        {
          name: "El Montrealés",
          description: "Un favorito de Montreal con dos huevos a tu gusto, pila de carne ahumada, pepinillo y nuestras papas Lyonnaise"
        },
        {
          name: "Inesperado",
          description: "Un bistec de solomillo canadiense de 8 oz cocinado como te gusta, dos huevos a tu gusto y nuestras papas Lyonnaise caseras"
        },
        {
          name: "Extraordinario",
          description: "¡Nuestro plato clásico! Dos huevos, preparados a tu gusto, elección de tostada francesa brioche, panqueques de suero de leche o waffle con jarabe de arce, elección de jamón, tocino o salchicha y nuestras papas Lyonnaise"
        },
        {
          name: "Sándwich Bagel Desayuno Eggspectation",
          description: "Un B.L.T., bagel de horno de leña, lechuga y tomate y sándwich de huevos fritos con queso suizo, cebolla roja, tocino o jamón. Servido con papas Lyonnaise"
        },
        {
          name: "Comienzo Fresco",
          description: "2 huevos a tu gusto, frutas de temporada y tomate. Agregar salmón ahumado por + 6.00"
        },
        {
          name: "Tazón Parfait Desayuno",
          description: "Yogur griego sin grasa con fruta fresca, bayas, miel y una maravillosa capa de granola"
        }
      ],
      alaCarte: {
        title: "À la Carte",
        items: [
          { name: "Copa de Frutas Frescas", price: "7.00" },
          { name: "Yogur y Frutas", price: "8.00" },
          { name: "Papas Lyonnaise Desayuno", price: "4.00" },
          { name: "Bagel con Queso Crema", price: "12.00" },
          { name: "Jarabe de Arce Canadiense", price: "3.00" },
          { name: "Panqueque (1) o Tostada Francesa Brioche (1)", price: "8.00" },
          { name: "Nutella", price: "5.00" }
        ]
      },
      footer: {
        message: "Recetas patrimoniales elaboradas con pasión montrealeña desde 1993",
        tagline: "Donde la tradición se encuentra con el sabor, y cada bocado cuenta nuestra historia",
        closing: "La experiencia brunch original de Montreal"
      }
    },
    cn: {
      title: "经典系列",
      subtitle: "Eggspectation是蒙特利尔原创早午餐餐厅。自1993年以来，人们一直在Eggspectation餐厅聚会用餐！我们使用散养鸡蛋、烟熏培根和烟熏火腿。",
      back: "返回",
      heritage: "自1993年",
      substitution: "用新鲜水果替换里昂式土豆 6.00",
      addCheese: "为您的鸡蛋添加切达或瑞士奶酪 2.95",
      addSalmon: "为新鲜开始添加烟熏鲑鱼 + 6.00",
      items: [
        {
          name: "全美式",
          description: "用两个任意风格的散养鸡蛋、我们完美调味的里昂式土豆、培根、火腿和香肠填饱肚子"
        },
        {
          name: "蒙特利尔人",
          description: "蒙特利尔最爱，配两个任意风格鸡蛋、一堆烟熏肉、腌菜和我们的里昂式土豆"
        },
        {
          name: "意外惊喜",
          description: "8盎司加拿大西冷牛排按您喜欢的方式烹饪，两个任意风格鸡蛋和我们自制的里昂式土豆"
        },
        {
          name: "非凡",
          description: "我们的经典菜！两个鸡蛋，任意风格制作，选择布里欧修法式吐司、酪乳煎饼或华夫饼配枫糖浆，选择火腿、培根或香肠和我们的里昂式土豆"
        },
        {
          name: "Eggspectation贝果早餐三明治",
          description: "B.L.T.，木火烤贝果，生菜和番茄以及煎蛋三明治配瑞士奶酪、红洋葱、培根或火腿。配里昂式土豆"
        },
        {
          name: "新鲜开始",
          description: "2个任意风格鸡蛋、时令水果和番茄。添加烟熏鲑鱼 + 6.00"
        },
        {
          name: "早餐帕菲碗",
          description: "希腊脱脂酸奶配新鲜水果、浆果、蜂蜜和美妙的燕麦层"
        }
      ],
      alaCarte: {
        title: "单点",
        items: [
          { name: "新鲜水果杯", price: "7.00" },
          { name: "酸奶和水果", price: "8.00" },
          { name: "早餐里昂式土豆", price: "4.00" },
          { name: "贝果配奶油奶酪", price: "12.00" },
          { name: "加拿大枫糖浆", price: "3.00" },
          { name: "煎饼(1)或布里欧修法式吐司(1)", price: "8.00" },
          { name: "榛子巧克力酱", price: "5.00" }
        ]
      },
      footer: {
        message: "自1993年以来用蒙特利尔激情制作的传统食谱",
        tagline: "传统与味道相遇的地方，每一口都诉说着我们的故事",
        closing: "蒙特利尔原创早午餐体验"
      }
    }
  };

  const classicsData = [
    {
      image: "/images/THE_ALL_AMERICAN.jpg",
      price: "18.45",
      classic: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    },
    {
      image: "/images/THE_MONTREALER.jpg",
      price: "18.95",
      montreal: true,
      tags: ["/icons/egg_icon.png"]
    },
    {
      image: "/images/UNEGGSPECTED.jpg",
      price: "30.95",
      premium: true,
      tags: ["/icons/egg_icon.png"]
    },
    {
      image: "/images/EGGSTRAORDINARY.jpg",
      price: "22.95",
      signature: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/BAGEL_BREAKFAST_SANDWICH.jpg",
      price: "19.45",
      hearty: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/FRESH_START.jpg",
      price: "19.45",
      fresh: true,
      tags: ["/icons/egg_icon.png"]
    },
    {
      image: "/images/BREAKFAST_PARFAIT_BOWL.jpg",
      price: "15.95",
      healthy: true,
      tags: ["/icons/dairy_icon.png"]
    }
  ];

  const t = translations[language] || translations.en;

  if (!isReady) return <div className="text-center mt-20 text-red-900 font-medium">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Heritage Montreal Theme ORIGINAL */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-red-400 to-blue-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-blue-300 to-red-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-red-400 to-blue-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-blue-300 to-red-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-red-300 to-blue-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Heritage Montreal Emojis Scattered ORIGINAL */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🏛️</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🍁</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🥚</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🥓</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">⭐</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🍽️</div>
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
          {/* Decorative Line with Heritage Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🏛️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-red-800 text-white text-sm font-semibold rounded-full">
              {t.heritage}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-red-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Maple Leaf Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">🍁</span>
            <div className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 pb-12 relative z-10">
        {/* Grid seguindo padrão EXATO estabelecido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {classicsData.map((item, index) => (
            <article key={index} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.signature ? 'ring-2 ring-red-400/50' : item.premium ? 'ring-2 ring-blue-400/50' : item.montreal ? 'ring-2 ring-red-400/50' : ''}`}>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              {(item.classic || item.montreal || item.premium || item.signature || item.hearty || item.fresh || item.healthy) && (
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${
                    item.classic ? 'bg-blue-700' : 
                    item.montreal ? 'bg-red-700' : 
                    item.premium ? 'bg-blue-800' :
                    item.signature ? 'bg-red-800' :
                    item.hearty ? 'bg-orange-700' :
                    item.fresh ? 'bg-green-700' :
                    item.healthy ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {item.classic ? 'Classic' : 
                     item.montreal ? 'Montreal' : 
                     item.premium ? 'Premium' :
                     item.signature ? 'Signature' :
                     item.hearty ? 'Hearty' :
                     item.fresh ? 'Fresh' :
                     item.healthy ? 'Healthy' : 'Heritage'}
                  </div>
                </div>
              )}
              <div className="relative z-10">
                {/* CORRIGIDO: Container da imagem sem bordas e preenchimento completo - IGUAL BENEDICT */}
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  {/* CORRIGIDO: Imagem preenchendo completamente o espaço sem bordas - IGUAL BENEDICT */}
                  <img 
                    src={item.image} 
                    alt={t.items[index].name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 rounded-t-3xl" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-red-900 leading-tight group-hover:text-red-800 transition-colors duration-300">
                    {t.items[index].name}
                  </h2>
                  {/* Texto completo sem truncamento */}
                  <p className="text-red-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.items[index].description}
                  </p>
                  {/* Preço APÓS a descrição, seguindo padrão estabelecido */}
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-xl md:text-2xl font-serif font-bold text-red-800 leading-none">
                      ${item.price}
                    </span>
                    <span className="text-xs font-serif font-medium text-red-900/50 uppercase tracking-wide">
                      CAD
                    </span>
                  </div>
                  {/* Ícones de alergênicos APÓS o preço, com tamanho correto w-6 h-6 */}
                  {item.tags.length > 0 && (
                    <div className="pt-2 border-t border-red-900/10">
                      <div className="flex flex-wrap gap-2">
                        {/* Ícones de alergênicos */}
                        {item.tags.map((icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-red-50/50 hover:bg-red-100/50 transition-colors duration-300">
                            <img src={icon} alt="allergen icon" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-400/0 via-blue-400/0 to-red-400/0 group-hover:from-red-400/5 group-hover:via-blue-400/5 group-hover:to-red-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </main>

      {/* À la Carte Section */}
      <div className="bg-blue-100/90 backdrop-blur-sm py-6 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-red-900 text-center mb-6">{t.alaCarte.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.alaCarte.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <span className="text-red-900 font-medium">{item.name}</span>
                <span className="text-red-800 font-bold">${item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="bg-red-100/90 backdrop-blur-sm py-4 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-red-800 text-sm">
            <span className="font-semibold">Substitution:</span> {t.substitution}
          </p>
          <p className="text-red-800 text-sm">
            <span className="font-semibold">Add Cheese:</span> {t.addCheese}
          </p>
          <p className="text-red-800 text-sm">
            <span className="font-semibold">Add Salmon:</span> {t.addSalmon}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-red-800 to-blue-800 text-white py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl">🏛️</span>
            <h3 className="text-xl font-bold">{t.footer.message}</h3>
            <span className="text-3xl">🍁</span>
          </div>
          <p className="text-red-100 text-lg italic mb-2">
            {t.footer.tagline}
          </p>
          <p className="text-blue-100 text-base">
            {t.footer.closing}
          </p>
        </div>
      </div>
    </div>
  );
}

