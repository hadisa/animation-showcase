import React, { useState, useEffect, useRef } from "react";

const ProfessionalLoadingSpinner = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger explosion effect when loading completes
          setTimeout(() => setIsExploding(true), 500);
          return 100;
        }
        return prev + 0.5;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getPhaseText = () => {
    const phases = [
      "INITIALIZING QUANTUM CORE",
      "LOADING NEURAL NETWORKS",
      "CALIBRATING HYPERDRIVE",
      "OPTIMIZING REALITY MATRIX",
    ];
    return phases[phase] || "READY FOR IMMERSION";
  };

  return (
    <div className="relative w-[340px] h-[480px] bg-black overflow-hidden flex items-center justify-center p-6 rounded-xl shadow-2xl shadow-cyan-500/20">
      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-20 bg-hex-pattern bg-[length:60px_60px] animate-hex-move" />

      {/* Explosion effect when loading completes */}
      {isExploding && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-64 h-64 bg-cyan-400/20 rounded-full animate-ping-slow" />
          <div className="absolute w-48 h-48 bg-purple-500/20 rounded-full animate-ping-slower" />
          <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full animate-ping-slowest" />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Holographic ring */}
        <div className="relative w-40 h-40 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-pulse" />
          <div className="absolute inset-3 rounded-full border-4 border-purple-500/30 animate-ping-slow" />
          <div className="absolute inset-6 rounded-full border-4 border-blue-500/30 animate-pulse" />


          {/* Central core with progress */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-cyan-400/10 animate-pulse flex items-center justify-center">
              <span className="text-xl font-bold text-cyan-400">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="text-center mb-6 w-full">
          <h2 className="text-lg font-mono font-bold text-cyan-400 mb-4 typewriter">
            {getPhaseText()}
          </h2>

          {/* Animated dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Status indicators */}
        <div className="flex justify-between w-full mt-6">
          {["CPU", "GPU", "RAM", "VRAM"].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-500/30 flex items-center justify-center mb-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <span className="text-cyan-300 text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes hex-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s infinite;
        }

        .animate-ping-slower {
          animation: ping-slow 3s infinite;
          animation-delay: 0.3s;
        }

        .animate-ping-slowest {
          animation: ping-slow 4s infinite;
          animation-delay: 0.6s;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        .animate-shine {
          animation: shine 2s infinite;
        }

        .animate-hex-move {
          animation: hex-move 10s infinite linear;
        }

        .typewriter {
          overflow: hidden;
          border-right: 2px solid #22d3ee;
          white-space: nowrap;
          margin: 0 auto;
          animation: typewriter 2s steps(40, end),
            blink-caret 0.75s step-end infinite;
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #22d3ee;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfessionalLoadingSpinner;
