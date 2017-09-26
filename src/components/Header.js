import React, { Component } from "react";
import nathan from "../nathan.jpg";

class Header extends Component {
	render() {
	  
    return (
      <div>
        <nav className="navbar-fixed transparent z-depth-1">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <img src={nathan} className="circle responsive-img App-logo" />
            </a>
            <ul className="right nav-content hide-on-med-and-down">
              <li>
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
			<ul id="slide-out" className="side-nav">
            <li>
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
            <a href="#" data-activates="slide-out" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
		
      </div>
    );
  }
}

export default Header;
