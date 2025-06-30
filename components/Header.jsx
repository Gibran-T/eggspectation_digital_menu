// components/Header.jsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm relative z-10">
      {/* Ícone menu hamburguer */}
      <div className="text-3xl font-bold text-gray-800 cursor-pointer">
        &#9776;
      </div>

      {/* LOGO centralizada */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-2">
        <Image
          src="/images/combined_logo.jpg"
          alt="Eggspectation"
          width={260}
          height={90}
          className="object-contain rounded-md"
          priority
        />
      </div>

      {/* Bandeiras de idioma */}
      <div className="flex space-x-3">
        <Link href="/en">
          <Image src="/images/flag_england_sphere_3d.jpg" width={42} height={42} alt="English" />
        </Link>
        <Link href="/fr">
          <Image src="/images/flag_france_sphere_3d.jpg" width={42} height={42} alt="Français" />
        </Link>
        <Link href="/es">
          <Image src="/images/flag_spain_sphere_3d.jpg" width={42} height={42} alt="Español" />
        </Link>
      </div>
    </header>
  );
}
