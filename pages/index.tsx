import React, { useState } from "react";
import { useRouter } from "next/router";
import EggLoader from "../components/EggLoader";
import { useLanguage } from "../context/LanguageContext";

export default function Cover() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleMenuClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/menu");
    }, 1500);
  };

  const texts = {
    fr: {
      title: "Eggspectation®",
      location: "Montréal, Canada",
      slogan: "Où les rêves de petit déjeuner deviennent réalité",
      scan: "Scanner pour promotion",
      qrMessage: "Scannez pour voir les promos, réseaux et plus",
      contact: "Contact",
      hours: "Heures",
      summerHours: "HEURES D'ÉTÉ",
      startingDate: "(À partir du 12 juin)",
      tradition: "Une tradition montréalaise, une passion authentique pour la cuisine. Chaque détail est issu du travail, du style et de l'excellence."
    },
    en: {
      title: "Eggspectation®",
      location: "Montreal, Canada",
      slogan: "Where breakfast dreams come true",
      scan: "Scan for promotion",
      qrMessage: "Scan to view promotions, socials, and more",
      contact: "Contact",
      hours: "Hours",
      summerHours: "SUMMER HOURS",
      startingDate: "(Starting June 12th)",
      tradition: "A Montreal tradition, an authentic passion for cooking. Every detail reflects effort, style, and excellence."
    },
    es: {
      title: "Eggspectation®",
      location: "Montreal, Canadá",
      slogan: "Donde los sueños del desayuno se hacen realidad",
      scan: "Escanea para promoción",
      qrMessage: "Escanea para ver promociones, redes y más",
      contact: "Contacto",
      hours: "Horarios",
      summerHours: "HORARIOS DE VERANO",
      startingDate: "(A partir del 12 de junio)",
      tradition: "Una tradición de Montreal, una pasión auténtica por la cocina. Cada detalle refleja esfuerzo, estilo y excelencia."
    },
    cn: {
      title: "Eggspectation®",
      location: "蒙特利尔，加拿大",
      slogan: "早餐梦想成真的地方",
      scan: "扫码查看优惠",
      qrMessage: "扫码查看促销、社交平台等内容",
      contact: "联系方式",
      hours: "营业时间",
      summerHours: "夏季营业时间",
      startingDate: "（6月12日开始）",
      tradition: "源自蒙特利尔的传统，蕴含着对烹饪的热爱。每一个细节都体现了努力、风格与卓越。"
    },
  };

  const current = texts[language];

  return (
    <div className="bg-gradient-to-br from-[#FFD84A] via-[#FFC107] to-[#FFB300] min-h-screen flex flex-col justify-between relative overflow-hidden font-serif">
      
      {/* Efeitos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-white/5"></div>
        <div className="absolute bottom-40 left-16 w-40 h-40 rounded-full bg-white/8"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 rounded-full bg-white/6"></div>
      </div>

      {/* Sidebar lateral melhorada */}
      <div className={`fixed top-0 left-0 h-full w-96 bg-gradient-to-b from-[#FFD84A] to-[#FFC107] text-blue-900 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 shadow-2xl`}>
        
        {/* Header da Sidebar */}
        <div className="relative bg-blue-900 text-white p-6 shadow-lg">
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="absolute top-4 right-4 text-3xl font-bold hover:text-yellow-300 transition-colors duration-200"
          >
            ×
          </button>
          <h2 className="text-3xl font-bold mb-2">
            Eggspectation<sup className="text-lg align-super">®</sup>
          </h2>
          <p className="text-yellow-200 text-lg font-medium">{current.location}</p>
        </div>

        {/* Conteúdo da Sidebar */}
        <div className="p-6 h-full overflow-y-auto pb-20">
          
          {/* Seção de Contato */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4 border-b-2 border-blue-900/20 pb-2">
              {current.contact}
            </h3>
            <div className="space-y-2">
              <p className="text-base font-medium text-blue-800 leading-relaxed">
                1313 De Maisonneuve West<br />
                Montreal, Quebec H3G 2R9
              </p>
              <p className="text-lg font-semibold text-blue-900 mt-3">
                📞 (514) 842-3447
              </p>
            </div>
          </div>

          {/* Seção de Horários */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4 border-b-2 border-blue-900/20 pb-2">
              {current.hours}
            </h3>
            
            <div className="bg-blue-900/10 rounded-lg p-4 mb-4">
              <p className="text-sm font-bold text-blue-900 mb-1">{current.summerHours}</p>
              <p className="text-sm text-blue-800">{current.startingDate}</p>
            </div>

            <div className="space-y-2">
              {[
                { day: "Mon", hours: "7am - 3:30pm" },
                { day: "Tues", hours: "7am - 3:30pm" },
                { day: "Wed", hours: "7am - 9:00pm" },
                { day: "Thur", hours: "7am - 9:00pm" },
                { day: "Fri", hours: "7am - 10:00pm" },
                { day: "Sat", hours: "7am - 10:00pm" },
                { day: "Sun", hours: "7am - 4:00pm" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="font-semibold text-blue-900 text-base">{item.day}</span>
                  <span className="text-blue-800 text-base">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Tradição */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-900/10 to-blue-800/10 rounded-xl p-5 border-l-4 border-blue-900">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🏛️</span>
                <h4 className="text-lg font-bold text-blue-900">Heritage Montreal</h4>
              </div>
              <p className="text-base leading-relaxed text-blue-800 font-medium">
                {current.tradition}
              </p>
            </div>
          </div>

          {/* Decoração inferior */}
          <div className="text-center mt-8">
            <div className="flex justify-center space-x-3 text-2xl mb-4">
              <span>🍳</span>
              <span>🥓</span>
              <span>🥚</span>
              <span>🧇</span>
            </div>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Header com botão menu e idiomas */}
      <header className="relative z-10 w-full flex justify-between items-center px-6 pt-8 pb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          aria-label="Menu"
        >
          <div className="w-7 h-5 flex flex-col justify-center space-y-1.5">
            <div className="w-full h-0.5 bg-blue-900 rounded-full group-hover:w-5 transition-all duration-300"></div>
            <div className="w-full h-0.5 bg-blue-900 rounded-full"></div>
            <div className="w-full h-0.5 bg-blue-900 rounded-full group-hover:w-5 transition-all duration-300"></div>
          </div>
        </button>

        {/* Seletor de idioma com bandeiras */}
        <div className="flex items-center gap-3">
          {[
            { src: "/flags/france_sphere_transparent.png", alt: "Français", label: "fr" },
            { src: "/flags/uk_sphere_transparent.png", alt: "English", label: "en" },
            { src: "/flags/spain_sphere_transparent.png", alt: "Español", label: "es" },
            { src: "/flags/china_sphere_transparent.png", alt: "中文", label: "cn" }
          ].map((flag, index) => (
            <button
              key={index}
              onClick={() => setLanguage(flag.label)}
              className="relative group hover:scale-110 transition duration-300"
              aria-label={flag.alt}
            >
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                <img
                  src={flag.src}
                  alt={flag.alt}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {flag.alt}
              </div>
            </button>
          ))}
        </div>
      </header>

      {/* Conteúdo central */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-3">
            Eggspectation<sup className="text-3xl align-super ml-1">®</sup>
          </h1>
          <p className="text-blue-900/70 text-lg md:text-xl max-w-md mx-auto">{current.slogan}</p>
        </div>

        <div className="mb-16">
          {!loading ? (
            <button
              onClick={handleMenuClick}
              className="group relative bg-blue-900 hover:bg-blue-800 text-white text-xl md:text-2xl font-semibold px-16 md:px-20 py-4 rounded-2xl shadow-xl transition-all hover:scale-105"
            >
              MENU
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
            </button>
          ) : (
            <EggLoader />
          )}
        </div>
      </main>

      {/* Rodapé com QR Code */}
      <footer className="relative z-10 flex flex-col items-center gap-4 px-6 pb-8">
        {/* QR Code Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-9 rounded-3xl shadow-2xl border border-white/30 group-hover:scale-105 transition-all duration-300">
            <img
              src="/qrcodes/eggspectation_qr_artistic.jpg"
              alt="Scan for promotion"
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl"
            />
          </div>
        </div>

        {/* QR Code Message - Always Visible */}
        <div className="text-center mb-4">
          <div className="bg-blue-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl shadow-lg border border-blue-800/30">
            <p className="text-sm md:text-base font-medium tracking-wide">
              {current.qrMessage}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-blue-900/60 text-sm md:text-base font-medium">
            © 2025 Eggspectation<sup className="text-base align-super">®</sup>
          </p>
          <p className="text-blue-900/40 text-xs mt-1">Crafted with ❤️ in Montreal</p>
        </div>
      </footer>
    </div>
  );
}

