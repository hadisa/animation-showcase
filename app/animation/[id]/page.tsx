"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Copy,
  Play,
  Sparkles,
  Code2,
  Settings,
  Check,
  Pause,
  RotateCcw,
  Zap,
  Heart,
  Share2,
  BookOpen,
  Layers,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"
import { InstallationGuide } from "@/components/installation-guide"
import { Navigation } from "@/components/navigation"

// Sample animation data - in a real app this would come from a database or API
const animationData = {
  "fade-in-up": {
    id: "fade-in-up",
    name: "Fade In Up",
    description: "A smooth fade in animation with upward motion, perfect for hero sections and content reveals.",
    category: "Entrance",
    difficulty: "Easy",
    tags: ["fade", "entrance", "smooth", "popular"],
    preview: "animate-fade-in-up",
    tailwindClasses: "animate-fade-in-up",
    customCSS: `@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}`,
    htmlExample: `<div class="animate-fade-in-up">
  <h1>Welcome to our site!</h1>
  <p>This content fades in smoothly from below.</p>
</div>`,
    reactExample: `import React from 'react'

export function FadeInUpComponent() {
  return (
    <div className="animate-fade-in-up">
      <h1>Welcome to our site!</h1>
      <p>This content fades in smoothly from below.</p>
    </div>
  )
}`,
    variations: [
      {
        name: "Fade In Down",
        classes: "animate-fade-in-down",
        description: "Same effect but from above",
      },
      {
        name: "Fade In Left",
        classes: "animate-fade-in-left",
        description: "Fade in from the left side",
      },
      {
        name: "Fade In Right",
        classes: "animate-fade-in-right",
        description: "Fade in from the right side",
      },
    ],
    installation: {
      npm: "npm install tailwindcss-animate",
      yarn: "yarn add tailwindcss-animate",
      pnpm: "pnpm add tailwindcss-animate",
      cdn: "https://cdn.jsdelivr.net/npm/tailwindcss-animate@latest/dist/index.min.css",
    },
    browserSupport: ["Chrome 26+", "Firefox 16+", "Safari 9+", "Edge 12+"],
    performance: {
      impact: "Low",
      gpu: true,
      description: "Uses transform and opacity which are GPU accelerated",
    },
  },
}

interface AnimationPageProps {
  params: {
    id: string
  }
}

export default function AnimationPage({ params }: AnimationPageProps) {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})
  const [isPlaying, setIsPlaying] = useState(true)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [isFavorited, setIsFavorited] = useState(false)
  const animation = animationData[params.id as keyof typeof animationData]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        // Trigger animation restart by toggling a class
        const previewElement = document.querySelector(".animation-preview-element")
        if (previewElement) {
          previewElement.classList.remove(animation.preview)
          setTimeout(() => {
            previewElement.classList.add(animation.preview)
          }, 50)
        }
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, animation.preview])

  if (!animation) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl floating-animation"></div>
        </div>
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh] relative">
          <Card className="glass border-0 text-center p-8 max-w-md">
            <CardContent>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-red-500" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground mb-4">Animation Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The animation you're looking for doesn't exist or has been moved.
              </p>
              <Link href="/dashboard">
                <Button className="group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedStates((prev) => ({ ...prev, [key]: true }))
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }))
    }, 2000)
  }

  const shareAnimation = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `${animation.name} - TailwindAnimate`,
        text: animation.description,
        url: window.location.href,
      })
    } else {
      copyToClipboard(window.location.href, "share")
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Navigation
        showBreadcrumb={true}
        breadcrumbItems={[
          { name: "Dashboard", href: "/dashboard" },
          { name: animation.category },
          { name: animation.name },
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Badge
                  variant="secondary"
                  className={`bg-gradient-to-r ${
                    animation.category === "Entrance"
                      ? "from-blue-500 to-cyan-500"
                      : animation.category === "Hover Effects"
                        ? "from-green-500 to-emerald-500"
                        : animation.category === "Loading"
                          ? "from-yellow-500 to-orange-500"
                          : "from-purple-500 to-pink-500"
                  } text-white border-0`}
                >
                  {animation.category}
                </Badge>
                <Badge
                  variant="outline"
                  className={`${
                    animation.difficulty === "Easy"
                      ? "text-green-600 border-green-200"
                      : animation.difficulty === "Medium"
                        ? "text-yellow-600 border-yellow-200"
                        : "text-red-600 border-red-200"
                  }`}
                >
                  {animation.difficulty}
                </Badge>
                {animation.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs bg-background/50">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {animation.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">{animation.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setIsFavorited(!isFavorited)}
                  variant="outline"
                  className={`${isFavorited ? "bg-red-50 border-red-200 text-red-600" : ""}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFavorited ? "fill-current" : ""}`} />
                  {isFavorited ? "Favorited" : "Add to Favorites"}
                </Button>
                <Button onClick={shareAnimation} variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Documentation
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="glass border-0 p-6 min-w-[200px]">
              <div className="space-y-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">4.9</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">12.5k</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="glass border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl font-serif">
                      <Play className="w-5 h-5" />
                      Live Preview
                    </CardTitle>
                    <CardDescription className="text-base">Interactive animation demonstration</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setPreviewDevice("desktop")}
                      className={previewDevice === "desktop" ? "bg-primary/10 text-primary" : ""}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setPreviewDevice("tablet")}
                      className={previewDevice === "tablet" ? "bg-primary/10 text-primary" : ""}
                    >
                      <Tablet className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setPreviewDevice("mobile")}
                      className={previewDevice === "mobile" ? "bg-primary/10 text-primary" : ""}
                    >
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div
                  className={`mx-auto transition-all duration-300 ${
                    previewDevice === "desktop" ? "max-w-full" : previewDevice === "tablet" ? "max-w-md" : "max-w-xs"
                  }`}
                >
                  <div className="bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl p-12 flex items-center justify-center min-h-[200px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                    <div
                      className={`animation-preview-element w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center relative z-10 ${
                        isPlaying ? animation.preview : ""
                      }`}
                      style={{ animationDuration: `${1 / playbackSpeed}s` }}
                    >
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <Button size="sm" variant="outline" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const element = document.querySelector(".animation-preview-element")
                      if (element) {
                        element.classList.remove(animation.preview)
                        setTimeout(() => element.classList.add(animation.preview), 50)
                      }
                    }}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Speed:</span>
                    <select
                      value={playbackSpeed}
                      onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                      className="bg-background border border-border rounded px-2 py-1 text-sm"
                    >
                      <option value={0.5}>0.5x</option>
                      <option value={1}>1x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2}>2x</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10">
                <CardTitle className="flex items-center gap-2 text-xl font-serif">
                  <Zap className="w-5 h-5" />
                  Quick Copy
                </CardTitle>
                <CardDescription className="text-base">Ready-to-use Tailwind classes</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                        Tailwind Classes
                      </span>
                      <Badge variant="outline" className="text-xs bg-slate-800 text-slate-300 border-slate-600">
                        CSS
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(animation.tailwindClasses, "quick")}
                      className={`h-8 px-3 ${copiedStates.quick ? "bg-green-900/50 text-green-400" : "text-slate-300 hover:bg-slate-700"}`}
                    >
                      {copiedStates.quick ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          <span className="text-xs font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>
                  <code className="text-lg font-mono text-yellow-300 block bg-slate-800/50 px-4 py-3 rounded-lg border border-slate-700/50">
                    {animation.tailwindClasses}
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10">
                <CardTitle className="text-xl font-serif">Related Animations</CardTitle>
                <CardDescription className="text-base">Similar effects you might find useful</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {animation.variations.map((variation, index) => (
                  <div
                    key={variation.name}
                    className={`flex items-center justify-between p-4 bg-gradient-to-r from-muted/20 to-muted/5 rounded-xl border border-border/50 hover-glow-premium stagger-animation`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{variation.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{variation.description}</p>
                      <code className="text-xs font-mono bg-background/50 px-2 py-1 rounded text-primary">
                        {variation.classes}
                      </code>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(variation.classes, variation.name)}
                      className="ml-4"
                    >
                      {copiedStates[variation.name] ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="glass border-0 overflow-hidden">
              <Tabs defaultValue="code" className="w-full">
                <CardHeader className="pb-0 bg-gradient-to-r from-muted/30 to-muted/10">
                  <TabsList className="glass border-0 bg-background/50 backdrop-blur-sm h-auto p-1">
                    <TabsTrigger
                      value="code"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                    >
                      <Code2 className="w-4 h-4" />
                      Code Examples
                    </TabsTrigger>
                    <TabsTrigger
                      value="install"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                    >
                      <Layers className="w-4 h-4" />
                      Installation
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Details
                    </TabsTrigger>
                  </TabsList>
                </CardHeader>

                <CardContent className="p-6">
                  <TabsContent value="code" className="space-y-6 mt-0">
                    <CodeBlock
                      title="HTML Implementation"
                      language="html"
                      code={animation.htmlExample}
                      onCopy={(code) => copyToClipboard(code, "html")}
                      copied={copiedStates.html}
                      editable={true}
                      previewable={true}
                      downloadable={true}
                    />
                    <CodeBlock
                      title="React Component"
                      language="tsx"
                      code={animation.reactExample}
                      onCopy={(code) => copyToClipboard(code, "react")}
                      copied={copiedStates.react}
                      editable={true}
                      downloadable={true}
                    />
                    <CodeBlock
                      title="Custom CSS Keyframes"
                      language="css"
                      code={animation.customCSS}
                      onCopy={(code) => copyToClipboard(code, "css")}
                      copied={copiedStates.css}
                      downloadable={true}
                    />
                  </TabsContent>

                  <TabsContent value="install" className="mt-0">
                    <InstallationGuide installation={animation.installation} />
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6 mt-0">
                    <Card className="glass border-0">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Settings className="w-5 h-5" />
                          Technical Specifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-4">Performance Metrics</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-muted/20 to-muted/5 p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-muted-foreground">Performance Impact:</span>
                                <Badge variant={animation.performance.impact === "Low" ? "secondary" : "destructive"}>
                                  {animation.performance.impact}
                                </Badge>
                              </div>
                            </div>
                            <div className="bg-gradient-to-r from-muted/20 to-muted/5 p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-muted-foreground">GPU Accelerated:</span>
                                <Badge variant={animation.performance.gpu ? "secondary" : "outline"}>
                                  {animation.performance.gpu ? "Yes" : "No"}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                            {animation.performance.description}
                          </p>
                        </div>

                        <Separator />

                        <div>
                          <h4 className="font-semibold text-foreground mb-4">Browser Compatibility</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {animation.browserSupport.map((browser) => (
                              <div key={browser} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-muted-foreground">{browser}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
