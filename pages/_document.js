import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html lang="nl">
				<Head>
					<link rel="icon" type="image/x-icon" href="/static/icons/favicon.ico" />
					<link rel="manifest" type="application/manifest+json" href="/manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
