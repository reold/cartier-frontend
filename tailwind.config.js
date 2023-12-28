/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: "Nunito"
    },
    extend: {
      colors: {
        aodPurple: "#C678DD",
        aodBg: "#282C34",
        aodFg: "#252931"
      }
    },
  },
  plugins: [],
}

