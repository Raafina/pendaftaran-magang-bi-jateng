/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: { circular: ["Circular STD"] },
      colors: {
        blue: "#005596",
        blueHover: "#1A467A",
        grey: "#191825",
      },
    },
    dropShadow: {
      getStarted: [
        "0px 81px 32px rgba(0,0,0,0.01)",
        "0px 45px 27px rgba(0, 0, 0, 0.05)",
        "0px 20px 20px rgba(0, 0, 0, 0.09)",
        "0px 5px 11px rgba(0, 0, 0, 0.1)",
        "0px 0px 0px rgba(0, 0, 0, 0.1)",
      ],
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
