import { cn } from '@/lib/utils';
import React from 'react';

// --- Core Card Components (for structure) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative rounded-[16px]", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-bold", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

// --- The Ornate Game Card Component ---
interface OrnateGameCardProps {
  heroType?: string;
  imageSrc: string;
  heroName: string;
  attack: number;
  defense: number;
  description: string;
}

export default function OrnateGameCard4({
  heroType = "Hero",
  imageSrc = "./2.png",
  heroName,
  attack,
  defense,
  description,
}: OrnateGameCardProps) {
  return (
    <div className='relative flex justify-center items-center w-full h-full'>
      <Card className="relative w-[340px] h-[480px] font-cinzel group">
        {/* Main card container with frame and shadows */}
        <div className="absolute inset-0 card-frame w-full h-full transition-transform duration-300 group-hover:scale-[1.03]">

          {/* Top Hero Banner */}
          <div className="card-banner card-banner-top absolute left-1/2 -translate-x-1/2 top-4">
            <span className="relative z-10 text-white font-bold text-lg">{heroType}</span>
          </div>

          {/* Character Image */}
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[90%] h-[230px] rounded-lg overflow-hidden border-[2px] border-[#695d3c] shadow-inner-image">
            <img src={imageSrc} alt={heroName} className="w-full h-full object-cover" />
          </div>

          {/* Content Box */}
          <div className="card-content-box text-[#a89b70] absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[90%] h-[120px] flex flex-col items-center justify-center p-2">
            <div className="text-[#a89b70] text-sm font-semibold mb-2">{description}</div>
            Placeholder for other content
            <div className="w-[80%] h-10 bg-[#353229] rounded-md border border-[#696452] shadow-inner-soft"></div>
          </div>

          {/* Attack & Defense Stats */}
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[90%] flex items-center justify-around text-center">
            <div className="card-stat card-stat-left flex items-center justify-center">
              <span className="text-white text-md font-bold leading-none">{attack}</span>
            </div>
            <div className="card-stat card-stat-right flex items-center justify-center">
              <span className="text-white text-md font-bold leading-none">{defense}</span>
            </div>
          </div>
        </div>

        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
        .font-cinzel {
          font-family: 'Cinzel', serif;
        }

        /* --- Global Styles and Animations --- */
        .group:hover .card-frame {
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6), inset 0 0 10px rgba(0, 0, 0, 0.8), inset 0 0 5px rgba(255, 255, 255, 0.2);
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
          position: relative;
        }

        .card-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("https://i.imgur.com/g8v0s8h.png"); /* Placeholder for filigree texture */
          background-size: 100% 100%;
          opacity: 0.8;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        /* --- Banners --- */
        .card-banner {
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease-out;
        }
        .card-banner-top {
          width: 120px;
          height: 35px;
        }

        /* --- Content Box --- */
        .card-content-box {
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
        }
        .card-stat-left {
        }
        .card-stat-right {
        }
      `}</style>
      </Card>
    </div>
  );
}