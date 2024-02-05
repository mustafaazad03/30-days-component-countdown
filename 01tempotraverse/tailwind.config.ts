import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-light": "#E2E8DD",
        "primary-dark": "#4E5340",
        "secondary-light": "#B7D1DA",
        "secondary-dark": "#697268",
        "accent-dark": "#95A3A4",
      },
    },
  },
  plugins: [],
};
export default config;
