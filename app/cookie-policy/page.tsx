'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { motion } from 'framer-motion';
import { Cookie, Shield, BarChart3, Target } from 'lucide-react';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: ['Session management', 'Authentication', 'Security features', 'Load balancing'],
      canDisable: false,
      duration: 'Session / 1 year',
    },
    {
      icon: Cookie,
      title: 'Functional Cookies',
      description: 'Enhance functionality and personalization',
      examples: ['Language preferences', 'Theme settings', 'User preferences', 'Saved searches'],
      canDisable: true,
      duration: '1 year',
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our platforms',
      examples: ['Google Analytics', 'Usage statistics', 'Performance monitoring', 'Error tracking'],
      canDisable: true,
      duration: '2 years',
    },
    {
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Deliver relevant advertisements and track campaigns',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media pixels', 'Retargeting'],
      canDisable: true,
      duration: '1-2 years',
    },
  ];

  const specificCookies = [
    {
      name: '_nardiha_session',
      purpose: 'User session management and authentication',
      type: 'Essential',
      duration: 'Session',
    },
    {
      name: '_nardiha_csrf',
      purpose: 'Security - CSRF protection',
      type: 'Essential',
      duration: 'Session',
    },
    {
      name: '_nardiha_theme',
      purpose: 'Remember user theme preference (dark/light mode)',
      type: 'Functional',
      duration: '1 year',
    },
    {
      name: '_nardiha_wallet',
      purpose: 'Remember last connected wallet type',
      type: 'Functional',
      duration: '30 days',
    },
    {
      name: '_ga',
      purpose: 'Google Analytics - Distinguish users',
      type: 'Analytics',
      duration: '2 years',
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Distinguish users',
      type: 'Analytics',
      duration: '24 hours',
    },
    {
      name: '_gat',
      purpose: 'Google Analytics - Throttle request rate',
      type: 'Analytics',
      duration: '1 minute',
    },
    {
      name: '_fbp',
      purpose: 'Facebook Pixel - Track conversions',
      type: 'Marketing',
      duration: '3 months',
    },
  ];

  const thirdPartyServices = [
    {
      service: 'Google Analytics',
      purpose: 'Website analytics and user behavior tracking',
      privacy: 'https://policies.google.com/privacy',
    },
    {
      service: 'Facebook Pixel',
      purpose: 'Advertising and conversion tracking',
      privacy: 'https://www.facebook.com/privacy/policy',
    },
    {
      service: 'Cloudflare',
      purpose: 'CDN and DDoS protection',
      privacy: 'https://www.cloudflare.com/privacypolicy/',
    },
    {
      service: 'Intercom',
      purpose: 'Customer support and chat',
      privacy: 'https://www.intercom.com/legal/privacy',
    },
  ];

  return (
    <PageLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies to enhance your experience"
      lastUpdated="January 15, 2025"
    >
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cookies are small text files that are placed on your device when you visit our websites. They help us
            provide you with a better experience by remembering your preferences, analyzing how you use our platforms,
            and delivering relevant content.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences
            across all <strong className="text-white">NARDIHA Holdings</strong> platforms.
          </p>
        </div>
      </motion.div>

      {/* Types of Cookies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cookieTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-2xl p-6 hover:border-nardiha-purple/60 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-nardiha-purple/20">
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm text-gray-300">{type.duration}</p>
                  </div>
                  <div>
                    {type.canDisable ? (
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs border border-blue-500/30">
                        Optional
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs border border-red-500/30">
                        Required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Specific Cookies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Cookies We Set</h2>
        <div className="bg-nardiha-bg-card/30 backdrop-blur-sm border border-nardiha-purple/30 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-nardiha-bg-card/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Cookie Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Purpose
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-nardiha-purple/20">
                {specificCookies.map((cookie, index) => (
                  <tr key={cookie.name} className="hover:bg-nardiha-bg-card/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-white">{cookie.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{cookie.purpose}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cookie.type === 'Essential'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : cookie.type === 'Functional'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : cookie.type === 'Analytics'
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Third-Party Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Third-Party Cookies</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          We use services from trusted third-party providers who may set their own cookies. We do not control these
          cookies. Please review their privacy policies for more information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {thirdPartyServices.map((service, index) => (
            <motion.div
              key={service.service}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6 hover:border-nardiha-purple/60 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-2">{service.service}</h3>
              <p className="text-sm text-gray-400 mb-3">{service.purpose}</p>
              <a
                href={service.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 hover:text-pink-400 transition-colors"
              >
                Privacy Policy →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Managing Cookies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8">How to Manage Cookies</h2>

        <div className="space-y-6">
          <div className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Most browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                <span>Delete all cookies stored on your device</span>
              </li>
              <li className="text-gray-400 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                <span>Block third-party cookies</span>
              </li>
              <li className="text-gray-400 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                <span>Block cookies from specific websites</span>
              </li>
              <li className="text-gray-400 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                <span>Block all cookies</span>
              </li>
              <li className="text-gray-400 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                <span>Delete cookies when you close your browser</span>
              </li>
            </ul>
          </div>

          <div className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Browser Instructions</h3>
            <div className="space-y-3">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="block text-purple-400 hover:text-pink-400 transition-colors">
                → Google Chrome
              </a>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="block text-purple-400 hover:text-pink-400 transition-colors">
                → Mozilla Firefox
              </a>
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="block text-purple-400 hover:text-pink-400 transition-colors">
                → Safari
              </a>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="block text-purple-400 hover:text-pink-400 transition-colors">
                → Microsoft Edge
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/30 via-red-800/20 to-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">⚠️ Impact of Disabling Cookies</h3>
            <p className="text-gray-300 leading-relaxed">
              Disabling cookies may affect your experience on our platforms. Some features may not work properly,
              and you may need to re-enter information more frequently. Essential cookies cannot be disabled as
              they are necessary for the operation of our services.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Do Not Track */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Do Not Track (DNT)</h2>
        <div className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6">
          <p className="text-gray-300 leading-relaxed">
            We currently do not respond to "Do Not Track" (DNT) signals from web browsers due to the lack of
            industry-wide standards. We will reassess our DNT policy as standards evolve.
          </p>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <p className="text-gray-300">
            <strong className="text-white">Email:</strong> privacy@nardihaholdings.com
          </p>
          <p className="text-gray-300 mt-2">
            <strong className="text-white">Mail:</strong> NARDIHA Holdings, Data Protection Officer,
            Panama City, Panama / Wilmington, Delaware, USA
          </p>
        </div>
      </motion.section>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="p-6 bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl"
      >
        <p className="text-sm text-gray-400">
          <strong className="text-white">Effective Date:</strong> January 15, 2025
        </p>
        <p className="text-sm text-gray-400 mt-2">
          <strong className="text-white">Version:</strong> 1.0
        </p>
        <p className="text-sm text-gray-500 mt-4">
          This Cookie Policy applies to all NARDIHA Holdings platforms: NARI, ZAPHUB, THOR WALLET, NARDIUM,
          NARDIHA SANCTUM, SPARKLE TOYS, and GENESIS REALMS.
        </p>
      </motion.div>
    </PageLayout>
  );
}
