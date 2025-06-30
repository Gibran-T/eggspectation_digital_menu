# 🥚 Eggspectation Digital Menu

Welcome to the **Eggspectation Digital Menu** — a modern, tablet-friendly, fully responsive menu system built for offline use in restaurants. Designed specifically for Android tablets with kiosk capabilities, this menu provides a seamless and immersive experience for customers.

---

## 📦 Project Structure

```
/menu_digital/
├── pages/                # Next.js page routes
│   └── category/         # Menu categories (Mimosas, Brunch, etc.)
├── public/               # Images, icons, flags, QR codes
├── styles/               # Tailwind CSS and custom styles
├── translations/         # Multi-language support (EN, FR, ES, CN)
├── components/           # Reusable UI components
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

---

## 🌐 Features

- 🌍 Multi-language support: English, French, Spanish, Chinese
- 🍽 Fully responsive layout, optimized for 10–11" Android tablets
- 📷 High-quality food imagery for each dish
- 💬 Icons for allergens, spiciness level, and dietary info
- ⚙️ Kiosk-ready: built to be used offline in locked-down tablets

---

## 🚀 How to Run Locally (Development Mode)

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🔧 How to Export for Offline Usage

```bash
npm run build
npm run export
```

The static files will be located in the `/out` folder. You can copy this folder to any Android tablet and run it using a local web server app.

---

## 📲 Recommended Tablet Setup

1. **Transfer** the `/out` folder to your tablet
2. **Install**:
   - [Web Server for Android](https://play.google.com/store/apps/details?id=es.simpleweb.server)
   - [Fully Kiosk Browser](https://www.fully-kiosk.com/)
3. **Run the local server**, then launch the Fully Kiosk Browser in fullscreen mode pointing to `http://localhost:8080/index.html`

---

## 👤 Author & Support

**Thiago Gibran**  
📧 [gibranlog@gmail.com](mailto:gibranlog@gmail.com)  
📞 +1 203 449 9742  
📍 Montreal 

---

## 📝 License

This project is proprietary and created specifically for Eggspectation® restaurant use. All rights reserved.
