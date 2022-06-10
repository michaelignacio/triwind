# Triwind

Triwind is a minimal boilerplate for Tri theme using [Tailwind CSS](https://tailwindcss.com/) utilities.

## Getting started

Make sure you have `node` and `npm` installed on your local environment.

After pulling this repo to your `tri-child` folder:
1. Install NPM packages by running `npm i` on the child theme folder.
2. Rename `.env.example` to `.env`, and update the URL variable your site's local URL.
3. Run `npm run watch` to automatically recompile and rebuild everytime any file updates (PHP, SCSS).

A prefix has been added to the Tailwind configuration to explicitly distinguish Tailwind classes from Tri classes. The default prefix has been set to `tw-`.

e.g. you can use `tw-opacity-50` to style an element with `opacity: 50%;`.
