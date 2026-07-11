import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef1f7",
          100: "#d7deec",
          200: "#aebdd9",
          300: "#8598bf",
          400: "#5a729f",
          500: "#3d5480",
          600: "#2a3d63",
          700: "#1c2c4a",
          800: "#111d33",
          900: "#0a1223",
          950: "#060a15",
        },
        gold: {
          50: "#fbf7ec",
          100: "#f3e8c9",
          200: "#e6d093",
          300: "#d8b65e",
          400: "#c9a03e",
          500: "#b3872c",
          600: "#8f6a22",
          700: "#6b4f1a",
        },
        ink: "#0f172a",
        surface: "#ffffff",
        muted: "#64748b",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)",
        "card-hover": "0 4px 12px rgba(15,23,42,0.06), 0 16px 40px -12px rgba(15,23,42,0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
