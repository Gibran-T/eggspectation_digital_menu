import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function MimosasPage() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: "Mimosas",
      back: "Retour",
      details: "Voir les détails"
    },
    en: {
      title: "Mimosas",
      back: "Back",
      details: "View details"
    },
    es: {
      title: "Mimosas",
      back: "Volver",
      details: "Ver detalles"
    },
    cn: {
      title: "香槟鸡尾酒",
      back: "返回",
      details: "查看详情"
    }
  };

  const t = translations[language];

  const mimosas = [
    {
      name: "Mimosa Classic",
      description: "With orange juice or grapefruit juice",
      price: "10.00",
      image: "/images/MIMOSA_CLASSIC.jpg"
    },
    {
      name: "Hermosa",
      description: "Sparkling wine, grapefruit juice and tequila",
      price: "12.00",
      image: "/images/HERMOSA.jpg"
    },
    {
      name: "Lychee Mimosa",
      description: "Lychee juice, sparkling wine with a dab of soho",
      price: "12.50",
      image: "/images/LYCHEE_MIMOSA.jpg"
    },
    {
      name: "Grand Mimosa",
      description: "Our classic mimosa with a dab of Grand Marnier",
      price: "14.00",
      image: "/images/GRAND_MIMOSA.jpg"
    },
    {
      name: "Mimosa Combo",
      description: "A sparkling set of all house favorites",
      price: "80.00",
      image: "/images/MIMOSA_COMBO.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-serif px-6 pt-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <Link href="/main">
          <button className="text-blue-900 text-sm hover:underline">← {t.back}</button>
        </Link>
        <h1 className="text-4xl font-bold text-blue-900 uppercase tracking-wide">{t.title}</h1>
        <div></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mimosas.map((item, index) => (
          <div key={index} className="rounded-2xl border border-gray-200 shadow hover:shadow-lg transition p-4 bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-blue-900">{item.name}</h2>
              <span className="text-blue-800 font-bold">${item.price}</span>
            </div>
            <p className="text-sm text-blue-900/70 mt-2">{item.description}</p>
            <button className="mt-3 text-xs text-blue-700 underline hover:text-blue-900">{t.details}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
