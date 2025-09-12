import {
  Copy,
  Download,
  Eye,
  Heart,
  Link,
  Pause,
  Play,
  RotateCw,
} from "lucide-react";
import { BaseAnimationCard } from "./base-animation-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ShineCard from "@/components/animation/card/shine-card";
import React from "react";

export const LoadingAnimationCard = (props: any) => {
  // Customize the loading animation card
  return (
    <BaseAnimationCard {...props}>
      {/* Custom content for loading animations */}
      <div className="bg-black rounded-xl p-2 flex items-center justify-center  relative overflow-hidden">
        {props.animation.component &&
          React.createElement(props.animation.component, {
            // You can pass any additional props that your animation components might need
            // For example, if your animation components need a className or other props
            className: "w-full flex items-center justify-center",
          })}
      </div>
      {/* {props.animation.component} */}

      {/* Keep the rest of the content the same */}
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
            onClick={() =>
              props.copyToClipboard(props.animation.code, props.animation.id)
            }
            className="h-8 px-3 hover:bg-primary/10"
          >
            {props.copiedCode === props.animation.id ? (
              <span className="text-xs text-green-600 font-medium">
                Copied!
              </span>
            ) : (
              <>
                <Copy className="w-3 h-3 mr-1" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>
        <code className="text-sm font-mono text-foreground break-all bg-background/50 px-3 py-2 rounded-lg block">
          {props.animation.code}
        </code>
      </div>

      <div className="flex gap-3">
        <Button size="sm" className="flex-1 group" asChild>
          <Link href={`/animation/${props.animation.id}`}>
            <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            View Details
          </Link>
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => props.toggleFavorite(props.animation.id)}
          className={`${
            props.favorites.has(props.animation.id)
              ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
              : "hover:bg-primary/5"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${
              props.favorites.has(props.animation.id) ? "fill-current" : ""
            }`}
          />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="hover:bg-primary/5 bg-transparent"
        >
          <Download className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {props.animation.tags.slice(0, 3).map((tag: string) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-xs bg-background/50"
          >
            #{tag}
          </Badge>
        ))}
      </div>
    </BaseAnimationCard>
  );
};
