import React, { Component } from 'react';
import $ from 'jquery';
class Gallery extends Component {
	componentDidMount() {
		$(document).ready(function() {
			$('.slider').slider();
		});
	}

	render() {
		return (
			<div className="row">
				<div className="fullscreen slider">
					<ul className="slides">
						<li>
							<img src="https://lorempixel.com/1920/1080/nature/1" />
							<div className="caption center-align">
								<h3>This is our big Tagline!</h3>
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
							</div>
						</li>
						<li>
							<img src="https://lorempixel.com/1920/1080/nature/2" />
							<div className="caption left-align">
								<h3>Left Aligned Caption</h3>
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
							</div>
						</li>
						<li>
							<img src="https://lorempixel.com/1920/1080/nature/3" />
							<div className="caption right-align">
								<h3>Right Aligned Caption</h3>
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
							</div>
						</li>
						<li>
							<img src="https://lorempixel.com/1920/1080/nature/4" />
							<div className="caption center-align">
								<h3>This is our big Tagline!</h3>
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Gallery;
