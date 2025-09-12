"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, RotateCcw } from "lucide-react"

interface AnimationPreviewProps {
  animationClass: string
  children: React.ReactNode
  autoPlay?: boolean
}

export function AnimationPreview({ animationClass, children, autoPlay = false }: AnimationPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [key, setKey] = useState(0)

  const toggleAnimation = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setKey((prev) => prev + 1) // Force re-render to restart animation
      setIsPlaying(true)
    }
  }

  const resetAnimation = () => {
    setKey((prev) => prev + 1)
    setIsPlaying(true)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-muted/30 p-8 flex items-center justify-center min-h-[200px] relative">
          <div key={key} className={`${isPlaying ? animationClass : ""} transition-all duration-300`}>
            {children}
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button size="sm" variant="secondary" onClick={toggleAnimation} className="h-8 w-8 p-0">
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </Button>
            <Button size="sm" variant="secondary" onClick={resetAnimation} className="h-8 w-8 p-0">
              <RotateCcw className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
