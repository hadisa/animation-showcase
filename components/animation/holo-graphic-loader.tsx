import React, { useState, useEffect, useRef } from "react";

const HolographicLoader = ({ initialProgress = 0 }) => {
  const [progress, setProgress] = useState(initialProgress);
  const [loadingText, setLoadingText] = useState("SYSTEM BOOT");
  const [activeOrbs, setActiveOrbs] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize orbs
    const newOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 0.5 + 0.2,
      color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
    }));
    setActiveOrbs(newOrbs);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoadingText("READY");
          return 100;
        }
        
        // Update loading text based on progress
        if (prev < 25) setLoadingText("SYSTEM INIT");
        else if (prev < 50) setLoadingText("MODULES LOAD");
        else if (prev < 75) setLoadingText("DATA SYNC");
        else setLoadingText("OPTIMIZING");
        
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Animate orbs
  useEffect(() => {
    if (activeOrbs.length === 0) return;

    const interval = setInterval(() => {
      setActiveOrbs(prevOrbs => 
        prevOrbs.map(orb => ({
          ...orb,
          y: (orb.y - orb.speed + 100) % 100
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [activeOrbs]);

  return (
    <div 
      ref={containerRef}
      className="relative w-[340px] h-[480px] bg-gray-900 overflow-hidden flex flex-col justify-center items-center p-6 rounded-xl shadow-2xl shadow-cyan-500/10"
    >
      {/* Holographic grid background */}
      <div className="absolute inset-0 opacity-30 bg-grid-pattern bg-[length:40px_40px] animate-grid-move" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {activeOrbs.map(orb => (
          <div
            key={orb.id}
            className="absolute rounded-full opacity-40 blur-md"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              backgroundColor: orb.color,
              boxShadow: `0 0 ${orb.size * 2}px ${orb.size}px ${orb.color}`,
            }}
          />
        ))}
      </div>

      {/* Central hologram */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Holographic ring */}
        <div className="relative w-48 h-48 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-pulse" />
          <div className="absolute inset-4 rounded-full border-4 border-purple-500/30 animate-ping-slow" />
          <div className="absolute inset-8 rounded-full border-4 border-blue-500/30 animate-pulse" />
          
          {/* Inner rotating elements */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
          </div>
          
          {/* Central core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-cyan-400/20 animate-pulse flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-cyan-300 text-sm font-mono">PROGRESS</span>
            <span className="text-cyan-300 text-sm font-mono">{progress}%</span>
          </div>
          
          {/* Holographic progress bar */}
          <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden border border-cyan-500/30 relative">
            <div 
              className="h-full rounded-full relative transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
            </div>
            
            {/* Glowing ends */}
            <div className="absolute left-0 top-0 h-full w-2 bg-cyan-400 blur-sm" />
            <div 
              className="absolute top-0 h-full w-2 bg-cyan-400 blur-sm transition-all duration-300 ease-out"
              style={{ left: `calc(${progress}% - 4px)` }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-mono tracking-wider animate-pulse">
            {loadingText}
            <span className="inline-block animate-blink">_</span>
          </h2>
          <p className="text-cyan-200 text-sm">
            {progress < 25 && "Initializing system components..."}
            {progress >= 25 && progress < 50 && "Loading core modules..."}
            {progress >= 50 && progress < 75 && "Synchronizing data streams..."}
            {progress >= 75 && progress < 100 && "Optimizing performance..."}
            {progress >= 100 && "System ready for operation"}
          </p>
        </div>

        {/* Binary matrix rain */}
        <div className="w-full h-20 bg-black/30 border border-cyan-500/20 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs text-cyan-400/80 font-mono animate-matrix"
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Status indicators */}
        <div className="flex justify-between w-full mt-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse mr-2" />
            <span className="text-cyan-300 text-xs">CPU</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse mr-2" />
            <span className="text-cyan-300 text-xs">MEM</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse mr-2" />
            <span className="text-cyan-300 text-xs">GPU</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2" />
            <span className="text-cyan-300 text-xs">NET</span>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes matrix {
          0% { 
            top: -20px;
            opacity: 0;
          }
          5% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            top: 100%;
            opacity: 0;
          }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
        }
        
        .animate-grid-move {
          animation: grid-move 20s infinite linear;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s infinite linear;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s infinite cubic-bezier(0, 0, 0.2, 1);
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-shine {
          animation: shine 2s infinite;
        }
        
        .animate-matrix {
          animation: matrix 4s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default HolographicLoader;