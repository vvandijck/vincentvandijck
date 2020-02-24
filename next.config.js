const withLess = require('@zeit/next-less')
const dotenv = require('dotenv-safe')

dotenv.config()

module.exports = withLess({
	poweredByHeader: false,
	reactStrictMode: true,
	env: {
		API_KEY: process.env.API_KEY,
	},
})
