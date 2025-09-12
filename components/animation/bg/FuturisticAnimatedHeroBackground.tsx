import React, { useEffect, useState } from 'react';

// Type definitions for component props
interface AnimatedLineProps {
  delay: string;
  duration: string;
  widthClass: string;
  className?: string;
  startColor: string;
  endColor: string;
}

interface AnimatedShapeProps {
  delay: string;
  duration: string;
  sizeClass: string;
  positionClass: string;
  rotateSpeed: string;
  className?: string;
  color: string;
  shape: 'square' | 'circle' | 'triangle';
}

interface AnimatedParticleProps {
  delay: string;
  size: number;
  x: number;
  y: number;
  className?: string;
  color: string;
}

interface Particle {
  delay: string;
  size: number;
  x: number;
  y: number;
  color: string;
}

interface FuturisticAnimatedHeroBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

// Helper component for a single animated line
const AnimatedLine: React.FC<AnimatedLineProps> = ({
  delay,
  duration,
  widthClass,
  startColor,
  endColor,
  className = ''
}) => (
  <div
    className={`absolute h-0.5 rounded-full ${widthClass} ${className}`}
    style={{
      animation: `lineMove ${duration} ease-in-out infinite alternate ${delay}`,
      background: `linear-gradient(to right, transparent, ${startColor}, ${endColor}, transparent)`,
      filter: `drop-shadow(0 0 8px ${endColor})`,
    }}
  />
);

// Helper component for an animated shape
const AnimatedShape: React.FC<AnimatedShapeProps> = ({
  delay,
  duration,
  sizeClass,
  positionClass,
  rotateSpeed,
  color,
  shape,
  className = ''
}) => {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-lg';
  const clipPath = shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none';

  return (
    <div
      className={`absolute ${sizeClass} border-2 border-opacity-50 ${positionClass} ${shapeClass} ${className}`}
      style={{
        animation: `
          shapeRotate ${rotateSpeed} linear infinite,
          shapeFade ${duration} ease-in-out infinite alternate ${delay}
        `,
        borderColor: color,
        filter: `drop-shadow(0 0 10px ${color})`,
        clipPath: clipPath,
      }}
    ></div>
  );
};

// Helper component for an animated particle
const AnimatedParticle: React.FC<AnimatedParticleProps> = ({
  delay,
  size,
  x,
  y,
  color,
  className = ''
}) => (
  <div
    className={`absolute rounded-full ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      backgroundColor: color,
      animation: `particleTwinkle 3s ease-in-out infinite alternate ${delay}`,
      filter: `drop-shadow(0 0 ${size/2}px ${color})`,
    }}
  ></div>
);

const FuturisticAnimatedHeroBackground1: React.FC<FuturisticAnimatedHeroBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate particles
    const generatedParticles = Array.from({ length: 150 }).map(() => ({
      delay: `${Math.random() * 4}s`,
      size: Math.random() * 2.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: `hsla(${Math.random() * 360}, 100%, 80%, 0.8)`,
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden flex items-center justify-center font-inter bg-gradient-to-br from-[#000d23] via-[#1a0a2a] to-[#0d021c] ${className}`}>
      
      {/* Animated Glowing Lines */}
      <AnimatedLine 
        delay="0s" 
        duration="15s" 
        widthClass="w-3/4" 
        startColor="#6366f1" 
        endColor="#8b5cf6" 
        className="top-1/4"
      />
      <AnimatedLine 
        delay="3s" 
        duration="18s" 
        widthClass="w-2/3" 
        startColor="#06b6d4" 
        endColor="#0891b2" 
        className="top-2/3"
      />
      <AnimatedLine 
        delay="6s" 
        duration="12s" 
        widthClass="w-full" 
        startColor="#ec4899" 
        endColor="#f43f5e" 
        className="top-1/2"
      />
      
      {/* Animated Geometric Shapes */}
      <AnimatedShape 
        delay="1s" 
        duration="10s" 
        sizeClass="w-24 h-24" 
        positionClass="top-1/4 left-1/4" 
        rotateSpeed="30s" 
        color="#8b5cf6"
        shape="square"
      />
      <AnimatedShape 
        delay="5s" 
        duration="12s" 
        sizeClass="w-16 h-16" 
        positionClass="bottom-1/3 right-1/3" 
        rotateSpeed="25s" 
        color="#06b6d4"
        shape="circle"
      />
      <AnimatedShape 
        delay="9s" 
        duration="15s" 
        sizeClass="w-32 h-32" 
        positionClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        rotateSpeed="40s" 
        color="#ec4899"
        shape="triangle"
      />
      
      {/* Twinkling Particles */}
      {isMounted && particles.map((p, index) => (
        <AnimatedParticle 
          key={index} 
          delay={p.delay} 
          size={p.size} 
          x={p.x} 
          y={p.y}
          color={p.color} 
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-4 mx-auto">
        {children}
      </div>

      {/* Enhanced Custom CSS animations */}
      <style jsx global>{`
        /* Global Styles & Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* --- Keyframe Animations --- */
        @keyframes lineMove {
          0% { transform: translateX(-100%); opacity: 0.1; }
          50% { transform: translateX(0%); opacity: 0.8; }
          100% { transform: translateX(100%); opacity: 0.1; }
        }

        @keyframes shapeRotate {
          0%, 100% { transform: rotate(0deg) scale(0.9); }
          50% { transform: rotate(180deg) scale(1.1); }
        }

        @keyframes shapeFade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
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
      `}</style>
    </div>
  );
};

export default FuturisticAnimatedHeroBackground1;