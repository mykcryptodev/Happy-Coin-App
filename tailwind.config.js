module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
