import Head from 'next/head';

export default function QuantumAnimationBest() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | The Best Animation</title>
      </Head>

      {/* Main container: Full screen, dark background, centered content, using CSS variables for colors */}
      <div className="w-[340px] h-[480px] flex items-center justify-center bg-[var(--bg-color)] text-white font-sans relative overflow-hidden">

        {/* Aspect ratio container for consistent scaling */}
        <div className="relative w-full max-w-screen-2xl aspect-[16/9] flex items-center justify-center p-4 md:p-8">

          {/* Brain Animation Area: The central stage for the entire animation */}
          <div className="brain-animation-area relative w-full h-full flex items-center justify-center">

            {/* Central Glowing Core: The source of the energy in the brain's center */}
            <div className="core-glow absolute w-24 h-24 rounded-full z-20 animate-core-pulse"></div>

            {/* Radiating Waves from sides & bottom */}
            <div className="waves-container absolute inset-0 z-0">
              <div className="wave-group group-1 absolute"></div>
              <div className="wave-group group-2 absolute"></div>
              <div className="wave-group group-3 absolute"></div>
            </div>

            {/* Radiating Straight Lines from the top */}
            <div className="straight-lines-container absolute inset-0 z-0">
              <div className="straight-line line-1 absolute"></div>
              <div className="straight-line line-2 absolute"></div>
              <div className="straight-line line-3 absolute"></div>
            </div>
            
            {/* The Stylized Brain Shape & Neural Network */}
            <div className="stylized-brain absolute w-[80%] md:w-[60%] lg:w-[45%] xl:w-[40%] aspect-square z-10 animate-brain-glow">
              {/* This inner div simulates the flowing neural connections */}
              <div className="neural-connections absolute inset-0 z-30"></div>
            </div>

            {/* Glowing Text */}
            <div className="absolute bottom-[20%] text-center z-40">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest leading-none animate-text-glow-main">
                QUANTUM
              </h1>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-thin tracking-[0.6em] mt-2 animate-text-glow-sub">
                INNOVATIONS
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Global CSS Variables for consistent branding and easy updates */
        :root {
          --bg-color: #0A101A;
          --blue-light: #22d3ee;
          --blue-dark: #008cff;
          --green-light: #4ade80;
          --green-dark: #007d3b;
          --white-light: #f3f4f6;
        }

        /* Use a modern, professional font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* * Keyframe Animations: Carefully crafted for smooth, realistic motion.
         * * These animations are the core of the visual effects.
         */

        /* Core Pulse: The central light's pulsating, volumetric glow */
        @keyframes core-pulse {
          0%, 100% { 
            transform: scale(0.9); 
            opacity: 0.9;
            box-shadow: 0 0 20px 10px rgba(var(--white-light), 0.4), 0 0 40px 20px rgba(var(--blue-light), 0.6);
          }
          50% { 
            transform: scale(1.1); 
            opacity: 1; 
            box-shadow: 0 0 30px 15px rgba(var(--white-light), 0.6), 0 0 60px 30px rgba(var(--blue-light), 0.8), 0 0 80px 40px rgba(var(--green-light), 0.4);
          }
        }

        /* Radiating Wave Flow: For the curved lines. Uses a more advanced cubic-bezier for a natural, elegant feel. */
        @keyframes wave-flow {
          0% { transform: translateX(-100%) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(100%) scale(1.2); opacity: 0; }
        }

        /* Straight Line Flow: For the vertical lines from the top, giving a sense of data stream. */
        @keyframes line-flow {
          0% { transform: translateY(-100%) scaleY(0.1); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(100%) scaleY(1.5); opacity: 0; }
        }

        /* Brain Glow: A subtle, powerful glow that makes the brain feel alive. */
        @keyframes brain-glow-effect {
            0%, 100% { filter: drop-shadow(0 0 10px var(--blue-light)) drop-shadow(0 0 20px var(--green-light)); }
            50% { filter: drop-shadow(0 0 20px var(--blue-light)) drop-shadow(0 0 40px var(--green-light)) drop-shadow(0 0 60px var(--white-light)); }
        }

        /* Text Glow: A deeply layered text glow for a premium look. */
        @keyframes text-glow-effect {
            0%, 100% { text-shadow: 0 0 8px var(--white-light), 0 0 16px var(--blue-light), 0 0 24px var(--green-light); }
            50% { text-shadow: 0 0 16px var(--white-light), 0 0 32px var(--blue-light), 0 0 48px var(--green-light), 0 0 64px var(--white-light); }
        }

        /* * Component Styling: Structured and elegant.
         * * These styles use a combination of simple shapes and complex gradients to mimic the image's visuals.
         */

        /* Stylized Brain: Uses multiple layers for a believable organic shape */
        .stylized-brain {
          position: relative;
          border-radius: 45% 55% 50% 50% / 60% 40% 60% 40%;
          border: 2px solid rgba(var(--blue-light), 0.4);
          background: radial-gradient(circle at center, rgba(var(--blue-light), 0.05) 0%, rgba(0,0,0,0) 70%);
          transform: rotate(-10deg);
          animation: brain-glow-effect 4s infinite alternate ease-in-out;
          filter: drop-shadow(0 0 10px rgba(var(--blue-light), 0.5));
        }

        /* Nested pseudo-elements for layered borders and glow */
        .stylized-brain::before, .stylized-brain::after {
          content: '';
          position: absolute;
          border-radius: 48% 52% 47% 53% / 58% 42% 58% 42%;
          top: 0; left: 0; width: 100%; height: 100%;
          transform: rotate(5deg);
        }

        .stylized-brain::before {
          border: 2px solid rgba(var(--green-light), 0.4);
          animation: brain-glow-effect 4s infinite alternate ease-in-out 0.5s;
          filter: drop-shadow(0 0 8px rgba(var(--green-light), 0.5));
        }
        
        /* Neural Connections: Simulates the internal lines and dots. */
        .neural-connections {
          background-image: 
            radial-gradient(circle at 20% 30%, var(--blue-light) 2px, transparent 3px),
            radial-gradient(circle at 70% 60%, var(--green-light) 2px, transparent 3px),
            radial-gradient(circle at 45% 80%, var(--blue-light) 2px, transparent 3px),
            radial-gradient(circle at 85% 20%, var(--green-light) 2px, transparent 3px),
            radial-gradient(circle at 10% 70%, var(--blue-light) 2px, transparent 3px),
            radial-gradient(circle at 60% 10%, var(--green-light) 2px, transparent 3px);
          background-size: 100% 100%;
          opacity: 0.7;
          animation: neural-dots-flicker 2s infinite alternate ease-in-out;
        }

        /* Waves and Straight Lines: A complex system of animated gradients and transforms */
        .wave-line-container, .straight-line-container {
          position: absolute;
          width: 150%; height: 150%;
          top: -25%; left: -25%;
          display: flex; justify-content: center; align-items: center;
          pointer-events: none;
        }

        .wave-group, .straight-line {
          position: absolute;
          pointer-events: none;
          background: linear-gradient(to right, transparent, rgba(var(--blue-light), 0.8), rgba(var(--green-light), 0.8), transparent);
        }

        .wave-group {
          width: 100%; height: 100%; border-radius: 50%;
          animation: wave-flow 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        .group-1 { animation-delay: 0s; transform: rotate(10deg); }
        .group-2 { animation-delay: 2s; transform: rotate(-5deg); }
        .group-3 { animation-delay: 4s; transform: rotate(25deg); }

        .straight-line {
          width: 4px; height: 100%;
          background: linear-gradient(to bottom, rgba(var(--blue-light), 0.8), rgba(var(--green-light), 0.8), transparent 70%);
          transform-origin: top center;
          animation: line-flow 4s ease-out infinite;
          opacity: 0;
          filter: blur(1px);
        }

        .line-1 { animation-delay: 0s; left: 20%; transform: translateX(-50%) rotate(5deg); }
        .line-2 { animation-delay: 1.3s; left: 50%; transform: translateX(-50%) rotate(-3deg); }
        .line-3 { animation-delay: 2.6s; left: 80%; transform: translateX(-50%) rotate(8deg); }
      `}</style>
    </>
  );
}