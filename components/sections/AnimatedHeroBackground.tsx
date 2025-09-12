"use client";
import React, { useEffect, useState } from 'react';

// This component creates an animated gradient background with a subtle grid overlay.
// It's designed to be used as a hero section background for a professional website.

const AnimatedHeroBackground = () => {
    // State to manage the background gradient's position and colors for animation
    const [gradientPos, setGradientPos] = useState(0);
    const [colorOffset, setColorOffset] = useState(0);

    // Define a set of base colors for the gradient animation
    const baseColors = [
        '#1E354A', // Indigo 500
        '#115959', // Violet 500
        '#eab676', // Pink 500
        '#76b5c5', 
        '#1E2A3A', // Orange 500
        '#00B9CD', // Amber 500
        '#10B981', // Emerald 500
        '#06B6D4', // Cyan 500
    ];

    useEffect(() => {
        // Animation loop for gradient position and color shifting
        const animationFrame = requestAnimationFrame(function animate() {
            setGradientPos((prev) => (prev + 0.05) % 100); // Shift gradient position
            setColorOffset((prev) => (prev + 0.01) % baseColors.length); // Shift color palette

            requestAnimationFrame(animate);
        });

        return () => cancelAnimationFrame(animationFrame); // Cleanup animation on unmount
    }, []);

    // Dynamically generate the gradient colors based on the colorOffset
    const getGradientColors = () => {
        const startIndex = Math.floor(colorOffset);
        const blend = colorOffset - startIndex;

        const color1 = baseColors[startIndex % baseColors.length];
        const color2 = baseColors[(startIndex + 1) % baseColors.length];
        const color3 = baseColors[(startIndex + 2) % baseColors.length];
        const color4 = baseColors[(startIndex + 3) % baseColors.length];

        // Simple linear interpolation for smooth color transitions
        const interpolateColor = (c1, c2, factor) => {
            const hex = (c) => parseInt(c.slice(1), 16);
            const rgb1 = [hex(c1) >> 16 & 0xFF, hex(c1) >> 8 & 0xFF, hex(c1) & 0xFF];
            const rgb2 = [hex(c2) >> 16 & 0xFF, hex(c2) >> 8 & 0xFF, hex(c2) & 0xFF];

            const result = rgb1.map((c, i) => Math.round(c + factor * (rgb2[i] - c)));
            return `#${result.map(x => x.toString(16).padStart(2, '0')).join('')}`;
        };

        const blendedColor1 = interpolateColor(color1, color2, blend);
        const blendedColor2 = interpolateColor(color2, color3, blend);
        const blendedColor3 = interpolateColor(color3, color4, blend);

        return [blendedColor1, blendedColor2, blendedColor3];
    };

    const [colorA, colorB, colorC] = getGradientColors();

    return (
        <div
            className="relative w-full overflow-hidden flex items-center justify-center "
            style={{
                // Dynamic radial gradient for the background
                background: `radial-gradient(at ${gradientPos}% ${100 - gradientPos}%, ${colorA}, ${colorB}, ${colorC})`,
            }}
        >
            {/* Grid overlay for added texture and depth */}
            <div
                className="absolute inset-0 w-full h-full opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '30px 30px', // Adjust grid size as needed
                }}
            ></div>

            {/* Content slot for your hero section text and CTAs */}
            <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
                    Elevate Your Web Experience with <span className="text-indigo-200">Tailwind Animations</span>
                </h1>
                <p className="text-xl md:text-2xl text-white text-opacity-80 mb-8 animate-fade-in-up delay-200">
                    Craft stunning, performant, and responsive UIs with ease.
                </p>

            </div>

            {/* Custom Tailwind CSS animations */}
            <style>{`
        @keyframes fadeInMoveUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInMoveUp 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
        </div>
    );
};

export default AnimatedHeroBackground;
