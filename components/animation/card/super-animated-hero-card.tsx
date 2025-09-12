'use client'; // Essential for client-side interactions and animations

import { cn } from '@/lib/utils';
import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- Core Card Components for a clean structure (retained for consistency) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative rounded-[16px]", className)}
    {...props}
  />
));
Card.displayName = "Card";

// --- The Super Animated Hero Card Component ---
interface SuperAnimatedHeroCardProps {
  heroType?: string;
  baseImageSrc: string; // The initial image for the character
  hoverImageSrc: string; // The image shown on hover
  heroName: string;
  attack: number;
  defense: number;
  description: string;
}

export default function SuperAnimatedHeroCard({
  heroType = "Hero",
  baseImageSrc="./3.png",
  hoverImageSrc="./4.png",
  heroName,
  attack,
  defense,
  description,
}: SuperAnimatedHeroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Adjust rotation sensitivity
    const rx = (mouseY / rect.height) * 20; // Max 20 degrees tilt
    const ry = (mouseX / rect.width) * 20;  // Max 20 degrees tilt

    setRotateX(-rx);
    setRotateY(ry);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  }, []);

  useEffect(() => {
    // Inject custom CSS to handle random sparkle animation, as it's hard with just Tailwind
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .sparkle-bg {
        background-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.05) 0%, transparent 80%);
        animation: sparkle-flicker 10s infinite alternate;
      }
      @keyframes sparkle-flicker {
        0%, 100% { opacity: 0.1; }
        25% { opacity: 0.15; }
        50% { opacity: 0.1; }
        75% { opacity: 0.12; }
      }
    `;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="relative w-[340px] h-[480px] font-cinzel group perspective"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
        transition: isHovered ? 'transform 0.1s linear' : 'transform 0.3s ease-out',
        willChange: 'transform',
      }}
    >
      {/* Main card container with frame and shadows */}
      <div className={cn(
          "absolute w-full h-full inset-0 card-frame transition-all duration-300",
          isHovered ? 'hovered' : 'idle'
        )}>
        
        {/* Top Hero Banner */}
        <div className="card-banner card-banner-top absolute left-1/2 -translate-x-1/2 top-4">
          <span className="relative z-10 text-white font-bold text-lg text-shadow-heavy">{heroType}</span>
        </div>
        
        {/* Character Image - Uses background-image for cross-fade */}
        <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-full h-full rounded-lg overflow-hidden border-[2px] border-[#695d3c] shadow-inner-image character-image-container">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{ backgroundImage: `url(${baseImageSrc})`, opacity: isHovered ? 0 : 1 }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{ backgroundImage: `url(${hoverImageSrc})`, opacity: isHovered ? 1 : 0 }}
          />
          <div className="sparkle-bg absolute inset-0 opacity-10"></div> {/* Subtle inner sparkle */}
        </div>
        

   
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
        .font-cinzel {
          font-family: 'Cinzel', serif;
        }

        /* --- Global Shadows and Effects --- */
        .text-shadow-heavy {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), 0 0 5px rgba(0, 0, 0, 0.8);
        }
        .shadow-inner-image {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.7), inset 0 0 5px rgba(0, 0, 0, 0.5);
        }
        .shadow-inner-soft {
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .perspective {
          perspective: 1000px;
        }

        /* --- Card Frame & Base Styling --- */
        .card-frame {
          background-color: #55523a; /* Base color for the frame */
          border-radius: 16px;
          border: 4px solid #b19d5f; /* Inner gold border */
          box-shadow: 
            0 0 10px rgba(0, 0, 0, 0.6), /* Outer shadow */
            inset 0 0 15px rgba(0, 0, 0, 0.8), /* Inner dark shadow */
            inset 0 0 10px rgba(255, 255, 255, 0.1); /* Inner light highlight */
          overflow: hidden;
          transform-style: preserve-3d; /* For 3D tilt */
          animation: card-idle-float 8s ease-in-out infinite; /* Persistent subtle animation */
        }

        .card-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background-image: url("http://googleusercontent.com/file_content/22"); /* !!! REPLACE WITH YOUR ORNATE FILIGREE IMAGE !!! */
          background-size: 100% 100%;
          opacity: 0.8;
          mix-blend-mode: multiply;
          pointer-events: none;
          filter: drop-shadow(0 0 5px rgba(255, 223, 128, 0.2)); /* Base glow */
          transition: filter 0.3s ease-out;
        }
        .card-frame.hovered::before {
            filter: drop-shadow(0 0 15px rgba(255, 240, 180, 0.8)) brightness(1.2);
        }

        /* --- Banners --- */
        .card-banner {
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease-out;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,0.7));
        }
        .card-banner-top {
          background-image: url("https://i.imgur.com/q7z5v7c.png"); /* !!! REPLACE WITH YOUR TOP BANNER IMAGE !!! */
          width: 120px;
          height: 35px;
        }

        /* --- Content Box --- */
        .card-content-box {
          background-image: url("https://i.imgur.com/2Y44q5A.png"); /* !!! REPLACE WITH YOUR CONTENT BOX IMAGE !!! */
          background-size: 100% 100%;
          border: 2px solid #696452;
          border-radius: 12px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.7);
        }

        /* --- Stats --- */
        .card-stat {
          background-size: 100% 100%;
          width: 60px;
          height: 60px;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,0.7));
          transition: filter 0.3s ease-out;
        }
        .card-stat-left {
          background-image: url("https://i.imgur.com/example_attack_icon.png"); /* !!! REPLACE WITH YOUR ATTACK ICON IMAGE !!! */
        }
        .card-stat-right {
          background-image: url("https://i.imgur.com/example_defense_icon.png"); /* !!! REPLACE WITH YOUR DEFENSE ICON IMAGE !!! */
        }

        /* --- Keyframe Animations --- */
        @keyframes card-idle-float {
            0%, 100% {
                transform: translateY(0px) rotateX(0deg) rotateY(0deg);
            }
            50% {
                transform: translateY(-2px) rotateX(0.5deg) rotateY(-0.5deg);
            }
        }
      `}</style>
    </Card>
  );
}