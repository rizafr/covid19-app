module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'red-999': '#FA5652',
        'green-999': '#035755',
        'gray-999': '#4B4F51'
      },
    },
  },
  variants: {},
  plugins: [],
}
