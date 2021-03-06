# Triwind

Triwind is a minimal boilerplate for Tri theme using [Tailwind CSS](https://tailwindcss.com/) utilities.

## Getting started

Make sure you have `node` and `npm` installed on your local environment.

After pulling this repo to your `tri-child` folder:
1. Move the files inside the `triwind` folder into the `tri-child` main directory. (You may also run the command `npm run move` inside `triwind` to achieve the same effect).
2. Delete the now empty folder `triwind` (or go up one folder to the `tri-child` directory and run the command `npm run cleanup`).
3. Install npm dependencies by running `npm i` on the `tri-child` directory.
4. Rename `.env.example` to `.env`, and update the URL variable on the file to your site's local URL.
5. Create a new `.scss` file and add this as the first line (you can use `@apply` and other Tailwind directives inside this file):

```scss
@import "tailwindcss/utilities";
```

6. Append this line to your `style.scss` file (this file contains the styles of the Tailwind classes you used): 

```scss
@import "tailwind-styles";
```

7. Run `npm run watch` to watch for file changes (`.php`, `.scss`) and trigger automatic recompile and rebuild.

A prefix has been added to the Tailwind configuration to explicitly distinguish Tailwind classes from Tri classes. The default prefix has been set to `tw-`.

e.g. you can use `tw-opacity-50` to style an element with `opacity: 50%;`.
