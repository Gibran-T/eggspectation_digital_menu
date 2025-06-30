import React from "react";
import { useRouter } from "next/router";

interface Item {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

interface Props {
  title: string;
  subtitle: string;
  items: Item[];
  image: string;
}

export default function CategoryLayout({ title, subtitle, items, image }: Props) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/main");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50 text-blue-900">
      <div className="relative h-64 w-full">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition text-sm"
        >
          ⬅ Back
        </button>
        <div className="absolute bottom-4 left-6 md:left-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl font-serif">{title}</h1>
          <p className="text-white mt-2 drop-shadow font-sans text-sm md:text-base max-w-xl">{subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition border border-gray-100"
            >
              <h2 className="text-xl font-semibold mb-1 font-serif">{item.name}</h2>
              <p className="text-gray-700 text-sm mb-2 font-sans">{item.description}</p>
              <p className="text-blue-900 font-bold font-sans">{item.price}</p>
              {item.tags && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
