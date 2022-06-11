module.exports = {
  content: require('fast-glob').sync(['./**/*.php']),
  theme: {
    extend: {
      spacing: {},
      screens: {
        'tablet': '768px',
        'desktop': '992px',
        'lg-desktop': '1200px',
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
};
