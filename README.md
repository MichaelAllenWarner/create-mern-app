# Create MERN App

This is a bare-bones skeleton for starting a MERN-stack app.

## Installation

To install, clone or download the repo and run `npm install`.

## Building and Running Your App

### Development Mode

Use `npm run dev` to start the Webpack dev server and the Express server concurrently (the former forwards HTTP requests to the latter). Then navigate to [`http://localhost:8080`](http://localhost:8080). Hot-reloading of React components is supported.

### Production Mode

The build script `npm run build` puts the production files into a new `public` folder (that Git is configured to ignore), and `npm start` serves the Express app in production mode at [`http://localhost:3000`](http://localhost:3000) by default.

## ES6+ and ES5 Bundles

The build stage outputs two JavaScript bundles: a slim ES6+ version, and a polyfill-bloated ES5 version. Browsers that support ES modules will request only the former, while browsers that don’t will request only the latter. To see how this is implemented, take a look at the `<script>` tag at the bottom of [`src/index.html`](./src/index.html#L10).

Babel is configured to load polyfills into the ES5 version for any JavaScript used in the app that IE10 doesn’t support (unless it’s used by something in `node_modules`, which is why we import `map` and `set` directly into `src/js/es5-index.js`). This doesn’t cover DOM polyfills. To change which browsers to target for JS polyfill support, edit the Babel settings for `es5Bundle` in `webpack-helpers/base-bundles.js` as needed (at the bottom of the file).

## CSS Modules

Webpack is configured for CSS modules here. See the `src/js/components/App` folder for an example. In development mode, the generated class names are legible and `style-loader` injects *internal* style sheets. In production mode, the generated class names are hashes, `mini-css-extract-plugin` builds an *external* style sheet, and `html-webpack-plugin` injects a link to the style sheet (`html-webpack-exclude-assets-plugin` is used to inject *only* a link to the CSS, since otherwise a link to the JS bundle would be injected too, and we’re already requesting the JS from the script tags at the end of the HTML’s `<body>`).

## JavaScript Class Properties

Experimental class properties are supported out of the box, so it’s fine to use (say) arrow-function methods and `const state = { ... };` in React class components. (The `babel-eslint` parser used in `src/js/.eslintrc.json` takes care of the linting.)

## JavaScript Module Syntax

Node’s experimental support for ES6 `import`/`export` syntax is enabled in this package, so use that rather than `require` and `module.exports` in both the `src` and `server` folders. In `webpack.config.js` and `webpack-helpers`, however, `require` and `module.exports` must be used.

## HTTP Requests

In the `server` folder I’ve included a basic “doodad” sample route. It’s there as a model, but obviously you should get rid of it. To see it “in action,” start mongodb locally on port 27017 ([Mac/Brew instructions](https://github.com/mongodb/homebrew-brew)), use `npm run dev`, and navigate (or send a GET request) to [`http://localhost:3000/api/doodads`](http://localhost:3000/api/doodads); the response should be an empty array.
