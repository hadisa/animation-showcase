import React, { useState, useEffect } from "react";

const loadingPro1 = ({ initialProgress = 0 }) => {
  const [progress, setProgress] = useState(initialProgress);
  const [subText, setSubText] = useState("Initializing Game Engine");

  useEffect(() => {
    console.log("FuturisticGameLoading mounted, progress:", progress); // Log to confirm component mounts
    // Simulate a loading process from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSubText("Game Loaded!");
          return 100;
        }
        // Simulate different stages of loading
        if (prev < 30) {
          setSubText("Loading Assets...");
        } else if (prev < 60) {
          setSubText("Compiling Shaders...");
        } else if (prev < 90) {
          setSubText("Connecting to Server...");
        } else {
          setSubText("Finalizing Setup...");
        }
        return prev + 1;
      });
    }, 50); // Adjust interval for speed

    return () => clearInterval(interval);
  }, [initialProgress]); // Re-run effect if initialProgress changes

  return (
    // Main container - adaptable to its parent, not full screen.
    // Added a min-h-[12rem] to ensure it has a visible height.
    <div className="relative w-full max-w-2xl mx-auto p-8 rounded-lg bg-gray-900 shadow-2xl overflow-hidden font-sans text-white border border-gray-700 min-h-[12rem] flex flex-col justify-center">
      {/* Background abstract grid/dots - subtle and not full screen */}
      <div className="absolute inset-0 bg-dots-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* The Progress Bar Container */}
        <div className="progress-bar-container">
          {/* Animated shards layer 1 */}
          <div className="shards-layer shards-layer-1"></div>
          {/* Animated shards layer 2 */}
          <div className="shards-layer shards-layer-2"></div>
          {/* The actual progress bar */}
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        {/* Text and Percentage */}
        <div className="mt-8 text-center w-full">
          <div className="flex justify-between items-end text-sm mb-2 px-2">
            <h1 className="text-xl md:text-2xl tracking-wide text-cyan-400 font-semibold animate-pulse-subtle">
              Loading...
            </h1>
            <p className="text-lg font-bold tracking-widest text-white">
              {progress}%
            </p>
          </div>
          <p className="text-sm text-gray-400 animate-fade-in-out">{subText}</p>
        </div>
      </div>

      <style>{`
        /* Import a custom futuristic font if desired, e.g., 'Exo 2' or 'Orbitron' */
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Exo 2', sans-serif;
        }

        /* Abstract background grid dots */
        .bg-dots-grid {
          background-image: radial-gradient(#374151 1px, transparent 1px);
          background-size: 20px 20px;
          animation: background-pulse 10s infinite alternate;
        }

        .progress-bar-container {
          position: relative;
          width: 100%;
          height: 1.5rem; /* Match image height */
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex; /* For shard alignment */
          align-items: center;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(
            90deg,
            #22d3ee 0%,
            #06b6d4 50%, /* Stronger blue */
            #0ea5e9 100% /* Slightly lighter blue */
          );
          border-radius: 9999px;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px #22d3ee, 0 0 20px #0ea5e9; /* More intense glow */
          position: relative;
          z-index: 1; /* Above shards */
        }
        
        /* Shard Layers */
        .shards-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .shards-layer-1 {
          animation: shards-animate-1 15s linear infinite;
        }
        .shards-layer-2 {
          animation: shards-animate-2 18s linear infinite reverse;
        }

        /* Pseudo-elements for the individual shards */
        .shards-layer::before,
        .shards-layer::after {
          content: '';
          position: absolute;
          /* Explicitly define size and transform here to ensure visibility */
          width: 1.5rem; /* Default shard width */
          height: 1.5rem; /* Default shard height */
          transform-origin: center center;
          border-radius: 2px; /* Slight rounding for shards */
          opacity: 0;
          filter: drop-shadow(0 0 5px); /* Glow effect */
        }

        /* Shard A - Blue triangular/angular */
        .shards-layer-1::before {
          top: -20px; left: 10%;
          width: 20px; height: 20px;
          border-top: 10px solid #22d3ee; border-left: 10px solid #22d3ee; border-bottom: 10px solid transparent; border-right: 10px solid transparent;
          transform: rotate(45deg);
          animation: shard-float-pulse 10s infinite ease-in-out 0s;
          box-shadow: 0 0 15px #22d3ee;
        }

        /* Shard B - Purple trapezoid/rectangle */
        .shards-layer-1::after {
          bottom: -15px; right: 20%;
          width: 30px; height: 10px;
          background-color: #a78bfa; /* Violet-400 */
          transform: skewX(-20deg);
          animation: shard-float-pulse 10s infinite ease-in-out 3s;
          box-shadow: 0 0 15px #a78bfa;
        }

        /* Shard C - Cyan small square */
        .shards-layer-2::before {
          top: -10px; left: 40%;
          width: 15px; height: 15px;
          background-color: #0ea5e9; /* Sky-500 */
          transform: rotate(15deg);
          animation: shard-float-pulse 10s infinite ease-in-out 6s;
          box-shadow: 0 0 15px #0ea5e9;
        }

        /* Shard D - Pink elongated triangle */
        .shards-layer-2::after {
          top: -25px; right: 5%;
          width: 25px; height: 12px;
          border-top: 6px solid #f472b6; border-left: 12px solid #f472b6; border-bottom: 6px solid transparent; border-right: 12px solid transparent;
          transform: rotate(-30deg);
          animation: shard-float-pulse 10s infinite ease-in-out 9s;
          box-shadow: 0 0 15px #f472b6;
        }


        /* Keyframe animations */
        @keyframes shards-animate-1 {
          0% { transform: translateX(-50%) rotateY(0deg); }
          100% { transform: translateX(50%) rotateY(360deg); }
        }

        @keyframes shards-animate-2 {
          0% { transform: translateX(50%) rotateY(0deg); }
          100% { transform: translateX(-50%) rotateY(360deg); }
        }

        @keyframes shard-float-pulse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-5px) rotate(10deg) scale(1.05);
            opacity: 1;
          }
          75% {
            transform: translateY(5px) rotate(-10deg) scale(0.95);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        @keyframes fade-in-out {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes background-pulse {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 10% 10%; }
        }
      `}</style>
    </div>
  );
};

export default loadingPro1;
