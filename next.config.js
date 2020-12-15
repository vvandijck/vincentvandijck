const withPWA = require('next-pwa')
const withLess = require('@zeit/next-less')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { parsed: localEnv } = dotenv.config()
const plugin = new webpack.EnvironmentPlugin(localEnv)
const isDevelopment = process.env.NODE_ENV === 'development'

const config = withLess({
	// Taken from: https://github.com/developit/nextjs-preact-demo/
	webpack(config) {
		const splitChunks = config.optimization && config.optimization.splitChunks

		if (splitChunks) {
			const cacheGroups = splitChunks.cacheGroups
			const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/

			if (cacheGroups.framework) {
				cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
					test: preactModules,
				})
				cacheGroups.commons.name = 'framework'
			} else {
				cacheGroups.preact = {
					name: 'commons',
					chunks: 'all',
					test: preactModules,
				}
			}
		}

		config.plugins.push(plugin)
		config.module.rules.push({
			test: /\.graphql$/,
			use: 'raw-loader',
		})

		return config
	},
	poweredByHeader: false,
	reactStrictMode: true,
	env: {
		NEXT_API_KEY: process.env.NEXT_API_KEY,
	},
	pwa: isDevelopment ? {} : {
		dest: 'public',
	},
})

module.exports = isDevelopment ? config : withPWA(config)
