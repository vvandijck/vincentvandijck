# vincentvandijck

Personal website

## Getting started

```sh
$ git clone git@github.com:vvandijck/vvandijck.git
$ cd vvandijck
$ yarn install --frozen-lockfile
```

Then copy and rename `.env.example` to `.env` and set the correct credentials.

### Local development

```sh
$ yarn dev
```

### Production build

```sh
$ yarn build
$ yarn start
```

## Deployment

```sh
$ now --prod
```

## Scripts

This project requires [Node.js](http://nodejs.org/) (>= v8) and
[npm](https://npmjs.org/) (comes with Node).

After installing dependencies using `npm install` the following scripts are
available:

`yarn ...` | Description
---|---
`build` | Create production build.
`dev` | Creates development build and serves app on [`http://localhost:3000`](http://localhost:3000), with hot reloading, for local development.
`lint` | Lints `.js` and `.less` files for any errors or warnings.
`format` | Fixes any errors or warnings in `.js` and `.less` files.

## Useful links

* [Local environment](http://localhost:3000)
