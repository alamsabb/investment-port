"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const backgrounds = [
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2100&q=80", // Dubai skyline sunset
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2100&q=80", // Palm Jumeirah
  "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=2100&q=80", // Marina night
  "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=2100&q=80", // Burj Khalifa
  "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=2100&q=80", // Business Bay
];

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

export function BackgroundGallery() {
  const { scrollYProgress } = useScroll();
  const total = backgrounds.length;
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/40 via-night/20 to-night/60" />
      {backgrounds.map((image, index) => {
        const sectionLength = 1 / total;
        const start = index * sectionLength;
        const fadeInEnd = start + sectionLength * 0.35;
        const end = start + sectionLength + sectionLength * 0.6;
        const value = progress;

        let opacity = 0;
        if (value >= start && value <= end) {
          if (value <= fadeInEnd) {
            const fade = (value - start) / (fadeInEnd - start || 1);
            opacity = clamp(fade);
          } else {
            const fade = 1 - (value - fadeInEnd) / (end - fadeInEnd || 1);
            opacity = clamp(fade);
          }
        }

        let scale = 1.1;
        if (value >= start && value <= end) {
          const fade = (value - start) / (end - start || 1);
          scale = 1.12 - clamp(fade) * 0.12;
        }

        return (
          <motion.div
            key={`${image}-${index}`}
            className="absolute inset-0"
            style={{
              opacity,
              scale,
              backgroundImage: `linear-gradient(120deg, rgba(5,5,10,0.45), rgba(5,5,8,0.65)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "saturate(1.1)",
            }}
          />
        );
      })}
    </div>
  );
}

