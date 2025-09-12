import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

// Header Section Component
const HeaderSection = () => (
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
)

export default HeaderSection