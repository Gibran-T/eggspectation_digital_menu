📄 README_OFFLINE.txt
EGGSPECTATION DIGITAL MENU — OFFLINE + KIOSK MODE
Version: Local Deployment for Android Tablet
Author: Thiago Gibran

✅ Purpose:
Run the digital interactive menu offline, directly on an Android tablet, in kiosk mode, with no need for internet or external servers.

🧩 Requirements:
1. Android tablet (recommended: Weelikeit Android 14, 10.95”, 1200x1920 FHD)
2. `menu_digital/` folder containing the static site build (included in this `.zip`)
3. Apps to install on the tablet:
   - Web Server for Android – local web server
   - Fully Kiosk Browser – browser with kiosk mode

📦 Included in the `.zip`:
menu_digital/
├── index.html
├── _next/
├── styles/
├── images/
└── ...
README_OFFLINE.txt

⚙️ Setup Instructions (Offline):

1. Transfer the project to the tablet:
   - Unzip the project on your computer.
   - Copy the `menu_digital/` folder to the tablet’s internal storage:
     /storage/emulated/0/menu_digital/

2. Install the local web server:
   - On the tablet, go to the Play Store.
   - Install the app: Web Server for Android
     Link: https://play.google.com/store/apps/details?id=es.simpleweb.server
   - Open the app and configure:
     - Root Directory: /storage/emulated/0/menu_digital/
     - Port: 8080 (default)
   - Tap Start Server

   Access via browser:
   http://localhost:8080/index.html

3. Install and configure Fully Kiosk Browser:
   - Official site: https://www.fully-kiosk.com/
   - Or install via Play Store: “Fully Kiosk Browser”
   - After installing, configure the following:
     - Start URL: http://localhost:8080/index.html
     - Kiosk Mode: enabled
     - Fullscreen Mode: enabled
     - Disable Home Button & Status Bar: enabled
     - Prevent Sleep: enabled
     - Set as Launcher: enabled (optional – boots directly into the menu)

   Tip: Set up an admin PIN to exit kiosk mode if needed.

4. Final Test:
   1. Restart the tablet
   2. Wait for Fully Kiosk to auto-launch
   3. The digital menu should appear in fullscreen, without navigation bars
   4. Browse the menu normally

🛠 Maintenance:
- To update the menu, just replace the `menu_digital/` folder with the new version
- No internet connection or system updates required
- The system can operate indefinitely as long as the tablet is powered

📞 Technical Support:
For updates or assistance, contact:
Thiago Gibran
📧 gibranlog@gmail.com
📞 +1 203 449 9742
📍 Montreal 
