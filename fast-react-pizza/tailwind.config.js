/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Playwrite US Modern, Hind, Wittgenstein, Roboto',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
