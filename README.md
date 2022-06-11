# Triwind

Triwind is a minimal boilerplate for Tri theme using [Tailwind CSS](https://tailwindcss.com/) utilities.

## Getting started

Make sure you have `node` and `npm` installed on your local environment.

After pulling this repo to your `tri-child` folder:
1. On the `triwind` folder, run the command `npm run move` (this will move the files to the `tri-child` directory).
2. Go to the `tri-child` directory and run the command `npm run cleanup` (this will delete the now empty folder `triwind`).
3. Install NPM packages by running `npm i` on the `tri-child` directory.
4. Rename `.env.example` to `.env`, and update the URL variable your site's local URL.
5. Appending this line to your `style.scss` file (this will add Tailwind utilities to your Tri styles): 

```scss
@import "tailwindcss/utilities";
```

6. Run `npm run watch` to watch for file changes (`.php`, `.scss`) and trigger automatic recompile and rebuild.

A prefix has been added to the Tailwind configuration to explicitly distinguish Tailwind classes from Tri classes. The default prefix has been set to `tw-`.

e.g. you can use `tw-opacity-50` to style an element with `opacity: 50%;`.
