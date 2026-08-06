/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        panel: '#111111',
        charcoal: '#1a1a1a',
        gold: '#c9a227',
        'gold-2': '#e6c458',
        ivory: '#f4f0e6',
        paper: '#f7f5ef',
        mist: '#f0ece0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
