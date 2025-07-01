// pages/category/saladitude.tsx
import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "The Right Saladitude",
    subtitle: "Attitude isn't an ingredient in any of our salads, but somehow it gets in there. From twisted take on old classics to original combos created to thrill and chill, our colourful salads are full of flavor",
    callout: "Sa-la-la-ditude",
    back: "Back",
    addChicken: "Add chicken to any salad for $5.95",
    badges: {
      signature: "Signature",
      classic: "Classic", 
      healthy: "Healthy",
      fresh: "Fresh",
      premium: "Premium",
      tropical: "Tropical",
      mediterranean: "Mediterranean",
      protein: "Protein",
      vegetarian: "Vegetarian",
      gourmet: "Gourmet",
      seasonal: "Seasonal",
      montreal: "Montreal",
      light: "Light",
      creamy: "Creamy",
      fruity: "Fruity",
      crunchy: "Crunchy",
      spicy: "Spicy",
      refreshing: "Refreshing"
    },
    items: [
      {
        id: "californian-salad",
        name: "Californian Salad",
        description: "Tossed mixed greens, fresh avocado, cherry tomatoes and cucumbers topped with grilled chicken breast and garlic-sautéed spinach with our balsamic dressing",
        price: "21.95",
        healthy: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CALIFORNIAN_CHICKEN_SALAD.jpg"
      },
      {
        id: "cobb-salad",
        name: "Cobb Salad",
        description: "Romaine, mixed with grilled chicken breast, cherry tomatoes, goat cheese, bacon and avocado with an egg, capers with Caesar dressing",
        price: "21.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/COBB_CHICKEN_SALAD.jpg"
      },
      {
        id: "marseille-salad",
        name: "Marseille Salad",
        description: "Mixed greens salad with white tuna, tomato, cucumber, hardboiled egg, red bell peppers, capers and olives. Served with our balsamic vinaigrette",
        price: "20.95",
        mediterranean: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/MARSEILLE_SALAD.jpg"
      },
      {
        id: "greek-villager-salad",
        name: "Greek Villager Salad",
        description: "This all-time favourite has tomatoes, cucumber, black olives, peppers, red onions, traditional Greek feta cheese tossed with extra-virgin olive oil and a splash of red wine vinegar with oregano",
        price: "18.95",
        mediterranean: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/GREEK_VILLAGER_SALAD.jpg"
      },
      {
        id: "mixed-green-salad",
        name: "Mixed Green Salad",
        description: "Mixed greens with cucumber, cherry tomato, carrot, cabbage, radish, red onion and served with our balsamic vinaigrette",
        price: "12.00",
        priceNote: "Small: $12.00 - Large: $16.00",
        light: true,
        allergens: [],
        spiciness: 0,
        image: "/images/MIXED_GREEN_SALAD.jpg"
      },
      {
        id: "caesar-salad",
        name: "Caesar Salad",
        description: "Chopped romaine lettuce with smoked bacon, croutons, parmesan cheese and tossed in our Caesar dressing",
        price: "13.00",
        priceNote: "Small: $13.00 - Large: $17.00",
        classic: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CAESAR_SALAD.jpg"
      },
      {
        id: "strawberry-lover",
        name: "Strawberry Lover with Balsamic",
        description: "Handful of strawberry, baby spinach, Arugula, cherry tomato, avocado, fresh mint Leafe toasted with balsamic vinegar, extra-virgin olive oil, for drizzling and topped with pecans also Sea salt and blocko ground black pepper",
        price: "19.95",
        fruity: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRY_LOVER_SALAD.jpg"
      },
      {
        id: "extra-cooler",
        name: "Extra Cooler",
        description: "Chopped watermelons, red onion, cucumber, arugula, avocado, fresh mint leaves and a bright lime dressing, to tie it all together, topped with feta cheese and walnuts",
        price: "19.95",
        refreshing: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/EXTRA_COOLER_SALAD.jpg"
      },
      {
        id: "santhu-mix-salad",
        name: "Santhu Mix Salad",
        description: "Chopped Romain salad, cherry tomatoes, bell peppers, cucumber, red onions green garbage and radish mixed with balsamic dressing, also topped with cheddar, Swiss cheese and dices cut ham",
        price: "21.95",
        protein: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SANTHU_MIX_SALAD.jpg"
      },
      {
        id: "thai-salad-chicken",
        name: "Thai Salad Chicken",
        description: "Green salad mix, peppers, carrots, green and red cabbage, cherry tomatoes, toasted with Thai dressing, and topped with Thai noodles, grilled chicken, sesame seed",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/THAI_SALAD_CHICKEN.jpg"
      },
      {
        id: "tropical-chicken",
        name: "Tropical Chicken",
        description: "Baby spinach, seasonal tropical fruits mixed with balsamic dressing and grilled chicken toasted with honey mustard Dijon sauce topped with goat cheese and sunflower seed",
        price: "24.95",
        tropical: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/TROPICAL_CHICKEN_SALAD.jpg"
      },
      {
        id: "junior-simply",
        name: "Junior Simply",
        description: "Green mixed salad, red onions, mixed with creamy Greek yogurt balsamic maple syrup dressing topped with green apple, almond and Gruyère cheese",
        price: "18.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/JUNIOR_SIMPLY_SALAD.jpg"
      },
      {
        id: "celshi-red-salad",
        name: "Celshi Red Salad",
        description: "Green mixed salad, red apple, cucumber, red onions, dried cranberries, mixed with creamy Greek yogurt maple dressing, topped with granola and feta cheese",
        price: "19.95",
        crunchy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CELSHI_RED_SALAD.jpg"
      },
      {
        id: "summer-judy",
        name: "Summer Judy",
        description: "Green mixed salad, mango slices, bell red peppers, chopped red onions, diced avocado mixed with mango dressing topped with roasted peanuts",
        price: "21.95",
        tropical: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/SUMMER_JUDY_SALAD.jpg"
      },
      {
        id: "montrealer-salad",
        name: "Montrealer Salad",
        description: "Chopped romaine lettuce, croutons, parmesan cheese tossed with Caesar dressing topped with chopped smoked meat and pickle",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_SALAD.jpg"
      },
      {
        id: "smoked-salmon-salad",
        name: "Smoked Salmon Salad",
        description: "Green mixed salad, red onions, avocados, capers mixed with dill maple dressing topped with thin slice smoked salmons",
        price: "24.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_SALAD.jpg"
      },
      {
        id: "fruits-greek-yogurt",
        name: "Fruits Greek Yogurt",
        description: "Arugula salad, seasonal fruits, Greek yogurt and topped with roasted almonds",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/FRUITS_GREEK_YOGURT_SALAD.jpg"
      },
      {
        id: "shrimps-salad",
        name: "Shrimps' Salad",
        description: "Chopped romaine lettuce, cherry tomatoes, avocado and Louise dressing, shrimps and boiled egg and topped with green onions",
        price: "25.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/SHRIMPS_SALAD.jpg"
      }
    ],
    footer: {
      message: "Fresh ingredients, bold flavors, served with Montreal saladitude",
      tagline: "Where every leaf tells a story of freshness and creativity"
    }
  },
  fr: {
    title: "La Bonne Saladitude",
    subtitle: "L'attitude n'est pas un ingrédient dans nos salades, mais elle s'y glisse d'une manière ou d'une autre. Des versions revisitées des classiques aux combos originaux créés pour émouvoir et rafraîchir, nos salades colorées sont pleines de saveur",
    callout: "Sa-la-la-ditude",
    back: "Retour",
    addChicken: "Ajoutez du poulet à n'importe quelle salade pour 5,95 $",
    badges: {
      signature: "Signature",
      classic: "Classique",
      healthy: "Sain",
      fresh: "Frais",
      premium: "Premium",
      tropical: "Tropical",
      mediterranean: "Méditerranéen",
      protein: "Protéine",
      vegetarian: "Végétarien",
      gourmet: "Gourmet",
      seasonal: "Saisonnier",
      montreal: "Montréal",
      light: "Léger",
      creamy: "Crémeux",
      fruity: "Fruité",
      crunchy: "Croquant",
      spicy: "Épicé",
      refreshing: "Rafraîchissant"
    },
    items: [
      {
        id: "californian-salad",
        name: "Salade Californienne",
        description: "Mélange de verdures, avocat frais, tomates cerises et concombres garnis de poitrine de poulet grillée et d'épinards sautés à l'ail avec notre vinaigrette balsamique",
        price: "21.95",
        healthy: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CALIFORNIAN_CHICKEN_SALAD.jpg"
      },
      {
        id: "cobb-salad",
        name: "Salade Cobb",
        description: "Romaine, mélangée avec poitrine de poulet grillée, tomates cerises, fromage de chèvre, bacon et avocat avec un œuf, câpres avec vinaigrette César",
        price: "21.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/COBB_CHICKEN_SALAD.jpg"
      },
      {
        id: "marseille-salad",
        name: "Salade de Marseille",
        description: "Salade de verdures mélangées avec thon blanc, tomate, concombre, œuf dur, poivrons rouges, câpres et olives. Servie avec notre vinaigrette balsamique",
        price: "20.95",
        mediterranean: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/MARSEILLE_SALAD.jpg"
      },
      {
        id: "greek-villager-salad",
        name: "Salade Villageoise Grecque",
        description: "Ce favori de tous les temps a des tomates, concombre, olives noires, poivrons, oignons rouges, feta grecque traditionnelle mélangée avec huile d'olive extra-vierge et un soupçon de vinaigre de vin rouge avec origan",
        price: "18.95",
        mediterranean: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/GREEK_VILLAGER_SALAD.jpg"
      },
      {
        id: "mixed-green-salad",
        name: "Salade Verte Mélangée",
        description: "Verdures mélangées avec concombre, tomate cerise, carotte, chou, radis, oignon rouge et servie avec notre vinaigrette balsamique",
        price: "12.00",
        priceNote: "Petite: 12,00 $ - Grande: 16,00 $",
        light: true,
        allergens: [],
        spiciness: 0,
        image: "/images/MIXED_GREEN_SALAD.jpg"
      },
      {
        id: "caesar-salad",
        name: "Salade César",
        description: "Laitue romaine hachée avec bacon fumé, croûtons, fromage parmesan et mélangée dans notre vinaigrette César",
        price: "13.00",
        priceNote: "Petite: 13,00 $ - Grande: 17,00 $",
        classic: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CAESAR_SALAD.jpg"
      },
      {
        id: "strawberry-lover",
        name: "Amoureuse des Fraises au Balsamique",
        description: "Poignée de fraises, épinards bébé, roquette, tomate cerise, avocat, feuilles de menthe fraîche grillées avec vinaigre balsamique, huile d'olive extra-vierge, pour arroser et garnie de pacanes aussi sel de mer et poivre noir moulu",
        price: "19.95",
        fruity: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRY_LOVER_SALAD.jpg"
      },
      {
        id: "extra-cooler",
        name: "Extra Rafraîchissante",
        description: "Pastèques hachées, oignon rouge, concombre, roquette, avocat, feuilles de menthe fraîche et une vinaigrette au citron vert brillante, pour tout lier ensemble, garnie de fromage feta et de noix",
        price: "19.95",
        refreshing: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/EXTRA_COOLER_SALAD.jpg"
      },
      {
        id: "santhu-mix-salad",
        name: "Salade Mélange Santhu",
        description: "Salade romaine hachée, tomates cerises, poivrons, concombre, oignons rouges, chou vert et radis mélangés avec vinaigrette balsamique, aussi garnie de cheddar, fromage suisse et jambon coupé en dés",
        price: "21.95",
        protein: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SANTHU_MIX_SALAD.jpg"
      },
      {
        id: "thai-salad-chicken",
        name: "Salade Thaï au Poulet",
        description: "Mélange de salade verte, poivrons, carottes, chou vert et rouge, tomates cerises, grillées avec vinaigrette thaï, et garnies de nouilles thaï, poulet grillé, graines de sésame",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/THAI_SALAD_CHICKEN.jpg"
      },
      {
        id: "tropical-chicken",
        name: "Poulet Tropical",
        description: "Épinards bébé, fruits tropicaux de saison mélangés avec vinaigrette balsamique et poulet grillé grillé avec sauce moutarde au miel Dijon garnie de fromage de chèvre et graines de tournesol",
        price: "24.95",
        tropical: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/TROPICAL_CHICKEN_SALAD.jpg"
      },
      {
        id: "junior-simply",
        name: "Junior Simplement",
        description: "Salade verte mélangée, oignons rouges, mélangée avec vinaigrette crémeuse au yogourt grec balsamique sirop d'érable garnie de pomme verte, amande et fromage Gruyère",
        price: "18.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/JUNIOR_SIMPLY_SALAD.jpg"
      },
      {
        id: "celshi-red-salad",
        name: "Salade Rouge Celshi",
        description: "Salade verte mélangée, pomme rouge, concombre, oignons rouges, canneberges séchées, mélangée avec vinaigrette crémeuse au yogourt grec à l'érable, garnie de granola et fromage feta",
        price: "19.95",
        crunchy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CELSHI_RED_SALAD.jpg"
      },
      {
        id: "summer-judy",
        name: "Judy d'Été",
        description: "Salade verte mélangée, tranches de mangue, poivrons rouges, oignons rouges hachés, avocat en dés mélangé avec vinaigrette à la mangue garnie d'arachides grillées",
        price: "21.95",
        tropical: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/SUMMER_JUDY_SALAD.jpg"
      },
      {
        id: "montrealer-salad",
        name: "Salade Montréalaise",
        description: "Laitue romaine hachée, croûtons, fromage parmesan mélangé avec vinaigrette César garnie de viande fumée hachée et cornichon",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_SALAD.jpg"
      },
      {
        id: "smoked-salmon-salad",
        name: "Salade au Saumon Fumé",
        description: "Salade verte mélangée, oignons rouges, avocats, câpres mélangées avec vinaigrette à l'aneth et à l'érable garnie de fines tranches de saumons fumés",
        price: "24.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_SALAD.jpg"
      },
      {
        id: "fruits-greek-yogurt",
        name: "Fruits Yogourt Grec",
        description: "Salade de roquette, fruits de saison, yogourt grec et garnie d'amandes grillées",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/FRUITS_GREEK_YOGURT_SALAD.jpg"
      },
      {
        id: "shrimps-salad",
        name: "Salade aux Crevettes",
        description: "Laitue romaine hachée, tomates cerises, avocat et vinaigrette Louise, crevettes et œuf bouilli et garnie d'oignons verts",
        price: "25.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/SHRIMPS_SALAD.jpg"
      }
    ],
    footer: {
      message: "Ingrédients frais, saveurs audacieuses, servis avec saladitude montréalaise",
      tagline: "Où chaque feuille raconte une histoire de fraîcheur et de créativité"
    }
  },
  es: {
    title: "La Saladitud Perfecta",
    subtitle: "La actitud no es un ingrediente en ninguna de nuestras ensaladas, pero de alguna manera se cuela ahí. Desde versiones retorcidas de clásicos antiguos hasta combos originales creados para emocionar y relajar, nuestras ensaladas coloridas están llenas de sabor",
    callout: "Sa-la-la-ditude",
    back: "Volver",
    addChicken: "Añade pollo a cualquier ensalada por $5.95",
    badges: {
      signature: "Signature",
      classic: "Clásico",
      healthy: "Saludable",
      fresh: "Fresco",
      premium: "Premium",
      tropical: "Tropical",
      mediterranean: "Mediterráneo",
      protein: "Proteína",
      vegetarian: "Vegetariano",
      gourmet: "Gourmet",
      seasonal: "Estacional",
      montreal: "Montreal",
      light: "Ligero",
      creamy: "Cremoso",
      fruity: "Afrutado",
      crunchy: "Crujiente",
      spicy: "Picante",
      refreshing: "Refrescante"
    },
    items: [
      {
        id: "californian-salad",
        name: "Ensalada Californiana",
        description: "Mezcla de verduras, aguacate fresco, tomates cherry y pepinos cubiertos con pechuga de pollo a la parrilla y espinacas salteadas con ajo con nuestro aderezo balsámico",
        price: "21.95",
        healthy: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CALIFORNIAN_CHICKEN_SALAD.jpg"
      },
      {
        id: "cobb-salad",
        name: "Ensalada Cobb",
        description: "Lechuga romana, mezclada con pechuga de pollo a la parrilla, tomates cherry, queso de cabra, tocino y aguacate con un huevo, alcaparras con aderezo César",
        price: "21.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/COBB_CHICKEN_SALAD.jpg"
      },
      {
        id: "marseille-salad",
        name: "Ensalada de Marsella",
        description: "Ensalada de verduras mixtas con atún blanco, tomate, pepino, huevo duro, pimientos rojos, alcaparras y aceitunas. Servida con nuestra vinagreta balsámica",
        price: "20.95",
        mediterranean: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/MARSEILLE_SALAD.jpg"
      },
      {
        id: "greek-villager-salad",
        name: "Ensalada Aldeana Griega",
        description: "Este favorito de todos los tiempos tiene tomates, pepino, aceitunas negras, pimientos, cebollas rojas, queso feta griego tradicional mezclado con aceite de oliva extra virgen y un toque de vinagre de vino tinto con orégano",
        price: "18.95",
        mediterranean: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/GREEK_VILLAGER_SALAD.jpg"
      },
      {
        id: "mixed-green-salad",
        name: "Ensalada Verde Mixta",
        description: "Verduras mixtas con pepino, tomate cherry, zanahoria, repollo, rábano, cebolla roja y servida con nuestra vinagreta balsámica",
        price: "12.00",
        priceNote: "Pequeña: $12.00 - Grande: $16.00",
        light: true,
        allergens: [],
        spiciness: 0,
        image: "/images/MIXED_GREEN_SALAD.jpg"
      },
      {
        id: "caesar-salad",
        name: "Ensalada César",
        description: "Lechuga romana picada con tocino ahumado, crutones, queso parmesano y mezclada en nuestro aderezo César",
        price: "13.00",
        priceNote: "Pequeña: $13.00 - Grande: $17.00",
        classic: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CAESAR_SALAD.jpg"
      },
      {
        id: "strawberry-lover",
        name: "Amante de Fresas con Balsámico",
        description: "Puñado de fresas, espinacas baby, rúcula, tomate cherry, aguacate, hojas de menta fresca tostadas con vinagre balsámico, aceite de oliva extra virgen, para rociar y cubierto con nueces pecanas también sal marina y pimienta negra molida",
        price: "19.95",
        fruity: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRY_LOVER_SALAD.jpg"
      },
      {
        id: "extra-cooler",
        name: "Extra Refrescante",
        description: "Sandías picadas, cebolla roja, pepino, rúcula, aguacate, hojas de menta fresca y un aderezo de lima brillante, para unir todo, cubierto con queso feta y nueces",
        price: "19.95",
        refreshing: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/EXTRA_COOLER_SALAD.jpg"
      },
      {
        id: "santhu-mix-salad",
        name: "Ensalada Mezcla Santhu",
        description: "Ensalada romana picada, tomates cherry, pimientos, pepino, cebollas rojas, repollo verde y rábano mezclado con aderezo balsámico, también cubierto con cheddar, queso suizo y jamón cortado en cubitos",
        price: "21.95",
        protein: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SANTHU_MIX_SALAD.jpg"
      },
      {
        id: "thai-salad-chicken",
        name: "Ensalada Tailandesa de Pollo",
        description: "Mezcla de ensalada verde, pimientos, zanahorias, repollo verde y rojo, tomates cherry, tostados con aderezo tailandés, y cubierto con fideos tailandeses, pollo a la parrilla, semillas de sésamo",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/THAI_SALAD_CHICKEN.jpg"
      },
      {
        id: "tropical-chicken",
        name: "Pollo Tropical",
        description: "Espinacas baby, frutas tropicales de temporada mezcladas con aderezo balsámico y pollo a la parrilla tostado con salsa de mostaza miel Dijon cubierto con queso de cabra y semillas de girasol",
        price: "24.95",
        tropical: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/TROPICAL_CHICKEN_SALAD.jpg"
      },
      {
        id: "junior-simply",
        name: "Junior Simplemente",
        description: "Ensalada verde mixta, cebollas rojas, mezclada con aderezo cremoso de yogur griego balsámico jarabe de arce cubierto con manzana verde, almendra y queso Gruyère",
        price: "18.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/JUNIOR_SIMPLY_SALAD.jpg"
      },
      {
        id: "celshi-red-salad",
        name: "Ensalada Roja Celshi",
        description: "Ensalada verde mixta, manzana roja, pepino, cebollas rojas, arándanos secos, mezclada con aderezo cremoso de yogur griego de arce, cubierto con granola y queso feta",
        price: "19.95",
        crunchy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CELSHI_RED_SALAD.jpg"
      },
      {
        id: "summer-judy",
        name: "Judy de Verano",
        description: "Ensalada verde mixta, rodajas de mango, pimientos rojos, cebollas rojas picadas, aguacate en cubitos mezclado con aderezo de mango cubierto con maní tostado",
        price: "21.95",
        tropical: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/SUMMER_JUDY_SALAD.jpg"
      },
      {
        id: "montrealer-salad",
        name: "Ensalada Montrealeña",
        description: "Lechuga romana picada, crutones, queso parmesano mezclado con aderezo César cubierto con carne ahumada picada y pepinillo",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_SALAD.jpg"
      },
      {
        id: "smoked-salmon-salad",
        name: "Ensalada de Salmón Ahumado",
        description: "Ensalada verde mixta, cebollas rojas, aguacates, alcaparras mezcladas con aderezo de eneldo y arce cubierto con finas rodajas de salmones ahumados",
        price: "24.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_SALAD.jpg"
      },
      {
        id: "fruits-greek-yogurt",
        name: "Frutas Yogur Griego",
        description: "Ensalada de rúcula, frutas de temporada, yogur griego y cubierto con almendras tostadas",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/FRUITS_GREEK_YOGURT_SALAD.jpg"
      },
      {
        id: "shrimps-salad",
        name: "Ensalada de Camarones",
        description: "Lechuga romana picada, tomates cherry, aguacate y aderezo Louise, camarones y huevo hervido y cubierto con cebollas verdes",
        price: "25.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/SHRIMPS_SALAD.jpg"
      }
    ],
    footer: {
      message: "Ingredientes frescos, sabores audaces, servidos con saladitud montrealeña",
      tagline: "Donde cada hoja cuenta una historia de frescura y creatividad"
    }
  },
  cn: {
    title: "正确的沙拉态度",
    subtitle: "态度不是我们任何沙拉中的成分，但不知何故它会进入其中。从对经典的扭曲诠释到为了刺激和放松而创造的原创组合，我们丰富多彩的沙拉充满了风味",
    callout: "Sa-la-la-ditude",
    back: "返回",
    addChicken: "任何沙拉加鸡肉 $5.95",
    badges: {
      signature: "招牌",
      classic: "经典",
      healthy: "健康",
      fresh: "新鲜",
      premium: "高级",
      tropical: "热带",
      mediterranean: "地中海",
      protein: "蛋白质",
      vegetarian: "素食",
      gourmet: "美食",
      seasonal: "时令",
      montreal: "蒙特利尔",
      light: "清淡",
      creamy: "奶香",
      fruity: "果味",
      crunchy: "脆嫩",
      spicy: "辣味",
      refreshing: "清爽"
    },
    items: [
      {
        id: "californian-salad",
        name: "加州沙拉",
        description: "混合绿叶菜，新鲜牛油果，樱桃番茄和黄瓜，配烤鸡胸肉和蒜炒菠菜，淋香醋调料",
        price: "21.95",
        healthy: true,
        allergens: [],
        spiciness: 0,
        image: "/images/CALIFORNIAN_CHICKEN_SALAD.jpg"
      },
      {
        id: "cobb-salad",
        name: "科布沙拉",
        description: "罗马生菜，配烤鸡胸肉，樱桃番茄，山羊奶酪，培根和牛油果，配鸡蛋，刺山柑和凯撒调料",
        price: "21.95",
        classic: true,
        allergens: ["/icons/egg_icon.png", "/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/COBB_CHICKEN_SALAD.jpg"
      },
      {
        id: "marseille-salad",
        name: "马赛沙拉",
        description: "混合绿叶沙拉配白金枪鱼，番茄，黄瓜，水煮蛋，红甜椒，刺山柑和橄榄。配香醋调料",
        price: "20.95",
        mediterranean: true,
        allergens: ["/icons/egg_icon.png", "/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/MARSEILLE_SALAD.jpg"
      },
      {
        id: "greek-villager-salad",
        name: "希腊村民沙拉",
        description: "这道经典美食有番茄，黄瓜，黑橄榄，甜椒，红洋葱，传统希腊羊奶酪，配特级初榨橄榄油和红酒醋，撒牛至",
        price: "18.95",
        mediterranean: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/GREEK_VILLAGER_SALAD.jpg"
      },
      {
        id: "mixed-green-salad",
        name: "混合绿叶沙拉",
        description: "混合绿叶菜配黄瓜，樱桃番茄，胡萝卜，卷心菜，萝卜，红洋葱，配香醋调料",
        price: "12.00",
        priceNote: "小份: $12.00 - 大份: $16.00",
        light: true,
        allergens: [],
        spiciness: 0,
        image: "/images/MIXED_GREEN_SALAD.jpg"
      },
      {
        id: "caesar-salad",
        name: "凯撒沙拉",
        description: "切碎的罗马生菜配烟熏培根，面包丁，帕玛森奶酪，拌凯撒调料",
        price: "13.00",
        priceNote: "小份: $13.00 - 大份: $17.00",
        classic: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CAESAR_SALAD.jpg"
      },
      {
        id: "strawberry-lover",
        name: "草莓爱好者香醋沙拉",
        description: "一把草莓，嫩菠菜，芝麻菜，樱桃番茄，牛油果，新鲜薄荷叶配香醋，特级初榨橄榄油淋洒，撒山核桃，海盐和现磨黑胡椒",
        price: "19.95",
        fruity: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/STRAWBERRY_LOVER_SALAD.jpg"
      },
      {
        id: "extra-cooler",
        name: "超级清爽沙拉",
        description: "切碎的西瓜，红洋葱，黄瓜，芝麻菜，牛油果，新鲜薄荷叶和明亮的青柠调料，将所有食材融合在一起，撒羊奶酪和核桃",
        price: "19.95",
        refreshing: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/EXTRA_COOLER_SALAD.jpg"
      },
      {
        id: "santhu-mix-salad",
        name: "桑图混合沙拉",
        description: "切碎的罗马生菜，樱桃番茄，甜椒，黄瓜，红洋葱，绿卷心菜和萝卜配香醋调料，撒切达奶酪，瑞士奶酪和切丁火腿",
        price: "21.95",
        protein: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/SANTHU_MIX_SALAD.jpg"
      },
      {
        id: "thai-salad-chicken",
        name: "泰式鸡肉沙拉",
        description: "绿叶沙拉混合，甜椒，胡萝卜，绿红卷心菜，樱桃番茄，配泰式调料，撒泰式面条，烤鸡肉，芝麻",
        price: "23.95",
        spicy: true,
        allergens: ["/icons/wheat_icon.png"],
        spiciness: 2,
        image: "/images/THAI_SALAD_CHICKEN.jpg"
      },
      {
        id: "tropical-chicken",
        name: "热带鸡肉沙拉",
        description: "嫩菠菜，时令热带水果配香醋调料和烤鸡肉，淋蜂蜜芥末第戎酱，撒山羊奶酪和葵花籽",
        price: "24.95",
        tropical: true,
        allergens: ["/icons/dairy_icon.png"],
        spiciness: 0,
        image: "/images/TROPICAL_CHICKEN_SALAD.jpg"
      },
      {
        id: "junior-simply",
        name: "简单青少年沙拉",
        description: "混合绿叶沙拉，红洋葱，配奶香希腊酸奶香醋枫糖浆调料，撒青苹果，杏仁和格鲁耶尔奶酪",
        price: "18.95",
        creamy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/JUNIOR_SIMPLY_SALAD.jpg"
      },
      {
        id: "celshi-red-salad",
        name: "塞尔希红色沙拉",
        description: "混合绿叶沙拉，红苹果，黄瓜，红洋葱，干蔓越莓，配奶香希腊酸奶枫糖调料，撒燕麦片和羊奶酪",
        price: "19.95",
        crunchy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/CELSHI_RED_SALAD.jpg"
      },
      {
        id: "summer-judy",
        name: "夏日朱迪沙拉",
        description: "混合绿叶沙拉，芒果片，红甜椒，切碎红洋葱，牛油果丁配芒果调料，撒烤花生",
        price: "21.95",
        tropical: true,
        allergens: ["/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/SUMMER_JUDY_SALAD.jpg"
      },
      {
        id: "montrealer-salad",
        name: "蒙特利尔沙拉",
        description: "切碎的罗马生菜，面包丁，帕玛森奶酪配凯撒调料，撒切碎烟熏肉和泡菜",
        price: "24.95",
        montreal: true,
        allergens: ["/icons/dairy_icon.png", "/icons/wheat_icon.png"],
        spiciness: 0,
        image: "/images/MONTREALER_SALAD.jpg"
      },
      {
        id: "smoked-salmon-salad",
        name: "烟熏三文鱼沙拉",
        description: "混合绿叶沙拉，红洋葱，牛油果，刺山柑配莳萝枫糖调料，撒薄片烟熏三文鱼",
        price: "24.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png"],
        spiciness: 0,
        image: "/images/SMOKED_SALMON_SALAD.jpg"
      },
      {
        id: "fruits-greek-yogurt",
        name: "水果希腊酸奶沙拉",
        description: "芝麻菜沙拉，时令水果，希腊酸奶，撒烤杏仁",
        price: "18.95",
        healthy: true,
        allergens: ["/icons/dairy_icon.png", "/icons/nuts_icon.png"],
        spiciness: 0,
        image: "/images/FRUITS_GREEK_YOGURT_SALAD.jpg"
      },
      {
        id: "shrimps-salad",
        name: "虾仁沙拉",
        description: "切碎的罗马生菜，樱桃番茄，牛油果和路易丝调料，虾仁和水煮蛋，撒青葱",
        price: "25.95",
        premium: true,
        allergens: ["/icons/seafood_icon.png", "/icons/egg_icon.png"],
        spiciness: 0,
        image: "/images/SHRIMPS_SALAD.jpg"
      }
    ],
    footer: {
      message: "新鲜食材，大胆风味，以蒙特利尔沙拉态度呈现",
      tagline: "每一片叶子都诉说着新鲜和创意的故事"
    }
  }
};

const renderSpicinessIcons = (level) => {
  if (!level || level === 0) return null;
  return (
    <div className="flex gap-1">
      {Array.from({ length: level }, (_, i) => (
        <img key={`spice-${i}`} src="/icons/spiciness_icon.png" alt="spice" className="w-5 h-5" />
      ))}
    </div>
  );
};

const renderAllergens = (icons = []) => {
  if (!icons || icons.length === 0) return null;
  return (
    <div className="flex gap-2 flex-wrap">
      {icons.map((icon, i) => (
        <img key={`allergen-${i}`} src={icon} alt="allergen" className="w-6 h-6" />
      ))}
    </div>
  );
};

const getBadgeInfo = (item, badges) => {
  if (item.signature) return { text: badges.signature, color: 'bg-purple-600' };
  if (item.classic) return { text: badges.classic, color: 'bg-blue-600' };
  if (item.healthy) return { text: badges.healthy, color: 'bg-green-500' };
  if (item.fresh) return { text: badges.fresh, color: 'bg-emerald-500' };
  if (item.premium) return { text: badges.premium, color: 'bg-amber-600' };
  if (item.tropical) return { text: badges.tropical, color: 'bg-orange-500' };
  if (item.mediterranean) return { text: badges.mediterranean, color: 'bg-cyan-600' };
  if (item.protein) return { text: badges.protein, color: 'bg-red-600' };
  if (item.vegetarian) return { text: badges.vegetarian, color: 'bg-lime-500' };
  if (item.gourmet) return { text: badges.gourmet, color: 'bg-indigo-600' };
  if (item.seasonal) return { text: badges.seasonal, color: 'bg-yellow-500' };
  if (item.montreal) return { text: badges.montreal, color: 'bg-blue-800' };
  if (item.light) return { text: badges.light, color: 'bg-gray-400' };
  if (item.creamy) return { text: badges.creamy, color: 'bg-orange-400' };
  if (item.fruity) return { text: badges.fruity, color: 'bg-pink-500' };
  if (item.crunchy) return { text: badges.crunchy, color: 'bg-yellow-600' };
  if (item.spicy) return { text: badges.spicy, color: 'bg-red-500' };
  if (item.refreshing) return { text: badges.refreshing, color: 'bg-teal-500' };
  return { text: badges.fresh, color: "bg-slate-500" };
};

export default function SaladitudePage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden font-serif">
      
      {/* Background Decorative Elements - Fresh Salad Theme */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-40 right-32 w-28 h-28 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full blur-2xl transform -rotate-12" />
        <div className="absolute bottom-40 left-40 w-36 h-36 bg-gradient-to-br from-teal-300 to-green-300 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full blur-2xl transform -rotate-45" />
        
        {/* Fresh Salad Emojis Scattered */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-20 transform rotate-12">🥗</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-15 transform -rotate-12">🥬</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-25 transform rotate-45">🥒</div>
        <div className="absolute bottom-40 right-1/3 text-5xl opacity-20 transform -rotate-45">🍅</div>
        <div className="absolute top-1/2 left-1/6 text-3xl opacity-30 transform rotate-12">🥑</div>
        <div className="absolute top-2/3 right-1/6 text-4xl opacity-25 transform -rotate-12">🌿</div>
      </div>

      {/* Header Section */}
      <header className="w-full px-6 pt-10 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/menu">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-green-900 font-semibold">{t.back}</span>
            </button>
          </Link>
        </div>
        
        <div className="text-center w-full">
          {/* Decorative Line with Salad Emoji */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-4xl mx-4">🥗</span>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-900 mb-4 uppercase tracking-wider leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-green-800 max-w-4xl mx-auto leading-relaxed italic font-medium mb-4">
            {t.subtitle}
          </p>
          
          {/* Callout */}
          <div className="inline-block px-6 py-3 bg-green-100/80 backdrop-blur-sm rounded-full border border-green-200/60 shadow-lg mb-6">
            <span className="text-2xl font-bold text-green-800 italic">{t.callout}</span>
          </div>
          
          {/* Add Chicken Note */}
          <div className="inline-block px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full border border-amber-200/60 shadow-md">
            <span className="text-sm font-semibold text-amber-800">{t.addChicken}</span>
          </div>
          
          {/* Decorative Line with Leaf Emoji */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-32"></div>
            <span className="text-3xl mx-4">🌿</span>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content - Tablet Responsive Layout */}
      <main className="px-6 pb-20 pt-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {t.items.map((item) => {
            const badge = getBadgeInfo(item, t.badges);
            return (
              <article 
                key={item.id} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-green-200/40 w-full"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${badge.color} backdrop-blur-sm`}>
                    {badge.text}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 space-y-5">
                  <h3 className="text-2xl font-bold text-green-900 leading-tight group-hover:text-green-800 transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  {/* Full text without truncation */}
                  <p className="text-base text-green-800 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  {/* Price Section */}
                  <div className="pt-5 border-t border-green-200/60 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-green-900">${item.price}</span>
                      {item.priceNote && (
                        <span className="text-xs text-green-700 font-medium mt-1">{item.priceNote}</span>
                      )}
                    </div>
                    <span className="text-base text-green-700 font-semibold">CAD</span>
                  </div>
                  
                  {/* Allergens and Spiciness - moved to bottom right */}
                  <div className="flex gap-3 items-center justify-end">
                    {renderSpicinessIcons(item.spiciness)}
                    {renderAllergens(item.allergens)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10 px-6 pb-8">
        <div className="w-full text-center">
          {/* Decorative Elements */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-2"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-2"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="text-green-800 font-semibold text-lg mb-2">
            {t.footer.message}
          </p>
          
          <p className="text-green-700 italic text-sm">
            {t.footer.tagline}
          </p>
          
          {/* Final Decorative Line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-24"></div>
            <span className="text-2xl mx-3">🍽️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-24"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

