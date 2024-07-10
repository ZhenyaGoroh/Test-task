/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grayscale/70": "#06082C",
        "grayscale/40": "#9395B8",
      },
      dropShadow: {
        "baseShadow": "-11px 11px 22.5px #0C0C1814"
      }
    },
  },
  plugins: [],
};
