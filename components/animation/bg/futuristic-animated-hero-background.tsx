import React, { useEffect, useState } from 'react';

// Define the shape of the component's props for type safety
interface FuturisticAnimatedHeroBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

interface Particle {
  delay: number;
  size: number;
  x: number;
  y: number;
  hue: number;
  duration: number;
}

const FuturisticAnimatedHeroBackground: React.FC<FuturisticAnimatedHeroBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate particles with more realistic, random distribution
    const generatedParticles = Array.from({ length: 150 }).map((_, i) => ({
      delay: Math.random() * 5, 
      size: Math.random() * 1.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      hue: Math.random() * 360, // Use a wider range of colors for sparkle effect
      duration: Math.random() * 5 + 3,
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <div className={`relative w-[340px] h-[480px] overflow-hidden flex items-center justify-center font-inter ${className}`}>
      
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950"></div>

      {/* Animated Glowing Lines - More dynamic and volumetric */}
      <div className="absolute inset-0 z-10 opacity-70">
        <div className="animated-line top-[25%] left-0 w-3/4 animate-line-flow" style={{ '--color-start': '#4ade80', '--color-end': '#22d3ee', '--duration': '15s' } as React.CSSProperties}></div>
        <div className="animated-line top-[50%] left-0 w-2/3 animate-line-flow" style={{ '--color-start': '#22d3ee', '--color-end': '#6366f1', '--duration': '18s', '--delay': '3s' } as React.CSSProperties}></div>
        <div className="animated-line top-[75%] left-0 w-4/5 animate-line-flow" style={{ '--color-start': '#6366f1', '--color-end': '#4ade80', '--duration': '12s', '--delay': '6s' } as React.CSSProperties}></div>
      </div>

      {/* Animated Geometric Shapes - Now with a single, elegant animation */}
      <div className="absolute inset-0 z-10">
        <div className="animated-shape shape-1 w-24 h-24 top-1/4 left-1/4" style={{ '--delay': '1s', '--duration': '15s', '--size': '96px', '--hue': '220' } as React.CSSProperties}></div>
        <div className="animated-shape shape-2 w-16 h-16 bottom-1/3 right-1/3" style={{ '--delay': '5s', '--duration': '12s', '--size': '64px', '--hue': '120' } as React.CSSProperties}></div>
        <div className="animated-shape shape-3 w-32 h-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ '--delay': '9s', '--duration': '18s', '--size': '128px', '--hue': '260' } as React.CSSProperties}></div>
      </div>
      
      {/* Twinkling Particles - More sophisticated and numerous */}
      {isMounted && particles.map((p, index) => (
        <div
          key={index}
          className="animated-particle absolute rounded-full"
          style={{
            '--size': `${p.size}px`,
            '--x': `${p.x}vw`,
            '--y': `${p.y}vh`,
            '--delay': `${p.delay}s`,
            '--duration': `${p.duration}s`,
            '--hue': p.hue,
          } as React.CSSProperties}
        ></div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-6xl px-4 mx-auto">
        {children}
      </div>

      <style jsx global>{`
        /* --- Professional Fonts --- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* --- Keyframe Animations --- */
        @keyframes line-flow {
          0% {
            transform: translateX(-100%);
            opacity: 0.2;
            filter: drop-shadow(0 0 5px var(--color-start));
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
            filter: drop-shadow(0 0 15px var(--color-end));
          }
          100% {
            transform: translateX(100%);
            opacity: 0.2;
            filter: drop-shadow(0 0 5px var(--color-start));
          }
        }

        @keyframes shape-float {
          0%, 100% {
            transform: rotate(0deg) scale(0.9);
            box-shadow: 0 0 10px hsla(var(--hue), 100%, 70%, 0.5);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            box-shadow: 0 0 20px hsla(var(--hue), 100%, 70%, 0.8);
          }
        }

        @keyframes particle-twinkle {
          0% { 
            opacity: 0.1;
            transform: translate(var(--x), var(--y)) scale(0.8);
          }
          50% { 
            opacity: 0.9; 
            transform: translate(var(--x), var(--y)) scale(1.2);
          }
          100% {
            opacity: 0.1;
            transform: translate(var(--x), var(--y)) scale(0.8);
          }
        }

        /* --- Component Styles --- */
        .animated-line {
          height: 3px;
          border-radius: 9999px;
          background: linear-gradient(to right, var(--color-start), var(--color-end));
          animation: line-flow var(--duration) linear infinite;
        }

        .animated-shape {
          border-radius: 9999px; /* Make them circles or polygons */
          background-color: transparent;
          border: 1px solid hsla(var(--hue), 100%, 70%, 0.5);
          animation: shape-float var(--duration) linear infinite var(--delay);
          filter: drop-shadow(0 0 5px hsla(var(--hue), 100%, 70%, 0.5));
        }

        .animated-particle {
          width: var(--size);
          height: var(--size);
          left: var(--x);
          top: var(--y);
          animation: particle-twinkle var(--duration) ease-in-out infinite alternate var(--delay);
          background-color: hsl(var(--hue), 100%, 80%);
          filter: drop-shadow(0 0 2px hsl(var(--hue), 100%, 80%));
        }
      `}</style>
    </div>
  );
};

export default FuturisticAnimatedHeroBackground;