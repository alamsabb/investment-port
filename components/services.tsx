"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Crown,
  Building2,
  Compass,
  Coins,
  Handshake,
  Globe,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
  crown: Crown,
  skyscraper: Building2,
  compass: Compass,
  coins: Coins,
  handshake: Handshake,
  globe: Globe,
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto space-y-8 px-4 sm:space-y-10 sm:px-6 md:space-y-12">
        <div className="flex flex-col items-center text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm sm:tracking-[0.5em]">
            Expertise
          </p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
            Full-spectrum coverage across Dubai real estate verticals.
          </h2>
          <p className="mt-3 max-w-2xl px-4 text-sm text-white/70 sm:mt-4 sm:px-0 sm:text-base">
            Tailored advisory that moves with the market—leveraging insider
            launch access, proprietary data, and elite developer partnerships.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
              >
                <Tilt
                  glareEnable
                  glareColor="#d4af37"
                  glareMaxOpacity={0.2}
                  className="group rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl transition hover:bg-white/10 sm:rounded-[30px] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-white/10 p-2 text-gold sm:rounded-2xl sm:p-3">
                      {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 sm:text-xs sm:tracking-[0.4em]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-white sm:mt-6 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/70 sm:mt-3 sm:text-sm">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-gold sm:mt-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.3em]">
                      Discover
                    </span>
                    <span className="text-base sm:text-lg">↗</span>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

