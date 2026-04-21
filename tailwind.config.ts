import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#534AB7",
        "accent-light": "#EEEDFE",
        "accent-mid": "#AFA9EC",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
