'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MagicLoadingScreenProps {
  onComplete: () => void;
}

export default function MagicLoadingScreen({ onComplete }: MagicLoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const LOADING_DURATION = 8000; // 8 segundos para ver la experiencia completa

  useEffect(() => {
    if (!containerRef.current) return;

    let animationFrameId: number;
    const startTime = Date.now();

    // THREE.JS SETUP con fondo negro
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // NEGRO TOTAL

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // POST-PROCESSING (BLOOM PARA POLVO ESTELAR)
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.8,  // Intensidad bloom
      0.4,  // Radio
      0.85  // Threshold
    );
    composer.addPass(bloomPass);

    // CREAR POLVO ESTELAR (partículas flotantes)
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color(0x7C3AED), // Púrpura
      new THREE.Color(0xEC4899), // Rosa
      new THREE.Color(0x3B82F6), // Azul
      new THREE.Color(0xF59E0B), // Dorado
      new THREE.Color(0xFFFFFF)  // Blanco
    ];

    // Inicializar partículas distribuidas en todo el espacio
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Distribuir en toda la pantalla con mayor concentración en el centro
      const distance = Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      // Color aleatorio de la paleta
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Tamaños variados para efecto de profundidad
      sizes[i] = Math.random() * 3 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // SHADER PARA POLVO ESTELAR CON BRILLOS
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;

        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          // Pulsación sutil de las estrellas
          float pulse = sin(time * 2.0 + position.x * 0.5) * 0.5 + 0.5;
          vAlpha = pulse;

          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Crear estrella circular con glow
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);

          if (dist > 0.5) discard;

          // Glow suave
          float alpha = (1.0 - (dist * 2.0)) * vAlpha;
          alpha = pow(alpha, 1.5);

          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ANIMATION LOOP
    let time = 0;

    function animate() {
      const elapsed = (Date.now() - startTime);
      const progressPercent = Math.min((elapsed / LOADING_DURATION) * 100, 100);
      time += 0.01;
      material.uniforms.time.value = time;

      // Actualizar progreso
      setProgress(progressPercent);

      // Movimiento flotante suave del polvo estelar
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Movimiento ondulante
        positions[i3] += Math.sin(time * 0.5 + i) * 0.02;
        positions[i3 + 1] += Math.cos(time * 0.3 + i) * 0.02;
        positions[i3 + 2] += Math.sin(time * 0.4 + i) * 0.015;

        // Mantener las partículas en un rango cercano
        if (Math.abs(positions[i3]) > 100) positions[i3] *= 0.99;
        if (Math.abs(positions[i3 + 1]) > 100) positions[i3 + 1] *= 0.99;
        if (Math.abs(positions[i3 + 2]) > 50) positions[i3 + 2] *= 0.99;
      }
      geometry.attributes.position.needsUpdate = true;

      // Rotación lenta de todas las partículas
      particles.rotation.y += 0.0002;
      particles.rotation.x += 0.0001;

      // Completar cuando llegue al 100%
      if (progressPercent >= 100) {
        // Pequeño delay antes de completar para suavizar transición
        setTimeout(() => {
          onComplete();
        }, 500);
        return;
      }

      composer.render();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      composer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      {/* Canvas Container - Polvo estelar de fondo */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Logo NARDIHA - GRANDE Y CENTRADO - SIN GLOW DETRÁS */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* Logo SIN efectos detrás - integrado con el fondo negro */}
          <motion.div
            animate={{
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <Image
              src="/assets/logo.png"
              alt="NARDIHA"
              width={350}
              height={350}
              className="w-auto h-auto"
              priority
              quality={100}
            />
          </motion.div>
        </motion.div>

        {/* Texto NARDIHA HOLDINGS */}
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold tracking-[0.4em] text-white/95 mt-12 relative z-10"
        >
          NARDIHA HOLDINGS
        </motion.h1>

        {/* Texto mágico: "Loading your entry..." */}
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-sm md:text-base text-purple-300/80 mt-6 tracking-[0.2em] uppercase"
        >
          Loading your entry to the NARDIHA universe
        </motion.p>
      </div>

      {/* Partículas atómicas flotando por TODA la pantalla - Como luciérnagas en el espacio */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {[...Array(80)].map((_, i) => {
          // Distribuir partículas por TODA la pantalla
          const startX = Math.random() * 100; // % de la pantalla
          const startY = Math.random() * 100;

          // Movimiento gravitatorio muy lento y sutil
          const moveX = (Math.random() - 0.5) * 30; // Movimiento horizontal pequeño
          const moveY = (Math.random() - 0.5) * 40; // Movimiento vertical pequeño

          // Determinar si es oro o blanco
          const isGold = Math.random() > 0.4;
          const color = isGold ? 'from-amber-200 to-yellow-400' : 'from-white to-gray-200';

          return (
            <motion.div
              key={i}
              className={`absolute w-[2px] h-[2px] bg-gradient-to-br ${color} rounded-full`}
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                filter: 'blur(0.5px)',
              }}
              animate={{
                x: [0, moveX, 0],
                y: [0, moveY, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 12, // Movimiento MUY lento (8-20 segundos)
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Partículas más brillantes - como estrellas distantes */}
        {[...Array(40)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const moveX = (Math.random() - 0.5) * 20;
          const moveY = (Math.random() - 0.5) * 25;

          return (
            <motion.div
              key={`star-${i}`}
              className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)',
              }}
              animate={{
                x: [0, moveX, 0],
                y: [0, moveY, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 10 + Math.random() * 15, // Aún más lento (10-25 segundos)
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: 'linear',
              }}
            />
          );
        })}

        {/* Partículas doradas muy sutiles - polvo cósmico */}
        {[...Array(30)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const drift = (Math.random() - 0.5) * 50; // Deriva lenta

          return (
            <motion.div
              key={`cosmic-${i}`}
              className="absolute w-[1px] h-[1px] bg-amber-300/60 rounded-full"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                filter: 'blur(0.3px)',
              }}
              animate={{
                x: [0, drift * 0.3, 0],
                y: [0, drift * 0.5, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10, // Súper lento (15-25 segundos)
                repeat: Infinity,
                delay: Math.random() * 12,
                ease: 'linear',
              }}
            />
          );
        })}
      </div>

      {/* Barra de progreso en la parte inferior - VISIBLE DESDE EL INICIO */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full max-w-lg px-8 z-30">
        {/* Barra de progreso con gradiente mágico */}
        <div className="w-full h-2 bg-gray-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-purple-500/40">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 relative"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          >
            {/* Efecto de brillo que se mueve */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </div>

        {/* Porcentaje - MÁS VISIBLE */}
        <motion.p
          initial={{ opacity: 1 }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-white font-mono text-xl tracking-wider font-bold"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </div>
  );
}
