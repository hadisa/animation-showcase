import React from 'react';

// A utility function for class names (assumed to be available)
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// --- Card Components (Shadcn-style for a clean structure) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative z-20 rounded-xl bg-slate-900 text-slate-200 shadow-sm transition-all duration-300", className)}
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
interface FuturisticGameCardProps {
  title: string;
  imageSrc?: string;
  stats?: { label: string; value: string }[];
  icons?: string[];
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticGameCard({
  title,
  imageSrc = "./1.png",
  stats = [],
  icons = [],
  className,
  children,
}: FuturisticGameCardProps) {
  return (
    <div className="relative w-[340px] h-[480px] p-[2px] overflow-hidden rounded-xl font-sans bg-transparent card-container group">
      {/* Animated glowing border layer */}
      <div className="animated-border-glow absolute inset-0 z-0"></div>

      {/* Main Card Content */}
      <Card className={cn("h-full w-full border-slate-800", className)}>
        {/* Holographic inner glow */}
        <div className="holographic-glow absolute inset-0 z-10"></div>
        
        <CardHeader className="relative z-20">
          <CardTitle className="text-center text-xl tracking-wider uppercase">{title}</CardTitle>
          <CardDescription className="text-center text-white">Futuristic Card</CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-20 flex flex-col items-center justify-center">
          <img src={imageSrc} alt={title} className="w-full h-full object-contain my-4" />
          <div className="stats-list text-xs text-left w-full pl-8">
            {stats.map((stat, index) => (
              <p key={index} className="flex justify-between items-center text-slate-400">
                <span className="font-mono">{stat.label}:</span>
                <span className="text-white">{stat.value}</span>
              </p>
            ))}
          </div>
          {children}
        </CardContent>
        
        <CardFooter className="relative z-20 flex justify-center space-x-4">
          {icons.map((iconSrc, index) => (
            <img key={index} src={iconSrc} alt={`icon-${index}`} className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
          ))}
        </CardFooter>
      </Card>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* --- Keyframe Animations --- */
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

    

        /* --- Component Specific Styles --- */
        .card-container {
            background-color: #0d1117;
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
            animation: pulse-glow 4s ease-in-out infinite alternate;
        }

        .animated-border-glow {
            border-radius: 12px;
            background: conic-gradient(
                from 0deg, 
                #a78bfa, 
                #818cf8, 
                #06b6d4, 
                #38bdf8, 
                #06b6d4, 
                #818cf8, 
                #a78bfa
            );
            animation: border-spin 8s linear infinite;
        }
        
        .holographic-glow {
            border-radius: 12px;
            background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2), transparent 70%);
            filter: blur(20px);
            opacity: 0.6;
            animation: pulse-glow 6s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}