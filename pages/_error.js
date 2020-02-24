import '../styles/index.less'

// Core
import Head from 'next/head'
import fetchContent from '../lib/fetch-content'
import withCacheControl from '../lib/with-cache-control'

// Components
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Error = ({ error }) => (
	<React.Fragment>
		<Head>
			<title>{error.seo.title}</title>
		</Head>
		<Header />
		<main className="error">
			<h1>{error.title}</h1>
			<p>content id: {error.id}</p>
		</main>
		<Footer />
	</React.Fragment>
)

Error.getInitialProps = withCacheControl(({ req }) => {
	const graphqlQuery = `{
		error {
			id
			seo {
				description
				title
				twitterCard
			}
			title
		}
	}`

	return fetchContent({ graphqlQuery, req })
})

export default Error
