import React from "react";

export default function ExactCyberNetworkAnimation() {
  return (
    <>
      <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-[#001f3f] to-[#0a4a40]">
        {/* Central Energy Core / Light Burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100px] z-20 animate-energy-burst"></div>

        {/* Background Circuit Grid - Fainter, more diffused */}
        <div className="circuit-layer circuit-layer-bg absolute inset-0 z-0 animate-circuit-bg-flow"></div>

        {/* Midground Circuit Layer - More defined lines, subtle flow */}
        <div className="circuit-layer circuit-layer-mid absolute inset-0 z-10 animate-circuit-mid-flow"></div>

        {/* Foreground Circuit Layer - Sharpest lines, strongest flow */}
        <div className="circuit-layer circuit-layer-fg absolute inset-0 z-20 animate-circuit-fg-flow"></div>

        {/* Particle/Noise Overlay - To match fine details */}
        <div className="particle-overlay absolute inset-0 z-30 animate-particle-fade"></div>
      </div>

      <style jsx>{`
        /* CSS Variables for theme consistency and easy adjustments */
        :root {
          --blue-main: #22d3ee; /* Tailwind cyan-400 equivalent */
          --green-main: #4ade80; /* Tailwind green-400 equivalent */
          --core-white: #ffffff;
          --dark-bg: #000d1a;
        }

        /* --- Keyframe Animations --- */
        @keyframes energy-burst {
          0%,
          100% {
            background: radial-gradient(
              circle at center,
              var(--core-white) 0%,
              rgba(var(--blue-main), 0.8) 10%,
              rgba(var(--green-main), 0.7) 30%,
              transparent 60%
            );
            filter: blur(15px) brightness(1.2)
              drop-shadow(0 0 20px var(--blue-main))
              drop-shadow(0 0 20px var(--green-main));
            transform: translate(-50%, -50%) scaleX(1);
            opacity: 0.9;
          }
          50% {
            background: radial-gradient(
              circle at center,
              var(--core-white) 0%,
              rgba(var(--blue-main), 1) 15%,
              rgba(var(--green-main), 0.9) 40%,
              transparent 70%
            );
            filter: blur(25px) brightness(1.5)
              drop-shadow(0 0 30px var(--blue-main))
              drop-shadow(0 0 30px var(--green-main));
            transform: translate(-50%, -50%) scaleX(1.05);
            opacity: 1;
          }
        }

        @keyframes circuit-bg-flow {
          0% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            opacity: 0.3;
          }
          100% {
            background-position: 100% 0%, 0% 100%, 100% 100%, 0% 0%;
            opacity: 0.5;
          }
        }

        @keyframes circuit-mid-flow {
          0% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            opacity: 0.6;
          }
          100% {
            background-position: -100% 0%, 0% -100%, -100% -100%, 0% 0%;
            opacity: 0.8;
          }
        }

        @keyframes circuit-fg-flow {
          0% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            opacity: 0.8;
          }
          100% {
            background-position: 200% 0%, 0% 200%, 200% 200%, 0% 0%;
            opacity: 1;
          }
        }

        @keyframes particle-fade {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        /* --- Base Styles --- */
        .relative {
          background-color: var(--dark-bg);
          perspective: 1000px; /* Strong perspective for 3D feel */
          transform-style: preserve-3d;
        }

        /* --- Circuit Layer Styles --- */
        .circuit-layer {
          transform-style: preserve-3d;
          background-size: 80px 80px; /* Spacing for the circuit pattern */
          filter: drop-shadow(0 0 2px) brightness(1.1); /* General glow and brightness */
          transform: perspective(800px) rotateX(60deg) scale(1.2); /* Creates the floor effect */
          transform-origin: bottom center; /* Pivot point for perspective */
          pointer-events: none;
          width: 200%; /* Wider/taller to fill perspective view */
          height: 200%;
          left: -50%; /* Center the wider layer */
          bottom: 0;
        }

        /* Specific styles for each layer to differentiate their look and speed */
        .circuit-layer-bg {
          background-image:
            /* Subtle blue lines */ linear-gradient(
              to right,
              rgba(var(--blue-main), 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(var(--blue-main), 0.1) 1px,
              transparent 1px
            ),
            /* Subtle green lines */
              linear-gradient(
                to right,
                rgba(var(--green-main), 0.1) 1px,
                transparent 1px
              ),
            linear-gradient(
              to bottom,
              rgba(var(--green-main), 0.1) 1px,
              transparent 1px
            );
          animation-duration: 60s; /* Slower */
        }

        .circuit-layer-mid {
          background-image:
            /* Mid blue lines */ linear-gradient(
              to right,
              rgba(var(--blue-main), 0.3) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(var(--blue-main), 0.3) 1px,
              transparent 1px
            ),
            /* Mid green lines */
              linear-gradient(
                to right,
                rgba(var(--green-main), 0.3) 1px,
                transparent 1px
              ),
            linear-gradient(
              to bottom,
              rgba(var(--green-main), 0.3) 1px,
              transparent 1px
            );
          animation-duration: 40s; /* Medium speed */
        }

        .circuit-layer-fg {
          background-image:
            /* Strong blue lines */ linear-gradient(
              to right,
              rgba(var(--blue-main), 0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(var(--blue-main), 0.5) 1px,
              transparent 1px
            ),
            /* Strong green lines */
              linear-gradient(
                to right,
                rgba(var(--green-main), 0.5) 1px,
                transparent 1px
              ),
            linear-gradient(
              to bottom,
              rgba(var(--green-main), 0.5) 1px,
              transparent 1px
            );
          animation-duration: 25s; /* Faster */
          filter: drop-shadow(0 0 3px var(--blue-main))
            drop-shadow(0 0 3px var(--green-main));
        }

        /* --- Particle Overlay --- */
        .particle-overlay {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.4) 1px,
            transparent 1.5px
          );
          background-size: 10px 10px;
          filter: blur(0.5px);
          animation-duration: 15s;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}
