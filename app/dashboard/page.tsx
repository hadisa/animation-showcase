"use client"

import { AdvancedSearch } from "@/components/advanced-search"
import BackgroundEffects from "@/components/background-effects"
import { Navigation } from "@/components/navigation"
import { AnimationCardRenderer } from "@/components/sections/dashboard/animation-card-renderer"
import { animationCategories } from "@/components/sections/dashboard/animation-data"
import CategoryFilter from "@/components/sections/dashboard/category-filter"
import CategoryGrid from "@/components/sections/dashboard/category-grid"
import HeaderSection from "@/components/sections/dashboard/header-section-dash"
import NoResultsSection from "@/components/sections/dashboard/no-results-section"
import { Badge } from "@/components/ui/badge"
import { useAnimationActions } from "@/hooks/use-animation-actions"
import { useAnimationFilters } from "@/hooks/use-animation-filters"
import {
  Filter
} from "lucide-react"
import { useState } from "react"


export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"name" | "popularity" | "difficulty">("popularity")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filters,
    setFilters,
    clearAllFilters,
    suggestions,
    recentSearches,
    trendingSearches,
    filteredAnimations
  } = useAnimationFilters(sortBy, sortOrder)

  const {
    copiedCode,
    playingAnimations,
    favorites,
    toggleAnimation,
    toggleFavorite,
    copyToClipboard
  } = useAnimationActions()

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundEffects />
      
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <HeaderSection />
        
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
          <CategoryFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        </div>

        {selectedCategory === "all" && (
          <CategoryGrid 
            animationCategories={animationCategories}
            setSelectedCategory={setSelectedCategory}
          />
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
              <AnimationCardRenderer
                key={animation.id}
                animation={animation}
                viewMode={viewMode}
                index={index}
                playingAnimations={playingAnimations}
                favorites={favorites}
                copiedCode={copiedCode}
                toggleAnimation={toggleAnimation}
                toggleFavorite={toggleFavorite}
                copyToClipboard={copyToClipboard}
              />
            ))}
          </div>
        </div>

        {filteredAnimations.length === 0 && (
          <NoResultsSection 
            clearAllFilters={clearAllFilters}
          />
        )}
      </div>
    </div>
  )
}