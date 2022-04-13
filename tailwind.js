module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    extend: {},
  },
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
