import React from "react";
import { Link } from "react-router-dom";
import img from "./kalam-academy.svg";

const Header2 = () => {
	return (
		
		<nav className="header2">
			<Link to="/courses"><h3>Courses</h3></Link>
			<Link to="/">
				<img className="logo" src={img} alt="#" />
			</Link>
			<Link to="/about-us"><h3>About</h3></Link>
		</nav>
	);
};

export default Header2;
