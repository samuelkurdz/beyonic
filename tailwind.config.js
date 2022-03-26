module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bey-shadow': '1px 1px 1px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}