"use client";

import BackgroundEffects from "@/components/background-effects";
import { Navigation } from "@/components/navigation";
import { animationCategories } from "@/components/sections/dashboard/animation-data";
import NoResultsSection from "@/components/sections/dashboard/no-results-section";
import { Badge } from "@/components/ui/badge";
import { useAnimationActions } from "@/hooks/use-animation-actions";
import { useAnimationFilters } from "@/hooks/use-animation-filters";
import { Filter, Loader } from "lucide-react";
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";

// Dynamically import components
const AdvancedSearch = dynamic(
  () => import("@/components/advanced-search").then(mod => mod.AdvancedSearch),
  { ssr: false }
);

const CategoryFilter = dynamic(
  () => import("@/components/sections/dashboard/category-filter").then(mod => mod.default),
  { ssr: false }
);

const HeaderSection = dynamic(
  () => import("@/components/sections/dashboard/header-section-dash").then(mod => mod.default),
  { ssr: false }
);

const AnimationCardRenderer = dynamic(
  () => import("@/components/sections/dashboard/animation-card-renderer").then(mod => mod.AnimationCardRenderer),
  { ssr: false }
);

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"name" | "popularity" | "difficulty">("popularity");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [isLoading, setIsLoading] = useState(true);

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
    filteredAnimations,
  } = useAnimationFilters(sortBy, sortOrder);

  const {
    copiedCode,
    playingAnimations,
    favorites,
    toggleAnimation,
    toggleFavorite,
    copyToClipboard,
  } = useAnimationActions();

  // Simulate loading time for dynamic imports
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this time based on your actual loading needs

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background/95 relative overflow-hidden flex items-center justify-center">
        <BackgroundEffects />
        <div className="relative z-50 flex flex-col items-center justify-center gap-4">
          <Loader className="w-8 h-8 animate-spin text-primary" />
          <p className="text-lg font-medium text-foreground/80">Loading animations...</p>
          <p className="text-sm text-muted-foreground">Preparing your dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background/95 relative overflow-hidden">
      <BackgroundEffects />

      <Navigation />

      <div className="relative z-10">
        <HeaderSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Search and Filters Section */}
          <div className="bg-background/50 backdrop-blur-md rounded-2xl p-6 mb-8 transition-all">
            <div className="mb-6">
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

            <div className="bg-background/60 backdrop-blur-sm rounded-xl p-4">
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
          </div>

          {/* Animations Grid Section */}
          <div className="bg-background/50 backdrop-blur-md rounded-2xl p-6 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  {selectedCategory === "all"
                    ? "All Animations"
                    : animationCategories.find((c) => c.id === selectedCategory)
                        ?.name + " Animations"}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {selectedCategory === "all"
                    ? "Browse through all available animations"
                    : `Showing ${
                        animationCategories.find(
                          (c) => c.id === selectedCategory
                        )?.description
                      }`}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-foreground/90 hover:bg-primary/20"
                >
                  <span className="font-mono">{filteredAnimations.length}</span>{" "}
                  {filteredAnimations.length === 1 ? "animation" : "animations"}
                </Badge>
                {(filters.difficulty.length > 0 ||
                  filters.categories.length > 0 ||
                  filters.tags.length > 0 ||
                  filters.popularity[0] > 0 ||
                  filters.popularity[1] < 100 ||
                  filters.duration.length > 0 ||
                  filters.performance.length > 0) && (
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex items-center justify-center rounded-full text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                  >
                    <Filter className="w-3 h-3 mr-1.5" />
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-6"
              }
            >
              {filteredAnimations.length > 0 ? (
                filteredAnimations.map((animation, index) => (
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
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <NoResultsSection clearAllFilters={clearAllFilters} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}