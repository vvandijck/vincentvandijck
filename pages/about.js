// Styles
import '../styles/index.less'

// Core
import Head from 'next/head'

// Content
import graphqlQuery from './about.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Page = ({ about }) => (
	<React.Fragment>
		<Head>
			<title>{about.seo.title}</title>
		</Head>
		<Header />
		<main className="page">
			<div className="container">
				<h1>{about.title}</h1>
				<p>content id: {about.id}</p>
			</div>
		</main>
		<Footer />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	return await fetchContent({ query: graphqlQuery }).then(data => ({
		about: data.about,
	}))
}

export default Page
