/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#495E57",
        yellow: "#F4CE14",
        peach: "#EE9972",
        lightpeach: "#FBDABB",
        lightgrey: "#EDEFEE",
        black: "#333333",
      },
      spacing: {
        "2x": "20px",
        "3x": "30px",
      },
      text: {
        "2xl": "40px",
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  plugins: [],
};
