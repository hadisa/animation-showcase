"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { animations } from "./data";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";
import { Copy, Check } from "lucide-react";

// Define a more flexible component type that can accept any props
type AnimationComponent = React.ComponentType<{ className?: string; [key: string]: any }>;

// Define the animation item type
export interface AnimationItem {
  id: number;
  title: string;
  description: string;
  category: string;
  component: AnimationComponent;
  tags?: string[];
  // Add any additional props that might be needed for the component
  componentProps?: Record<string, any>;
}

// Group animations by category
const groupByCategory = (anims: AnimationItem[]): Record<string, AnimationItem[]> => {
  const groups: Record<string, AnimationItem[]> = {};
  
  anims.forEach((anim) => {
    if (!groups[anim.category]) {
      groups[anim.category] = [];
    }
    groups[anim.category].push(anim);
  });
  
  return groups;
};

interface AnimationTabsProps {
  initialCategory?: string;
  initialAnimationId?: number;
}

export function AnimationTabs({ initialCategory, initialAnimationId }: AnimationTabsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'Loading');
  const [selectedAnimationId, setSelectedAnimationId] = useState<number | null>(initialAnimationId || null);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [sourceCode, setSourceCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Group animations by category
  const animationsByCategory = useMemo(() => groupByCategory(animations), []);
  const categories = useMemo(() => Object.keys(animationsByCategory), [animationsByCategory]);
  
  // Set default category if not set
  useEffect(() => {
    if (categories.length > 0 && (!activeCategory || !animationsByCategory[activeCategory])) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory, animationsByCategory]);

  // Get the selected animation data
  const selectedAnimation = useMemo(() => {
    if (!selectedAnimationId) return null;
    return animations.find(anim => anim.id === selectedAnimationId) || null;
  }, [selectedAnimationId]);

  // Get the component to render
  const AnimationComponent = useMemo(() => {
    if (!selectedAnimation?.component) return () => null;
    
    // Return a wrapper that handles any required props
    return function AnimationWrapper() {
      const Component = selectedAnimation.component;
      // Pass any required props that the component might need
      const props = {
        className: 'w-full h-full',
        // Add any other default props here
      };
      
      return <Component {...props} />;
    };
  }, [selectedAnimation]);

  // Fetch source code when animation is selected
  useEffect(() => {
    if (!selectedAnimation?.component) return;
    
    const fetchSourceCode = async () => {
      setIsLoading(true);
      try {
        // Get the component name from the component function
        const componentName = selectedAnimation.component.displayName || 
                            selectedAnimation.component.name || 
                            'UnknownComponent';
        
        // This is a placeholder - in a real app, you would fetch the actual source code
        // from your API or use a build-time solution
        const mockSource = `// ${componentName}.tsx
// This is a placeholder for the actual source code.
// In a real app, this would be the actual component source.

import React from 'react';

const ${componentName} = () => {
  return (
    <div className="${componentName.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1)}">
      {/* Component implementation */}
    </div>
  );
};

export default ${componentName};`;

        setSourceCode(mockSource);
      } catch (error) {
        console.error('Error loading component source:', error);
        setSourceCode(`// Error loading source code for ${selectedAnimation.title}
// ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSourceCode();
  }, [selectedAnimation]);

  const handleCopyCode = () => {
    if (!sourceCode) return;
    navigator.clipboard.writeText(sourceCode);
    // You could add a toast notification here
  };

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
            onValueChange={(value) => setActiveCategory(value)}
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
                    {animationsByCategory[category]?.length || 0}
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
                  {animationsByCategory[activeCategory]?.length || 0} animations available
                </CardDescription>
              </CardHeader>
              <div className="overflow-y-auto max-h-[600px] p-2 space-y-2">
                {animationsByCategory[activeCategory]?.map((anim, index) => (
                  <div
                    key={anim.id}
                    className="transition-all duration-300 opacity-0 translate-y-4 animate-fadeIn"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <button
                      onClick={() => setSelectedAnimationId(anim.id)}
                      className={cn(
                        "w-full text-left p-3 rounded-lg transition-all duration-200",
                        "hover:bg-gray-50 hover:shadow-sm",
                        selectedAnimationId === anim.id
                          ? "bg-blue-50 border border-blue-100 shadow-sm"
                          : "border border-transparent"
                      )}
                    >
                      <h3 className="font-medium text-gray-900">{anim.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {anim.description}
                      </p>
                      {anim.tags?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {anim.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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
                  {selectedAnimation?.title || 'Select an animation'}
                </CardTitle>
                <CardDescription>
                  {selectedAnimation?.description || 'Choose an animation from the list to preview it here'}
                </CardDescription>
              </CardHeader>
              
              <Tabs 
                value={activeTab} 
                onValueChange={(value) => setActiveTab(value as 'preview' | 'code')}
                className="h-full flex flex-col"
              >
                <div className="px-4 pt-2 border-b">
                  <TabsList className="w-fit bg-transparent p-0">
                    <TabsTrigger value="preview" className="data-[state=active]:shadow-none">
                      Preview
                    </TabsTrigger>
                    <TabsTrigger value="code" className="data-[state=active]:shadow-none">
                      Source Code
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="flex-1 overflow-auto">
                  <TabsContent value="preview" className="m-0 h-full">
                    <div className="p-4 h-full">
                      {selectedAnimation ? (
                        <div className="flex items-center justify-center min-h-[400px] bg-gray-50 rounded-lg p-6">
                          <AnimationComponent />
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
                  </TabsContent>
                  
                  <TabsContent value="code" className="m-0 h-full">
                    <div className="p-4 h-full">
                      {selectedAnimation ? (
                        <div className="relative h-full">
                          <div className="absolute top-4 right-4 z-10 flex gap-2">
                            <button
                              onClick={handleCopyCode}
                              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                              title="Copy code"
                            >
                              <Copy className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                          
                          <div className="h-full max-h-[calc(100vh-300px)] overflow-auto bg-gray-900 rounded-lg">
                            {isLoading ? (
                              <div className="flex items-center justify-center h-full p-8 text-gray-400">
                                Loading source code...
                              </div>
                            ) : (
                              <CodeBlock
                                code={sourceCode}
                                language="tsx"
                                className="h-full"
                              />
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center min-h-[400px] bg-gray-50 rounded-lg p-6 text-center">
                          <p className="text-gray-500">
                            Select an animation to view its source code
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
