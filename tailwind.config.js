/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2563EB",
          secondary: "#374151",
        },
        fontFamily: {
          sans: ["DM Sans", "sans-serif"],
        },
      },
    },
    plugins: [],
  };