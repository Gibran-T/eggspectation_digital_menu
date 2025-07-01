import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function OmelettesEggectera() {
  const { language } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsReady(true));
  }, []);

  const translations = {
    en: {
      title: "Omelettes Eggectera",
      subtitle: "We know that once you've had one of our perfect free run 3-egg omelettes, you'll be back for many more. So we suggest you just start at the top of this list and work your way down. All served with our Lyonnaise-style potatoes. *Except Montrealer Omelette",
      back: "Back",
      lowFat: "Ask for a low-fat version: one yolk with three whites. It maintains the proper amino acid structure, giving it all the benefits of the protein in eggs for 2.95",
      addIngredient: "Add an additional ingredient to your omelette for 2.45",
      substitution: "Substitute Lyonnaise-style potatoes with fresh fruits or house salad 6.00",
      items: [
        {
          name: "Southwest Sunrise",
          description: "A special omelette filled with 3 cheeses mix, peppers, then topped with strip of freshly sliced avocado, our special salsa and sour cream"
        },
        {
          name: "Veggie Omelette",
          description: "This omelette appeals to everyone, with sautéed mushrooms, peppers, spinach, asparagus and caramelized onions"
        },
        {
          name: "Meat Lovers Omelette",
          description: "Filled with bacon, sausage, ham and cheddar cheese"
        },
        {
          name: "Eggspectation Omelette",
          description: "Where it all began! Three eggs mixed with mushrooms, onions, peppers, bacon, sausage, ham and cheddar cheese"
        },
        {
          name: "Lobster Omelette",
          description: "A generous portion of gently sautéed lobster, Swiss cheese and green onions, topped with our classic hollandaise sauce"
        },
        {
          name: "Montrealer Omelette",
          description: "A true local favorite, filled with smoked meat and Swiss cheese and a pickle. Served with fries"
        },
        {
          name: "Mykonos Omelette",
          description: "Sun-dried tomato with red onion, spinach, Kalamata olives and feta cheese garnished with oregano"
        }
      ],
      footer: {
        message: "Perfect 3-egg free run omelettes crafted with Montreal passion",
        tagline: "Where every fold tells a golden story of morning perfection"
      }
    },
    fr: {
      title: "Omelettes Eggectera",
      subtitle: "Nous savons qu'une fois que vous aurez goûté une de nos parfaites omelettes à 3 œufs de poules élevées au sol, vous reviendrez pour beaucoup d'autres. Nous suggérons donc de commencer en haut de cette liste et de descendre. Toutes servies avec nos pommes de terre à la lyonnaise. *Sauf Omelette Montréalaise",
      back: "Retour",
      lowFat: "Demandez une version faible en gras: un jaune avec trois blancs. Cela maintient la structure d'acides aminés appropriée, donnant tous les bénéfices de la protéine des œufs pour 2.95",
      addIngredient: "Ajoutez un ingrédient supplémentaire à votre omelette pour 2.45",
      substitution: "Substituer les pommes de terre à la lyonnaise avec des fruits frais ou salade maison 6.00",
      items: [
        {
          name: "Lever du Soleil du Sud-Ouest",
          description: "Une omelette spéciale remplie d'un mélange de 3 fromages, poivrons, puis garnie de lanières d'avocat fraîchement tranché, notre salsa spéciale et crème sure"
        },
        {
          name: "Omelette Végétarienne",
          description: "Cette omelette plaît à tous, avec champignons sautés, poivrons, épinards, asperges et oignons caramélisés"
        },
        {
          name: "Omelette Amateurs de Viande",
          description: "Remplie de bacon, saucisse, jambon et fromage cheddar"
        },
        {
          name: "Omelette Eggspectation",
          description: "Là où tout a commencé! Trois œufs mélangés avec champignons, oignons, poivrons, bacon, saucisse, jambon et fromage cheddar"
        },
        {
          name: "Omelette au Homard",
          description: "Une généreuse portion de homard délicatement sauté, fromage suisse et oignons verts, garnie de notre sauce hollandaise classique"
        },
        {
          name: "Omelette Montréalaise",
          description: "Un vrai favori local, remplie de viande fumée et fromage suisse avec un cornichon. Servie avec frites"
        },
        {
          name: "Omelette Mykonos",
          description: "Tomate séchée avec oignon rouge, épinards, olives Kalamata et fromage feta garni d'origan"
        }
      ],
      footer: {
        message: "Parfaites omelettes à 3 œufs de poules élevées au sol créées avec passion montréalaise",
        tagline: "Où chaque pli raconte une histoire dorée de perfection matinale"
      }
    },
    es: {
      title: "Omelettes Eggectera",
      subtitle: "Sabemos que una vez que hayas probado una de nuestras perfectas tortillas de 3 huevos de gallinas criadas en libertad, volverás por muchas más. Así que sugerimos que comiences desde arriba de esta lista y vayas bajando. Todas servidas con nuestras papas estilo lyonnaise. *Excepto Tortilla Montrealeña",
      back: "Volver",
      lowFat: "Pide una versión baja en grasa: una yema con tres claras. Mantiene la estructura de aminoácidos apropiada, dando todos los beneficios de la proteína de los huevos por 2.95",
      addIngredient: "Agrega un ingrediente adicional a tu tortilla por 2.45",
      substitution: "Sustituir papas estilo lyonnaise con frutas frescas o ensalada de la casa 6.00",
      items: [
        {
          name: "Amanecer del Suroeste",
          description: "Una tortilla especial rellena con mezcla de 3 quesos, pimientos, luego cubierta con tiras de aguacate recién rebanado, nuestra salsa especial y crema agria"
        },
        {
          name: "Tortilla Vegetariana",
          description: "Esta tortilla atrae a todos, con champiñones salteados, pimientos, espinacas, espárragos y cebollas caramelizadas"
        },
        {
          name: "Tortilla Amantes de la Carne",
          description: "Rellena con tocino, salchicha, jamón y queso cheddar"
        },
        {
          name: "Tortilla Eggspectation",
          description: "¡Donde todo comenzó! Tres huevos mezclados con champiñones, cebollas, pimientos, tocino, salchicha, jamón y queso cheddar"
        },
        {
          name: "Tortilla de Langosta",
          description: "Una generosa porción de langosta suavemente salteada, queso suizo y cebollas verdes, cubierta con nuestra salsa holandesa clásica"
        },
        {
          name: "Tortilla Montrealeña",
          description: "Una verdadera favorita local, rellena con carne ahumada y queso suizo con un pepinillo. Servida con papas fritas"
        },
        {
          name: "Tortilla Mykonos",
          description: "Tomate seco con cebolla roja, espinacas, aceitunas Kalamata y queso feta adornado con orégano"
        }
      ],
      footer: {
        message: "Perfectas tortillas de 3 huevos de gallinas criadas en libertad elaboradas con pasión montrealeña",
        tagline: "Donde cada pliegue cuenta una historia dorada de perfección matutina"
      }
    },
    cn: {
      title: "煎蛋卷等等",
      subtitle: "我们知道，一旦您品尝过我们完美的散养3蛋煎蛋卷，您会回来要更多。所以我们建议您从这个列表的顶部开始，一路往下。全部配我们的里昂式土豆。*除了蒙特利尔煎蛋卷",
      back: "返回",
      lowFat: "要求低脂版本：一个蛋黄配三个蛋白。它保持适当的氨基酸结构，提供鸡蛋蛋白质的所有好处，价格2.95",
      addIngredient: "为您的煎蛋卷添加额外配料，价格2.45",
      substitution: "用新鲜水果或招牌沙拉替换里昂式土豆 6.00",
      items: [
        {
          name: "西南日出",
          description: "特制煎蛋卷，填充3种奶酪混合、辣椒，然后配上新鲜切片牛油果条、我们的特制莎莎酱和酸奶油"
        },
        {
          name: "蔬菜煎蛋卷",
          description: "这款煎蛋卷吸引所有人，配炒蘑菇、辣椒、菠菜、芦笋和焦糖洋葱"
        },
        {
          name: "肉食爱好者煎蛋卷",
          description: "填充培根、香肠、火腿和切达奶酪"
        },
        {
          name: "Eggspectation煎蛋卷",
          description: "一切开始的地方！三个鸡蛋混合蘑菇、洋葱、辣椒、培根、香肠、火腿和切达奶酪"
        },
        {
          name: "龙虾煎蛋卷",
          description: "大份轻炒龙虾、瑞士奶酪和青葱，配我们经典荷兰酱"
        },
        {
          name: "蒙特利尔煎蛋卷",
          description: "真正的当地最爱，填充烟熏肉和瑞士奶酪配腌菜。配薯条"
        },
        {
          name: "米科诺斯煎蛋卷",
          description: "晒干番茄配红洋葱、菠菜、卡拉马塔橄榄和羊奶酪，配牛至叶"
        }
      ],
      footer: {
        message: "用蒙特利尔激情制作的完美3蛋散养煎蛋卷",
        tagline: "每一折都诉说着晨间完美的金色故事"
      }
    }
  };

  const omelettesData = [
    {
      image: "/images/SOUTHWEST_SUNRISE.jpg",
      price: "19.95",
      sunrise: true,
      spiciness: 1,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    },
    {
      image: "/images/VEGGIE_OMELETTE.jpg",
      price: "18.95",
      veggie: true,
      tags: ["/icons/egg_icon.png"]
    },
    {
      image: "/images/MEAT_LOVERS_OMELETTE.jpg",
      price: "19.95",
      meat: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    },
    {
      image: "/images/EGGSPECTATION_OMELETTE.jpg",
      price: "20.95",
      signature: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    },
    {
      image: "/images/LOBSTER_OMELETTE.jpg",
      price: "30.95",
      luxury: true,
      tags: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png"]
    },
    {
      image: "/images/MONTREALER_OMELETTE.jpg",
      price: "20.95",
      montreal: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    },
    {
      image: "/images/MYKONOS_OMELETTE.jpg",
      price: "20.95",
      greek: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    }
  ];

  const t = translations[language] || translations.en;

  if (!isReady) return <div className="text-center mt-20 text-yellow-900 font-medium">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Omelette Golden Theme */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-3xl transform rotate-30" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-2xl transform -rotate-30" />
        
        {/* Golden Omelette Emojis Scattered */}
        <div className="absolute top-24 left-1/5 text-7xl opacity-15 transform rotate-12">🍳</div>
        <div className="absolute top-1/4 right-1/5 text-6xl opacity-20 transform -rotate-12">🥚</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl opacity-25 transform rotate-45">🧀</div>
        <div className="absolute bottom-32 right-1/4 text-6xl opacity-15 transform -rotate-45">🌅</div>
        <div className="absolute top-1/2 left-1/8 text-4xl opacity-30 transform rotate-12">✨</div>
        <div className="absolute top-2/3 right-1/8 text-5xl opacity-20 transform -rotate-12">🥓</div>
        <div className="absolute top-1/3 right-1/8 text-4xl opacity-25 transform rotate-30">🌶️</div>
        <div className="absolute bottom-1/3 left-1/8 text-5xl opacity-20 transform -rotate-30">🦞</div>
        <div className="absolute top-3/4 left-2/3 text-3xl opacity-35 transform rotate-15">🍅</div>
        <div className="absolute top-1/6 left-2/3 text-4xl opacity-25 transform -rotate-15">🥑</div>
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
            <span className="text-5xl mx-4">🌅</span>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-yellow-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Omelette Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🍳</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 pb-12 relative z-10">
        {/* Grid seguindo padrão EXATO estabelecido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {omelettesData.map((item, index) => (
            <article key={index} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.luxury ? 'ring-2 ring-purple-400/50' : item.signature ? 'ring-2 ring-amber-400/50' : item.sunrise ? 'ring-2 ring-orange-400/50' : ''}`}>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              {(item.luxury || item.signature || item.sunrise || item.veggie || item.meat || item.montreal || item.greek) && (
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${
                    item.luxury ? 'bg-purple-800' : 
                    item.signature ? 'bg-amber-700' : 
                    item.sunrise ? 'bg-orange-600' :
                    item.veggie ? 'bg-green-700' :
                    item.meat ? 'bg-red-700' :
                    item.montreal ? 'bg-red-600' :
                    item.greek ? 'bg-blue-700' : 'bg-yellow-600'
                  }`}>
                    {item.luxury ? 'Luxury' : 
                     item.signature ? 'Signature' : 
                     item.sunrise ? 'Sunrise' :
                     item.veggie ? 'Veggie' :
                     item.meat ? 'Meat' :
                     item.montreal ? 'Montreal' :
                     item.greek ? 'Greek' : 'Omelette'}
                  </div>
                </div>
              )}
              <div className="relative z-10">
                {/* Container da imagem seguindo padrão estabelecido */}
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80 rounded-t-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  {/* Imagem preenchendo completamente o espaço sem bordas */}
                  <img 
                    src={item.image} 
                    alt={t.items[index].name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-yellow-900 leading-tight group-hover:text-yellow-800 transition-colors duration-300">
                    {t.items[index].name}
                  </h2>
                  {/* Texto completo sem truncamento */}
                  <p className="text-yellow-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.items[index].description}
                  </p>
                  {/* Preço APÓS a descrição, seguindo padrão estabelecido */}
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-xl md:text-2xl font-serif font-bold text-yellow-800 leading-none">
                      ${item.price}
                    </span>
                    <span className="text-xs font-serif font-medium text-yellow-900/50 uppercase tracking-wide">
                      CAD
                    </span>
                  </div>
                  {/* Ícones de alergênicos APÓS o preço, com tamanho correto w-6 h-6 */}
                  {(item.tags.length > 0 || item.spiciness > 0) && (
                    <div className="pt-2 border-t border-yellow-900/10">
                      <div className="flex flex-wrap gap-2">
                        {/* Ícones de alergênicos */}
                        {item.tags.map((icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-yellow-50/50 hover:bg-yellow-100/50 transition-colors duration-300">
                            <img src={icon} alt="allergen icon" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                        {/* Ícones de picância */}
                        {item.spiciness > 0 && (
                          <div className="flex gap-1">
                            {Array.from({ length: item.spiciness }, (_, i) => (
                              <div key={i} className="p-2 rounded-lg bg-red-50/50 hover:bg-red-100/50 transition-colors duration-300">
                                <span className="text-red-500 text-lg">🌶️</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/0 via-orange-400/0 to-amber-400/0 group-hover:from-yellow-400/5 group-hover:via-orange-400/5 group-hover:to-amber-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </main>

      {/* Additional Info Sections */}
      <div className="bg-yellow-100/90 backdrop-blur-sm py-4 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-amber-800 text-sm">
            <span className="font-semibold">Low Fat Option:</span> {t.lowFat}
          </p>
          <p className="text-amber-800 text-sm">
            <span className="font-semibold">Extra Ingredient:</span> {t.addIngredient}
          </p>
        </div>
      </div>

      {/* Substitution Note */}
      <div className="bg-orange-100/90 backdrop-blur-sm py-4 px-4 md:px-6 relative z-10">
        <p className="text-center text-amber-800 text-sm max-w-4xl mx-auto">
          <span className="font-semibold">Note:</span> {t.substitution}
        </p>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-yellow-800 to-orange-800 text-white py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl">🍳</span>
            <h3 className="text-xl font-bold">{t.footer.message}</h3>
            <span className="text-3xl">🌅</span>
          </div>
          <p className="text-yellow-100 text-lg italic">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

