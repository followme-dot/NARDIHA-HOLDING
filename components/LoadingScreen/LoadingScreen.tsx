'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { useLogoPositions } from '@/hooks/useLogoPositions';
import { particleVertexShader, particleFragmentShader } from '@/lib/particleShaders';
import { randomRange } from '@/lib/utils';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

type Phase = 'void' | 'explosion' | 'vortex' | 'convergence' | 'reveal' | 'transition' | 'complete';

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('void');
  const { positions: logoPositions, loading: logoLoading } = useLogoPositions('/assets/logo.png');

  useEffect(() => {
    if (!containerRef.current || logoLoading) return;

    let animationFrameId: number;
    let startTime = Date.now();

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Post-processing for bloom/glow
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,  // Intensity
      0.4,  // Radius
      0.85  // Threshold
    );
    composer.addPass(bloomPass);

    // Particle system
    const particleCount = 20000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x7C3AED), // Purple
      new THREE.Color(0xEC4899), // Pink
      new THREE.Color(0x3B82F6), // Blue
    ];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Start at center
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;

      // Random size
      sizes[i] = randomRange(1, 4);

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Random velocity for explosion
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const speed = randomRange(10, 30);
      velocities[i3] = Math.sin(phi) * Math.cos(theta) * speed;
      velocities[i3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
      velocities[i3 + 2] = Math.cos(phi) * speed;

      originalPositions[i3] = velocities[i3];
      originalPositions[i3 + 1] = velocities[i3 + 1];
      originalPositions[i3 + 2] = velocities[i3 + 2];

      // Set target positions (logo formation or random)
      // Offset logo upward on mobile so text fits below
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const logoYOffset = isMobile ? 3 : 2; // Move logo up

      if (logoPositions.length > 0 && i < logoPositions.length) {
        const logoPos = logoPositions[i];
        targetPositions[i3] = logoPos.x;
        targetPositions[i3 + 1] = logoPos.y + logoYOffset; // Offset upward
        targetPositions[i3 + 2] = logoPos.z;
      } else {
        targetPositions[i3] = randomRange(-30, 30);
        targetPositions[i3 + 1] = randomRange(-30, 30) + logoYOffset;
        targetPositions[i3 + 2] = randomRange(-10, 10);
      }
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particles.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Central glow point for void phase
    const glowGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x7C3AED,
      transparent: true,
      opacity: 0,
    });
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowSphere);

    // Animation loop
    let vortexAngle = 0;
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000; // seconds
      const positions = particles.attributes.position.array as Float32Array;

      // Phase transitions based on time
      if (elapsed < 1) {
        setPhase('void');
        // Void: show central point
        glowMaterial.opacity = Math.sin(elapsed * Math.PI) * 0.8;
      } else if (elapsed < 2.5) {
        setPhase('explosion');
        // Explosion: particles fly outward
        const progress = (elapsed - 1) / 1.5;
        const easeProgress = 1 - Math.pow(1 - progress, 4); // ease-out

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          positions[i3] = originalPositions[i3] * easeProgress;
          positions[i3 + 1] = originalPositions[i3 + 1] * easeProgress;
          positions[i3 + 2] = originalPositions[i3 + 2] * easeProgress;
        }
        glowMaterial.opacity = Math.max(0, 1 - progress);
      } else if (elapsed < 5) {
        setPhase('vortex');
        // Vortex: spinning spiral
        const progress = (elapsed - 2.5) / 2.5;
        vortexAngle += 0.05 * (1 + progress * 3); // Accelerating spin

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const radius = Math.sqrt(
            originalPositions[i3] ** 2 + originalPositions[i3 + 1] ** 2
          );
          const angle = Math.atan2(originalPositions[i3 + 1], originalPositions[i3]) + vortexAngle;

          // Spiral inward
          const spiralRadius = radius * (1 - progress * 0.3);
          positions[i3] = Math.cos(angle) * spiralRadius;
          positions[i3 + 1] = Math.sin(angle) * spiralRadius;
          positions[i3 + 2] = originalPositions[i3 + 2] * (1 - progress * 0.5);
        }
      } else if (elapsed < 6.5) {
        setPhase('convergence');
        // Convergence: form logo
        const progress = (elapsed - 5) / 1.5;
        const easeProgress = progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2; // ease-in-out cubic

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const startX = positions[i3];
          const startY = positions[i3 + 1];
          const startZ = positions[i3 + 2];

          positions[i3] = startX + (targetPositions[i3] - startX) * easeProgress;
          positions[i3 + 1] = startY + (targetPositions[i3 + 1] - startY) * easeProgress;
          positions[i3 + 2] = startZ + (targetPositions[i3 + 2] - startZ) * easeProgress;
        }
      } else if (elapsed < 8) {
        setPhase('reveal');
        // Reveal: logo formed, pulsing
        const pulseProgress = elapsed - 6.5;
        const pulse = Math.sin(pulseProgress * Math.PI * 2) * 0.1;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          positions[i3] = targetPositions[i3] * (1 + pulse);
          positions[i3 + 1] = targetPositions[i3 + 1] * (1 + pulse);
          positions[i3 + 2] = targetPositions[i3 + 2];
        }
      } else if (elapsed < 10) {
        setPhase('transition');
        // Transition: fade out
        const progress = (elapsed - 8) / 2;
        particleMaterial.opacity = 1 - progress;
      } else {
        setPhase('complete');
        onLoadingComplete();
        return;
      }

      particles.attributes.position.needsUpdate = true;
      particleSystem.rotation.z = vortexAngle * 0.1;

      composer.render();
      animationFrameId = requestAnimationFrame(animate);
    };

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
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [logoLoading, logoPositions, onLoadingComplete]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-black" style={{ touchAction: 'none' }}>
      <div ref={containerRef} className="w-full h-full" />

      {/* NARDIHA HOLDINGS text - appears during reveal phase */}
      {phase === 'reveal' && (
        <div className="absolute inset-x-0 bottom-[22%] sm:bottom-[28%] md:bottom-[32%] flex justify-center px-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider gradient-text animate-pulse whitespace-nowrap">
            NARDIHA HOLDINGS
          </h1>
        </div>
      )}

      {/* Transition fade overlay */}
      {phase === 'transition' && (
        <div className="absolute inset-0 bg-black animate-fadeIn" style={{ animationDuration: '2s' }} />
      )}
    </div>
  );
}
