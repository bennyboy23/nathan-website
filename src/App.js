import React, { Component } from 'react';
import logo from './logo.svg';
import bgImage from './background.jpg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Header from './components/Header';
import Twitter from './components/Twitter';


class App extends Component {
  render() {
    return (
      <div style={background}>
      <Header />
      </div>
    );
  }
}

const background = {
  backgroundImage: 'url('+ bgImage + ')',
  height: '100%',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default App;
