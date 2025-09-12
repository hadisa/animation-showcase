"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  ArrowRight,
  Play,
  Copy,
  Heart,
  MousePointer,
  RotateCw,
  Zap,
  ChevronRight,
  Filter,
  Grid3X3,
  List,
  TrendingUp,
  Clock,
  Sparkles,
  Eye,
  Download,
  Pause,
  SortAsc,
  SortDesc,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AdvancedSearch } from "@/components/advanced-search"
import Link from "next/link"

const animationCategories = [
  {
    id: "entrance",
    name: "Entrance",
    icon: ArrowRight,
    count: 24,
    color: "from-blue-500 to-cyan-500",
    description: "Eye-catching entrance animations",
    animations: [
      {
        id: "fade-in-up",
        name: "Fade In Up",
        description: "Smooth fade in with upward motion",
        preview: "animate-fade-in-up",
        code: "animate-fade-in-up",
        difficulty: "Easy",
        duration: "0.6s",
        popularity: 95,
        tags: ["fade", "entrance", "smooth"],
      },
      {
        id: "slide-in-left",
        name: "Slide In Left",
        description: "Slide in from the left side",
        preview: "animate-slide-in-left",
        code: "animate-slide-in-left",
        difficulty: "Easy",
        duration: "0.5s",
        popularity: 88,
        tags: ["slide", "entrance", "directional"],
      },
      {
        id: "bounce-in",
        name: "Bounce In",
        description: "Bouncy entrance animation",
        preview: "animate-bounce-in",
        code: "animate-bounce-in",
        difficulty: "Medium",
        duration: "0.75s",
        popularity: 92,
        tags: ["bounce", "entrance", "playful"],
      },
      {
        id: "zoom-in",
        name: "Zoom In",
        description: "Scale-based entrance effect",
        preview: "animate-zoom-in",
        code: "animate-zoom-in",
        difficulty: "Easy",
        duration: "0.5s",
        popularity: 85,
        tags: ["zoom", "scale", "entrance"],
      },
      {
        id: "flip-in-x",
        name: "Flip In X",
        description: "3D flip entrance animation",
        preview: "animate-flip-in-x",
        code: "animate-flip-in-x",
        difficulty: "Advanced",
        duration: "0.75s",
        popularity: 78,
        tags: ["flip", "3d", "entrance"],
      },
      {
        id: "fade-in-down",
        name: "Fade In Down",
        description: "Fade in with downward motion",
        preview: "animate-fade-in-down",
        code: "animate-fade-in-down",
        difficulty: "Easy",
        duration: "0.6s",
        popularity: 90,
        tags: ["fade", "entrance", "directional"],
      },
    ],
  },
  {
    id: "hover",
    name: "Hover Effects",
    icon: MousePointer,
    count: 32,
    color: "from-green-500 to-emerald-500",
    description: "Interactive hover animations",
    animations: [
      {
        id: "hover-scale",
        name: "Hover Scale",
        description: "Scale up on hover interaction",
        preview: "hover:scale-105 transition-transform duration-300",
        code: "hover:scale-105 transition-transform duration-300",
        difficulty: "Easy",
        duration: "0.3s",
        popularity: 96,
        tags: ["hover", "scale", "interactive"],
      },
      {
        id: "hover-glow",
        name: "Hover Glow",
        description: "Glowing effect on hover",
        preview: "hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-300",
        code: "hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-300",
        difficulty: "Medium",
        duration: "0.3s",
        popularity: 89,
        tags: ["hover", "glow", "shadow"],
      },
      {
        id: "hover-lift",
        name: "Hover Lift",
        description: "Lift effect with shadow",
        preview: "hover:-translate-y-2 hover:shadow-xl transition-all duration-300",
        code: "hover:-translate-y-2 hover:shadow-xl transition-all duration-300",
        difficulty: "Easy",
        duration: "0.3s",
        popularity: 93,
        tags: ["hover", "lift", "shadow"],
      },
      {
        id: "hover-rotate",
        name: "Hover Rotate",
        description: "Subtle rotation on hover",
        preview: "hover:rotate-6 transition-transform duration-300",
        code: "hover:rotate-6 transition-transform duration-300",
        difficulty: "Easy",
        duration: "0.3s",
        popularity: 82,
        tags: ["hover", "rotate", "playful"],
      },
      {
        id: "hover-skew",
        name: "Hover Skew",
        description: "Skew transformation effect",
        preview: "hover:skew-x-12 transition-transform duration-300",
        code: "hover:skew-x-12 transition-transform duration-300",
        difficulty: "Medium",
        duration: "0.3s",
        popularity: 75,
        tags: ["hover", "skew", "creative"],
      },
    ],
  },
  {
    id: "loading",
    name: "Loading",
    icon: RotateCw,
    count: 16,
    color: "from-yellow-500 to-orange-500",
    description: "Loading and progress animations",
    animations: [
      {
        id: "spin",
        name: "Spin",
        description: "Classic spinning loader",
        preview: "animate-spin",
        code: "animate-spin",
        difficulty: "Easy",
        duration: "1s",
        popularity: 98,
        tags: ["loading", "spin", "classic"],
      },
      {
        id: "pulse",
        name: "Pulse",
        description: "Pulsing opacity effect",
        preview: "animate-pulse",
        code: "animate-pulse",
        difficulty: "Easy",
        duration: "2s",
        popularity: 94,
        tags: ["loading", "pulse", "opacity"],
      },
      {
        id: "bounce",
        name: "Bounce",
        description: "Bouncing motion",
        preview: "animate-bounce",
        code: "animate-bounce",
        difficulty: "Easy",
        duration: "1s",
        popularity: 87,
        tags: ["loading", "bounce", "motion"],
      },
      {
        id: "wiggle",
        name: "Wiggle",
        description: "Playful wiggle animation",
        preview: "animate-wiggle",
        code: "animate-wiggle",
        difficulty: "Medium",
        duration: "1s",
        popularity: 79,
        tags: ["loading", "wiggle", "playful"],
      },
    ],
  },
  {
    id: "transitions",
    name: "Transitions",
    icon: Zap,
    count: 28,
    color: "from-purple-500 to-pink-500",
    description: "Smooth transition effects",
    animations: [
      {
        id: "fade-transition",
        name: "Fade Transition",
        description: "Smooth opacity transition",
        preview: "transition-opacity duration-300 hover:opacity-75",
        code: "transition-opacity duration-300",
        difficulty: "Easy",
        duration: "0.3s",
        popularity: 97,
        tags: ["transition", "fade", "opacity"],
      },
      {
        id: "slide-transition",
        name: "Slide Transition",
        description: "Transform-based sliding",
        preview: "transition-transform duration-300 hover:translate-x-2",
        code: "transition-transform duration-300",
        difficulty: "Easy",
        duration: "0.3s",
        popularity: 91,
        tags: ["transition", "slide", "transform"],
      },
      {
        id: "color-transition",
        name: "Color Transition",
        description: "Smooth color changes",
        preview: "transition-colors duration-300 hover:bg-primary/10",
        code: "transition-colors duration-300",
        difficulty: "Easy",
        duration: "0.3s",
        popularity: 95,
        tags: ["transition", "color", "background"],
      },
    ],
  },
  {
    id: "attention",
    name: "Attention Seekers",
    icon: Sparkles,
    count: 20,
    color: "from-red-500 to-pink-500",
    description: "Eye-catching attention animations",
    animations: [
      {
        id: "shake",
        name: "Shake",
        description: "Attention-grabbing shake effect",
        preview: "animate-shake",
        code: "animate-shake",
        difficulty: "Medium",
        duration: "0.82s",
        popularity: 86,
        tags: ["attention", "shake", "alert"],
      },
      {
        id: "tada",
        name: "Tada",
        description: "Celebratory tada animation",
        preview: "animate-tada",
        code: "animate-tada",
        difficulty: "Medium",
        duration: "1s",
        popularity: 83,
        tags: ["attention", "celebration", "scale"],
      },
      {
        id: "heartbeat",
        name: "Heartbeat",
        description: "Pulsing heartbeat effect",
        preview: "animate-heartbeat",
        code: "animate-heartbeat",
        difficulty: "Medium",
        duration: "1.5s",
        popularity: 77,
        tags: ["attention", "pulse", "heartbeat"],
      },
    ],
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"name" | "popularity" | "difficulty">("popularity")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [playingAnimations, setPlayingAnimations] = useState<Set<string>>(new Set())
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const [filters, setFilters] = useState({
    difficulty: [] as string[],
    categories: [] as string[],
    tags: [] as string[],
    popularity: [0, 100] as [number, number],
    duration: [] as string[],
    performance: [] as string[],
  })

  const [recentSearches] = useState(["fade animations", "hover effects", "loading spinners"])

  const [trendingSearches] = useState(["bounce effects", "slide transitions", "glow animations"])

  const suggestions = useMemo(() => {
    if (!searchQuery) return []

    const allTerms = [
      ...animationCategories.flatMap((cat) => cat.animations.map((anim) => anim.name)),
      ...animationCategories.flatMap((cat) => cat.animations.flatMap((anim) => anim.tags)),
      ...animationCategories.map((cat) => cat.name),
      "fade",
      "slide",
      "bounce",
      "scale",
      "rotate",
      "glow",
      "shadow",
      "popular",
      "new",
      "trending",
    ]

    return allTerms
      .filter((term) => term.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((term, index, arr) => arr.indexOf(term) === index)
      .slice(0, 8)
  }, [searchQuery])

  const filteredAnimations = useMemo(() => {
    return animationCategories
      .flatMap((category) =>
        category.animations
          .filter((animation) => {
            // Basic search filter
            const matchesSearch = selectedCategory === "all" || category.id === selectedCategory
            const matchesQuery =
              !searchQuery ||
              animation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              animation.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              animation.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

            // Advanced filters
            const matchesDifficulty =
              filters.difficulty.length === 0 || filters.difficulty.includes(animation.difficulty)
            const matchesCategory = filters.categories.length === 0 || filters.categories.includes(category.name)
            const matchesTags = filters.tags.length === 0 || filters.tags.some((tag) => animation.tags.includes(tag))
            const matchesPopularity =
              animation.popularity >= filters.popularity[0] && animation.popularity <= filters.popularity[1]

            // Duration matching (simplified)
            const matchesDuration =
              filters.duration.length === 0 ||
              filters.duration.some((dur) => {
                const animDuration = Number.parseFloat(animation.duration)
                if (dur === "< 0.5s") return animDuration < 0.5
                if (dur === "0.5s - 1s") return animDuration >= 0.5 && animDuration <= 1
                if (dur === "1s - 2s") return animDuration > 1 && animDuration <= 2
                if (dur === "> 2s") return animDuration > 2
                return true
              })

            // Performance matching (simplified)
            const matchesPerformance =
              filters.performance.length === 0 ||
              filters.performance.some((perf) => {
                if (perf === "Low Impact") return animation.difficulty === "Easy"
                if (perf === "GPU Accelerated") return true // Most animations are GPU accelerated
                return true
              })

            return (
              matchesSearch &&
              matchesQuery &&
              matchesDifficulty &&
              matchesCategory &&
              matchesTags &&
              matchesPopularity &&
              matchesDuration &&
              matchesPerformance
            )
          })
          .map((animation) => ({
            ...animation,
            category: category.name,
            categoryColor: category.color,
            categoryId: category.id,
          })),
      )
      .sort((a, b) => {
        let comparison = 0
        switch (sortBy) {
          case "name":
            comparison = a.name.localeCompare(b.name)
            break
          case "popularity":
            comparison = b.popularity - a.popularity
            break
          case "difficulty":
            const difficultyOrder = { Easy: 1, Medium: 2, Advanced: 3 }
            comparison =
              difficultyOrder[a.difficulty as keyof typeof difficultyOrder] -
              difficultyOrder[b.difficulty as keyof typeof difficultyOrder]
            break
        }
        return sortOrder === "asc" ? comparison : -comparison
      })
  }, [searchQuery, selectedCategory, filters, sortBy, sortOrder])

  const toggleAnimation = (animationId: string) => {
    setPlayingAnimations((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(animationId)) {
        newSet.delete(animationId)
      } else {
        newSet.add(animationId)
      }
      return newSet
    })
  }

  const toggleFavorite = (animationId: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(animationId)) {
        newSet.delete(animationId)
      } else {
        newSet.add(animationId)
      }
      return newSet
    })
  }

  const copyToClipboard = async (code: string, animationId: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(animationId)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setFilters({
      difficulty: [],
      categories: [],
      tags: [],
      popularity: [0, 100],
      duration: [],
      performance: [],
    })
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

      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Professional Library
              </Badge>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Animation Dashboard</h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Explore our comprehensive collection of professional Tailwind CSS animations. Each animation is
                optimized for performance and ready to copy-paste into your projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Card className="glass border-0 p-4 text-center">
                <div className="text-2xl font-bold text-foreground">120+</div>
                <div className="text-sm text-muted-foreground">Animations</div>
              </Card>
              <Card className="glass border-0 p-4 text-center">
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <AdvancedSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAllFilters}
            suggestions={suggestions}
            recentSearches={recentSearches}
            trendingSearches={trendingSearches}
          />
        </div>

        <div className="mb-8">
          <Card className="glass border-0 p-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                  <TabsList className="glass border-0 h-auto p-2 bg-background/50 backdrop-blur-sm">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      All Categories
                    </TabsTrigger>
                    {animationCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <category.icon className="w-4 h-4 mr-2" />
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-background/50 border border-border rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="name">Name</option>
                    <option value="difficulty">Difficulty</option>
                  </select>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  >
                    {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {selectedCategory === "all" && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground">Categories</h2>
              <Badge variant="outline">{animationCategories.length} categories</Badge>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {animationCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Card
                    key={category.id}
                    className={`group cursor-pointer glass border-0 hover-glow-premium stagger-animation`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <span>{category.count} animations</span>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              {selectedCategory === "all"
                ? "All Animations"
                : animationCategories.find((c) => c.id === selectedCategory)?.name + " Animations"}
            </h2>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-sm">
                {filteredAnimations.length} animations
              </Badge>
              {(filters.difficulty.length > 0 ||
                filters.categories.length > 0 ||
                filters.tags.length > 0 ||
                filters.popularity[0] > 0 ||
                filters.popularity[1] < 100 ||
                filters.duration.length > 0 ||
                filters.performance.length > 0) && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  <Filter className="w-3 h-3 mr-1" />
                  Filtered
                </Badge>
              )}
            </div>
          </div>

          <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
            {filteredAnimations.map((animation, index) => (
              <Card
                key={animation.id}
                className={`group glass border-0 hover-glow-premium stagger-animation ${
                  viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className={viewMode === "list" ? "sm:w-1/3" : ""}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={`text-xs bg-gradient-to-r ${
                          animationCategories.find((c) => c.id === animation.categoryId)?.color
                        } text-white border-0`}
                      >
                        {animation.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          animation.difficulty === "Easy"
                            ? "text-green-600 border-green-200"
                            : animation.difficulty === "Medium"
                              ? "text-yellow-600 border-yellow-200"
                              : "text-red-600 border-red-200"
                        }`}
                      >
                        {animation.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{animation.popularity}%</span>
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                    {animation.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{animation.description}</CardDescription>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{animation.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{Math.floor(animation.popularity * 10)}k views</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent
                  className={`space-y-6 ${viewMode === "list" ? "sm:w-2/3 flex flex-col justify-center" : ""}`}
                >
                  <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-8 flex items-center justify-center min-h-[140px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center relative z-10 ${
                        playingAnimations.has(animation.id) ? animation.preview : ""
                      }`}
                    >
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-3 right-3 z-10"
                      onClick={() => toggleAnimation(animation.id)}
                    >
                      {playingAnimations.has(animation.id) ? (
                        <Pause className="w-3 h-3" />
                      ) : (
                        <Play className="w-3 h-3" />
                      )}
                    </Button>
                  </div>

                  <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Tailwind Classes
                        </span>
                        <Badge variant="outline" className="text-xs">
                          CSS
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(animation.code, animation.id)}
                        className="h-8 px-3 hover:bg-primary/10"
                      >
                        {copiedCode === animation.id ? (
                          <span className="text-xs text-green-600 font-medium">Copied!</span>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" />
                            <span className="text-xs">Copy</span>
                          </>
                        )}
                      </Button>
                    </div>
                    <code className="text-sm font-mono text-foreground break-all bg-background/50 px-3 py-2 rounded-lg block">
                      {animation.code}
                    </code>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 group" asChild>
                      <Link href={`/animation/${animation.id}`}>
                        <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleFavorite(animation.id)}
                      className={`${
                        favorites.has(animation.id)
                          ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                          : "hover:bg-primary/5"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.has(animation.id) ? "fill-current" : ""}`} />
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-primary/5 bg-transparent">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {animation.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-background/50">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredAnimations.length === 0 && (
          <Card className="glass border-0 text-center py-16">
            <CardContent>
              <div className="w-20 h-20 bg-gradient-to-br from-muted to-muted/50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">No animations found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We couldn't find any animations matching your search criteria. Try adjusting your filters or search
                terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setFilters({
                      difficulty: [],
                      categories: [],
                      tags: [],
                      popularity: [0, 100],
                      duration: [],
                      performance: [],
                    })
                  }}
                >
                  Clear All Filters
                </Button>
                <Button asChild>
                  <Link href="/showcase">Browse All Animations</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
