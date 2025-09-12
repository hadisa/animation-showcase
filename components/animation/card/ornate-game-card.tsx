import { cn } from '@/lib/utils';
import React from 'react';

// --- Core Card Components (for structure) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative rounded-xl", className)}
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
    heroType: string;
    imageSrc: string;
    characterName: string;
    power: number;
    defense: number;
    description: string;
    abilityIcon: string;
}

export default function OrnateGameCard({
    heroType,
    imageSrc = "./3.png",
    characterName,
    power,
    defense,
    description,
    abilityIcon,
}: OrnateGameCardProps) {
    return (
        <Card className="relative w-[340px] h-[480px] font-serif overflow-hidden">
            {/* The main card background frame */}
            <div className="absolute inset-0 card-frame">
                <div className="absolute inset-0.5 rounded-[12px] p-2 bg-gradient-to-br from-[#c9b363] to-[#e4d79b]">
                    <div className="absolute inset-0.5 rounded-[10px] p-1 bg-gradient-to-br from-[#1c1c1c] to-[#363636]">
                        {/* Inner Content Area */}
                        <div className="absolute inset-0.5 rounded-lg bg-[#2b2b2b] p-2">
                            <div className="absolute inset-0.5 rounded-md p-1 bg-[#1a1a1a]">
                                {/* Hero Type Banner */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg bg-[#2b2b2b] text-white text-xs font-bold uppercase tracking-widest">
                                    {heroType} title
                                </div>
                                {/* Character Image */}
                                <div className="h-[200px] w-full mt-4 rounded-md overflow-hidden border border-[#333]">
                                    <img src={imageSrc} alt={characterName} className="h-full w-full object-cover" />
                                </div>
                                {/* Character Name Banner */}
                                <div className="absolute top-[210px] left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#2b2b2b] text-white text-sm font-bold text-center border-2 border-transparent" style={{ borderColor: '#696452' }}>
                                    {characterName} amazing card
                                </div>

                                {/* Stats and Description */}
                                <div className="mt-[60px] p-2 flex flex-col items-center">
                                    <div className="w-full flex justify-around items-center border-t border-t-[#696452] pt-2">
                                        <div className="flex items-center space-x-2 text-white">
                                            <span className="text-[#696452]">⚔️</span>
                                            <span>Power: <span className="font-bold">{power}</span></span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-white">
                                            <span className="text-[#696452]">🛡️</span>
                                            <span>Defense: <span className="font-bold">{defense}</span></span>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center text-xs text-[#d3c089] leading-tight italic">
                                        {description} description come here
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
        .font-serif {
          font-family: 'Cinzel', serif;
        }

        .card-frame {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
        }

        .card-frame > div {
          box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .card-frame > div > div {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 5px rgba(255, 255, 255, 0.1);
        }
      `}</style>
        </Card>
    );
}