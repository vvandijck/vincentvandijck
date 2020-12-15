import { GraphQLClient } from 'graphql-request'

export default function fetchContent({ query, variables, preview }) {
	const endpoint = `https://graphql.datocms.com/${preview ? 'preview' : ''}`
	const client = new GraphQLClient(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${process.env.NEXT_API_KEY}`,
		},
	})

	return client.request(query, variables)
}
