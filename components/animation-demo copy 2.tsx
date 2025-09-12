"use client";
import React, { useState, useEffect } from "react";
import { Copy, Check, Search, Filter, X } from "lucide-react";

const animations = [
  {
    title: "Fade In Up",
    description: "Smooth fade in with upward motion",
    animationClass: "animate-fade-in-up",
    category: "entrance" as const,
    duration: "duration-700",
  },
  {
    title: "Slide In Left",
    description: "Slide in from the left side",
    animationClass: "animate-slide-in-left",
    category: "entrance" as const,
    duration: "duration-800",
  },
  {
    title: "Bounce In",
    description: "Bouncy entrance animation",
    animationClass: "animate-bounce-in",
    category: "entrance" as const,
    duration: "duration-1000",
  },
  {
    title: "Zoom In",
    description: "Scale up entrance effect",
    animationClass: "animate-zoom-in",
    category: "entrance" as const,
    duration: "duration-500",
  },
  {
    title: "Flip In X",
    description: "3D flip entrance on X axis",
    animationClass: "animate-flip-in-x",
    category: "entrance" as const,
    duration: "duration-1000",
  },
  {
    title: "Float",
    description: "Gentle floating motion",
    animationClass: "animate-float",
    category: "loading" as const,
    duration: "duration-3000",
  },
  {
    title: "Heartbeat",
    description: "Pulsing heartbeat effect",
    animationClass: "animate-heartbeat",
    category: "loading" as const,
    duration: "duration-1500",
  },
  {
    title: "Wiggle",
    description: "Playful wiggling motion",
    animationClass: "animate-wiggle",
    category: "loading" as const,
    duration: "duration-600",
  },
  {
    title: "Shake",
    description: "Attention-grabbing shake",
    animationClass: "animate-shake",
    category: "attention" as const,
    duration: "duration-500",
  },
  {
    title: "Tada",
    description: "Celebratory tada effect",
    animationClass: "animate-tada",
    category: "attention" as const,
    duration: "duration-1000",
  },
  {
    title: "Jello",
    description: "Jello-like wobble effect",
    animationClass: "animate-jello",
    category: "attention" as const,
    duration: "duration-1000",
  },
  {
    title: "Swing",
    description: "Swinging pendulum motion",
    animationClass: "animate-swing",
    category: "attention" as const,
    duration: "duration-2000",
  },
];

const categories = ["all", "entrance", "loading", "attention"] as const;

export default function AnimationShowcase2() {
  const [copiedClass, setCopiedClass] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);

  const copyToClipboard = (className: string) => {
    navigator.clipboard.writeText(className);
    setCopiedClass(className);
    setTimeout(() => setCopiedClass(""), 2000);
  };

  const filteredAnimations = animations.filter((anim) => {
    const matchesSearch = anim.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          anim.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || anim.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedAnimations = selectedCategory === "all" 
    ? categories.filter(c => c !== "all").map(category => ({
        category,
        animations: filteredAnimations.filter(a => a.category === category)
      })).filter(group => group.animations.length > 0)
    : [{ category: selectedCategory, animations: filteredAnimations }];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 mb-4">
            Tailwind Animation Showcase
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore a curated collection of beautiful animations. Click on any animation to preview and copy the Tailwind class instantly.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-stretch">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search animations..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {category === "all" ? "All Animations" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Animation Grid */}
        {filteredAnimations.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">No animations found matching your criteria</div>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="text-emerald-500 hover:text-emerald-600 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {groupedAnimations.map(({ category, animations }) => (
              <div key={category}>
                {/* Category Title */}
                <h2 className="text-2xl font-bold text-slate-800 mb-8 capitalize flex items-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span>
                  {category} Animations
                </h2>

                {/* Animation Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {animations.map((anim) => (
                    <div
                      key={anim.title}
                      className="group relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
                      onClick={() => copyToClipboard(anim.animationClass)}
                    >
                      <div className="p-6">
                        {/* Animated Element */}
                        <div className="flex justify-center mb-5">
                          <div
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-md ${anim.animationClass} ${anim.duration}`}
                          >
                            {anim.title.charAt(0)}
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-lg font-semibold text-slate-800 text-center mb-1">
                          {anim.title}
                        </h3>
                        <p className="text-sm text-slate-600 text-center">
                          {anim.description}
                        </p>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                        <span className="text-white font-medium text-center">
                          Click to copy class
                        </span>
                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(anim.animationClass);
                        }}
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all bg-white hover:bg-slate-50 text-emerald-600 p-2 rounded-lg shadow-sm border border-slate-200"
                        aria-label="Copy animation class"
                      >
                        {copiedClass === anim.animationClass ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>

                      {/* Copied Feedback */}
                      {copiedClass === anim.animationClass && (
                        <div className="absolute inset-0 bg-emerald-500/90 flex items-center justify-center">
                          <span className="text-white font-medium flex items-center">
                            <Check className="h-5 w-5 mr-2" /> Copied!
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}