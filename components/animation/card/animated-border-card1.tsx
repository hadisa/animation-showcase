import { cn } from '@/lib/utils';
import React from 'react';

// --- Card Components (Shadcn-style) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative z-10 rounded-xl bg-slate-900 text-slate-200 shadow-sm transition-all duration-300", className)}
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

export default function AnimatedBorderCard1({
    title,
    description,
    imageSrc = "./2.png",
    className,
    children,
}: AnimatedBorderCardProps) {
    return (
        <div className="relative w-[340px] h-[480px] p-[2px] overflow-hidden rounded-xl font-sans bg-transparent card-with-animated-border">
            <Card
                className={cn("h-full w-full border-slate-800", className)}
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
                        A continuously animated border
                    </span>
                </CardFooter>
            </Card>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* --- Custom CSS for Animation --- */
        .card-with-animated-border {
            background-color: #2b2f3a;
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
        }

        .card-with-animated-border::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 12px;
            background: conic-gradient(from 0deg, #1f2937 0%, #a78bfa 20%, #818cf8 40%, #1f2937 80%);
            animation: border-spin 5s linear infinite;
            filter: blur(8px);
        }
        
        .card-with-animated-border::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 12px;
            background: conic-gradient(from 0deg, #1f2937 0%, #a78bfa 20%, #818cf8 40%, #1f2937 80%);
            animation: border-spin 5s linear infinite;
        }

        @keyframes border-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
      `}</style>
        </div>
    );
}