"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Package, Download } from "lucide-react"

interface InstallationGuideProps {
  installation: {
    npm: string
    yarn: string
    pnpm: string
    cdn: string
  }
}

export function InstallationGuide({ installation }: InstallationGuideProps) {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedStates((prev) => ({ ...prev, [key]: true }))
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }))
    }, 2000)
  }

  const installationSteps = [
    {
      step: 1,
      title: "Install the package",
      description: "Choose your preferred package manager",
    },
    {
      step: 2,
      title: "Add to Tailwind config",
      description: "Include the plugin in your tailwind.config.js",
      code: `module.exports = {
  // ... other config
  plugins: [
    require('tailwindcss-animate'),
  ],
}`,
    },
    {
      step: 3,
      title: "Use in your HTML/JSX",
      description: "Apply the animation classes to your elements",
      code: `<div class="animate-fade-in-up">
  Your content here
</div>`,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Package Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Package Installation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="npm" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="cdn">CDN</TabsTrigger>
            </TabsList>

            <TabsContent value="npm" className="mt-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">npm</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(installation.npm, "npm")}
                    className="h-8 px-3"
                  >
                    {copiedStates.npm ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <code className="text-sm font-mono text-foreground">{installation.npm}</code>
              </div>
            </TabsContent>

            <TabsContent value="yarn" className="mt-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">yarn</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(installation.yarn, "yarn")}
                    className="h-8 px-3"
                  >
                    {copiedStates.yarn ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <code className="text-sm font-mono text-foreground">{installation.yarn}</code>
              </div>
            </TabsContent>

            <TabsContent value="pnpm" className="mt-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">pnpm</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(installation.pnpm, "pnpm")}
                    className="h-8 px-3"
                  >
                    {copiedStates.pnpm ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <code className="text-sm font-mono text-foreground">{installation.pnpm}</code>
              </div>
            </TabsContent>

            <TabsContent value="cdn" className="mt-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">CDN</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(installation.cdn, "cdn")}
                    className="h-8 px-3"
                  >
                    {copiedStates.cdn ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <code className="text-sm font-mono text-foreground break-all">{installation.cdn}</code>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Step-by-step Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Setup Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {installationSteps.map((step) => (
            <div key={step.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold text-sm">
                {step.step}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                {step.code && (
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Code</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(step.code!, `step-${step.step}`)}
                        className="h-6 px-2"
                      >
                        {copiedStates[`step-${step.step}`] ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                    <pre className="text-xs">
                      <code className="font-mono text-foreground whitespace-pre-wrap">{step.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
