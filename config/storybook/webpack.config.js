const path = require('path')

const nuxtRootDir = path.resolve(`${__dirname}/../../src/client`)

module.exports = ({ config }) => {
  const urlLoader = config.module.rules.find((rule) => /file-loader/.test(rule.loader))
  urlLoader.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/

  config.resolve.alias = {
    vue$: 'vue/dist/vue.esm.js',
    '~': nuxtRootDir,
    '~~': nuxtRootDir,
  }

  config.module.rules.push({
    test: /\.svg$/,
    loader: 'vue-svg-loader',
  })

  return config
}
