import fetch from 'isomorphic-unfetch'

module.exports = ({ graphqlQuery }) => {
	return fetch('https://graphql.datocms.com', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${process.env.API_KEY}`,
		},
		body: JSON.stringify({
			query: graphqlQuery,
		}),
	})
		.then(response => response.json())
		.then(response => {
			if (response.errors) throw Error(JSON.stringify(response, null, 4))

			return response.data
		})
}
