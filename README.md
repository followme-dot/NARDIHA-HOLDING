# NARDIHA Holdings - Official Landing Page

![NARDIHA Holdings](./assets/logo.png)

**The Future of Web3 Gaming is Here**

A spectacular, award-worthy landing page for NARDIHA Holdings - a global Web3 gaming and fintech conglomerate operating 27 integrated platforms.

---

## 🌟 Features

### Epic Loading Screen
- **Cinematic Three.js particle system** with 20,000+ particles
- Particles form the NARDIHA logo through 6 distinct phases:
  1. **The Void** - Single glowing point
  2. **Explosion** - Supernova-like particle burst
  3. **Vortex** - Spiraling galaxy formation
  4. **Convergence** - Particles form the logo
  5. **Reveal** - Logo materializes with glow
  6. **Transition** - Smooth fade to main content
- Real-time bloom/glow post-processing
- Custom GLSL shaders for magical effects

### Immersive Hero Section
- Full-screen hero with parallax background image
- Animated gradient text
- Platform ticker showcasing all 7 platforms
- Smooth scroll indicator

### Dynamic Content Sections
- **Stats Counter** - Animated counters with scroll-triggered visibility
- **77 Platform Showcases** - Alternating layout with detailed features
- **Interactive Timeline** - Company journey visualization
- **Leadership Cards** - Team member profiles with glassmorphism
- **Target Audiences** - Four key user segments
- **CTA Section** - Contact information with glowing effects

### Premium Design System
- **Color Palette**: Mystical purples, cosmic pinks, brilliant blues
- **Glassmorphism** effects throughout
- **Gradient animations** on interactive elements
- **Magic pulse** effects on icons
- **Custom scrollbar** with gradient styling
- **Responsive design** - Mobile-first approach

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd NARDIHA-HOLDING
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Ensure assets are in place**

   Make sure these files exist in the `/assets/` folder:
   - `logo.png` - NARDIHA mystical logo
   - `nardiha-hero.jpg` - Hero section background image

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

   You should see the **EPIC LOADING SCREEN** with particles forming the NARDIHA logo!

---

## 📁 Project Structure

```
NARDIHA-HOLDING/
├── app/
│   ├── layout.tsx           # Root layout with SEO meta tags
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and animations
├── components/
│   ├── LoadingScreen/
│   │   └── LoadingScreen.tsx    # Epic Three.js loading screen
│   ├── Navigation/
│   │   └── Navbar.tsx           # Sticky navigation bar
│   ├── Hero/
│   │   └── Hero.tsx             # Hero section
│   ├── Sections/
│   │   ├── ValueProposition.tsx # Stats and features
│   │   ├── Platforms.tsx        # 7 platform showcases
│   │   ├── About.tsx            # Company story & timeline
│   │   ├── Leadership.tsx       # Team members
│   │   ├── Audiences.tsx        # Target audiences
│   │   └── CTA.tsx              # Contact section
│   ├── Footer/
│   │   └── Footer.tsx           # Site footer
│   └── UI/
│       ├── Button.tsx           # Reusable button component
│       ├── Card.tsx             # Reusable card component
│       └── AnimatedCounter.tsx  # Scroll-triggered counter
├── hooks/
│   └── useLogoPositions.ts      # Extracts logo pixel positions
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── particleShaders.ts       # GLSL vertex/fragment shaders
├── assets/
│   ├── logo.png                 # NARDIHA logo
│   └── nardiha-hero.jpg         # Hero background
└── README.md
```

---

## 🎨 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Post-Processing**: Three.js EffectComposer, UnrealBloomPass

---

## 🎯 The 7 Platforms

1. **NARI** - Fintech Web3 Revolution
2. **ZAPHUB** - Enterprise Automation Platform
3. **THOR WALLET** - Multi-Chain DeFi Wallet
4. **NARDIUM** - AI-Powered DeFi Super Wallet
5. **NARDIHA SANCTUM** - NFT Gaming Marketplace
6. **SPARKLE TOYS** - Phygital NFT Collectibles
7. **NARDIHA GENESIS REALMS** - Gaming NFT SaaS Platform

---

## 🛠️ Build for Production

```bash
npm run build
npm run start
```

Or deploy directly to **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📊 Performance

- **Lighthouse Score**: Target 95+
- **Core Web Vitals**: Optimized
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- **Lazy Loading**: Below-the-fold components
- **Image Optimization**: Next.js Image with WebP

---

## 🎭 Key Visual Effects

### Loading Screen Phases

```
Phase 1 (0-1s):    The Void - Central glowing point
Phase 2 (1-2.5s):  Explosion - Particles burst outward
Phase 3 (2.5-5s):  Vortex - Spiraling galaxy effect
Phase 4 (5-6.5s):  Convergence - Forming logo shape
Phase 5 (6.5-8s):  Reveal - Logo solidifies with glow
Phase 6 (8-10s):   Transition - Fade to main page
```

### Custom Animations

- **Gradient Text**: Purple → Pink → Blue
- **Magic Pulse**: Breathing glow effect
- **Glassmorphism**: Frosted glass cards
- **Animated Borders**: Rotating hue gradients
- **Scroll Indicators**: Smooth bounce animations
- **Counter Animations**: Ease-out number counting

---

## 🌐 SEO & Metadata

- Comprehensive meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data (Schema.org)
- Semantic HTML structure
- Optimized for search engines and AI assistants

---

## 📧 Contact

**NARDIHA HOLDINGS**

- **Email**: contact@nardihaholdings.com
- **Headquarters**: Panama City, Panama
- **US Office**: Wilmington, Delaware

---

## 📜 License

© 2025 NARDIHA HOLDINGS. All rights reserved.

---

## 🙏 Credits

**Leadership Team:**
- **Rafael Baena** - CEO & CTO (Full-stack development & blockchain)
- **Enrique Pérez** - CFO (Financial strategy & banking)
- **Carlos** - COO (Operations & design direction)

**Built with**: Next.js, Three.js, Tailwind CSS, Framer Motion, GSAP

---

**Made with 💜 for the Web3 Gaming Revolution**
