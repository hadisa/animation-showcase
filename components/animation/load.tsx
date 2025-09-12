import React, { useEffect, useState } from "react";

const useLoading = (initialValue = true, duration = 3000) => {
  const [isLoading, setIsLoading] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isLoading;
};

const AdvancedLoadingSpinner = ({
  className = "",
  onComplete,
  size = "medium",
}) => {
  const [progress, setProgress] = useState(0);

  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 100 / 60; // Complete in approximately 3 seconds
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]} mb-4`}>
        {/* Outer ring with gradient border */}
        <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700"></div>

        {/* Animated ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin-slow"
          style={{
            clipPath: `polygon(0 0, 50% 0, 50% 100%, 0 100%)`,
            transform: `rotate(${progress * 3.6}deg)`,
          }}
        ></div>

        {/* Progress fill */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500"
          style={{
            clipPath: `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`,
            transform: `rotate(${progress * 3.6}deg)`,
          }}
        ></div>

        {/* Inner glow */}
        <div className="absolute inset-3 rounded-full bg-blue-50 dark:bg-blue-900/20 animate-pulse-slow"></div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Loading text with subtle animation */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
          Loading your content
        </p>
        <div className="flex justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 mx-1 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 1.5s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce {
          animation: bounce 0.8s infinite;
        }
      `}</style>
    </div>
  );
};

const LoadingSpinner = () => {
  const isLoading = useLoading(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isVisible) {
    return (
      <div className="w-[340px] h-[480px] flex items-center justify-center bg-black ">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white dark:text-gray-200 mb-2">
            Content Loaded
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Ready to continue</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[340px] h-[480px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <AdvancedLoadingSpinner onComplete={false} />
    </div>
  );
};

export default LoadingSpinner;
