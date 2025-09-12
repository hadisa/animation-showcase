import React from "react";

const QuantumLoadingAnimation1 = () => {
  return (
    <>
      <div className="flex relative w-[340px] h-[480px] font-cinzel group perspective items-center justify-center bg-black">
        <div className="relative flex items-center justify-center">
          {/* The semi-transparent outer ring */}
          <div className="outer-ring"></div>

          {/* The animated, glowing progress bar */}
          <div className="progress-bar"></div>

          {/* The bouncing dots */}
          <div className="dots-container">
            <div className="dot animation-delay-0"></div>
            <div className="dot animation-delay-150"></div>
            <div className="dot animation-delay-300"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outer-ring {
          position: absolute;
          width: 8rem;
          height: 8rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          box-shadow: 0 0 10px #22d3ee;
        }

        .progress-bar {
          position: absolute;
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          border-top: 4px solid #22d3ee; /* cyan-400 */
          border-right: 4px solid #22d3ee; /* cyan-400 */
          animation: spin 1.5s linear infinite;
          filter: blur(0.5px);
          box-shadow: 0 0 15px #22d3ee, 0 0 20px #22d3ee inset;
        }

        .dots-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 4rem;
        }

        .dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #fff;
          border-radius: 50%;
          margin: 0 0.25rem;
          animation: bounce 0.6s infinite ease-in-out;
        }

        /* Staggered animation delays for the dots */
        .animation-delay-0 {
          animation-delay: 0s;
        }
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        /* Keyframe for the circular progress bar spin */
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Keyframe for the bouncing dots */
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
};

export default QuantumLoadingAnimation1;
