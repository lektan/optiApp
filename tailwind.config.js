module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': '3px 3px #333',
        'boxDark': '3px 3px #bababa',
        'btn': '2px 2px #333',
        'btnClick': 'inset 1px 1px #333',
      }
    },
  },
  variants: {
    extend: {
        boxShadow: ['active']
    },
  },
  plugins: [],
}