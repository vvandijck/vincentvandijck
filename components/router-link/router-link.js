import PropTypes from 'prop-types'
import { Children, cloneElement } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const RouterLink = withRouter(({ activeClass, children, router, ...props }) => {
	const child = Children.only(children)
	const linkPathname = typeof props.href === 'string' ? props.href : props.href.pathname || null
	let className = child.props.className || ''

	if (router.pathname === linkPathname && activeClass) {
		className = `${className} ${activeClass}`.trim()
	}

	return <Link {...props}>{cloneElement(child, { className })}</Link>
})

RouterLink.propTypes = {
	activeClass: PropTypes.string,
	children: PropTypes.node,
	router: PropTypes.object,
	props: PropTypes.object,
}

export default RouterLink
