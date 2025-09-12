import React from 'react';

export default function ExactCircuitAnimation() {
  return (
    <>
      <div className="relative w-full h-[600px] overflow-hidden bg-[#0A101A]">
        
        {/* The Central Glowing Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[5px] z-10 animate-core-glow"></div>

        {/* The Circuit Board Background */}
        <div className="circuit-grid-container absolute inset-0 z-0">
          <div className="circuit-grid circuit-blue absolute inset-0 animate-circuit-flow-blue"></div>
          <div className="circuit-grid circuit-green absolute inset-0 animate-circuit-flow-green"></div>
        </div>
      </div>

      <style jsx>{`
        /* --- Keyframe Animations --- */
        @keyframes core-glow {
          0%, 100% {
            opacity: 0.8;
            filter: drop-shadow(0 0 15px #4ade80) drop-shadow(0 0 30px #22d3ee) drop-shadow(0 0 45px #fff);
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 20px #4ade80) drop-shadow(0 0 40px #22d3ee) drop-shadow(0 0 60px #fff);
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes circuit-flow-blue {
          from {
            background-position-x: 0%;
            opacity: 0.6;
          }
          to {
            background-position-x: 100%;
            opacity: 0.8;
          }
        }

        @keyframes circuit-flow-green {
          from {
            background-position-y: 0%;
            opacity: 0.6;
          }
          to {
            background-position-y: 100%;
            opacity: 0.8;
          }
        }

        /* --- Base Styles --- */
        .circuit-grid-container {
            background: #0A101A;
            transform: perspective(1000px) rotateX(60deg) scale(1.5);
            transform-origin: bottom center;
        }

        .circuit-grid {
            background-size: 50px 50px;
            filter: drop-shadow(0 0 2px) blur(0.5px);
        }

        .circuit-blue {
            background-image: 
              radial-gradient(circle, #22d3ee 1px, transparent 1.5px),
              linear-gradient(to right, #22d3ee 1px, transparent 1px);
            background-repeat: repeat-x, repeat-x;
            animation: circuit-flow-blue 20s linear infinite;
        }
        
        .circuit-green {
            background-image: 
              radial-gradient(circle, #4ade80 1px, transparent 1.5px),
              linear-gradient(to bottom, #4ade80 1px, transparent 1px);
            background-repeat: repeat-y, repeat-y;
            animation: circuit-flow-green 25s linear infinite;
        }
        
        .central-light {
            background: linear-gradient(to right, transparent, #4ade80, #22d3ee, #4ade80, transparent);
            filter: blur(10px);
        }
      `}</style>
    </>
  );
}