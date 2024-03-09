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
    },
    colors: {
      primaryGreen: {
        '50': '#edfcf4',
        '100': '#d4f7e3',
        '200': '#adedcc',
        '300': '#77deae',
        '400': '#40c78d',
        '500': '#1ca66f',
        '600': '#108b5d',
        '700': '#0d6f4c',
        '800': '#0d583e',
        '900': '#0c4834',
        '950': '#05291e',
    },
    },
  },
  plugins: [],
};
export default config;
