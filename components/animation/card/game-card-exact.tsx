"use client";
import React from 'react';

// A utility function for class names (assumed to be available)
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// --- Card Components (Shadcn-style for structure) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative z-20 rounded-xl bg-card text-card-foreground shadow-sm transition-all duration-300", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight text-white", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 text-slate-200", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0 text-sm text-slate-500", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// --- The Exact Game Card Component ---
interface GameCardExactProps {
  title: string;
  itemImage: string; // URL for the weapon/item image
  stats: { label: string; value: string }[];
  description: string;
  icons: string[]; // Array of icon URLs
  className?: string;
}

export default function GameCardExact({
  title,
  itemImage,
  stats,
  description,
  icons,
  className,
}: GameCardExactProps) {
  return (
    <div className="relative w-[340px] h-[480px] font-sans game-card-wrapper group">
      {/* Outer Glow & Border Structure (simulating the image's vibrant border) */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00F0FF] via-[#5B10B5] to-[#00F0FF] p-[2px] animate-pulse-border">
        <div className="w-full h-full rounded-xl bg-[#0D131C] p-0.5">
          <div className="w-full h-full rounded-[10px] bg-[#1A2536] relative overflow-hidden">
            {/* Inner card content container */}
            <div className="absolute inset-[2px] rounded-lg bg-[#0F172A] p-4 flex flex-col justify-between h-full w-full">
              {/* Card Title */}
              <div className="text-center font-bold text-lg text-[#00F0FF] tracking-wider uppercase mb-2">
                {title}
              </div>

              {/* Item Image */}
              <div className="relative flex-grow flex items-center justify-center min-h-[120px] mb-4">
                <img src={itemImage} alt={title} className="w-auto h-[120px] object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
                {/* Image Overlay/Glow - for added effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[rgba(0,240,255,0.1)] opacity-50"></div>
              </div>

              <div className="flex justify-between items-start mb-4">
                {/* Stats Section */}
                <div className="flex flex-col space-y-1 text-sm text-right pr-4 border-r border-[#00F0FF]/30">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-[#888] font-mono">
                      <span className="text-[#00F0FF]">{stat.value}</span>
                      <span className="ml-1">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="flex-1 pl-4 text-xs text-slate-400 leading-tight">
                  <span className="text-[#00F0FF] font-semibold block mb-1">YOUR TITLE</span>
                  {description}
                </div>
              </div>

              {/* Footer Icons */}
              <div className="flex justify-around items-center pt-3 border-t border-[#00F0FF]/30">
                {icons.map((icon, index) => (
                  <img key={index} src={icon} alt={`icon-${index}`} className="w-7 h-7 filter drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] opacity-80 hover:opacity-100 transition-opacity" />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Aldrich&family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif; /* For general text */
        }
        .font-aldrich {
          font-family: 'Aldrich', sans-serif; /* For futuristic titles/elements */
        }

        /* --- Keyframe Animations --- */
        @keyframes pulse-border {
          0% {
            background-position: 0% 50%;
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.4), inset 0 0 5px rgba(0, 240, 255, 0.2);
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 25px rgba(0, 240, 255, 0.8), inset 0 0 10px rgba(0, 240, 255, 0.4);
          }
          100% {
            background-position: 0% 50%;
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.4), inset 0 0 5px rgba(0, 240, 255, 0.2);
          }
        }

        .game-card-wrapper {
            box-shadow: 0 10px 30px rgba(0,0,0,0.6);
            transform: scale(1);
            transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
        }

        .game-card-wrapper:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 40px rgba(0,0,0,0.8);
        }

        .animate-pulse-border {
            background-size: 200% 200%;
            animation: pulse-border 4s ease infinite;
            filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.5));
            transition: filter 0.3s ease-out;
        }
        
        /* The main card body (bg-[#0F172A]) has a subtle inner shadow/glow */
        .game-card-wrapper > div > div > div > div {
            box-shadow: inset 0 0 20px rgba(0, 240, 255, 0.1);
        }
      `}</style>
    </div>
  );
}