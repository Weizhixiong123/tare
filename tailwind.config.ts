import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#050507",
          900: "#0b0a0e",
          800: "#131118",
          700: "#1d1a24",
          600: "#2a2533",
        },
        crimson: {
          400: "#f87171",
          500: "#dc2626",
          600: "#b91c1c",
          700: "#881313",
          800: "#5c0b0b",
          900: "#380606",
        },
        amber: {
          200: "#f3e3b8",
          300: "#e6c675",
          400: "#d4af37",
          500: "#c89b3c",
          600: "#9c7323",
          700: "#705014",
        },
        jade: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        korean: ["var(--font-noto-serif)", "serif"],
      },
      backgroundImage: {
        "bronze-gradient": "linear-gradient(135deg, #f3e3b8 0%, #c89b3c 50%, #785a28 100%)",
        "cinnabar-gradient": "linear-gradient(135deg, #dc2626 0%, #881313 60%, #380606 100%)",
        "obsidian-card": "linear-gradient(180deg, rgba(22, 19, 28, 0.92) 0%, rgba(9, 8, 12, 0.97) 100%)",
      },
      boxShadow: {
        "arpg-panel": "inset 0 1px 0 0 rgba(230, 198, 117, 0.2), inset 0 0 30px rgba(0, 0, 0, 0.85), 0 16px 40px -10px rgba(0, 0, 0, 0.9)",
        "arpg-hover": "inset 0 1px 0 0 rgba(230, 198, 117, 0.45), inset 0 0 25px rgba(200, 155, 60, 0.12), 0 20px 45px -10px rgba(185, 28, 28, 0.25)",
        "cinnabar-glow": "0 0 25px -2px rgba(220, 38, 38, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        "gold-glow": "0 0 25px -4px rgba(200, 155, 60, 0.4), inset 0 1px 0 rgba(255, 240, 200, 0.35)",
      },
      keyframes: {
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "reverse-spin": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-ember": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "slow-spin": "slow-spin 90s linear infinite",
        "reverse-spin": "reverse-spin 70s linear infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "pulse-ember": "pulse-ember 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
