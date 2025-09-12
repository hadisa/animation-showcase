"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Menu, Home, LayoutDashboard, Play, Github, ExternalLink, BookOpen, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
    description: "Landing page and overview",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Browse all animations",
  },
  {
    name: "Showcase",
    href: "/showcase",
    icon: Play,
    description: "Live animation demos",
  },
  {
    name: "Documentation",
    href: "/docs",
    icon: BookOpen,
    description: "Implementation guides",
  },
]

const externalLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "CodePen",
    href: "https://codepen.io",
    icon: ExternalLink,
  },
]

interface NavigationProps {
  variant?: "default" | "minimal"
  showBreadcrumb?: boolean
  breadcrumbItems?: Array<{ name: string; href?: string }>
}

export function Navigation({ variant = "default", showBreadcrumb = false, breadcrumbItems = [] }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-serif text-lg sm:text-xl font-bold text-foreground">
              <span className="hidden sm:inline">TailwindAnimate</span>
              <span className="sm:hidden">TA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {variant === "default" && (
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground",
                      isActive(item.href) ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Page-specific badges - hidden on mobile */}
            <div className="hidden sm:block">
              {pathname === "/dashboard" && <Badge variant="secondary">Dashboard</Badge>}
              {pathname === "/showcase" && <Badge variant="secondary">Live Showcase</Badge>}
              {pathname.startsWith("/animation/") && <Badge variant="secondary">Animation Details</Badge>}
            </div>

            {/* External Links - hidden on small screens */}
            <div className="hidden md:flex items-center space-x-2">
              {externalLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <Button key={link.name} variant="outline" size="sm" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="w-4 h-4 mr-2" />
                      <span className="hidden lg:inline">{link.name}</span>
                    </a>
                  </Button>
                )
              })}
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                    <div className="flex items-center space-x-2">
                      
                      <span className="font-serif text-xl font-bold text-foreground">TailwindAnimate</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                    <div>
                      <h3 className="font-medium text-foreground mb-3">Navigation</h3>
                      <div className="space-y-1">
                        {navigationItems.map((item) => {
                          const IconComponent = item.icon
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-muted",
                                isActive(item.href) ? "bg-muted text-foreground" : "text-muted-foreground",
                              )}
                            >
                              <IconComponent className="w-5 h-5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium truncate">{item.name}</div>
                                <div className="text-xs text-muted-foreground truncate">{item.description}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium text-foreground mb-3">External Links</h3>
                      <div className="space-y-1">
                        {externalLinks.map((link) => {
                          const IconComponent = link.icon
                          return (
                            <a
                              key={link.name}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-muted text-muted-foreground"
                            >
                              <IconComponent className="w-5 h-5 flex-shrink-0" />
                              <span className="font-medium flex-1">{link.name}</span>
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {showBreadcrumb && breadcrumbItems.length > 0 && (
          <div className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  {index > 0 && <span>/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-foreground transition-colors truncate">
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-foreground truncate">{item.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
