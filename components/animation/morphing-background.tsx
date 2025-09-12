"use client";

import { useEffect, useRef } from "react";

const MorphingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawMorphingShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create multiple morphing blobs
      for (let i = 0; i < 2; i++) {
        const offsetX = Math.sin(time * 0.0005 + i * 2) * 100;
        const offsetY = Math.cos(time * 0.0008 + i * 2) * 75;

        const gradient = ctx.createRadialGradient(
          centerX + offsetX,
          centerY + offsetY,
          0,
          centerX + offsetX,
          centerY + offsetY,
          300
        );

        const colors = [
          ["rgba(0, 188, 212, 0.05)", "rgba(0, 188, 212, 0)"],
          ["rgba(156, 39, 176, 0.05)", "rgba(156, 39, 176, 0)"],
        ];

        gradient.addColorStop(0, colors[i][0]);
        gradient.addColorStop(1, colors[i][1]);

        ctx.fillStyle = gradient;
        ctx.beginPath();

        // Create morphing blob shape
        const points = 8;
        const radius = 150 + Math.sin(time * 0.001 + i) * 25;

        for (let j = 0; j <= points; j++) {
          const angle = (j / points) * Math.PI * 2;
          const r = radius + Math.sin(angle * 3 + time * 0.003) * 30;
          const x = centerX + offsetX + Math.cos(angle) * r;
          const y = centerY + offsetY + Math.sin(angle) * r;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.fill();
      }

      time += 16;
    };

    const animate = () => {
      drawMorphingShapes();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className=" inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

export default MorphingBackground;


export const MorphingBackgroundAnimation = () => {
  return (
    <div className="relative w-[340px] h-[480px]  overflow-hidden flex items-center justify-center font-inter bg-gray-50">
      <MorphingBackground />
      
    </div>
  );
}