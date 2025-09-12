import React from "react";

const FuturisticLoading = ({ progress = 30, className = "" }) => {
  return (
    <>
      {/* Main Container - Now flexible and fits parent container */}
      <div
        className={`flex flex-col relative w-[340px] h-[480px]  items-center justify-center p-8 ${className}`}
      >
        {/* The Progress Bar Container */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          {/* The animated shards */}
          <div className="shards-group-1"></div>
          <div className="shards-group-2"></div>
        </div>

        {/* Text and Percentage */}
        <div className="mt-8 text-center">
          <h1 className="text-xl md:text-2xl tracking-wide text-cyan-400 font-semibold animate-pulse">
            Loading...
          </h1>
          <p className="mt-2 text-3xl font-bold tracking-widest text-gray-800 dark:text-white">
            {progress}%
          </p>
        </div>
      </div>

      <style jsx>{`
        .progress-bar-container {
          position: relative;
          width: 100%;
          max-width: 40rem; /* Added max-width for better control */
          height: 1.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(
            90deg,
            #22d3ee 0%,
            #4ade80 50%,
            #81c784 100%
          );
          border-radius: 9999px;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px #22d3ee;
        }

        .shards-group-1,
        .shards-group-2 {
          position: absolute;
          width: 100%;
          height: 100%;
          filter: blur(2px);
        }
        .shards-group-1 {
          animation: shard-flow-1 6s linear infinite;
        }
        .shards-group-2 {
          animation: shard-flow-2 6s linear infinite reverse;
        }

        .shards-group-1::before,
        .shards-group-1::after,
        .shards-group-2::before,
        .shards-group-2::after {
          content: "";
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          background-color: #f472b6;
          transform-origin: center center;
          border-radius: 50%;
          opacity: 0;
        }

        .shards-group-1::before {
          animation: shard-pulse 6s infinite 0s;
        }
        .shards-group-1::after {
          animation: shard-pulse 6s infinite 2s;
        }
        .shards-group-2::before {
          animation: shard-pulse 6s infinite 4s;
        }

        @keyframes shard-flow-1 {
          from {
            transform: translateX(-100%) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          to {
            transform: translateX(100%) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes shard-flow-2 {
          from {
            transform: translateX(100%) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          to {
            transform: translateX(-100%) rotate(-360deg);
            opacity: 0;
          }
        }

        @keyframes shard-pulse {
          0%,
          100% {
            transform: scale(0.5);
            opacity: 0;
          }
          10% {
            transform: scale(1.2);
            opacity: 1;
          }
          90% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.98);
          }
        }
      `}</style>
    </>
  );
};

// In your main component or page file
import { useState, useEffect } from "react";

function FuturisticGameLoading() {
  const [loadingProgress, setLoadingProgress] = useState(8);

  useEffect(() => {
    // Simulate a data loading process
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col relative w-[340px] h-[480px]   items-center justify-center bg-black">
      {loadingProgress < 100 ? (
        // The loading component will be visible here, inline
        <FuturisticLoading
          progress={loadingProgress}
          className="w-full max-w-lg"
        />
      ) : (
        <div className="text-center text-white">
          <p className="text-2xl">Game Loaded Successfully!</p>
          {/* Your game content goes here */}
        </div>
      )}
    </div>
  );
}

export default FuturisticGameLoading;
