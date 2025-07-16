/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#291509'
      },
      fontFamily: {
        glacial: ['Glacial', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 1.5s infinite', // más lento que el default (1s)
      }
    },
  },
  plugins: [],
};
