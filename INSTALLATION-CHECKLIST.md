# ✅ NARDIHA Holdings - Installation Checklist

Use this checklist to ensure everything is set up correctly.

---

## 📋 Pre-Installation

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm or yarn installed (`npm --version`)
- [ ] VS Code or code editor ready
- [ ] Terminal/Command Prompt access
- [ ] Internet connection for downloading packages

---

## 📁 Assets Verification

Navigate to the `/assets/` folder and verify:

- [ ] `assets/logo.png` exists
  - File size: < 200KB recommended
  - Format: PNG with transparency
  - Content: NARDIHA mystical dragon logo

- [ ] `assets/nardiha-hero.jpg` exists
  - File size: < 500KB recommended
  - Format: JPG or PNG
  - Content: Cosmic/mystical background image

**Asset Paths Should Be:**
```
NARDIHA-HOLDING/
└── assets/
    ├── logo.png
    └── nardiha-hero.jpg
```

**NOT** in `/public/assets/` (common mistake!)

---

## 🔧 Installation Steps

### Step 1: Install Dependencies

```bash
npm install
```

- [ ] Command completed without errors
- [ ] `node_modules` folder created
- [ ] `package-lock.json` created

**Expected Output:**
```
added XXX packages in XXs
```

**If Errors Occur:**
- Try deleting `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version is 18+

---

### Step 2: Start Development Server

```bash
npm run dev
```

- [ ] Server started successfully
- [ ] No TypeScript errors
- [ ] Listening on http://localhost:3000

**Expected Output:**
```
▲ Next.js 14.2.15
- Local:        http://localhost:3000
- Ready in X.Xs
```

**If Port 3000 is Taken:**
```bash
npm run dev -- -p 3001
```

---

### Step 3: Browser Testing

Open http://localhost:3000

#### Loading Screen (8-10 seconds)

- [ ] Black screen appears
- [ ] Central purple/pink point appears and pulses (Phase 1: Void)
- [ ] Particles explode outward (Phase 2: Explosion)
- [ ] Particles spin in spiral/vortex (Phase 3: Vortex)
- [ ] Particles converge to form logo shape (Phase 4: Convergence)
- [ ] Logo appears with "NARDIHA HOLDINGS" text (Phase 5: Reveal)
- [ ] Smooth transition to main page (Phase 6: Transition)

**If Loading Screen Doesn't Work:**
- Check browser console (F12) for errors
- Verify `/assets/logo.png` exists
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check if Three.js loaded correctly

#### Hero Section

- [ ] Background image (nardiha-hero.jpg) visible
- [ ] Purple gradient overlay present
- [ ] "THE FUTURE OF WEB3 GAMING IS HERE" headline visible
- [ ] Gradient text effect on "WEB3 GAMING"
- [ ] Two CTA buttons visible
- [ ] Platform ticker at bottom
- [ ] Scroll indicator animating

**If Images Don't Load:**
- Verify assets are in `NARDIHA-HOLDING/assets/`
- Check file names match exactly (case-sensitive)
- Hard refresh browser

#### Stats Section

- [ ] "WHY INDUSTRY LEADERS CHOOSE NARDIHA" headline
- [ ] 6 stat boxes visible
- [ ] Numbers animate when scrolled into view
- [ ] "$100M+", "7", "500K+", etc. display correctly
- [ ] 3 feature cards below (Unified Ecosystem, Blockchain Native, Gaming First)

#### Platforms Section

- [ ] "OUR PLATFORMS" headline
- [ ] All 7 platforms visible:
  - [ ] 01 - NARI (purple/pink gradient)
  - [ ] 02 - ZAPHUB (blue/cyan gradient)
  - [ ] 03 - THOR WALLET (emerald/teal gradient)
  - [ ] 04 - NARDIUM (violet/purple gradient)
  - [ ] 05 - SANCTUM (rose/pink gradient)
  - [ ] 06 - SPARKLE TOYS (amber/orange gradient)
  - [ ] 07 - GENESIS REALMS (indigo/blue gradient)
- [ ] Alternating left/right layout works
- [ ] Platform icons visible
- [ ] Feature lists display correctly
- [ ] Placeholder mockups visible

#### About Section

- [ ] "OUR STORY" headline
- [ ] Company narrative text visible
- [ ] Timeline with 5 milestones visible
- [ ] Timeline dots and connecting line visible
- [ ] Timeline items alternate left/right

#### Leadership Section

- [ ] "LEADERSHIP" headline
- [ ] 3 team member cards:
  - [ ] Rafael Baena - CEO & CTO
  - [ ] Enrique Pérez - CFO
  - [ ] Carlos - COO
- [ ] Avatar placeholders with initials
- [ ] LinkedIn links visible
- [ ] Cards have glassmorphism effect

#### Audiences Section

- [ ] "WHO WE SERVE" headline
- [ ] 4 audience cards:
  - [ ] Gamers & Players
  - [ ] Traders & Investors
  - [ ] Studios & Developers
  - [ ] Collectors & Fans
- [ ] Icons visible in each card

#### CTA Section

- [ ] "READY TO JOIN THE WEB3 REVOLUTION?" headline
- [ ] Two CTA buttons (Schedule a Demo, Contact Us)
- [ ] Email: contact@nardihaholdings.com
- [ ] Headquarters info visible
- [ ] Background glow effects visible

#### Footer

- [ ] NARDIHA logo visible
- [ ] Social media icons (LinkedIn, Twitter, GitHub)
- [ ] Platform links (all 7 platforms)
- [ ] Company links
- [ ] Legal links
- [ ] Copyright notice: "© 2025 NARDIHA HOLDINGS"

---

## 📱 Responsive Testing

### Desktop (1920px+)
- [ ] All sections full width
- [ ] Hero text large and centered
- [ ] Platform cards side-by-side
- [ ] Leadership cards in 3-column grid

### Tablet (768px - 1024px)
- [ ] Navigation collapses to mobile menu
- [ ] Platform cards stack vertically
- [ ] Stats show 3 columns
- [ ] Leadership cards in 2-column grid

### Mobile (< 768px)
- [ ] Mobile menu accessible
- [ ] Hero text readable
- [ ] Stats show 2 columns
- [ ] All sections stack vertically
- [ ] Buttons full width
- [ ] Images scale correctly

**Test On:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (Chrome Mobile, Safari iOS)

---

## 🎨 Visual Effects Check

- [ ] Gradient text visible on headlines
- [ ] Glassmorphism on cards
- [ ] Hover effects work on buttons
- [ ] Magic pulse animation on icons
- [ ] Glow shadows on interactive elements
- [ ] Custom scrollbar (purple gradient)
- [ ] Smooth scrolling on anchor links

---

## ⚡ Performance Check

### Open Browser DevTools (F12)

#### Console Tab
- [ ] No red errors
- [ ] No warning messages (or only minor ones)
- [ ] Three.js loaded successfully

#### Network Tab
- [ ] All assets load successfully (green status codes)
- [ ] Images load (logo.png, nardiha-hero.jpg)
- [ ] JavaScript bundles load
- [ ] Total page size < 5MB

#### Performance Tab (Lighthouse)
- [ ] Run Lighthouse audit
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

---

## 🔍 SEO Verification

### View Page Source (Ctrl+U)

- [ ] `<title>` tag present: "NARDIHA Holdings | The Future of Web3 Gaming"
- [ ] Meta description present
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags present
- [ ] JSON-LD structured data present (`@type: Corporation`)

### Social Media Preview

Test with:
- [ ] Facebook Sharing Debugger
- [ ] Twitter Card Validator
- [ ] LinkedIn Post Inspector

---

## 🚀 Build Test (Optional but Recommended)

```bash
npm run build
```

- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No build warnings (or only minor)
- [ ] `.next` folder created

```bash
npm run start
```

- [ ] Production server starts
- [ ] Site works on http://localhost:3000
- [ ] All features work in production mode

---

## 📊 Final Checklist

- [ ] All sections display correctly
- [ ] Loading screen is epic and works perfectly
- [ ] No console errors
- [ ] Responsive on all screen sizes
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] Links work
- [ ] SEO tags present
- [ ] Performance acceptable

---

## 🎉 Deployment Readiness

If all checkboxes above are checked:

- [ ] **Ready to deploy to Vercel**
- [ ] **Ready to share with team**
- [ ] **Ready to show to stakeholders**
- [ ] **Ready to launch to public**

---

## 🛠️ Common Issues & Solutions

### Issue: Loading screen shows black screen forever

**Solution:**
1. Check browser console for errors
2. Verify `/assets/logo.png` exists
3. Check file path is exactly `NARDIHA-HOLDING/assets/logo.png`
4. Try different browser

### Issue: Images not loading

**Solution:**
1. Assets must be in `/assets/` not `/public/assets/`
2. Check file names match exactly (case-sensitive)
3. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Issue: TypeScript errors on build

**Solution:**
1. Run `npm install` again
2. Delete `.next` folder
3. Restart VS Code
4. Check all imports are correct

### Issue: Slow performance

**Solution:**
1. Optimize images (compress logo.png and nardiha-hero.jpg)
2. Reduce particle count to 10,000 in LoadingScreen.tsx
3. Test on different browser
4. Clear browser cache

---

## 📞 Need Help?

1. Check [README.md](README.md:1-1) for full documentation
2. Review [SETUP-GUIDE.md](SETUP-GUIDE.md:1-1) for detailed steps
3. Check [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md:1-1) for overview
4. Inspect browser console for specific errors

---

## ✅ Sign-Off

Once everything is checked:

**Name:** _______________
**Date:** _______________
**Status:** ⬜ Development ⬜ Staging ⬜ Production

**Notes:**
_________________________________________________________________________
_________________________________________________________________________
_________________________________________________________________________

---

**Congratulations! Your NARDIHA Holdings landing page is ready to revolutionize Web3 gaming! 🚀**

© 2025 NARDIHA HOLDINGS
