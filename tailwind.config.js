/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Podkova', 'serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-semibold': ['Gilroy-Semibold', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
      colors: {
        'body-gray': '#F4F4F4',
        'gray-light': '#F0F0F0',
        'gray-1': '#555555',
        'gray-2': '#8C8A8C',
        'gray-3': '#B3B3B3',
      },
    },
  },
  plugins: [],
};
