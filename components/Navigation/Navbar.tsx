'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../UI/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#platforms', label: 'Core Platforms' },
    { href: '#journey', label: 'Journey' },
    { href: '#leadership', label: 'Leadership' },
  ];

  const ecosystemGroups = [
    { id: 'defi-trading', label: 'DeFi & Trading', count: 5 },
    { id: 'gaming-metaverse', label: 'Gaming & Metaverse', count: 4 },
    { id: 'infrastructure-identity', label: 'Infrastructure & Identity', count: 5 },
    { id: 'enterprise-compliance', label: 'Enterprise & Compliance', count: 5 },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-nardiha-bg-darker/95 backdrop-blur-md border-b border-nardiha-purple/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/assets/logo.png"
                alt="NARDIHA Holdings"
                width={100}
                height={100}
                className="w-auto h-auto object-contain group-hover:drop-shadow-glow-purple transition-all"
              />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">
              NARDIHA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group text-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-logo group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Ecosystem Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEcosystemOpen(true)}
              onMouseLeave={() => setEcosystemOpen(false)}
            >
              <button className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group">
                Ecosystem
                <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${ecosystemOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-logo group-hover:w-full transition-all duration-300" />
              </button>

              {/* Dropdown Menu */}
              {ecosystemOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-nardiha-bg-darker/95 backdrop-blur-md border border-nardiha-purple/30 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden">
                  <div className="py-2">
                    <Link
                      href="#ecosystem"
                      className="block px-4 py-2 text-white font-semibold hover:bg-white/5 transition-colors border-b border-white/10"
                    >
                      View All Platforms
                      <span className="text-xs text-purple-400 ml-2">(19)</span>
                    </Link>
                    {ecosystemGroups.map((group) => (
                      <Link
                        key={group.id}
                        href={`#ecosystem`}
                        className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm"
                      >
                        <span>{group.label}</span>
                        <span className="text-xs text-purple-400 ml-2">({group.count})</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-nardiha-purple/20">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Ecosystem Section */}
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="#ecosystem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white font-semibold mb-2"
                >
                  Ecosystem <span className="text-xs text-purple-400">(19 platforms)</span>
                </Link>
                <div className="pl-4 space-y-2">
                  {ecosystemGroups.map((group) => (
                    <Link
                      key={group.id}
                      href="#ecosystem"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {group.label} <span className="text-xs text-purple-400">({group.count})</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
