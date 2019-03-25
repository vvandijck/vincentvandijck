# vincentvandijck

Personal website

## Development

### Getting started

* Clone the repository.
* Run app in development mode (`npm run dev`), see [scripts](#scripts).
* Changes on `master` trigger a new build and deploy to the [live environment](https://vincentvandijck.netlify.com).

### Structure

```
dist/             <- generated app
  client/         <- generated client-side app

src/              <- source files
  client/         <- Nuxt app
    assets/       <- core files, not public
    components/   <- Vue components
    layouts/      <- base layout for pages
    pages/        <- view per route
    plugins/      <- Vue directives
    static/       <- public assets

netlify.toml      <- Netlify build & function config
nuxt.config.js    <- Nuxt app config
```

### Scripts

This project requires [Node.js](http://nodejs.org/) (>= v8) and
[npm](https://npmjs.org/) (comes with Node).

After installing dependencies using `npm install` the following scripts are
available:

`npm run ...` | Description
---|---
`build` | Builds client, guide and server for production to `dist/`.
`dev` | Serves client app on [`http://localhost:3000`](http://localhost:3000) ("lean" in T9) with hot reloading.
`guide` | Serves guide on [`http://localhost:3001`](http://localhost:3001) for local development.
`start` | Serves production version of client app from (`/dist/`) on [`http://localhost:3000`](http://localhost:3000).
`new-component` | Creates a new component folder.

## Documentation

All components are documented with a `README.md` file in their own folder.
Other documentation can be found [here](_docs/).

## Useful links

* [Local environment](http://localhost:3000)
* [Preview environment](https://vincentvandijck.netlify.com)
* [Netlify project](https://app.netlify.com/sites/vincentvandijck/overview)
