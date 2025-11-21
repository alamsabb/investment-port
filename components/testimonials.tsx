"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto space-y-8 px-4 sm:space-y-10 sm:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm sm:tracking-[0.5em]">
            Client Voice
          </p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            Trusted by UHNW families, funds, and tastemakers.
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.client}
                className="min-w-[85%] sm:min-w-full md:min-w-[60%]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-panel flex flex-col gap-4 p-5 text-white sm:gap-6 sm:p-8">
                  <div className="flex items-center gap-1.5 text-gold sm:gap-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current sm:h-5 sm:w-5"
                      />
                    ))}
                  </div>
                  <p className="text-base text-white/80 sm:text-lg md:text-xl">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-base font-semibold sm:text-lg">
                      {testimonial.client}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm sm:tracking-[0.4em]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
