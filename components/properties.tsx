"use client";

import { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { properties, type PropertyCategory } from "@/lib/data";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const filters: Array<"All" | PropertyCategory> = [
  "All",
  "Residential",
  "Commercial",
  "Off-Plan",
];

export function FeaturedProperties() {
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | PropertyCategory
  >("All");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const filteredProperties = useMemo(() => {
    return selectedFilter === "All"
      ? properties
      : properties.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="properties" className="section-padding">
      <div className="container mx-auto space-y-10 px-4 sm:px-6 md:space-y-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm">
            Featured
          </p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
            Signature residences & investment-grade assets.
          </h2>
          <p className="max-w-2xl text-sm text-white/70 sm:text-base">
            Handpicked inventory across Downtown, Palm Jumeirah, Dubai Marina,
            Business Bay, DIFC, and the city's most anticipated masterplans.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wide transition sm:text-sm ${
                selectedFilter === filter
                  ? "border-gold bg-gold/20 text-white"
                  : "border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex justify-end gap-4 px-4 sm:px-6 lg:hidden">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-white/10 bg-white/5 hover:bg-white/10"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-white/10 bg-white/5 hover:bg-white/10"
            onClick={scrollNext}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden pl-4 sm:pl-6 md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]"
          ref={emblaRef}
        >
          <div className="flex gap-6 pr-4 sm:pr-6">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                className="min-w-[300px] max-w-[420px] flex-1 sm:min-w-[340px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Card */}
                <div className="group relative h-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-300 hover:scale-[1.05] sm:h-[600px]">
                  {/* Image */}
                  <div className="relative h-2/3">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(min-width: 1280px) 420px, (min-width: 768px) 360px, 90vw"
                      className="object-cover transition duration-700 "
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent" /> */}

                    {/* Category Badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-night/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                      {property.category}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-night sm:text-xs">
                      AED {property.priceAED}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex h-1/3 flex-col justify-between p-6 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60 sm:text-sm">
                        {property.location}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl">
                        {property.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
                        <span>{property.beds} Beds</span>
                        <span>{property.baths} Baths</span>
                        <span>{property.area}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="mt-6 w-full rounded-xl border-white/20 bg-white/10 py-3 text-sm font-semibold hover:bg-white/20 hover:text-gold"
                      asChild
                    >
                      <a href="#contact" data-cursor="interactive">
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop arrows */}
        <div className="mt-10 hidden justify-center gap-4 lg:flex">
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-gold"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-7 w-7" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-gold"
            onClick={scrollNext}
          >
            <ArrowRight className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </section>
  );
}
