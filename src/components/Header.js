import React from "react";
import { Link } from "react-router-dom";
import KAlogo from "../Images/KAlogo.svg";

const Header = () => {
  return ( 
    <nav className="header">
			<Link to="/">
				<img className="logo" src={KAlogo} alt="#" /> 
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