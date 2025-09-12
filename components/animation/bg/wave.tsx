import React from "react";

function WaveBg() {
  return (
    <div className="w-full h-full">
      <div className="relative py-24 bg-muted/30 min-h-screen">
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute w-full h-full opacity-90 animate-wave-bg"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,224C960,224,1056,256,1152,272C1248,288,1344,288,1392,288L1440,288L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
            ></path>
            <path
              fill="url(#waveGradient)"
              d="M0,320L48,309.3C96,299,192,277,288,266.7C384,256,480,256,576,261.3C672,267,768,277,864,282.7C960,288,1056,288,1152,277.3C1248,267,1344,245,1392,234.7L1440,224L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
              opacity="0.7"
            ></path>
            <path
              fill="url(#waveGradient)"
              d="M0,416L48,405.3C96,395,192,373,288,373.3C384,373,480,395,576,394.7C672,395,768,373,864,362.7C960,352,1056,352,1152,352C1248,352,1344,352,1392,352L1440,352L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
              opacity="0.5"
            ></path>
          </svg>
        </div>

        <style jsx global>{`
        @keyframes wave-bg {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-50px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-wave-bg {
          animation: wave-bg 20s ease-in-out infinite;
        }
      `}</style>
      </div>
    </div>
  );
}

export default WaveBg;