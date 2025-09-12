import Head from 'next/head';

export default function QuantumAnimation() {
  return (
    <>
      <Head>
        <title>Quantum Innovations Animation</title>
      </Head>
      <div className="flex items-center justify-center w-[340px] h-[480px] bg-gray-950 text-white overflow-hidden">
        <div className="relative w-full max-w-4xl p-8">
          {/* Main Brain Container */}
          <div className="brain-container relative w-full h-full flex flex-col items-center justify-center">

            {/* Central Glow */}
            <div className="glow-center absolute"></div>

            {/* Radiating Waves */}
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>

            {/* Neural Network (Simplified for animation) */}
            <div className="neural-network-placeholder"></div>

            {/* Text at the bottom */}
            <div className="absolute bottom-12 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-widest leading-none quantum-text mb-2">
                QUANTUM
              </h1>
              <p className="text-lg sm:text-xl font-light tracking-[0.2em] quantum-text-sub">
                INNOVATIONS
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Keyframe Animations */
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.4), 0 0 20px 10px rgba(0, 150, 255, 0.6);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px 15px rgba(255, 255, 255, 0.6), 0 0 40px 20px rgba(0, 150, 255, 0.8);
            transform: scale(1.1);
          }
          100% {
            box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.4), 0 0 20px 10px rgba(0, 150, 255, 0.6);
            transform: scale(1);
          }
        }

        @keyframes flow-wave {
          0% {
            transform: translateY(0) scaleX(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) scaleX(1.2);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) scaleX(1);
            opacity: 0.1;
          }
        }
        
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes text-glow {
          0% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 15px rgba(255,255,255,0.8), 0 0 25px rgba(0, 255, 255, 0.5); }
          100% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
        }

        /* General Styles */
        .brain-container {
          width: 800px; /* Adjust size as needed */
          height: 500px;
        }

        /* Central Glow */
        .glow-center {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #fff;
          filter: blur(5px);
          animation: pulse-glow 3s infinite ease-in-out;
        }

        /* Radiating Waves */
        .wave {
          position: absolute;
          width: 150%;
          height: 150%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,255,0.3) 0%, rgba(0,255,255,0) 70%);
          z-index: -1;
          opacity: 0;
          animation: pulse-wave 4s infinite ease-out;
        }

        .wave-1 {
          animation-delay: 0s;
          opacity: 0;
          background: linear-gradient(to right, transparent, rgba(0, 255, 0, 0.2), rgba(0, 200, 255, 0.2), transparent);
          height: 100px;
          animation: flow-wave 5s infinite ease-in-out;
        }
        
        .wave-2 {
          animation-delay: 1.5s;
          opacity: 0;
          background: linear-gradient(to left, transparent, rgba(0, 255, 0, 0.2), rgba(0, 200, 255, 0.2), transparent);
          height: 120px;
          animation: flow-wave 5.5s infinite ease-in-out;
        }
        
        .wave-3 {
          animation-delay: 3s;
          opacity: 0;
          background: linear-gradient(to right, transparent, rgba(0, 255, 0, 0.2), rgba(0, 200, 255, 0.2), transparent);
          height: 140px;
          animation: flow-wave 6s infinite ease-in-out;
        }

        /* Simplified Neural Network - Use SVG for better results */
        .neural-network-placeholder {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('/neural-network.svg') no-repeat center center; /* You would create this SVG based on your image */
          background-size: contain;
        }

        /* Text Animation */
        .quantum-text {
          animation: text-glow 4s infinite ease-in-out;
        }

        .quantum-text-sub {
          animation: text-glow 4s infinite ease-in-out 0.5s;
        }
      `}</style>
    </>
  );
}