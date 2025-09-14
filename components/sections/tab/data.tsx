import AnimatedBg from "@/components/animation/animatedBg1";
import AnimatedGameBackground from "@/components/animation/bg/bg";
import AnimatedGameBackground1 from "@/components/animation/bg/bg copy";
import FuturisticAnimatedHeroBackground from "@/components/animation/bg/futuristic-animated-hero-background";
import FuturisticAnimatedHeroBackground1 from "@/components/animation/bg/FuturisticAnimatedHeroBackground";
import GameBackground from "@/components/animation/bg/game-background";
import GameBackground1 from "@/components/animation/bg/game-background1";
import GameBackground2 from "@/components/animation/bg/game-background2";
import GameBackground3 from "@/components/animation/bg/game-background3";
import GameBackground4 from "@/components/animation/bg/game-background4";
import ProfessionalBrainAnimation from "@/components/animation/bg/professionalBrainAnimation";
import SimpleBg from "@/components/animation/bg/simpleBg";
import WaveBg from "@/components/animation/bg/wave";
import AnimatedBorderCard from "@/components/animation/card/animated-border-card";
import AnimatedBrightBorderCard from "@/components/animation/card/animated-border-card-bright";
import AnimatedBorderCard1 from "@/components/animation/card/animated-border-card1";
import AnimatedCard from "@/components/animation/card/animated-card";
import FuturisticGameCard from "@/components/animation/card/futuristic-game-card";
import OrnateGameCard from "@/components/animation/card/ornate-game-card";
import OrnateGameCard3 from "@/components/animation/card/shake-card";
import ShineCard from "@/components/animation/card/shine-card";
import StarBorderCard1 from "@/components/animation/card/star-card";
import StarCardBorder from "@/components/animation/card/star-card-border";
import SuperAnimatedHeroCard from "@/components/animation/card/super-animated-hero-card";
import {
  DigitalTextAnimations,
  DigitalTunnelAnimationBg,
} from "@/components/animation/digital-tunnel";
import FuturisticGameLoading from "@/components/animation/futuristicGameLoading";
import GameLoadingInterface from "@/components/animation/gameLoadingInterface";
import LoadingSpinner from "@/components/animation/load";
import LoadingPro from "@/components/animation/loadingPro";
import LoadingPro3 from "@/components/animation/step-loading";
import { MorphingBackgroundAnimation } from "@/components/animation/morphing-background";
import DataStreamAnimation from "@/components/animation/network/data-stream-animation";
import ExactCircuitAnimation from "@/components/animation/network/exact-circuit-animation";
import ExactCyberNetworkAnimation from "@/components/animation/network/exact-cyber-network-animation";
import QuantumNetworkAnimation from "@/components/animation/network/quantum-network-animation";
import { ParticleSystemAnimation } from "@/components/animation/particle-system";
import ProfessionalLoadingSpinner from "@/components/animation/ProfessionalLoadingSpinner";
import QuantumCoverAnimation from "@/components/animation/quantum-cover-anim";
import QuantumMeshAnimation from "@/components/animation/quantum-mesh";
import QuantumMeshProfessional from "@/components/animation/quantum-mesh-professional";
import QuantumAnimation from "@/components/animation/QuantumAnimation";
import QuantumAnimation1 from "@/components/animation/QuantumAnimation1";
import QuantumAnimationBest from "@/components/animation/QuantumAnimation3";
import QuantumGridLoading from "@/components/animation/quantumGridLoading";
import QuantumLoadingAnimation1 from "@/components/animation/quantumLoadingAnimation1";
import QuantumShapesAnimation from "@/components/animation/QuantumShapesAnimation";
import QuantumShapesAnimationFour from "@/components/animation/QuantumShapesAnimationFour";
import ScrollPart from "@/components/animation/scroll-animation/scrollPart";
import HadisaTextAnimation from "@/components/animation/text/hadisa-text-animation";
import TaskAnimation from "@/components/animation/ui-elements/task-animation";
import WarpCoreLoading from "@/components/animation/WarpCoreLoading";

// Define animation categories
export type AnimationCategory =
  | "Loading"
  | "Background"
  | "Text"
  | "UI Elements"
  | "Effects"
  | "Network";

export const animations = [
  {
    id: 1,
    title: "Advance Loading",
    description:
      "Smooth fade in with upward motion, great for hero text or sections.",
    component: LoadingPro3,
    category: "Loading" as AnimationCategory,
    tags: ["fade", "entrance", "smooth"],
  },
  {
    id: 2,
    title: "Nice Animation Bg",
    description:
      "Fade in with a downward motion, useful for headers or banners.",
    component: AnimatedBg,
    category: "Background" as AnimationCategory,
    tags: ["background", "fade", "smooth"],
  },
  {
    id: 3,
    title: "Circle Glow Animation",
    description: "Content slides in from the left side, ideal for side panels.",
    component: QuantumCoverAnimation,
    category: "Effects" as AnimationCategory,
    tags: ["glow", "entrance", "slide"],
  },
  {
    id: 4,
    title: "Square Mesh Animation Bg",
    description: "Content slides in from the right, often used for drawers.",
    component: QuantumMeshProfessional,
    category: "Background" as AnimationCategory,
    tags: ["background", "mesh", "grid"],
  },
  {
    id: 5,
    title: "Wobble In and Out",
    description:
      "Element scales up from small to normal, great for modals or hero images.",
    component: QuantumMeshAnimation,
    category: "Effects" as AnimationCategory,
    tags: ["scale", "entrance", "wobble"],
  },
  {
    id: 6,
    title: "Glow animation",
    description:
      "Element scales down while fading, used for dismiss animations.",
    component: QuantumAnimation,
    category: "Effects" as AnimationCategory,
    tags: ["glow", "scale", "fade"],
  },
  {
    id: 7,
    title: "Rotate In",
    description:
      "Content rotates slightly while appearing, works well for icons.",
    component: QuantumAnimation1,
    category: "UI Elements" as AnimationCategory,
    tags: ["rotate", "entrance", "icons"],
  },
  {
    id: 8,
    title: "Black Bg",
    description: "Element rotates out of view, perfect for removing icons.",
    component: QuantumAnimationBest,
    category: "Background" as AnimationCategory,
    tags: ["background", "dark", "minimal"],
  },
  {
    id: 9,
    title: "shape animation",
    description: "Subtle scaling up and down loop, often used for CTA buttons.",
    component: QuantumShapesAnimation,
    category: "UI Elements" as AnimationCategory,
    tags: ["pulse", "scale", "cta"],
  },
  {
    id: 10,
    title: "shape animation four",
    description: "Bouncing effect for playful UI, commonly used on icons.",
    component: QuantumShapesAnimationFour,
    category: "UI Elements" as AnimationCategory,
    tags: ["bounce", "playful", "icons"],
  },
  {
    id: 11,
    title: "Glow Text",
    description: "Shaky wobble animation to draw attention to an element.",
    component: DigitalTextAnimations,
    category: "Text" as AnimationCategory,
    tags: ["glow", "text", "attention"],
  },
  {
    id: 12,
    title: "Particle System",
    description: "Flips the element along the X-axis, nice for cards.",
    component: ParticleSystemAnimation,
    category: "Effects" as AnimationCategory,
    tags: ["particles", "interactive", "dynamic"],
  },
  {
    id: 13,
    title: "Morphing background",
    description: "Flips the element along the Y-axis, used for transitions.",
    component: MorphingBackgroundAnimation,
    category: "Background" as AnimationCategory,
    tags: ["background", "morphing", "smooth"],
  },
  {
    id: 14,
    title: "Digital Tunnel",
    description: "Element swings like a pendulum, useful for playful designs.",
    component: DigitalTunnelAnimationBg,
    category: "Background" as AnimationCategory,
    tags: ["background", "digital", "tunnel"],
  },
  {
    id: 15,
    title: "Scroll animation card",
    description: "Quick shaking motion, often used for error inputs.",
    component: ScrollPart,
    category: "UI Elements" as AnimationCategory,
    tags: ["scroll", "interactive", "cards"],
  },
  {
    id: 16,
    title: "Typing Dots",
    description: "Three dots bouncing, commonly used for chat loaders.",
    // component: useCrackScrollAnimation,
    // category: "Loading" as AnimationCategory,
    tags: ["loading", "dots", "chat"],
  },
  {
    id: 17,
    title: "Loading Spinner",
    description: "Shimmer effect for loading placeholders.",
    component: LoadingSpinner,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "spinner", "basic"],
  },
  {
    id: 18,
    title: "Professional Loading Spinner",
    description: "Smoothly shifting gradient background for hero sections.",
    component: ProfessionalLoadingSpinner,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "spinner", "professional"],
  },
  {
    id: 19,
    title: "Warp Core Loading",
    description: "Subtle parallax scrolling background effect.",
    component: WarpCoreLoading,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "sci-fi", "modern"],
  },
  {
    id: 20,
    title: "Quantum Grid Loading",
    description: "Diagonal shining light passing over text or logo.",
    component: QuantumGridLoading,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "grid", "modern"],
  },
  {
    id: 21,
    title: "Quantum Loading Animation",
    description: "Animated glowing border effect for buttons.",
    component: QuantumLoadingAnimation1,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "quantum", "glow"],
  },
  {
    id: 22,
    title: "Game Loading Interface",
    description: "Expanding ripple animation, ideal for button clicks.",
    component: GameLoadingInterface,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "game", "interactive"],
  },
  {
    id: 23,
    title: "Futuristic Game Loading",
    description: "Classic infinite rotating spinner for loading states.",
    component: FuturisticGameLoading,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "game", "futuristic"],
  },
  {
    id: 24,
    title: "Dots Loader Pro",
    description: "Three dots scaling up and down for loaders.",
    component: LoadingPro,
    category: "Loading" as AnimationCategory,
    tags: ["loading", "dots", "minimal"],
  },
  {
    id: 25,
    title: "Card Hover Lift",
    description: "Cards lift with shadow when hovered.",
    category: "UI Elements" as AnimationCategory,
    tags: ["hover", "cards", "interaction"],
  },
  {
    id: 26,
    title: "Image Hover Zoom",
    description: "Zoom-in effect on image hover, perfect for galleries.",
    category: "UI Elements" as AnimationCategory,
    tags: ["hover", "image", "zoom"],
  },
  {
    id: 27,
    title: "Underline Expand",
    description: "Animated underline expands from left to right on hover.",
    category: "UI Elements" as AnimationCategory,
    tags: ["hover", "underline", "navigation"],
  },
  {
    id: 28,
    title: "Simple Background",
    description: "Gradient flows across text for stylish hero headings.",
    component: SimpleBg,
    category: "Background" as AnimationCategory,
    tags: ["background", "gradient", "flow"],
  },
  {
    id: 29,
    title: "Wave Bg",
    description: "Small particles burst outward, great for success messages.",
    component: WaveBg,
    category: "Background" as AnimationCategory,
    tags: ["background", "confetti", "burst"],
  },
  {
    id: 30,
    title: "Professional Brain Animation",
    description: "Smooth fade transition between page navigations.",
    component: ProfessionalBrainAnimation,
    category: "Background" as AnimationCategory,
    tags: ["background", "fade", "transition"],
  },
  {
    id: 31,
    title: "Quantum Network Animation",
    description: "Animated network connection for modern interfaces.",
    component: QuantumNetworkAnimation,
    category: "Network" as AnimationCategory,
    tags: ["network", "connection", "modern"],
  },
  {
    id: 32,
    title: "Exact Circuit Animation",
    description: "Animated circuit board for modern interfaces.",
    component: ExactCircuitAnimation,
    category: "Network" as AnimationCategory,
    tags: ["network", "circuit", "modern"],
  },
  {
    id: 33,
    title: "Exact Cyber Network Animation",
    description: "Animated circuit board for modern interfaces.",
    component: ExactCyberNetworkAnimation,
    category: "Network" as AnimationCategory,
    tags: ["network", "circuit", "modern"],
  },
  {
    id: 34,
    title: "Data Stream Animation",
    description: "Animated data stream for modern interfaces.",
    component: DataStreamAnimation,
    category: "Network" as AnimationCategory,
    tags: ["network", "data", "modern"],
  },
  {
    id: 35,
    title: "Hadisa Text Animation",
    description: "Animated text for modern interfaces.",
    component: HadisaTextAnimation,
    category: "Text" as AnimationCategory,
    tags: ["text", "hadisa", "modern"],
  },
  {
    id: 36,
    title: "Professional Dot Text",
    description: "Animated text for modern interfaces.",
    // component: TextAnimation,
    // category: "Text" as AnimationCategory,
    // tags: ["text", "professional", "modern"],
  },
  {
    id: 37,
    title: "Futuristic Animated Hero Background",
    description: "Animated hero background for modern interfaces.",
    component: FuturisticAnimatedHeroBackground,
    category: "Background" as AnimationCategory,
    tags: ["background", "futuristic", "modern"],
  },
  {
    id: 38,
    title: "Futuristic Animated Hero Background",
    description: "Animated hero background for modern interfaces.",
    component: FuturisticAnimatedHeroBackground1,
    category: "Background" as AnimationCategory,
    tags: ["background", "futuristic", "modern"],
  },
  {
    id: 39,
    title: "Game Background",
    description: "Animated hero background for modern interfaces.",
    component: GameBackground,
    category: "Background" as AnimationCategory,
    tags: ["background", "game", "modern"],
  },
  {
    id: 40,
    title: "Game Background 1",
    description: "Animated hero background for modern interfaces.",
    component: GameBackground1,
    category: "Background" as AnimationCategory,
    tags: ["background", "game", "modern"],
  },
  {
    id: 41,
    title: "Game Background 2",
    description: "Animated hero background for modern interfaces.",
    component: GameBackground2,
    category: "Background" as AnimationCategory,
    tags: ["background", "game", "modern"],
  },
  {
    id: 42,
    title: "Game Background 3",
    description: "Animated hero background for modern interfaces.",
    component: GameBackground3,
    category: "Background" as AnimationCategory,
    tags: ["background", "game", "modern"],
  },
  {
    id: 43,
    title: "Game Background 4",
    description: "Animated hero background for modern interfaces.",
    component: GameBackground4,
    category: "Background" as AnimationCategory,
    tags: ["background", "game", "modern"],
  },

  {
    id: 45,
    title: "Task Animation",
    description: "Animated hero background for modern interfaces.",
    component: TaskAnimation,
    category: "UI Elements" as AnimationCategory,
    tags: ["ui", "task", "modern"],
  },
  {
    id: 46,
    title: "card Animation",
    description: "Animated hero background for modern interfaces.",
    component: AnimatedCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 47,
    title: "Animated Border Card",
    description: "Animated hero background for modern interfaces.",
    component: AnimatedBorderCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 48,
    title: "Animated Border Card 1",
    description: "Animated hero background for modern interfaces.",
    component: AnimatedBorderCard1,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 49,
    title: "Animated Bright Border Card",
    description: "Animated hero background for modern interfaces.",
    component: AnimatedBrightBorderCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 50,
    title: "Shine Card",
    description: "Animated hero background for modern interfaces.",
    component: ShineCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 51,
    title: "Star Card",
    description: "Animated hero background for modern interfaces.",
    component: StarCardBorder,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 52,
    title: "Star Border Card",
    description: "Animated hero background for modern interfaces.",
    component: StarBorderCard1,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 53,
    title: "Star Card",
    description: "Animated hero background for modern interfaces.",
    component: FuturisticGameCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 54,
    title: "Game Star Card",
    description: "Animated hero background for modern interfaces.",
    component: FuturisticGameCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 55,
    title: "Ornate Game Card",
    description: "Animated hero background for modern interfaces.",
    component: OrnateGameCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },

  {
    id: 57,
    title: "Ornate Game Card 3",
    description: "Animated hero background for modern interfaces.",
    component: OrnateGameCard3,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 58,
    title: "Animated Game Background",
    description: "Animated hero background for modern interfaces.",
    component: AnimatedGameBackground,
    category: "Background" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
  {
    id: 59,
    title: "Animated Game Background 1",
    description: "Animated hero background for modern interfaces.",
    component: AnimatedGameBackground1,
    category: "Background" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },

  {
    id: 61,
    title: "Super Animated Hero Card",
    description: "Animated hero background for modern interfaces.",
    component: SuperAnimatedHeroCard,
    category: "UI Elements" as AnimationCategory,
    tags: ["loading", "pro", "modern"],
  },
];
