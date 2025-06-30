// components/EggLoader.tsx
import React from "react";

export default function EggLoader() {
  return (
    <div className="flex justify-center items-center min-h-[150px]">
      <div className="w-16 h-16 border-[6px] border-white/50 border-t-blue-900 rounded-full animate-spin shadow-xl"></div>
    </div>
  );
}
