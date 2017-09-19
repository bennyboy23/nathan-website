import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <div>
            <nav className="navbar-fixed transparent z-depth-0">
                <div className="nav-wrapper container">
                <a href="/" className="brand-logo">NH</a>
                    <ul className="right">
                        <li> <a href="/">there</a></li>
                    </ul>
                </div>
            </nav>
            </div>                    
        );
    }
}

export default Header;