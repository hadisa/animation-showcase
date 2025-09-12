import Head from 'next/head';

export default function QuantumCoverAnimation() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | Animated Cover</title>
      </Head>

      {/* Main container with gradient background */}
      <main className="relative w-full h-[600px]">
        <div className="flex items-center justify-center h-full w-full relative overflow-hidden bg-gradient-to-br from-[#0c2438] to-[#123e25] font-sans">

          {/* Animated Mesh Containers */}
          <div className="mesh-container mesh-left absolute z-0 inset-y-0 left-0 animate-mesh-float-1">
            <div className="mesh-node node-1"></div>
            <div className="mesh-node node-2"></div>
          </div>

          <div className="mesh-container mesh-right absolute z-0 inset-y-0 right-0 animate-mesh-float-2">
            <div className="mesh-node node-3"></div>
            <div className="mesh-node node-4"></div>
          </div>

          {/* The central bright light source */}
          <div className="central-light absolute w-32 h-32 rounded-full bg-white z-10 animate-pulse-glow"></div>

          {/* Centered Text Container */}
          <div className="absolute z-20 text-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-widest text-shadow-glow">
              QUANTUM
            </h1>
            <p className="text-white text-md md:text-xl font-light tracking-[0.4em] mt-2 text-shadow-glow">
              INNOVATIONS
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        /* Import a professional font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* * Keyframe Animations * */
        @keyframes mesh-float-1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(5deg); }
          50% { transform: translateY(-20px) translateX(10px) rotate(8deg); }
        }

        @keyframes mesh-float-2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(-5deg); }
          50% { transform: translateY(20px) translateX(-10px) rotate(-8deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5), 0 0 20px 10px #22d3ee; }
          50% { box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.8), 0 0 40px 20px #22d3ee; }
        }
        
        @keyframes text-shadow-glow {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #22d3ee; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #22d3ee, 0 0 30px #4ade80; }
        }

        /* * Main Styles * */
        .mesh-container {
            width: 50%;
            pointer-events: none;
        }

        .mesh-left {
            transform: translateX(-50%) rotate(5deg);
        }

        .mesh-right {
            transform: translateX(50%) rotate(-5deg);
        }
        
        /* Node styling and animation (a simplification) */
        .mesh-node {
            position: absolute;
            background-color: #22d3ee;
            border-radius: 50%;
            box-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
            animation: node-pulse 3s infinite alternate;
        }

        .mesh-node.node-1 {
            width: 200px; height: 200px;
            top: 20%; left: 10%;
            background-color: rgba(34, 211, 238, 0.2);
            transform: rotate(20deg);
        }
        
        .mesh-node.node-2 {
            width: 150px; height: 150px;
            bottom: 10%; left: 30%;
            background-color: rgba(34, 211, 238, 0.3);
            transform: rotate(40deg);
        }

        .mesh-node.node-3 {
            width: 200px; height: 200px;
            top: 15%; right: 10%;
            background-color: rgba(74, 222, 128, 0.2);
            transform: rotate(-30deg);
        }

        .mesh-node.node-4 {
            width: 150px; height: 150px;
            bottom: 20%; right: 30%;
            background-color: rgba(74, 222, 128, 0.3);
            transform: rotate(-10deg);
        }

        @keyframes node-pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
        }

        .central-light {
            filter: blur(10px);
            opacity: 0.8;
            animation: pulse-glow 3s infinite alternate;
        }

        .text-shadow-glow {
          animation: text-shadow-glow 4s infinite alternate;
        }
      `}</style>
    </>
  );
}