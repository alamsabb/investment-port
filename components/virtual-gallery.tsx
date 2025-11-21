"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { tours } from "@/lib/data";

export function VirtualGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto space-y-8 px-4 sm:space-y-10 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm sm:tracking-[0.5em]">
            Virtual Tours
          </p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            Step into Dubai's most talked-about addresses.
          </h2>
          <p className="mt-3 max-w-2xl px-4 text-sm text-white/70 sm:mt-4 sm:px-0 sm:text-base">
            Seamless 4K walkthroughs, 360° perspectives, and immersive media for
            international buyers.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.title}
              className="group relative h-64 cursor-pointer overflow-hidden rounded-[24px] sm:h-72 md:h-80 sm:rounded-[32px]"
              onClick={() => setSelected(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 45vw, 90vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white sm:bottom-6 sm:left-6 sm:right-6">
                <p className="font-serif text-lg sm:text-xl">{tour.title}</p>
                <span className="rounded-full border border-white/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] sm:px-3 sm:text-xs sm:tracking-[0.3em]">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-[95%] max-w-4xl overflow-hidden rounded-[24px] sm:w-[90%] sm:rounded-[32px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <Image
                src={tours[selected].image}
                alt={tours[selected].title}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-night via-transparent p-4 text-white sm:p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 sm:text-sm sm:tracking-[0.4em]">
                  Virtual Tour
                </p>
                <p className="font-serif text-xl sm:text-2xl md:text-3xl">{tours[selected].title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

