import { ArrowRight, Code2, Download, Play, Star, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Navigation } from "../navigation";

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

// This component creates a futuristic, animated background with advanced visual effects
// It features glowing moving lines, geometric shapes, and dynamic particles

const AnimatedLine: React.FC<AnimatedLineProps> = ({
  delay,
  duration,
  startOpacity,
  endOpacity,
  widthClass,
  colorClass,
  className = "",
}) => (
  <div
    className={`absolute h-0.5 ${widthClass} ${colorClass} rounded-full ${className}`}
    style={{
      animation: `lineMove ${duration} ease-in-out infinite alternate ${delay}`,
      opacity: startOpacity,
      filter: `drop-shadow(0 0 5px ${colorClass.split("-")[1]})`,
    }}
  />
);

const AnimatedShape: React.FC<AnimatedShapeProps> = ({
  delay,
  duration,
  sizeClass,
  positionClass,
  rotateSpeed,
  className = "",
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
  className = "",
}) => (
  <div
    className={`absolute bg-white rounded-full ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      animation: `particleTwinkle 3s ease-in-out infinite alternate ${delay}`,
      filter: `drop-shadow(0 0 ${size / 2}px rgba(255,255,255,0.7))`,
    }}
  ></div>
);

const HeroSection: React.FC = () => {
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
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center font-inter bg-gradient-to-br from-gray-900 via-teal-900 to-indigo-900">
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
      {isMounted &&
        particles.map((p, index) => (
          <AnimatedParticle
            key={index}
            delay={p.delay}
            size={p.size}
            x={p.x}
            y={p.y}
          />
        ))}
      
      {/* Hero Content */}
      <div className="relative z-10 text-center bg-transparent p-8 max-w-5xl mx-auto backdrop-blur-md rounded-xl shadow-2xl border border-white/10 transform transition-all duration-700 hover:backdrop-blur-lg">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-white">
              Professional Animation Library
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 bg-purple-500/20 text-purple-300 text-xs rounded-full px-2 py-1">
              <Star className="w-3 h-3" />
              Premium
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white animate-fade-in-up">
            <span className="block">Stunning</span>
            <span className="block bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent">
              Tailwind CSS
            </span>
            <span className="block">Animations</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Discover, customize, and implement professional-grade animations for
            your web projects.
            <span className="text-white font-medium">
              {" "}
              Copy-paste ready code
            </span>{" "}
            with detailed documentation and live previews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up delay-200">
            <button className="group border border-teal-300 bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-700 hover:to-teal-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
              <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
              Explore Animations
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/5 backdrop-blur-md border border-white/10 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto flex items-center justify-center transition-all duration-300 hover:bg-white/10">
              <Code2 className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
              View Documentation
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-slate-400 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>50,000+ downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

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

export default HeroSection;
