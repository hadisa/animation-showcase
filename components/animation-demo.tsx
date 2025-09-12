"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MousePointer,
  Zap,
  Heart,
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Props
interface AnimationDemoProps {
  title: string;
  description: string;
  animationClass: string;
  category: "entrance" | "hover" | "loading" | "attention";
  icon?: React.ReactNode;
}

export function AnimationDemo2({
  title,
  description,
  animationClass,
  category,
  icon,
}: AnimationDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const categoryColors: Record<string, string> = {
    entrance: "bg-gradient-to-r from-blue-500 to-cyan-400",
    hover: "bg-gradient-to-r from-green-500 to-emerald-400",
    loading: "bg-gradient-to-r from-yellow-500 to-amber-400",
    attention: "bg-gradient-to-r from-purple-500 to-pink-400",
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    entrance: <Sparkles className="w-6 h-6 text-white" />,
    hover: <MousePointer className="w-6 h-6 text-white" />,
    loading: <Zap className="w-6 h-6 text-white" />,
    attention: <Heart className="w-6 h-6 text-white" />,
  };

  const toggleAnimation = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setKey((prev) => prev + 1);
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  const resetAnimation = () => {
    setKey((prev) => prev + 1);
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(animationClass);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="relative group overflow-hidden bg-gradient-to-br from-gray-900/90 via-slate-900/90 to-black/90 border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 rounded-2xl">
      {/* Glow lines background */}
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute top-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute top-2/3 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-200" />
      </div>

      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <Badge className="text-xs bg-white/10 border border-white/20 text-white backdrop-blur-md">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg sm:text-xl text-white font-bold tracking-wide">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-300 text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 relative">
        {/* Preview Box */}
        <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-10 flex items-center justify-center min-h-[140px] border border-white/10 shadow-inner">
          <div
            key={key}
            className={`w-20 h-20 ${categoryColors[category]} rounded-xl flex items-center justify-center transition-transform duration-500 ${
              isPlaying ? animationClass : ""
            }`}
          >
            {icon || categoryIcons[category]}
          </div>

          {/* Controls */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={toggleAnimation}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={resetAnimation}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <RotateCcw className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Code Preview */}
        <div className="bg-black/40 border border-white/10 rounded-lg p-4 backdrop-blur-md relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Tailwind Class</span>
            <Button
              size="sm"
              variant="secondary"
              onClick={copyToClipboard}
              className="h-7 w-7 p-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            >
              {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
            </Button>
          </div>
          <code className="text-sm font-mono text-cyan-300 break-all">{animationClass}</code>
        </div>
      </CardContent>
    </Card>
  );
}
