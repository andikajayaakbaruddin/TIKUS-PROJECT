/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kemenkes-blue': '#1e40af',
        'kemenkes-green': '#059669',
        'kemenkes-light-blue': '#3b82f6',
        'kemenkes-light-green': '#10b981',
      }
    },
  },
  plugins: [],
}