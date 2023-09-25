/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#444",
          "200": "#373737",
        },
        gray: {
          "100": "#2b262d",
          "200": "rgba(0, 0, 0, 0.7)",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(255, 255, 255, 0.3)",
        },
        orange: {
          "100": "#ffb504",
          "200": "#feb005",
        },
        gold: {
          "100": "#ffc102",
          "200": "rgba(255, 193, 2, 0.6)",
        },
        chocolate: "#d05a04",
        tomato: "#fa3939",
        forestgreen: "#1f8435",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "11xl": "30px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      mini: "0.94rem",
      base: "1rem",
      xl: "1.25rem",
      "56xl": "4.69rem",
      sm: "0.88rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
