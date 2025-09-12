import { animationCategories } from "@/components/sections/dashboard/animation-data";
import { useState, useMemo } from "react";

export const useAnimationFilters = (sortBy: string, sortOrder: string) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState({
    difficulty: [] as string[],
    categories: [] as string[],
    tags: [] as string[],
    popularity: [0, 100] as [number, number],
    duration: [] as string[],
    performance: [] as string[],
  });

  const [recentSearches] = useState([
    "fade animations",
    "hover effects",
    "loading spinners",
  ]);
  const [trendingSearches] = useState([
    "bounce effects",
    "slide transitions",
    "glow animations",
  ]);

  const suggestions = useMemo(() => {
    if (!searchQuery) return [];

    const allTerms = [
      ...animationCategories.flatMap((cat) =>
        cat.animations.map((anim) => anim.name)
      ),
      ...animationCategories.flatMap((cat) =>
        cat.animations.flatMap((anim) => anim.tags)
      ),
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
    ];

    return allTerms
      .filter((term) => term.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((term, index, arr) => arr.indexOf(term) === index)
      .slice(0, 8);
  }, [searchQuery]);

  const filteredAnimations = useMemo(() => {
    return animationCategories
      .flatMap((category) =>
        category.animations
          .filter((animation) => {
            // Filter logic (same as in your original code)
            const matchesSearch =
              selectedCategory === "all" || category.id === selectedCategory;
            const matchesQuery =
              !searchQuery ||
              animation.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              animation.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              animation.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
              );

            // Advanced filters
            const matchesDifficulty =
              filters.difficulty.length === 0 ||
              filters.difficulty.includes(animation.difficulty);
            const matchesCategory =
              filters.categories.length === 0 ||
              filters.categories.includes(category.name);
            const matchesTags =
              filters.tags.length === 0 ||
              filters.tags.some((tag) => animation.tags.includes(tag));
            const matchesPopularity =
              animation.popularity >= filters.popularity[0] &&
              animation.popularity <= filters.popularity[1];

            // Duration matching (simplified)
            const matchesDuration =
              filters.duration.length === 0 ||
              filters.duration.some((dur) => {
                const animDuration = Number.parseFloat(animation.duration);
                if (dur === "< 0.5s") return animDuration < 0.5;
                if (dur === "0.5s - 1s")
                  return animDuration >= 0.5 && animDuration <= 1;
                if (dur === "1s - 2s")
                  return animDuration > 1 && animDuration <= 2;
                if (dur === "> 2s") return animDuration > 2;
                return true;
              });

            // Performance matching (simplified)
            const matchesPerformance =
              filters.performance.length === 0 ||
              filters.performance.some((perf) => {
                if (perf === "Low Impact")
                  return animation.difficulty === "Easy";
                if (perf === "GPU Accelerated") return true;
                return true;
              });

            return (
              matchesSearch &&
              matchesQuery &&
              matchesDifficulty &&
              matchesCategory &&
              matchesTags &&
              matchesPopularity &&
              matchesDuration &&
              matchesPerformance
            );
          })
          .map((animation) => ({
            ...animation,
            category: category.name,
            categoryColor: category.color,
            categoryId: category.id,
          }))
      )
      .sort((a, b) => {
        let comparison = 0;
        switch (sortBy) {
          case "name":
            comparison = a.name.localeCompare(b.name);
            break;
          case "popularity":
            comparison = b.popularity - a.popularity;
            break;
          case "difficulty":
            const difficultyOrder = { Easy: 1, Medium: 2, Advanced: 3 };
            comparison =
              difficultyOrder[a.difficulty as keyof typeof difficultyOrder] -
              difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
            break;
        }
        return sortOrder === "asc" ? comparison : -comparison;
      });
  }, [searchQuery, selectedCategory, filters, sortBy, sortOrder]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setFilters({
      difficulty: [],
      categories: [],
      tags: [],
      popularity: [0, 100],
      duration: [],
      performance: [],
    });
  };

  return {
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
  };
};
