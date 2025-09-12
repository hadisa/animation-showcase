"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, Sparkles, Heart, Zap, MousePointer } from "lucide-react"

interface AnimationDemoProps {
    title: string
    description: string
    animationClass: string
    category: "entrance" | "hover" | "loading" | "attention"
    icon?: React.ReactNode
}

export function AnimationDemo({ title, description, animationClass, category, icon }: AnimationDemoProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [key, setKey] = useState(0)

    const categoryColors = {
        entrance: "bg-blue-500",
        hover: "bg-green-500",
        loading: "bg-yellow-500",
        attention: "bg-purple-500",
    }

    const categoryIcons = {
        entrance: <Sparkles className="w-6 h-6 text-white" />,
        hover: <MousePointer className="w-6 h-6 text-white" />,
        loading: <Zap className="w-6 h-6 text-white" />,
        attention: <Heart className="w-6 h-6 text-white" />,
    }

    const toggleAnimation = () => {
        if (isPlaying) {
            setIsPlaying(false)
        } else {
            setKey((prev) => prev + 1)
            setIsPlaying(true)
            // Auto-stop after animation duration
            setTimeout(() => setIsPlaying(false), 2000)
        }
    }

    const resetAnimation = () => {
        setKey((prev) => prev + 1)
        setIsPlaying(true)
        setTimeout(() => setIsPlaying(false), 2000)
    }

    return (
        <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                        {category}
                    </Badge>
                </div>
                <CardTitle className="font-serif text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Animation Preview */}
                <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-[120px] relative">
                    <div
                        key={key}
                        className={`w-16 h-16 ${categoryColors[category]} rounded-lg flex items-center justify-center ${isPlaying ? animationClass : ""
                            }`}
                    >
                        {icon || categoryIcons[category]}
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-2 right-2 flex gap-1">
                        <Button size="sm" variant="secondary" onClick={toggleAnimation} className="h-7 w-7 p-0">
                            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        </Button>
                        <Button size="sm" variant="secondary" onClick={resetAnimation} className="h-7 w-7 p-0">
                            <RotateCcw className="w-3 h-3" />
                        </Button>
                    </div>
                </div>

                {/* Code Display */}
                <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">Tailwind Class</span>
                    </div>
                    <code className="text-sm font-mono text-foreground break-all">{animationClass}</code>
                </div>
            </CardContent>
        </Card>
    )
}
