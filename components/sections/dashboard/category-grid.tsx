import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { animationCategories } from "./animation-data";

interface CategoryGridProps {
    animationCategories: typeof animationCategories;
    setSelectedCategory: (category: string) => void;
}

export const CategoryGrid = ({ animationCategories, setSelectedCategory }: CategoryGridProps) => (
    <div className="mb-16 ">
        <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">Categories</h2>
            <Badge variant="outline">{animationCategories.length} categories</Badge>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {animationCategories.map((category, index) => {
                const IconComponent = category.icon;
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
                );
            })}
        </div>
    </div>
);
export default CategoryGrid