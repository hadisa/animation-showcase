import React, { useEffect, useState } from 'react';

interface GameBackgroundProps {
  gameTitle?: string;
  className?: string;
}

const GameBackground: React.FC<GameBackgroundProps> = ({ 
  gameTitle = "QUANTUM NEXUS", 
  className = "" 
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden flex items-center justify-center font-['Orbitron'] bg-[#01010a] ${className}`}>
      
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00051a] via-[#05001a] to-[#0a002a]"></div>

      {/* Main Square Grid Container */}
      <div className="main-grid-container relative w-[80vmin] h-[80vmin] border-2 border-purple-800/50 rounded-lg z-10 animate-grid-pulse">
        
        {/* Inner Grid Pattern - simulated with repeating gradients */}
        <div className="absolute inset-0 grid-pattern"></div>

        {/* Animated Light Lines - Horizontal */}
        <div className="animated-light-line light-line-h-1 top-1/4"></div>
        <div className="animated-light-line light-line-h-2 top-3/4"></div>

        {/* Animated Light Lines - Vertical */}
        <div className="animated-light-line light-line-v-1 left-1/4"></div>
        <div className="animated-light-line light-line-v-2 left-3/4"></div>

        {/* Central Glow Point - Matches the image's energy */}
        <div className="central-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Game Title Animation */}
      <div className="absolute z-20 text-center select-none pointer-events-none">
        <h1 className="game-title text-white text-7xl font-bold uppercase tracking-widest leading-none">
          {gameTitle.split('').map((char, index) => (
            <span key={index} className="inline-block animate-title-char-reveal" style={{ animationDelay: `${0.1 * index}s` }}>
              {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for actual space */}
            </span>
          ))}
        </h1>
        <p className="game-subtitle text-purple-400 text-lg mt-4 animate-fade-in" style={{ animationDelay: `${0.1 * gameTitle.length + 0.5}s` }}>
          PRESS START TO BEGIN
        </p>
      </div>

      <style jsx global>{`
        /* --- Font Import --- */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
        
        /* --- CSS Variables --- */
        :root {
          --grid-color: rgba(99, 102, 241, 0.2); /* Indigo-400 */
          --line-color-1: #c084fc; /* Purple-400 */
          --line-color-2: #38bdf8; /* Sky-400 */
          --central-glow-color: #e879f9; /* Fuchsia-400 */
        }

        /* --- Keyframe Animations --- */
        @keyframes grid-pulse {
          0%, 100% {
            box-shadow: 0 0 15px var(--line-color-1), 0 0 30px rgba(var(--line-color-1), 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px var(--line-color-2), 0 0 50px rgba(var(--line-color-2), 0.7);
            transform: scale(1.01);
          }
        }

        @keyframes light-line-flow-horizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0.2;
          }
          50% {
            transform: translateX(0);
            opacity: 1;
            box-shadow: 0 0 20px var(--line-color-1);
          }
          100% {
            transform: translateX(100%);
            opacity: 0.2;
          }
        }

        @keyframes light-line-flow-vertical {
          0% {
            transform: translateY(-100%);
            opacity: 0.2;
          }
          50% {
            transform: translateY(0);
            opacity: 1;
            box-shadow: 0 0 20px var(--line-color-2);
          }
          100% {
            transform: translateY(100%);
            opacity: 0.2;
          }
        }

        @keyframes central-glow-pulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(0.9) translate(-50%, -50%);
            filter: blur(20px) brightness(1.2) drop-shadow(0 0 30px var(--central-glow-color));
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translate(-50%, -50%);
            filter: blur(30px) brightness(1.5) drop-shadow(0 0 50px var(--central-glow-color));
          }
        }

        @keyframes title-char-reveal {
            0% { opacity: 0; transform: translateY(20px) scale(0.8); filter: blur(5px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        /* --- Component Specific Styles --- */
        .main-grid-container {
          background-color: rgba(0, 0, 0, 0.4);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
          background-size: 50px 50px; /* Adjust grid cell size */
          filter: blur(0.5px);
          animation: grid-movement 60s linear infinite;
        }

        @keyframes grid-movement {
            from { background-position: 0 0; }
            to { background-position: 100px 100px; } /* Moves the grid pattern */
        }

        .animated-light-line {
          position: absolute;
          width: 100%; /* For horizontal lines */
          height: 8px; /* Thickness of the light line */
          background: linear-gradient(to right, transparent, var(--line-color-1), var(--line-color-2), var(--line-color-1), transparent);
          filter: blur(4px) drop-shadow(0 0 15px var(--line-color-1));
          animation: light-line-flow-horizontal 10s ease-in-out infinite;
          opacity: 0;
          left: 0; /* Ensures it starts off-screen */
        }
        .light-line-v-1, .light-line-v-2 {
          height: 100%; /* For vertical lines */
          width: 8px;
          background: linear-gradient(to bottom, transparent, var(--line-color-2), var(--line-color-1), var(--line-color-2), transparent);
          animation: light-line-flow-vertical 12s ease-in-out infinite;
          top: 0; /* Ensures it starts off-screen */
        }

        .central-glow {
          width: 60%;
          height: 60%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--central-glow-color) 0%, transparent 60%);
          animation: central-glow-pulse 8s infinite alternate ease-in-out;
        }

        .game-title span {
            animation-fill-mode: backwards; /* Keeps element hidden before animation */
        }
        
        .game-subtitle {
            animation: fade-in 1s ease-out forwards;
            animation-fill-mode: backwards;
            filter: drop-shadow(0 0 5px var(--line-color-1));
        }
      `}</style>
    </div>
  );
};

export default GameBackground;