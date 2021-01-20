import React from "react";
import { Link } from "react-router-dom";
import img from "./logo.svg";

const Header2 = () => {
	return (
		
		<nav className="header">
			<Link className="nav-link" to="/courses"><h3>Courses</h3></Link>
			<Link to="/">
				<img className="logo" src={img} alt="#" />
			</Link>
			<Link className="nav-link" to="/about-us"><h3>About</h3></Link>
		</nav>
	);
};

export default Header2;
