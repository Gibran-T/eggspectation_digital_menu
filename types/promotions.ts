export default function handler(_req, res) {
  const data = [
    {
      id: "p4",
      name: "Lobster Benedict",
      description:
        "Buttery lobster on toasted English muffin with soft-poached eggs and hollandaise; served with Lyonnaise-style potatoes.",
      price: 26,
      image: "/images/LOBSTER_BENEDICT.jpg",
      tags: ["Brunch", "Benedict", "Seafood"],
      featured: true,
      translations: {
        en: {
          name: "Lobster Benedict",
          description:
            "Buttery lobster on toasted English muffin with soft-poached eggs and hollandaise; served with Lyonnaise-style potatoes.",
        },
        fr: {
          name: "Benedict au Homard",
          description:
            "Homard au beurre sur muffin anglais grillé, œufs pochés et sauce hollandaise; servi avec pommes de terre lyonnaises.",
        },
      },
      valid_from: "2025-09-08",
      valid_until: "2025-10-08",
      visible: true,
      priority: 100,
    },
    {
      id: "p5",
      name: "Chicken ’n Waffles",
      description:
        "Crispy fried chicken over a Belgian waffle with butter and warm syrup.",
      price: 21,
      image: "/images/CHICKEN_N_WAFFLES.jpg",
      tags: ["Brunch", "Chicken", "Waffle"],
      featured: true,
      translations: {
        en: {
          name: "Chicken ’n Waffles",
          description:
            "Crispy fried chicken over a Belgian waffle with butter and warm syrup.",
        },
        fr: {
          name: "Poulet et Gaufres",
          description:
            "Poulet frit croustillant sur gaufre belge, avec beurre et sirop chaud.",
        },
      },
      valid_from: "2025-09-08",
      valid_until: "2025-10-08",
      visible: true,
      priority: 90,
    },
    {
      id: "p6",
      name: "Grand Mimosa",
      description: "Bubbly double-pour mimosa with fresh orange juice.",
      price: 14,
      image: "/images/GRAND_MIMOSA.jpg",
      tags: ["Cocktail", "Mimosa"],
      featured: true,
      translations: {
        en: {
          name: "Grand Mimosa",
          description:
            "Bubbly double-pour mimosa with fresh orange juice.",
        },
        fr: {
          name: "Grand Mimosa",
          description:
            "Mimosa pétillant double dose au jus d’orange frais.",
        },
      },
      valid_from: "2025-09-08",
      valid_until: "2025-10-08",
      visible: true,
      priority: 80,
    },
    {
      id: "p7",
      name: "Steak Frites",
      description:
        "Grilled steak with house herb butter, crisp fries and mixed greens.",
      price: 28,
      image: "/images/STEAK_FRITES.jpg",
      tags: ["Mains", "Steak"],
      featured: false,
      translations: {
        en: {
          name: "Steak Frites",
          description:
            "Grilled steak with house herb butter, crisp fries and mixed greens.",
        },
        fr: {
          name: "Steak Frites",
          description:
            "Steak grillé avec beurre aux herbes maison, frites croustillantes et salade verte.",
        },
      },
      valid_from: "2025-09-08",
      valid_until: "2025-10-08",
      visible: true,
      priority: 70,
    },
    {
      id: "p8",
      name: "Yolk Around the Clock",
      description:
        "Signature breakfast stack with egg, bacon and cheddar on brioche; served with Lyonnaise-style potatoes.",
      price: 18.5,
      image: "/images/YOLK_AROUND_THE_CLOCK.jpg",
      tags: ["Brunch", "Signature"],
      featured: false,
      translations: {
        en: {
          name: "Yolk Around the Clock",
          description:
            "Signature breakfast stack with egg, bacon and cheddar on brioche; served with Lyonnaise-style potatoes.",
        },
        fr: {
          name: "Yolk Around the Clock",
          description:
            "Assiette signature avec œuf, bacon et cheddar sur brioche; servie avec pommes de terre lyonnaises.",
        },
      },
      valid_from: "2025-09-08",
      valid_until: "2025-10-08",
      visible: true,
      priority: 60,
    },
  ];

  res.status(200).json({ ok: true, count: data.length, data });
}
