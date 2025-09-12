import React from "react";

const GameLoadingInterface = () => {
  return (
    <>
      <div className="flex relative w-[340px] h-[480px]  items-center justify-center bg-black text-white font-sans overflow-hidden">
        <div className="relative flex items-center justify-center p-8 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 animate-fade-in">
          {/* Main animated ring container */}
          <div className="game-loading-ring">
            {/* Inner pulsating glow effect */}
            <div className="ring-glow-inner"></div>
            {/* Outer segmented ring with animation */}
            <div className="ring-segment-1"></div>
            <div className="ring-segment-2"></div>
            <div className="ring-segment-3"></div>
            <div className="ring-segment-4"></div>
            {/* The central pulsating core element (can be replaced with a game icon/glyph) */}
            <div className="central-core-pulsar"></div>
          </div>

          {/* Loading text with animated ellipses */}
          <div className="absolute bottom-4 text-xl tracking-wider text-cyan-400 font-semibold animate-pulse-light">
            Loading
            <span className="dot-animate-1">.</span>
            <span className="dot-animate-2">.</span>
            <span className="dot-animate-3">.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Import a more futuristic font if desired, e.g., 'Orbitron' or 'Exo 2' */
        /* @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap'); */
        /* .font-sans { font-family: 'Orbitron', sans-serif; } */

        .game-loading-ring {
          position: relative;
          width: 10rem;
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: global-ring-spin 8s linear infinite; /* Slower overall spin */
        }

        .ring-glow-inner {
          position: absolute;
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%); /* Cyan-400 glow */
          animation: ring-pulse 2s ease-in-out infinite alternate;
          filter: blur(8px);
        }

        /* Segmented ring styles */
        .ring-segment-1, .ring-segment-2, .ring-segment-3, .ring-segment-4 {
          position: absolute;
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          border: 4px solid transparent;
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.6); /* Cyan glow */
        }

        .ring-segment-1 {
          border-top-color: #22d3ee; /* cyan-400 */
          animation: segment-flow 2s linear infinite forwards;
        }
        .ring-segment-2 {
          border-left-color: #4ade80; /* green-400 */
          animation: segment-flow 2s linear infinite forwards reverse;
          animation-delay: -0.5s;
        }
        .ring-segment-3 {
          border-bottom-color: #a78bfa; /* violet-400 */
          animation: segment-flow 2s linear infinite forwards;
          animation-delay: -1s;
        }
        .ring-segment-4 {
          border-right-color: #f472b6; /* pink-500 */
          animation: segment-flow 2s linear infinite forwards reverse;
          animation-delay: -1.5s;
        }

        .central-core-pulsar {
          position: absolute;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: radial-gradient(circle, #22d3ee 0%, #06b6d4 100%); /* Strong central blue */
          box-shadow: 0 0 20px #22d3ee, 0 0 30px #06b6d4;
          animation: core-pulse 1.5s ease-in-out infinite alternate;
        }
        
        /* Loading text dot animations */
        .dot-animate-1 { animation: dot-fade 1.5s infinite steps(1) 0s; }
        .dot-animate-2 { animation: dot-fade 1.5s infinite steps(1) 0.5s; }
        .dot-animate-3 { animation: dot-fade 1.5s infinite steps(1) 1s; }

        /* Keyframes */
        @keyframes global-ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes segment-flow {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0.5; }
          50% { transform: rotate(180deg) scale(1.0); opacity: 1; }
          100% { transform: rotate(360deg) scale(0.8); opacity: 0.5; }
        }

        @keyframes ring-pulse {
          from { transform: scale(0.9); opacity: 0.6; }
          to { transform: scale(1.0); opacity: 1; }
        }

        @keyframes core-pulse {
          from { transform: scale(0.95); opacity: 0.9; filter: blur(0px); }
          to { transform: scale(1.05); opacity: 1; filter: blur(3px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-light {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes dot-fade {
          0% { opacity: 0; }
          33% { opacity: 1; }
          66% { opacity: 1; }
          100% { opacity: 0; }
        }

      `}</style>
    </>
  );
};

export default GameLoadingInterface;