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
        primary: "#7469B6",
        secondary: "#ccf381",
        neutral: "#FBFBFB",
      },
      fontFamily: {
        main: ["var(--font-main)"],
        lite: ["var(--font-lite)"],
        bold: ["var(--font-bold)"],
      },

      height: {
        hero: "800px",
      },
      maxHeight: {
        max: "1000px",
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};
export default config;
