import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const platforms = [
    { name: 'NARI', href: '#platforms' },
    { name: 'ZAPHUB', href: '#platforms' },
    { name: 'THOR WALLET', href: '#platforms' },
    { name: 'NARDIUM', href: '#platforms' },
    { name: 'NARDIHA SANCTUM', href: '#platforms' },
    { name: 'SPARKLE TOYS', href: '#platforms' },
    { name: 'GENESIS REALMS', href: '#platforms' },
  ];

  const company = [
    { name: 'About', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '#contact' },
    { name: 'Press', href: '/press' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ];

  return (
    <footer className="bg-nardiha-bg-darker border-t border-nardiha-purple/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <Image
                  src="/assets/logo.png"
                  alt="NARDIHA Holdings"
                  width={100}
                  height={100}
                  className="w-auto h-auto object-contain group-hover:drop-shadow-glow-purple transition-all"
                />
              </div>
              <span className="text-lg font-bold gradient-text">NARDIHA</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              The future of Web3 gaming is here.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/nardihaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nardiha-bg-card border border-nardiha-purple/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-nardiha-purple transition-all hover:shadow-glow-purple"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/nardihaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nardiha-bg-card border border-nardiha-purple/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-nardiha-purple transition-all hover:shadow-glow-purple"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/nardihaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nardiha-bg-card border border-nardiha-purple/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-nardiha-purple transition-all hover:shadow-glow-purple"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Platforms Column */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Platforms
            </h4>
            <ul className="space-y-2">
              {platforms.map((platform) => (
                <li key={platform.name}>
                  <Link
                    href={platform.href}
                    className="text-gray-400 text-sm hover:text-nardiha-purple transition-colors"
                  >
                    {platform.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-nardiha-purple transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
              Legal
            </h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-nardiha-purple transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-nardiha-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 NARDIHA HOLDINGS. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              Built with cutting-edge Web3 technology in Panama & Delaware
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
