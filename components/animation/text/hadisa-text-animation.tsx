import React, { useEffect, useRef, useState } from 'react';

const TEXT = "HADISA";
const DOT_COUNT = 1000;
const DURATION = 2; // Animation duration in seconds

interface Dot {
  id: number;
  x: number;
  y: number;
  finalX: number;
  finalY: number;
  delay: number;
}

const getCharPoints = (char: string, scale: number = 1) => {
  // A simple, hard-coded representation of letters as point arrays
  // for a clean, professional look.
  const points: { [key: string]: [number, number][] } = {
    'H': [[0,0],[0,2],[0,4],[0,6],[0,8],[0,10],[1,5],[2,5],[3,5],[4,5],[5,0],[5,2],[5,4],[5,6],[5,8],[5,10]],
    'A': [[0,2],[0,4],[0,6],[0,8],[0,10],[1,0],[2,0],[3,0],[4,2],[4,4],[4,6],[4,8],[4,10],[1,5],[2,5],[3,5]],
    'D': [[0,0],[0,2],[0,4],[0,6],[0,8],[0,10],[1,0],[2,0],[3,1],[4,2],[4,4],[4,6],[3,7],[2,8],[1,8],[1,10]],
    'I': [[0,0],[1,0],[2,0],[3,0],[4,0],[2,2],[2,4],[2,6],[2,8],[2,10],[0,10],[1,10],[3,10],[4,10]],
    'S': [[0,2],[0,3],[1,0],[2,0],[3,0],[4,1],[4,2],[3,5],[2,5],[1,5],[0,6],[0,7],[1,8],[2,8],[3,8],[4,7]],
    'A2': [[0,2],[0,4],[0,6],[0,8],[0,10],[1,0],[2,0],[3,0],[4,2],[4,4],[4,6],[4,8],[4,10],[1,5],[2,5],[3,5]],
  };
  return points[char] || [];
};

export default function HadisaTextAnimation() {
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
      const startX = (width / 2) - (TEXT.length * (charWidth + letterSpacing) / 2) + (charWidth / 2);
      
      let currentX = startX;

      for (let i = 0; i < TEXT.length; i++) {
        const char = TEXT[i];
        const points = getCharPoints(char);
        const dotPerChar = Math.floor(DOT_COUNT / TEXT.length);

        for (let j = 0; j < dotPerChar; j++) {
          const point = points[j % points.length];
          newDots.push({
            id: newDots.length,
            x: Math.random() * width,
            y: Math.random() * height,
            finalX: currentX + point[0] * 5,
            finalY: (height / 2) - 50 + point[1] * 5,
            delay: Math.random() * 0.5,
          });
        }
        currentX += letterSpacing;
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <div ref={containerRef} className="relative w-[340px] h-[480px] bg-black overflow-hidden">
      {dots.map(dot => (
        <div
          key={dot.id}
          className="absolute w-1 h-1 bg-green-400 rounded-full"
          style={{
            transform: `translate(${dot.x}px, ${dot.y}px)`,
            '--final-x': `${dot.finalX}px`,
            '--final-y': `${dot.finalY}px`,
            animation: `move-to-final ${DURATION}s ease-in-out forwards ${dot.delay}s`,
            boxShadow: `0 0 5px #4ade80`,
          } as React.CSSProperties}
        />
      ))}

      <style jsx>{`
        @keyframes move-to-final {
          to {
            transform: translate(var(--final-x), var(--final-y));
            box-shadow: 0 0 10px #4ade80, 0 0 20px #22d3ee;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}