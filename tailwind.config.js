/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
        particles: "url('/images/particles.png')",
        button: "url('/images/buttons/button-outline.svg')",
        "button-active": "url('/images/buttons/button-outline-active.svg')",
        "button-hover": "url('/images/buttons/button-outline-hover.svg')",
        "about-nav-hover": "url('/images/buttons/about-nav-hover.svg')",
        "navigation-highlight":
          "url('/images/buttons/navigation-highlight.svg')",
        "background-grid": "url('/images/about/background-grid.svg')",
        "dotted-backsplash": "url('/images/about/dotted-backsplash.svg')",
      },
      fontFamily: {
        primary: ["Barlow"],
        teko: ["Teko"],
        "teko-thin": ["Teko-Thin"],
      },
      colors: {
        //template
        "custom-black": "#121212",
        "custom-yellow": "#FFBA21",
        "custom-green": "#56BC78",
        "custom-orange": "#FF5722",
        "custom-red": "#DF1D00",
        //calder
        "custom-white": "#FDF0F1",
        "light-red": "#EB6976",
        "dark-red": "#120505",
        "dark-red-1": "#562527",
        "red-010": "#391415", //light red opacity 10
        "red-020": "#4f1e20", //light red opacity 20
        "shine-rgba": "rgba(233, 104, 116, 0.60)",
        audio: "#423A3B",
        "audio-hover": "#4B4949",
        "audio-active": "#392C2D",
        "audio-border": "#5F6A6A",
        "audio-dark-bg": "#28292A",
        "audio-button-hover": "#363233",
        gold: "#FEFDBA",
      },
      screens: {
        xs: "360px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
      width: {
        "200px": "200px",
      },
      height: {
        "38px": "38px",
      },
    },
  },
  plugins: [],
};
