import { AttentionAnimationCard } from "./attention-animation-card";
import { DefaultAnimationCard } from "./default-animation-card";
import { EntranceAnimationCard } from "./entrance-animation-card";
import { HoverAnimationCard } from "./hover-animation-card";
import { LoadingAnimationCard } from "./loading-animation-card";
import { TransitionAnimationCard } from "./transition-animation-card";

interface AnimationCardRendererProps {
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

export const AnimationCardRenderer = ({
    animation,
    viewMode,
    index,
    playingAnimations,
    favorites,
    copiedCode,
    toggleAnimation,
    toggleFavorite,
    copyToClipboard
}: AnimationCardRendererProps) => {
    // Determine which card component to render based on animation category or type
    const getCardComponent = () => {
        switch (animation.categoryId) {
            case "entrance":
                return (
                    <EntranceAnimationCard
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
                )
            case "hover":
                return (
                    <HoverAnimationCard
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
                )
            case "loading":
                return (
                    <LoadingAnimationCard
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
                )
            case "transitions":
                return (
                    <TransitionAnimationCard
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
                )
            case "card":
                return (
                    <AttentionAnimationCard
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
                )
            default:
                return (
                    <DefaultAnimationCard
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
                )
        }
    }

    return getCardComponent()
}