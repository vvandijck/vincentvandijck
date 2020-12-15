// Styles
import '../styles/index.less'

// Core
import Head from 'next/head'

// Content
import graphqlQuery from './toolbox.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Page = ({ toolbox }) => (
	<React.Fragment>
		<Head>
			<title>{toolbox.seo.title}</title>
		</Head>
		<Header />
		<main className="page">
			<div className="container">
				<h1>{toolbox.title}</h1>
				<p>content id: {toolbox.id}</p>
			</div>
		</main>
		<Footer />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	return await fetchContent({ query: graphqlQuery }).then(data => ({
		toolbox: data.toolbox,
	}))
}

export default Page
