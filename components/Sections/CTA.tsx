'use client';

import Button from '../UI/Button';
import { Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-nardiha-bg-darker relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-nardiha-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-nardiha-pink/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            READY TO JOIN THE{' '}
            <span className="gradient-text">WEB3 REVOLUTION?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the future of gaming and finance with NARDIHA.
            Experience the power of seven integrated platforms working as one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-nardiha-purple to-transparent my-16" />

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Email */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-logo flex items-center justify-center flex-shrink-0">
              <Mail size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a
                href="mailto:contact@nardihaholdings.com"
                className="text-white hover:text-nardiha-purple transition-colors text-lg"
              >
                contact@nardihaholdings.com
              </a>
            </div>
          </div>

          {/* Headquarters */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-logo flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Headquarters</p>
              <p className="text-white text-lg">Panama City, Panama</p>
              <p className="text-gray-400 text-sm">US Office: Wilmington, Delaware</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
