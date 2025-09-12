import Head from 'next/head';

export default function QuantumServerAnimation() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | Server Animation</title>
      </Head>

      {/* Main container with dark background */}
      <div className="flex items-center justify-center w-[340px] h-[480px] relative overflow-hidden bg-[#1A1A1A] font-sans">
        
        {/* Main Animation Area */}
        <div className="relative w-full h-full flex items-center justify-center">

          {/* The Server Container */}
          <div className="server-container relative z-10 w-[300px] h-[500px] flex-shrink-0">
            {/* The main body of the server */}
            <div className="server-body w-full h-full bg-[#111] border border-[#222] shadow-2xl animate-server-glow"></div>
            
            {/* The glowing lines on the server front */}
            <div className="glowing-lines absolute inset-0 flex flex-col justify-around px-8 py-12">
              <div className="glowing-line animate-pulse"></div>
              <div className="glowing-line animate-pulse delay-500"></div>
              <div className="glowing-line animate-pulse delay-1000"></div>
              <div className="glowing-line animate-pulse delay-1500"></div>
              <div className="glowing-line animate-pulse delay-2000"></div>
            </div>
          </div>

          {/* The Data Stream Container */}
          <div className="data-stream-container relative w-full h-full flex-grow flex items-center">
            {/* The flowing line animation */}
            <div className="data-stream absolute w-full h-1/2 left-0 top-1/2 -translate-y-1/2 animate-data-stream-flow"></div>
          </div>

          {/* Centered Text Container */}
          <div className="absolute z-20 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[20%] md:ml-[15%]">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest text-shadow-glow">
              QUANTUM
            </h1>
            <p className="text-white text-md sm:text-lg md:text-xl font-light tracking-[0.4em] mt-2 text-shadow-glow">
              INNOVATIONS
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Import a professional font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* * Keyframe Animations * */
        @keyframes server-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }
          50% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px #4ade80; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes data-stream-flow {
            0% { background-position: 0 0; }
            100% { background-position: 100% 100%; }
        }

        @keyframes text-shadow-glow {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #4ade80; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #4ade80, 0 0 30px #22d3ee; }
        }

        /* * Main Styles * */
        .server-body {
          background: #111;
          transform: perspective(1000px) rotateY(15deg) rotateX(5deg);
        }

        .glowing-lines {
          transform: perspective(1000px) rotateY(15deg) rotateX(5deg);
        }
        
        .glowing-line {
          height: 15px;
          background-color: #4ade80;
          border-radius: 5px;
          filter: blur(1px);
        }
        
        .data-stream {
          background-image: 
            radial-gradient(circle, #4ade80 2px, transparent 3px),
            linear-gradient(to right, #4ade80, #22d3ee);
          background-size: 50px 50px, 100% 100%;
          background-repeat: repeat-x, no-repeat;
          transform: skewY(15deg);
          animation: data-stream-flow 10s infinite linear;
          filter: blur(1px);
        }

        .text-shadow-glow {
          animation: text-shadow-glow 3s infinite alternate;
        }
      `}</style>
    </>
  );
}