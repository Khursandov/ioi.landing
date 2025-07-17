import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,ts}",
    "./assets/**/*.css",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        usm: "550px",
        tablet: "640px",
        cxl: "1480px",
      },
      container: {
        center: true,
        screens: {
          xl: "1350px",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#005BFF",
          hover: "#0045c7",
          700: "#255CA9",
          500: "#1C6FE3",
          300: "#85B8FF",
        },
        dark: {
          DEFAULT: "#223553",
          900: "#272727",
          850: "#313131",
          800: "#617595",
          750: "#88959E",
          700: "#D7DEE9",
          600: "#D9D9D9",
          500: "#6D8396",
          400: "#617595",
          350: "#E3E6EB",
          300: "#89959E",
          250: "#F5F7FA",
          200: "#CED1D6",
          150: "#D7DEE9",
          100: "#F5F7FA",
        },
        red: {
          DEFAULT: "#E13838",
        },
      },
      gridTemplateColumns: {
        "cars-mobile": "repeat(auto-fill, minmax(160px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
