import AnimatedBrightBorderCard from "@/components/animation/card/animated-border-card-bright";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Copy, Download, Eye, Heart, Pause, Play, TrendingUp } from "lucide-react";
import Link from "next/link";

interface AnimationCardProps {
    animation: any;
    viewMode: "grid" | "list";
    index: number;
    playingAnimations: Set<string>;
    favorites: Set<string>;
    copiedCode: string | null;
    toggleAnimation: (id: string) => void;
    toggleFavorite: (id: string) => void;
    copyToClipboard: (code: string, id: string) => void;
}

export const AnimationCard = ({
    animation,
    viewMode,
    index,
    playingAnimations,
    favorites,
    copiedCode,
    toggleAnimation,
    toggleFavorite,
    copyToClipboard
}: AnimationCardProps) => (
    <><Card
        className={`group glass border-0 hover-glow-premium stagger-animation ${viewMode === "list" ? "flex flex-col sm:flex-row" : ""}`}
        style={{ animationDelay: `${index * 0.05}s` }}
    >
        <CardHeader className={viewMode === "list" ? "sm:w-1/3" : ""}>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Badge
                        variant="secondary"
                        className={`text-xs bg-gradient-to-r ${animation.categoryColor} text-white border-0`}
                    >
                        {animation.category}
                    </Badge>
                    <Badge
                        variant="outline"
                        className={`text-xs ${animation.difficulty === "Easy"
                            ? "text-green-600 border-green-200"
                            : animation.difficulty === "Medium"
                                ? "text-yellow-600 border-yellow-200"
                                : "text-red-600 border-red-200"}`}
                    >
                        {animation.difficulty}
                    </Badge>
                </div>
                <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{animation.popularity}%</span>
                </div>
            </div>
            <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                {animation.name}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">{animation.description}</CardDescription>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{animation.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{Math.floor(animation.popularity * 10)}k views</span>
                </div>
            </div>
        </CardHeader>
        <CardContent className={`space-y-6 ${viewMode === "list" ? "sm:w-2/3 flex flex-col justify-center" : ""}`}>
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-8 flex items-center justify-center min-h-[140px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
                <div
                    className={`w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center relative z-10 ${playingAnimations.has(animation.id) ? animation.preview : ""}`}
                >
                    <Play className="w-8 h-8 text-white" />
                </div>
                <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-3 right-3 z-10"
                    onClick={() => toggleAnimation(animation.id)}
                >
                    {playingAnimations.has(animation.id) ? (
                        <Pause className="w-3 h-3" />
                    ) : (
                        <Play className="w-3 h-3" />
                    )}
                </Button>
            </div>

            <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-4 border border-border/50">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Tailwind Classes
                        </span>
                        <Badge variant="outline" className="text-xs">
                            CSS
                        </Badge>
                    </div>
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(animation.code, animation.id)}
                        className="h-8 px-3 hover:bg-primary/10"
                    >
                        {copiedCode === animation.id ? (
                            <span className="text-xs text-green-600 font-medium">Copied!</span>
                        ) : (
                            <>
                                <Copy className="w-3 h-3 mr-1" />
                                <span className="text-xs">Copy</span>
                            </>
                        )}
                    </Button>
                </div>
                <code className="text-sm font-mono text-foreground break-all bg-background/50 px-3 py-2 rounded-lg block">
                    {animation.code}
                </code>
            </div>

            <div className="flex gap-3">
                <Button size="sm" className="flex-1 group" asChild>
                    <Link href={`/animation/${animation.id}`}>
                        <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View Details
                    </Link>
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleFavorite(animation.id)}
                    className={`${favorites.has(animation.id)
                        ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                        : "hover:bg-primary/5"}`}
                >
                    <Heart className={`w-4 h-4 ${favorites.has(animation.id) ? "fill-current" : ""}`} />
                </Button>
                <Button size="sm" variant="outline" className="hover:bg-primary/5 bg-transparent">
                    <Download className="w-4 h-4" />
                </Button>
            </div>

            <div className="flex flex-wrap gap-2">
                {animation.tags.slice(0, 3).map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs bg-background/50">
                        #{tag}
                    </Badge>
                ))}
            </div>
        </CardContent>
    </Card><AnimatedBrightBorderCard imageSrc={"./4.png"} description={""} title={""} /></>
);