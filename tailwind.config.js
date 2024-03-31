/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#e50914",
        "divider-gray": "#232323",
        "tile-gray": "#808080",
        "coal-gray": "rgb(128, 128, 128)",
        "coal-black": "#141414",
        "gradient-black": "rgb(0 0 0 / 40%)",
      },
    },
  },
  plugins: [],
};
