import { cn } from "@/lib/utils";
import React from "react";

// --- Card Components (Shadcn-style) ---
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative z-20 rounded-xl bg-card text-card-foreground shadow-sm transition-all duration-300",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold leading-none tracking-tight text-white",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-slate-400", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 text-slate-200", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0 text-sm text-slate-500",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// --- The Shining Card Component (Pure CSS & Tailwind) ---
interface StarShineCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function StarCardBorder({
  title,
  description,
  className,
  children,
}: StarShineCardProps) {
  return (
    <div className="relative w-[340px] h-[480px] overflow-hidden rounded-xl font-sans bg-black p-[2px] star-shine-container group">
      <div className="star-field absolute inset-0 z-0 opacity-100 transition-opacity duration-500"></div>

      <Card
        className={cn(
          "h-full w-full bg-slate-900 border border-slate-700 transition-all duration-300",
          className
        )}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children || "Your card content goes here."}
          <img
            src={"./6.png"}
            alt={title}
            className="w-full h-full object-contain my-4"
          />
        </CardContent>
        <CardFooter>
          <span className="text-sm text-slate-500">
            A card with a star-filled background
          </span>
        </CardFooter>
      </Card>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
        .font-sans {
          font-family: "Inter", sans-serif;
        }

        /* --- Star Field --- */
        .star-shine-container {
          background-color: #0d1117;
        }

        .star-field {
          background: radial-gradient(#ffffff 1px, transparent 1px),
            radial-gradient(#ffffff 1px, transparent 1px);
          background-size: 50px 50px, 30px 30px;
          background-position: 0 0, 10px 10px;
          animation: background-move 120s linear infinite;
        }

        /* --- Star Twinkle Animation --- */
        .star-field::before,
        .star-field::after {
          content: "";
          position: absolute;
          width: 2px;
          height: 2px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
          opacity: 0;
          animation: star-twinkle 10s infinite alternate;
        }

        .star-field::before {
          top: 20%;
          left: 30%;
          animation-delay: 2s;
        }

        .star-field::after {
          top: 70%;
          left: 60%;
          animation-delay: 5s;
        }

        @keyframes star-twinkle {
          0%,
          50%,
          100% {
            opacity: 0;
          }
          20%,
          80% {
            opacity: 1;
          }
        }

        @keyframes background-move {
          from {
            background-position: 0 0, 10px 10px;
          }
          to {
            background-position: 100% 100%, 110% 110%;
          }
        }
      `}</style>
    </div>
  );
}
