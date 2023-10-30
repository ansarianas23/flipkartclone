/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'flipkart-blue': '#287FF0',
        'flipkart-orange': '#FB641B',
        'flipkart-yellow': '#ff9f00',
        'flipkart-green': '#388e3c',
        'flipkart-btn-blue': 'rgb(42 85 230)'
      }
    },
  },
  plugins: [],
}

