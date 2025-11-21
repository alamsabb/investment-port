"use client";

import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto grid gap-6 px-4 sm:gap-8 sm:px-6 lg:gap-10 lg:grid-cols-2">
        <motion.div
          className="glass-panel p-5 sm:p-6 md:p-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm sm:tracking-[0.5em]">
            Schedule
          </p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            Book a private consultation.
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base">
            Whether you&apos;re acquiring, divesting, or diversifying, expect a
            meticulous plan with concierge-level execution.
          </p>

          <form className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="relative">
                <Input id="name" placeholder=" " className="peer" required />
                <Label
                  htmlFor="name"
                  className="pointer-events-none absolute left-4 top-1.5 text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold"
                >
                  Full Name
                </Label>
              </div>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  className="peer"
                />
                <Label
                  htmlFor="email"
                  className="pointer-events-none absolute left-4 top-1.5 text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold"
                >
                  Email
                </Label>
              </div>
            </div>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="relative">
                <Input id="phone" placeholder=" " className="peer" />
                <Label
                  htmlFor="phone"
                  className="pointer-events-none absolute left-4 top-1.5 text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold"
                >
                  Phone / WhatsApp
                </Label>
              </div>
              <div className="relative">
                <Input id="interest" placeholder=" " className="peer" />
                <Label
                  htmlFor="interest"
                  className="pointer-events-none absolute left-4 top-1.5 text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold"
                >
                  Property Interest
                </Label>
              </div>
            </div>
            <div className="relative">
              <Textarea
                id="message"
                rows={4}
                placeholder=" "
                className="peer"
              />
              <Label
                htmlFor="message"
                className="pointer-events-none absolute left-4 top-3 text-white/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold"
              >
                How can Akbar assist?
              </Label>
            </div>

            <Button
              size="lg"
              className="w-full text-xs uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.3em]"
            >
              Submit &amp; Receive Portfolio
            </Button>

            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/50 sm:text-xs sm:tracking-[0.4em]">
              Response guaranteed within 60 minutes
            </p>
          </form>
        </motion.div>

        <motion.div
          className="glass-panel flex flex-col gap-4 p-5 sm:gap-6 sm:p-6 md:p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm sm:tracking-[0.4em]">
              Direct Lines
            </p>
            <div className="mt-3 space-y-1.5 text-white sm:mt-4 sm:space-y-2">
              <a
                href="tel:+971501234567"
                className="text-xl font-semibold text-white sm:text-2xl"
              >
                +971 50 123 4567
              </a>
              <p className="text-sm text-white/70 sm:text-base">
                WhatsApp ready • RERA Certified
              </p>
            </div>
          </div>

          <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/60 sm:gap-3 sm:text-sm sm:tracking-[0.3em]">
            <p>Email · concierge@akbaralidubai.com</p>
            <p>Office · Boulevard Plaza, Downtown Dubai</p>
            <p>License · RERA BRN 48902</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-[28px] sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 sm:text-xs sm:tracking-[0.5em]">
              Concierge CTA
            </p>
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
              {[
                "Schedule Consultation",
                "Get Valuation",
                "WhatsApp Me",
                "Download Market Report",
              ].map((cta) => (
                <span
                  key={cta}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-xs"
                >
                  {cta}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 sm:h-60 sm:rounded-[28px]">
            <iframe
              title="Churchill Tower - Business Bay"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.65955825331!2d55.27304087570367!3d25.22624777764753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4337b550dfad%3A0x2d6fd2d8eab73e3e!2sChurchill%20Towers%2C%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1732315200000!5m2!1sen!2sae"
              className="h-full w-full"
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
