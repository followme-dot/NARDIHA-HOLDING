'use client';

import Card from '../UI/Card';
import AnimatedCounter from '../UI/AnimatedCounter';
import { Layers, Shield, Gamepad2 } from 'lucide-react';

export default function ValueProposition() {
  const stats = [
    { value: 100, suffix: 'M+', label: 'Projected Revenue (Y3)' },
    { value: 27, suffix: '', label: 'Integrated Platforms' },
    { value: 500, suffix: 'K+', label: 'Users Projected' },
    { value: 100, suffix: '+', label: 'Smart Contracts' },
    { value: 99.9, suffix: '%', label: 'Uptime SLA' },
    { value: 3, suffix: '', label: 'Blockchains' },
  ];

  const features = [
    {
      icon: Layers,
      title: 'Unified Ecosystem',
      description: 'All 27 platforms work seamlessly together, sharing data and infrastructure for a cohesive user experience.',
    },
    {
      icon: Shield,
      title: 'Blockchain Native',
      description: 'Built on Ethereum, Polygon, and BSC with full Web3 integration, security audits, and decentralized governance.',
    },
    {
      icon: Gamepad2,
      title: 'Gaming First',
      description: 'Designed for gamers, collectors, and Web3 enthusiasts from day one with immersive experiences.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-nardiha-bg-darker via-purple-950 to-nardiha-bg-darker py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            WHY INDUSTRY LEADERS CHOOSE{' '}
            <span className="gradient-text">NARDIHA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powering the next generation of Web3 gaming and DeFi infrastructure
            with cutting-edge technology and proven performance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-nardiha-bg-card/50 rounded-lg border border-nardiha-purple/20 hover:border-nardiha-purple/50 transition-all hover:shadow-glow-purple"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} variant="glass" hover>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-logo flex items-center justify-center mb-4 magic-pulse">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
