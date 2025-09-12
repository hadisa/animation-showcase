import Head from 'next/head';

export default function ProfessionalBrainAnimation() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | Brain Animation</title>
      </Head>

      <div className="flex items-center justify-center min-h-screen relative overflow-hidden bg-[#1A1A1A] font-sans">
        
        {/* Main Animation Area */}
        <div className="relative w-full h-full flex items-center justify-center">

          {/* The Glowing Waves Container */}
          <div className="waves-container absolute z-0 inset-0">
            <div className="wave wave-blue animate-wave-flow-blue"></div>
            <div className="wave wave-green animate-wave-flow-green"></div>
          </div>

          {/* The Central Light */}
          <div className="central-light absolute z-10 animate-pulse-light"></div>

          {/* The Brain Mesh (SVG for precision) */}
          <div className="brain-container relative w-[600px] h-[600px] z-20">
            {/* You would replace this SVG with a more complex one if needed */}
          </div>

          {/* Centered Text Container */}
          <div className="absolute z-30 text-center bottom-20">
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-widest text-shadow-glow">
              QUANTUM
            </h1>
            <p className="text-white text-lg md:text-xl font-light tracking-[0.4em] mt-2 text-shadow-glow">
              INNOVATIONS
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* * Keyframe Animations * */
        @keyframes wave-flow {
          0% { transform: scale(1) translateX(0) translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: scale(1.5) translateX(50px) translateY(50px) rotate(30deg); opacity: 0; }
        }

        @keyframes pulse-light {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes text-shadow-glow {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #4ade80; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #4ade80, 0 0 30px #22d3ee; }
        }

        /* * Main Styles * */
        .waves-container {
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        .wave {
            position: absolute;
            left: 50%;
            top: 50%;
            transform-origin: center;
            width: 800px;
            height: 800px;
            border-radius: 50%;
            filter: blur(5px);
            opacity: 0;
        }

        .wave-blue {
            background: rgba(34, 211, 238, 0.4);
            animation: wave-flow 10s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .wave-green {
            background: rgba(74, 222, 128, 0.4);
            animation: wave-flow 10s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s;
        }

        .central-light {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: radial-gradient(circle, #fff 10%, rgba(255, 255, 255, 0) 70%);
            filter: blur(15px);
            box-shadow: 0 0 30px #22d3ee, 0 0 50px #4ade80;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .brain-container {
            filter: drop-shadow(0 0 5px #4ade80) drop-shadow(0 0 8px #22d3ee);
        }

        .text-shadow-glow {
            animation: text-shadow-glow 4s infinite alternate;
        }
      `}</style>
    </>
  );
}