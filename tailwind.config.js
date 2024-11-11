/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customPurpleStart": '#3e2167',
        "customPurpleEnd": '#200d3b',
      },
      
    },
  },
  plugins: [],
}