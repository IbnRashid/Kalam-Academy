import React from "react";
import { Link } from "react-router-dom";
// import img from "./logo.svg";

const Header = () => {
  return ( 
    <nav className="header">
			<Link to="/">
				<img className="logo"  alt="#" /> 
			</Link>
			<div className="nav-right">
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
  )
}

export default Header