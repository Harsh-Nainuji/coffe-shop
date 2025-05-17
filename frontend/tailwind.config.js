// frontend/tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#f3e9dc',
          DEFAULT: '#a57c58',
          dark: '#4b2e1e',
          accent: '#d4a373',
        },
        primary: 'var(--coffee-DEFAULT)',
        accent: 'var(--coffee-accent)',
      },
      boxShadow: {
        'soft-md': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out both',
        pop: 'pop 0.5s ease-in-out both'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        pop: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
};