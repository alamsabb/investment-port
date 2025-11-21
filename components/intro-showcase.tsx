"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const showcaseScenes = [
  {
    title: "Palm Jumeirah",
    subtitle: "Signature Villas · Private Beach Access",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80", // Palm Jumeirah aerial
  },
  {
    title: "Downtown Dubai",
    subtitle: "Skyline Penthouses above Burj Khalifa",
    image:
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=2400&q=80", // Downtown/Burj Khalifa
  },
  {
    title: "Dubai Marina",
    subtitle: "Panoramic Residences with Yacht Access",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=2400&q=80", // Dubai Marina night
  },
  {
    title: "Business Bay",
    subtitle: "Grade-A Commercial Floors & Flagships",
    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=2400&q=80", // Business Bay/Canal
  },
];

export function IntroShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const total = showcaseScenes.length;

  return (
    <section
      className="relative"
      aria-label="Signature Property Showcase"
      ref={containerRef}
    >
      <div style={{ height: `${total * 100}vh` }}>
        {showcaseScenes.map((scene, index) => (
          <ShowcaseSlide
            key={scene.title}
            scene={scene}
            index={index}
            total={total}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

type ShowcaseSlideProps = {
  scene: (typeof showcaseScenes)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function ShowcaseSlide({
  scene,
  index,
  total,
  progress,
}: ShowcaseSlideProps) {
  const start = index / total;
  const end = (index + 1) / total;

  // Opacity logic:
  // Index 0: Always visible (opacity 1)
  // Others: Fade in when their section starts, stay visible after
  const opacity = useTransform(
    progress,
    // For index 0, we don't need to animate opacity based on scroll, it's always 1.
    // For others, fade in from 'start' to 'start + small offset'.
    index === 0
      ? [0, 1] 
      : [start, start + 0.15 / total], 
    index === 0
      ? [1, 1]
      : [0, 1]
  );

  // Scale logic:
  // Scale down slightly as we scroll past it, but keep it subtle
  const scale = useTransform(progress, [start, end], [1.1, 1]);
  
  // Parallax Y:
  // Move slightly to create depth, but keep it grounded
  const y = useTransform(progress, [start, end], ["0%", "0%"]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ 
        opacity, 
        // Stacking: later slides are on top of earlier ones
        zIndex: index 
      }}
    >
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <Image
          src={scene.image}
          alt={`${scene.title} residence`}
          fill
          sizes="100vw"
          priority={index === 0}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </motion.div>

      <div className="relative flex h-full flex-col items-start justify-end px-4 pb-16 sm:px-6 sm:pb-20 md:px-16 md:pb-24">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/70 sm:text-xs sm:tracking-[0.6em]">
          {String(index + 1).padStart(2, "0")} / {total}
        </p>
        <motion.h1
          className="mt-2 font-serif text-3xl text-white sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {scene.title}
        </motion.h1>
        <motion.p
          className="mt-2 max-w-xl text-sm text-white/80 sm:mt-3 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {scene.subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}

