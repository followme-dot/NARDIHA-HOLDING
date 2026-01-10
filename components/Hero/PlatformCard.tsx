'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export function PlatformCard({
  icon: Icon,
  title,
  subtitle,
  description,
  href
}: PlatformCardProps) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Background */}
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/10">

        {/* Icon Container */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-purple-400 font-medium mb-3">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More Link */}
        <a
          href={href}
          className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 font-medium group/link"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}
