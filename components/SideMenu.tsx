// components/SideMenu.tsx
import React from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <>
      {/* Fundo escurecido */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      ></div>

      {/* Menu lateral */}
      <aside
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4 overflow-y-auto h-full">
          <h2 className="text-xl font-bold text-blue-900 tracking-wide">
            Eggspectation<sup>®</sup>
          </h2>
          <p className="text-blue-800 font-semibold">MONTREAL, CA</p>

          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold text-blue-700">Contact</h3>
            <p className="text-sm text-blue-900 leading-relaxed">
              1313 De Maisonneuve West<br />
              Montreal, Quebec H3G 2R9<br />
              (514) 842-3447
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold text-blue-700">Hours</h3>
            <p className="text-sm font-medium text-blue-900 mb-1">
              SUMMER HOURS <br />
              (Starting June 12th)
            </p>
            <ul className="text-sm text-blue-900 space-y-0.5">
              <li>Mon – 7am – 3:30pm</li>
              <li>Tues – 7am – 3:30pm</li>
              <li>Wed – 7am – 9:00pm</li>
              <li>Thur – 7am – 9:00pm</li>
              <li>Fri – 7am – 10:00pm</li>
              <li>Sat – 7am – 10:00pm</li>
              <li>Sun – 7am – 4:00pm</li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
