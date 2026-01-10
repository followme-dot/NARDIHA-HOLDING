# 🚀 NARDIHA Holdings - Complete Setup Guide

Welcome! This guide will help you get the NARDIHA Holdings landing page up and running in minutes.

---

## ✅ Pre-Installation Checklist

Before you begin, make sure you have:

- [ ] **Node.js 18+** installed ([Download here](https://nodejs.org/))
- [ ] **npm** or **yarn** package manager
- [ ] The **assets folder** with:
  - `logo.png` (NARDIHA mystical logo)
  - `nardiha-hero.jpg` (Hero background image)
- [ ] A code editor (VS Code recommended)
- [ ] A modern web browser (Chrome, Firefox, Safari, Edge)

---

## 📦 Installation Steps

### Step 1: Verify Node.js Installation

Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers. If not, install Node.js first.

### Step 2: Navigate to Project Directory

```bash
cd NARDIHA-HOLDING
```

### Step 3: Install Dependencies

This will install all required packages (Next.js, Three.js, GSAP, etc.):

```bash
npm install
```

**Or if you prefer yarn:**

```bash
yarn install
```

This may take 2-3 minutes depending on your internet connection.

### Step 4: Verify Assets

Make sure these files exist:

```
NARDIHA-HOLDING/
└── assets/
    ├── logo.png           ← NARDIHA logo (mystical dragon)
    └── nardiha-hero.jpg   ← Hero section background
```

If they're missing, the loading screen won't work correctly!

### Step 5: Start Development Server

```bash
npm run dev
```

**Or with yarn:**

```bash
yarn dev
```

You should see output like:

```
▲ Next.js 14.2.15
- Local:        http://localhost:3000
- Ready in 2.5s
```

### Step 6: Open in Browser

Navigate to: **http://localhost:3000**

You should see:

1. ✨ **Epic Loading Screen** - Particles forming the NARDIHA logo
2. 🎨 **Hero Section** - With cosmic background
3. 📊 **Stats Section** - Animated counters
4. 🎮 **7 Platform Showcases**
5. 👥 **Leadership Section**
6. 📧 **Contact CTA**

---

## 🛠️ Troubleshooting

### Issue: "Cannot find module 'next'"

**Solution:** Run `npm install` again.

### Issue: Loading screen shows black screen

**Solution:**
- Check that `/assets/logo.png` exists
- Check browser console for errors (F12)
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Images not loading

**Solution:**
- Verify assets are in the `/assets/` folder (NOT `/public/assets/`)
- Images should be directly in: `NARDIHA-HOLDING/assets/`

### Issue: Port 3000 already in use

**Solution:** Kill the process or use a different port:

```bash
npm run dev -- -p 3001
```

### Issue: TypeScript errors

**Solution:**
- Restart VS Code
- Run `npm run build` to see specific errors
- Check that all files have correct imports

---

## 🎨 Customization Guide

### Change Colors

Edit [tailwind.config.ts](tailwind.config.ts:1-1):

```typescript
colors: {
  nardiha: {
    purple: '#7C3AED',  // ← Change this
    pink: '#EC4899',    // ← Change this
    blue: '#3B82F6',    // ← Change this
  }
}
```

### Modify Loading Screen Duration

Edit [components/LoadingScreen/LoadingScreen.tsx](components/LoadingScreen/LoadingScreen.tsx:1-1):

```typescript
// Current phase timings (in seconds):
if (elapsed < 1) { /* Void phase */ }
else if (elapsed < 2.5) { /* Explosion */ }
else if (elapsed < 5) { /* Vortex */ }
// etc...

// Adjust these numbers to make it faster/slower
```

### Change Platform Content

Edit [components/Sections/Platforms.tsx](components/Sections/Platforms.tsx:1-1):

```typescript
const platforms: Platform[] = [
  {
    number: '01',
    title: 'NARI',
    subtitle: 'Fintech Web3 Revolution',
    description: '...',  // ← Edit this
    features: [...],     // ← Edit this
  },
  // ...
];
```

---

## 🚀 Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized production bundle in `.next/` folder.

### Test Production Build Locally

```bash
npm run start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site will be live in ~2 minutes.

---

## 📊 Performance Optimization Tips

### Image Optimization

- Use WebP format for better compression
- Keep logo.png under 200KB
- Keep nardiha-hero.jpg under 500KB

### Loading Screen Performance

- Reduce particle count for lower-end devices:
  ```typescript
  const particleCount = 10000; // Instead of 20000
  ```

### Enable Analytics

Add to `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📁 Project Structure Overview

```
NARDIHA-HOLDING/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx          # Root layout (SEO, fonts)
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── LoadingScreen/      # Epic Three.js loading
│   ├── Navigation/         # Navbar
│   ├── Hero/               # Hero section
│   ├── Sections/           # All content sections
│   ├── Footer/             # Footer
│   └── UI/                 # Reusable components
├── hooks/                  # React hooks
├── lib/                    # Utilities & shaders
├── assets/                 # Images (logo, hero)
└── README.md               # Documentation
```

---

## 🎯 Next Steps

After getting the site running:

1. **Customize Content** - Update text, images, colors
2. **Add Real Images** - Replace placeholder mockups with real platform screenshots
3. **Connect Analytics** - Add Google Analytics or Vercel Analytics
4. **Set up Contact Form** - Add email integration
5. **Add More Platforms** - If you have more than 7 platforms
6. **Optimize Performance** - Run Lighthouse audit
7. **Deploy** - Push to production on Vercel

---

## 💡 Tips for Best Results

- **Test on Mobile** - Use responsive design mode (F12 → Toggle device toolbar)
- **Check Loading Times** - Loading screen should complete in 8-10 seconds
- **Browser Compatibility** - Test on Chrome, Firefox, Safari
- **Lighthouse Score** - Aim for 90+ on performance
- **Accessibility** - Ensure all interactive elements are keyboard accessible

---

## 📧 Need Help?

- Check the main [README.md](README.md:1-1)
- Review component source code
- Check browser console for errors (F12)

---

**Built with 💜 for the Web3 Gaming Revolution**

© 2025 NARDIHA HOLDINGS
