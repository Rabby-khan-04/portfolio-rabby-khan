/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#3bc2fe",
        secondery: "#9a6ff8",
        accent: "#0b011d",
        light: "#c9c7cd",
        "light-gray": "#b5abcb",
        "light-gray2": "#a3acb9",
        "off-white": "#dcdfe3",
      },
    },
  },
  plugins: [],
};
