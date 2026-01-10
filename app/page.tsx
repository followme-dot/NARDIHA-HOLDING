'use client';

import { useState, useEffect } from 'react';
import MagicLoadingScreen from '@/components/LoadingScreen/MagicLoadingScreen';
import Navbar from '@/components/Navigation/Navbar';
import MagicHero from '@/components/Hero/MagicHero';
import ValueProposition from '@/components/Sections/ValueProposition';
import Platforms from '@/components/Sections/Platforms';
import About from '@/components/Sections/About';
import Journey from '@/components/Sections/Journey';
import Leadership from '@/components/Sections/Leadership';
import Audiences from '@/components/Sections/Audiences';
import CTA from '@/components/Sections/CTA';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (loadingComplete) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loadingComplete]);

  return (
    <>
      {/* EPIC MAGICAL LOADING SCREEN */}
      {!loadingComplete && (
        <MagicLoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Content - Smooth fade in after loading */}
      {showContent && (
        <div className="animate-fadeIn">
          <Navbar />
          <main className="relative">
            <MagicHero />
            <ValueProposition />
            <Platforms />
            <About />
            <Journey />
            <Leadership />
            <Audiences />
            <CTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
