"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleHover = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='interactive']")) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    const handleLeave = () => setIsActive(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[999] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 md:block"
        animate={{
          x: position.x,
          y: position.y,
          scale: isActive ? 1.8 : isPressed ? 0.8 : 1,
          opacity: 0.7,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[998] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold md:block"
        animate={{
          x: position.x,
          y: position.y,
          scale: isActive ? 0.5 : isPressed ? 0.3 : 1,
          opacity: isActive ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.6 }}
      />
    </>
  );
}

