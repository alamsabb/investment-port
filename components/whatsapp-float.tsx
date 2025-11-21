"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/971501234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-[900] flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2.5 text-sm text-white shadow-gold-glow sm:bottom-6 sm:right-6 sm:gap-3 sm:px-5 sm:py-3"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      data-cursor="interactive"
    >
      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="hidden sm:inline">WhatsApp Akbar</span>
      <span className="sm:hidden">WhatsApp</span>
    </motion.a>
  );
}

