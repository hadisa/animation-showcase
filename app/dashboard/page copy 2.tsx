"use client"

import { AdvancedSearch } from "@/components/advanced-search"
import { Navigation } from "@/components/navigation"
import { animationCategories } from "@/components/sections/dashboard/animation-data"
import AnimationListSection from "@/components/sections/dashboard/animation-list-section"
import CategoryFilter from "@/components/sections/dashboard/category-filter"
import { CategoryGrid } from "@/components/sections/dashboard/category-grid"
import HeaderSection from "@/components/sections/dashboard/header-section-dash"
import NoResultsSection from "@/components/sections/dashboard/no-results-section"
import { useAnimationActions } from "@/hooks/use-animation-actions"
import { useAnimationFilters } from "@/hooks/use-animation-filters"
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

        <AnimationListSection
          selectedCategory={selectedCategory}
          animationCategories={animationCategories}
          filteredAnimations={filteredAnimations}
          filters={filters}
          viewMode={viewMode}
          playingAnimations={playingAnimations}
          favorites={favorites}
          copiedCode={copiedCode}
          toggleAnimation={toggleAnimation}
          toggleFavorite={toggleFavorite}
          copyToClipboard={copyToClipboard}
        />

        {filteredAnimations.length === 0 && (
          <NoResultsSection
            clearAllFilters={clearAllFilters}
          />
        )}
      </div>
    </div>
  )
}





// Animation List Section Component


