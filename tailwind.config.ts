import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nardiha: {
          purple: '#7C3AED',
          pink: '#EC4899',
          blue: '#3B82F6',
          gold: '#F59E0B',
          cyan: '#06B6D4',
          'bg-dark': '#0F0A1F',
          'bg-darker': '#070314',
          'bg-card': '#1A0F2E',
        },
      },
      backgroundImage: {
        'gradient-logo': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #3B82F6 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(124,58,237,0.4) 0%, rgba(236,72,153,0.3) 50%, rgba(59,130,246,0.2) 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #4C1D95 0%, #5B21B6 50%, #6B21A8 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(124,58,237,0.5)',
        'glow-pink': '0 0 30px rgba(236,72,153,0.5)',
        'glow-blue': '0 0 30px rgba(59,130,246,0.5)',
        'glow-gold': '0 0 30px rgba(245,158,11,0.5)',
      },
      animation: {
        'magic-pulse': 'magicPulse 2s ease-in-out infinite',
        'particle-float': 'particleFloat 20s ease-in-out infinite',
        'border-rotate': 'borderRotate 3s linear infinite',
      },
      keyframes: {
        magicPulse: {
          '0%, 100%': {
            opacity: '0.8',
            boxShadow: '0 0 20px rgba(124,58,237,0.4)',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 40px rgba(236,72,153,0.6)',
          },
        },
        particleFloat: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        borderRotate: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
