const { URL } = process.env
const baseUrl = URL

module.exports = {
  srcDir: 'src/client',

  generate: {
    dir: 'dist/client',
  },

  env: {
    baseUrl,
  },

  head: {
    title: 'Vincent van Dijck',
    meta: [
      { 'charset': 'utf-8' },
      { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1' },
      { 'name': 'classification', 'content': 'business' },
      { 'name': 'theme-color', 'content': '#00AAE9' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      { 'http-equiv': 'cleartype', 'content': 'on' },
      { 'name': 'robots', 'content': 'index,follow,noodp' },
      { 'name': 'googlebot', 'content': 'index,follow' },
      { 'name': 'url', 'content': `${baseUrl}/` },
      { 'name': 'identifier-URL', 'content': `${baseUrl}/` },
      /* Facebook */
      { 'property': 'og:url', 'content': `${baseUrl}/` },
      { 'property': 'og:type', 'content': 'website' },
      { 'property': 'og:title', 'content': 'Vincent van Dijck' },
      { 'property': 'og:image', 'content': `${baseUrl}/images/logo-wide.jpg` },
      { 'property': 'og:image:width', 'content': '1000' },
      { 'property': 'og:image:height', 'content': '500' },
      { 'property': 'og:description', 'content': 'Front-end Developer & Web development enthousiast' },
      { 'property': 'og:site_name', 'content': 'www.vincentvandijck.nl' },
      { 'property': 'og:locale', 'content': 'en_US' },
      /* Twitter */
      { 'name': 'twitter:card', 'content': 'summary_large_image' },
      { 'name': 'twitter:creator', 'content': '@vvandijck' },
      { 'name': 'twitter:url', 'content': `${baseUrl}/` },
      { 'name': 'twitter:title', 'content': 'Vincent van Dijck' },
      { 'name': 'twitter:description', 'content': 'Front-end Developer & Web development enthousiast' },
      { 'name': 'twitter:image', 'content': `${baseUrl}/images/logo-wide.jpg` },
      /* Windows */
      { 'name': 'msapplication-square70x70logo', 'content': '/images/windows-70x70.png' },
      { 'name': 'msapplication-square150x150logo', 'content': '/images/windows-150x150.png' },
      { 'name': 'msapplication-square310x150logo', 'content': '/images/windows-310x150.png' },
      { 'name': 'msapplication-square310x310logo', 'content': '/images/windows-310x310.png' },
      { 'name': 'msapplication-TileColor', 'content': '#00AAE9' },
      /* Apple */
      { 'name': 'apple-mobile-web-app-title', 'content': 'Vincent van Dijck | Front-end Developer' },
      { 'name': 'apple-mobile-web-app-capable', 'content': 'yes' },
      { 'name': 'apple-mobile-web-app-status-bar-style', 'content': 'white' },
      { 'name': 'mobile-web-app-capable', 'content': 'yes' },
    ],
    link: [
      /* Favicon */
      { 'rel': 'shortcut icon', 'type': 'image/x-icon', 'href': '/images/favicon.ico' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/favicon-16x16.png' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/favicon-32x32.png' },
      /* Android / Chrome */
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/android-36x36.png', 'sizes': '36x36' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/android-48x48.png', 'sizes': '48x48' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/android-72x72.png', 'sizes': '72x72' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/android-96x96.png', 'sizes': '96x96' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/android-144x144.png', 'sizes': '144x144' },
      { 'rel': 'icon', 'type': 'image/png', 'href': '/images/android-192x192.png', 'sizes': '192x192' },
      { 'rel': 'manifest', 'type': 'application/manifest+json', 'href': '/manifest.json' },
      /* Safari */
      { 'rel': 'apple-touch-icon', 'href': '/images/ios-60x60.png', 'sizes': '60x60' },
      { 'rel': 'apple-touch-icon', 'href': '/images/ios-76x76.png', 'sizes': '76x76' },
      { 'rel': 'apple-touch-icon', 'href': '/images/ios-120x120.png', 'sizes': '120x120' },
      { 'rel': 'apple-touch-icon', 'href': '/images/ios-152x152.png', 'sizes': '152x152' },
      { 'rel': 'apple-touch-icon', 'href': '/images/ios-180x180.png', 'sizes': '180x180' },
      { 'rel': 'mask-icon', 'href': '/images/logo-monochrome.svg', color: '#00AAE9' },
      /* preload */
      // { 'rel': 'preload', 'href': '__CSS_URL__', 'as': 'style' },
      // { 'rel': 'preload', 'href': '__JS_URL__', 'as': 'script', 'nonce': 'u2s9t62kgj2cujzw' },
    ],
  },

  loading: {
    color: '#00AAE9',
    height: '3px',
  },

  router: {
    middleware: [
      'enforce-trailing-slash',
      'pages',
    ],
    extendRoutes(routes) {
      routes.push({
        name: 'error',
        path: '*',
        component: '~/pages/404.vue',
      })
    },
  },

  plugins: [
    '~/plugins/LazyLoad.js',
  ],

  build: {
    postcss: [
      require('postcss-custom-properties')()
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });
    }
  }
}
