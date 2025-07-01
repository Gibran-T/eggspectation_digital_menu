import React, { useState } from "react";
import { useRouter } from "next/router";
import EggLoader from "../components/EggLoader";
import { useLanguage } from "../context/LanguageContext";

export default function Cover() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [backgroundTheme, setBackgroundTheme] = useState('golden');
  const { language, setLanguage } = useLanguage();

  const handleMenuClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/menu");
    }, 1500);
  };

  const toggleBackground = () => {
    setBackgroundTheme(prev => prev === 'golden' ? 'navy' : 'golden');
  };

  const texts = {
    fr: {
      title: "Eggspectation®",
      location: "Montréal, Canada",
      slogan: "Où les rêves de petit déjeuner deviennent réalité",
      sloganNavy: "Nos Ingrédients Purement Canadiens",
      scan: "Scanner pour promotion",
      qrMessage: "Scannez pour voir les promos, réseaux et plus",
      contact: "Contact",
      hours: "Heures",
      summerHours: "HEURES D'ÉTÉ",
      startingDate: "(À partir du 12 juin)",
      tradition: "Une tradition montréalaise, une passion authentique pour la cuisine. Chaque détail est issu du travail, du style et de l'excellence.",
      switchBg: "Thème"
    },
    en: {
      title: "Eggspectation®",
      location: "Montreal, Canada",
      slogan: "Where breakfast dreams come true",
      sloganNavy: "Our Purely Canadian Ingredients",
      scan: "Scan for promotion",
      qrMessage: "Scan to view promotions, socials, and more",
      contact: "Contact",
      hours: "Hours",
      summerHours: "SUMMER HOURS",
      startingDate: "(Starting June 12th)",
      tradition: "A Montreal tradition, an authentic passion for cooking. Every detail reflects effort, style, and excellence.",
      switchBg: "Theme"
    },
    es: {
      title: "Eggspectation®",
      location: "Montreal, Canadá",
      slogan: "Donde los sueños del desayuno se hacen realidad",
      sloganNavy: "Nuestros Ingredientes Puramente Canadienses",
      scan: "Escanea para promoción",
      qrMessage: "Escanea para ver promociones, redes y más",
      contact: "Contacto",
      hours: "Horarios",
      summerHours: "HORARIOS DE VERANO",
      startingDate: "(A partir del 12 de junio)",
      tradition: "Una tradición de Montreal, una pasión auténtica por la cocina. Cada detalle refleja esfuerzo, estilo y excelencia.",
      switchBg: "Tema"
    },
    cn: {
      title: "Eggspectation®",
      location: "蒙特利尔，加拿大",
      slogan: "早餐梦想成真的地方",
      sloganNavy: "我们的纯正加拿大食材",
      scan: "扫码查看优惠",
      qrMessage: "扫码查看促销、社交平台等内容",
      contact: "联系方式",
      hours: "营业时间",
      summerHours: "夏季营业时间",
      startingDate: "（6月12日开始）",
      tradition: "源自蒙特利尔的传统，蕴含着对烹饪的热爱。每一个细节都体现了努力、风格与卓越。",
      switchBg: "主题"
    }
  };

  const current = texts[language];

  const backgroundClass = backgroundTheme === 'golden' 
    ? 'bg-gradient-to-br from-[#FFD84A] via-[#FFC107] to-[#FFB300]' 
    : 'bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3]';

  return (
    <div className={`${backgroundClass} min-h-screen flex flex-col justify-between relative overflow-hidden font-serif transition-all duration-1000`}>
      
      {/* Efeitos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-10 left-10 w-32 h-32 rounded-full ${
          backgroundTheme === 'golden' ? 'bg-white/10' : 'bg-white/15'
        }`}></div>
        <div className={`absolute top-32 right-20 w-24 h-24 rounded-full ${
          backgroundTheme === 'golden' ? 'bg-white/5' : 'bg-white/10'
        }`}></div>
        <div className={`absolute bottom-40 left-16 w-40 h-40 rounded-full ${
          backgroundTheme === 'golden' ? 'bg-white/8' : 'bg-white/12'
        }`}></div>
        <div className={`absolute bottom-20 right-32 w-28 h-28 rounded-full ${
          backgroundTheme === 'golden' ? 'bg-white/6' : 'bg-white/8'
        }`}></div>
      </div>

      {/* Sidebar lateral melhorada */}
      <div className={`fixed top-0 left-0 h-full w-96 ${
        backgroundTheme === 'golden' 
          ? 'bg-gradient-to-b from-[#FFD84A] to-[#FFC107] text-blue-900' 
          : 'bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] text-gray-50'
      } transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 shadow-2xl`}>
        
        {/* Header da Sidebar */}
        <div className={`relative ${
          backgroundTheme === 'golden' 
            ? 'bg-blue-900 text-white' 
            : 'bg-gray-50 text-blue-900'
        } p-6 shadow-lg`}>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className={`absolute top-4 right-4 text-3xl font-bold transition-colors duration-200 ${
              backgroundTheme === 'golden' 
                ? 'hover:text-yellow-300' 
                : 'hover:text-blue-700'
            }`}
          >
            ×
          </button>
          <h2 className="text-3xl font-bold mb-2">
            Eggspectation<sup className="text-lg align-super">®</sup>
          </h2>
          <p className={`text-lg font-medium ${
            backgroundTheme === 'golden' ? 'text-yellow-200' : 'text-blue-700'
          }`}>{current.location}</p>
        </div>

        {/* ESTRUTURA CORRETA DA SIDEBAR */}
        <div className="flex flex-col h-full">
          
          {/* HEADER FIXO - SEMPRE VISÍVEL */}
          <div className="p-6 pb-0">
            {/* Seção de Contato - FIXA */}
            <div className="mb-6">
              <h3 className={`text-xl font-bold mb-4 border-b-2 pb-2 ${
                backgroundTheme === 'golden' 
                  ? 'text-blue-900 border-blue-900/20' 
                  : 'text-gray-50 border-gray-50/20'
              }`}>
                {current.contact}
              </h3>
              <div className="space-y-2">
                <p className={`text-base font-medium leading-relaxed ${
                  backgroundTheme === 'golden' ? 'text-blue-800' : 'text-gray-100'
                }`}>
                  1313 De Maisonneuve West<br />
                  Montreal, Quebec H3G 2R9
                </p>
                <p className={`text-lg font-semibold mt-3 ${
                  backgroundTheme === 'golden' ? 'text-blue-900' : 'text-gray-50'
                }`}>
                  📞 (514) 842-3447
                </p>
              </div>
            </div>
          </div>

          {/* CONTEÚDO ROLÁVEL - ESCONDE O FOOTER */}
          <div className="flex-1 overflow-y-auto px-6" style={{ 
            scrollbarWidth: 'thin', 
            scrollbarColor: backgroundTheme === 'golden' ? '#1e3a8a rgba(255,255,255,0.1)' : '#f9fafb rgba(255,255,255,0.1)'
          }}>
            
            {/* Seção de Horários */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-4 border-b-2 pb-2 ${
                backgroundTheme === 'golden' 
                  ? 'text-blue-900 border-blue-900/20' 
                  : 'text-gray-50 border-gray-50/20'
              }`}>
                {current.hours}
              </h3>
              
              <div className={`rounded-lg p-4 mb-4 ${
                backgroundTheme === 'golden' ? 'bg-blue-900/10' : 'bg-gray-50/10'
              }`}>
                <p className={`text-sm font-bold mb-1 ${
                  backgroundTheme === 'golden' ? 'text-blue-900' : 'text-gray-50'
                }`}>{current.summerHours}</p>
                <p className={`text-sm ${
                  backgroundTheme === 'golden' ? 'text-blue-800' : 'text-gray-100'
                }`}>{current.startingDate}</p>
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
                    <span className={`font-semibold text-base ${
                      backgroundTheme === 'golden' ? 'text-blue-900' : 'text-gray-50'
                    }`}>{item.day}</span>
                    <span className={`text-base ${
                      backgroundTheme === 'golden' ? 'text-blue-800' : 'text-gray-100'
                    }`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seção de Tradição */}
            <div className="mb-8">
              <div className={`rounded-xl p-5 border-l-4 ${
                backgroundTheme === 'golden' 
                  ? 'bg-gradient-to-r from-blue-900/10 to-blue-800/10 border-blue-900' 
                  : 'bg-gradient-to-r from-gray-50/10 to-gray-50/5 border-gray-50'
              }`}>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🏛️</span>
                  <h4 className={`text-lg font-bold ${
                    backgroundTheme === 'golden' ? 'text-blue-900' : 'text-gray-50'
                  }`}>Heritage Montreal</h4>
                </div>
                <p className={`text-base leading-relaxed font-medium ${
                  backgroundTheme === 'golden' ? 'text-blue-800' : 'text-gray-100'
                }`}>
                  {current.tradition}
                </p>
              </div>
            </div>

            {/* BOTÃO DE SWITCH - ESCONDIDO NO FOOTER */}
            <div className="mt-12 mb-8">
              <button
                onClick={toggleBackground}
                className={`group relative overflow-hidden w-full py-3 px-4 rounded-xl transition-all duration-500 font-serif text-sm font-medium ${
                  backgroundTheme === 'golden' 
                    ? 'bg-blue-900/20 hover:bg-blue-900/30 text-blue-900 border border-blue-900/30' 
                    : 'bg-gray-50/20 hover:bg-gray-50/30 text-gray-50 border border-gray-50/30'
                }`}
                aria-label="Switch Background Theme"
              >
                {/* SHINE EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                
                {/* BUTTON CONTENT */}
                <div className="relative flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>{current.switchBg}</span>
                </div>
              </button>
              
              <div className={`h-1 rounded-full mt-4 ${
                backgroundTheme === 'golden' 
                  ? 'bg-gradient-to-r from-transparent via-blue-900/30 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-gray-50/30 to-transparent'
              }`}></div>
            </div>
            
            {/* Espaçamento para garantir rolagem */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>

      {/* Header com botão menu e idiomas */}
      <header className="relative z-10 w-full flex justify-between items-center px-6 pt-8 pb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`px-4 py-2.5 rounded-xl backdrop-blur-sm border transition-all duration-300 group ${
            backgroundTheme === 'golden' 
              ? 'bg-white/10 border-white/20 hover:bg-white/20' 
              : 'bg-blue-400/80 border-blue-300/50 hover:bg-blue-400/90'
          }`}
          aria-label="Menu"
        >
          <div className="w-7 h-5 flex flex-col justify-center space-y-1.5">
            <div className={`w-full h-0.5 rounded-full group-hover:w-5 transition-all duration-300 ${
              backgroundTheme === 'golden' ? 'bg-blue-900' : 'bg-white'
            }`} style={backgroundTheme === 'navy' ? { filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))' } : {}}></div>
            <div className={`w-full h-0.5 rounded-full ${
              backgroundTheme === 'golden' ? 'bg-blue-900' : 'bg-white'
            }`} style={backgroundTheme === 'navy' ? { filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))' } : {}}></div>
            <div className={`w-full h-0.5 rounded-full group-hover:w-5 transition-all duration-300 ${
              backgroundTheme === 'golden' ? 'bg-blue-900' : 'bg-white'
            }`} style={backgroundTheme === 'navy' ? { filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))' } : {}}></div>
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
              onClick={() => setLanguage(flag.label as 'en' | 'fr' | 'es' | 'cn')}
              className="relative group hover:scale-110 transition duration-300"
              aria-label={flag.alt}
            >
              <div className={`w-14 h-14 rounded-full backdrop-blur-sm border flex items-center justify-center shadow-lg ${
                backgroundTheme === 'golden' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-gray-50/90 border-gray-200'
              }`}>
                <img
                  src={flag.src}
                  alt={flag.alt}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                />
              </div>
              <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                backgroundTheme === 'golden' 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-50 text-blue-900'
              }`}>
                {flag.alt}
              </div>
            </button>
          ))}
        </div>
      </header>

      {/* Conteúdo central */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6">
        <div className="mb-12">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-3 ${
            backgroundTheme === 'golden' ? 'text-blue-900' : 'text-gray-50'
          }`}>
            Eggspectation<sup className="text-3xl align-super ml-1">®</sup>
          </h1>
          <p className={`text-lg md:text-xl max-w-md mx-auto ${
            backgroundTheme === 'golden' ? 'text-blue-900/70' : 'text-gray-100'
          }`}>
            {backgroundTheme === 'golden' ? current.slogan : current.sloganNavy}
          </p>
        </div>

        <div className="mb-16">
          {!loading ? (
            <button
              onClick={handleMenuClick}
              className={`group relative font-semibold px-16 md:px-20 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 text-xl md:text-2xl ${
                backgroundTheme === 'golden' 
                  ? 'bg-blue-900 hover:bg-blue-800 text-white' 
                  : 'bg-gray-50 hover:bg-white text-blue-900 border border-gray-200'
              }`}
              style={{
                boxShadow: backgroundTheme === 'navy' 
                  ? '0 0 40px rgba(249, 250, 251, 0.6), 0 0 80px rgba(249, 250, 251, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)' 
                  : undefined
              }}
            >
              {/* LIGHTHOUSE GLOW EFFECT FOR NAVY THEME */}
              {backgroundTheme === 'navy' && (
                <>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-gray-100/20 blur-sm animate-pulse"></div>
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-white/10 to-gray-100/10 blur-md animate-pulse delay-300"></div>
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-white/5 to-gray-100/5 blur-lg animate-pulse delay-700"></div>
                </>
              )}
              
              MENU
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
            </button>
          ) : (
            <EggLoader />
          )}
        </div>
      </main>

      {/* Rodapé com QR Code - ATUALIZADO */}
      <footer className="relative z-10 flex flex-col items-center gap-4 px-6 pb-8">
        {/* QR Code Container - RESPONSIVO E ELEGANTE */}
        <div className="relative group">
          {/* Efeito de brilho de fundo */}
          <div className={`absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 ${
            backgroundTheme === 'golden' ? 'bg-white/20' : 'bg-white/30'
          }`}></div>
          
          {/* Container principal do QR */}
          <div className={`relative backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-2xl border group-hover:scale-105 transition-all duration-300 ${
            backgroundTheme === 'golden' 
              ? 'bg-white/90 border-white/30' 
              : 'bg-gray-50/95 border-gray-200/50'
          }`}>
            {/* QR Code Image - RESPONSIVO */}
            <img
              src="/qrcodes/qr_blue_inspired_functional.jpg"
              alt={current.scan}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-lg"
              style={{
                filter: backgroundTheme === 'navy' 
                  ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' 
                  : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))'
              }}
            />
            
            {/* Indicador de scan - OPCIONAL */}
            <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse ${
              backgroundTheme === 'golden' ? 'bg-blue-900' : 'bg-blue-600'
            }`}>
              <div className="absolute inset-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* QR Code Message - ADAPTADO PARA AMBOS OS TEMAS */}
        <div className="text-center mb-4">
          {backgroundTheme === 'golden' ? (
            <div className="bg-blue-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl shadow-lg border border-blue-800/30">
              <p className="text-sm md:text-base font-medium tracking-wide">
                {current.qrMessage}
              </p>
            </div>
          ) : (
            <p className="text-sm md:text-base font-medium tracking-wide text-gray-100 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/10">
              {current.qrMessage}
            </p>
          )}
        </div>

        {/* Copyright - MANTIDO ORIGINAL */}
        <div className="text-center">
          <p className={`text-sm md:text-base font-medium ${
            backgroundTheme === 'golden' ? 'text-blue-900/60' : 'text-gray-300'
          }`}>
            © 2025 Eggspectation<sup className="text-base align-super">®</sup>
          </p>
          <p className={`text-xs mt-1 ${
            backgroundTheme === 'golden' ? 'text-blue-900/40' : 'text-gray-400'
          }`}>Crafted with ❤️ in Montreal</p>
        </div>
      </footer>
    </div>
  );
}

