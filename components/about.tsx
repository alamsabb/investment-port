"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { statHighlights } from "@/lib/data";
import CountUp from "react-countup";

const specializations = [
  "Ultra-luxury villas & mansions",
  "Skyline penthouses",
  "Boutique commercial floors",
  "Off-plan flagship launches",
  "Investment portfolio strategy",
];

export function About() {
  const controls = useAnimation();

  // FIXED: Observer that ALWAYS triggers
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "200px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    }
  }, [inView, controls]);

  return (
    <section id="about" className="section-padding">
      <div
        className="
          container mx-auto grid items-center gap-8 px-4 
          sm:gap-12 sm:px-6 
          md:gap-16 
          md:grid-cols-2 
          md:[grid-template-columns:1.1fr_0.9fr]
        "
      >
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm sm:tracking-[0.5em]">
            About Akbar
          </p>

          <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
            Tailoring iconic investments for discerning clientele.
          </h2>

          <p className="text-base text-white/70 sm:text-lg">
            With over a decade in Dubai's hyper-growth market, Akbar Ali is the
            trusted advisor to royal households, global investors, and visionary
            developers. Every transaction is curated with meticulous discretion,
            data-backed insight, and a concierge-level experience.
          </p>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {statHighlights.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-5"
              >
                <p className="text-3xl font-semibold text-white sm:text-4xl">
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                </p>
                <p className="text-xs uppercase tracking-wide text-white/60 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (Image + Expertise) */}
        <div className="relative flex flex-col gap-4 sm:gap-6">
          {/* Image Block */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={controls}
            className="
              group relative 
              aspect-[3/4] 
              min-h-[420px] 
              w-full 
              overflow-hidden 
              rounded-[28px] 
              border border-white/5 
              sm:rounded-[40px]
            "
          >
            {/* DEBUG fallback background in case image fails */}
            <div className="absolute inset-0 bg-black/20" />

            <Image
              src="/edited.png"
              alt="Akbar Ali portrait"
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-night/60 p-4 text-white/80 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-3xl sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 sm:text-xs sm:tracking-[0.4em]">
                Signature
              </p>
              <p className="font-serif text-xl text-white sm:text-2xl">
                Dubai's Premier Property Consultant
              </p>
            </div>
          </motion.div>

          {/* Expertise List */}
          <div className="glass-panel flex flex-col gap-4 p-4 text-white/80 sm:gap-6 sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
              Expertise
            </p>
            <div className="grid gap-3 sm:gap-4">
              {specializations.map((item) => (
                <Tilt
                  key={item}
                  glareEnable
                  glareMaxOpacity={0.2}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs uppercase tracking-wide sm:rounded-2xl sm:p-4 sm:text-sm"
                >
                  {item}
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
