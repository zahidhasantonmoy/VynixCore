/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1E3A8A',
        'accent-teal': '#2DD4BF',
        'neutral-gray-light': '#F3F4F6',
        'neutral-gray-dark': '#374151',
        'neon-highlight': '#60A5FA',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
