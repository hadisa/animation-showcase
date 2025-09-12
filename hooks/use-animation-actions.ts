import { useState } from "react";

export const useAnimationActions = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [playingAnimations, setPlayingAnimations] = useState<Set<string>>(
    new Set()
  );
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleAnimation = (animationId: string) => {
    setPlayingAnimations((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(animationId)) {
        newSet.delete(animationId);
      } else {
        newSet.add(animationId);
      }
      return newSet;
    });
  };

  const toggleFavorite = (animationId: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(animationId)) {
        newSet.delete(animationId);
      } else {
        newSet.add(animationId);
      }
      return newSet;
    });
  };

  const copyToClipboard = async (code: string, animationId: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(animationId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return {
    copiedCode,
    playingAnimations,
    favorites,
    toggleAnimation,
    toggleFavorite,
    copyToClipboard,
  };
};
