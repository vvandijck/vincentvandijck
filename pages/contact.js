// Styles
import '../styles/index.less'

// Core
import Head from 'next/head'

// Content
import graphqlQuery from './contact.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Page = ({ contact }) => (
	<React.Fragment>
		<Head>
			<title>{contact.seo.title}</title>
		</Head>
		<Header />
		<main className="page">
			<div className="container">
				<h1>{contact.title}</h1>
				<p>content id: {contact.id}</p>
			</div>
		</main>
		<Footer />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	return await fetchContent({ query: graphqlQuery }).then(data => ({
		contact: data.contact,
	}))
}

export default Page
