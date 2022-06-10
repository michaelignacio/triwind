let mix = require('laravel-mix');
require('mix-tailwindcss');

mix
  .sass('style.scss', 'style.css')
  .tailwind()
  // .minify('assets/js/tri-custom.js', 'assets/js/tri-custom-min.js')
  .browserSync({
    proxy: process.env.URL,
    files: ['*.php', 'style.css'],
  })
  .webpackConfig({
    stats: { children: true },
  })
  .options({
    processCssUrls: false,
  });