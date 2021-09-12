const withPWA = require('next-pwa')
const withLess = require('@zeit/next-less')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { parsed: localEnv } = dotenv.config()
const plugin = new webpack.EnvironmentPlugin(localEnv)
const isDevelopment = process.env.NODE_ENV === 'development'

const config = withLess({
	// Taken from: https://github.com/developit/nextjs-preact-demo/
	webpack: (config, { dev, isServer }) => {
		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
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
