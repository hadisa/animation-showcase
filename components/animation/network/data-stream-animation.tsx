import React from "react";

export default function DataStreamAnimation() {
  return (
    <>
      <div
        className="relative w-[340px] h-[480px] bg-cover bg-center overflow-hidden font-sans"
        style={{ backgroundImage: "url('/quantum-server.jpg')" }}
      >
        {/* The Animated Data Stream Layer */}
        <div className="data-stream absolute inset-0 z-10 animate-data-flow">
          Hi,Folks, Hope you enjoy
        </div>
      </div>

      <style jsx>{`
        /* * Keyframe Animation: The core of the data stream effect */
        @keyframes data-flow {
          0% {
            background-position: 0% 0%, 0% 0%, 0% 0%;
          }
          100% {
            background-position: 100% 100%, 50% 100%, 0% 100%;
          }
        }

        /* * Main Styles */
        .data-stream {
          background-image:
            /* Main flowing lines */ linear-gradient(
              45deg,
              transparent,
              #4ade80,
              transparent
            ),
            linear-gradient(-45deg, transparent, #22d3ee, transparent),
            /* Subtle particles */
              radial-gradient(circle, #4ade80 1px, transparent 1.5px),
            radial-gradient(circle, #22d3ee 1px, transparent 1.5px);

          background-size: 200% 100px, 200% 100px, 30px 30px, 30px 30px;

          background-repeat: repeat-x, repeat-x, repeat, repeat;

          opacity: 0.8;
          filter: blur(0.5px) drop-shadow(0 0 5px #4ade80)
            drop-shadow(0 0 5px #22d3ee);

          animation: data-flow 10s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
      `}</style>
    </>
  );
}
