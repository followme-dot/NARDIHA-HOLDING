'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Personal Information',
          text: 'We collect personal information that you voluntarily provide when using our platforms, including but not limited to: name, email address, wallet addresses, phone number, and payment information.',
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          text: 'We automatically collect certain information when you use our services, including: IP address, browser type, device information, usage data, cookies, and blockchain transaction data.',
        },
        {
          subtitle: '1.3 Blockchain Data',
          text: 'Transactions on blockchain networks are public by nature. We may collect and analyze blockchain data including wallet addresses, transaction history, and smart contract interactions.',
        },
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: '2.1 Service Provision',
          text: 'To provide, maintain, and improve our seven integrated platforms (NARI, ZAPHUB, THOR WALLET, NARDIUM, SANCTUM, SPARKLE TOYS, GENESIS REALMS).',
        },
        {
          subtitle: '2.2 Security & Fraud Prevention',
          text: 'To detect, prevent, and address technical issues, fraud, security incidents, and illegal activities.',
        },
        {
          subtitle: '2.3 Communication',
          text: 'To send you service updates, security alerts, administrative messages, and marketing communications (with your consent).',
        },
        {
          subtitle: '2.4 Analytics & Improvement',
          text: 'To analyze usage patterns, conduct research, and improve our products and services.',
        },
      ],
    },
    {
      title: '3. Information Sharing and Disclosure',
      content: [
        {
          subtitle: '3.1 Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, including payment processors, cloud hosting, analytics, and customer support.',
        },
        {
          subtitle: '3.2 Legal Requirements',
          text: 'We may disclose your information if required by law, regulation, legal process, or governmental request.',
        },
        {
          subtitle: '3.3 Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.',
        },
        {
          subtitle: '3.4 Consent',
          text: 'We may share your information with your explicit consent or at your direction.',
        },
      ],
    },
    {
      title: '4. Data Security',
      content: [
        {
          subtitle: '4.1 Security Measures',
          text: 'We implement industry-standard security measures including encryption, secure socket layer (SSL) technology, firewalls, and access controls to protect your personal information.',
        },
        {
          subtitle: '4.2 Wallet Security',
          text: 'We never store your private keys. You maintain full control over your cryptocurrency wallets. We recommend using hardware wallets for additional security.',
        },
        {
          subtitle: '4.3 Data Breach Protocol',
          text: 'In the event of a data breach, we will notify affected users within 72 hours in accordance with applicable data protection laws.',
        },
      ],
    },
    {
      title: '5. Your Rights and Choices',
      content: [
        {
          subtitle: '5.1 Access and Correction',
          text: 'You have the right to access, update, and correct your personal information at any time through your account settings.',
        },
        {
          subtitle: '5.2 Data Portability',
          text: 'You can request a copy of your personal data in a structured, machine-readable format.',
        },
        {
          subtitle: '5.3 Deletion',
          text: 'You may request deletion of your personal information, subject to legal obligations and legitimate business interests.',
        },
        {
          subtitle: '5.4 Marketing Opt-Out',
          text: 'You can opt out of marketing communications at any time by clicking the unsubscribe link in emails or adjusting your account preferences.',
        },
        {
          subtitle: '5.5 Do Not Track',
          text: 'We currently do not respond to "Do Not Track" signals from browsers.',
        },
      ],
    },
    {
      title: '6. Cookies and Tracking Technologies',
      content: [
        {
          subtitle: '6.1 Use of Cookies',
          text: 'We use cookies and similar technologies to enhance user experience, analyze trends, administer the website, and gather demographic information.',
        },
        {
          subtitle: '6.2 Types of Cookies',
          text: 'We use essential cookies (required for service operation), functional cookies (enhance functionality), analytics cookies (understand usage), and advertising cookies (deliver relevant ads).',
        },
        {
          subtitle: '6.3 Cookie Management',
          text: 'You can control cookies through your browser settings. Note that disabling cookies may limit functionality.',
        },
      ],
    },
    {
      title: '7. International Data Transfers',
      content: [
        {
          subtitle: '7.1 Global Operations',
          text: 'We operate globally with headquarters in Panama and Delaware. Your information may be transferred to and processed in countries other than your country of residence.',
        },
        {
          subtitle: '7.2 Data Protection',
          text: 'We implement appropriate safeguards for international data transfers, including standard contractual clauses and compliance with applicable data protection frameworks.',
        },
      ],
    },
    {
      title: '8. Children\'s Privacy',
      content: [
        {
          subtitle: '8.1 Age Restriction',
          text: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.',
        },
        {
          subtitle: '8.2 Parental Notice',
          text: 'If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete such information.',
        },
      ],
    },
    {
      title: '9. Third-Party Links',
      content: [
        {
          subtitle: '9.1 External Websites',
          text: 'Our platforms may contain links to third-party websites. We are not responsible for the privacy practices of external sites.',
        },
        {
          subtitle: '9.2 Blockchain Explorers',
          text: 'Blockchain transactions are publicly visible on block explorers. We do not control these third-party services.',
        },
      ],
    },
    {
      title: '10. Data Retention',
      content: [
        {
          subtitle: '10.1 Retention Period',
          text: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.',
        },
        {
          subtitle: '10.2 Blockchain Immutability',
          text: 'Please note that blockchain transactions are immutable and cannot be deleted once recorded on the blockchain.',
        },
      ],
    },
    {
      title: '11. Regulatory Compliance',
      content: [
        {
          subtitle: '11.1 GDPR Compliance',
          text: 'For users in the European Economic Area, we comply with the General Data Protection Regulation (GDPR).',
        },
        {
          subtitle: '11.2 CCPA Compliance',
          text: 'For California residents, we comply with the California Consumer Privacy Act (CCPA).',
        },
        {
          subtitle: '11.3 KYC/AML',
          text: 'We implement Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures as required by applicable regulations.',
        },
      ],
    },
    {
      title: '12. Changes to This Privacy Policy',
      content: [
        {
          subtitle: '12.1 Updates',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.',
        },
        {
          subtitle: '12.2 Notification',
          text: 'We will notify you of material changes via email or through prominent notice on our platforms at least 30 days before changes take effect.',
        },
        {
          subtitle: '12.3 Continued Use',
          text: 'Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.',
        },
      ],
    },
    {
      title: '13. Contact Us',
      content: [
        {
          subtitle: '13.1 Privacy Inquiries',
          text: 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:',
        },
        {
          subtitle: 'Email',
          text: 'privacy@nardihaholdings.com',
        },
        {
          subtitle: 'Mail',
          text: 'NARDIHA Holdings\nData Protection Officer\nPanama City, Panama / Wilmington, Delaware, USA',
        },
        {
          subtitle: '13.2 Response Time',
          text: 'We will respond to all legitimate privacy requests within 30 days.',
        },
      ],
    },
  ];

  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      lastUpdated="January 15, 2025"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <p className="text-gray-300 leading-relaxed">
            At <strong className="text-white">NARDIHA Holdings</strong>, we are committed to protecting your privacy
            and maintaining the security of your personal information. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your data when you use our seven integrated platforms and services.
          </p>
        </div>
      </motion.div>

      {sections.map((section, sectionIndex) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + sectionIndex * 0.05 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          <div className="space-y-6">
            {section.content.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="bg-nardiha-bg-card/30 backdrop-blur-sm border border-nardiha-purple/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-purple-400 mb-3">{item.subtitle}</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>
      ))}

      {/* Effective Date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-16 p-6 bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl"
      >
        <p className="text-sm text-gray-400">
          <strong className="text-white">Effective Date:</strong> January 15, 2025
        </p>
        <p className="text-sm text-gray-400 mt-2">
          <strong className="text-white">Version:</strong> 1.0
        </p>
        <p className="text-sm text-gray-500 mt-4">
          This Privacy Policy applies to all NARDIHA Holdings platforms: NARI, ZAPHUB, THOR WALLET, NARDIUM,
          NARDIHA SANCTUM, SPARKLE TOYS, and GENESIS REALMS.
        </p>
      </motion.div>
    </PageLayout>
  );
}
