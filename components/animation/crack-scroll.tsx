"use client";

import p5 from "p5";
import { useRef, useEffect, useState, useCallback } from "react";

/**
 * A React component that creates a scrolling, animated background using p5.js.
 * The animation's height dynamically adapts to the children's content.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to be displayed over the animation.
 * @param {number} [props.glowSize=10] - The initial size of the central glowing circle.
 * @param {number} [props.numCurvePoints=40] - The number of points used to draw the animated curve.
 * @param {string} [props.glowColor='rgba(26, 770, 128, 0.7)'] - The color of the central glow.
 * @param {string} [props.curveColor='rgba(0, 0, 0, 0.8)'] - The color of the main curve line.
 */
const CrackScroll = ({
  children,
  glowSize = 10,
  numCurvePoints = 40,
  glowColor = "rgba(26, 770, 128, 0.7)",
  curveColor = "rgba(0, 0, 0, 0.8)",
}) => {
  const p5Ref = useRef();
  const canvasParentRef = useRef();
  const animationContainerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  /**
   * Updates the dimensions of the animation container.
   * This function is memoized to prevent unnecessary re-creations.
   */
  const updateDimensions = useCallback(() => {
    if (animationContainerRef.current) {
      setContainerWidth(animationContainerRef.current.offsetWidth);
      setContainerHeight(animationContainerRef.current.offsetHeight);
    }
  }, []);

  // Effect to handle initial dimension setup and window resizing
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // Effect to manage the p5.js sketch
  useEffect(() => {
    if (containerWidth === 0 || containerHeight === 0) return;

    const sketch = (p) => {
      let curvePoints = [];
      let scrollProgress = 0;
      let pGlowColor;
      let pCurveColor;

      p.setup = () => {
        p.createCanvas(containerWidth, containerHeight).parent(
          canvasParentRef.current
        );
        pGlowColor = p.color(glowColor);
        pCurveColor = p.color(curveColor);

        // Dynamically calculate the number of points based on container height
        const actualNumPoints = p.map(
          p.height,
          0,
          2000,
          numCurvePoints / 2,
          numCurvePoints
        );

        for (let i = 0; i < actualNumPoints; i++) {
          curvePoints.push({
            x: p.width / 2,
            y: p.map(i, 0, actualNumPoints - 1, p.height * 0.2, p.height * 0.8),
            offset: p.random(-p.width * 0.02, p.width * 0.02),
          });
        }
      };

      p.draw = () => {
        p.clear();

        if (animationContainerRef.current) {
          const rect = animationContainerRef.current.getBoundingClientRect();
          const viewportHeight = p.windowHeight;
          scrollProgress = p.constrain(
            p.map(rect.top, viewportHeight, -rect.height, 0, 1),
            0,
            1
          );
        }

        // Stage 1: Initial glow effect
        if (scrollProgress >= 0 && scrollProgress < 0.2) {
          p.fill(pGlowColor, p.map(scrollProgress, 0, 0.2, 0, 255));
          p.noStroke();
          p.ellipse(p.width / 2, p.height / 2, glowSize);
        }

        // Stage 2: Curve drawing effect
        if (scrollProgress >= 0.1) {
          const curveDrawProgress = p.constrain(
            p.map(scrollProgress, 0.1, 1, 0, 1),
            0,
            1
          );
          const numShadowLayers = 5;
          const baseStrokeWeight = 5;

          // Draw dark, blurry shadow layers
          for (let i = numShadowLayers; i >= 1; i--) {
            const shadowAlpha = p.map(i, 1, numShadowLayers, 10, 50);
            const shadowWeight = baseStrokeWeight + i * 2;
            const shadowOffset = i * 0.5;

            p.noFill();
            p.stroke(p.color(0, 0, 0, shadowAlpha));
            p.strokeWeight(shadowWeight);
            p.beginShape();
            for (
              let j = 0;
              j < curvePoints.length * curveDrawProgress;
              j++
            ) {
              const point = curvePoints[j];
              p.vertex(
                point.x + point.offset + shadowOffset,
                point.y + shadowOffset
              );
            }
            p.endShape();
          }

          // Draw the main curve on top
          p.noFill();
          p.stroke(pCurveColor);
          p.strokeWeight(baseStrokeWeight);
          p.beginShape();
          for (
            let i = 0;
            i < curvePoints.length * curveDrawProgress;
            i++
          ) {
            const point = curvePoints[i];
            p.vertex(point.x + point.offset, point.y);
          }
          p.endShape();
        }
      };

      p.windowResized = () => {
        if (animationContainerRef.current) {
          p.resizeCanvas(
            animationContainerRef.current.offsetWidth,
            animationContainerRef.current.offsetHeight
          );
          p.setup(); // Re-run setup to re-initialize curve points
        }
      };
    };

    p5Ref.current = new p5(sketch);
    return () => p5Ref.current.remove();
  }, [containerWidth, containerHeight, glowColor, curveColor, numCurvePoints, glowSize]);

  return (
    <div
      ref={animationContainerRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={canvasParentRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
          backgroundColor: "transparent",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CrackScroll;

