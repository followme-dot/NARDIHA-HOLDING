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
  Castle,
  Bot,
  ArrowLeftRight,
  Link2,
  Lock,
  LineChart,
  Gavel,
  Gamepad2,
  Image as ImageIcon,
  Fingerprint,
  Eye,
  Radio,
  Server,
  Leaf,
  Calculator,
  Users,
  MessageCircle,
  Star
} from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// LAS 27 PLATAFORMAS DE NARDIHA con colores arcoiris
const platforms = [
  // 7 Core Platforms
  {
    icon: CreditCard,
    title: 'NARI',
    subtitle: 'Fintech Web3 Revolution',
    description: 'Premium metal card with crypto-to-fiat conversion + NARI Dragon Guardian IoT device',
    bgColor: 'from-red-500/20 to-red-600/10'
  },
  {
    icon: Workflow,
    title: 'ZAPHUB',
    subtitle: 'Enterprise Automation Platform',
    description: 'Self-hosted workflow automation with AI Copilot and marketplace (70/30 split)',
    bgColor: 'from-orange-500/20 to-orange-600/10'
  },
  {
    icon: Wallet,
    title: 'THOR WALLET',
    subtitle: 'Multi-Chain DeFi Wallet',
    description: 'Self-custody wallet with integrated DeFi, 6 automated trading strategies',
    bgColor: 'from-amber-500/20 to-amber-600/10'
  },
  {
    icon: Brain,
    title: 'NARDIUM',
    subtitle: 'AI-Powered DeFi Super Wallet',
    description: 'DApp wallet featuring 6 AI trading bots, social trading, and gamification',
    bgColor: 'from-yellow-500/20 to-yellow-600/10'
  },
  {
    icon: Swords,
    title: 'NARDIHA SANCTUM',
    subtitle: 'NFT Gaming Marketplace',
    description: '240+ unique characters, staking up to 48% APY, PvP/PvE battles',
    bgColor: 'from-lime-500/20 to-lime-600/10'
  },
  {
    icon: Package,
    title: 'SPARKLE TOYS',
    subtitle: 'Phygital NFT Collectibles',
    description: 'Premium physical toys with NFC technology that generate unique NFTs',
    bgColor: 'from-green-500/20 to-green-600/10'
  },
  {
    icon: Castle,
    title: 'GENESIS REALMS',
    subtitle: 'Gaming NFT SaaS Platform',
    description: 'Multi-blockchain NFT marketplace with rental system and DAO governance',
    bgColor: 'from-emerald-500/20 to-emerald-600/10'
  },
  // DeFi & Trading (5)
  {
    icon: Bot,
    title: 'BITBOOTS',
    subtitle: 'AI Trading Bot with 35% Returns',
    description: 'Trading bot AI with 20+ strategies, reinforcement learning, 15 exchanges',
    bgColor: 'from-teal-500/20 to-teal-600/10'
  },
  {
    icon: ArrowLeftRight,
    title: 'NARDIUM DEX',
    subtitle: 'Next-Gen Decentralized Exchange',
    description: 'DEX with concentrated liquidity, hybrid order book, cross-chain swaps',
    bgColor: 'from-cyan-500/20 to-cyan-600/10'
  },
  {
    icon: Link2,
    title: 'ARGENTUM BRIDGE',
    subtitle: 'Lightning-Fast Cross-Chain Bridge',
    description: 'Ultra-fast bridge (5-min settlement), 10 chains, $10M insurance pool',
    bgColor: 'from-sky-500/20 to-sky-600/10'
  },
  {
    icon: Lock,
    title: 'AUREUM VAULT',
    subtitle: 'Institutional-Grade Crypto Vault',
    description: 'Multi-sig vault with $100M insurance, hardware wallet, time locks',
    bgColor: 'from-blue-500/20 to-blue-600/10'
  },
  {
    icon: LineChart,
    title: 'TRADE MAD',
    subtitle: 'Pro Trading Analytics Platform',
    description: 'Portfolio tracking, automated tax reporting, ML-powered insights',
    bgColor: 'from-indigo-500/20 to-indigo-600/10'
  },
  // Gaming & Metaverse (4)
  {
    icon: Gavel,
    title: 'TEMPLUM DAO',
    subtitle: 'Revolutionary NFT Auction Marketplace',
    description: '4 auction types, zkML anti-wash trading, fractional ownership 2.0',
    bgColor: 'from-violet-500/20 to-violet-600/10'
  },
  {
    icon: Gamepad2,
    title: 'SSEUM GAMES',
    subtitle: 'Play-to-Earn Mini-Games Platform',
    description: '20+ casual mini-games, weekly tournaments, cross-game assets',
    bgColor: 'from-purple-500/20 to-purple-600/10'
  },
  {
    icon: ImageIcon,
    title: 'BB NFT',
    subtitle: 'Generative NFT Creation Platform',
    description: 'Generative art engine for 10K collections, built-in rarity ranking',
    bgColor: 'from-fuchsia-500/20 to-fuchsia-600/10'
  },
  {
    icon: Swords,
    title: 'GLADIUS HUB',
    subtitle: 'Your Web3 Gaming Hub',
    description: '500+ Web3 games, user reviews, cross-game tournaments',
    bgColor: 'from-pink-500/20 to-pink-600/10'
  },
  // Infrastructure & Identity (5)
  {
    icon: Fingerprint,
    title: 'VERITAS ID',
    subtitle: 'Your Decentralized Digital Identity',
    description: 'W3C DIDs, zero-knowledge proofs, Web2 integration (OAuth, SAML)',
    bgColor: 'from-rose-500/20 to-rose-600/10'
  },
  {
    icon: Eye,
    title: 'VIGIL AI',
    subtitle: 'AI-Powered Web3 Security',
    description: 'Smart contract exploit detection, phishing alerts, rug pull prediction',
    bgColor: 'from-red-400/20 to-red-500/10'
  },
  {
    icon: Radio,
    title: 'ORACULUM',
    subtitle: 'Decentralized Oracle Network',
    description: 'Price feeds (1-sec updates), 30 oracle nodes, 5 chains supported',
    bgColor: 'from-orange-400/20 to-orange-500/10'
  },
  {
    icon: CreditCard,
    title: 'FERRUM PAY',
    subtitle: 'Crypto + Fiat Payment Processing',
    description: '50 cryptos + 150 fiat currencies, real-time FX, ML fraud prevention',
    bgColor: 'from-amber-400/20 to-amber-500/10'
  },
  {
    icon: Server,
    title: 'NEXUS GRID',
    subtitle: 'Decentralized Compute Network',
    description: 'GPU & CPU marketplace, 50% cheaper than AWS, AI/ML training',
    bgColor: 'from-yellow-400/20 to-yellow-500/10'
  },
  // Enterprise & Compliance (5)
  {
    icon: Leaf,
    title: 'SUSINIK',
    subtitle: 'AI-Verified Carbon Credits',
    description: 'Satellite AI verification, 1 NFT = 1 ton CO2, ESG reporting',
    bgColor: 'from-lime-400/20 to-lime-500/10'
  },
  {
    icon: Calculator,
    title: 'TRIBUTUM',
    subtitle: 'Crypto Tax Made Easy',
    description: 'Auto-calculate capital gains, IRS Form 8949, 25 countries',
    bgColor: 'from-green-400/20 to-green-500/10'
  },
  {
    icon: Users,
    title: 'AETHER HUB',
    subtitle: 'Multi-Agent AI for Business',
    description: '10+ AI agent types, multi-agent coordination, Claude 3.5 powered',
    bgColor: 'from-emerald-400/20 to-emerald-500/10'
  },
  {
    icon: MessageCircle,
    title: 'AGORA SOCIAL',
    subtitle: 'Decentralized Social Media',
    description: 'Posts as NFTs, direct monetization, censorship-resistant',
    bgColor: 'from-teal-400/20 to-teal-500/10'
  },
  {
    icon: Star,
    title: 'ASTRID',
    subtitle: 'Stellar Asset Management',
    description: 'Institutional-grade security, AI-powered investment strategies',
    bgColor: 'from-cyan-400/20 to-cyan-500/10'
  }
];

export default function PlatformCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-avanzar cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
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
    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] flex items-center justify-center px-2 sm:px-4">
      {/* Contenedor de cards apiladas */}
      <div className="relative w-full max-w-[750px] h-full flex items-center justify-center">

        {/* Card del fondo (siguiente) - Posición derecha - Oculta en móviles */}
        <motion.div
          key={`next-${visible.next}`}
          className="absolute right-0 w-[180px] sm:w-[200px] md:w-[240px] hidden sm:block"
          initial={{ x: 60, scale: 0.8, opacity: 0.25, zIndex: 1 }}
          animate={{ x: 60, scale: 0.8, opacity: 0.25, zIndex: 1 }}
          transition={{ duration: 0.5 }}
          style={{ filter: 'blur(1px)' }}
        >
          <StackedPlatformCard {...platforms[visible.next]} />
        </motion.div>

        {/* Card del fondo (anterior) - Posición izquierda - Oculta en móviles */}
        <motion.div
          key={`prev-${visible.prev}`}
          className="absolute left-0 w-[180px] sm:w-[200px] md:w-[240px] hidden sm:block"
          initial={{ x: -60, scale: 0.8, opacity: 0.25, zIndex: 1 }}
          animate={{ x: -60, scale: 0.8, opacity: 0.25, zIndex: 1 }}
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
            className="absolute w-[260px] sm:w-[280px] md:w-[300px]"
            style={{ zIndex: 3 }}
          >
            <MainPlatformCard {...platforms[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botones de navegación - Más pequeños en móviles */}
      <button
        onClick={handlePrev}
        className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-purple-500/50 hover:scale-110 flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous platform"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-purple-400 transition-colors" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-purple-500/50 hover:scale-110 flex items-center justify-center transition-all duration-300 group"
        aria-label="Next platform"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-purple-400 transition-colors" />
      </button>

      {/* Indicadores de página - Ocultos en móviles, solo contador */}
      <div className="absolute bottom-1 sm:bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex gap-1 md:gap-1.5 z-10">
        {platforms.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-4 md:w-6 bg-gradient-to-r from-purple-500 to-pink-500'
                : 'w-1 md:w-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to platform ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de plataforma - Siempre visible */}
      <div className="absolute bottom-1 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[10px] sm:text-xs font-medium">
        {currentIndex + 1} / {platforms.length}
      </div>
    </div>
  );
}

// Card principal (centro) - Con color de fondo arcoiris - Responsive
function MainPlatformCard({ icon: Icon, title, subtitle, description, bgColor }: any) {
  return (
    <div className={`group relative h-[200px] sm:h-[240px] md:h-[280px] bg-gradient-to-br ${bgColor} backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30`}>
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icono */}
      <div className="relative mb-2 sm:mb-3 md:mb-4 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-pink-300 transition-colors" />
      </div>

      {/* Contenido */}
      <div className="relative">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200 transition-all duration-300">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs text-white/80 mb-2 sm:mb-3 font-medium">{subtitle}</p>
        <p className="text-[10px] sm:text-xs text-white/60 leading-relaxed line-clamp-3 sm:line-clamp-none">{description}</p>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
    </div>
  );
}

// Cards apiladas (laterales) - Con color de fondo arcoiris - Responsive
function StackedPlatformCard({ icon: Icon, title, subtitle, bgColor }: any) {
  return (
    <div className={`h-[200px] sm:h-[220px] md:h-[260px] bg-gradient-to-br ${bgColor} backdrop-blur-sm border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 overflow-hidden`}>
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center mb-2 sm:mb-3">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
      </div>
      <h3 className="text-sm sm:text-base font-bold text-white/60 mb-1 sm:mb-2">{title}</h3>
      <p className="text-[10px] sm:text-xs text-white/50">{subtitle}</p>
    </div>
  );
}
