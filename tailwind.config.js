module.exports = {
  content: require('fast-glob').sync(['./**/*.php']),
  theme: {
    extend: {
      spacing: {},
    },
  },
  plugins: [],
  prefix: 'tw-',
};
