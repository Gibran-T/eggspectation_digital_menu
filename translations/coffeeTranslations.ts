from pathlib import Path

# Conteúdo do arquivo coffeeTranslations.ts
coffee_translations_ts = """
const coffeeTranslations = {
  en: {
    espressoItems: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Traditional Italian shot, rich and intense with perfect crema",
        price: "3.75",
        image: "/images/ESPRESSO_LANDSCAPE.jpg",
      },
      {
        id: "espresso-doppio",
        name: "Espresso Doppio",
        description: "Double shot of our signature espresso for the true connoisseur",
        price: "4.50",
        image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg",
      },
    ],
    teaItems: [
      {
        id: "english-breakfast",
        name: "English Breakfast",
        description: "Classic black tea blend, robust and full-bodied morning tradition",
        price: "5.00",
        image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg",
      }
    ],
    boozyItems: [
      {
        id: "irish-coffee",
        name: "Irish Coffee",
        description: "Coffee, Jameson Irish whiskey, and whipped cream",
        price: "12.00",
        image: "/images/IRISH_COFFEE_LANDSCAPE.jpg",
      }
    ]
  },
  fr: {
    espressoItems: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Café italien traditionnel, riche et intense avec une crema parfaite",
        price: "3.75",
        image: "/images/ESPRESSO_LANDSCAPE.jpg",
      },
      {
        id: "espresso-doppio",
        name: "Espresso Doppio",
        description: "Double dose de notre espresso signature pour les vrais connaisseurs",
        price: "4.50",
        image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg",
      },
    ],
    teaItems: [
      {
        id: "english-breakfast",
        name: "English Breakfast",
        description: "Mélange de thé noir classique, robuste et corsé",
        price: "5.00",
        image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg",
      }
    ],
    boozyItems: [
      {
        id: "irish-coffee",
        name: "Café Irlandais",
        description: "Café, whisky Jameson et crème fouettée",
        price: "12.00",
        image: "/images/IRISH_COFFEE_LANDSCAPE.jpg",
      }
    ]
  },
  es: {
    espressoItems: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Taza italiana tradicional, rica e intensa con crema perfecta",
        price: "3.75",
        image: "/images/ESPRESSO_LANDSCAPE.jpg",
      },
      {
        id: "espresso-doppio",
        name: "Espresso Doppio",
        description: "Doble shot de nuestro espresso para el verdadero conocedor",
        price: "4.50",
        image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg",
      },
    ],
    teaItems: [
      {
        id: "english-breakfast",
        name: "Desayuno Inglés",
        description: "Mezcla de té negro clásico, fuerte y con cuerpo",
        price: "5.00",
        image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg",
      }
    ],
    boozyItems: [
      {
        id: "irish-coffee",
        name: "Café Irlandés",
        description: "Café, whiskey Jameson y crema batida",
        price: "12.00",
        image: "/images/IRISH_COFFEE_LANDSCAPE.jpg",
      }
    ]
  },
  cn: {
    espressoItems: [
      {
        id: "espresso",
        name: "浓缩咖啡",
        description: "传统意大利风味，浓郁香醇，带有完美奶泡",
        price: "3.75",
        image: "/images/ESPRESSO_LANDSCAPE.jpg",
      },
      {
        id: "espresso-doppio",
        name: "双倍浓缩",
        description: "我们的双倍特色浓缩，为真正的鉴赏家打造",
        price: "4.50",
        image: "/images/ESPRESSO_DOPPIO_LANDSCAPE.jpg",
      },
    ],
    teaItems: [
      {
        id: "english-breakfast",
        name: "英式早餐茶",
        description: "经典红茶混合，浓烈而充满活力",
        price: "5.00",
        image: "/images/ENGLISH_BREAKFAST_LANDSCAPE.jpg",
      }
    ],
    boozyItems: [
      {
        id: "irish-coffee",
        name: "爱尔兰咖啡",
        description: "咖啡、詹姆森爱尔兰威士忌和鲜奶油",
        price: "12.00",
        image: "/images/IRISH_COFFEE_LANDSCAPE.jpg",
      }
    ]
  }
};

export default coffeeTranslations;
"""

# Salvar o conteúdo em um arquivo .ts
output_path = Path("/mnt/data/coffeeTranslations.ts")
output_path.write_text(coffee_translations_ts.strip(), encoding="utf-8")

output_path.name
