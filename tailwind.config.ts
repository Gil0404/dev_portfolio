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
        primary: "#4831d4",
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
      maxWidth: {
        max: "1536px",
      },
      screens: {
        xs: "370px",
      },
    },
  },
  plugins: [],
};
export default config;
