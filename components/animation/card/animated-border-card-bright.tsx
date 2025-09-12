import { cn } from '@/lib/utils';
import React from 'react';

// --- Card Components (Shadcn-style) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative z-10 rounded-xl bg-black text-slate-200 shadow-sm transition-all duration-300", className)}
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

// --- The Animated Component (Pure CSS & Tailwind) ---
interface AnimatedBorderCardProps {
    title: string;
    imageSrc?: string;
    description: string;
    className?: string;
    children?: React.ReactNode;
}

export default function AnimatedBrightBorderCard({
    title,
    description,
    imageSrc = "./4.png",
    className,
    children,
}: AnimatedBorderCardProps) {
    return (
        <div className="relative p-[2px] w-[340px] h-[480px] overflow-hidden rounded-xl font-sans card-container group">
            <Card
                className={cn("h-full w-full border-slate-800 border-8", className)}
            >
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>

                    {children || "Your card content goes here."}
                    <img src={imageSrc} alt={title} className="w-full h-full object-contain my-4" />
                </CardContent>
                <CardFooter>
                    <span className="text-sm text-slate-500">
                        A continuously animated border
                    </span>
                </CardFooter>
            </Card>

            <style jsx global>{`
        /* --- Font Import & CSS Variables --- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        :root {
          --border-color-1: #ffffff; /* purple-400 */
          --border-color-2: #ffffff; /* indigo-400 */
          --border-color-3: #FF0000; /* pink-500 */
          --bg-color: #1a202c;
        }

        /* --- Custom Keyframe Animations --- */
        @keyframes border-spin {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(360deg);
          }
        }
        
        @keyframes card-float {
          0%, 100% {
            transform: translateY(0) rotateX(1deg) rotateY(-1deg);
          }
          50% {
            transform: translateY(-8px) rotateX(-1deg) rotateY(1deg);
          }
        }

        /* --- Component Specific Styles --- */
        .card-container {
            background: var(--bg-color);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
            animation: card-float 6s ease-in-out infinite;
        }

        .card-container::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 12px;
            background: conic-gradient(
                from 0deg,
                var(--border-color-1),
                var(--border-color-2),
                var(--border-color-3),
                var(--border-color-2),
                var(--border-color-1)
            );
            animation: border-spin 5s linear infinite;
            filter: blur(8px);
            opacity: 0.6;
        }
        
        .card-container::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 12px;
            background: conic-gradient(
                from 0deg,
                var(--border-color-1),
                var(--border-color-2),
                var(--border-color-3),
                var(--border-color-2),
                var(--border-color-1)
            );
            animation: border-spin 5s linear infinite;
            opacity: 0.3;
        }
        
        .card-container:hover .card-content {
            transform: translateY(-4px) scale(1.02);
        }
        
        .card-container:hover::before {
            opacity: 1;
            filter: blur(5px);
        }
        
        .card-container:hover::after {
            opacity: 0.6;
        }
      `}</style>
        </div>
    );
}