import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Google Sans", "sans-serif"],
      serif: ["Google Sans", "serif"],
      body: ["Google Sans", "sans-serif"],
    },
    extend: {
      colors: {
        red: "#ea4335",
        yellow: "#f9ab00",
        green: "#34a853",
        blue: "#4285f4",
        "red-mute": "#f28b82",
        "yellow-mute": "#fde293",
        "green-mute": "#81c995",
        "blue-mute": "#8ab4f8",
        gray: "#5f6368",
        "light-gray": "#f1f3f4",
        maroon: "#9a0000",
        black: "#2C384A",
      },
    },
  },
  plugins: [typography],
});
export default config;
