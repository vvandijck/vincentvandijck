// Styles
import '../styles/index.less'

// Core
import Head from 'next/head'

// Content
import graphqlQuery from './_error.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

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

Error.getInitialProps = async () => {
	return await fetchContent({ query: graphqlQuery }).then(data => ({
		error: data.error,
	}))
}

export default Error
