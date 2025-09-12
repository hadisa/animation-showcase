import { Badge } from "@/components/ui/badge";
import { AnimationCard } from "./animation-card";
import { Filter } from "lucide-react";
import { animationCategories } from "./animation-data";

interface AnimationListSectionProps {
    selectedCategory: string;
    animationCategories: typeof animationCategories;
    filteredAnimations: any[];
    filters: any;
    viewMode: "grid" | "list";
    playingAnimations: Set<string>;
    favorites: Set<string>;
    copiedCode: string | null;
    toggleAnimation: (id: string) => void;
    toggleFavorite: (id: string) => void;
    copyToClipboard: (code: string, id: string) => void;
}

const AnimationListSection = ({
    selectedCategory,
    animationCategories,
    filteredAnimations,
    filters,
    viewMode,
    playingAnimations,
    favorites,
    copiedCode,
    toggleAnimation,
    toggleFavorite,
    copyToClipboard
}: AnimationListSectionProps) => (
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
                <AnimationCard
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
)
export default AnimationListSection