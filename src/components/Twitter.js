import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'
// var Timeline = require('react-twitter-widgets').Timeline
 
class Twitter extends Component {
    render() {
        return (
            <div className="twitterContainer">
            <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'NathMakesNoise'
            }}
            options={{
                height: '600'
            }}
            />
            </div>
        );
    }
}

export default Twitter;