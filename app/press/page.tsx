'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { motion } from 'framer-motion';
import { Download, Calendar, ExternalLink, Mail, FileText, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'January 15, 2025',
      title: 'NARDIHA Holdings Announces Launch of Seven Integrated Web3 Platforms',
      excerpt: 'Revolutionary gaming and fintech conglomerate unveils comprehensive ecosystem serving global users across blockchain, DeFi, and NFT gaming.',
      link: '#',
    },
    {
      date: 'January 10, 2025',
      title: 'NARI Metal Card Pre-Orders Surpass 50,000 in First Week',
      excerpt: 'Premium crypto-to-fiat card with Dragon Guardian IoT device sees massive early adoption.',
      link: '#',
    },
    {
      date: 'January 5, 2025',
      title: 'NARDIHA Sanctum NFT Collection Reaches $5M in Trading Volume',
      excerpt: '240+ unique characters with up to 48% APY staking rewards attract thousands of collectors.',
      link: '#',
    },
    {
      date: 'December 20, 2024',
      title: 'NARDIHA Holdings Establishes Dual Headquarters in Panama and Delaware',
      excerpt: 'Strategic positioning enables global operations and regulatory compliance.',
      link: '#',
    },
  ];

  const mediaAssets = [
    {
      icon: ImageIcon,
      title: 'Brand Assets',
      description: 'Logos, color palettes, and brand guidelines',
      file: 'nardiha-brand-kit.zip',
      size: '45 MB',
    },
    {
      icon: FileText,
      title: 'Company Fact Sheet',
      description: 'Key statistics, milestones, and company information',
      file: 'nardiha-factsheet.pdf',
      size: '2.1 MB',
    },
    {
      icon: ImageIcon,
      title: 'Executive Photos',
      description: 'High-resolution photos of leadership team',
      file: 'executive-photos.zip',
      size: '120 MB',
    },
    {
      icon: ImageIcon,
      title: 'Product Screenshots',
      description: 'Platform interfaces and user experience visuals',
      file: 'product-screenshots.zip',
      size: '85 MB',
    },
  ];

  const keyFacts = [
    { label: 'Founded', value: 'January 2025' },
    { label: 'Headquarters', value: 'Panama & Delaware' },
    { label: 'Platforms', value: '7 Integrated Solutions' },
    { label: 'Focus', value: 'Web3 Gaming & Fintech' },
    { label: 'Team Size', value: '50+ Global Experts' },
    { label: 'Funding', value: 'Self-Funded / Bootstrapped' },
  ];

  return (
    <PageLayout
      title="Press & Media"
      subtitle="Latest news, press releases, and media resources from NARDIHA Holdings"
    >
      {/* Press Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Mail className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Media Inquiries</h2>
              <p className="text-gray-300 mb-3">
                For press inquiries, interviews, or media requests, please contact our communications team.
              </p>
              <a
                href="mailto:press@nardihaholdings.com"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors font-medium"
              >
                press@nardihaholdings.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Facts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Quick Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {keyFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-4 text-center hover:border-nardiha-purple/60 transition-all"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{fact.label}</p>
              <p className="text-white font-bold text-sm">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Recent Press Releases */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Recent Press Releases</h2>
        <div className="space-y-4">
          {pressReleases.map((release, index) => (
            <motion.article
              key={release.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6 hover:border-nardiha-purple/60 transition-all hover:shadow-glow-purple group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">{release.date}</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {release.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{release.excerpt}</p>
                  <a
                    href={release.link}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors text-sm font-medium"
                  >
                    Read Full Release
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Media Kit */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Media Kit & Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaAssets.map((asset, index) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6 hover:border-nardiha-purple/60 transition-all hover:shadow-glow-purple group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <asset.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{asset.title}</h3>
                  <p className="text-sm text-gray-400">{asset.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{asset.size}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">About NARDIHA Holdings</h2>
        <div className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">NARDIHA Holdings</strong> is a pioneering Web3 gaming and fintech conglomerate
              founded in January 2025, operating from dual headquarters in Panama City, Panama and Wilmington, Delaware.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We operate seven integrated platforms spanning the blockchain ecosystem:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li><strong className="text-purple-400">NARI</strong> - Premium metal card with crypto-to-fiat conversion and IoT device</li>
              <li><strong className="text-purple-400">ZAPHUB</strong> - Enterprise workflow automation with AI Copilot</li>
              <li><strong className="text-purple-400">THOR WALLET</strong> - Multi-chain DeFi wallet with automated trading strategies</li>
              <li><strong className="text-purple-400">NARDIUM</strong> - AI-powered super wallet with social trading and gamification</li>
              <li><strong className="text-purple-400">NARDIHA SANCTUM</strong> - NFT gaming marketplace with staking and battles</li>
              <li><strong className="text-purple-400">SPARKLE TOYS</strong> - Phygital NFT collectibles with NFC technology</li>
              <li><strong className="text-purple-400">GENESIS REALMS</strong> - Multi-blockchain NFT SaaS platform with DAO governance</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to make Web3 accessible, engaging, and transformative for everyone—from gamers and traders
              to collectors and institutions. We're building the infrastructure that will power the next generation of
              digital entertainment and finance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Media Coverage */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8">Featured Coverage</h2>
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
          <p className="text-gray-300 mb-4">
            NARDIHA Holdings has been featured in leading Web3, blockchain, and gaming publications worldwide.
          </p>
          <p className="text-sm text-gray-500">
            Coverage portfolio available upon request to verified media contacts.
          </p>
        </div>
      </motion.section>
    </PageLayout>
  );
}
