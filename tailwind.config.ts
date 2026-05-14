import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Forest Green — official brand anchor at #1D3B2A.
        forest: {
          50: "#f1f6f3",
          100: "#d9e7df",
          200: "#afd0bd",
          300: "#7ab28e",
          400: "#4f9165",
          500: "#347448",
          600: "#265c38",
          700: "#1d3b2a", // ★ official
          800: "#142a1f",
          900: "#0d1c14",
          950: "#061008"
        },
        // Leaf Green — vibrant accent at #4CAF50.
        leaf: {
          50: "#f1faf2",
          100: "#ddf3e0",
          200: "#bce7c2",
          300: "#8dd396",
          400: "#59ba66",
          500: "#4caf50", // ★ official
          600: "#348d3a",
          700: "#2c6e30",
          800: "#275829",
          900: "#224925"
        },
        // Natural Gold — warm tan at #CBAB7A.
        gold: {
          50: "#faf4e8",
          100: "#f1e2c4",
          200: "#e3c898",
          300: "#d4b483",
          400: "#cbab7a", // ★ official
          500: "#b89060",
          600: "#966f43",
          700: "#735431",
          800: "#523b21"
        },
        // Cream — warm off-white at #F5F2E9.
        cream: {
          DEFAULT: "#f5f2e9", // ★ official
          50: "#faf8f1",
          100: "#f5f2e9",
          200: "#ede7d6",
          300: "#ddd2b3",
          400: "#c8b582"
        },
        // Soft Beige — paper at #E7DFC7.
        beige: {
          DEFAULT: "#e7dfc7", // ★ official
          50: "#f1ecd9",
          100: "#e7dfc7",
          200: "#dbcfa9",
          300: "#c8b682"
        },
        // ── Legacy aliases (so older usages still resolve) ──────────────
        // `ivory` used to mean "the foreground text on dark bg". On the new
        // light theme, we treat it as cream so existing utility classes
        // still produce a sensible result during the transition sweep.
        ivory: {
          DEFAULT: "#f5f2e9",
          50: "#faf8f1",
          100: "#f5f2e9",
          200: "#ede7d6",
          300: "#ddd2b3",
          400: "#c8b582"
        },
        // `champagne` legacy → maps to the new gold scale.
        champagne: {
          50: "#faf4e8",
          100: "#f1e2c4",
          200: "#e3c898",
          300: "#cbab7a",
          400: "#b89060",
          500: "#966f43",
          600: "#735431",
          700: "#523b21"
        },
        bone: "#e7dfc7",
        ink: "#1d3b2a",
        smoke: "#142a1f"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.045em",
        widest2: "0.32em"
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 28s linear infinite",
        glow: "glow 4s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" }
        }
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};

export default config;
