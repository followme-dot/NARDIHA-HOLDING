'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  lastUpdated?: string;
}

export default function PageLayout({ title, subtitle, children, lastUpdated }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-nardiha-bg-darker via-purple-950/20 to-nardiha-bg-darker">
      {/* Header */}
      <div className="bg-nardiha-bg-darker border-b border-nardiha-purple/20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-nardiha-purple transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-400 leading-relaxed">
                {subtitle}
              </p>
            )}
            {lastUpdated && (
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {lastUpdated}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="prose prose-invert prose-purple max-w-none">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
