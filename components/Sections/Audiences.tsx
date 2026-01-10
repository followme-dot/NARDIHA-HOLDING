'use client';

import Card from '../UI/Card';
import { Gamepad2, TrendingUp, Code, Star } from 'lucide-react';

export default function Audiences() {
  const audiences = [
    {
      icon: Gamepad2,
      title: 'Gamers & Players',
      description: 'NFT gaming & earning opportunities',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Traders & Investors',
      description: 'Active trading & DeFi platforms',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Code,
      title: 'Studios & Developers',
      description: 'Game development infrastructure',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      icon: Star,
      title: 'Collectors & Fans',
      description: 'Premium collectibles & phygital NFTs',
      gradient: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-nardiha-bg-darker via-purple-950/20 to-nardiha-bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            WHO WE <span className="gradient-text">SERVE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our ecosystem is built for diverse communities, each with unique needs
            and ambitions in the Web3 gaming space.
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card key={index} variant="glass" hover>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-4 magic-pulse`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-gray-400">{audience.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
