import Head from "next/head";

export default function DigitalTunnelAnimation() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | Digital Tunnel</title>
      </Head>

      {/* Main container with deep blue background */}
      <div className="flex items-center justify-center h-72 relative overflow-hidden bg-transparent font-sans">
        {/* The Digital Tunnel Grid */}
        <div className="digital-grid-container absolute inset-0 z-0">
          <div className="digital-grid"></div>
        </div>

        {/* Centered Text Container */}
        <div className="absolute z-40 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white dark:text-gray-800 text-5xl md:text-6xl font-bold tracking-widest text-shadow-glow">
            Featured Projects
          </h1>
          <p className="text-white text-md md:text-md font-light tracking-[0.4em] mt-6 text-shadow-glow">
            A showcase of professional work and technical expertise.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Global Styles */
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
        .font-sans {
          font-family: "Inter", sans-serif;
        }

        /* * Keyframe Animations * */
        @keyframes perspective-flow {
          0% {
            transform: perspective(200px) rotateX(85deg) translateY(0);
          }
          100% {
            transform: perspective(200px) rotateX(85deg) translateY(-200px);
          }
        }

        @keyframes text-shadow-glow {
          0%,
          100% {
            text-shadow: 0 0 8px #fff, 0 0 16px #22d3ee;
          }
          50% {
            text-shadow: 0 0 16px #fff, 0 0 32px #22d3ee, 0 0 48px #4ade80;
          }
        }

        /* * Main Container and Layers * */
        .digital-grid-container {
          transform-style: preserve-3d;
          perspective: 500px;
          transform: rotateX(75deg);
          pointer-events: none;
          overflow: hidden;
          background: linear-gradient(
            to right,
            transparent,
            rgba(34, 211, 238, 0.2),
            transparent
          );
          filter: blur(2px);
          opacity: 0.7;
        }

        .digital-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              to right,
              #4ade80 1px,
              transparent 1px
            ),
            linear-gradient(to top, #22d3ee 1px, transparent 1px);
          background-size: 100px 100px;
          background-position: 50% 50%;
          animation: perspective-flow 20s infinite linear;
        }
      `}</style>
    </>
  );
}

export const DigitalTunnelAnimationBg = () => {
  return (
    <div className="w-full h-full bg-black">
      <DigitalTunnelAnimation />
    </div>
  )
}

export const DigitalTextAnimations = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center font-inter bg-gray-50">
      <DigitalTunnelAnimation />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-600 mb-4 animate-text-glow-main">
          Digital Tunnel Animation
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 animate-text-glow-sub">
          A captivating digital tunnel effect with glowing grid lines and
          animated perspective.
        </p>
      </div>
      <style jsx>{`
        @keyframes text-glow-main {
          0%,
          100% {
            text-shadow: 0 0 5px #fff, 0 0 10px #22d3ee;
          }
          50% {
            text-shadow: 0 0 10px #fff, 0 0 20px #22d3ee, 0 0 30px #4ade80;
          }
        }

        @keyframes text-glow-sub {
          0%,
          100% {
            text-shadow: none;
          }
          50% {
            text-shadow: 0 0 5px #22d3ee;
          }
        }

        .animate-text-glow-main {
          animation: text-glow-main 4s infinite alternate;
        }

        .animate-text-glow-sub {
          animation: text-glow-sub 4s infinite alternate;
        }
      `}</style>
    </div>
  );
} 