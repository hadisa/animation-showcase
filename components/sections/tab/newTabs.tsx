"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { animations, AnimationCategory } from "./data";
import { cn } from "@/lib/utils";

// Group animations by category
const groupByCategory = (anims: typeof animations) => {
  return anims.reduce((acc, anim) => {
    if (!acc[anim.category]) {
      acc[anim.category] = [];
    }
    acc[anim.category].push(anim);
    return acc;
  }, {} as Record<AnimationCategory, typeof animations>);
};

export function AnimatedTabsDemo() {
  const [activeCategory, setActiveCategory] = useState<AnimationCategory>('Loading');
  const [selectedAnimation, setSelectedAnimation] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Group animations by category
  const animationsByCategory = useMemo(() => groupByCategory(animations), []);
  const categories = Object.keys(animationsByCategory) as AnimationCategory[];

  // Reset selected animation when category changes
  useEffect(() => {
    setSelectedAnimation(null);
  }, [activeCategory]);

  // Get the selected animation component to display
  const selectedAnim = selectedAnimation
    ? animations.find(anim => anim.id === selectedAnimation)
    : null;

  return (
    <div className="h-full w-full">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Animation Showcase</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful animations organized by categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs
            value={activeCategory}
            onValueChange={(value) => setActiveCategory(value as AnimationCategory)}
            className="w-full"
          >
            <TabsList className="w-full flex justify-start md:justify-center overflow-x-auto bg-gray-100 p-1 rounded-xl h-auto flex-wrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap
                    data-[state=active]:bg-white data-[state=active]:shadow-sm
                    data-[state=active]:text-blue-600 data-[state=active]:font-semibold
                    transition-colors duration-200"
                >
                  {category}
                  <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
                    {animationsByCategory[category].length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Animation List */}
          <div className="lg:col-span-1">
            <Card className="h-full overflow-hidden">
              <CardHeader className="border-b">
                <CardTitle className="text-lg">
                  {activeCategory} Animations
                </CardTitle>
                <CardDescription>
                  {animationsByCategory[activeCategory].length} animations available
                </CardDescription>
              </CardHeader>
              <div
                ref={containerRef}
                className="overflow-y-auto max-h-[600px] p-2 space-y-2"
              >
                {animationsByCategory[activeCategory].map((anim, index) => (
                  <div
                    key={anim.id}
                    className="transition-all duration-300 opacity-0 translate-y-4 animate-fadeIn"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <button
                      onClick={() => setSelectedAnimation(anim.id)}
                      className={cn(
                        "w-full text-left p-3 rounded-lg transition-all duration-200",
                        "hover:bg-gray-50 hover:shadow-sm",
                        selectedAnimation === anim.id
                          ? "bg-blue-50 border border-blue-100 shadow-sm"
                          : "border border-transparent"
                      )}
                    >
                      <h3 className="font-medium text-gray-900">{anim.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {anim.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {anim.tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Animation Preview */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="border-b">
                <CardTitle>
                  {selectedAnim?.title || 'Select an animation'}
                </CardTitle>
                <CardDescription>
                  {selectedAnim?.description || 'Choose an animation from the list to preview it here'}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 m-0" >
                <div className="relative h-full">
                  {selectedAnim?.component ? (
                    <div
                      key={selectedAnim.id}
                      className="flex items-center justify-center min-h-[400px] bg-gray-50 rounded-lg p-6 animate-fadeIn"
                    >
                    
                      <selectedAnim.component />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-gray-400 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mx-auto"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        No Animation Selected
                      </h3>
                      <p className="text-gray-500">
                        Select an animation from the list to preview it here
                      </p>
                    </div>
                  )}
                </div>

                {selectedAnim && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex">
                        <span className="w-24 text-gray-500">Category:</span>
                        <span className="font-medium">{selectedAnim.category}</span>
                      </div>
                      {selectedAnim.tags && selectedAnim.tags.length > 0 && (
                        <div className="flex items-start">
                          <span className="w-24 text-gray-500 pt-1">Tags:</span>
                          <div className="flex-1 flex flex-wrap gap-2">
                            {selectedAnim.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
