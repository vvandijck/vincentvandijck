const withLess = require('@zeit/next-less')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { parsed: localEnv } = dotenv.config()
const plugin = new webpack.EnvironmentPlugin(localEnv)

module.exports = withLess({
	webpack(config) {
		config.plugins.push(plugin)
		return config
	},
	poweredByHeader: false,
	reactStrictMode: true,
	env: {
		NEXT_API_KEY: process.env.NEXT_API_KEY,
	},
})
