# 🔮 Upside Down Communicator - Landing Page

A retro 1983 terminal-themed landing page for the **Upside Down Communicator** Android app, built with React + Vite.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎮 Live Demo

[View Live Site](#) | [Download APK](https://github.com/krypton-arch/UpsideDownCommunicator/releases)

## ✨ Features

- **CRT Terminal Aesthetic** - Authentic scanlines, phosphor glow, and screen flicker
- **Typing Animations** - Character-by-character text reveal effects
- **Glitch Effects** - RGB shift on hover/click interactions
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Konami Easter Egg** - Press ↑↑↓↓←→←→BA to flip the screen upside down!

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **CSS3** - Custom retro styling (no frameworks)
- **Google Fonts** - Space Mono, Press Start 2P, VT323

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/krypton-arch/Upsidedown-Website.git
cd Upsidedown-Website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed navigation
│   ├── Hero.jsx          # ASCII art title
│   ├── ThreatMeter.jsx   # Animated progress bar
│   ├── MissionBriefing.jsx
│   ├── Features.jsx      # 3-column feature grid
│   ├── HowItWorks.jsx    # Step-by-step guide
│   ├── Screenshots.jsx   # Media gallery
│   ├── DownloadSection.jsx
│   └── Footer.jsx        # Konami code easter egg
├── hooks/
│   ├── useTypingEffect.js
│   └── useGlitchEffect.js
├── styles/
│   ├── retro.css
│   ├── animations.css
│   └── crt-effects.css
└── App.jsx
```

## 🎯 About the App

**Upside Down Communicator** is an Android app that simulates a crisis communication device operating under dimensional interference:

- 📡 **Morse Code Transmission** - Encode messages into visual light patterns
- 👾 **Mind Flayer Mode** - Sanity meter drains; at 0%, UI flips upside down
- 📱 **Shake to Recover** - Physical shake gesture restores sanity

## 🚀 Deployment

### Netlify (Recommended)

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

Or drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

## 👤 Author

**krypton-arch** - [GitHub](https://github.com/krypton-arch)

## 📄 License

MIT License - feel free to use this for your own projects!

---

> *"The gate is open. The message must get through."*
