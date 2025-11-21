"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import CountUp from "react-countup";
import { Button } from "./ui/button";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

const heroLetters = Array.from("INVEST WITH AKBAR ALI");

const heroParticles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  top: ((i * 37) % 100) + 2,
  left: ((i * 53 + 15) % 100) + 1,
  duration: 6 + (((i * 17) % 30) + 10) / 10,
}));

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!heroRef.current || !parallaxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(parallaxRef.current, {
        yPercent: 12,
        scale: 1.05,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10 overflow-hidden rounded-b-[60px] border-b border-white/10"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1494515195659-8abdb73c0c7a?auto=format&fit=crop&w=1200&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-dubai-desert-super-tree-bridge-1415/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-night/30 via-night/80 to-night" />
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
      </div>

      <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 pt-24 text-center sm:gap-10 sm:px-6 sm:pt-32 md:gap-14 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[10px] uppercase tracking-[0.4em] text-white/60 sm:text-xs sm:tracking-[0.55em]"
        >
          Dubai · Luxury · Real Estate
        </motion.p>

        <motion.h1
          className="flex flex-wrap justify-center gap-1 text-3xl font-semibold text-white sm:gap-2 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {heroLetters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className={cn(
                "font-serif uppercase",
                letter === " " ? "w-3 sm:w-5" : ""
              )}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="max-w-2xl px-4 text-base text-white/80 sm:px-0 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          Dubai&apos;s Premier Property Consultant crafting bespoke acquisitions
          across luxury residences, iconic penthouses, and next-generation
          investments.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:flex-wrap sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <MagneticButton
            href="#properties"
            className="bg-gold text-night w-full sm:w-auto"
          >
            View Signature Portfolio
          </MagneticButton>
          <Button
            variant="outline"
            className="backdrop-blur-xl w-full sm:w-auto"
            asChild
          >
            <a href="#contact" data-cursor="interactive">
              WhatsApp Akbar
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-2xl sm:gap-6 sm:rounded-3xl sm:p-6 md:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 1.1 }}
        >
          {[
            { label: "Properties Sold", value: 520, suffix: "+" },
            { label: "Off-market Exclusives", value: 38 },
            { label: "Years Experience", value: 12, suffix: "+" },
            { label: "Client Satisfaction", value: 98, suffix: "%" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-2xl font-semibold text-white sm:text-3xl">
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </p>
              <p className="text-[10px] uppercase tracking-wide text-white/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        {heroParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-white/60"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
