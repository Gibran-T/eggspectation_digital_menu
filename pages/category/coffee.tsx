import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Coffee & Espresso Bar",
    subtitle: "At Eggspectation, our drip coffee is custom roasted using high-quality Arabica beans. Our espresso coffee is roasted and prepared using a traditional Italian artisanal recipe. Because we believe in tradition. Capisce?",
    back: "Back",
    accent: "☕",
    espressoTitle: "Espresso Bar",
    espressoSubtitle: "Traditional Italian artisanal recipe. Because we believe in tradition. Capisce?",
    teaTitle: "T-Bar",
    teaSubtitle: "We offer a variety of teas for you to explore and experiment. Sip and savour the moment",
    boozyTitle: "Boozy Coffee",
    boozySubtitle: "Sundays, seven days a week!",
    notes: {
      vegeMilk: "*Substitute milk with vege milk for +$1.00",
      honey: "*Add honey +$1.00",
    },
    espressoItems: [
      { id: "espresso", name: "Espresso", description: "Traditional Italian shot, rich and bold", price: "3.75", image: "/images/ESPRESSO_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "espresso-doppio", name: "Espresso Doppio", description: "Double shot of espresso, intense and aromatic", price: "4.50", note: "Double", image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg", double: true, allergens: [], spiciness: 0 },
      { id: "caffe-americano", name: "Caffé Americano", description: "Espresso with hot water, smooth and clean", price: "5.00", image: "/images/CAFFE_AMERICANO_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "espresso-macchiato", name: "Espresso Macchiato", description: "Espresso with a dollop of crema", price: "4.50", image: "/images/ESPRESSO_MACCHIATO_LANDSCAPE.jpg", artisanal: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cappuccino", name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "6.00", image: "/images/CAPPUCCINO_LANDSCAPE.jpg", authentic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "iced-cappuccino", name: "Iced Cappuccino", description: "Cold cappuccino with ice, refreshing and creamy", price: "7.00", image: "/images/ICED_CAPPUCCINO_LANDSCAPE.jpg", refreshing: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cafe-au-lait", name: "Café au Lait", description: "Coffee with steamed milk, French style", price: "6.00", price2: "8.00", note: "Cup", note2: "Bowl", image: "/images/CAFE_AU_LAIT_LANDSCAPE.jpg", elegant: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "caffe-mochaccino", name: "Caffé Mochaccino", description: "Espresso with chocolate, steamed milk and whipped cream", price: "7.00", price2: "9.00", note: "Cup", note2: "Bowl", image: "/images/CAFFE_MOCHACCINO_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "hot-chocolate", name: "Hot Chocolate", description: "Rich and creamy hot chocolate with whipped cream", price: "6.50", price2: "8.50", note: "Cup", note2: "Bowl", image: "/images/HOT_CHOCOLATE_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "drip-coffee", name: "Coffee", description: "Premium-quality filtered coffee", price: "3.00", image: "/images/DRIP_COFFEE_LANDSCAPE.jpg", comfort: true, allergens: [], spiciness: 0 }
    ],
    teaItems: [
      { id: "english-breakfast", name: "English Breakfast", description: "Full-bodied black tea blend", price: "5.00", image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "earl-gray", name: "Earl Gray", description: "Classic black tea with bergamot", price: "5.00", image: "/images/EARL_GRAY_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "mint-tea", name: "Mint", description: "Fresh and invigorating herbal blend", price: "5.00", image: "/images/MINT_TEA_LANDSCAPE.jpg", refreshing: true, allergens: [], spiciness: 0 },
      { id: "chamomile", name: "Chamomile", description: "Soothing herbal tea, naturally caffeine-free", price: "5.00", image: "/images/CHAMOMILE_LANDSCAPE.jpg", calming: true, allergens: [], spiciness: 0 },
      { id: "green-tea", name: "Green", description: "Delicate and refreshing green tea", price: "5.00", image: "/images/GREEN_TEA_LANDSCAPE.jpg", healthy: true, allergens: [], spiciness: 0 },
      { id: "chai-tea", name: "Chai Tea", description: "Spiced tea with traditional Indian spices", price: "5.00", image: "/images/CHAI_TEA_LANDSCAPE.jpg", spiced: true, allergens: [], spiciness: 1 }
    ],
    boozyItems: [
      { id: "irish-coffee", name: "Irish Coffee", description: "Coffee, Jameson and whipped cream", price: "12.00", image: "/images/IRISH_COFFEE_LANDSCAPE.jpg", irish: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "baileys-coffee", name: "Bailey's Coffee", description: "Coffee, Bailey's and whipped cream", price: "12.00", image: "/images/BAILEYS_COFFEE_LANDSCAPE.jpg", creamy: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "brazilian-coffee", name: "Brazilian Coffee", description: "Coffee, Brandy and whipped cream", price: "13.00", image: "/images/BRAZILIAN_COFFEE_LANDSCAPE.jpg", sophisticated: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "spanish-coffee", name: "Spanish Coffee", description: "Coffee, Kahlúa, orange liqueur and whipped cream", price: "13.00", image: "/images/SPANISH_COFFEE_LANDSCAPE.jpg", exotic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 }
    ]
  },
  fr: {
    title: "Café & Bar Espresso",
    subtitle: "Chez Eggspectation, notre café filtre est torréfié sur mesure avec des grains Arabica de haute qualité. Notre café espresso est torréfié et préparé selon une recette artisanale italienne traditionnelle. Parce que nous croyons en la tradition. Capisce?",
    back: "Retour",
    accent: "☕",
    espressoTitle: "Bar Espresso",
    espressoSubtitle: "Recette artisanale italienne traditionnelle. Parce que nous croyons en la tradition. Capisce?",
    teaTitle: "Bar à Thé",
    teaSubtitle: "Nous offrons une variété de thés à explorer et expérimenter. Sirotez et savourez le moment",
    boozyTitle: "Café Alcoolisé",
    boozySubtitle: "Dimanche, sept jours par semaine !",
    notes: { vegeMilk: "*Lait végétal disponible : +1.00$", honey: "*Ajoutez du miel : +1.00$" },
    espressoItems: [
      { id: "espresso", name: "Espresso", description: "Shot italien traditionnel, riche et corsé", price: "3.75", image: "/images/ESPRESSO_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "espresso-doppio", name: "Espresso Doppio", description: "Double shot d'espresso, intense et aromatique", price: "4.50", note: "Double", image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg", double: true, allergens: [], spiciness: 0 },
      { id: "caffe-americano", name: "Caffé Americano", description: "Espresso avec eau chaude, doux et pur", price: "5.00", image: "/images/CAFFE_AMERICANO_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "espresso-macchiato", name: "Espresso Macchiato", description: "Espresso avec une pointe de crème", price: "4.50", image: "/images/ESPRESSO_MACCHIATO_LANDSCAPE.jpg", artisanal: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cappuccino", name: "Cappuccino", description: "Espresso avec lait vapeur et mousse", price: "6.00", image: "/images/CAPPUCCINO_LANDSCAPE.jpg", authentic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "iced-cappuccino", name: "Cappuccino Glacé", description: "Cappuccino froid avec glace, rafraîchissant et crémeux", price: "7.00", image: "/images/ICED_CAPPUCCINO_LANDSCAPE.jpg", refreshing: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cafe-au-lait", name: "Café au Lait", description: "Café avec lait vapeur, style français", price: "6.00", price2: "8.00", note: "Tasse", note2: "Bol", image: "/images/CAFE_AU_LAIT_LANDSCAPE.jpg", elegant: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "caffe-mochaccino", name: "Caffé Mochaccino", description: "Espresso avec chocolat, lait vapeur et crème fouettée", price: "7.00", price2: "9.00", note: "Tasse", note2: "Bol", image: "/images/CAFFE_MOCHACCINO_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "hot-chocolate", name: "Chocolat Chaud", description: "Chocolat chaud riche et crémeux avec crème fouettée", price: "6.50", price2: "8.50", note: "Tasse", note2: "Bol", image: "/images/HOT_CHOCOLATE_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "drip-coffee", name: "Café", description: "Café filtre de qualité premium", price: "3.00", image: "/images/DRIP_COFFEE_LANDSCAPE.jpg", comfort: true, allergens: [], spiciness: 0 }
    ],
    teaItems: [
      { id: "english-breakfast", name: "English Breakfast", description: "Mélange de thé noir corsé", price: "5.00", image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "earl-gray", name: "Earl Gray", description: "Thé noir classique à la bergamote", price: "5.00", image: "/images/EARL_GRAY_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "mint-tea", name: "Menthe", description: "Mélange d'herbes fraîches et revigorant", price: "5.00", image: "/images/MINT_TEA_LANDSCAPE.jpg", refreshing: true, allergens: [], spiciness: 0 },
      { id: "chamomile", name: "Camomille", description: "Tisane apaisante, naturellement sans caféine", price: "5.00", image: "/images/CHAMOMILE_LANDSCAPE.jpg", calming: true, allergens: [], spiciness: 0 },
      { id: "green-tea", name: "Vert", description: "Thé vert délicat et rafraîchissant", price: "5.00", image: "/images/GREEN_TEA_LANDSCAPE.jpg", healthy: true, allergens: [], spiciness: 0 },
      { id: "chai-tea", name: "Thé Chai", description: "Thé épicé aux épices indiennes traditionnelles", price: "5.00", image: "/images/CHAI_TEA_LANDSCAPE.jpg", spiced: true, allergens: [], spiciness: 1 }
    ],
    boozyItems: [
      { id: "irish-coffee", name: "Café Irlandais", description: "Café, Jameson et crème fouettée", price: "12.00", image: "/images/IRISH_COFFEE_LANDSCAPE.jpg", irish: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "baileys-coffee", name: "Café Bailey's", description: "Café, Bailey's et crème fouettée", price: "12.00", image: "/images/BAILEYS_COFFEE_LANDSCAPE.jpg", creamy: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "brazilian-coffee", name: "Café Brésilien", description: "Café, Brandy et crème fouettée", price: "13.00", image: "/images/BRAZILIAN_COFFEE_LANDSCAPE.jpg", sophisticated: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "spanish-coffee", name: "Café Espagnol", description: "Café, Kahlúa, liqueur d'orange et crème fouettée", price: "13.00", image: "/images/SPANISH_COFFEE_LANDSCAPE.jpg", exotic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 }
    ]
  },
  es: {
    title: "Café & Barra de Espresso",
    subtitle: "En Eggspectation, nuestro café de filtro se tuesta a medida con granos Arábica de alta calidad. Nuestro café espresso se tuesta y prepara usando una receta artesanal italiana tradicional. Porque creemos en la tradición. ¿Capisce?",
    back: "Volver",
    accent: "☕",
    espressoTitle: "Barra de Espresso",
    espressoSubtitle: "Receta artesanal italiana tradicional. Porque creemos en la tradición. ¿Capisce?",
    teaTitle: "Barra de Té",
    teaSubtitle: "Ofrecemos una variedad de tés para explorar y experimentar. Sorbe y saborea el momento",
    boozyTitle: "Café con Licor",
    boozySubtitle: "¡Domingos, siete días a la semana!",
    notes: { vegeMilk: "*Leche vegetal disponible +1.00$", honey: "*Agregar miel +1.00$" },
    espressoItems: [
      { id: "espresso", name: "Espresso", description: "Shot italiano tradicional, rico y fuerte", price: "3.75", image: "/images/ESPRESSO_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "espresso-doppio", name: "Espresso Doppio", description: "Doble shot de espresso, intenso y aromático", price: "4.50", note: "Doble", image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg", double: true, allergens: [], spiciness: 0 },
      { id: "caffe-americano", name: "Caffé Americano", description: "Espresso con agua caliente, suave y limpio", price: "5.00", image: "/images/CAFFE_AMERICANO_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "espresso-macchiato", name: "Espresso Macchiato", description: "Espresso con una gota de crema", price: "4.50", image: "/images/ESPRESSO_MACCHIATO_LANDSCAPE.jpg", artisanal: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cappuccino", name: "Cappuccino", description: "Espresso con leche vaporizada y espuma", price: "6.00", image: "/images/CAPPUCCINO_LANDSCAPE.jpg", authentic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "iced-cappuccino", name: "Cappuccino Helado", description: "Cappuccino frío con hielo, refrescante y cremoso", price: "7.00", image: "/images/ICED_CAPPUCCINO_LANDSCAPE.jpg", refreshing: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cafe-au-lait", name: "Café con Leche", description: "Café con leche vaporizada, estilo francés", price: "6.00", price2: "8.00", note: "Taza", note2: "Tazón", image: "/images/CAFE_AU_LAIT_LANDSCAPE.jpg", elegant: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "caffe-mochaccino", name: "Caffé Mochaccino", description: "Espresso con chocolate, leche vaporizada y crema batida", price: "7.00", price2: "9.00", note: "Taza", note2: "Tazón", image: "/images/CAFFE_MOCHACCINO_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "hot-chocolate", name: "Chocolate Caliente", description: "Chocolate caliente rico y cremoso con crema batida", price: "6.50", price2: "8.50", note: "Taza", note2: "Tazón", image: "/images/HOT_CHOCOLATE_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "drip-coffee", name: "Café", description: "Café filtrado de calidad premium", price: "3.00", image: "/images/DRIP_COFFEE_LANDSCAPE.jpg", comfort: true, allergens: [], spiciness: 0 }
    ],
    teaItems: [
      { id: "english-breakfast", name: "English Breakfast", description: "Mezcla de té negro con cuerpo", price: "5.00", image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "earl-gray", name: "Earl Gray", description: "Té negro clásico con bergamota", price: "5.00", image: "/images/EARL_GRAY_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "mint-tea", name: "Menta", description: "Mezcla de hierbas fresca y vigorizante", price: "5.00", image: "/images/MINT_TEA_LANDSCAPE.jpg", refreshing: true, allergens: [], spiciness: 0 },
      { id: "chamomile", name: "Manzanilla", description: "Té de hierbas calmante, naturalmente sin cafeína", price: "5.00", image: "/images/CHAMOMILE_LANDSCAPE.jpg", calming: true, allergens: [], spiciness: 0 },
      { id: "green-tea", name: "Verde", description: "Té verde delicado y refrescante", price: "5.00", image: "/images/GREEN_TEA_LANDSCAPE.jpg", healthy: true, allergens: [], spiciness: 0 },
      { id: "chai-tea", name: "Té Chai", description: "Té especiado con especias tradicionales indias", price: "5.00", image: "/images/CHAI_TEA_LANDSCAPE.jpg", spiced: true, allergens: [], spiciness: 1 }
    ],
    boozyItems: [
      { id: "irish-coffee", name: "Café Irlandés", description: "Café, Jameson y crema batida", price: "12.00", image: "/images/IRISH_COFFEE_LANDSCAPE.jpg", irish: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "baileys-coffee", name: "Café Bailey's", description: "Café, Bailey's y crema batida", price: "12.00", image: "/images/BAILEYS_COFFEE_LANDSCAPE.jpg", creamy: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "brazilian-coffee", name: "Café Brasileño", description: "Café, Brandy y crema batida", price: "13.00", image: "/images/BRAZILIAN_COFFEE_LANDSCAPE.jpg", sophisticated: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "spanish-coffee", name: "Café Español", description: "Café, Kahlúa, licor de naranja y crema batida", price: "13.00", image: "/images/SPANISH_COFFEE_LANDSCAPE.jpg", exotic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 }
    ]
  },
  cn: {
    title: "咖啡与浓缩咖啡吧",
    subtitle: "在Eggspectation，我们的滴滤咖啡采用高品质阿拉比卡豆定制烘焙。我们的浓缩咖啡遵循传统意大利手工配方烘焙和制作。因为我们相信传统。明白吗？",
    back: "返回",
    accent: "☕",
    espressoTitle: "意式浓缩咖啡吧",
    espressoSubtitle: "传统意大利手工配方。因为我们相信传统。明白吗？",
    teaTitle: "茶吧",
    teaSubtitle: "我们提供多种茶类供您探索和体验。细品慢饮，享受当下",
    boozyTitle: "酒香咖啡",
    boozySubtitle: "每天都是周日！",
    notes: { vegeMilk: "*可加植物奶 +1.00$", honey: "*可加蜂蜜 +1.00$" },
    espressoItems: [
      { id: "espresso", name: "意式浓缩", description: "传统意式浓缩，浓郁醇厚", price: "3.75", image: "/images/ESPRESSO_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "espresso-doppio", name: "双份浓缩", description: "双份浓缩咖啡，浓烈芳香", price: "4.50", note: "双份", image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg", double: true, allergens: [], spiciness: 0 },
      { id: "caffe-americano", name: "美式咖啡", description: "浓缩咖啡加热水，顺滑清香", price: "5.00", image: "/images/CAFFE_AMERICANO_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "espresso-macchiato", name: "玛奇朵", description: "浓缩咖啡配一抹奶泡", price: "4.50", image: "/images/ESPRESSO_MACCHIATO_LANDSCAPE.jpg", artisanal: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cappuccino", name: "卡布奇诺", description: "浓缩咖啡配蒸汽牛奶和奶泡", price: "6.00", image: "/images/CAPPUCCINO_LANDSCAPE.jpg", authentic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "iced-cappuccino", name: "冰卡布奇诺", description: "冰镇卡布奇诺，清爽香滑", price: "7.00", image: "/images/ICED_CAPPUCCINO_LANDSCAPE.jpg", refreshing: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "cafe-au-lait", name: "法式牛奶咖啡", description: "咖啡配蒸汽牛奶，法式风格", price: "6.00", price2: "8.00", note: "杯装", note2: "碗装", image: "/images/CAFE_AU_LAIT_LANDSCAPE.jpg", elegant: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "caffe-mochaccino", name: "摩卡奇诺", description: "浓缩咖啡配巧克力、蒸汽牛奶和鲜奶油", price: "7.00", price2: "9.00", note: "杯装", note2: "碗装", image: "/images/CAFFE_MOCHACCINO_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "hot-chocolate", name: "热巧克力", description: "浓郁香滑热巧克力配鲜奶油", price: "6.50", price2: "8.50", note: "杯装", note2: "碗装", image: "/images/HOT_CHOCOLATE_LANDSCAPE.jpg", indulgent: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "drip-coffee", name: "咖啡", description: "优质滴滤咖啡", price: "3.00", image: "/images/DRIP_COFFEE_LANDSCAPE.jpg", comfort: true, allergens: [], spiciness: 0 }
    ],
    teaItems: [
      { id: "english-breakfast", name: "英式早餐茶", description: "浓郁红茶拼配", price: "5.00", image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg", essential: true, allergens: [], spiciness: 0 },
      { id: "earl-gray", name: "伯爵茶", description: "经典佛手柑红茶", price: "5.00", image: "/images/EARL_GRAY_LANDSCAPE.jpg", classic: true, allergens: [], spiciness: 0 },
      { id: "mint-tea", name: "薄荷茶", description: "清新提神的草本拼配", price: "5.00", image: "/images/MINT_TEA_LANDSCAPE.jpg", refreshing: true, allergens: [], spiciness: 0 },
      { id: "chamomile", name: "洋甘菊茶", description: "舒缓草本茶，天然无咖啡因", price: "5.00", image: "/images/CHAMOMILE_LANDSCAPE.jpg", calming: true, allergens: [], spiciness: 0 },
      { id: "green-tea", name: "绿茶", description: "清香淡雅的绿茶", price: "5.00", image: "/images/GREEN_TEA_LANDSCAPE.jpg", healthy: true, allergens: [], spiciness: 0 },
      { id: "chai-tea", name: "印式香料茶", description: "传统印度香料调配茶", price: "5.00", image: "/images/CHAI_TEA_LANDSCAPE.jpg", spiced: true, allergens: [], spiciness: 1 }
    ],
    boozyItems: [
      { id: "irish-coffee", name: "爱尔兰咖啡", description: "咖啡、詹姆森威士忌和鲜奶油", price: "12.00", image: "/images/IRISH_COFFEE_LANDSCAPE.jpg", irish: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "baileys-coffee", name: "百利甜咖啡", description: "咖啡、百利甜酒和鲜奶油", price: "12.00", image: "/images/BAILEYS_COFFEE_LANDSCAPE.jpg", creamy: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "brazilian-coffee", name: "巴西咖啡", description: "咖啡、白兰地和鲜奶油", price: "13.00", image: "/images/BRAZILIAN_COFFEE_LANDSCAPE.jpg", sophisticated: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 },
      { id: "spanish-coffee", name: "西班牙咖啡", description: "咖啡、卡鲁瓦、橙味利口酒和鲜奶油", price: "13.00", image: "/images/SPANISH_COFFEE_LANDSCAPE.jpg", exotic: true, allergens: ["/icons/dairy_icon.png"], spiciness: 0 }
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

const getBadgeInfo = (item) => {
  if (item.authentic) return { text: 'Authentic', color: 'bg-amber-600' };
  if (item.premium) return { text: 'Premium', color: 'bg-purple-600' };
  if (item.classic) return { text: 'Classic', color: 'bg-blue-600' };
  if (item.artisanal) return { text: 'Artisanal', color: 'bg-orange-600' };
  if (item.signature) return { text: 'Signature', color: 'bg-red-600' };
  if (item.refreshing) return { text: 'Refreshing', color: 'bg-cyan-500' };
  if (item.montreal) return { text: 'Montreal', color: 'bg-red-500' };
  if (item.indulgent) return { text: 'Indulgent', color: 'bg-pink-600' };
  if (item.comfort) return { text: 'Comfort', color: 'bg-yellow-600' };
  if (item.essential) return { text: 'Essential', color: 'bg-gray-600' };
  if (item.elegant) return { text: 'Elegant', color: 'bg-purple-500' };
  if (item.calming) return { text: 'Calming', color: 'bg-green-500' };
  if (item.healthy) return { text: 'Healthy', color: 'bg-emerald-500' };
  if (item.spiced) return { text: 'Spiced', color: 'bg-orange-500' };
  if (item.irish) return { text: 'Irish', color: 'bg-green-600' };
  if (item.creamy) return { text: 'Creamy', color: 'bg-amber-500' };
  if (item.exotic) return { text: 'Exotic', color: 'bg-yellow-500' };
  if (item.sophisticated) return { text: 'Sophisticated', color: 'bg-indigo-600' };
  if (item.double) return { text: 'Double', color: 'bg-slate-600' };
  if (item.traditional) return { text: 'Traditional', color: 'bg-brown-600' };
  return { text: "Special", color: "bg-slate-500" };
};

const SectionHeader = ({ title, subtitle, accent, gradient }) => (
  <div className="text-center mb-12 relative">
    <div className={`absolute inset-0 ${gradient} opacity-5 rounded-3xl`} />
    <div className="relative py-8">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
        <span className="text-2xl">{accent}</span>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
      </div>
      <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-amber-900 mb-3 uppercase tracking-wide">
        {title}
      </h2>
      <p className="font-serif font-light italic text-lg md:text-xl text-amber-900/70 max-w-4xl mx-auto">
        {subtitle}
      </p>
    </div>
  </div>
);

const renderSection = (items, sectionTitle, sectionSubtitle, accent, gradient) => (
  <section className="mb-16">
    <SectionHeader title={sectionTitle} subtitle={sectionSubtitle} accent={accent} gradient={gradient} />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {items.map((item, index) => {
        const badge = getBadgeInfo(item);
        return (
          <article key={item.id} className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
              
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              
              <div className="absolute inset-0 bg-gradient-to-b group-hover:from-amber-400/5 group-hover:via-orange-400/5 group-hover:to-yellow-400/5 transition-all duration-500 rounded-3xl"></div>

              <div className="relative h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center xl:object-contain 2xl:object-contain group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                />
                
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-serif font-semibold text-white shadow-lg ${badge.color}`}>
                    {badge.text}
                  </div>
                </div>
              </div>

              <div className="relative p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl text-amber-900 mb-3 group-hover:text-amber-800 transition-colors duration-300 leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-serif font-light text-sm md:text-base lg:text-sm xl:text-base text-amber-900/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-amber-900/10">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-amber-800">
                      ${item.price}
                    </span>
                    {item.price2 && (
                      <>
                        <span className="text-amber-900/50 mx-1">/</span>
                        <span className="font-serif font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl text-amber-800">
                          ${item.price2}
                        </span>
                      </>
                    )}
                    <span className="font-serif font-medium text-sm text-amber-900/50">CAD</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {renderSpicinessIcons(item.spiciness)}
                    {renderAllergens(item.allergens)}
                  </div>
                </div>
                
                {(item.note || item.note2) && !item.double && (
                  <div className="flex justify-between text-xs text-amber-900/60 mt-2">
                    {item.note && <span>{item.note}</span>}
                    {item.note2 && <span>{item.note2}</span>}
                  </div>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default function CoffeeEspressoBarPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden font-serif">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-40 w-36 h-36 bg-gradient-to-br from-orange-300 to-red-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-2xl"></div>
      </div>

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

        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
            <span className="text-3xl">{t.accent}</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
          </div>
          
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-900 mb-4 uppercase tracking-wide">
            {t.title}
          </h1>
          
          <div className="relative inline-block">
            <p className="font-serif font-light italic text-lg md:text-xl lg:text-2xl text-amber-900/70 mb-6 max-w-4xl">
              {t.subtitle}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="w-full px-4 md:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        
        {renderSection(t.espressoItems, t.espressoTitle, t.espressoSubtitle, "☕", "bg-gradient-to-br from-amber-100 to-orange-100")}

        {renderSection(t.teaItems, t.teaTitle, t.teaSubtitle, "🍃", "bg-gradient-to-br from-green-100 to-emerald-100")}

        {renderSection(t.boozyItems, t.boozyTitle, t.boozySubtitle, "🥃", "bg-gradient-to-br from-amber-100 to-yellow-100")}

        <div className="text-center mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
          <div className="space-y-2 text-sm text-amber-900/70 font-serif">
            <p>{t.notes.vegeMilk}</p>
            <p>{t.notes.honey}</p>
          </div>
        </div>
      </main>

      <footer className="w-full px-4 md:px-6 lg:px-8 pb-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
          </div>
          <p className="font-serif font-light text-amber-900/60 text-sm italic">
            Crafted with tradition and passion in Montreal
          </p>
        </div>
      </footer>
    </div>
  );
}

