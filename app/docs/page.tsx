import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code2, ExternalLink, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete guide to implementing and customizing TailwindAnimate in your projects.
          </p>
        </div>

        {/* Quick Start */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Quick Start
              </CardTitle>
              <CardDescription>Get up and running in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">1. Install the package</h4>
                <code className="text-sm font-mono">npm install tailwindcss-animate</code>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">2. Add to your Tailwind config</h4>
                <code className="text-sm font-mono">plugins: [require('tailwindcss-animate')]</code>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">3. Use in your HTML</h4>
                <code className="text-sm font-mono">{'<div class="animate-fade-in-up">Content</div>'}</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/dashboard">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Browse Animations
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/showcase">
                  <Code2 className="w-4 h-4 mr-2" />
                  Live Examples
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <a href="https://github.com/hadisa/animation-showcase" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub Repository
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Animation Categories</CardTitle>
              <CardDescription>Understanding different types of animations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Entrance Animations</h4>
                  <p className="text-sm text-muted-foreground">Fade, slide, and bounce effects</p>
                </div>
                <Badge>12</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Hover Effects</h4>
                  <p className="text-sm text-muted-foreground">Interactive hover animations</p>
                </div>
                <Badge>18</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Loading States</h4>
                  <p className="text-sm text-muted-foreground">Spinners and progress indicators</p>
                </div>
                <Badge>8</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for optimal animation performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Performance</h4>
                <p className="text-sm text-muted-foreground">Use transform and opacity for GPU acceleration</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Accessibility</h4>
                <p className="text-sm text-muted-foreground">Respect prefers-reduced-motion settings</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-1">Timing</h4>
                <p className="text-sm text-muted-foreground">Keep animations under 500ms for UI interactions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
