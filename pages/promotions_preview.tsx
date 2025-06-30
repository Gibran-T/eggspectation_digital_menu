// pages/promotions_preview.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Promotion {
  name: string;
  description: string;
  type: string;
  validity: string;
  badge: string;
}

export default function PromotionsPreview() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const sheetID = "1mtATVfycYnIahALH0R_HdsoG5VcA55wFg0wBAD1t93Y";
        const sheetName = "Promoções";
        const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

        const res = await axios.get(url);
        const rawData = JSON.parse(res.data.substring(47).slice(0, -2));
        const rows = rawData.table.rows;

        const parsed: Promotion[] = rows.map((row: any) => ({
          name: row.c[1]?.v || "",
          description: row.c[2]?.v || "",
          type: row.c[3]?.v || "",
          validity: row.c[4]?.v || "",
          badge: row.c[5]?.v || "",
        }));

        setPromotions(parsed);
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
      }
    };

    fetchPromotions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6 text-center">
      <h1 className="text-3xl font-bold mb-2 text-yellow-800">⭐ Current Promotions</h1>
      <p className="text-gray-600 mb-6">Check out our special offers for this week</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {promotions.map((promo, idx) => (
          <div key={idx} className="rounded-2xl shadow-lg p-4 border border-yellow-200 bg-white">
            <h2 className="text-xl font-semibold text-yellow-700">{promo.name}</h2>
            <p className="text-gray-700 my-2">{promo.description}</p>
            <p className="text-sm text-gray-500 italic">{promo.type}</p>
            <p className="text-sm text-yellow-600 font-medium">{promo.validity}</p>
            {promo.badge && (
              <span className="inline-block mt-2 px-3 py-1 text-xs font-bold text-white bg-red-400 rounded-full">
                {promo.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
