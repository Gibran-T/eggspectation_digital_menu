import React from "react";
import Link from "next/link";

const promotions = [
  {
    id: 1,
    name: "Montreal Brunch Combo",
    description: "Any dish from Brunch + juice for $21.90",
    category: "Brunch",
    tag: "Featured",
    highlight: "⭐ Family Combo",
    image: "/images/brunch_combo.jpg",
    link: "https://eggspectation-digital-menu.vercel.app"
  },
  {
    id: 2,
    name: "Cocktail Happy Hour",
    description: "Cocktails $9 from 5–7PM. Sangrias 10% off",
    category: "Drinks & Sangrias",
    tag: "Bestseller",
    highlight: "🍹 Limited Offer",
    image: "/images/cocktail_happy_hour.jpg",
    link: "https://eggspectation-digital-menu.vercel.app"
  },
  {
    id: 3,
    name: "Sunday Family Deal",
    description: "1 kid eats free with adult brunch",
    category: "Kids & Brunch",
    tag: "Limited Time",
    highlight: "👨‍👩‍👧‍👦 Sunday Deal",
    image: "/images/sunday_family.jpg",
    link: "https://eggspectation-digital-menu.vercel.app"
  }
];

export default function PromotionsPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 py-12 px-6 font-serif">
      <h1 className="text-4xl text-center font-bold text-blue-900 mb-10">Current Promotions</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {promotions.map((promo) => (
          <div key={promo.id} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition transform duration-300">
            <img
              src={promo.image}
              alt={promo.name}
              className="w-full h-52 object-cover"
              onError={(e) => (e.currentTarget.src = "/images/fallback.jpg")}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-2">{promo.name}</h2>
              <p className="text-gray-700 mb-3">{promo.description}</p>
              <p className="text-sm text-blue-800 font-semibold mb-1">📂 {promo.category}</p>
              <p className="text-sm text-yellow-700 mb-1">🎁 {promo.tag}</p>
              <p className="text-sm text-pink-700">{promo.highlight}</p>
              <Link href={promo.link} target="_blank">
                <p className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-800">
                  View Promotion
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
