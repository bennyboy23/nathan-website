import React, { Component } from 'react';
class Showreel extends Component {
	render() {
		return (
			<div className="video-container">
				<iframe
					width="800"
					height="600"
					src="https://www.youtube.com/embed/BBGEG21CGo0?autoplay=1"
					frameborder="0"
					allowfullscreen
				/>
			</div>
		);
	}
}

export default Showreel;
