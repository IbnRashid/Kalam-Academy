import React from "react";
import { Link } from "react-router-dom";
import img from "./logo.svg";

const Header2 = () => {
	return (
		<nav className="header">
			<Link to="/">
				<img className="logo" src={img} alt="#" />
			</Link>
			<div>
				<Link className="nav-link" to="/courses">
					<h3>COURSES</h3>
				</Link>
				<Link className="nav-link" to="/about-us">
					<h3>ABOUT</h3>
				</Link>
				<Link className="nav-link login" to="#">
					<h3>LOGIN</h3>
				</Link>
			</div>
		</nav>
	);
};

export default Header2;
