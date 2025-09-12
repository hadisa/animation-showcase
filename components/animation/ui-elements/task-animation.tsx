import React, { useState, useEffect } from "react";

const statuses = ["in-progress", "completed", "not-done"];

const TaskAnimation = () => {
  const [status, setStatus] = useState(statuses[0]);
  const [key, setKey] = useState(0); // Used to re-trigger animation on status change

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus((prevStatus) => {
        const currentIndex = statuses.indexOf(prevStatus);
        const nextIndex = (currentIndex + 1) % statuses.length;
        return statuses[nextIndex];
      });
      setKey((prevKey) => prevKey + 1);
    }, 4000); // Change status every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const getStatusClasses = () => {
    switch (status) {
      case "in-progress":
        return "bg-yellow-500 animate-in-progress";
      case "completed":
        return "bg-green-500 animate-completed";
      case "not-done":
        return "bg-red-500 animate-not-done";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "in-progress":
        return "Task In Progress";
      case "completed":
        return "Task Completed";
      case "not-done":
        return "Task Not Done";
      default:
        return "Unknown Status";
    }
  };

  return (
    <div className="relative  w-[340px] h-[480px] overflow-hidden bg-gray-900 flex items-center justify-center font-sans">
      {/* The animated task shape */}
      <div
        key={key} // Key changes to force re-render and re-start animation
        className={`w-48 h-48 rounded-lg absolute transform transition-all duration-1000 ease-in-out ${getStatusClasses()}`}
      ></div>

      {/* Status Text */}
      <div
        className="absolute top-10 text-white text-3xl font-bold animate-fade-in"
        key={`text-${key}`}
      >
        {getStatusText()}
      </div>

      <style jsx>{`
        /* --- Keyframe Animations --- */

        /* In Progress: A glowing, moving state */
        @keyframes in-progress {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
            box-shadow: none;
          }
          50% {
            transform: translateY(0) rotate(180deg);
            opacity: 1;
            box-shadow: 0 0 30px #f59e0b; /* Yellow glow */
          }
          100% {
            transform: translateY(-20px) rotate(360deg);
            opacity: 0.8;
            box-shadow: 0 0 15px #f59e0b;
          }
        }

        /* Completed: Solidifies and shines with a green glow */
        @keyframes completed {
          0% {
            transform: scale(0.5) translateY(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) translateY(0);
            opacity: 1;
            box-shadow: 0 0 30px #10b981; /* Green glow */
          }
          100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 15px #10b981;
          }
        }

        /* Not Done: Dissolves into a final state */
        @keyframes not-done {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.2) rotate(720deg);
            opacity: 0;
            box-shadow: 0 0 30px #ef4444; /* Red glow */
          }
        }

        /* Fade in for the text */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* --- Component Styles --- */
        .animate-in-progress {
          animation: in-progress 3s ease-in-out forwards;
        }

        .animate-completed {
          animation: completed 2s ease-in-out forwards;
        }

        .animate-not-done {
          animation: not-done 2s ease-in-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TaskAnimation;
