import PropTypes from 'prop-types'
import Link from 'next/link'
import RouterLink from '../router-link/router-link'

const Header = () => (
	<header className="header">
		<div className="header__content container">
			<div className="header__logo">
				<Link href="/">
					<a>
						<span className="sr-only">Home</span>
						<img src="/svg/logo-alt.svg" width="50" height="35" />
					</a>
				</Link>
			</div>
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li>
						<RouterLink href="/about" activeClass="header__nav-list__link--active">
							<a className="header__nav-list__link">
								<span>About</span>
							</a>
						</RouterLink>
					</li>
					<li>
						<RouterLink href="/toolbox" activeClass="header__nav-list__link--active">
							<a className="header__nav-list__link">
								<span>Toolbox</span>
							</a>
						</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

Header.propTypes = {}

export default Header
