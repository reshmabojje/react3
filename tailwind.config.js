/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}", // All JS, JSX, TS, TSX, and CSS files in the src directory and its subdirectories
    "./public/index.html",             // The main index.html file in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

