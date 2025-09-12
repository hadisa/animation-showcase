import React, { useState, useEffect, useRef } from "react";

const LoadingAmazing = ({ initialProgress = 0 }) => {
  const [progress, setProgress] = useState(initialProgress);
  const [subText, setSubText] = useState("Initializing Game Engine");
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create particles for background effect
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      color: `hsl(${Math.random() * 60 + 190}, 100%, 70%)`,
    }));
    setParticles(newParticles);

    // Simulate a loading process from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSubText("Game Loaded!");
          return 100;
        }
        // Simulate different stages of loading
        if (prev < 20) {
          setSubText("Loading Core Modules...");
        } else if (prev < 40) {
          setSubText("Compiling Shaders & Textures...");
        } else if (prev < 60) {
          setSubText("Synchronizing Game Data...");
        } else if (prev < 80) {
          setSubText("Establishing Secure Connection...");
        } else {
          setSubText("Optimizing Performance...");
        }
        return prev + 1;
      });
    }, 1000); // Faster interval for smoother animation

    return () => clearInterval(interval);
  }, [initialProgress]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          y: (p.y + p.speed) % 100,
          x: (p.x + p.speed / 3) % 100
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div 
      ref={containerRef}
      className="relative w-[340px] h-[480px] bg-black overflow-hidden flex flex-col justify-center items-center p-6 rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-60 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px ${particle.color}`,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${1 + particle.speed}s`
            }}
          />
        ))}
      </div>

      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-20 bg-hex-pattern bg-[length:60px_60px] animate-hex-move" />

      {/* Glowing orb in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cyan-500/10 blur-xl animate-pulse" />

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Progress bar with advanced effects */}
        <div className="w-full h-4 bg-gray-800/50 rounded-full overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10 mb-8">
          <div 
            className="h-full rounded-full relative overflow-hidden transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            {/* Gradient fill */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
            
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            
            {/* Particles emerging from progress */}
            <div className="absolute inset-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Percentage and text */}
        <div className="text-center w-full mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-cyan-400 animate-pulse">
              LOADING
              <span className="inline-block animate-blink">.</span>
              <span className="inline-block animate-blink" style={{ animationDelay: '0.2s' }}>.</span>
              <span className="inline-block animate-blink" style={{ animationDelay: '0.4s' }}>.</span>
            </h1>
            <div className="text-2xl font-mono font-bold text-white bg-black/30 px-3 py-1 rounded-lg border border-cyan-500/30">
              {progress}%
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-2 animate-fade-in-out">
            {subText}
          </p>
          
          {/* Additional status indicator */}
          <div className="flex items-center justify-center mt-4">
            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-ping mr-2" />
            <span className="text-sm text-cyan-300">System Active</span>
          </div>
        </div>

        {/* Circular progress indicator */}
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#1e293b"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.83}, 283`}
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-cyan-500 animate-pulse" />
          </div>
        </div>

        {/* Code-like matrix effect at bottom */}
        <div className="w-full h-12 bg-black/50 border border-cyan-500/20 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs text-cyan-400 font-mono animate-matrix"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {Math.random().toString(36).substring(2, 5).toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes float {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-15px) scale(1.2);
            opacity: 1;
          }
          100% { 
            transform: translateY(-30px) scale(0.8);
            opacity: 0;
          }
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
        
        @keyframes hex-move {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        
        .bg-hex-pattern {
          background-image: 
            radial-gradient(
              circle at center,
              transparent 40%,
              #0ea5e9 41%,
              #0ea5e9 44%,
              transparent 45%
            ),
            linear-gradient(
              0deg,
              transparent 48%,
              #0ea5e9 49%,
              #0ea5e9 51%,
              transparent 52%
            ),
            linear-gradient(
              60deg,
              transparent 48%,
              #0ea5e9 49%,
              #0ea5e9 51%,
              transparent 52%
            ),
            linear-gradient(
              -60deg,
              transparent 48%,
              #0ea5e9 49%,
              #0ea5e9 51%,
              transparent 52%
            );
        }
        
        .animate-shine {
          animation: shine 2s infinite;
        }
        
        .animate-blink {
          animation: blink 1.5s infinite;
        }
        
        .animate-float {
          animation: float 3s infinite;
        }
        
        .animate-matrix {
          animation: matrix 4s infinite linear;
        }
        
        .animate-hex-move {
          animation: hex-move 10s infinite linear;
        }
        
        .animate-fade-in-out {
          animation: fadeInOut 2s infinite;
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingAmazing;