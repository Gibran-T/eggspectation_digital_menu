import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function BenedictBeyond() {
  const { language } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsReady(true));
  }, []);

  const translations = {
    en: {
      title: "Benedict & Beyond",
      subtitle: "This is what we do best, and how we made our name. All served with our Lyonnaise-style potatoes. *Except Florentine Benedicts and Benedicts with fries",
      back: "Back",
      substitution: "Substitute Lyonnaise-style potatoes with fresh fruits or house salad 6.00",
      items: [
        {
          name: "Smoked Salmon Benny",
          description: "Two poached eggs on English muffin with smoked salmon and cream cheese, topped with our famous hollandaise sauce and a sprinkle of red onions and capers"
        },
        {
          name: "Classic Benedicts",
          description: "Two perfectly poached eggs, ham served on a toasted English muffin, topped with our famous hollandaise sauce"
        },
        {
          name: "Florentine Benedicts",
          description: "Florentine with sautéed spinach and mushrooms, strong white cheddar served on a toasted English muffin, topped with our famous hollandaise sauce. Served with green mixed salad tossed in creamy maple balsamic yogurt dressing"
        },
        {
          name: "Lobster Benny",
          description: "Two perfectly poached with gently sautéed Maritime lobster on a toasted English muffin with our classic hollandaise sauce"
        },
        {
          name: "Montreal Benny",
          description: "English muffin with mustard, Montreal smoked meat and Swiss cheese, topped with two perfectly poached eggs and our famous hollandaise sauce. Served with fries"
        },
        {
          name: "Nashville Chicken Benny",
          description: "Crispy chicken tenders topped with our spicy Nashville hot sauce with two poached eggs on a toasted English muffin and our Hollandaise sauce"
        },
        {
          name: "Crab Cake Benedict",
          description: "Our own rendition of the crab cake with two poached eggs and topped with our famous Hollandaise sauce and green onions"
        },
        {
          name: "Blackstone Eggs",
          description: "Our famous Hollandaise sauce with two poached eggs served on toasted English muffin with grilled tomatoes, bacon and avocado"
        },
        {
          name: "Prime Rib Benedict",
          description: "Thinly sliced prime rib and caramelized onions with two poached eggs on a toasted English muffin with Swiss cheese and our Hollandaise sauce"
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
      items: [
        {
          name: "Benny Saumon Fumé",
          description: "Deux œufs pochés sur muffin anglais avec saumon fumé et fromage à la crème, garnis de notre fameuse sauce hollandaise et une pincée d'oignons rouges et câpres"
        },
        {
          name: "Benedicts Classiques",
          description: "Deux œufs parfaitement pochés, jambon servi sur un muffin anglais grillé, garni de notre fameuse sauce hollandaise"
        },
        {
          name: "Benedicts Florentine",
          description: "Florentine avec épinards sautés et champignons, cheddar blanc fort servi sur un muffin anglais grillé, garni de notre fameuse sauce hollandaise. Servi avec salade verte mélangée dans une vinaigrette crémeuse à l'érable et balsamique"
        },
        {
          name: "Benny Homard",
          description: "Deux œufs parfaitement pochés avec homard des Maritimes délicatement sauté sur un muffin anglais grillé avec notre sauce hollandaise classique"
        },
        {
          name: "Benny Montréal",
          description: "Muffin anglais avec moutarde, viande fumée de Montréal et fromage suisse, garni de deux œufs parfaitement pochés et notre fameuse sauce hollandaise. Servi avec frites"
        },
        {
          name: "Benny Poulet Nashville",
          description: "Lanières de poulet croustillantes garnies de notre sauce piquante Nashville avec deux œufs pochés sur un muffin anglais grillé et notre sauce Hollandaise"
        },
        {
          name: "Benedict Gâteau de Crabe",
          description: "Notre propre version du gâteau de crabe avec deux œufs pochés et garni de notre fameuse sauce Hollandaise et oignons verts"
        },
        {
          name: "Œufs Blackstone",
          description: "Notre fameuse sauce Hollandaise avec deux œufs pochés servis sur muffin anglais grillé avec tomates grillées, bacon et avocat"
        },
        {
          name: "Benedict Côte de Bœuf",
          description: "Côte de bœuf finement tranchée et oignons caramélisés avec deux œufs pochés sur un muffin anglais grillé avec fromage suisse et notre sauce Hollandaise"
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
      items: [
        {
          name: "Benny Salmón Ahumado",
          description: "Dos huevos escalfados en muffin inglés con salmón ahumado y queso crema, cubierto con nuestra famosa salsa holandesa y una pizca de cebollas rojas y alcaparras"
        },
        {
          name: "Benedicts Clásicos",
          description: "Dos huevos perfectamente escalfados, jamón servido en un muffin inglés tostado, cubierto con nuestra famosa salsa holandesa"
        },
        {
          name: "Benedicts Florentine",
          description: "Florentine con espinacas salteadas y champiñones, cheddar blanco fuerte servido en un muffin inglés tostado, cubierto con nuestra famosa salsa holandesa. Servido con ensalada verde mixta en aderezo cremoso de arce balsámico"
        },
        {
          name: "Benny Langosta",
          description: "Dos huevos perfectamente escalfados con langosta marítima suavemente salteada en un muffin inglés tostado con nuestra salsa holandesa clásica"
        },
        {
          name: "Benny Montreal",
          description: "Muffin inglés con mostaza, carne ahumada de Montreal y queso suizo, cubierto con dos huevos perfectamente escalfados y nuestra famosa salsa holandesa. Servido con papas fritas"
        },
        {
          name: "Benny Pollo Nashville",
          description: "Tiras de pollo crujientes cubiertas con nuestra salsa picante Nashville con dos huevos escalfados en un muffin inglés tostado y nuestra salsa Holandesa"
        },
        {
          name: "Benedict Pastel de Cangrejo",
          description: "Nuestra propia versión del pastel de cangrejo con dos huevos escalfados y cubierto con nuestra famosa salsa Holandesa y cebollas verdes"
        },
        {
          name: "Huevos Blackstone",
          description: "Nuestra famosa salsa Holandesa con dos huevos escalfados servidos en muffin inglés tostado con tomates a la parrilla, tocino y aguacate"
        },
        {
          name: "Benedict Costilla Prime",
          description: "Costilla prime finamente rebanada y cebollas caramelizadas con dos huevos escalfados en un muffin inglés tostado con queso suizo y nuestra salsa Holandesa"
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
      items: [
        {
          name: "烟熏三文鱼班尼",
          description: "英式马芬配两个水波蛋、烟熏三文鱼和奶油奶酪，淋上我们著名的荷兰酱，撒上红洋葱和刺山柑"
        },
        {
          name: "经典班尼迪克",
          description: "两个完美水波蛋，火腿配烤英式马芬，淋上我们著名的荷兰酱"
        },
        {
          name: "佛罗伦萨班尼迪克",
          description: "佛罗伦萨配炒菠菜和蘑菇，浓郁白切达奶酪配烤英式马芬，淋上我们著名的荷兰酱。配绿色混合沙拉拌奶香枫糖香醋酸奶酱"
        },
        {
          name: "龙虾班尼",
          description: "两个完美水波蛋配轻炒海洋龙虾，烤英式马芬配我们经典荷兰酱"
        },
        {
          name: "蒙特利尔班尼",
          description: "英式马芬配芥末、蒙特利尔烟熏肉和瑞士奶酪，配两个完美水波蛋和我们著名的荷兰酱。配薯条"
        },
        {
          name: "纳什维尔鸡肉班尼",
          description: "酥脆鸡柳配我们辣味纳什维尔辣酱，两个水波蛋配烤英式马芬和我们的荷兰酱"
        },
        {
          name: "蟹饼班尼迪克",
          description: "我们自制蟹饼配两个水波蛋，淋上我们著名的荷兰酱和青葱"
        },
        {
          name: "黑石鸡蛋",
          description: "我们著名的荷兰酱配两个水波蛋，烤英式马芬配烤番茄、培根和牛油果"
        },
        {
          name: "顶级肋排班尼迪克",
          description: "薄切顶级肋排和焦糖洋葱配两个水波蛋，烤英式马芬配瑞士奶酪和我们的荷兰酱"
        }
      ],
      footer: {
        message: "每份班尼迪克都有完美水波蛋和我们著名的荷兰酱",
        tagline: "班尼迪克大师技艺与蒙特利尔卓越的结合"
      }
    }
  };

  const benedictBeyond = [
    {
      image: "/images/SMOKED_SALMON_BENNY.jpg",
      price: "23.45",
      luxury: true,
      tags: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/CLASSIC_BENEDICTS.jpg",
      price: "18.95",
      classic: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/FLORENTINE_BENEDICTS.jpg",
      price: "22.95",
      fresh: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/LOBSTER_BENNY.jpg",
      price: "30.45",
      premium: true,
      tags: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/MONTREAL_BENNY.jpg",
      price: "24.95",
      montreal: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/NASHVILLE_CHICKEN_BENNY.jpg",
      price: "23.95",
      spicy: true,
      spiciness: 2,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/CRAB_CAKE_BENEDICT.jpg",
      price: "24.95",
      specialty: true,
      tags: ["/icons/egg_icon.png", "/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/BLACKSTONE_EGGS.jpg",
      price: "22.95",
      famous: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/PRIME_RIB_BENEDICT.jpg",
      price: "24.95",
      prime: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    }
  ];

  const t = translations[language] || translations.en;

  if (!isReady) return <div className="text-center mt-20 text-amber-900 font-medium">Loading...</div>;

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

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 pb-12 relative z-10">
        {/* Grid seguindo padrão EXATO do Mimosas mas com identidade visual original */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {benedictBeyond.map((item, index) => (
            <article key={index} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.luxury ? 'ring-2 ring-purple-400/50' : item.premium ? 'ring-2 ring-amber-400/50' : item.spicy ? 'ring-2 ring-red-400/50' : ''}`}>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              {(item.luxury || item.premium || item.classic || item.fresh || item.montreal || item.spicy || item.specialty || item.famous || item.prime) && (
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${
                    item.luxury ? 'bg-purple-800' : 
                    item.premium ? 'bg-purple-700' : 
                    item.classic ? 'bg-blue-700' :
                    item.fresh ? 'bg-green-700' :
                    item.montreal ? 'bg-red-700' :
                    item.spicy ? 'bg-red-600' :
                    item.specialty ? 'bg-indigo-700' :
                    item.famous ? 'bg-yellow-600' :
                    item.prime ? 'bg-amber-700' : 'bg-slate-700'
                  }`}>
                    {item.luxury ? 'Luxury' : 
                     item.premium ? 'Premium' : 
                     item.classic ? 'Classic' :
                     item.fresh ? 'Fresh' :
                     item.montreal ? 'Montreal' :
                     item.spicy ? 'Spicy' :
                     item.specialty ? 'Specialty' :
                     item.famous ? 'Famous' :
                     item.prime ? 'Prime' : 'Benedict'}
                  </div>
                </div>
              )}
              <div className="relative z-10">
                {/* CORRIGIDO: Container da imagem sem bordas e preenchimento completo */}
                <div className="relative w-full h-72 md:h-80 lg:h-72 xl:h-80 rounded-t-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  {/* CORRIGIDO: Imagem preenchendo completamente o espaço sem bordas */}
                  <img 
                    src={item.image} 
                    alt={t.items[index].name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-amber-900 leading-tight group-hover:text-amber-800 transition-colors duration-300">
                    {t.items[index].name}
                  </h2>
                  {/* Texto completo sem truncamento */}
                  <p className="text-amber-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.items[index].description}
                  </p>
                  {/* Preço APÓS a descrição, seguindo padrão EXATO do Mimosas */}
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-xl md:text-2xl font-serif font-bold text-amber-800 leading-none">
                      ${item.price}
                    </span>
                    <span className="text-xs font-serif font-medium text-amber-900/50 uppercase tracking-wide">
                      CAD
                    </span>
                  </div>
                  {/* Ícones de alergênicos APÓS o preço, com tamanho correto w-6 h-6 */}
                  {(item.tags.length > 0 || item.spiciness > 0) && (
                    <div className="pt-2 border-t border-amber-900/10">
                      <div className="flex flex-wrap gap-2">
                        {/* Ícones de alergênicos */}
                        {item.tags.map((icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-amber-50/50 hover:bg-amber-100/50 transition-colors duration-300">
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/0 via-yellow-400/0 to-orange-400/0 group-hover:from-amber-400/5 group-hover:via-yellow-400/5 group-hover:to-orange-400/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </main>

      {/* Substitution Note */}
      <div className="bg-yellow-100/90 backdrop-blur-sm py-4 px-4 md:px-6 relative z-10">
        <p className="text-center text-amber-800 text-sm max-w-4xl mx-auto">
          <span className="font-semibold">Note:</span> {t.substitution}
        </p>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl">🍳</span>
            <h3 className="text-xl font-bold">{t.footer.message}</h3>
            <span className="text-3xl">👑</span>
          </div>
          <p className="text-amber-100 text-lg italic">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

