// components/ThemeToggle.tsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const el = document.documentElement.classList;
    const now = el.toggle("dark");
    setDark(now);
    try { localStorage.setItem("theme", now ? "dark" : "light"); } catch {}
  }

  return (
    <button
      onClick={toggle}
      className="rounded-full border px-3 py-1 text-sm transition
                 hover:bg-gray-100 dark:hover:bg-white/10
                 border-gray-300 dark:border-white/20
                 text-gray-800 dark:text-white"
      aria-label="Toggle theme"
      title={dark ? "Switch to light" : "Switch to dark"}
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
