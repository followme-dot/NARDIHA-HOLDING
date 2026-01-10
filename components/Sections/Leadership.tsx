'use client';

import Card from '../UI/Card';
import { Linkedin } from 'lucide-react';

interface Leader {
  name: string;
  role: string;
  company: string;
  expertise: string;
  initials: string;
  gradient: string;
}

export default function Leadership() {
  const leaders: Leader[] = [
    {
      name: 'Rafael Baena',
      role: 'CEO & CTO',
      company: 'NARDIHA HOLDINGS',
      expertise: 'Full-stack development & blockchain architecture',
      initials: 'RB',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Enrique Pérez',
      role: 'CFO',
      company: 'NARDIHA HOLDINGS',
      expertise: 'Financial strategy & banking operations',
      initials: 'EP',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Carlos',
      role: 'COO',
      company: 'NARDIHA HOLDINGS',
      expertise: 'Operations & design direction',
      initials: 'C',
      gradient: 'from-pink-600 to-rose-600',
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-nardiha-bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">LEADERSHIP</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the visionary team driving innovation in Web3 gaming and fintech,
            combining decades of expertise in technology, finance, and operations.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} variant="glass" hover>
              <div className="flex flex-col items-center text-center">
                {/* Avatar Placeholder */}
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center mb-6 magic-pulse`}>
                  <span className="text-4xl font-bold text-white">
                    {leader.initials}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {leader.name}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent mb-2`}>
                  {leader.role}
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  {leader.company}
                </p>

                {/* Expertise */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {leader.expertise}
                </p>

                {/* Social Links */}
                <button className="flex items-center gap-2 text-gray-400 hover:text-nardiha-purple transition-colors">
                  <Linkedin size={20} />
                  <span className="text-sm">Connect on LinkedIn</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
