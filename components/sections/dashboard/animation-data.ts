import { RotateCw, Sparkles, Zap, Layout, Code, Play, Box, Image } from "lucide-react";
import React from 'react';

// Import animation components
import AnimatedBg from "@/components/animation/animatedBg1";
import GameBackground from "@/components/animation/bg/game-background";
import AnimatedCard from "@/components/animation/card/animated-card";
import FuturisticGameCard from "@/components/animation/card/futuristic-game-card";
import FuturisticGameLoading from "@/components/animation/futuristicGameLoading";
import LoadingSpinner from "@/components/animation/load";
import LoadingAmazing from "@/components/animation/loading-amazing";
import LoadingPro from "@/components/animation/loadingPro";
import ProfessionalLoadingSpinner from "@/components/animation/ProfessionalLoadingSpinner";
import QuantumGridLoading from "@/components/animation/quantumGridLoading";
import StepLoading from "@/components/animation/step-loading";
import WarpCoreLoading from "@/components/animation/WarpCoreLoading";


import ShineCard from "@/components/animation/card/shine-card";
import AnimatedBorderCard from "@/components/animation/card/animated-border-card";
import StarCard from "@/components/animation/card/star-card";
import GameLoadingInterface from "@/components/animation/gameLoadingInterface";
import FuturisticAnimatedHeroBackground from "@/components/animation/bg/futuristic-animated-hero-background";
import FuturisticAnimatedHeroBackground1 from "@/components/animation/bg/FuturisticAnimatedHeroBackground";
import GameBackground4 from "@/components/animation/bg/game-background4";
import AnimatedBrightBorderCard from "@/components/animation/card/animated-border-card-bright";
import AnimatedBorderCard1 from "@/components/animation/card/animated-border-card1";
import ShakeCard from "@/components/animation/card/shake-card";
import StarCardBorder from "@/components/animation/card/star-card-border";
import SuperAnimatedHeroCard from "@/components/animation/card/super-animated-hero-card";
import HolographicLoader from "@/components/animation/holo-graphic-loader";
import DataStreamAnimation from "@/components/animation/network/data-stream-animation";
import ExactCircuitAnimation from "@/components/animation/network/exact-circuit-animation";
import ExactCyberNetworkAnimation from "@/components/animation/network/exact-cyber-network-animation";
import HadisaTextAnimation from "@/components/animation/text/hadisa-text-animation";
import TaskAnimation from "@/components/animation/ui-elements/task-animation";


// Type definitions
export type AnimationDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'Easy' | 'Medium' | 'Advanced';

export interface AnimationItem {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<any>;
  filePath: string;
  category: string;
  tags?: string[];
  difficulty?: AnimationDifficulty;
  duration?: string;
  popularity?: number;
  preview?: string;
  code?: string;
}

export interface AnimationCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
  color: string;
  description: string;
  animations: AnimationItem[];
}

// Helper function to create animation items
const createAnimationItem = (
  id: string,
  name: string,
  description: string,
  component: React.ComponentType<any>,
  filePath: string,
  category: string,
  options: Partial<AnimationItem> = {}
): AnimationItem => ({
  id,
  name,
  description,
  component,
  filePath,
  category,
  tags: [],
  difficulty: 'intermediate',
  duration: '1s',
  popularity: 80,
  ...options,
});

// Helper function to create animation categories
const createAnimationCategory = (
  id: string,
  name: string,
  icon: React.ComponentType<any>,
  color: string,
  description: string,
  animations: AnimationItem[]
): AnimationCategory => ({
  id,
  name,
  icon,
  count: animations.length,
  color,
  description,
  animations,
});

// Animation items by category
const loadingAnimations: AnimationItem[] = [
  createAnimationItem(
    'loading-spinner',
    'Loading Spinner',
    'A simple loading spinner animation',
    LoadingSpinner,
    '@/components/animation/load',
    'loading',
    {
      tags: ['spinner', 'loading'],
      difficulty: 'beginner',
      duration: '1s',
      popularity: 90
    }
  ),
  createAnimationItem(
    'futuristic-loading',
    'Futuristic Loading',
    'A modern futuristic loading animation',
    FuturisticGameLoading,
    '@/components/animation/futuristicGameLoading',
    'loading',
    {
      tags: ['futuristic', 'loading', 'game'],
      difficulty: 'intermediate',
      duration: '1.5s',
      popularity: 85
    }
  ),
  createAnimationItem(
    'quantum-grid',
    'Quantum Grid Loading',
    'A grid-based loading animation with quantum effects',
    QuantumGridLoading,
    '@/components/animation/quantumGridLoading',
    'loading',
    {
      tags: ['grid', 'loading', 'quantum'],
      difficulty: 'advanced',
      duration: '2s',
      popularity: 88
    }
  ),
  createAnimationItem(
    'step-loading',
    'Step Loading',
    'Step loading animation',
    StepLoading,
    '@/components/animation/step-loading',
    'loading',
    {
      tags: ['loading', 'step', 'classic'],
      difficulty: 'Easy',
      duration: '1s',
      popularity: 98
    }
  ),
  createAnimationItem(
    'holographic-loader',
    'Holographic Loader',
    'Pulsing opacity effect',
    HolographicLoader,
    '@/components/animation/holographicLoader',
    'loading',
    {
      tags: ['loading', 'pulse', 'opacity'],
      difficulty: 'Easy',
      duration: '2s',
      popularity: 94
    }
  ),
  createAnimationItem(
    'warp-core-loading',
    'Warp Core Loading',
    'Bouncing motion',
    WarpCoreLoading,
    '@/components/animation/WarpCoreLoading',
    'loading',
    {
      tags: ['loading', 'bounce', 'motion'],
      difficulty: 'Easy',
      duration: '1s',
      popularity: 87
    }
  ),
  createAnimationItem(
    'grid-loading',
    'Grid Loading',
    'Grid loading animation',
    QuantumGridLoading,
    '@/components/animation/quantumGridLoading',
    'loading',
    {
      tags: ['loading', 'grid', 'playful'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 79
    }
  ),
  createAnimationItem(
    'game-loading-interface',
    'Game Loading Interface',
    'Playful wiggle animation',
    GameLoadingInterface,
    '@/components/animation/gameLoadingInterface',
    'loading',
    {
      tags: ['loading', 'wiggle', 'playful'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 79
    }
  ),
  createAnimationItem(
    'dots-loader-pro-1',
    'Dots Loader Pro',
    'Smooth dot loading animation',
    LoadingPro,
    '@/components/animation/loadingPro',
    'loading',
    {
      tags: ['loading', 'dots', 'smooth'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 79
    }
  ),
  createAnimationItem(
    'dots-loader-pro-2',
    'Dual Dots Loader',
    'Double dot loading animation',
    LoadingAmazing,
    '@/components/animation/loading-amazing',
    'loading',
    {
      tags: ['loading', 'dual-dots', 'smooth'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 79
    }
  ),
  createAnimationItem(
    'professional-loading-spinner',
    'Professional Loading Spinner',
    'Professional loading spinner animation',
    ProfessionalLoadingSpinner,
    '@/components/animation/ProfessionalLoadingSpinner',
    'loading',
    {
      tags: ['loading', 'loading-spinner', 'playful'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 79
    }
  )
];

const backgroundAnimations: AnimationItem[] = [
  createAnimationItem(
    'animated-bg',
    'Animated Background',
    'A beautiful animated background with gradient effects',
    AnimatedBg,
    '@/components/animation/animatedBg1',
    'background',
    {
      tags: ['background', 'gradient', 'animated'],
      difficulty: 'intermediate',
      duration: '10s',
      popularity: 92
    }
  ),
  createAnimationItem(
    'game-bg',
    'Game Background',
    'Animated background suitable for games',
    GameBackground,
    '@/components/animation/bg/game-background',
    'background',
    {
      tags: ['game', 'background', 'animated'],
      difficulty: 'intermediate',
      duration: '8s',
      popularity: 88
    }
  ),
  createAnimationItem(
    'hover-scale',
    'Hover Scale',
    'Scale up on hover interaction',
    HadisaTextAnimation,
    '@/components/animation/text/hadisa-text-animation',
    'background',
    {
      tags: ['hover', 'scale', 'interactive'],
      difficulty: 'Easy',
      duration: '0.3s',
      popularity: 96
    }
  ),
  createAnimationItem(
    'hover-glow',
    'Hover Glow',
    'Glowing effect on hover',
    DataStreamAnimation,
    '@/components/animation/dataStreamAnimation',
    'background',
    {
      tags: ['hover', 'glow', 'shadow'],
      difficulty: 'Medium',
      duration: '0.3s',
      popularity: 89
    }
  ),
  createAnimationItem(
    'hover-lift',
    'Hover Lift',
    'Lift effect with shadow',
    ExactCyberNetworkAnimation,
    '@/components/animation/exactCyberNetworkAnimation',
    'background',
    {
      tags: ['hover', 'lift', 'shadow'],
      difficulty: 'Easy',
      duration: '0.3s',
      popularity: 93
    }
  ),
  createAnimationItem(
    'hover-rotate',
    'Hover Rotate',
    'Subtle rotation on hover',
    ExactCircuitAnimation,
    '@/components/animation/exactCircuitAnimation',
    'background',
    {
      tags: ['hover', 'rotate', 'playful'],
      difficulty: 'Easy',
      duration: '0.3s',
      popularity: 82
    }
  ),
  createAnimationItem(
    'fade-transition',
    'Fade Transition',
    'Smooth opacity transition',
    FuturisticAnimatedHeroBackground1,
    '@/components/animation/futuristicAnimatedHeroBackground1',
    'background',
    {
      tags: ['transition', 'fade', 'opacity'],
      difficulty: 'Easy',
      duration: '0.3s',
      popularity: 97
    }
  ),
  createAnimationItem(
    'slide-transition',
    'Slide Transition',
    'Transform-based sliding',
    GameBackground,
    '@/components/animation/bg/game-background',
    'background',
    {
      tags: ['transition', 'slide', 'transform'],
      difficulty: 'Easy',
      duration: '0.3s',
      popularity: 91
    }
  ),
  createAnimationItem(
    'game-background-4',
    'Game Background 4',
    'Animated hero background for modern interfaces.',
    GameBackground4,
    '@/components/animation/bg/game-background-4',
    'background',
    {
      tags: ['transition', 'color', 'background'],
      difficulty: 'Easy',
      duration: '0.3s',
      popularity: 95
    }
  ),
  createAnimationItem(
    'futuristic-hero-bg-transition',
    'Futuristic Hero Background',
    'Animated hero background for modern interfaces.',
    FuturisticAnimatedHeroBackground,
    '@/components/animation/futuristicAnimatedHeroBackground',
    'background',
    {
      tags: ['transition', 'color', 'background'],
      difficulty: 'Easy',
      duration: '0.3s',
      popularity: 95
    }
  )
];

const cardAnimations: AnimationItem[] = [
  createAnimationItem(
    'animated-card',
    'Animated Card',
    'A card with smooth hover and focus animations',
    AnimatedCard,
    '@/components/animation/card/animated-card',
    'card',
    {
      tags: ['card', 'hover', 'focus'],
      difficulty: 'beginner',
      duration: '0.3s',
      popularity: 95
    }
  ),
  createAnimationItem(
    'futuristic-card',
    'Futuristic Game Card',
    'A futuristic card with advanced hover effects',
    FuturisticGameCard,
    '@/components/animation/card/futuristic-game-card',
    'card',
    {
      tags: ['card', 'game', 'futuristic'],
      difficulty: 'intermediate',
      duration: '0.5s',
      popularity: 92
    }
  ),
  createAnimationItem(
    'animated-bright-border-card',
    'Animated Bright Border Card',
    'Animated border with bright color',
    AnimatedBrightBorderCard,
    '@/components/animation/card/animated-bright-border-card',
    'card',
    {
      tags: ['attention', 'bounce', 'motion'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 21
    }
  ),
  createAnimationItem(
    'shine-card',
    'Shine Card',
    'Bouncing motion',
    ShineCard,
    '@/components/animation/card/shine-card',
    'card',
    {
      tags: ['attention', 'bounce', 'motion'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 22
    }
  ),
  createAnimationItem(
    'animated-border-card',
    'Animated Border Card',
    'Hover to See me',
    AnimatedBorderCard,
    '@/components/animation/card/animated-border-card',
    'card',
    {
      tags: ['attention', 'bounce', 'motion'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 23
    }
  ),
  createAnimationItem(
    'star-border-card',
    'Star Border Card',
    'Bouncing motion',
    StarCard,
    '@/components/animation/card/star-card',
    'card',
    {
      tags: ['attention', 'bounce', 'motion'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 87
    }
  ),
  createAnimationItem(
    'star-border-card-1',
    'Star Border Card 1',
    'Card with animated star border',
    StarCardBorder,
    '@/components/animation/card/star-card-border',
    'card',
    {
      tags: ['attention', 'star', 'border', 'motion'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 87
    }
  ),
  createAnimationItem(
    'animated-border-card-1',
    'Animated Border Card 1',
    'Bouncing motion',
    AnimatedBorderCard1,
    '@/components/animation/card/animated-border-card-1',
    'card',
    {
      tags: ['attention', 'bounce', 'motion'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 87
    }
  ),
  createAnimationItem(
    'task-animation-card',
    'Task Animation',
    'Interactive task animation',
    TaskAnimation,
    '@/components/animation/task-animation',
    'card',
    {
      tags: ['interactive', 'task', 'motion'],
      difficulty: 'Medium',
      duration: '1s',
      popularity: 87
    }
  ),
  createAnimationItem(
    'hover-change',
    'Hover Change',
    'Hover me that i changed!',
    SuperAnimatedHeroCard,
    '@/components/animation/super-animated-hero-card',
    'card',
    {
      tags: ['animation', 'hover'],
      difficulty: 'Medium',
      duration: '0.82s',
      popularity: 46
    }
  ),
  createAnimationItem(
    'shake',
    'Shake',
    'shake effect, Hover Me !!!',
    ShakeCard,
    '@/components/animation/card/shake-card',
    'card',
    {
      tags: ['attention', 'pulse', 'heartbeat'],
      difficulty: 'Medium',
      duration: '1.5s',
      popularity: 47
    }
  )
];

// Create categories
export const animationCategories: AnimationCategory[] = [
  createAnimationCategory(
    'loading',
    'Loading',
    RotateCw,
    'from-yellow-500 to-orange-500',
    'Loading and progress animations',
    loadingAnimations
  ),
  createAnimationCategory(
    'background',
    'Background',
    Zap,
    'from-purple-500 to-pink-500',
    'Background animations',
    backgroundAnimations
  ),
  createAnimationCategory(
    'card',
    'Card',
    Sparkles,
    'from-red-500 to-pink-500',
    'Eye-catching attention animations',
    cardAnimations
  )
];

// Utility function to get all animations
export const getAllAnimations = (): AnimationItem[] => {
  return animationCategories.flatMap(category => category.animations);
};

// Utility function to get animation by ID
export const getAnimationById = (id: string): AnimationItem | undefined => {
  return getAllAnimations().find(anim => anim.id === id);
};

// Utility function to get animations by category
export const getAnimationsByCategory = (categoryId: string): AnimationItem[] => {
  const category = animationCategories.find(cat => cat.id === categoryId);
  return category ? category.animations : [];
};