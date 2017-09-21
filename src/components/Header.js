import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar-fixed transparent z-depth-0">
					<div className="nav-wrapper container">
						<a href="/" className="brand-logo">
							NH
						</a>
						<ul className="right nav-content">
							<li>
								{' '}
								<a href="/">
									<i className="large material-icons">home</i>
								</a>
							</li>
							<li>
								<a href="/showreel">Showreel</a>
							</li>
							<li>
								<a href="/gallery">Gallery</a>
							</li>
							<li>
								<a href="/twitter">Social Media</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
