import React, { Component } from 'react';
import { Mention } from 'react-twitter-widgets';
class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<footer className="page-footer transparent">
					<div className="footer-copyright">
						<div className="container">
							© Nathan Hamilton 2017	
						</div>
            <div className="container">
            <Mention username="NathanMakesNoise" />
          </div>          
          </div>
				</footer>
			</div>
		);
	}
}

export default Footer;
