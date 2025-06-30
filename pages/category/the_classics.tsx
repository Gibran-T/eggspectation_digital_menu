// pages/category/the_classics.tsx
import React from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { useRouter } from "next/router";

const TheClassics = () => {
  const { language } = useLanguage();
  const router = useRouter();

  // Back button handler
  const handleBack = () => {
    router.push("/menu");
  };

  // Multilingual content with Heritage Montreal theme
  const content = {
    en: {
      back: "Back",
      title: "The Classics",
      subtitle: "EGGSPECTATION IS THE ORIGINAL MONTREAL BRUNCH RESTAURANT. PEOPLE HAVE BEEN MEETING AND EATING AT EGGSPECTATION RESTAURANTS SINCE 1993! WE USE FREE RUN EGGS, SMOKED BACON AND SMOKED HAM.",
      heritage: "Since 1993",
      items: [
        {
          id: "all-american",
          name: "The All-American",
          description: "Fill up with two, free-range eggs prepared any-style, our perfectly seasoned Lyonnaise-Style potatoes, bacon, ham and sausage.",
          price: "18.45",
          badge: "Classic",
          allergens: ["egg", "dairy"],
          spiciness: 0,
          image: "THE_ALL_AMERICAN.jpg"
        },
        {
          id: "montrealer",
          name: "The Montrealer",
          description: "A Montrealer favourite with two any-style eggs, pile of smoked meat, pickle and our Lyonnaise-Style potatoes.",
          price: "18.95",
          badge: "Montreal",
          allergens: ["egg"],
          spiciness: 0,
          image: "THE_MONTREALER.jpg"
        },
        {
          id: "uneggspected",
          name: "Uneggspected",
          description: "A 8 oz Canadian Sirloin steak cooked just the way you like it, two any-style eggs and our homemade Lyonnaise-Style potatoes.",
          price: "30.95",
          badge: "Premium",
          allergens: ["egg"],
          spiciness: 0,
          image: "UNEGGSPECTED.jpg"
        },
        {
          id: "eggstraordinary",
          name: "Eggstraordinary",
          description: "Our classic dish! Two eggs, prepared any style, choice of brioche French toast, buttermilk pancakes or waffle with maple syrup, a choice of ham, bacon or sausage and our Lyonnaise-Style potatoes.",
          price: "22.95",
          badge: "Signature",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "EGGSTRAORDINARY.jpg"
        },
        {
          id: "bagel-sandwich",
          name: "Eggspectation Bagel Breakfast Sandwich",
          description: "A B.L.T., wood-fired oven bagel, lettuce and tomato and fried eggs sandwich with Swiss cheese, red onion, bacon or ham. Served with Lyonnaise-style potatoes.",
          price: "19.45",
          badge: "Hearty",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "BAGEL_BREAKFAST_SANDWICH.jpg"
        },
        {
          id: "fresh-start",
          name: "Fresh Start",
          description: "2 any-style eggs, seasonal fruits and tomato. Add Smoked salmon for + 6.00",
          price: "19.45",
          badge: "Fresh",
          allergens: ["egg"],
          spiciness: 0,
          image: "FRESH_START.jpg"
        },
        {
          id: "breakfast-parfait",
          name: "Breakfast Parfait Bowl",
          description: "Greek fat free yogurt with fresh fruit, berries, honey and a wonderful layer of granola.",
          price: "15.95",
          badge: "Healthy",
          allergens: ["dairy"],
          spiciness: 0,
          image: "BREAKFAST_PARFAIT_BOWL.jpg"
        }
      ],
      addOns: {
        title: "Add-Ons & Substitutions",
        items: [
          "Substitute Lyonnaise-style potatoes with fresh fruits for 6.00",
          "Add Cheddar or Swiss cheese to your eggs for 2.95",
          "Add Smoked salmon to Fresh Start for + 6.00"
        ]
      },
      alaCarte: {
        title: "À la Carte",
        items: [
          { name: "Fruit cup", price: "7.00" },
          { name: "Yogurt & Fruit", price: "8.00" },
          { name: "Lyonnaise-Style breakfast potatoes", price: "4.00" },
          { name: "Bagel with cream cheese", price: "12.00" },
          { name: "Canadian maple syrup", price: "3.00" },
          { name: "Pancake (1) or brioche french toast (1)", price: "8.00" },
          { name: "Nutella", price: "5.00" }
        ]
      },
      footer: {
        message: "Heritage recipes crafted with Montreal passion since 1993...",
        tagline: "Where tradition meets taste, and every bite tells our story",
        closing: "The original Montreal brunch experience 🏛️"
      }
    },
    fr: {
      back: "Retour",
      title: "Les Classiques",
      subtitle: "EGGSPECTATION EST LE RESTAURANT BRUNCH ORIGINAL DE MONTRÉAL. LES GENS SE RENCONTRENT ET MANGENT DANS LES RESTAURANTS EGGSPECTATION DEPUIS 1993! NOUS UTILISONS DES ŒUFS DE POULES EN LIBERTÉ, DU BACON FUMÉ ET DU JAMBON FUMÉ.",
      heritage: "Depuis 1993",
      items: [
        {
          id: "all-american",
          name: "L'Américain",
          description: "Rassasiez-vous avec deux œufs de poules en liberté préparés à votre goût, nos pommes de terre Lyonnaise parfaitement assaisonnées, bacon, jambon et saucisse.",
          price: "18.45",
          badge: "Classique",
          allergens: ["egg", "dairy"],
          spiciness: 0,
          image: "THE_ALL_AMERICAN.jpg"
        },
        {
          id: "montrealer",
          name: "Le Montréalais",
          description: "Un favori montréalais avec deux œufs à votre goût, pile de viande fumée, cornichon et nos pommes de terre Lyonnaise.",
          price: "18.95",
          badge: "Montréal",
          allergens: ["egg"],
          spiciness: 0,
          image: "THE_MONTREALER.jpg"
        },
        {
          id: "uneggspected",
          name: "Inattendu",
          description: "Un steak de surlonge canadien de 8 oz cuit comme vous l'aimez, deux œufs à votre goût et nos pommes de terre Lyonnaise maison.",
          price: "30.95",
          badge: "Premium",
          allergens: ["egg"],
          spiciness: 0,
          image: "UNEGGSPECTED.jpg"
        },
        {
          id: "eggstraordinary",
          name: "Extraordinaire",
          description: "Notre plat classique! Deux œufs, préparés à votre goût, choix de pain doré brioche, crêpes au babeurre ou gaufre avec sirop d'érable, choix de jambon, bacon ou saucisse et nos pommes de terre Lyonnaise.",
          price: "22.95",
          badge: "Signature",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "EGGSTRAORDINARY.jpg"
        },
        {
          id: "bagel-sandwich",
          name: "Sandwich Bagel Déjeuner Eggspectation",
          description: "Un B.L.T., bagel au four à bois, laitue et tomate et sandwich aux œufs frits avec fromage suisse, oignon rouge, bacon ou jambon. Servi avec pommes de terre Lyonnaise.",
          price: "19.45",
          badge: "Copieux",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "BAGEL_BREAKFAST_SANDWICH.jpg"
        },
        {
          id: "fresh-start",
          name: "Nouveau Départ",
          description: "2 œufs à votre goût, fruits de saison et tomate. Ajoutez saumon fumé pour + 6.00",
          price: "19.45",
          badge: "Frais",
          allergens: ["egg"],
          spiciness: 0,
          image: "FRESH_START.jpg"
        },
        {
          id: "breakfast-parfait",
          name: "Bol Parfait Déjeuner",
          description: "Yogourt grec sans gras avec fruits frais, baies, miel et une merveilleuse couche de granola.",
          price: "15.95",
          badge: "Santé",
          allergens: ["dairy"],
          spiciness: 0,
          image: "BREAKFAST_PARFAIT_BOWL.jpg"
        }
      ],
      addOns: {
        title: "Ajouts et Substitutions",
        items: [
          "Substituer pommes de terre Lyonnaise avec fruits frais pour 6.00",
          "Ajouter fromage cheddar ou suisse à vos œufs pour 2.95",
          "Ajouter saumon fumé au Nouveau Départ pour + 6.00"
        ]
      },
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
        message: "Recettes patrimoniales créées avec passion montréalaise depuis 1993...",
        tagline: "Où la tradition rencontre le goût, et chaque bouchée raconte notre histoire",
        closing: "L'expérience brunch montréalaise originale 🏛️"
      }
    },
    es: {
      back: "Volver",
      title: "Los Clásicos",
      subtitle: "EGGSPECTATION ES EL RESTAURANTE BRUNCH ORIGINAL DE MONTREAL. ¡LA GENTE SE HA ESTADO REUNIENDO Y COMIENDO EN LOS RESTAURANTES EGGSPECTATION DESDE 1993! USAMOS HUEVOS DE GALLINAS LIBRES, TOCINO AHUMADO Y JAMÓN AHUMADO.",
      heritage: "Desde 1993",
      items: [
        {
          id: "all-american",
          name: "El Americano",
          description: "Lléname con dos huevos de gallinas libres preparados a tu gusto, nuestras papas Lyonnaise perfectamente sazonadas, tocino, jamón y salchicha.",
          price: "18.45",
          badge: "Clásico",
          allergens: ["egg", "dairy"],
          spiciness: 0,
          image: "THE_ALL_AMERICAN.jpg"
        },
        {
          id: "montrealer",
          name: "El Montrealés",
          description: "Un favorito de Montreal con dos huevos a tu gusto, pila de carne ahumada, pepinillo y nuestras papas Lyonnaise.",
          price: "18.95",
          badge: "Montreal",
          allergens: ["egg"],
          spiciness: 0,
          image: "THE_MONTREALER.jpg"
        },
        {
          id: "uneggspected",
          name: "Inesperado",
          description: "Un bistec de solomillo canadiense de 8 oz cocinado como te gusta, dos huevos a tu gusto y nuestras papas Lyonnaise caseras.",
          price: "30.95",
          badge: "Premium",
          allergens: ["egg"],
          spiciness: 0,
          image: "UNEGGSPECTED.jpg"
        },
        {
          id: "eggstraordinary",
          name: "Extraordinario",
          description: "¡Nuestro plato clásico! Dos huevos, preparados a tu gusto, elección de tostada francesa brioche, panqueques de suero de leche o waffle con jarabe de arce, elección de jamón, tocino o salchicha y nuestras papas Lyonnaise.",
          price: "22.95",
          badge: "Signature",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "EGGSTRAORDINARY.jpg"
        },
        {
          id: "bagel-sandwich",
          name: "Sándwich Bagel Desayuno Eggspectation",
          description: "Un B.L.T., bagel de horno de leña, lechuga y tomate y sándwich de huevos fritos con queso suizo, cebolla roja, tocino o jamón. Servido con papas Lyonnaise.",
          price: "19.45",
          badge: "Abundante",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "BAGEL_BREAKFAST_SANDWICH.jpg"
        },
        {
          id: "fresh-start",
          name: "Comienzo Fresco",
          description: "2 huevos a tu gusto, frutas de temporada y tomate. Agregar salmón ahumado por + 6.00",
          price: "19.45",
          badge: "Fresco",
          allergens: ["egg"],
          spiciness: 0,
          image: "FRESH_START.jpg"
        },
        {
          id: "breakfast-parfait",
          name: "Tazón Parfait Desayuno",
          description: "Yogur griego sin grasa con fruta fresca, bayas, miel y una maravillosa capa de granola.",
          price: "15.95",
          badge: "Saludable",
          allergens: ["dairy"],
          spiciness: 0,
          image: "BREAKFAST_PARFAIT_BOWL.jpg"
        }
      ],
      addOns: {
        title: "Agregados y Sustituciones",
        items: [
          "Sustituir papas Lyonnaise con frutas frescas por 6.00",
          "Agregar queso cheddar o suizo a tus huevos por 2.95",
          "Agregar salmón ahumado al Comienzo Fresco por + 6.00"
        ]
      },
      alaCarte: {
        title: "A la Carta",
        items: [
          { name: "Copa de frutas", price: "7.00" },
          { name: "Yogur y Frutas", price: "8.00" },
          { name: "Papas desayuno Lyonnaise", price: "4.00" },
          { name: "Bagel con queso crema", price: "12.00" },
          { name: "Jarabe de arce canadiense", price: "3.00" },
          { name: "Panqueque (1) o tostada francesa brioche (1)", price: "8.00" },
          { name: "Nutella", price: "5.00" }
        ]
      },
      footer: {
        message: "Recetas patrimoniales creadas con pasión montrealesa desde 1993...",
        tagline: "Donde la tradición encuentra el sabor, y cada bocado cuenta nuestra historia",
        closing: "La experiencia brunch original de Montreal 🏛️"
      }
    },
    cn: {
      back: "返回",
      title: "经典系列",
      subtitle: "EGGSPECTATION是蒙特利尔原创早午餐餐厅。自1993年以来，人们一直在EGGSPECTATION餐厅聚会用餐！我们使用散养鸡蛋、烟熏培根和烟熏火腿。",
      heritage: "自1993年",
      items: [
        {
          id: "all-american",
          name: "全美式",
          description: "用两个散养鸡蛋（任意做法）、我们完美调味的里昂式土豆、培根、火腿和香肠填饱肚子。",
          price: "18.45",
          badge: "经典",
          allergens: ["egg", "dairy"],
          spiciness: 0,
          image: "THE_ALL_AMERICAN.jpg"
        },
        {
          id: "montrealer",
          name: "蒙特利尔人",
          description: "蒙特利尔人的最爱，两个任意做法的鸡蛋、一堆烟熏肉、泡菜和我们的里昂式土豆。",
          price: "18.95",
          badge: "蒙特利尔",
          allergens: ["egg"],
          spiciness: 0,
          image: "THE_MONTREALER.jpg"
        },
        {
          id: "uneggspected",
          name: "意想不到",
          description: "8盎司加拿大西冷牛排按您喜欢的方式烹饪，两个任意做法的鸡蛋和我们自制的里昂式土豆。",
          price: "30.95",
          badge: "高级",
          allergens: ["egg"],
          spiciness: 0,
          image: "UNEGGSPECTED.jpg"
        },
        {
          id: "eggstraordinary",
          name: "非凡",
          description: "我们的经典菜！两个鸡蛋，任意做法，选择布里欧修法式吐司、酪乳煎饼或华夫饼配枫糖浆，选择火腿、培根或香肠和我们的里昂式土豆。",
          price: "22.95",
          badge: "招牌",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "EGGSTRAORDINARY.jpg"
        },
        {
          id: "bagel-sandwich",
          name: "Eggspectation贝果早餐三明治",
          description: "一个B.L.T.，木火烤箱贝果，生菜和番茄以及煎蛋三明治配瑞士奶酪、红洋葱、培根或火腿。配里昂式土豆。",
          price: "19.45",
          badge: "丰盛",
          allergens: ["egg", "dairy", "wheat"],
          spiciness: 0,
          image: "BAGEL_BREAKFAST_SANDWICH.jpg"
        },
        {
          id: "fresh-start",
          name: "新开始",
          description: "2个任意做法的鸡蛋、时令水果和番茄。加烟熏三文鱼+6.00",
          price: "19.45",
          badge: "新鲜",
          allergens: ["egg"],
          spiciness: 0,
          image: "FRESH_START.jpg"
        },
        {
          id: "breakfast-parfait",
          name: "早餐帕菲碗",
          description: "希腊脱脂酸奶配新鲜水果、浆果、蜂蜜和美妙的燕麦层。",
          price: "15.95",
          badge: "健康",
          allergens: ["dairy"],
          spiciness: 0,
          image: "BREAKFAST_PARFAIT_BOWL.jpg"
        }
      ],
      addOns: {
        title: "附加和替换",
        items: [
          "用新鲜水果替换里昂式土豆6.00",
          "在鸡蛋中加切达或瑞士奶酪2.95",
          "在新开始中加烟熏三文鱼+6.00"
        ]
      },
      alaCarte: {
        title: "单点",
        items: [
          { name: "水果杯", price: "7.00" },
          { name: "酸奶和水果", price: "8.00" },
          { name: "里昂式早餐土豆", price: "4.00" },
          { name: "贝果配奶油奶酪", price: "12.00" },
          { name: "加拿大枫糖浆", price: "3.00" },
          { name: "煎饼(1)或布里欧修法式吐司(1)", price: "8.00" },
          { name: "榛果酱", price: "5.00" }
        ]
      },
      footer: {
        message: "自1993年以来用蒙特利尔激情制作的传统食谱...",
        tagline: "传统与味道相遇的地方，每一口都诉说着我们的故事",
        closing: "蒙特利尔原创早午餐体验 🏛️"
      }
    }
  };

  const currentContent = content[language] || content.en;

  // Badge colors with Heritage theme
  const getBadgeColor = (badge) => {
    const badgeColors = {
      'Classic': 'bg-amber-800 text-white',
      'Classique': 'bg-amber-800 text-white',
      'Clásico': 'bg-amber-800 text-white',
      '经典': 'bg-amber-800 text-white',
      'Montreal': 'bg-red-800 text-white',
      'Montréal': 'bg-red-800 text-white',
      '蒙特利尔': 'bg-red-800 text-white',
      'Premium': 'bg-purple-800 text-white',
      '高级': 'bg-purple-800 text-white',
      'Signature': 'bg-indigo-800 text-white',
      '招牌': 'bg-indigo-800 text-white',
      'Hearty': 'bg-orange-700 text-white',
      'Copieux': 'bg-orange-700 text-white',
      'Abundante': 'bg-orange-700 text-white',
      '丰盛': 'bg-orange-700 text-white',
      'Fresh': 'bg-green-700 text-white',
      'Frais': 'bg-green-700 text-white',
      'Fresco': 'bg-green-700 text-white',
      '新鲜': 'bg-green-700 text-white',
      'Healthy': 'bg-emerald-700 text-white',
      'Santé': 'bg-emerald-700 text-white',
      'Saludable': 'bg-emerald-700 text-white',
      '健康': 'bg-emerald-700 text-white'
    };
    return badgeColors[badge] || 'bg-gray-600 text-white';
  };

  // Allergen icons
  const getAllergenIcon = (allergen) => {
    const icons = {
      nuts: '/allergen_icons/nuts_icon.png',
      egg: '/allergen_icons/egg_icon.png',
      dairy: '/allergen_icons/dairy_icon.png',
      wheat: '/allergen_icons/wheat_icon.png',
      seafood: '/allergen_icons/seafood_icon.png',
      shrimp: '/allergen_icons/shrimp_icon.png',
      spiciness: '/allergen_icons/spiciness_icon.png'
    };
    return icons[allergen] || '';
  };

  // Spiciness icons
  const renderSpicinessIcons = (level) => {
    return Array.from({ length: level }, (_, i) => (
      <img
        key={i}
        src={getAllergenIcon('spiciness')}
        alt="Spicy"
        className="w-4 h-4"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group"
      >
        <div className="flex items-center space-x-2">
          <svg 
            className="w-5 h-5 text-amber-700 group-hover:text-amber-900 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-amber-700 group-hover:text-amber-900 font-serif text-sm font-medium transition-colors">
            {currentContent.back}
          </span>
        </div>
      </button>

      {/* Heritage Montreal Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated heritage spheres */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-red-200 to-amber-300 rounded-full blur-lg opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-200 to-red-300 rounded-full blur-2xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-xl opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Heritage themed emojis scattered */}
        <div className="absolute top-16 left-1/4 text-2xl animate-bounce" style={{animationDelay: '0s'}}>🏛️</div>
        <div className="absolute top-32 right-1/4 text-xl animate-bounce" style={{animationDelay: '1s'}}>🍳</div>
        <div className="absolute top-48 left-1/2 text-2xl animate-bounce" style={{animationDelay: '2s'}}>🥓</div>
        <div className="absolute bottom-40 left-1/6 text-xl animate-bounce" style={{animationDelay: '1.5s'}}>🥚</div>
        <div className="absolute bottom-56 right-1/5 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>🍯</div>
        <div className="absolute top-64 right-1/6 text-xl animate-bounce" style={{animationDelay: '2.5s'}}>🧇</div>
        <div className="absolute bottom-72 left-1/3 text-2xl animate-bounce" style={{animationDelay: '1.2s'}}>🥞</div>
        <div className="absolute top-80 left-1/5 text-xl animate-bounce" style={{animationDelay: '0.8s'}}>⭐</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-8">
        {/* Heritage Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1"></div>
            <span className="px-6 text-amber-700 font-serif text-lg tracking-wider animate-pulse">{currentContent.heritage}</span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1"></div>
          </div>
          
          <h1 className="text-7xl font-serif font-bold text-amber-900 mb-6 tracking-wider uppercase animate-pulse">
            {currentContent.title}
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-amber-800 leading-relaxed font-serif mb-4">
              {currentContent.subtitle}
            </p>
          </div>
          
          <div className="flex items-center justify-center mt-6">
            <span className="text-2xl animate-bounce">🏛️</span>
            <span className="mx-4 text-amber-700 font-serif text-sm tracking-widest">HERITAGE MONTREAL</span>
            <span className="text-2xl animate-bounce">🍳</span>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mb-12">
          {currentContent.items.map((item) => (
            <div key={item.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
              {/* Badge */}
              <div className="relative">
                <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${getBadgeColor(item.badge)}`}>
                  {item.badge}
                </span>
                
                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                  <img
                    src={`/images/${item.image}`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-serif font-bold text-amber-900 line-clamp-2">
                  {item.name}
                </h3>
                
                <p className="text-amber-700 text-sm leading-relaxed line-clamp-3 font-serif">
                  {item.description}
                </p>

                {/* Allergens and Spiciness */}
                <div className="flex items-center space-x-2">
                  {item.allergens.map((allergen) => (
                    <img
                      key={allergen}
                      src={getAllergenIcon(allergen)}
                      alt={allergen}
                      className="w-5 h-5"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ))}
                  {item.spiciness > 0 && (
                    <div className="flex space-x-1">
                      {renderSpicinessIcons(item.spiciness)}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex justify-between items-center pt-2 border-t border-amber-200">
                  <span className="text-3xl font-serif font-bold text-amber-900">
                    ${item.price}
                  </span>
                  <span className="text-amber-600 font-serif text-sm tracking-wider">
                    CAD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4 text-center">
            {currentContent.addOns.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentContent.addOns.items.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-4 text-center">
                <p className="text-amber-800 font-serif text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* À la Carte Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">
            {currentContent.alaCarte.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentContent.alaCarte.items.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 flex justify-between items-center">
                <span className="text-amber-800 font-serif text-sm">{item.name}</span>
                <span className="text-amber-900 font-serif font-bold">${item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Footer */}
        <div className="text-center mt-16 space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-6"></div>
          
          <p className="text-amber-800 font-serif text-lg italic">
            {currentContent.footer.message}
          </p>
          
          <p className="text-amber-700 font-serif text-base">
            {currentContent.footer.tagline}
          </p>
          
          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-600 flex-1"></div>
            <span className="text-amber-600 font-serif text-sm tracking-widest">
              {currentContent.footer.closing}
            </span>
            <div className="h-px bg-gradient-to-r from-amber-600 via-amber-500 to-transparent flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheClassics;

