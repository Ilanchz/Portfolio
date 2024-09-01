import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dosis: ['Dosis', 'sans-serif'],
      libre: ['Libre Baskerville', 'serif'],
      shadows: ['"Shadows Into Light"', 'cursive'],
      raleway: ['Raleway', 'sans-serif'],
      calligraffitti: ['Calligraffitti', 'cursive'], // Add the Calligraffitti font here
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
