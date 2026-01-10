'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-nardiha-bg-darker via-purple-950/20 to-nardiha-bg-darker" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            OUR <span className="gradient-text">STORY</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <strong className="text-white">NARDIHA Holdings</strong> was born in January 2025 with a bold vision:
              to create the most comprehensive Web3 gaming and fintech ecosystem in the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Founded simultaneously in <strong className="text-nardiha-purple">Panama</strong> and{' '}
              <strong className="text-nardiha-blue">Delaware</strong>, we operate at the intersection
              of blockchain technology, gaming innovation, and financial services.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Today, we serve gamers, traders, collectors, and institutions with cutting-edge
              blockchain solutions across <strong className="text-nardiha-pink">seven integrated platforms</strong>,
              all working in perfect harmony to revolutionize digital entertainment and finance.
            </motion.p>

            {/* NEW: NFT Collectibles Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 p-8 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
                Beyond Gaming: A Universe of Digital Collectibles
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong className="text-white">NARDIHA</strong> is more than just gaming platforms. We've created an entire{' '}
                <strong className="text-purple-400">universe of NFT collectibles</strong> that serve multiple purposes:
                from <strong className="text-pink-400">tradeable digital art</strong> to{' '}
                <strong className="text-blue-400">collateral for DeFi operations</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our NFTs aren't just pixels – they're <strong className="text-purple-400">living assets</strong> within
                an interconnected ecosystem where each piece tells a story and unlocks unique opportunities across our platforms.
                Welcome to the future of <strong className="text-pink-400">digital ownership</strong>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
