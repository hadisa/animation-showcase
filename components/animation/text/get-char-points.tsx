'use client'; // This is the fix
import React, { useEffect, useRef, useState } from "react";

interface DotTextProps {
  text: string;
  dotCount?: number;
  duration?: number;
  mainColor?: string;
  accentColor?: string;
};



interface Dot {
  id: number;
  x: number; // Initial random x position
  y: number; // Initial random y position
  finalX: number;
  finalY: number;
  delay: number;
}

const getCharPoints = (char: string) => {
  const points: { [key: string]: [number, number][] } = {
    H: [
      [0, 0], [0, 2], [0, 4], [0, 6], [0, 8], [0, 10], [1, 5], [2, 5], [3, 5], [4, 5], [5, 0], [5, 2], [5, 4], [5, 6], [5, 8], [5, 10],
    ],
    A: [
      [0, 2], [0, 4], [0, 6], [0, 8], [0, 10], [1, 0], [2, 0], [3, 0], [4, 2], [4, 4], [4, 6], [4, 8], [4, 10], [1, 5], [2, 5], [3, 5],
    ],
    D: [
      [0, 0], [0, 2], [0, 4], [0, 6], [0, 8], [0, 10], [1, 0], [2, 0], [3, 1], [4, 2], [4, 4], [4, 6], [3, 7], [2, 8], [1, 8], [1, 10],
    ],
    I: [
      [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, 2], [2, 4], [2, 6], [2, 8], [2, 10], [0, 10], [1, 10], [3, 10], [4, 10],
    ],
    S: [
      [0, 2], [0, 3], [1, 0], [2, 0], [3, 0], [4, 1], [4, 2], [3, 5], [2, 5], [1, 5], [0, 6], [0, 7], [1, 8], [2, 8], [3, 8], [4, 7],
    ],
    A2: [
      [0, 2], [0, 4], [0, 6], [0, 8], [0, 10], [1, 0], [2, 0], [3, 0], [4, 2], [4, 4], [4, 6], [4, 8], [4, 10], [1, 5], [2, 5], [3, 5],
    ],
  };
  return points[char.toUpperCase()] || [];
};

function ProfessionalDotText({
  text = "HADISA",
  dotCount = 1000,
  duration = 2,
  mainColor = "#4ade80",
  accentColor = "#22d3ee",
}: DotTextProps) {
  const [dots, setDots] = useState<Dot[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const generateDots = () => {
      const newDots: Dot[] = [];
      const letterSpacing = 80; // Pixels between letters
      const charWidth = 50;
      const startX =
        width / 2 -
        (text.length * (charWidth + letterSpacing)) / 2 +
        charWidth / 2;

      let currentX = startX;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const points = getCharPoints(char);
        const dotPerChar = Math.floor(dotCount / text.length);

        for (let j = 0; j < dotPerChar; j++) {
          const point = points[j % points.length];
          newDots.push({
            id: newDots.length,
            x: Math.random() * width, // Random x position generated on client
            y: Math.random() * height, // Random y position generated on client
            finalX: currentX + point[0] * 5,
            finalY: height / 2 - 50 + point[1] * 5,
            delay: Math.random() * 0.5,
          });
        }
        currentX += letterSpacing;
      }
      setDots(newDots);
    };

    generateDots();
  }, [text, dotCount]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden bg-black"
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dot-animation absolute w-1 h-1 rounded-full"
          style={
            {
              "--final-x": `${dot.finalX}px`,
              "--final-y": `${dot.finalY}px`,
              "--main-color": mainColor,
              "--accent-color": accentColor,
              animation: `move-to-final ${duration}s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards ${dot.delay}s`,
              left: `${dot.x}px`, // Using client-generated random x
              top: `${dot.y}px`, // Using client-generated random y
              boxShadow: `0 0 5px ${mainColor}`,
            } as React.CSSProperties
          }
        />
      ))}
      <style jsx>{`
        /* --- Background Animation --- */
        .bg-black {
          background: radial-gradient(circle at center, #101010, #000000);
          background-image: radial-gradient(circle, #333 1px, transparent 1px),
            radial-gradient(circle, #555 1px, transparent 1px);
          background-size: 20px 20px, 30px 30px;
          animation: starry-bg 120s linear infinite;
        }

        @keyframes starry-bg {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100% 100%;
          }
        }

        /* --- Dot Animation --- */
        @keyframes move-to-final {
          to {
            transform: translate(var(--final-x), var(--final-y));
            box-shadow: 0 0 10px var(--main-color), 0 0 20px var(--accent-color),
              0 0 30px var(--main-color);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}


const TextAnimation = () => {
  return (
    <>

      {/* This div will hold the animation. You can style it as needed. */}
      <div className="flex flex-col items-center justify-center bg-black min-h-screen">
        <ProfessionalDotText
          text="AWESOME"
          dotCount={1500}
          duration={3}
          mainColor="#FDE047"
          accentColor="#93C5FD"
        />
      </div>
    </>
  );
}
export default TextAnimation;