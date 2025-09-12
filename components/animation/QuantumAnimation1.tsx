import Head from 'next/head';

export default function QuantumAnimation1() {
  return (
    <>
      <Head>
        <title>Quantum Innovations Animation</title>
      </Head>
      <div className="flex items-center justify-center w-[340px] h-[480px] bg-[#0E1521] overflow-hidden relative">
        <div className="relative w-full max-w-[1200px] aspect-[16/9] flex items-center justify-center">

          {/* Brain and Neural Network Container */}
          <div className="brain-container relative w-full h-full flex items-center justify-center">

            {/* Central Glowing Core */}
            <div className="core-glow absolute w-20 h-20 rounded-full bg-white blur-xl z-10 animate-core-pulse"></div>

            {/* The Animated Brain Lines and Dots (created with CSS) */}
            <div className="brain absolute w-[70%] h-[70%] z-20 animate-brain-glow"></div>

            {/* Radiating Waves from the Core */}
            <div className="wave-line wave-1 absolute"></div>
            <div className="wave-line wave-2 absolute"></div>
            <div className="wave-line wave-3 absolute"></div>

            {/* Glowing Text */}
            <div className="absolute bottom-[20%] text-center z-30">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-white leading-none animate-text-glow-main">
                QUANTUM
              </h1>
              <p className="text-xl md:text-3xl font-thin tracking-[0.6em] text-white mt-2 animate-text-glow-sub">
                INNOVATIONS
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* * Keyframe Animations
         * * The core of the animation logic. We define how each
         * element's properties (like color, shadow, position)
         * change over time.
         */
        @keyframes core-pulse {
          0%, 100% { transform: scale(0.9); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        @keyframes wave-flow {
          0% { transform: scaleX(0.1); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }

        @keyframes brain-glow-effect {
            0%, 100% { box-shadow: 0 0 10px #4ade80, 0 0 20px #22d3ee; }
            50% { box-shadow: 0 0 20px #4ade80, 0 0 40px #22d3ee; }
        }

        @keyframes text-glow-effect {
            0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #22d3ee; }
            50% { text-shadow: 0 0 10px #fff, 0 0 20px #22d3ee, 0 0 30px #4ade80; }
        }

        /* * Main Component Styles
         * * Using CSS pseudo-elements to create the complex shapes 
         * of the brain and lines without needing SVG.
         */
        .brain {
          position: absolute;
          background-color: transparent;
          border: 2px solid rgba(34, 211, 238, 0.5); /* Cyan border */
          border-radius: 50%;
          box-shadow: 0 0 15px #22d3ee, inset 0 0 15px #22d3ee;
          animation: brain-glow-effect 4s infinite alternate;
        }

        .brain::before, .brain::after {
          content: '';
          position: absolute;
          border-radius: 50%;
        }

        .brain::before {
            width: 80%;
            height: 80%;
            border: 2px solid rgba(74, 222, 128, 0.5); /* Green border */
            top: 10%;
            left: 10%;
            animation: brain-glow-effect 4s infinite alternate;
        }

        .brain::after {
            width: 60%;
            height: 60%;
            border: 2px solid rgba(34, 211, 238, 0.5); /* Cyan border */
            top: 20%;
            left: 20%;
            animation: brain-glow-effect 4s infinite alternate;
        }

        .wave-line {
          height: 3px;
          background: linear-gradient(to right, transparent, rgba(34, 211, 238, 0.8), rgba(74, 222, 128, 0.8), transparent);
          transform-origin: left;
          animation: wave-flow 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        .wave-1 { 
          width: 500px; 
          top: 30%; 
          left: 50%;
          transform-origin: left;
          animation-delay: 0s;
        }
        .wave-2 { 
          width: 600px; 
          top: 40%;
          left: 50%;
          transform-origin: left;
          animation-delay: 1s;
        }
        .wave-3 { 
          width: 700px; 
          top: 50%;
          left: 50%;
          transform-origin: left;
          animation-delay: 2s;
        }

        .animate-text-glow-main { animation: text-glow-effect 3s infinite alternate; }
        .animate-text-glow-sub { animation: text-glow-effect 3s infinite alternate 0.5s; }
      `}</style>
    </>
  );
}