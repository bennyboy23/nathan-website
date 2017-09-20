import React, { Component } from 'react';
import Youtube from 'react-youtube';

class Showreel extends Component {
	state = {};
	render() {
		const opts = {
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1,
			},
		};
		return (
			<div className="video-container">
				<Youtube videoId="BBGEG21CGo0" opts={opts} />
			</div>
		);
	}
}

export default Showreel;
