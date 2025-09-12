import React, { useState, useEffect } from "react";

const StepLoading = ({ initialProgress = 0 }) => {
  const [progress, setProgress] = useState(initialProgress);
  const [subText, setSubText] = useState("Initializing Game Engine");
  const [completedStages, setCompletedStages] = useState([]);

  // Define loading stages with their corresponding progress thresholds
  const loadingStages = [
    { threshold: 20, text: "Loading Core Modules..." },
    { threshold: 40, text: "Compiling Shaders & Textures..." },
    { threshold: 60, text: "Synchronizing Game Data..." },
    { threshold: 80, text: "Establishing Secure Connection..." },
    { threshold: 100, text: "Optimizing Performance..." },
  ];

  useEffect(() => {
    console.log("LoadingPro mounted, progress:", progress); // Log to confirm component mounts

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSubText("Game Loaded!");
          setCompletedStages(loadingStages.map((stage) => stage.text)); // Mark all as complete
          return 100;
        }

        // Update subText and completedStages based on progress
        let currentStageText = "";
        const newCompletedStages = [...completedStages];

        loadingStages.forEach((stage) => {
          if (prev >= stage.threshold - 5) {
            // Activate stage slightly before its threshold visually
            if (!newCompletedStages.includes(stage.text)) {
              newCompletedStages.push(stage.text);
            }
          }
          if (prev < stage.threshold) {
            if (!currentStageText) {
              // Set current stage text only once
              currentStageText = stage.text;
            }
          }
        });

        setCompletedStages(newCompletedStages);
        if (currentStageText) {
          setSubText(currentStageText);
        } else if (prev >= 100) {
          setSubText("Game Loaded!");
        }

        return prev + 1;
      });
    }, 1000); // Slightly faster interval for more dynamic feel

    return () => clearInterval(interval);
  }, [initialProgress, completedStages]); // Re-run effect if initialProgress or completedStages changes

  const totalSegments = 50; // Number of small squares for the progress bar

  return (
    // Main container - adaptable to its parent, not full screen.
    // Added a min-h-[18rem] for a slightly larger and more impressive presence.
    <div className="relative w-[340px] h-[480px] font-cinzel group perspective  mx-auto p-10 rounded-xl bg-black shadow-2xl overflow-hidden font-sans text-white flex flex-col justify-center">
      {/* Background abstract grid/dots - subtle and not full screen */}
      <div className="absolute inset-0 bg-dots-grid opacity-15 animate-background-pan"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/40 to-transparent"></div>
      {/* Subtle scanline overlay for retro-futuristic effect */}
      <div className="scanline-overlay absolute inset-0 opacity-10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* The Progress Bar Container */}
        <div className="segmented-progress-bar-container">
          {Array.from({ length: totalSegments }).map((_, index) => (
            <div
              key={index}
              className={`progress-segment ${
                (index / totalSegments) * 100 < progress ? "active" : ""
              }`}
              style={{ animationDelay: `${index * 0.02}s` }} // Staggered activation
            ></div>
          ))}
          {/* Animated shards layer 1 */}
          <div className="shards-layer shards-layer-1"></div>
          {/* Animated shards layer 2 */}
          <div className="shards-layer shards-layer-2"></div>
          {/* Animated shards layer 3 */}
          <div className="shards-layer shards-layer-3"></div>
        </div>

        {/* Text and Percentage */}
        <div className="mt-8 text-center w-full">
          <div className="flex justify-between items-end text-sm mb-2 px-2">
            <h1 className="text-2xl md:text-3xl tracking-wide text-cyan-400 font-bold animate-glitch-text">
              Loading<span className="dot-blink-1">.</span>
              <span className="dot-blink-2">.</span>
              <span className="dot-blink-3">.</span>
            </h1>
            <p className="text-xl font-bold tracking-widest text-white animate-fade-in-out-strong">
              {progress}%
            </p>
          </div>
          <p className="text-md text-gray-300 mt-2 animate-fade-in-out">
            {subText}
          </p>
        </div>

        {/* Checkbox List for Loading Stages */}
        <div className="mt-8 w-full max-w-md text-left text-gray-400 text-sm">
          {loadingStages.map((stage, index) => (
            <div key={index} className="flex items-center mb-2 animate-fade-in">
              <div
                className={`stage-indicator mr-3 ${
                  completedStages.includes(stage.text) ? "completed" : ""
                }`}
              ></div>
              <span
                className={`${
                  completedStages.includes(stage.text)
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                {stage.text}
              </span>
            </div>
          ))}
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
        }

        /* Segmented Progress Bar */
        .segmented-progress-bar-container {
          position: relative;
          width: 100%;
          height: 1.8rem;
          background-color: rgba(255, 255, 255, 0.08);
          border-radius: 8px; /* Slightly more defined corners for segments */
          overflow: hidden;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(34, 211, 238, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: grid;
          grid-template-columns: repeat(var(--total-segments, 50), 1fr); /* Dynamically set segments */
          gap: 2px; /* Small gap between segments */
          padding: 2px;
        }

        .progress-segment {
          background-color: rgba(34, 211, 238, 0.1); /* Default segment color */
          border-radius: 2px;
          transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          opacity: 0.8;
          height: 100%;
        }

        .progress-segment.active {
          background: linear-gradient(
            90deg,
            #22d3ee 0%, /* Cyan-400 */
            #0ea5e9 50%, /* Sky-500 */
            #8b5cf6 100% /* Violet-500 */
          ); /* Multi-color gradient for active segments */
          box-shadow: 0 0 5px #22d3ee, 0 0 10px #0ea5e9; /* Stronger glow for active segments */
          opacity: 1;
          animation: segment-activate 0.5s ease-out forwards;
        }

        @keyframes segment-activate {
          0% { transform: scaleY(0.5); opacity: 0.5; }
          100% { transform: scaleY(1); opacity: 1; }
        }

        .progress-bar-glow-scan { /* Removed as progress segments handle visual */
          display: none;
        }

        /* Shard Layers */
        .shards-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          transform-style: preserve-3d; /* Enable 3D transforms */
          perspective: 1000px;
        }

        .shards-layer-1 { animation: shards-animate-1 18s linear infinite; }
        .shards-layer-2 { animation: shards-animate-2 22s linear infinite reverse; }
        .shards-layer-3 { animation: shards-animate-3 14s linear infinite; } /* New layer animation */

        /* Base styles for all pseudo-element shards */
        .shards-layer::before,
        .shards-layer::after {
          content: '';
          position: absolute;
          background-color: transparent; /* Changed to transparent for border-based shards */
          border-radius: 2px;
          opacity: 0;
          filter: drop-shadow(0 0 8px); /* Stronger glow */
          transform-origin: center center;
          backface-visibility: hidden; /* Prevent flickering */
        }

        /* Shard A (Blue Triangular) - Layer 1 */
        .shards-layer-1::before {
          top: -25%; left: 15%;
          width: 25px; height: 25px;
          border-top: 12px solid #22d3ee; border-left: 12px solid #22d3ee; border-bottom: 12px solid transparent; border-right: 12px solid transparent;
          transform: rotate(45deg);
          animation: shard-float-pulse 12s infinite ease-in-out 0s;
          box-shadow: 0 0 20px #22d3ee;
        }

        /* Shard B (Purple Trapezoid) - Layer 1 */
        .shards-layer-1::after {
          bottom: -20%; right: 25%;
          width: 40px; height: 12px;
          background-color: #a78bfa;
          transform: skewX(-25deg);
          animation: shard-float-pulse 12s infinite ease-in-out 4s;
          box-shadow: 0 0 20px #a78bfa;
        }

        /* Shard C (Cyan Small Square) - Layer 2 */
        .shards-layer-2::before {
          top: -15%; left: 45%;
          width: 18px; height: 18px;
          background-color: #0ea5e9;
          transform: rotate(20deg);
          animation: shard-float-pulse 12s infinite ease-in-out 8s;
          box-shadow: 0 0 20px #0ea5e9;
        }

        /* Shard D (Pink Elongated Triangle) - Layer 2 */
        .shards-layer-2::after {
          top: -30%; right: 10%;
          width: 30px; height: 15px;
          border-top: 8px solid #f472b6; border-left: 15px solid #f472b6; border-bottom: 8px solid transparent; border-right: 15px solid transparent;
          transform: rotate(-35deg);
          animation: shard-float-pulse 12s infinite ease-in-out 12s;
          box-shadow: 0 0 20px #f472b6;
        }

        /* Shard E (New - Green Line) - Layer 3 */
        .shards-layer-3::before {
          top: 10%; left: 5%;
          width: 2px; height: 30px;
          background-color: #4ade80; /* Green-400 */
          transform: rotate(90deg);
          animation: shard-float-pulse 10s infinite ease-in-out 2s;
          box-shadow: 0 0 15px #4ade80;
        }
        /* Shard F (New - Thin Purple) - Layer 3 */
        .shards-layer-3::after {
          bottom: 5%; right: 5%;
          width: 35px; height: 3px;
          background-color: #c084fc; /* Violet-400 */
          transform: rotate(45deg);
          animation: shard-float-pulse 10s infinite ease-in-out 7s;
          box-shadow: 0 0 15px #c084fc;
        }

        /* Scanline Overlay */
        .scanline-overlay {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
          );
          animation: scanline 2s infinite linear;
        }

        /* Checkbox List Styles */
        .stage-indicator {
          width: 1rem;
          height: 1rem;
          border: 1px solid #22d3ee; /* Cyan border */
          border-radius: 3px;
          background-color: rgba(34, 211, 238, 0.1);
          transition: all 0.3s ease-in-out;
          position: relative;
        }

        .stage-indicator.completed {
          background-color: #4ade80; /* Green-400 */
          border-color: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: check-fade 0.5s ease-out forwards;
        }
        .stage-indicator.completed::after {
          content: '✓'; /* Checkmark for completed */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.8rem;
          color: #1a202c; /* Dark text for contrast */
          opacity: 0;
          animation: check-mark-appear 0.5s ease-out forwards 0.2s;
        }
        @keyframes check-mark-appear {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        /* Keyframe animations */
        @keyframes background-pulse {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 10% 10%; }
        }

        @keyframes animate-background-pan {
          from { background-position: 0% 0%; }
          to { background-position: 200% 200%; }
        }

        @keyframes shards-animate-1 {
          0% { transform: translateX(-50%) rotateY(0deg) rotateZ(0deg); }
          100% { transform: translateX(50%) rotateY(360deg) rotateZ(180deg); }
        }

        @keyframes shards-animate-2 {
          0% { transform: translateX(50%) rotateY(0deg) rotateZ(0deg); }
          100% { transform: translateX(-50%) rotateY(360deg) rotateZ(-180deg); }
        }

        @keyframes shards-animate-3 {
          0% { transform: translateY(-50%) rotateX(0deg); }
          100% { transform: translateY(50%) rotateX(360deg); }
        }

        @keyframes shard-float-pulse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1) perspective(100px) translateZ(0px);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-8px) rotate(15deg) scale(1.1) perspective(100px) translateZ(5px);
            opacity: 1;
          }
          75% {
            transform: translateY(8px) rotate(-15deg) scale(0.9) perspective(100px) translateZ(-5px);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes fade-in-out {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes fade-in-out-strong {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }


        @keyframes scan-effect {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(calc(100% + 1.5rem)); /* Progress bar width + some overlap */
            opacity: 0.6;
          }
          100% {
            transform: translateX(calc(100% + 1.5rem));
            opacity: 0;
          }
        }

        @keyframes scanline {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }

        @keyframes glitch-text {
          0%, 100% {
            text-shadow: 0 0 5px rgba(34, 211, 238, 0.7), 0 0 10px rgba(139, 92, 246, 0.5);
            transform: translate(0, 0);
          }
          20% {
            text-shadow: 2px 2px 5px rgba(34, 211, 238, 0.7), -2px -2px 10px rgba(139, 92, 246, 0.5);
            transform: translate(-1px, 1px);
          }
          40% {
            text-shadow: -2px 0 5px rgba(34, 211, 238, 0.7), 2px 0 10px rgba(139, 92, 246, 0.5);
            transform: translate(1px, -1px);
          }
          60% {
            text-shadow: 0 -2px 5px rgba(34, 211, 238, 0.7), 0 2px 10px rgba(139, 92, 246, 0.5);
            transform: translate(-1px, -1px);
          }
          80% {
            text-shadow: 0 0 5px rgba(34, 211, 238, 0.7), 0 0 10px rgba(139, 92, 246, 0.5);
            transform: translate(1px, 1px);
          }
        }

        @keyframes dot-blink {
          0%, 100% { opacity: 0; }
          25% { opacity: 1; }
          50% { opacity: 1; }
          75% { opacity: 0; }
        }
        .dot-blink-1 { animation: dot-blink 1.5s infinite steps(1) 0s; }
        .dot-blink-2 { animation: dot-blink 1.5s infinite steps(1) 0.5s; }
        .dot-blink-3 { animation: dot-blink 1.5s infinite steps(1) 1s; }


      `}</style>
    </div>
  );
};

export default StepLoading;
