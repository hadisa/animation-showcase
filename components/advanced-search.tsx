"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  X,
  Clock,
  TrendingUp,
  Star,
  Zap,
  Tag,
  SlidersHorizontal,
  History,
  Bookmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

interface SearchFilters {
  difficulty: string[]
  categories: string[]
  tags: string[]
  popularity: [number, number]
  duration: string[]
  performance: string[]
}

interface AdvancedSearchProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  filters: SearchFilters
  onFiltersChange: (filters: SearchFilters) => void
  onClearAll: () => void
  suggestions: string[]
  recentSearches: string[]
  trendingSearches: string[]
}

export function AdvancedSearch({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  onClearAll,
  suggestions,
  recentSearches,
  trendingSearches,
}: AdvancedSearchProps) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [savedSearches, setSavedSearches] = useState<string[]>([])
  const searchInputRef = useRef<HTMLInputElement>(null)

  const difficultyOptions = ["Easy", "Medium", "Advanced"]
  const categoryOptions = ["Entrance", "Hover Effects", "Loading", "Transitions", "Card"]
  const tagOptions = ["fade", "slide", "bounce", "scale", "rotate", "glow", "shadow", "popular", "new", "trending"]
  const durationOptions = ["< 0.5s", "0.5s - 1s", "1s - 2s", "> 2s"]
  const performanceOptions = ["Low Impact", "Medium Impact", "High Impact", "GPU Accelerated"]

  const handleFilterChange = (type: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters }
    if (type === "popularity") return // Handle separately

    const currentValues = newFilters[type] as string[]
    if (currentValues.includes(value)) {
      newFilters[type] = currentValues.filter((v) => v !== value) as any
    } else {
      newFilters[type] = [...currentValues, value] as any
    }
    onFiltersChange(newFilters)
  }

  const handlePopularityChange = (min: number, max: number) => {
    onFiltersChange({ ...filters, popularity: [min, max] })
  }

  const saveCurrentSearch = () => {
    if (searchQuery.trim() && !savedSearches.includes(searchQuery)) {
      setSavedSearches((prev) => [searchQuery, ...prev.slice(0, 4)])
    }
  }

  const getActiveFilterCount = () => {
    return (
      filters.difficulty.length +
      filters.categories.length +
      filters.tags.length +
      filters.duration.length +
      filters.performance.length +
      (filters.popularity[0] > 0 || filters.popularity[1] < 100 ? 1 : 0)
    )
  }

  return (
    <Card className="glass border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl font-serif">
            <Search className="w-5 h-5" />
            Advanced Search
          </CardTitle>
          <div className="flex items-center gap-2">
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {getActiveFilterCount()} filters
              </Badge>
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="h-8"
            >
              <SlidersHorizontal className="w-4 h-4 mr-1" />
              Filters
              {showAdvancedFilters ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Main Search Input */}
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              ref={searchInputRef}
              placeholder="Search animations, tags, descriptions..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="pl-12 pr-12 h-12 text-lg bg-background/50 border-0 rounded-xl"
            />
            {searchQuery && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
            {searchQuery && (
              <Button
                size="sm"
                variant="ghost"
                onClick={saveCurrentSearch}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && (searchQuery || recentSearches.length > 0 || trendingSearches.length > 0) && (
            <Card className="absolute top-full left-0 right-0 mt-2 z-50 glass border-0 max-h-80 overflow-y-auto">
              <CardContent className="p-4 space-y-4">
                {/* Live Suggestions */}
                {searchQuery && suggestions.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Suggestions</span>
                    </div>
                    <div className="space-y-1">
                      {suggestions.slice(0, 5).map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            onSearchChange(suggestion)
                            setShowSuggestions(false)
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-sm"
                        >
                          <span className="text-foreground">{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <History className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Recent</span>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.slice(0, 3).map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            onSearchChange(search)
                            setShowSuggestions(false)
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-sm flex items-center justify-between"
                        >
                          <span className="text-muted-foreground">{search}</span>
                          <Clock className="w-3 h-3 text-muted-foreground" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending Searches */}
                {trendingSearches.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Trending</span>
                    </div>
                    <div className="space-y-1">
                      {trendingSearches.slice(0, 3).map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            onSearchChange(search)
                            setShowSuggestions(false)
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-sm flex items-center justify-between"
                        >
                          <span className="text-foreground">{search}</span>
                          <Badge variant="outline" className="text-xs">
                            #{index + 1}
                          </Badge>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Saved Searches */}
                {savedSearches.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Bookmark className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Saved</span>
                    </div>
                    <div className="space-y-1">
                      {savedSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            onSearchChange(search)
                            setShowSuggestions(false)
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-sm flex items-center justify-between"
                        >
                          <span className="text-foreground">{search}</span>
                          <Star className="w-3 h-3 text-yellow-500" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap gap-2">
          {tagOptions.slice(0, 6).map((tag) => (
            <Button
              key={tag}
              size="sm"
              variant={filters.tags.includes(tag) ? "default" : "outline"}
              onClick={() => handleFilterChange("tags", tag)}
              className="h-8 text-xs"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Button>
          ))}
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <div className="space-y-6 pt-4 border-t border-border/50">
            {/* Difficulty Filter */}
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Difficulty Level
              </h4>
              <div className="flex flex-wrap gap-2">
                {difficultyOptions.map((difficulty) => (
                  <Button
                    key={difficulty}
                    size="sm"
                    variant={filters.difficulty.includes(difficulty) ? "default" : "outline"}
                    onClick={() => handleFilterChange("difficulty", difficulty)}
                    className={`h-8 text-xs ${
                      difficulty === "Easy"
                        ? "border-green-200 text-green-600 hover:bg-green-50"
                        : difficulty === "Medium"
                          ? "border-yellow-200 text-yellow-600 hover:bg-yellow-50"
                          : "border-red-200 text-red-600 hover:bg-red-50"
                    } ${filters.difficulty.includes(difficulty) ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Categories
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categoryOptions.map((category) => (
                  <Button
                    key={category}
                    size="sm"
                    variant={filters.categories.includes(category) ? "default" : "outline"}
                    onClick={() => handleFilterChange("categories", category)}
                    className="h-8 text-xs justify-start"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Popularity Range */}
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Popularity Range
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-12">Min:</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.popularity[0]}
                    onChange={(e) => handlePopularityChange(Number(e.target.value), filters.popularity[1])}
                    className="flex-1"
                  />
                  <span className="text-sm font-mono w-12">{filters.popularity[0]}%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-12">Max:</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.popularity[1]}
                    onChange={(e) => handlePopularityChange(filters.popularity[0], Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-mono w-12">{filters.popularity[1]}%</span>
                </div>
              </div>
            </div>

            {/* Duration Filter */}
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Animation Duration
              </h4>
              <div className="flex flex-wrap gap-2">
                {durationOptions.map((duration) => (
                  <Button
                    key={duration}
                    size="sm"
                    variant={filters.duration.includes(duration) ? "default" : "outline"}
                    onClick={() => handleFilterChange("duration", duration)}
                    className="h-8 text-xs"
                  >
                    {duration}
                  </Button>
                ))}
              </div>
            </div>

            {/* Performance Filter */}
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Performance Impact
              </h4>
              <div className="flex flex-wrap gap-2">
                {performanceOptions.map((performance) => (
                  <Button
                    key={performance}
                    size="sm"
                    variant={filters.performance.includes(performance) ? "default" : "outline"}
                    onClick={() => handleFilterChange("performance", performance)}
                    className="h-8 text-xs"
                  >
                    {performance}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear All Filters */}
            {getActiveFilterCount() > 0 && (
              <div className="pt-4 border-t border-border/50">
                <Button variant="outline" onClick={onClearAll} className="w-full bg-transparent">
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters ({getActiveFilterCount()})
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
