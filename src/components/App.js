import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "../logo.svg";
import bgImage from "../background.jpg";
import "../App.css";
import Landing from "./Landing";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Header from "./Header";
import Twitter from "./Twitter";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={background}>
          <Header />
          <div className="container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/Twitter" component={Twitter}/>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const background = {
  backgroundImage: "url(" + bgImage + ")",
  height: "100%",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default App;
