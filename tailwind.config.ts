import type { Config } from "tailwindcss"
const colors = require("tailwindcss/colors")

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        voilet: colors.voilet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        main: {
          1: {
            light: "#000000",
            DEFAULT: "#000000",
            dark: "#FEFEFE",
          },
          2: {
            light: "#374151",
            DEFAULT: "#374151",
            dark: "#EAEAEA",
          },
          3: {
            light: "#EAEAEA",
            DEFAULT: "#EAEAEA",
            dark: "#4F4F4F",
          },
          4: {
            light: "#F9F9F9",
            DEFAULT: "#F9F9F9",
            dark: "#434343",
          },
        },
        background: {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#2D2D2D",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    require("tailwindcss-animated"),
  ],
}
export default config
