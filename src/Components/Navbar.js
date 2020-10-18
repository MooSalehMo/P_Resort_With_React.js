import React, { Component } from "react";
import {NavLink, Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";


class Navbar extends Component {
	state = {
		isOpen: false,
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beatch resort" />
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links-show-nav" : "nav-links"} >
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/rooms">Rooms</NavLink></li>
          </ul>
        </div>
		  </nav>
		);
	}
}

//

export default Navbar;
