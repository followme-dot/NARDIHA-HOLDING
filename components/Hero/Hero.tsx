'use client';

import Image from 'next/image';
import Button from '../UI/Button';
import PlatformCarousel from './PlatformCarousel';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/nardiha-hero.jpg"
          alt="NARDIHA Holdings"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-900/60 to-nardiha-bg-darker/95" />
      </div>

      {/* Floating Particles Background Effect */}
      <div className="absolute inset-0 particles-bg z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto pt-20">
        <p className="text-sm uppercase tracking-widest text-purple-300 mb-6 animate-fadeIn">
          27 Integrated Web3 & Gaming Platforms
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fadeIn animation-delay-200">
          THE FUTURE OF
          <br />
          <span className="gradient-text text-shadow-glow">
            WEB3 GAMING
          </span>
          <br />
          IS HERE
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-400">
          A global Web3 conglomerate offering integrated solutions for gaming,
          DeFi, fintech, and digital entertainment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn animation-delay-600">
          <Button size="lg" variant="primary">
            Explore Ecosystem
          </Button>
          <Button size="lg" variant="outline">
            Get Started
          </Button>
        </div>

        {/* Platform Carousel */}
        <div className="relative z-10 mt-16 animate-fadeIn animation-delay-800">
          <PlatformCarousel />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/60 flex flex-col items-center animate-bounce">
        <div className="scroll-indicator" />
        <p className="text-xs mt-2 uppercase tracking-wider">Scroll</p>
        <ChevronDown size={20} className="mt-1" />
      </div>
    </section>
  );
}
