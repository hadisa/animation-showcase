"use client";
import React, { useEffect, useState } from 'react';

// Type definitions for component props
interface AnimatedLineProps {
  delay: string;
  duration: string;
  startOpacity: number;
  endOpacity: number;
  widthClass: string;
  colorClass: string;
  className?: string;
}

interface AnimatedShapeProps {
  delay: string;
  duration: string;
  sizeClass: string;
  positionClass: string;
  rotateSpeed: string;
  className?: string;
}

interface AnimatedParticleProps {
  delay: string;
  size: number;
  x: number;
  y: number;
  className?: string;
}

interface Particle {
  delay: string;
  size: number;
  x: number;
  y: number;
}

interface FuturisticAnimatedHeroBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

// This component creates a futuristic, animated background with advanced visual effects
// It features glowing moving lines, geometric shapes, and dynamic particles

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  delay,
  duration,
  startOpacity,
  endOpacity,
  widthClass,
  colorClass,
  className = ''
}) => (
  <div
    className={`absolute h-0.5 ${widthClass} ${colorClass} rounded-full ${className}`}
    style={{
      animation: `lineMove ${duration} ease-in-out infinite alternate ${delay}`,
      opacity: startOpacity,
      filter: `drop-shadow(0 0 5px ${colorClass.split('-')[1]})`,
    }}
  />
);

export const AnimatedShape: React.FC<AnimatedShapeProps> = ({
  delay,
  duration,
  sizeClass,
  positionClass,
  rotateSpeed,
  className = ''
}) => (
  <div
    className={`absolute ${sizeClass} border border-indigo-300/50 rounded-lg ${positionClass} ${className}`}
    style={{
      animation: `
        shapeRotate ${rotateSpeed} linear infinite,
        shapeFade ${duration} ease-in-out infinite alternate ${delay}
      `,
      filter: `drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))`,
    }}
  ></div>
);

const AnimatedParticle: React.FC<AnimatedParticleProps> = ({
  delay,
  size,
  x,
  y,
  className = ''
}) => (
  <div
    className={`absolute bg-white rounded-full ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      animation: `particleTwinkle 3s ease-in-out infinite alternate ${delay}`,
      filter: `drop-shadow(0 0 ${size/2}px rgba(255,255,255,0.7))`,
    }}
  ></div>
);

const AnimatedBg: React.FC<FuturisticAnimatedHeroBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate particles with more realistic distribution
    const generatedParticles = Array.from({ length: 80 }).map((_, i) => ({
      delay: `${Math.random() * 4}s`,
      size: Math.random() * 2.5 + 0.5, // 0.5 to 3px
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <div className={`relative w-[340px] h-[480px] overflow-hidden flex items-center justify-center font-inter bg-gradient-to-br from-gray-900 via-teal-900 to-indigo-900 ${className}`}>
      {/* Enhanced Background Gradient & Overlays */}
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(55, 65, 81, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 70%),
            linear-gradient(125deg, rgba(15, 23, 42, 0.7) 0%, transparent 70%)
          `,
        }}
      ></div>

      {/* Animated Glowing Lines - Enhanced with more dynamic effects */}
      <AnimatedLine 
        delay="0s" 
        duration="15s" 
        startOpacity={0.7} 
        endOpacity={0.3} 
        widthClass="w-3/4" 
        colorClass="bg-gradient-to-r from-transparent via-blue-400 to-transparent" 
        className="top-1/4"
      />
      <AnimatedLine 
        delay="3s" 
        duration="12s" 
        startOpacity={0.6} 
        endOpacity={0.2} 
        widthClass="w-2/3" 
        colorClass="bg-gradient-to-r from-transparent via-cyan-400 to-transparent" 
        className="top-2/3"
      />
      <AnimatedLine 
        delay="6s" 
        duration="18s" 
        startOpacity={0.8} 
        endOpacity={0.4} 
        widthClass="w-full" 
        colorClass="bg-gradient-to-r from-transparent via-indigo-400 to-transparent" 
        className="top-1/2"
      />
      
      {/* Diagonal lines for more dynamic composition */}
      <AnimatedLine 
        delay="2s" 
        duration="20s" 
        startOpacity={0.5} 
        endOpacity={0.2} 
        widthClass="w-1/2" 
        colorClass="bg-gradient-to-r from-transparent via-teal-400 to-transparent" 
        className="top-1/3 rotate-45"
      />
      <AnimatedLine 
        delay="7s" 
        duration="22s" 
        startOpacity={0.4} 
        endOpacity={0.1} 
        widthClass="w-1/2" 
        colorClass="bg-gradient-to-r from-transparent via-purple-400 to-transparent" 
        className="top-2/3 -rotate-45"
      />

      {/* Animated Geometric Shapes - Enhanced with more variety */}
      <AnimatedShape 
        delay="1s" 
        duration="10s" 
        sizeClass="w-24 h-24" 
        positionClass="top-1/4 left-1/4" 
        rotateSpeed="30s" 
      />
      <AnimatedShape 
        delay="5s" 
        duration="12s" 
        sizeClass="w-16 h-16" 
        positionClass="bottom-1/3 right-1/3" 
        rotateSpeed="25s" 
      />
      <AnimatedShape 
        delay="9s" 
        duration="15s" 
        sizeClass="w-32 h-32" 
        positionClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        rotateSpeed="40s" 
      />
      
      {/* Additional shapes for visual richness */}
      <AnimatedShape 
        delay="3s" 
        duration="8s" 
        sizeClass="w-20 h-20 rounded-full" 
        positionClass="top-3/4 left-1/5" 
        rotateSpeed="35s" 
        className="border-cyan-300/40"
      />
      <AnimatedShape 
        delay="7s" 
        duration="14s" 
        sizeClass="w-12 h-12" 
        positionClass="top-1/5 right-1/4" 
        rotateSpeed="20s" 
        className="border-teal-300/60"
      />

      {/* Twinkling Particles */}
      {isMounted && particles.map((p, index) => (
        <AnimatedParticle 
          key={index} 
          delay={p.delay} 
          size={p.size} 
          x={p.x} 
          y={p.y} 
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-4 mx-auto">
        {children}
      </div>

      {/* Enhanced Custom CSS animations */}
      <style>{`
        @keyframes fadeInMoveUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInMoveUp 1s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-100%) rotate(0deg);
            left: -20%;
            opacity: 0.3;
          }
          50% {
            transform: translateX(0%) rotate(0deg);
            left: 50%;
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%) rotate(0deg);
            left: 120%;
            opacity: 0.3;
          }
        }

        @keyframes shapeRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes shapeFade {
          0% { 
            opacity: 0.2;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
          }
          50% { 
            opacity: 0.7;
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
          }
          100% { 
            opacity: 0.2;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
          }
        }

        @keyframes particleTwinkle {
          0% { 
            opacity: 0.1; 
            transform: scale(0.8) translateY(0px);
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.2) translateY(-5px);
          }
          100% { 
            opacity: 0.1; 
            transform: scale(0.8) translateY(0px);
          }
        }

        /* Additional animation for background elements */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBg;