import { cn } from "@/lib/utils";
import React from "react";

// --- Card Components (Shadcn-style) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300", className)}
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

// --- The Animated Game Card Component (Pure CSS & Tailwind) ---
interface AnimatedGameCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedCard({
  title,
  description,
  className,
  children,
}: AnimatedGameCardProps) {
  return (
    <div className="relative w-[340px] h-[480px] font-sans" style={{ perspective: 1000 }}>
      <div className="card-wrapper relative">
        <Card
          className={cn("card-content w-full h-full bg-slate-900 border-slate-700 transition-all duration-300", className)}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {children || "Your game card content goes here."}
          </CardContent>
          <CardFooter>
            <span className="text-sm text-slate-500">Hover for magic</span>
          </CardFooter>
        </Card>
      </div>

      <style jsx global>{`
        /* Assuming a clean base and cn utility function */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* --- Custom CSS for Animation --- */
        .card-wrapper {
          transform-style: preserve-3d;
          animation: float-3d 5s ease-in-out infinite;
        }

        .card-content {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        /* Hover Effect */
        .card-wrapper:hover .card-content {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 
            0 0 15px rgba(192, 132, 252, 0.5), /* Purple glow */
            0 0 30px rgba(56, 189, 248, 0.3); /* Blue glow */
          border-color: #a78bfa; /* Hover border color */
        }
        
        .card-wrapper::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, transparent 0%, rgba(192, 132, 252, 0.4) 20%, transparent 70%);
            transform: translate(-50%, -50%) scale(0);
            filter: blur(20px);
            opacity: 0;
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
            pointer-events: none;
        }
        
        .card-wrapper:hover::before {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }

        /* Continuous Floating Animation */
        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0) rotateX(2deg) rotateY(-2deg);
          }
          50% {
            transform: translateY(-8px) rotateX(-2deg) rotateY(2deg);
          }
        }
      `}</style>
    </div>
  );
}