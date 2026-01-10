'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PlatformCarousel from './PlatformCarousel';
import { ChevronDown } from 'lucide-react';

export default function MagicHero() {
  const [currentPlatform, setCurrentPlatform] = useState(0);

  const platforms = [
    'NARI',
    'ZAPHUB',
    'THOR WALLET',
    'NARDIUM',
    'NARDIHA SANCTUM',
    'SPARKLE TOYS',
    'GENESIS REALMS'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [platforms.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* FONDO: AETHON DIVINUM IMAGE CON EFECTOS MÁGICOS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/aethon-divinum.jpeg"
          alt="NARDIHA Cosmic Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        {/* Overlay Gradiente Sutil - Permite ver la imagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent" />

        {/* Partículas Mágicas de Fondo - Reducidas */}
        <div className="absolute inset-0 magic-particles opacity-30" />
      </div>

      {/* Efecto de Escaneo Vertical */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '0% 100%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.1) 50%, transparent 100%)',
          backgroundSize: '100% 50%',
        }}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto pt-24">

        {/* Subtítulo Superior */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-8 font-medium"
        >
          <span className="inline-block px-4 py-2 border border-purple-500/30 rounded-full backdrop-blur-sm bg-purple-900/20">
            7 Integrated Web3 & Gaming Platforms
          </span>
        </motion.p>

        {/* Título Principal con Efectos Mágicos */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative"
        >
          <span className="block mb-2">THE FUTURE OF</span>
          <span className="block relative inline-block">
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-shift drop-shadow-glow">
              WEB3 GAMING
            </span>
            {/* Efecto de brillo que se mueve */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Línea decorativa debajo */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
              initial={{ width: '0%' }}
              animate={{ width: '80%' }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>
          <span className="block mt-4">IS HERE</span>

          {/* Partículas flotantes alrededor del título */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.h1>

        {/* Texto Animado de Plataformas con Transición Suave */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 h-12 flex items-center justify-center"
        >
          <div className="relative overflow-hidden h-full flex items-center">
            {platforms.map((platform, index) => (
              <motion.span
                key={platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index === currentPlatform ? 1 : 0.2,
                  y: index === currentPlatform ? 0 : 20,
                  scale: index === currentPlatform ? 1.2 : 1,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-bold tracking-wider ${
                  index === currentPlatform
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400'
                    : 'text-gray-500'
                }`}
                style={{
                  filter: index === currentPlatform ? 'drop-shadow(0 0 20px rgba(236,72,153,0.5))' : 'none',
                }}
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          A <span className="text-purple-400 font-medium">global Web3 conglomerate</span> offering integrated solutions for gaming,
          DeFi, fintech, and digital entertainment.
        </motion.p>

        {/* Botones CTA con Efectos Mágicos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
        >
          {/* Botón Principal */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl font-bold text-base overflow-hidden shadow-2xl shadow-purple-500/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Ecosystem
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            {/* Efecto de brillo animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Borde animado */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-pink-400/50 group-hover:ring-pink-400 transition-all" />
          </motion.button>

          {/* Botón Secundario */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl font-bold text-base overflow-hidden hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <span className="relative z-10">Get Started</span>
            {/* Glow en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* CAROUSEL DE PLATAFORMAS */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 w-full px-4 mb-16"
      >
        <PlatformCarousel />
      </motion.div>

      {/* Scroll Indicator Mágico */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
        >
          <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-purple-400 transition-colors relative overflow-hidden">
            <motion.div
              className="w-2 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
              animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-white/70 text-xs uppercase tracking-[0.3em] group-hover:text-purple-400 transition-colors font-medium">
            Scroll
          </p>
          <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-purple-400 transition-colors" />
        </motion.div>
      </motion.div>

      {/* Efectos de Luz en los Bordes */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>
    </section>
  );
}
