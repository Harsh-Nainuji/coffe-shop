// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#f3e9dc',
          DEFAULT: '#a57c58', // warm brown
          dark: '#4b2e1e',     // deep espresso
          accent: '#d4a373',   // latte foam
        },
      },
      boxShadow: {
        'soft-md': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    },
  },
  plugins: [],
};