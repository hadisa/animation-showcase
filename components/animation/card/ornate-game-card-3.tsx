import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';

// --- Core Card Components ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative rounded-[16px] overflow-hidden", className)}
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

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

// --- The Enhanced Ornate Animated Game Card Component ---
interface OrnateGameCardProps {
    heroType?: string;
    imageSrc: string;
    characterName: string;
    runeText: string;
    bottomLeftNumber: number;
    bottomRightTopNumber: number;
    bottomRightMiddleNumber: number;
    bottomRightBottomNumber: number;
    rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

export default function OrnateGameCard3({
    heroType = "HERO",
    imageSrc = "./bg1.png",
    characterName = "Character Name",
    runeText = "Ancient Runes",
    bottomLeftNumber = 7,
    bottomRightTopNumber = 5,
    bottomRightMiddleNumber = 3,
    bottomRightBottomNumber = 9,
    rarity = 'epic'
}: OrnateGameCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Rarity-based colors
    const rarityColors = {
        common: { glow: '#a8a8a8', border: '#c0c0c0', accent: '#e0e0e0' },
        rare: { glow: '#0070dd', border: '#1e90ff', accent: '#4fc3f7' },
        epic: { glow: '#a335ee', border: '#b967ff', accent: '#e066ff' },
        legendary: { glow: '#ff8000', border: '#ffaa00', accent: '#ffcc33' }
    };
    
    const currentRarity = rarityColors[rarity];
    
    // Parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current || !isHovered) return;
            
            const card = cardRef.current;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 5;
            const rotateX = ((centerY - y) / centerY) * 5;
            
            card.style.transform = `
                perspective(1000px) 
                rotateY(${rotateY}deg) 
                rotateX(${rotateX}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
            
            // Parallax for internal elements
            const shineElement = card.querySelector('.card-shine') as HTMLElement;
            if (shineElement) {
                const posX = (x / rect.width) * 100;
                const posY = (y / rect.height) * 100;
                shineElement.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255, 255, 255, 0.4), transparent 50%)`;
            }
        };
        
        const handleMouseLeave = () => {
            if (!cardRef.current) return;
            const card = cardRef.current;
            card.style.transform = '';
            
            const shineElement = card.querySelector('.card-shine') as HTMLElement;
            if (shineElement) {
                shineElement.style.background = '';
            }
        };
        
        if (cardRef.current) {
            cardRef.current.addEventListener('mousemove', handleMouseMove);
            cardRef.current.addEventListener('mouseleave', handleMouseLeave);
        }
        
        return () => {
            if (cardRef.current) {
                cardRef.current.removeEventListener('mousemove', handleMouseMove);
                cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isHovered]);
    
    return (
        <div className="relative w-[340px] h-[480px] mx-auto my-10" 
             onMouseEnter={() => setIsHovered(true)} 
             onMouseLeave={() => setIsHovered(false)}>
            {/* 3D Flip Container */}
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of Card */}
                <Card 
                    ref={cardRef}
                    className="absolute w-full h-full backface-hidden font-cinzel group cursor-pointer"
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* Dynamic shine overlay */}
                    <div className="card-shine absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Animated particle effects */}
                    <div className="particles absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="particle absolute w-1 h-1 rounded-full bg-white opacity-70" 
                                 style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${5 + Math.random() * 10}s`
                                 }}></div>
                        ))}
                    </div>
                    
                    {/* Card frame with rarity-based glow */}
                    <div className="card-frame w-full h-full animate-card-idle" 
                         style={{
                            boxShadow: isHovered 
                                ? `0 0 25px ${currentRarity.glow}, 0 0 50px ${currentRarity.glow}40` 
                                : `0 0 15px ${currentRarity.glow}, 0 0 30px ${currentRarity.glow}40`
                         }}>
                        
                        {/* Rarity indicator corner */}
                        <div className="absolute top-0 left-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-transparent border-l-transparent"
                             style={{ borderRight: `60px solid ${currentRarity.accent}20` }}></div>
                        
                        {/* Top Hero Banner */}
                        <div className="card-banner card-banner-top absolute left-1/2 -translate-x-1/2 top-4 animate-banner-shine group-hover:translate-y-[-2px] group-hover:scale-[1.02]"
                             style={{ background: `linear-gradient(to bottom, ${currentRarity.border}, ${currentRarity.glow})` }}>
                            <span className="relative z-10 text-white font-bold text-sm tracking-wide drop-shadow-md">{heroType}</span>
                        </div>

                        {/* Character Image Container with Hover Zoom */}
                        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[90%] h-[220px] rounded-lg overflow-hidden border-[3px] shadow-inner-image group-hover:border-[#ffd700] transition-all duration-500"
                             style={{ borderColor: currentRarity.border }}>
                            <img src={imageSrc} alt={characterName} 
                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            {/* Image overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70"></div>
                        </div>

                        {/* Character Name Banner */}
                        <div className="card-banner card-banner-middle absolute left-1/2 -translate-x-1/2 top-[290px] group-hover:translate-y-[-2px] group-hover:scale-[1.02]"
                             style={{ background: `linear-gradient(to bottom, ${currentRarity.border}, ${currentRarity.glow})` }}>
                            <span className="relative z-10 text-white font-bold text-lg text-shadow-heavy">{characterName}</span>
                        </div>

                        {/* Animated Rune Text Area */}
                        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[90%] h-[80px] flex flex-col items-center justify-center p-2 card-content-area">
                            <div className="text-[#f2e6a0] text-sm font-semibold mb-2 rune-text animate-text-glitch">{runeText}</div>
                            {/* Animated placeholder with pulsing effect */}
                            <div className="w-full h-10 rounded-md border shadow-inner-soft animate-pulse-glow"
                                 style={{ 
                                    backgroundColor: `${currentRarity.accent}10`,
                                    borderColor: currentRarity.border,
                                    boxShadow: `inset 0 0 8px ${currentRarity.accent}40`
                                 }}>
                            </div>
                        </div>

                        {/* Bottom Left Circle with Hover Animation */}
                        <div className="card-circle card-circle-bottom-left absolute bottom-5 left-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                             style={{ 
                                background: `radial-gradient(circle at 30% 30%, ${currentRarity.accent}, ${currentRarity.glow})`,
                                borderColor: currentRarity.accent,
                                boxShadow: `inset 0 0 8px rgba(0,0,0,0.8), 0 0 15px ${currentRarity.accent}`
                             }}>
                            <span className="text-white text-lg font-bold drop-shadow-md">{bottomLeftNumber}</span>
                        </div>

                        {/* Bottom Right Numbers with Hover Animation */}
                        <div className="card-circle card-circle-bottom-right absolute bottom-5 right-5 flex flex-col items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300"
                             style={{ 
                                background: `radial-gradient(circle at 30% 30%, ${currentRarity.accent}, ${currentRarity.glow})`,
                                borderColor: currentRarity.accent,
                                boxShadow: `inset 0 0 8px rgba(0,0,0,0.8), 0 0 15px ${currentRarity.accent}`
                             }}>
                            <span className="text-white text-md font-bold leading-none drop-shadow-md">{bottomRightTopNumber}</span>
                            <span className="text-white text-md font-bold leading-none drop-shadow-md">{bottomRightMiddleNumber}</span>
                            <span className="text-white text-md font-bold leading-none drop-shadow-md">{bottomRightBottomNumber}</span>
                        </div>
                    </div>

                    {/* Hover instructions */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to flip
                    </div>

                    <style jsx global>{`
                        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
                        .font-cinzel {
                            font-family: 'Cinzel', serif;
                        }

                        /* --- 3D Effects --- */
                        .transform-style-preserve-3d {
                            transform-style: preserve-3d;
                        }
                        
                        .backface-hidden {
                            backface-visibility: hidden;
                        }
                        
                        .rotate-y-180 {
                            transform: rotateY(180deg);
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

                        /* --- Card Frame & Base Styling --- */
                        .card-frame {
                            background: linear-gradient(145deg, #2c2a21, #4a4635);
                            border-radius: 16px;
                            border: 3px solid #b19d5f;
                            box-shadow: 
                                0 0 10px rgba(0, 0, 0, 0.6),
                                inset 0 0 15px rgba(0, 0, 0, 0.8),
                                inset 0 0 10px rgba(255, 255, 255, 0.1);
                            overflow: hidden;
                            transition: all 0.5s ease;
                            position: relative;
                        }
                        
                        /* Ornate filigree texture */
                        .card-frame::before {
                            content: '';
                            position: absolute;
                            inset: 0;
                            border-radius: 16px;
                            background: 
                                radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 40%),
                                radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 40%),
                                linear-gradient(45deg, rgba(139, 128, 83, 0.2) 25%, transparent 25%, 
                                    transparent 50%, rgba(139, 128, 83, 0.2) 50%, 
                                    rgba(139, 128, 83, 0.2) 75%, transparent 75%, transparent);
                            background-size: 100% 100%, 100% 100%, 10px 10px;
                            pointer-events: none;
                            opacity: 0.4;
                            mix-blend-mode: overlay;
                        }

                        /* --- Banner Styling --- */
                        .card-banner {
                            background-size: 100% 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.3s ease-out;
                            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));
                            z-index: 10;
                        }

                        .card-banner-top {
                            width: 120px;
                            height: 35px;
                            border-radius: 0 0 10px 10px;
                            border-bottom: 2px solid gold;
                            border-left: 2px solid gold;
                            border-right: 2px solid gold;
                        }
                        
                        .card-banner-middle {
                            width: 250px;
                            height: 50px;
                            border-radius: 20px;
                            border: 2px solid gold;
                            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
                        }

                        .card-content-area {
                            background: linear-gradient(to bottom, #26231c, #1a1914);
                            border-radius: 8px;
                            border: 1px solid #696452;
                            box-shadow: inset 0 0 10px rgba(0,0,0,0.7);
                            z-index: 5;
                        }

                        /* --- Circles --- */
                        .card-circle {
                            width: 45px;
                            height: 45px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.3s ease;
                            z-index: 10;
                        }
                        
                        .card-circle-bottom-right {
                            width: 40px;
                            height: 60px;
                            border-radius: 10px;
                        }
                        
                        .card-circle-bottom-right span {
                            line-height: 1;
                        }

                        /* --- Particle Effects --- */
                        .particle {
                            animation: float-particle linear infinite;
                        }
                        
                        @keyframes float-particle {
                            0% {
                                transform: translateY(0) translateX(0);
                                opacity: 0;
                            }
                            10% {
                                opacity: 1;
                            }
                            90% {
                                opacity: 1;
                            }
                            100% {
                                transform: translateY(-100px) translateX(20px);
                                opacity: 0;
                            }
                        }

                        /* --- Keyframe Animations --- */
                        @keyframes card-idle-float {
                            0%, 100% {
                                transform: translateY(0px) rotate(0deg);
                            }
                            50% {
                                transform: translateY(-5px) rotate(0.5deg);
                            }
                        }

                        @keyframes banner-shine-sweep {
                            0% {
                                background-position: -200% 0;
                            }
                            100% {
                                background-position: 200% 0;
                            }
                        }
                        
                        @keyframes pulse-glow {
                            0%, 100% {
                                box-shadow: inset 0 0 8px var(--accent-color);
                            }
                            50% {
                                box-shadow: inset 0 0 15px var(--accent-color);
                            }
                        }
                        
                        @keyframes text-glitch {
                            0% { transform: translate(0); }
                            20% { transform: translate(-2px, 2px); }
                            40% { transform: translate(-2px, -2px); }
                            60% { transform: translate(2px, 2px); }
                            80% { transform: translate(2px, -2px); }
                            100% { transform: translate(0); }
                        }

                        .animate-card-idle {
                            animation: card-idle-float 6s ease-in-out infinite;
                        }

                        .animate-banner-shine {
                            position: relative;
                            overflow: hidden;
                        }

                        .animate-banner-shine::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: -100%;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(
                                90deg,
                                transparent,
                                rgba(255, 255, 255, 0.4),
                                transparent
                            );
                            animation: banner-shine-sweep 2.5s infinite;
                        }
                        
                        .animate-text-glitch {
                            animation: text-glitch 0.5s infinite;
                            animation-play-state: paused;
                        }
                        
                        .group:hover .animate-text-glitch {
                            animation-play-state: running;
                        }
                        
                        .animate-pulse-glow {
                            animation: pulse-glow 2s infinite;
                            --accent-color: rgba(255, 215, 0, 0.5);
                        }
                    `}</style>
                </Card>
                
                {/* Back of Card - Simple design for demo */}
                <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gold rounded-[16px] flex items-center justify-center p-6">
                    <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-4">Card Back</h3>
                        <p className="mb-6">Additional information about this card appears here when flipped.</p>
                        <button onClick={() => setIsFlipped(false)} className="px-4 py-2 bg-gold text-gray-900 font-bold rounded">
                            Flip Back
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
}