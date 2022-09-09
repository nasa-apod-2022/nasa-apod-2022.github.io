/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch: ["Chakra Petch", "sans-serif"],
       },
      backgroundImage: {
        'back': "url('/images/background.jpg')",
      }
    },
  },
  plugins: [],
}
