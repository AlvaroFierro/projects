/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-red': '#421f1f',
        'orange':'#ff9d1b',
      },
    },
  },
  plugins: [],
};
