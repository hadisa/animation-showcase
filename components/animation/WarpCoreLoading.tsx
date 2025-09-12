import React from "react";

const WarpCoreLoading = () => {
  return (
    <div className="flex w-[340px] h-[480px] items-center justify-center bg-black font-cinzel">
      <div className="relative w-32 h-32 ">
        <div className="absolute top-1/2 left-1/2 transform  w-32 h-32 border-4 border-blue-500 border-r-transparent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform  w-26 h-26 border-4 border-pink-400 border-b-transparent rounded-full animate-reverse-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform  w-20 h-20 border-4 border-green-400 border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute bg-orange-300 top-1/2 left-1/2 transform  w-14 h-14 border-4 border-orange-300 border-t-transparent rounded-full animate-reverse-spin">
          <div className="absolute inset-0 bg-orange-300 rounded-full blur-sm opacity-60"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes reverse-spin {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        .animate-spin {
          animation: spin 2s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverse-spin 1.5s linear infinite;
        }

        .animate-reverse-spin:nth-child(4) {
          animation-duration: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default WarpCoreLoading;
