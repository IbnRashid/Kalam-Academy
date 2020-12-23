import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import img from "./kaq.svg";

const Header = () => {
	return (
		<header>
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect >
				<Navbar.Brand href="/" className="py-0"><img className="kaimg" alt="something" src={img} /></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/about-us"><h5>About Us</h5></Nav.Link>
						<Nav.Link href="/courses"><h5>Courses</h5></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
