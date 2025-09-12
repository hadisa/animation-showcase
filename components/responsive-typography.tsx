"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

interface ResponsiveHeadingProps {
  children: ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  responsive?: boolean
}

export function ResponsiveHeading({ children, level, className, responsive = true }: ResponsiveHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const responsiveClasses = {
    1: responsive ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" : "text-4xl",
    2: responsive ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-3xl",
    3: responsive ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl" : "text-2xl",
    4: responsive ? "text-lg sm:text-xl md:text-2xl lg:text-3xl" : "text-xl",
    5: responsive ? "text-base sm:text-lg md:text-xl lg:text-2xl" : "text-lg",
    6: responsive ? "text-sm sm:text-base md:text-lg lg:text-xl" : "text-base",
  }

  return (
    <Tag className={cn("font-serif font-bold text-foreground leading-tight", responsiveClasses[level], className)}>
      {children}
    </Tag>
  )
}

interface ResponsiveTextProps {
  children: ReactNode
  size?: "xs" | "sm" | "base" | "lg" | "xl"
  className?: string
  responsive?: boolean
}

export function ResponsiveText({ children, size = "base", className, responsive = true }: ResponsiveTextProps) {
  const responsiveClasses = {
    xs: responsive ? "text-xs sm:text-sm" : "text-xs",
    sm: responsive ? "text-sm sm:text-base" : "text-sm",
    base: responsive ? "text-base sm:text-lg" : "text-base",
    lg: responsive ? "text-lg sm:text-xl" : "text-lg",
    xl: responsive ? "text-xl sm:text-2xl" : "text-xl",
  }

  return <p className={cn("text-muted-foreground leading-relaxed", responsiveClasses[size], className)}>{children}</p>
}
