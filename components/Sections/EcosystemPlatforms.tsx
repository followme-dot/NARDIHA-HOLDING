'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Bot,
  ArrowLeftRight,
  Link2,
  Lock,
  LineChart,
  Gavel,
  Gamepad2,
  Image as ImageIcon,
  Swords,
  Fingerprint,
  Eye,
  Radio,
  CreditCard,
  Server,
  Leaf,
  Calculator,
  Users,
  MessageCircle,
  Star
} from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';

interface Platform {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: any;
  gradient: string;
}

interface PlatformGroup {
  id: string;
  title: string;
  subtitle: string;
  platforms: Platform[];
  accentColor: string;
}

const platformGroups: PlatformGroup[] = [
  {
    id: 'defi-trading',
    title: 'DeFi & Trading',
    subtitle: 'Advanced financial infrastructure for the decentralized economy',
    accentColor: 'from-emerald-500 to-cyan-500',
    platforms: [
      {
        id: 'bitboots',
        number: '01',
        title: 'BITBOOTS',
        tagline: 'AI Trading Bot with 35% Returns',
        description: 'Trading bot AI with 20+ strategies (arbitrage, market making, trend following), reinforcement learning optimization, 15 exchanges (CEX + DEX), and performance: 35% CAGR backtested, 42% live (2025).',
        features: [
          '20+ automated strategies',
          'Reinforcement learning optimization',
          '15 exchanges integrated (CEX + DEX)',
          '35% CAGR backtested performance',
        ],
        icon: Bot,
        gradient: 'from-emerald-500 to-cyan-500',
      },
      {
        id: 'nardium-dex',
        number: '02',
        title: 'NARDIUM DEX',
        tagline: 'Next-Gen Decentralized Exchange',
        description: 'DEX with concentrated liquidity (Uniswap V3 style), hybrid order book (like dYdX), cross-chain swaps (LayerZero), and limit orders on-chain.',
        features: [
          'Concentrated liquidity pools',
          'Hybrid order book + AMM',
          'Cross-chain swaps via LayerZero',
          'Limit orders on-chain',
        ],
        icon: ArrowLeftRight,
        gradient: 'from-purple-500 to-fuchsia-500',
      },
      {
        id: 'argentum-bridge',
        number: '03',
        title: 'ARGENTUM BRIDGE',
        tagline: 'Lightning-Fast Cross-Chain Bridge',
        description: 'Ultra-fast cross-chain bridge (5-minute settlement) using LayerZero + Wormhole, supporting 10 chains, with insurance pool ($10M) and triple audit.',
        features: [
          '5-minute settlement time',
          '10 chains supported',
          '$10M insurance pool',
          'Triple audit security',
        ],
        icon: Link2,
        gradient: 'from-slate-400 to-blue-400',
      },
      {
        id: 'aureum-vault',
        number: '04',
        title: 'AUREUM VAULT',
        tagline: 'Institutional-Grade Crypto Vault',
        description: 'Institutional multi-sig vault with insurance ($100M coverage), hardware wallet integration, time locks, and advanced whitelisting for institutions and family offices.',
        features: [
          'Configurable multi-sig',
          '$100M insurance coverage',
          'Hardware wallet integration',
          'Time locks & whitelisting',
        ],
        icon: Lock,
        gradient: 'from-amber-500 to-yellow-500',
      },
      {
        id: 'trade-mad',
        number: '05',
        title: 'TRADE MAD',
        tagline: 'Pro Trading Analytics Platform',
        description: 'Analytics platform for traders with portfolio tracking multi-exchange, automated tax reporting, performance attribution, and ML-powered insights.',
        features: [
          'Multi-exchange portfolio tracking',
          'Automated tax reporting (IRS 8949)',
          'Performance attribution analytics',
          'ML-powered trading insights',
        ],
        icon: LineChart,
        gradient: 'from-red-500 to-orange-500',
      },
    ],
  },
  {
    id: 'gaming-metaverse',
    title: 'Gaming & Metaverse',
    subtitle: 'Immersive experiences and digital ownership for the next generation',
    accentColor: 'from-pink-500 to-rose-500',
    platforms: [
      {
        id: 'templum-dao',
        number: '06',
        title: 'TEMPLUM DAO',
        tagline: 'Revolutionary NFT Auction Marketplace',
        description: 'NFT marketplace with 4 auction types (English, Dutch, Vickrey, Candle), anti-wash trading via zkML proofs, floor price oracles (3-layer), fractional ownership 2.0, and dynamic royalties.',
        features: [
          '4 auction types (English, Dutch, Vickrey, Candle)',
          'zkML anti-wash trading protection',
          'Floor price oracles (3-layer)',
          'Fractional ownership 2.0',
        ],
        icon: Gavel,
        gradient: 'from-amber-600 to-purple-600',
      },
      {
        id: 'sseum-games',
        number: '07',
        title: 'SSEUM GAMES',
        tagline: 'Play-to-Earn Mini-Games Platform',
        description: 'Casual mini-games platform with play-to-earn mechanics, social integration, tournaments, and asset interoperability between games (20+ mini-games).',
        features: [
          '20+ casual mini-games',
          'Play-to-earn (not pay-to-win)',
          'Weekly tournaments ($5K prizes)',
          'Cross-game asset interoperability',
        ],
        icon: Gamepad2,
        gradient: 'from-lime-500 to-green-500',
      },
      {
        id: 'bb-nft',
        number: '08',
        title: 'BB NFT',
        tagline: 'Generative NFT Creation Platform',
        description: 'NFT platform specialized in PFPs and collectibles with generative art engine, rarity tools, and community features. Create 10K collections easily.',
        features: [
          'Generative art engine (10K collections)',
          'Built-in rarity ranking',
          'Community Discord/Twitter integration',
          'Low fees (1% marketplace)',
        ],
        icon: ImageIcon,
        gradient: 'from-cyan-500 to-blue-500',
      },
      {
        id: 'gladius-hub',
        number: '09',
        title: 'GLADIUS HUB',
        tagline: 'Your Web3 Gaming Hub',
        description: 'Gaming hub aggregator with game discovery, reviews, tournaments, and unified launcher for Web3 games. Browse 500+ games in one place.',
        features: [
          '500+ Web3 games catalogued',
          'User reviews & ratings',
          'Cross-game tournaments',
          'Unified game launcher',
        ],
        icon: Swords,
        gradient: 'from-rose-600 to-red-600',
      },
    ],
  },
  {
    id: 'infrastructure-identity',
    title: 'Infrastructure & Identity',
    subtitle: 'Building blocks for a secure and decentralized future',
    accentColor: 'from-blue-500 to-indigo-500',
    platforms: [
      {
        id: 'veritas-id',
        number: '10',
        title: 'VERITAS ID',
        tagline: 'Your Decentralized Digital Identity',
        description: 'Decentralized identity solution (DID) compatible with W3C standards, zero-knowledge proofs for privacy, and Web2 integration (OAuth, SAML). KYC without compromising privacy.',
        features: [
          'W3C standard DIDs',
          'Zero-knowledge proofs (ZKPs)',
          'Web2 integration (OAuth, SAML)',
          'GDPR & eIDAS compliant',
        ],
        icon: Fingerprint,
        gradient: 'from-blue-500 to-green-500',
      },
      {
        id: 'vigil-ai',
        number: '11',
        title: 'VIGIL AI',
        tagline: 'AI-Powered Web3 Security',
        description: 'AI-powered cybersecurity platform for Web3, detecting smart contract exploits, phishing, rug pulls, and wash trading in real-time. Protects $500M+ in funds.',
        features: [
          'Smart contract exploit detection',
          'Real-time phishing alerts',
          'Rug pull prediction (85% accuracy)',
          'Wash trading detection',
        ],
        icon: Eye,
        gradient: 'from-red-600 to-black',
      },
      {
        id: 'oraculum',
        number: '12',
        title: 'ORACULUM',
        tagline: 'Decentralized Oracle Network',
        description: 'Decentralized oracle network bringing off-chain data on-chain with reputation system, economic security, and cross-chain compatibility. Price feeds, weather, sports, VRF.',
        features: [
          'Price feeds (1-second updates)',
          'Weather, sports, VRF data',
          '30 oracle nodes (decentralized)',
          'Cross-chain support (5 chains)',
        ],
        icon: Radio,
        gradient: 'from-indigo-500 to-purple-500',
      },
      {
        id: 'ferrum-pay',
        number: '13',
        title: 'FERRUM PAY',
        tagline: 'Crypto + Fiat Payment Processing',
        description: 'Payment processor accepting crypto + fiat (150 fiat currencies, 50 cryptos), real-time FX, fraud prevention ML, and crypto-friendly (accepts businesses Stripe rejects).',
        features: [
          '50 cryptos + 150 fiat currencies',
          'Real-time FX conversion',
          'ML fraud prevention (99% accuracy)',
          'Crypto-friendly (no chargebacks)',
        ],
        icon: CreditCard,
        gradient: 'from-green-600 to-amber-500',
      },
      {
        id: 'nexus-grid',
        number: '14',
        title: 'NEXUS GRID',
        tagline: 'Decentralized Compute Network',
        description: 'Decentralized compute network (like Akash, Render) for AI/ML workloads, 3D rendering, and node infrastructure, with tokenized compute credits. 50% cheaper than AWS.',
        features: [
          'GPU & CPU marketplace',
          '50% cheaper than AWS',
          'AI/ML training, 3D rendering',
          'Tokenized compute ($GRID)',
        ],
        icon: Server,
        gradient: 'from-sky-500 to-slate-600',
      },
    ],
  },
  {
    id: 'enterprise-compliance',
    title: 'Enterprise & Compliance',
    subtitle: 'Professional solutions for businesses and regulatory requirements',
    accentColor: 'from-violet-500 to-purple-500',
    platforms: [
      {
        id: 'susinik',
        number: '15',
        title: 'SUSINIK',
        tagline: 'AI-Verified Carbon Credits',
        description: 'Blockchain-based carbon credit registry with AI verification (satellite computer vision), NFT tokenization of credits, and ESG reporting for corporations. 95% accuracy vs 70% manual.',
        features: [
          'AI satellite imagery verification',
          '1 NFT = 1 ton CO2 offset',
          '95% accuracy (vs 70% manual)',
          'ESG reporting (CDP, GRI)',
        ],
        icon: Leaf,
        gradient: 'from-green-600 to-blue-500',
      },
      {
        id: 'tributum',
        number: '16',
        title: 'TRIBUTUM',
        tagline: 'Crypto Tax Made Easy',
        description: 'Tax compliance platform for crypto, auto-calculating capital gains, generating tax forms (8949, Schedule D), multi-country support (25 countries), and accountant integration.',
        features: [
          'Auto-calculate capital gains',
          'Generate IRS Form 8949',
          '25 countries supported',
          'CPA integration portal',
        ],
        icon: Calculator,
        gradient: 'from-blue-800 to-gray-600',
      },
      {
        id: 'aether-hub',
        number: '17',
        title: 'AETHER HUB',
        tagline: 'Multi-Agent AI for Business',
        description: 'Multi-agent AI platform for enterprises, coordinating 10+ AI agents (data entry, customer support, scheduling, analysis) in automated workflows. Powered by Claude 3.5 Sonnet.',
        features: [
          '10+ AI agent types',
          'Multi-agent coordination',
          'Pre-built workflows (sales, support, HR)',
          'Claude 3.5 Sonnet powered',
        ],
        icon: Users,
        gradient: 'from-sky-400 to-white',
      },
      {
        id: 'agora-social',
        number: '18',
        title: 'AGORA SOCIAL',
        tagline: 'Decentralized Social Media',
        description: 'Decentralized social media platform (like Twitter/X but Web3), with content ownership (NFTs), direct monetization (tips, subscriptions), and censorship resistance. Own your content.',
        features: [
          'Posts as NFTs (ownership)',
          'Direct monetization (tips, subs)',
          'Censorship-resistant',
          'ActivityPub protocol',
        ],
        icon: MessageCircle,
        gradient: 'from-blue-500 to-purple-500',
      },
      {
        id: 'astrid',
        number: '19',
        title: 'ASTRID',
        tagline: 'Stellar Asset Management',
        description: 'Advanced digital asset management platform with institutional-grade security, multi-chain portfolio tracking, and AI-powered investment strategies for sophisticated investors.',
        features: [
          'Institutional-grade security',
          'Multi-chain portfolio tracking',
          'AI-powered investment strategies',
          'Advanced analytics dashboard',
        ],
        icon: Star,
        gradient: 'from-violet-600 to-indigo-600',
      },
    ],
  },
];

export default function EcosystemPlatforms() {
  const [activeGroup, setActiveGroup] = useState<string>('defi-trading');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const currentGroup = platformGroups.find(g => g.id === activeGroup) || platformGroups[0];

  return (
    <section id="ecosystem" className="py-24 bg-nardiha-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            THE <span className="gradient-text">ECOSYSTEM</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            19 specialized platforms across DeFi, Gaming, Infrastructure, and Enterprise,
            creating the most comprehensive Web3 ecosystem in the world.
          </p>
        </motion.div>

        {/* Group Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {platformGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeGroup === group.id
                  ? `bg-gradient-to-r ${group.accentColor} text-white shadow-lg shadow-purple-500/30`
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {group.title}
              <span className="ml-2 text-xs opacity-70">({group.platforms.length})</span>
            </button>
          ))}
        </motion.div>

        {/* Group Header */}
        <motion.div
          key={currentGroup.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${currentGroup.accentColor} bg-clip-text text-transparent mb-3`}>
            {currentGroup.title}
          </h3>
          <p className="text-gray-400 text-lg">
            {currentGroup.subtitle}
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <motion.div
          key={`grid-${currentGroup.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-24"
        >
          {currentGroup.platforms.map((platform, index) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              index={index}
            />
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">19+</div>
            <div className="text-gray-400">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">4</div>
            <div className="text-gray-400">Sectors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">$500M+</div>
            <div className="text-gray-400">Protected Assets</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-400">Chains Supported</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlatformCard({ platform, index }: { platform: Platform; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = platform.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-12 items-center`}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-6">
        {/* Platform Number */}
        <div className={`text-8xl font-bold bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent opacity-20`}>
          {platform.number}
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center shadow-lg`}
        >
          <Icon size={40} className="text-white" />
        </motion.div>

        {/* Title */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {platform.title}
          </h3>
          <p className={`text-xl bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent font-semibold`}>
            {platform.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          {platform.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {platform.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="flex items-start text-gray-400"
            >
              <span className={`mr-3 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.gradient} flex-shrink-0`} />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="pt-4">
          <Button variant="outline" size="md">
            Learn More →
          </Button>
        </div>
      </div>

      {/* Visual Side */}
      <div className="flex-1">
        <Card variant="gradient" className="h-96 relative overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

          {/* Large Icon Display */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <Icon size={150} className="text-white/20" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-r ${platform.gradient} blur-3xl opacity-30`}
              />
            </motion.div>
          </div>

          {/* Animated corner accents */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.gradient} opacity-10 blur-3xl z-20`} />
          <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${platform.gradient} opacity-10 blur-3xl z-20`} />

          {/* Platform ID Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${platform.gradient} text-white`}>
              #{platform.number}
            </span>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
