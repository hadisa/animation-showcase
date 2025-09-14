"use client";

import { Navigation } from "@/components/navigation";
import dynamic from 'next/dynamic';
import { animations } from "@/components/sections/tab/data";

// Use dynamic import with SSR disabled to avoid hydration issues
const AnimationShowcase = dynamic<{ animations: typeof animations }>(
  () => import('@/components/sections/tab/AnimationShowcase').then(mod => {
    // Ensure we're using a default export
    return mod.AnimationShowcase ? { default: mod.AnimationShowcase } : mod as any;
  }),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading animations...</p>
      </div>
    )
  }
);

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <AnimationShowcase animations={animations} />
      </div>
    </div>
  );
}
