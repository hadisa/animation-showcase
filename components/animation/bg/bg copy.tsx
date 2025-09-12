import React from 'react';

// A utility function for class names (assumed to be available)
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// --- The Animated Game Background Component ---
interface AnimatedGameBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedGameBackground1({
  className,
  children,
}: AnimatedGameBackgroundProps) {
  return (
    <div className={cn("relative w-full h-screen overflow-hidden font-cinzel text-white bg-[#101918]", className)}>
      
      {/* The base background layer with a subtle texture */}
      <div className="absolute inset-0 z-0 bg-game-texture opacity-30 animate-background-flow"></div>
      
      {/* The main ornate frame for the background, containing the inner space */}
      <div className="absolute inset-4 sm:inset-10 md:inset-16 game-frame p-2">
        {/* The inner space where the main action or content would go */}
        <div className="absolute inset-0.5 rounded-lg bg-[#0e1716] p-2 overflow-hidden">
          {children}
          
          {/* Subtle animated light for a magical effect */}
          <div className="game-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full animate-glow-pulse"></div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
        .font-cinzel {
          font-family: 'Cinzel', serif;
        }
        
        /* --- Textures and Colors --- */
        .bg-game-texture {
            background-image: url("https://i.imgur.com/example_texture.jpg"); /* Replace with your actual texture image */
            background-size: 100%;
        }

        /* --- Frame Styling --- */
        .game-frame {
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .game-frame::before, .game-frame::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("http://googleusercontent.com/file_content/22"); /* Replace with your actual ornate frame image */
            background-size: 100% 100%;
            pointer-events: none;
        }

        .game-frame::before {
            opacity: 0.8;
            filter: drop-shadow(0 0 5px #ffdf80) brightness(1.2);
            animation: border-shine 8s linear infinite;
        }
        
        .game-frame::after {
            opacity: 0.6;
            filter: drop-shadow(0 0 3px #ffdf80) brightness(1.1);
        }
        
        /* --- Animations --- */
        @keyframes background-flow {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100% 100%;
          }
        }
        
        @keyframes border-shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.5;
            filter: blur(20px);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
            filter: blur(30px);
          }
        }

        .game-glow {
            background: radial-gradient(circle at center, rgba(255, 223, 128, 0.4), transparent 70%);
            animation: glow-pulse 6s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}