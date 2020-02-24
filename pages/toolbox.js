import '../styles/index.less'

// Core
import Head from 'next/head'
import fetchContent from '../lib/fetch-content'
import withCacheControl from '../lib/with-cache-control'

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

Page.getInitialProps = withCacheControl(({ req }) => {
	const graphqlQuery = `{
		toolbox {
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
