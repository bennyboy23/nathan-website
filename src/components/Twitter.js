import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
// var Timeline = require('react-twitter-widgets').Timeline

class Twitter extends Component {
	render() {
		return (
			<div className="row valign-wrapper">
				<div className=" col s4">
					<Timeline
						dataSource={{
							sourceType: 'profile',
							screenName: 'NathMakesNoise',
						}}
						options={{
							height: '600',
						}}
					/>
				</div>
				<div className="col s2" />
        <div className="col s4">
        </div>
			</div>
		);
	}
}

export default Twitter;
