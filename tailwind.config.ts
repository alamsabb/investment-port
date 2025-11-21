import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", ...fontFamily.sans],
        serif: ["var(--font-playfair)", ...fontFamily.serif],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          DEFAULT: "#d4af37",
          light: "#f5d68f",
          dark: "#b38a1c",
        },
        champagne: "#c9a961",
        night: "#050507",
        onyx: "#111113",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(212,175,55,0.28), transparent 60%)",
        "luxury-gradient":
          "linear-gradient(135deg, #050507 0%, #11111d 40%, #050507 100%)",
        "gold-sheen": "linear-gradient(120deg, #d4af37, #f3e6c9, #a07917)",
      },
      boxShadow: {
        "lux-soft": "0 25px 80px rgba(0,0,0,0.35)",
        "gold-glow": "0 8px 30px rgba(212,175,55,0.35)",
        "inner-glass": "inset 0 0 80px rgba(255,255,255,0.05)",
      },
      screens: {
        xs: "480px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 1s ease forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

