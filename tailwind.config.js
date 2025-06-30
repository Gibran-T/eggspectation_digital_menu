module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'spin-slow-reverse': 'spin-reverse 2s linear infinite',
        'draw-oval': 'drawOval 1.5s ease-out forwards',
        'draw-circle': 'drawCircle 1.5s ease-out forwards',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        drawOval: {
          to: { strokeDashoffset: '0' }
        },
        drawCircle: {
          to: { strokeDashoffset: '0' }
        }
      }
    }
  },
  plugins: [],
};
