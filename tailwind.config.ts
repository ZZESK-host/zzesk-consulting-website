import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08111A",
          925: "#09131D",
          900: "#0B1622",
          850: "#0F1C2A",
          800: "#132333",
          700: "#1A3045",
        },
        mist: {
          50: "#F4F7FB",
          100: "#DCE6EF",
          200: "#B3C0CE",
          300: "#91A5B8",
          400: "#7F91A3",
        },
        accent: {
          300: "#2DD4BF",
          400: "#14B8A6",
          500: "#0F9F92",
          600: "#0F766E",
        },
        cobalt: {
          300: "#6EA8FE",
          400: "#4F8DF7",
          500: "#3D73D9",
        },
        status: {
          success: "#34D399",
          warning: "#FBBF24",
          error: "#FB7185",
          info: "#7DD3FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.34)",
        edge: "0 0 0 1px rgba(148, 163, 184, 0.16)",
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at 50% 0%, rgba(45, 212, 191, 0.11), transparent 34rem)",
      },
    },
  },
  plugins: [],
};

export default config;
