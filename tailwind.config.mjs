/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071429',
        navy: '#0a1c38',
        'navy-2': '#0e2547',
        aqua: '#22e0b7',
        'aqua-2': '#1fb6d6',
        sky: '#a9def5',
        paper: '#f6f8fb',
        mist: '#eef4f8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
