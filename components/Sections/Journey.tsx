'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  gradient: string;
}

export default function Journey() {
  const events: TimelineEvent[] = [
    {
      year: '2025',
      title: 'Genesis',
      description: 'January 2025 marked the birth of NARDIHA with our pioneering NFT collection launch on OpenSea. What began as an experimental digital asset series quickly revealed extraordinary market reception, validating our vision and catalyzing the expansion of the NARDIHA universe. This initial success laid the foundation for our comprehensive Web3 ecosystem.\n\nPlatform Architecture Phase: Throughout 2025, we engineered and deployed our integrated seven-platform infrastructure, establishing the technological backbone that would support our multi-dimensional digital economy and interconnected user experiences.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      year: '2026',
      title: 'Institutional Consolidation',
      description: 'The current year represents our strategic formalization phase. We are executing the official establishment of NARDIHA Holdings as a registered corporate entity in Panama, transforming our innovative project into a fully-structured international holding company with robust legal and operational frameworks.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      year: '2027',
      title: 'Token Economy & Physical Integration',
      description: 'Our focus shifts to comprehensive NH token utility expansion and community cultivation. This critical year centers on establishing deep engagement with three core constituencies: players, investors, and traders. We will launch our phygital merchandise line—premium collectible figures that bridge digital and physical ownership—creating tangible value ahead of our flagship gaming title release. This strategic pre-launch period aims to build substantial market momentum and establish NARDIHA as a recognized brand in both Web3 and traditional gaming markets.',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      year: '2028',
      title: 'SANCTUM Realms Launch',
      description: 'Our ultimate vision materializes with the full commercial release of NARDIHA: SANCTUM Realms for PlayStation platforms. By this milestone, our community will have assembled their complete character rosters through authorized marketplace acquisitions, positioned and ready for an unprecedented gaming experience. This represents the convergence of years of development, community building, and technological innovation—transforming NARDIHA from concept to a fully-realized gaming universe.',
      gradient: 'from-violet-600 to-purple-600',
    },
  ];

  return (
    <section id="journey" className="py-24 bg-nardiha-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            OUR <span className="gradient-text">JOURNEY</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            From pioneering NFT launch to building a comprehensive Web3 gaming ecosystem
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-pink-500/20 hidden lg:block" />

          {/* Timeline Events */}
          <div className="space-y-24">
            {events.map((event, index) => (
              <TimelineItem
                key={event.year}
                event={event}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* Year Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
            className={`inline-block mb-4`}
          >
            <div className={`px-6 py-2 rounded-full bg-gradient-to-r ${event.gradient} text-white font-bold text-lg`}>
              {event.year}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}
          >
            {event.title}
          </motion.h3>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-300 leading-relaxed whitespace-pre-line"
          >
            {event.description}
          </motion.div>
        </motion.div>
      </div>

      {/* Center Dot - Hidden on mobile, visible on lg */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={inView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
        className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${event.gradient} shadow-lg shadow-purple-500/50`}>
          <div className="w-full h-full rounded-full bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
        </div>
      </motion.div>

      {/* Spacer for layout balance on desktop */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}
