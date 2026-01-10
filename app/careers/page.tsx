'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Zap, Users, TrendingUp, Heart } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Blockchain Engineer',
      department: 'Engineering',
      location: 'Remote / Panama',
      type: 'Full-time',
      description: 'Build the future of Web3 gaming infrastructure with cutting-edge blockchain technology.',
    },
    {
      title: 'Product Manager - DeFi',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Lead product strategy for our DeFi wallet platforms and drive innovation.',
    },
    {
      title: 'Smart Contract Auditor',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure the security and reliability of our smart contract infrastructure.',
    },
    {
      title: 'Game Economy Designer',
      department: 'Gaming',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design engaging tokenomics and game economies for our NFT gaming platforms.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Scale our platform infrastructure to support millions of users globally.',
    },
    {
      title: 'Marketing Lead - Web3',
      department: 'Marketing',
      location: 'Remote / Panama',
      type: 'Full-time',
      description: 'Drive growth and brand awareness in the Web3 gaming space.',
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours and autonomy.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest blockchain, AI, and gaming technologies.',
    },
    {
      icon: TrendingUp,
      title: 'Equity & Tokens',
      description: 'Competitive equity packages and platform token allocations.',
    },
    {
      icon: Users,
      title: 'World-Class Team',
      description: 'Collaborate with industry veterans from top tech and gaming companies.',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and mental wellness support.',
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear advancement paths.',
    },
  ];

  return (
    <PageLayout
      title="Careers at NARDIHA"
      subtitle="Join us in building the future of Web3 gaming and digital finance"
    >
      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
            Why NARDIHA?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At NARDIHA Holdings, we're not just building products—we're creating the infrastructure
            that will power the next generation of gaming, finance, and digital experiences. We're
            a global team of builders, dreamers, and innovators united by a shared vision: to make
            Web3 accessible, engaging, and transformative for everyone.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Founded in 2025 with operations in Panama and Delaware, we operate <strong className="text-purple-400">seven
            integrated platforms</strong> serving millions of users worldwide. If you're passionate about blockchain,
            gaming, and pushing the boundaries of what's possible, we want to hear from you.
          </p>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6 hover:border-nardiha-purple/60 transition-all hover:shadow-glow-purple"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6 hover:border-nardiha-purple/60 transition-all hover:shadow-glow-purple group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {position.department}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {position.location}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{position.description}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white whitespace-nowrap hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Our Hiring Process</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Application Review</h3>
              <p className="text-gray-400">
                Our team reviews your application and resume within 5 business days.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Initial Screening</h3>
              <p className="text-gray-400">
                30-minute video call with our recruiting team to discuss your experience and interests.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Technical Interview</h3>
              <p className="text-gray-400">
                Deep dive into your technical skills with our engineering team (1-2 hours).
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Team & Culture Fit</h3>
              <p className="text-gray-400">
                Meet potential teammates and leadership to ensure mutual alignment.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
              5
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Offer</h3>
              <p className="text-gray-400">
                Receive your offer and welcome to the NARDIHA family!
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center"
      >
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don't see the right role?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We're always looking for exceptional talent. Send us your resume and let us know how you can contribute.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
