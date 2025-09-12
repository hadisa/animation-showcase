import React from 'react';
import Head from 'next/head';

export default function QuantumNetworkComponent() {
  return (
    <>
      <Head>
        <title>Quantum Innovations | Network Animation</title>
      </Head>

      {/* Main container without full screen styling */}
      <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-[#001f3f] to-[#0a4a40]">
        
        {/* Central glowing light source */}
        <div className="central-light absolute w-full h-full rounded-full bg-blue-400 z-10 animate-pulse-glow"></div>

        {/* Background Network Grid - Layer 1 */}
        <div className="network-grid network-grid-bg absolute inset-0 z-0"></div>

        {/* Foreground Network Grid - Layer 2 (more intense) */}
        <div className="network-grid network-grid-fg absolute inset-0 z-20"></div>

        {/* Floating Triangles */}
        <div className="triangle-container absolute inset-0 z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`floating-triangle absolute ${
                i % 2 === 0 ? 'bg-green-400' : 'bg-blue-400'
              } animate-triangle-float`}
              style={{
                '--random-x': `${Math.random() * 200 - 100}px`,
                '--random-y': `${Math.random() * 200 - 100}px`,
                '--random-delay': `${Math.random() * 8}s`,
                '--random-duration': `${8 + Math.random() * 4}s`,
                '--random-size': `${50 + Math.random() * 100}px`,
                '--random-start-opacity': `${0.2 + Math.random() * 0.3}`,
                '--random-end-opacity': `${0.6 + Math.random() * 0.4}`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
              } as React.CSSProperties}
            ></div>
          ))}
        </div>

      </div>

      <style jsx>{`
        /* * CSS Variables for easier customization * */
        :root {
          --blue-color: #00bfff;
          --green-color: #39ff14;
          --light-glow: #ffffff;
          --bg-start: #001f3f;
          --bg-end: #0a4a40;
        }

        /* * Keyframe Animations * */
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.6;
            filter: blur(40px) brightness(1.2) drop-shadow(0 0 80px var(--blue-color));
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
            filter: blur(60px) brightness(1.5) drop-shadow(0 0 120px var(--blue-color));
          }
        }

        @keyframes network-flow-bg {
          from {
            transform: perspective(1000px) rotateX(45deg) translateY(0) scale(1);
            opacity: 0.3;
          }
          to {
            transform: perspective(1000px) rotateX(45deg) translateY(-200px) scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes network-flow-fg {
          from {
            transform: perspective(1000px) rotateX(45deg) translateY(0) scale(1);
            opacity: 0.6;
          }
          to {
            transform: perspective(1000px) rotateX(45deg) translateY(-300px) scale(1.5);
            opacity: 0.3;
          }
        }

        @keyframes triangle-float {
          0% {
            transform: translate(var(--random-x), var(--random-y)) rotateY(0deg) scale(0.5);
            opacity: var(--random-start-opacity);
          }
          50% {
            transform: translate(calc(var(--random-x) * 1.5), calc(var(--random-y) * 1.5)) rotateY(180deg) scale(1.2);
            opacity: var(--random-end-opacity);
          }
          100% {
            transform: translate(var(--random-x), var(--random-y)) rotateY(360deg) scale(0.5);
            opacity: var(--random-start-opacity);
          }
        }

        /* * Main Styles * */
        .min-h-screen {
          background: linear-gradient(to bottom right, var(--bg-start), var(--bg-end));
        }

        .central-light {
          filter: blur(50px);
          animation: pulse-glow 6s infinite alternate ease-in-out;
        }

        .network-grid {
          transform-style: preserve-3d;
          background-image:
            radial-gradient(circle, var(--blue-color) 1px, transparent 1.5px),
            radial-gradient(circle, var(--green-color) 1px, transparent 1.5px),
            linear-gradient(to right, rgba(var(--blue-color), 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--green-color), 0.5) 1px, transparent 1px);
          
          background-size: 
            30px 30px, 30px 30px, 
            30px 30px, 30px 30px; 
          
          background-position: 
            0 0, 15px 15px, 
            0 0, 0 0; 
          
          width: 200%;
          height: 200%;
          bottom: 0;
          left: -50%;
          
          transform-origin: bottom center;
          pointer-events: none;
        }

        .network-grid-bg {
          animation: network-flow-bg 40s infinite linear;
        }

        .network-grid-fg {
          animation: network-flow-fg 25s infinite linear;
          filter: brightness(1.2);
        }

        .floating-triangle {
          width: var(--random-size);
          height: var(--random-size);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          filter: blur(0.5px) drop-shadow(0 0 5px var(--blue-color));
          transform-style: preserve-3d;
          transform-origin: center center;
          animation: triangle-float var(--random-duration) infinite alternate ease-in-out var(--random-delay);
        }
      `}</style>
    </>
  );
}