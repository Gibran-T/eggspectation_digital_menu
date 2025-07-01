import React, { useEffect, useState } from "react";
import axios from "axios";

interface Promotion {
  name: string;
  description: string;
  type: string;
  validity: string;
  badge: string;
  image: string;
  active: string;
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
          image: row.c[6]?.v || "", // Nome do arquivo local
          active: row.c[7]?.v?.toLowerCase() || "não",
        }));

        // Filtra apenas os ativos
        const filtered = parsed.filter((promo) => promo.active === "sim");
        setPromotions(filtered);
      } catch (error) {
        console.error("Erro ao carregar promoções:", error);
      }
    };

    fetchPromotions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6 text-center font-serif">
      <h1 className="text-3xl font-bold mb-2 text-yellow-800">⭐ Promoções Ativas</h1>
      <p className="text-gray-600 mb-6">Ofertas especiais atualizadas em tempo real</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {promotions.map((promo, idx) => (
          <div key={idx} className="rounded-2xl shadow-lg border border-yellow-200 bg-white overflow-hidden hover:shadow-xl transition duration-300">
            <div className="relative h-48">
              <img
                src={promo.image ? `/images/${promo.image}` : "/images/placeholder.jpg"}
                alt={promo.name}
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
              />
            </div>
            <div className="p-4">
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
          </div>
        ))}
      </div>
    </div>
  );
}
