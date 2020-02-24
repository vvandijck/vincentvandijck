import '../styles/index.less'

// Core
import Head from 'next/head'
import fetchContent from '../lib/fetch-content'
import withCacheControl from '../lib/with-cache-control'

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

Page.getInitialProps = withCacheControl(({ req }) => {
	const graphqlQuery = `{
		contact {
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

export default Page
