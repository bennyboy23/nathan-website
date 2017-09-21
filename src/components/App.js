import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../logo.svg';
import bgImage from '../background.svg';
import '../App.css';
import Landing from './Landing';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Header from './Header';
import Twitter from './Twitter';
import Footer from './Footer';
import Showreel from './Showreel';
import Gallery from './Gallery';
import Contact from './Contact';

class App extends Component {
	render() {
		return (
			<div style={background}>
				<Header />
				<BrowserRouter>
					<div className="container">
						<Route exact path="/" component={Landing} />
						<Route exact path="/twitter" component={Twitter} />
						<Route exact path="/showreel" component={Showreel} />
						<Route exact path="/gallery" component={Gallery}/>
						<Route exact path="/contact" component={Contact}/>
					</div>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}
}

const background = {
	backgroundImage: 'url(' + bgImage + ')',
	height: '100%',
	width: '100%',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
};

export default App;
