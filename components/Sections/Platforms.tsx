'use client';

import Image from 'next/image';
import { CreditCard, Workflow, Wallet, Brain, Swords, Package, Castle } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';

interface Platform {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: any;
  image: string;
  gradient: string;
}

export default function Platforms() {
  const platforms: Platform[] = [
    {
      number: '01',
      title: 'NARI',
      subtitle: 'Fintech Web3 Revolution',
      description: 'Premium metal card with crypto-to-fiat conversion + NARI Dragon Guardian IoT device. Seamless blockchain payments meet physical collectibles.',
      features: [
        'Metal Card (Visa/Mastercard)',
        'Crypto-to-fiat instant conversion',
        'NARI Dragon Guardian IoT',
        'Cashback in NDH tokens',
        'Multi-currency wallet',
      ],
      icon: CreditCard,
      image: '/assets/NARI.png',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      number: '02',
      title: 'ZAPHUB',
      subtitle: 'Enterprise Automation Platform',
      description: 'Self-hosted workflow automation with AI Copilot, marketplace (70/30 split), and 150+ professional templates. The modern alternative to Zapier.',
      features: [
        'AI-powered workflow builder',
        'Marketplace with 70/30 revenue split',
        '150+ pre-built templates',
        'Self-hosted or cloud',
        'Git-like versioning system',
      ],
      icon: Workflow,
      image: '/assets/ZAPHUB.png',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      number: '03',
      title: 'THOR WALLET',
      subtitle: 'Multi-Chain DeFi Wallet',
      description: 'Self-custody wallet with integrated DeFi (staking, yield farming), 6 automated trading strategies, and institutional vault services.',
      features: [
        'Multi-chain support (ETH, Polygon, BSC)',
        '6 automated trading bots',
        'Staking up to 15% APY',
        'Institutional vault with insurance',
        'Fiat on-ramp integration',
      ],
      icon: Wallet,
      image: '/assets/THOR WALLET.png',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      number: '04',
      title: 'NARDIUM',
      subtitle: 'AI-Powered DeFi Super Wallet',
      description: 'DApp wallet featuring 6 AI trading bots, social trading, gamification, whale tracking, and multi-chain support. Trading made intelligent.',
      features: [
        '6 AI trading strategies (DCA, Grid, Arbitrage)',
        'Social trading & copy trading',
        'Gamification with XP and achievements',
        'Whale tracking alerts',
        'Multi-chain analytics dashboard',
      ],
      icon: Brain,
      image: '/assets/NARDIUM.png',
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      number: '05',
      title: 'NARDIHA SANCTUM',
      subtitle: 'NFT Gaming Marketplace',
      description: 'Complete NFT gaming platform with 240+ unique characters, staking (up to 48% APY), PvP/PvE battles, guilds, and integrated marketplace.',
      features: [
        '240+ unique character NFTs',
        'Staking up to 48% APY',
        'PvP/PvE battle system',
        'Guild system with 50 members',
        'Integrated NFT marketplace',
      ],
      icon: Swords,
      image: '/assets/NARDIHA SANCTUM.png',
      gradient: 'from-rose-600 to-pink-600',
    },
    {
      number: '06',
      title: 'SPARKLE TOYS',
      subtitle: 'Phygital NFT Collectibles',
      description: 'Premium physical toys with NFC technology that generate unique NFTs. Mobile app available on Android to scan and manage your collectibles. Bridging physical collectibles with blockchain ownership.',
      features: [
        'Physical toys with NFC chips',
        'Mobile app for Android',
        'Auto-generate unique NFTs on scan',
        'Random attributes (RPG-style)',
        'Limited edition collections',
        'Dual marketplace (physical + digital)',
      ],
      icon: Package,
      image: '/assets/SPARKLE TOYS.png',
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      number: '07',
      title: 'NARDIHA GENESIS REALMS',
      subtitle: 'Gaming NFT SaaS Platform',
      description: 'Multi-blockchain NFT marketplace with rental system, staking pools, DAO governance, and 57-item economy. Gaming assets redefined.',
      features: [
        'NFT rental system (unique in market)',
        'Multi-blockchain (ETH, Polygon, BSC)',
        '4 staking pools (12-35% APY)',
        'DAO governance with NDH token',
        '57-item in-game economy',
      ],
      icon: Castle,
      image: '/assets/NARDIHA GENESIS REALMS.png',
      gradient: 'from-indigo-600 to-blue-600',
    },
  ];

  return (
    <section id="platforms" className="py-12 sm:py-24 bg-nardiha-bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            OUR <span className="gradient-text">PLATFORMS</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
            Seven integrated platforms working in harmony to deliver the most
            comprehensive Web3 gaming and fintech ecosystem.
          </p>
        </div>

        {/* Platforms List */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={platform.number}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 sm:gap-8 lg:gap-12 items-center`}
              >
                {/* Visual Side - Platform Image - PRIMERO en móviles */}
                <div className="w-full lg:flex-1 order-1 lg:order-none">
                  <Card variant="gradient" className="h-48 sm:h-64 md:h-80 lg:h-96 relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="relative z-10 w-full h-full">
                      <Image
                        src={platform.image}
                        alt={platform.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {/* Animated corner accent */}
                    <div className={`absolute top-0 right-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br ${platform.gradient} opacity-10 blur-3xl z-20`} />
                    <div className={`absolute bottom-0 left-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-tr ${platform.gradient} opacity-10 blur-3xl z-20`} />
                  </Card>
                </div>

                {/* Content Side */}
                <div className="w-full lg:flex-1 space-y-4 sm:space-y-6 order-2 lg:order-none">
                  {/* Platform Number - más pequeño en móvil */}
                  <div className={`text-5xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent opacity-20`}>
                    {platform.number}
                  </div>

                  {/* Icon - más pequeño en móvil */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center magic-pulse`}>
                    <Icon size={28} className="text-white sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                      {platform.title}
                    </h3>
                    <p className={`text-base sm:text-lg lg:text-xl bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent font-semibold`}>
                      {platform.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 sm:space-y-3">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 text-sm sm:text-base">
                        <span className={`mr-2 sm:mr-3 mt-1.5 sm:mt-1 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${platform.gradient} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-2 sm:pt-4">
                    <Button variant="outline" size="md" className="text-sm sm:text-base">
                      Learn More →
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
