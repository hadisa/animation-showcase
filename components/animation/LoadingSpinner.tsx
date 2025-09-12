import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="flex relative w-[340px] h-[480px] items-center justify-center bg-black">
        <div className="flex space-x-2">
          <div className="dot"></div>
          <div className="dot animation-delay-200"></div>
          <div className="dot animation-delay-400"></div>
        </div>
      </div>

      <style jsx>{`
        /* Tailwind CSS Classes for the dots, 
          placed here to keep everything in one file.
        */
        .dot {
          width: 1.5rem;
          height: 1.5rem;
          background-color: #fca5a5; /* Custom Tailwind red-400 */
          border-radius: 50%;
          animation: bounce 1s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        /* Keyframe animation for the bouncing effect.
        */
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(50%);
          }
        }
      `}</style>
    </>
  );
};

export default LoadingSpinner;
