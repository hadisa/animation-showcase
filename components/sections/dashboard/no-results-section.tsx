import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Link } from "lucide-react";

// No Results Section Component
interface NoResultsSectionProps {
    clearAllFilters: () => void;
}

const NoResultsSection = ({ clearAllFilters }: NoResultsSectionProps) => (
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
                <Button variant="outline" onClick={clearAllFilters}>
                    Clear All Filters
                </Button>
                <Button asChild>
                    <Link href="/showcase">Browse All Animations</Link>
                </Button>
            </div>
        </CardContent>
    </Card>
)
export default NoResultsSection