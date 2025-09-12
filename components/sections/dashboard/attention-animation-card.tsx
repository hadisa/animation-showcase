import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Download, Eye, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BaseAnimationCard } from "./base-animation-card";

export const AttentionAnimationCard = (props: any) => {
  // Customize the attention animation card
  return (
    <BaseAnimationCard {...props}>
      {/* Custom content for attention animations */}
      <div className="flex items-center justify-center relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 min-h-[200px]">
        {props.animation.component &&
          React.createElement(props.animation.component, {})}
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
          onClick={() =>
            props.copyToClipboard(props.animation.code, props.animation.id)
          }
          className="h-8 px-3 hover:bg-primary/10"
        >
          {props.copiedCode === props.animation.id ? (
            <span className="text-xs text-green-600 font-medium">Copied!</span>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
            </>
          )}
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
