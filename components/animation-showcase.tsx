"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";

const animations = [
  {
    title: "Fade In Up",
    description: "Smooth fade in with upward motion",
    animationClass: "animate-fade-in-up",
    category: "entrance" as const,
  },
  {
    title: "Slide In Left",
    description: "Slide in from the left side",
    animationClass: "animate-slide-in-left",
    category: "entrance" as const,
  },
  {
    title: "Bounce In",
    description: "Bouncy entrance animation",
    animationClass: "animate-bounce-in",
    category: "entrance" as const,
  },
  {
    title: "Zoom In",
    description: "Scale up entrance effect",
    animationClass: "animate-zoom-in",
    category: "entrance" as const,
  },
  {
    title: "Flip In X",
    description: "3D flip entrance on X axis",
    animationClass: "animate-flip-in-x",
    category: "entrance" as const,
  },
  {
    title: "Float",
    description: "Gentle floating motion",
    animationClass: "animate-float",
    category: "loading" as const,
  },
  {
    title: "Heartbeat",
    description: "Pulsing heartbeat effect",
    animationClass: "animate-heartbeat",
    category: "loading" as const,
  },
  {
    title: "Wiggle",
    description: "Playful wiggling motion",
    animationClass: "animate-wiggle",
    category: "loading" as const,
  },
  {
    title: "Shake",
    description: "Attention-grabbing shake",
    animationClass: "animate-shake",
    category: "attention" as const,
  },
  {
    title: "Tada",
    description: "Celebratory tada effect",
    animationClass: "animate-tada",
    category: "attention" as const,
  },
  {
    title: "Jello",
    description: "Jello-like wobble effect",
    animationClass: "animate-jello",
    category: "attention" as const,
  },
  {
    title: "Swing",
    description: "Swinging pendulum motion",
    animationClass: "animate-swing",
    category: "attention" as const,
  },
];

const categories = ["entrance", "loading", "attention"] as const;

function AnimationShowcase() {
  const [copiedClass, setCopiedClass] = useState("");

  const copyToClipboard = (className: string) => {
    navigator.clipboard.writeText(className);
    setCopiedClass(className);
    setTimeout(() => setCopiedClass(""), 2000);
  };

  return (
    <section className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl text-[#125958] font-extrabold dark:text-white text-center">
        Tailwind Animation Showcase
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
        Explore a curated collection of animations. Click on any card to preview
        and copy its Tailwind class instantly.
      </p>

      {/* Categories */}
      <div className="w-full max-w-6xl mt-12 space-y-14">
        {categories.map((category) => (
          <div key={category}>
            {/* Category Title */}
            <h2 className="text-2xl font-bold text-[#125958] dark:text-[#4ade80] mb-6 capitalize border-l-4 border-[#125958] dark:border-[#4ade80] pl-3">
              {category} Animations
            </h2>

            {/* Animation Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {animations
                .filter((a) => a.category === category)
                .map((anim) => (
                  <div
                    key={anim.title}
                    className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl border border-[#125958]/20 dark:border-[#4ade80]/20 shadow-md hover:shadow-2xl hover:border-[#125958] dark:hover:border-[#4ade80] transition-all duration-300 p-6 cursor-pointer"
                    onClick={() => copyToClipboard(anim.animationClass)}
                  >
                    {/* Animated Circle */}
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-[#125958] to-[#0f4746] dark:from-[#22c55e] dark:to-[#16a34a] flex items-center justify-center text-white text-lg font-bold transform group-hover:scale-110 transition duration-300 ${anim.animationClass}`}
                    >
                      {anim.title.charAt(0)}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-semi px-4 sm:px-6 lg:px-8 py-8bold text-gray-900 dark:text-white text-center">
                      {anim.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
                      {anim.description}
                    </p>

                    {/* Copy Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(anim.animationClass);
                      }}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition bg-[#125958] dark:bg-[#22c55e] hover:scale-110 text-white p-2 rounded-lg shadow"
                    >
                      <Copy size={16} />
                    </button>

                    {/* Copied Feedback */}
                    {copiedClass === anim.animationClass && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium px-3 py-1 bg-[#125958] dark:bg-[#22c55e] text-white rounded-full shadow animate-fade-in-up">
                        Copied!
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default AnimationShowcase;