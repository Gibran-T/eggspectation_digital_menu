import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function GreatEggspectations() {
  const { language } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsReady(true));
  }, []);

  const translations = {
    en: {
      title: "Great Eggspectations",
      subtitle: "High rise pancakes. Hunting for a sure thing? Look no further than our signature plate. These are our most popular dishes, made from time-tested recipes that are exclusive to Eggspectation. We use free run eggs and maple smoked bacon.",
      back: "Back",
      substitution: "Substitute Lyonnaise-style potatoes with fresh fruits or house salad 6.00",
      items: [
        {
          name: "High Rise Pancakes",
          description: "Kick-start your day with a mighty stack of pancakes with sausage, bacon and potatoes layered between, with a sunny-side-up egg"
        },
        {
          name: "Yolk Around the Clock",
          description: "Wood-fired bagel, grilled with a sunny-side-up free range egg in each hole. We then top it with bacon and cheddar on one half and Swiss cheese on the other, with our Lyonnaise-style potatoes"
        },
        {
          name: "Bagel and Lox",
          description: "A toasted Montreal bagel platter with cream cheese, smoked wild sockeye salmon, tomatoes, red onions, kalamata olive and capers"
        },
        {
          name: "Breakfast Poutine",
          description: "Lyonnaise-style potatoes with chunks of bacon, sausage, ham and cheese curds all smothered with our homemade breakfast gravy and topped with a sunny side egg"
        },
        {
          name: "Breakfast Tacos",
          description: "Three tacos, bacon, breakfast sausage and cherizo in flour tortillas filled with Lyonnaise-style potatotes, scrambled eggs, cheddar cheese, avocado, pico di gallo and a cilantro lime sour cream"
        },
        {
          name: "Chicken 'N Waffles",
          description: "Our in house fried chicken tenders, fresh arugula, cherry tomatoes and drizzled with Balsamic glaze on our famous Belgian waffles. Served with Lyonnaise-Style potatoes and pure maple syrup"
        },
        {
          name: "Chicken Poutine",
          description: "Our take on Quebec's late-night, an amount of fries with cheese curd and our poutine sauce drizzle with hollandaise sauce and topped on chopped deep fried chicken"
        }
      ],
      footer: {
        message: "Free run eggs and maple smoked bacon in every signature breakfast",
        tagline: "Where morning dreams become delicious reality"
      }
    },
    fr: {
      title: "Grandes Eggspectations",
      subtitle: "Crêpes haute altitude. À la recherche d'une valeur sûre? Ne cherchez pas plus loin que notre assiette signature. Ce sont nos plats les plus populaires, faits à partir de recettes éprouvées exclusives à Eggspectation. Nous utilisons des œufs de poules en liberté et du bacon fumé à l'érable.",
      back: "Retour",
      substitution: "Substituer les pommes de terre à la lyonnaise avec des fruits frais ou salade maison 6.00",
      items: [
        {
          name: "Crêpes Haute Altitude",
          description: "Commencez votre journée avec une pile imposante de crêpes avec saucisse, bacon et pommes de terre en couches, avec un œuf au plat"
        },
        {
          name: "Jaune Autour de l'Horloge",
          description: "Bagel grillé au feu de bois avec un œuf au plat de poules en liberté dans chaque trou. Nous le garnissons ensuite de bacon et cheddar d'un côté et de fromage suisse de l'autre, avec nos pommes de terre à la lyonnaise"
        },
        {
          name: "Bagel et Saumon Fumé",
          description: "Un plateau de bagel montréalais grillé avec fromage à la crème, saumon sockeye sauvage fumé, tomates, oignons rouges, olives kalamata et câpres"
        },
        {
          name: "Poutine Petit-déjeuner",
          description: "Pommes de terre à la lyonnaise avec morceaux de bacon, saucisse, jambon et fromage en grains nappés de notre sauce petit-déjeuner maison et garnis d'un œuf au plat"
        },
        {
          name: "Tacos Petit-déjeuner",
          description: "Trois tacos, bacon, saucisse petit-déjeuner et chorizo dans tortillas de farine remplies de pommes de terre à la lyonnaise, œufs brouillés, fromage cheddar, avocat, pico de gallo et crème sure coriandre-lime"
        },
        {
          name: "Poulet et Gaufres",
          description: "Nos lanières de poulet frit maison, roquette fraîche, tomates cerises et arrosées de glaçage balsamique sur nos fameuses gaufres belges. Servi avec pommes de terre à la lyonnaise et sirop d'érable pur"
        },
        {
          name: "Poutine au Poulet",
          description: "Notre version du plat de fin de soirée du Québec, une quantité de frites avec fromage en grains et notre sauce poutine arrosée de sauce hollandaise et garnie de poulet frit haché"
        }
      ],
      footer: {
        message: "Œufs de poules en liberté et bacon fumé à l'érable dans chaque petit-déjeuner signature",
        tagline: "Où les rêves matinaux deviennent délicieuse réalité"
      }
    },
    es: {
      title: "Grandes Eggspectativas",
      subtitle: "Panqueques de gran altura. ¿Buscas algo seguro? No busques más que nuestro plato signature. Estos son nuestros platos más populares, hechos con recetas probadas en el tiempo que son exclusivas de Eggspectation. Usamos huevos de gallinas libres y tocino ahumado con arce.",
      back: "Volver",
      substitution: "Sustituir papas estilo lyonnaise con frutas frescas o ensalada de la casa 6.00",
      items: [
        {
          name: "Panqueques de Gran Altura",
          description: "Comienza tu día con una poderosa pila de panqueques con salchicha, tocino y papas en capas, con un huevo estrellado"
        },
        {
          name: "Yema Alrededor del Reloj",
          description: "Bagel a la leña, asado con un huevo estrellado de gallinas libres en cada agujero. Luego lo cubrimos con tocino y cheddar en una mitad y queso suizo en la otra, con nuestras papas estilo lyonnaise"
        },
        {
          name: "Bagel y Salmón Ahumado",
          description: "Un plato de bagel de Montreal tostado con queso crema, salmón sockeye salvaje ahumado, tomates, cebollas rojas, aceitunas kalamata y alcaparras"
        },
        {
          name: "Poutine de Desayuno",
          description: "Papas estilo lyonnaise con trozos de tocino, salchicha, jamón y cuajada de queso todo cubierto con nuestra salsa de desayuno casera y coronado con un huevo estrellado"
        },
        {
          name: "Tacos de Desayuno",
          description: "Tres tacos, tocino, salchicha de desayuno y chorizo en tortillas de harina rellenas con papas estilo lyonnaise, huevos revueltos, queso cheddar, aguacate, pico de gallo y crema agria de cilantro y lima"
        },
        {
          name: "Pollo y Waffles",
          description: "Nuestras tiras de pollo frito casero, rúcula fresca, tomates cherry y rociado con glaseado balsámico en nuestros famosos waffles belgas. Servido con papas estilo lyonnaise y jarabe de arce puro"
        },
        {
          name: "Poutine de Pollo",
          description: "Nuestra versión del plato nocturno de Quebec, una cantidad de papas fritas con cuajada de queso y nuestra salsa poutine rociada con salsa holandesa y coronada con pollo frito picado"
        }
      ],
      footer: {
        message: "Huevos de gallinas libres y tocino ahumado con arce en cada desayuno signature",
        tagline: "Donde los sueños matutinos se vuelven deliciosa realidad"
      }
    },
    cn: {
      title: "伟大蛋期望",
      subtitle: "高层煎饼。寻找确定的选择？我们的招牌盘子就是您的不二之选。这些是我们最受欢迎的菜肴，采用Eggspectation独有的经过时间考验的食谱制作。我们使用自由放养鸡蛋和枫糖熏培根。",
      back: "返回",
      substitution: "用新鲜水果或招牌沙拉替换里昂式土豆 6.00",
      items: [
        {
          name: "高层煎饼",
          description: "用香肠、培根和土豆分层的强力煎饼堆开始您的一天，配一个煎蛋"
        },
        {
          name: "全天蛋黄",
          description: "木火烤贝果，每个洞里烤一个自由放养的煎蛋。然后我们在一半上放培根和切达奶酪，另一半放瑞士奶酪，配我们的里昂式土豆"
        },
        {
          name: "贝果配熏鲑鱼",
          description: "烤蒙特利尔贝果拼盘，配奶油奶酪、野生红鲑鱼熏制、番茄、红洋葱、卡拉马塔橄榄和刺山柑"
        },
        {
          name: "早餐肉汁奶酪薯条",
          description: "里昂式土豆配培根块、香肠、火腿和奶酪凝乳，全部淋上我们自制的早餐肉汁，配一个煎蛋"
        },
        {
          name: "早餐玉米饼",
          description: "三个玉米饼，培根、早餐香肠和墨西哥辣香肠，面粉玉米饼填充里昂式土豆、炒蛋、切达奶酪、牛油果、墨西哥莎莎酱和香菜青柠酸奶油"
        },
        {
          name: "鸡肉华夫饼",
          description: "我们内部炸鸡柳、新鲜芝麻菜、樱桃番茄，淋上香醋釉在我们著名的比利时华夫饼上。配里昂式土豆和纯枫糖浆"
        },
        {
          name: "鸡肉肉汁奶酪薯条",
          description: "我们对魁北克深夜菜的诠释，大量薯条配奶酪凝乳和我们的肉汁奶酪薯条酱，淋上荷兰酱，配切碎的炸鸡"
        }
      ],
      footer: {
        message: "每份招牌早餐都有自由放养鸡蛋和枫糖熏培根",
        tagline: "晨间梦想成为美味现实的地方"
      }
    }
  };

  const greatEggspectationsData = [
    {
      image: "/images/HIGH_RISE_PANCAKES.jpg",
      price: "23.45",
      signature: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/YOLK_AROUND_THE_CLOCK.jpg",
      price: "19.95",
      morning: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/BAGEL_AND_LOX.jpg",
      price: "22.95",
      premium: true,
      tags: ["/icons/seafood_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/BREAKFAST_POUTINE.jpg",
      price: "19.95",
      loaded: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    },
    {
      image: "/images/BREAKFAST_TACOS.jpg",
      price: "20.95",
      hearty: true,
      spiciness: 1,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/CHICKEN_N_WAFFLES.jpg",
      price: "23.95",
      indulgent: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png", "/icons/wheat_icon.png"]
    },
    {
      image: "/images/CHICKEN_POUTINE.jpg",
      price: "24.95",
      crispy: true,
      tags: ["/icons/egg_icon.png", "/icons/dairy_icon.png"]
    }
  ];

  const t = translations[language] || translations.en;

  if (!isReady) return <div className="text-center mt-20 text-amber-900 font-medium">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Breakfast Elegance Theme ORIGINAL */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-3xl transform rotate-30" />
        
        {/* Breakfast Emojis Scattered ORIGINAL */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-15 transform rotate-12">🥞</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 transform -rotate-12">🥓</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🍳</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-15 transform -rotate-45">🧇</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">🥚</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-20 transform -rotate-12">🌅</div>
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
            <span className="text-4xl mx-4">🌟</span>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-amber-800 max-w-5xl mx-auto leading-relaxed font-medium mb-6">
            {t.subtitle}
          </p>
          
          {/* Decorative Line with Breakfast Emoji */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">🥞</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 pb-12 relative z-10">
        {/* Grid seguindo padrão EXATO estabelecido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {greatEggspectationsData.map((item, index) => (
            <article key={index} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.signature ? 'ring-2 ring-purple-400/50' : item.premium ? 'ring-2 ring-amber-400/50' : item.hearty ? 'ring-2 ring-orange-400/50' : ''}`}>
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              {(item.signature || item.morning || item.premium || item.loaded || item.hearty || item.indulgent || item.crispy) && (
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${
                    item.signature ? 'bg-purple-800' : 
                    item.morning ? 'bg-yellow-600' : 
                    item.premium ? 'bg-amber-700' :
                    item.loaded ? 'bg-red-700' :
                    item.hearty ? 'bg-orange-600' :
                    item.indulgent ? 'bg-pink-700' :
                    item.crispy ? 'bg-gray-700' : 'bg-amber-600'
                  }`}>
                    {item.signature ? 'Signature' : 
                     item.morning ? 'Morning' : 
                     item.premium ? 'Premium' :
                     item.loaded ? 'Loaded' :
                     item.hearty ? 'Hearty' :
                     item.indulgent ? 'Indulgent' :
                     item.crispy ? 'Crispy' : 'Breakfast'}
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
                  <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-amber-900 leading-tight group-hover:text-amber-800 transition-colors duration-300">
                    {t.items[index].name}
                  </h2>
                  {/* Texto completo sem truncamento */}
                  <p className="text-amber-900/70 leading-relaxed text-sm md:text-base font-serif font-light">
                    {t.items[index].description}
                  </p>
                  {/* Preço APÓS a descrição, seguindo padrão estabelecido */}
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
            <span className="text-3xl">🥚</span>
            <h3 className="text-xl font-bold">{t.footer.message}</h3>
            <span className="text-3xl">🥓</span>
          </div>
          <p className="text-amber-100 text-lg italic">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

