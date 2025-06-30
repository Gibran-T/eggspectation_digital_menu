// components/EggspressSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const eggspressItems = [
  {
    name: "Eggspectation Breakfast",
    image: "/images/EGGSPECTATION_BREAKFAST.jpg",
    price: "$18.50"
  },
  {
    name: "Yolk Around The Clock",
    image: "/images/YORK_AROUND_THE_CLOCK.jpg",
    price: "$20.90"
  },
  {
    name: "Breakfast Poutine",
    image: "/images/BREAKFAST_POUTINE.jpg",
    price: "$17.25"
  },
  {
    name: "Avocado Toast",
    image: "/images/AVOCADO_TOAST.jpg",
    price: "$16.75"
  },
  {
    name: "Eggsuberant",
    image: "/images/EGGSUBERANT.jpg",
    price: "$22.00"
  },
  {
    name: "High Rise Pancakes",
    image: "/images/HIGH_RISE_PANCAKES.jpg",
    price: "$19.80"
  }
];

export default function EggspressSection() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Eggspress</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {eggspressItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="border rounded-2xl shadow p-4 text-center bg-white"
          >
            <div className="aspect-w-4 aspect-h-3 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
            <p className="text-gray-700 font-medium">{item.price}</p>
            <button
              onClick={() => setSelectedItem(item)}
              className="mt-3 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{selectedItem.name}</h2>
            <p className="text-gray-700 mt-2">{selectedItem.price}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
