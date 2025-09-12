// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
// import { SortAsc, SortDesc, Grid3X3, List } from "lucide-react";
// import { animationCategories } from "./animation-data";

// // Category Filter Component
// interface CategoryFilterProps {
//     selectedCategory: string;
//     setSelectedCategory: (category: string) => void;
//     sortBy: "name" | "popularity" | "difficulty";
//     setSortBy: (sortBy: "name" | "popularity" | "difficulty") => void;
//     sortOrder: "asc" | "desc";
//     setSortOrder: (sortOrder: "asc" | "desc") => void;
//     viewMode: "grid" | "list";
//     setViewMode: (viewMode: "grid" | "list") => void;
// }

// const CategoryFilter = ({
//     selectedCategory,
//     setSelectedCategory,
//     sortBy,
//     setSortBy,
//     sortOrder,
//     setSortOrder,
//     viewMode,
//     setViewMode
// }: CategoryFilterProps) => (
//     <Card className="glass border-0 p-4">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div className="flex items-center gap-4">
//                 <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
//                     <TabsList className="glass border-0 h-auto p-2 bg-background/50 backdrop-blur-sm">
//                         <TabsTrigger
//                             value="all"
//                             className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//                         >
//                             All Categories
//                         </TabsTrigger>
//                         {animationCategories.map((category) => (
//                             <TabsTrigger
//                                 key={category.id}
//                                 value={category.id}
//                                 className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//                             >
//                                 <category.icon className="w-4 h-4 mr-2" />
//                                 {category.name}
//                             </TabsTrigger>
//                         ))}
//                     </TabsList>
//                 </Tabs>
//             </div>

//             <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                     <span className="text-sm text-muted-foreground">Sort:</span>
//                     <select
//                         value={sortBy}
//                         onChange={(e) => setSortBy(e.target.value as any)}
//                         className="bg-background/50 border border-border rounded-lg px-3 py-2 text-sm"
//                     >
//                         <option value="popularity">Popularity</option>
//                         <option value="name">Name</option>
//                         <option value="difficulty">Difficulty</option>
//                     </select>
//                     <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
//                     >
//                         {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
//                     </Button>
//                 </div>

//                 <div className="flex items-center gap-2">
//                     <Button
//                         variant={viewMode === "grid" ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setViewMode("grid")}
//                     >
//                         <Grid3X3 className="w-4 h-4" />
//                     </Button>
//                     <Button
//                         variant={viewMode === "list" ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setViewMode("list")}
//                     >
//                         <List className="w-4 h-4" />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     </Card>
// )
// export default CategoryFilter
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { SortAsc, SortDesc, Grid3X3, List, Filter, ChevronDown } from "lucide-react";
import { animationCategories } from "./animation-data";
import { useState } from "react";

// Category Filter Component
interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: "name" | "popularity" | "difficulty";
  setSortBy: (sortBy: "name" | "popularity" | "difficulty") => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (sortOrder: "asc" | "desc") => void;
  viewMode: "grid" | "list";
  setViewMode: (viewMode: "grid" | "list") => void;
}

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  viewMode,
  setViewMode
}: CategoryFilterProps) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <Card className="bg-background/80 backdrop-blur-md border-border/50 p-4 md:p-6 shadow-lg rounded-xl">
      {/* Mobile header */}
      <div className="flex items-center justify-between md:hidden mb-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="flex items-center gap-1"
        >
          Options
          <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ${isMobileFiltersOpen ? 'block' : 'hidden md:flex'}`}>
        {/* Category tabs */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="inline-flex p-1 bg-muted/50 rounded-lg border border-border/30">
              <TabsTrigger
                value="all"
                className="px-3 py-2 text-sm font-medium rounded-md transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm hover:bg-accent/50"
              >
                All Categories
              </TabsTrigger>
              {animationCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm hover:bg-accent/50"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Sort and view controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Sort controls */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:block">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-background border border-border rounded-lg pl-3 pr-8 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer"
              >
                <option value="popularity">Popularity</option>
                <option value="name">Name</option>
                <option value="difficulty">Difficulty</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            <Button
              size="sm"
              variant="outline"
              className="h-9 w-9 p-0"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? (
                <SortAsc className="w-4 h-4" />
              ) : (
                <SortDesc className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* View mode controls */}
          <div className="flex items-center gap-2 border-l border-border/50 pl-4">
            <span className="text-sm text-muted-foreground hidden sm:block">View:</span>
            <div className="flex bg-muted/50 p-1 rounded-lg border border-border/30">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                className="h-8 w-8 p-0 rounded-md"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                className="h-8 w-8 p-0 rounded-md"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CategoryFilter;