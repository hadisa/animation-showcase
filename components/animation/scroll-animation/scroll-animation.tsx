"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  type?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "rotate" | "flip"
}

export function ScrollAnimation({ children, className = "", delay = 0, type = "fadeUp" }: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    switch (type) {
      case "fadeLeft":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`
      case "fadeRight":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`
      case "scale":
        return `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`
      case "rotate":
        return `${baseClasses} ${isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-12"}`
      case "flip":
        return `${baseClasses} ${isVisible ? "opacity-100 rotateY-0" : "opacity-0 rotateY-90"}`
      default: // fadeUp
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
