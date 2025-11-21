"use client";

import { marketStats, insightBullets } from "@/lib/data";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const hotspotPins = [
  { label: "Downtown", x: "48%", y: "42%" },
  { label: "Palm Jumeirah", x: "15%", y: "70%" },
  { label: "Dubai Marina", x: "28%", y: "60%" },
  { label: "Business Bay", x: "52%", y: "50%" },
];

export function MarketInsights() {
  return (
    <section id="insights" className="section-padding">
      <div className="container mx-auto space-y-8 px-4 sm:space-y-10 sm:px-6 md:space-y-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="glass-panel p-5 sm:p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm sm:tracking-[0.5em]">
              Why Invest in Dubai?
            </p>
            <h2 className="mt-3 font-serif text-2xl text-white sm:mt-4 sm:text-3xl md:text-4xl">
              Resilient growth, investor-friendly policies, and global demand.
            </h2>
            <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base">
              Dubai continues to lead global real estate for appreciation and
              yield, underwritten by visionary infrastructure, tax advantages,
              and a steady influx of international capital.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              {insightBullets.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 text-sm text-white/75 sm:gap-3 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold sm:h-2 sm:w-2" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel h-full p-4 sm:p-6">
            <div className="h-56 w-full sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketStats}>
                  <defs>
                    <linearGradient
                      id="goldGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f3e6c9" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="label"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#d9d9d9", fontSize: 10 }}
                    interval={0}
                    height={60}
                    angle={-45}
                    textAnchor="end"
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    contentStyle={{
                      borderRadius: 16,
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "#0b0b11",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="url(#goldGradient)"
                    radius={[20, 20, 20, 20]}
                    barSize={24}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50 sm:mt-4 sm:text-sm sm:tracking-[0.35em]">
              YoY performance indicators
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="glass-panel relative h-[500px] overflow-hidden p-4 sm:h-[450px] sm:p-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
              Investment Map
            </h3>
            <p className="text-base text-white sm:text-lg">Dubai Hot Zones</p>
            <div className="relative mt-3 h-[calc(100%-80px)] rounded-2xl bg-gradient-to-b from-night to-night/40 sm:mt-4 sm:rounded-3xl">
              {hotspotPins.map((pin) => (
                <motion.div
                  key={pin.label}
                  className="absolute flex flex-col items-center"
                  style={{ left: pin.x, top: pin.y }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="h-3 w-3 rounded-full bg-gold sm:h-4 sm:w-4"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="mt-1.5 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white sm:mt-2 sm:px-3 sm:py-1 sm:text-xs">
                    {pin.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
              Investor Concierge
            </h3>
            <p className="mt-2 text-xl text-white sm:text-2xl">
              Curated dashboards, live comps, and on-demand reporting.
            </p>
            <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4">
              {[
                "Live market dashboards",
                "30-min skyline virtual tours",
                "ROI heat-maps",
                "Dedicated WhatsApp desk",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 sm:rounded-2xl sm:p-4 sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
