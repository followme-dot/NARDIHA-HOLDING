'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          subtitle: '1.1 Agreement to Terms',
          text: 'By accessing or using any NARDIHA Holdings platform or service, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.',
        },
        {
          subtitle: '1.2 Platform Coverage',
          text: 'These Terms apply to all seven NARDIHA platforms: NARI, ZAPHUB, THOR WALLET, NARDIUM, NARDIHA SANCTUM, SPARKLE TOYS, and GENESIS REALMS.',
        },
        {
          subtitle: '1.3 Additional Terms',
          text: 'Certain services may have additional terms and conditions. By using those services, you agree to those additional terms.',
        },
      ],
    },
    {
      title: '2. Eligibility and Account Registration',
      content: [
        {
          subtitle: '2.1 Age Requirement',
          text: 'You must be at least 18 years of age to use our services. By using our platforms, you represent and warrant that you meet this age requirement.',
        },
        {
          subtitle: '2.2 Account Creation',
          text: 'You must provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials.',
        },
        {
          subtitle: '2.3 Account Security',
          text: 'You are solely responsible for all activities that occur under your account. Notify us immediately of any unauthorized use.',
        },
        {
          subtitle: '2.4 KYC Requirements',
          text: 'Certain services may require identity verification (KYC) to comply with regulatory requirements. Failure to complete KYC may result in service limitations.',
        },
      ],
    },
    {
      title: '3. Use of Services',
      content: [
        {
          subtitle: '3.1 License Grant',
          text: 'We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our platforms for lawful purposes.',
        },
        {
          subtitle: '3.2 Prohibited Activities',
          text: 'You agree not to: (a) violate any laws or regulations; (b) infringe intellectual property rights; (c) transmit harmful code; (d) engage in fraudulent activities; (e) manipulate markets; (f) harass other users; (g) reverse engineer our software; (h) use bots or automated tools without authorization.',
        },
        {
          subtitle: '3.3 Platform Modifications',
          text: 'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.',
        },
      ],
    },
    {
      title: '4. Cryptocurrency and Blockchain Services',
      content: [
        {
          subtitle: '4.1 Wallet Services',
          text: 'Our wallet services (THOR WALLET, NARDIUM) are non-custodial. You maintain control of your private keys. We never have access to your private keys or funds.',
        },
        {
          subtitle: '4.2 Transaction Risks',
          text: 'Blockchain transactions are irreversible. You are solely responsible for ensuring transaction accuracy. We are not liable for losses due to incorrect addresses or transaction parameters.',
        },
        {
          subtitle: '4.3 Gas Fees',
          text: 'You are responsible for all blockchain network fees (gas fees) associated with your transactions.',
        },
        {
          subtitle: '4.4 Smart Contract Risks',
          text: 'Smart contracts may contain bugs or vulnerabilities. Use at your own risk. We conduct audits but cannot guarantee absolute security.',
        },
        {
          subtitle: '4.5 Market Volatility',
          text: 'Cryptocurrency prices are highly volatile. You acknowledge and accept the risk of potential losses.',
        },
      ],
    },
    {
      title: '5. NFT and Digital Assets',
      content: [
        {
          subtitle: '5.1 Ownership',
          text: 'NFT ownership is recorded on the blockchain. Purchasing an NFT grants you ownership of the token but not necessarily the underlying intellectual property unless explicitly stated.',
        },
        {
          subtitle: '5.2 Trading and Marketplace',
          text: 'Our NFT marketplaces (SANCTUM, GENESIS REALMS, SPARKLE TOYS) facilitate peer-to-peer transactions. We are not a party to user transactions.',
        },
        {
          subtitle: '5.3 Royalties',
          text: 'Certain NFTs may be subject to creator royalties. These are automatically enforced through smart contracts.',
        },
        {
          subtitle: '5.4 Content Rights',
          text: 'You grant us a license to display, reproduce, and distribute your NFTs and associated content for platform operation and marketing.',
        },
      ],
    },
    {
      title: '6. Financial Services and Payments',
      content: [
        {
          subtitle: '6.1 NARI Card Services',
          text: 'NARI card services are subject to additional terms provided by our payment processing partners. Card usage is subject to applicable card network rules.',
        },
        {
          subtitle: '6.2 Payment Processing',
          text: 'We work with third-party payment processors. We are not responsible for payment processor failures or delays.',
        },
        {
          subtitle: '6.3 Fees and Charges',
          text: 'We may charge fees for certain services. All fees are clearly disclosed before you complete transactions.',
        },
        {
          subtitle: '6.4 Refund Policy',
          text: 'Due to the nature of blockchain transactions, most transactions are final and non-refundable. Refunds are handled on a case-by-case basis.',
        },
      ],
    },
    {
      title: '7. Intellectual Property Rights',
      content: [
        {
          subtitle: '7.1 Platform IP',
          text: 'All content, features, and functionality on our platforms are owned by NARDIHA Holdings and are protected by copyright, trademark, and other intellectual property laws.',
        },
        {
          subtitle: '7.2 Trademarks',
          text: 'NARDIHA, NARI, ZAPHUB, THOR WALLET, NARDIUM, SANCTUM, SPARKLE TOYS, and GENESIS REALMS are trademarks of NARDIHA Holdings.',
        },
        {
          subtitle: '7.3 User Content',
          text: 'You retain ownership of content you submit but grant us a worldwide, royalty-free license to use, reproduce, and distribute such content.',
        },
        {
          subtitle: '7.4 DMCA Compliance',
          text: 'We comply with the Digital Millennium Copyright Act. Report copyright infringement to dmca@nardihaholdings.com.',
        },
      ],
    },
    {
      title: '8. Privacy and Data Protection',
      content: [
        {
          subtitle: '8.1 Privacy Policy',
          text: 'Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.',
        },
        {
          subtitle: '8.2 Data Security',
          text: 'We implement reasonable security measures to protect your information, but we cannot guarantee absolute security.',
        },
        {
          subtitle: '8.3 Blockchain Transparency',
          text: 'Blockchain transactions are publicly visible. Do not share sensitive information in transaction memos or smart contract interactions.',
        },
      ],
    },
    {
      title: '9. Disclaimers and Warranties',
      content: [
        {
          subtitle: '9.1 "As Is" Service',
          text: 'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.',
        },
        {
          subtitle: '9.2 No Investment Advice',
          text: 'Nothing on our platforms constitutes financial, investment, legal, or tax advice. Consult professional advisors before making decisions.',
        },
        {
          subtitle: '9.3 Third-Party Services',
          text: 'We are not responsible for third-party services, websites, or content accessed through our platforms.',
        },
        {
          subtitle: '9.4 Accuracy of Information',
          text: 'While we strive for accuracy, we do not warrant that information on our platforms is complete, reliable, or error-free.',
        },
        {
          subtitle: '9.5 Regulatory Compliance',
          text: 'You are responsible for complying with all applicable laws and regulations in your jurisdiction.',
        },
      ],
    },
    {
      title: '10. Limitation of Liability',
      content: [
        {
          subtitle: '10.1 Liability Cap',
          text: 'To the maximum extent permitted by law, NARDIHA Holdings shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.',
        },
        {
          subtitle: '10.2 Maximum Liability',
          text: 'Our total liability shall not exceed the greater of (a) the amount you paid us in the 12 months before the claim, or (b) $100 USD.',
        },
        {
          subtitle: '10.3 Force Majeure',
          text: 'We are not liable for failures or delays caused by circumstances beyond our reasonable control, including natural disasters, wars, pandemics, or network attacks.',
        },
      ],
    },
    {
      title: '11. Indemnification',
      content: [
        {
          subtitle: '11.1 Your Indemnification',
          text: 'You agree to indemnify and hold harmless NARDIHA Holdings, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from: (a) your use of our services; (b) your violation of these Terms; (c) your violation of any rights of another party.',
        },
      ],
    },
    {
      title: '12. Dispute Resolution',
      content: [
        {
          subtitle: '12.1 Governing Law',
          text: 'These Terms are governed by the laws of Panama and the State of Delaware, without regard to conflict of law provisions.',
        },
        {
          subtitle: '12.2 Arbitration',
          text: 'Any dispute arising from these Terms shall be resolved through binding arbitration in Panama City, Panama or Wilmington, Delaware, at our discretion.',
        },
        {
          subtitle: '12.3 Class Action Waiver',
          text: 'You agree to resolve disputes on an individual basis and waive the right to participate in class actions or collective proceedings.',
        },
        {
          subtitle: '12.4 Exceptions',
          text: 'Either party may seek injunctive relief in court for intellectual property violations or urgent matters.',
        },
      ],
    },
    {
      title: '13. Termination',
      content: [
        {
          subtitle: '13.1 Termination by You',
          text: 'You may terminate your account at any time by contacting support or using account deletion features.',
        },
        {
          subtitle: '13.2 Termination by Us',
          text: 'We may suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or legal requirements.',
        },
        {
          subtitle: '13.3 Effect of Termination',
          text: 'Upon termination, your right to use our services ceases immediately. Certain provisions of these Terms survive termination.',
        },
        {
          subtitle: '13.4 Blockchain Permanence',
          text: 'Blockchain transactions and NFTs remain on the blockchain even after account termination.',
        },
      ],
    },
    {
      title: '14. Modifications to Terms',
      content: [
        {
          subtitle: '14.1 Right to Modify',
          text: 'We reserve the right to modify these Terms at any time. Material changes will be notified via email or platform notice.',
        },
        {
          subtitle: '14.2 Effective Date',
          text: 'Updated Terms become effective 30 days after notification, or immediately upon your continued use of services.',
        },
        {
          subtitle: '14.3 Disagreement',
          text: 'If you disagree with changes, you must stop using our services and close your account.',
        },
      ],
    },
    {
      title: '15. General Provisions',
      content: [
        {
          subtitle: '15.1 Entire Agreement',
          text: 'These Terms, together with our Privacy Policy and any additional terms, constitute the entire agreement between you and NARDIHA Holdings.',
        },
        {
          subtitle: '15.2 Severability',
          text: 'If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in full effect.',
        },
        {
          subtitle: '15.3 No Waiver',
          text: 'Our failure to enforce any right or provision shall not constitute a waiver of such right or provision.',
        },
        {
          subtitle: '15.4 Assignment',
          text: 'You may not assign these Terms. We may assign our rights and obligations to any party without notice.',
        },
        {
          subtitle: '15.5 Relationship',
          text: 'Nothing in these Terms creates a partnership, joint venture, or agency relationship.',
        },
      ],
    },
    {
      title: '16. Contact Information',
      content: [
        {
          subtitle: '16.1 Legal Inquiries',
          text: 'For questions about these Terms, contact us at:\n\nEmail: legal@nardihaholdings.com\n\nMail:\nNARDIHA Holdings\nLegal Department\nPanama City, Panama / Wilmington, Delaware, USA',
        },
        {
          subtitle: '16.2 Technical Support',
          text: 'For technical support, visit our Contact page or email support@nardihaholdings.com',
        },
      ],
    },
  ];

  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Legal agreement governing your use of NARDIHA Holdings platforms and services"
      lastUpdated="January 15, 2025"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <p className="text-gray-300 leading-relaxed mb-4">
            Welcome to <strong className="text-white">NARDIHA Holdings</strong>. Please read these Terms of Service
            carefully before using our platforms and services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using any NARDIHA platform (NARI, ZAPHUB, THOR WALLET, NARDIUM, SANCTUM, SPARKLE TOYS,
            GENESIS REALMS), you acknowledge that you have read, understood, and agree to be bound by these Terms.
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

      {/* Acknowledgment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-16 p-8 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-4">Acknowledgment</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          BY USING NARDIHA HOLDINGS SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE
          TO BE BOUND BY THEM. IF YOU DO NOT AGREE, DO NOT USE OUR SERVICES.
        </p>
        <div className="mt-6 pt-6 border-t border-purple-500/30">
          <p className="text-sm text-gray-400">
            <strong className="text-white">Effective Date:</strong> January 15, 2025
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <strong className="text-white">Version:</strong> 1.0
          </p>
        </div>
      </motion.div>
    </PageLayout>
  );
}
