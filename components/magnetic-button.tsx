"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
}: MagneticButtonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(springY, [-30, 30], ["8px", "-8px"]);
  const tiltY = useTransform(springX, [-30, 30], ["-8px", "8px"]);

  const Component = href ? "a" : "button";

  return (
    <motion.div
      className="relative inline-flex"
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
      }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left - bounds.width / 2;
        const y = event.clientY - bounds.top - bounds.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <Component
        onClick={onClick}
        href={href}
        className={cn(
          "group relative overflow-hidden rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-500",
          "before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(212,175,55,0.8),rgba(255,255,255,0.2))] before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-full",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
}

