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
    description: string;
    className?: string;
    children?: React.ReactNode;
}

export default function AnimatedBorderCard({
    title,
    description,
    className,
    children,
}: AnimatedBorderCardProps) {
    return (
        <div className="relative w-[340px] h-[480px] p-1.5 overflow-hidden rounded-xl group font-sans">
            <div className="card-border-animation absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <Card
                className={cn("h-full w-full border-slate-800", className)}
            >
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {children || "Hover for an animated border effect using pure CSS and Tailwind."}
                </CardContent>
                <CardFooter>
                    <span className="text-sm text-slate-500">
                        Hover for an animated border
                    </span>
                </CardFooter>
            </Card>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* --- Custom CSS for Animation --- */
        .card-border-animation {
            background-image: conic-gradient(from 0deg, rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0.8), rgba(124, 58, 237, 0.5));
            border-radius: 12px;
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