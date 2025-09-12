import Head from 'next/head';

export default function QuantumMeshProfessional() {
  return (
    <> 
      <Head>
        <title>Quantum Innovations | Professional Mesh</title>
      </Head>

      {/* Main container with gradient background */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0a1829] to-[#0d2a13] font-sans">
        
        {/* Animated Mesh Layer */}
        <div className="animated-mesh-layer absolute inset-0 z-0">
          {/* This element will contain the core mesh animation */}
        </div>

        {/* Centered Text Container */}
        <div className="absolute z-10 text-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-widest text-shadow-glow">
            QUANTUM
          </h1>
          <p className="text-white text-md md:text-xl font-light tracking-[0.4em] mt-2 text-shadow-glow">
            INNOVATIONS
          </p>
        </div>

      </div>

      <style jsx>{`
        /* Import a professional font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* * Keyframe Animations * */
        @keyframes mesh-float-1 {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-5%); }
        }
        
        @keyframes mesh-float-2 {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(5%); }
        }

        @keyframes text-shadow-glow {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #22d3ee; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #22d3ee, 0 0 30px #4ade80; }
        }

        /* * Core Styles * */
        .animated-mesh-layer {
          background: 
            /* Nodes (dots) */
            radial-gradient(circle, rgba(34, 211, 238, 0.7) 1.5px, transparent 2px),
            radial-gradient(circle, rgba(74, 222, 128, 0.7) 1.5px, transparent 2px),
            /* Lines (the mesh itself) */
            linear-gradient(to right, rgba(34, 211, 238, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74, 222, 128, 0.5) 1px, transparent 1px);
          
          background-size: 
            50px 50px, 50px 50px, /* Node sizes */
            50px 50px, 50px 50px; /* Line sizes */
          
          animation: 
            mesh-float-1 10s infinite alternate ease-in-out,
            mesh-float-2 12s infinite alternate ease-in-out 2s;
          
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateX(15deg);
        }

        .text-shadow-glow {
          animation: text-shadow-glow 4s infinite alternate;
        }
      `}</style>
    </>
  );
}