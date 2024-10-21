/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Application files
    "./projects/lib/src/**/*.{html,ts}", // Include your library components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


