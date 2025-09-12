import React, { useEffect, useState } from 'react';

interface GameBackgroundProps {
  gameTitle?: string;
  className?: string;
}

const GameBackground2: React.FC<GameBackgroundProps> = ({ 
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

      {/* Main Square Grid Container - Now much larger */}
      <div className="main-grid-container relative w-[95vw] h-[95vh] border-2 border-purple-800/50 rounded-lg z-10 animate-grid-pulse">
        
        {/* Inner Grid Pattern - simulated with repeating gradients */}
        <div className="absolute inset-0 grid-pattern"></div>

        {/* Animated Light Lines - Horizontal (more of them) */}
        <div className="animated-light-line light-line-h-1 top-[20%]"></div>
        <div className="animated-light-line light-line-h-2 top-[40%]"></div>
        <div className="animated-light-line light-line-h-3 top-[60%]"></div>
        <div className="animated-light-line light-line-h-4 top-[80%]"></div>

        {/* Animated Light Lines - Vertical (more of them) */}
        <div className="animated-light-line light-line-v-1 left-[20%]"></div>
        <div className="animated-light-line light-line-v-2 left-[40%]"></div>
        <div className="animated-light-line light-line-v-3 left-[60%]"></div>
        <div className="animated-light-line light-line-v-4 left-[80%]"></div>
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
        }

        /* --- Keyframe Animations --- */
        @keyframes grid-pulse {
          0%, 100% {
            box-shadow: 0 0 15px var(--line-color-1), 0 0 30px rgba(var(--line-color-1), 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px var(--line-color-2), 0 0 50px rgba(var(--line-color-2), 0.7);
            transform: scale(1.005); /* Subtle scale for a softer pulse */
          }
        }

        @keyframes light-line-flow-horizontal {
          0% {
            left: -10%; /* Start slightly off-grid */
            opacity: 0.1;
          }
          50% {
            left: 50%; /* Move through the middle of the grid */
            opacity: 1;
            box-shadow: 0 0 20px var(--line-color-1);
          }
          100% {
            left: 110%; /* End slightly off-grid */
            opacity: 0.1;
          }
        }

        @keyframes light-line-flow-vertical {
          0% {
            top: -10%; /* Start slightly off-grid */
            opacity: 0.1;
          }
          50% {
            top: 50%; /* Move through the middle of the grid */
            opacity: 1;
            box-shadow: 0 0 20px var(--line-color-2);
          }
          100% {
            top: 110%; /* End slightly off-grid */
            opacity: 0.1;
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
          background-color: rgba(0, 0, 0, 0.2); /* Make it more transparent */
          position: absolute; /* Ensure it stays in place relative to the viewport */
          box-sizing: border-box; /* Include padding and border in width/height */
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
          /* Adjusted to span the full width/height of the parent grid container */
          width: 100%; 
          height: 8px; /* Thickness of the light line */
          background: linear-gradient(to right, transparent, var(--line-color-1), var(--line-color-2), var(--line-color-1), transparent);
          filter: blur(4px) drop-shadow(0 0 15px var(--line-color-1));
          animation: light-line-flow-horizontal 10s ease-in-out infinite;
          opacity: 0;
          /* Removed 'left: 0;' as it's handled by animation */
        }
        /* Override for vertical lines */
        .animated-light-line[class*="light-line-v-"] {
          height: 100%; 
          width: 8px;
          background: linear-gradient(to bottom, transparent, var(--line-color-2), var(--line-color-1), var(--line-color-2), transparent);
          animation: light-line-flow-vertical 12s ease-in-out infinite;
          /* Removed 'top: 0;' as it's handled by animation */
        }

        /* Specific delays for light lines to create a staggered effect */
        .light-line-h-1 { animation-delay: 0s; }
        .light-line-h-2 { animation-delay: 2.5s; }
        .light-line-h-3 { animation-delay: 5s; }
        .light-line-h-4 { animation-delay: 7.5s; }

        .light-line-v-1 { animation-delay: 1s; }
        .light-line-v-2 { animation-delay: 3.5s; }
        .light-line-v-3 { animation-delay: 6s; }
        .light-line-v-4 { animation-delay: 8.5s; }


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

export default GameBackground2;