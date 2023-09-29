/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/background.png')",
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
      },
      fontFamily: {
        primary: ["Karl"],
        karl: ["Karl"],
      },
      colors: {
        //template
        "custom-black": "#121212",
        "custom-white": "#F3F1EA",
        "custom-yellow": "#FFBA21",
        "custom-green": "#56BC78",
        "custom-orange": "#FF5722",
        "custom-red": "#DF1D00",
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
