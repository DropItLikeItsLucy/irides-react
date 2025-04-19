const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this line covers your source files
  ],
  theme: {
    extend: {
      colors: {
        'irides-green': '#039834', // Define the main brand green
        // Optional: Add shades if needed later (e.g., using a tool like uicolors.app/create)
        // 'irides-green-light': '#...',
        // 'irides-green-dark': '#...',
        irides: {
          DEFAULT: '#039834', // Your main green (700 shade) - Used for bg-irides, border-irides etc.
          50: '#f0fdf4',    // Example light shade
          100: '#dcfce7',   // Example light shade
          200: '#bbf7d0',   // Example light shade
          300: '#86efac',   // Example light shade
          400: '#4ade80',   // Example medium shade
          500: '#22c55e',   // Example medium shade
          600: '#16a34a',   // Example darker medium shade
          700: '#039834',   // The specific BG/Border color you picked
          800: '#14532d',   // Example dark shade
          900: '#14532d',   // Example darker shade
          950: '#003513'    // The specific Text color you picked
        },
      },
      fontFamily: {
        // Add 'Noto Sans Georgian' to the beginning of the sans-serif stack
        sans: [
          '"Noto Sans Georgian"', // Font name with spaces needs quotes
          ...defaultTheme.fontFamily.sans // Include Tailwind's default sans-serif fonts as fallbacks
        ],
        // You could also create a specific key if you only wanted it applied sometimes
        // georgian: ['"Noto Sans Georgian"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}