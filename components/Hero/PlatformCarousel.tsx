'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard,
  Workflow,
  Wallet,
  Brain,
  Swords,
  Package,
  Castle
} from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// LAS 7 PLATAFORMAS DE NARDIHA
const platforms = [
  {
    icon: CreditCard,
    title: 'NARI',
    subtitle: 'Fintech Web3 Revolution',
    description: 'Premium metal card with crypto-to-fiat conversion + NARI Dragon Guardian IoT device',
    href: '#nari'
  },
  {
    icon: Workflow,
    title: 'ZAPHUB',
    subtitle: 'Enterprise Automation Platform',
    description: 'Self-hosted workflow automation with AI Copilot and marketplace (70/30 split)',
    href: '#zaphub'
  },
  {
    icon: Wallet,
    title: 'THOR WALLET',
    subtitle: 'Multi-Chain DeFi Wallet',
    description: 'Self-custody wallet with integrated DeFi, 6 automated trading strategies',
    href: '#thorwallet'
  },
  {
    icon: Brain,
    title: 'NARDIUM',
    subtitle: 'AI-Powered DeFi Super Wallet',
    description: 'DApp wallet featuring 6 AI trading bots, social trading, and gamification',
    href: '#nardium'
  },
  {
    icon: Swords,
    title: 'NARDIHA SANCTUM',
    subtitle: 'NFT Gaming Marketplace',
    description: '240+ unique characters, staking up to 48% APY, PvP/PvE battles',
    href: '#sanctum'
  },
  {
    icon: Package,
    title: 'SPARKLE TOYS',
    subtitle: 'Phygital NFT Collectibles',
    description: 'Premium physical toys with NFC technology that generate unique NFTs',
    href: '#sparkletoys'
  },
  {
    icon: Castle,
    title: 'GENESIS REALMS',
    subtitle: 'Gaming NFT SaaS Platform',
    description: 'Multi-blockchain NFT marketplace with rental system and DAO governance',
    href: '#genesisrealms'
  }
];

export default function PlatformCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-avanzar cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % platforms.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  // Función para obtener las 3 plataformas visibles (anterior, actual, siguiente)
  const getVisiblePlatforms = () => {
    const prev = (currentIndex - 1 + platforms.length) % platforms.length;
    const next = (currentIndex + 1) % platforms.length;
    return { prev, current: currentIndex, next };
  };

  const visible = getVisiblePlatforms();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 3,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full h-[340px] flex items-center justify-center px-4">
      {/* Contenedor de cards apiladas */}
      <div className="relative w-full max-w-[750px] h-full flex items-center justify-center">

        {/* Card del fondo (siguiente) - Posición derecha */}
        <motion.div
          key={`next-${visible.next}`}
          className="absolute right-0 w-[240px]"
          initial={{ x: 80, scale: 0.8, opacity: 0.25, zIndex: 1 }}
          animate={{ x: 80, scale: 0.8, opacity: 0.25, zIndex: 1 }}
          transition={{ duration: 0.5 }}
          style={{ filter: 'blur(1px)' }}
        >
          <StackedPlatformCard {...platforms[visible.next]} />
        </motion.div>

        {/* Card del fondo (anterior) - Posición izquierda */}
        <motion.div
          key={`prev-${visible.prev}`}
          className="absolute left-0 w-[240px]"
          initial={{ x: -80, scale: 0.8, opacity: 0.25, zIndex: 1 }}
          animate={{ x: -80, scale: 0.8, opacity: 0.25, zIndex: 1 }}
          transition={{ duration: 0.5 }}
          style={{ filter: 'blur(1px)' }}
        >
          <StackedPlatformCard {...platforms[visible.prev]} />
        </motion.div>

        {/* Card principal (centro) con AnimatePresence para animación suave */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute w-[300px]"
            style={{ zIndex: 3 }}
          >
            <MainPlatformCard {...platforms[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-purple-500/50 hover:scale-110 flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous platform"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-purple-500/50 hover:scale-110 flex items-center justify-center transition-all duration-300 group"
        aria-label="Next platform"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
      </button>

      {/* Indicadores de página */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {platforms.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to platform ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Card principal (centro) - Compacta y elegante
function MainPlatformCard({ icon: Icon, title, subtitle, description }: any) {
  return (
    <div className="group relative h-[280px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icono */}
      <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
      </div>

      {/* Contenido */}
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-xs text-purple-400 mb-3 font-medium">{subtitle}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute top-3 right-3 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
      <div className="absolute bottom-3 left-3 w-12 h-12 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors" />
    </div>
  );
}

// Cards apiladas (laterales) - Más pequeñas y con efecto de profundidad
function StackedPlatformCard({ icon: Icon, title, subtitle }: any) {
  return (
    <div className="h-[260px] bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl p-5 overflow-hidden">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-purple-400/60" />
      </div>
      <h3 className="text-base font-bold text-white/60 mb-2">{title}</h3>
      <p className="text-xs text-purple-400/60">{subtitle}</p>
    </div>
  );
}
