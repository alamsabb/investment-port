"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-4 mx-auto z-[900] flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-2xl border border-white/10 px-3 py-2.5 backdrop-blur-2xl transition-all sm:top-6 sm:w-[95%] sm:rounded-3xl sm:px-4 sm:py-3 lg:w-[90%] lg:px-6",
          isScrolled ? "bg-night/85 shadow-lux-soft" : "bg-night/40"
        )}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-lg font-semibold text-white sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
            AA
          </div>
          <div>
            <p className="text-base font-semibold text-white sm:text-lg">
              Akbar Ali
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-3 text-sm font-medium text-white/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-4 py-2 transition hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block" data-cursor="interactive">
            <MagneticButton href="#contact">Schedule A Viewing</MagneticButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-full border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <MagneticButton
            className="hidden sm:block lg:hidden"
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Consult
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[899] bg-night/95 backdrop-blur-xl lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-[901] h-full w-[85%] max-w-sm border-l border-white/10 bg-night/98 p-6 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-6 pt-20">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-lg font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 pt-6 border-t border-white/10">
                  <MagneticButton
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full justify-center"
                  >
                    Schedule A Viewing
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
