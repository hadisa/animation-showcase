import React from "react";

const QuantumGridLoading = () => {
  return (
    <div className="flex w-[340px] h-[480px] items-center justify-center bg-black text-white font-sans overflow-hidden">
      <div className="relative">
        <div className="grid-ring grid-ring-outer"></div>
        <div className="grid-ring grid-ring-middle"></div>
        <div className="grid-ring grid-ring-inner"></div>
        <div className="grid-ring grid-ring-core"></div>
      </div>

      <style jsx>{`
        /* Main Grid Ring Styles */
        .grid-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 4px solid;
          transform-origin: center center;
        }

        /* Individual Ring Sizes, Colors, and Animations
          Each ring has a unique size, color, and animation delay for a complex effect.
        */
        .grid-ring-outer {
          width: 10rem;
          height: 10rem;
          border-color: #4ade80 transparent #4ade80 #4ade80; /* green-400 */
          animation: quantum-pulse 2.5s infinite linear;
        }

        .grid-ring-middle {
          width: 8.5rem;
          height: 8.5rem;
          border-color: #22d3ee transparent #22d3ee #22d3ee; /* cyan-400 */
          animation: quantum-pulse 2.5s infinite linear reverse;
        }

        .grid-ring-inner {
          width: 7rem;
          height: 7rem;
          border-color: #a78bfa transparent #a78bfa #a78bfa; /* violet-400 */
          animation: quantum-pulse 2.5s infinite linear;
          animation-delay: -1.25s; /* Stagger the animation start */
        }

        .grid-ring-core {
          width: 5rem;
          height: 5rem;
          border-color: #f472b6 transparent #f472b6 #f472b6; /* pink-500 */
          animation: quantum-pulse 2.5s infinite linear reverse;
          animation-delay: -1.25s; /* Stagger the animation start */
        }

        /* The Master Keyframe Animation
          This combines rotation, scaling, and opacity changes for a fluid "breathing" effect.
        */
        @keyframes quantum-pulse {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translate(-50%, -50%) rotate(90deg) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1);
            opacity: 0.8;
          }
          75% {
            transform: translate(-50%, -50%) rotate(270deg) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default QuantumGridLoading;
