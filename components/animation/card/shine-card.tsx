import { cn } from '@/lib/utils';
import React from 'react';

// --- Card Components (Shadcn-style) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative z-10 rounded-xl bg-card text-card-foreground shadow-sm transition-all duration-300", className)}
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

// --- The Shining Card Component (Pure CSS & Tailwind) ---
interface ShiningCardProps {
    title: string;
    imageSrc?: string;
    description: string;
    className?: string;
    children?: React.ReactNode;
}

export default function ShineCard({
    title,
    imageSrc = "./3.png",
    description,
    className,
    children,
}: ShiningCardProps) {
    return (
        <div className="relative w-[340px] h-[480px] overflow-hidden rounded-xl font-sans shine-card-container group">
            <Card
                className={cn("h-full w-full bg-slate-900 border border-slate-700 transition-all duration-300", className)}
            >
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img src={imageSrc} alt={title} className="w-full h-full object-contain my-4" />
                    {children || "Your card content goes here."}
                </CardContent>
                <CardFooter>
                    <span className="text-sm text-slate-500">
                        A card with a shining effect
                    </span>
                </CardFooter>
            </Card>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* --- Shine Effect --- */
        .shine-card-container {
            position: relative;
        }
        
        .shine-card-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            background: linear-gradient(
                45deg,
                transparent 40%,
                rgba(255, 255, 255, 0.2) 50%,
                transparent 60%
            );
            background-size: 200% 200%;
            background-position: -100% 0;
            animation: shine-sweep 3s ease-in-out infinite;
            pointer-events: none;
        }
        
        @keyframes shine-sweep {
            0% { background-position: -100% 0; }
            100% { background-position: 100% 0; }
        }

        /* The card itself has a subtle hover lift */
        .shine-card-container:hover .card-content {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }
        
        .shine-card-container .card-content {
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}