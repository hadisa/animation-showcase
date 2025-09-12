import Head from 'next/head';

export default function QuantumShapesAnimationFour() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | Four Squares Animation</title>
      </Head>

      {/* Main container with a gradient background and centering */}
      <div className="flex items-center justify-center w-[340px] h-[480px] relative overflow-hidden bg-gradient-to-br from-[#061833] to-[#011421]">

        {/* The Animated Shapes */}
        <div className="shapes-container relative w-full h-full">
          {/* Top-left shape */}
          <div className="shape shape-top-left absolute w-96 h-96 top-0 left-0 animate-shape-float"></div>
          {/* Bottom-right shape */}
          <div className="shape shape-bottom-right absolute w-96 h-96 bottom-0 right-0 animate-shape-float-reverse"></div>
          {/* Top-right shape */}
          <div className="shape shape-top-right absolute w-96 h-96 top-0 right-0 animate-shape-float-reverse"></div>
          {/* Bottom-left shape */}
          <div className="shape shape-bottom-left absolute w-96 h-96 bottom-0 left-0 animate-shape-float"></div>
        </div>

        {/* Content container for text and the frame */}
        <div className="content-container relative z-10 p-8">
          {/* The glowing frame */}
          <div className="frame relative mx-auto my-0 w-max animate-frame-glow">
            {/* The Text */}
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-widest text-shadow-glow">
              QUANTUM
            </h1>
            <p className="text-white text-xl md:text-2xl font-light tracking-[0.4em] mt-2 text-shadow-glow">
              INNOVATIONS
            </p>
          </div>
        </div>
      </div>

      {/* Embedded CSS for animations and complex styling */}
      <style jsx>{`
        /* Keyframe Animations */
        @keyframes shape-float {
          0% { transform: rotate(10deg); }
          50% { transform: rotate(15deg); }
          100% { transform: rotate(10deg); }
        }

        @keyframes shape-float-reverse {
          0% { transform: rotate(-10deg); }
          50% { transform: rotate(-15deg); }
          100% { transform: rotate(-10deg); }
        }

        @keyframes frame-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.4); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(100, 200, 255, 0.6); }
        }

        @keyframes text-shadow-glow {
          0%, 100% { text-shadow: 0 0 8px rgba(255, 255, 255, 0.8); }
          50% { text-shadow: 0 0 16px rgba(255, 255, 255, 1), 0 0 24px rgba(100, 200, 255, 0.6); }
        }

        /* Shape Styling and Gradients */
        .shape {
          transform-origin: center center;
          opacity: 0.6;
          transition: all 0.3s ease-in-out;
          pointer-events: none;
        }
        
        .shape-top-left, .shape-bottom-left {
          background: linear-gradient(135deg, rgba(6, 19, 51, 0.6), rgba(34, 103, 177, 0.8));
          backdrop-filter: blur(10px);
          transform: rotate(10deg);
          animation: shape-float 8s infinite ease-in-out;
          border-radius: 0;
        }

        .shape-top-right, .shape-bottom-right {
          background: linear-gradient(135deg, rgba(74, 222, 128, 0.6), rgba(33, 172, 107, 0.8));
          backdrop-filter: blur(10px);
          transform: rotate(-10deg);
          animation: shape-float-reverse 8s infinite ease-in-out;
          border-radius: 0;
        }

        /* The Frame Styling */
        .frame {
          border: 2px solid white;
          padding: 30px 50px;
          animation: frame-glow 4s infinite alternate;
        }
        
        .frame::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px;
          width: 25%;
          height: 100%;
          background: linear-gradient(90deg, transparent, white, transparent);
          transform: rotate(-45deg);
          animation: frame-line-anim 3s infinite linear;
          opacity: 0.8;
          filter: blur(2px);
        }

        @keyframes frame-line-anim {
            0% { transform: translateX(0) scaleX(0); }
            50% { transform: translateX(100%) scaleX(1); }
            100% { transform: translateX(200%) scaleX(0); }
        }
      `}</style>
    </>
  );
}