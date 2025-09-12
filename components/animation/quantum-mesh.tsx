import Head from 'next/head';

export default function QuantumMeshAnimation() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | Mesh Animation</title>
      </Head>

      {/* Main container with a gradient background */}
      <main className="relative w-[340px] h-[480px]">
        <div className="flex items-center justify-center min-h-screen relative overflow-hidden bg-gradient-to-br from-[#021b3d] to-[#043d1a] font-sans">

          {/* Main animated mesh container */}
          <div className="relative w-full h-full">

            {/* Background Mesh (Layer 1) */}
            <div className="animated-mesh-bg absolute inset-0 z-0"></div>

            {/* Large Animated Polygons (Simulated 3D) */}
            <div className="polygon-container absolute inset-0 z-10 flex items-center justify-center">
              {/* Blue polygon */}
              <div className="polygon-blue absolute w-[400px] h-[400px] animate-polygon-float-1"></div>
              {/* Green polygon */}
              <div className="polygon-green absolute w-[400px] h-[400px] animate-polygon-float-2"></div>
            </div>

            {/* Foreground Mesh (Layer 2) */}
            <div className="animated-mesh-fg absolute inset-0 z-20"></div>

            {/* Centered Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-shadow-glow">
                QUANTUM
              </h1>
              <p className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.4em] mt-2 text-shadow-glow">
                INNOVATIONS
              </p>
            </div>
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
        @keyframes mesh-flow {
          from { background-position: 0 0; }
          to { background-position: 100% 100%; }
        }

        @keyframes polygon-float-1 {
          0%, 100% { transform: translateY(0) rotateY(15deg) rotateX(10deg); }
          50% { transform: translateY(-20px) rotateY(-15deg) rotateX(-10deg); }
        }
        
        @keyframes polygon-float-2 {
          0%, 100% { transform: translateY(0) rotateY(-15deg) rotateX(-10deg); }
          50% { transform: translateY(20px) rotateY(15deg) rotateX(10deg); }
        }

        @keyframes text-shadow-glow {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #22d3ee; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #22d3ee, 0 0 30px #4ade80; }
        }

        /* * Main Styles * */
        .animated-mesh-bg, .animated-mesh-fg {
          background-image:
            radial-gradient(circle, #22d3ee 1px, transparent 1px),
            radial-gradient(circle, #4ade80 1px, transparent 1px);
          background-size: 50px 50px, 50px 50px;
          background-position: 0 0, 25px 25px;
          animation: mesh-flow 60s linear infinite;
          opacity: 0.5;
        }

        .animated-mesh-fg {
          animation-direction: reverse;
          animation-duration: 40s;
          opacity: 0.7;
        }

        /* Simulating the 3D polygons */
        .polygon-blue {
          background: rgba(34, 211, 238, 0.2);
          backdrop-filter: blur(10px);
          transform-style: preserve-3d;
          border: 1px solid rgba(34, 211, 238, 0.4);
          transform: rotateY(15deg) rotateX(10deg);
          animation: polygon-float-1 8s infinite alternate ease-in-out;
        }
        
        .polygon-green {
          background: rgba(74, 222, 128, 0.2);
          backdrop-filter: blur(10px);
          transform-style: preserve-3d;
          border: 1px solid rgba(74, 222, 128, 0.4);
          transform: rotateY(-15deg) rotateX(-10deg) translateX(30px) translateY(30px);
          animation: polygon-float-2 8s infinite alternate ease-in-out;
        }

        .polygon-blue, .polygon-green {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </>
  );
}