// Styles
import '../styles/index.less'

// Core
import Head from 'next/head'

// Content
import graphqlQuery from './index.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Page = ({ home }) => (
	<React.Fragment>
		<Head>
			<title>{home.seo.title}</title>
		</Head>
		<Header />
		<main className="page">
			<div className="container">
				<h1>{home.title}</h1>
				<p>content id: {home.id}</p>
			</div>
		</main>
		<Footer />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	return await fetchContent({ query: graphqlQuery }).then(data => ({
		home: data.home,
	}))
}

export default Page
