import React from "react";
import { LinkContainer } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import img from "./kaq.svg";

const Header = () => {
	return (
		<header>
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
				<LinkContainer to="/">
					<Navbar.Brand className="py-0">
						<img className="kaimg" alt="something" src={img} />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/about-us">
							<Nav.Link>
								<h5>About Us</h5>
							</Nav.Link>
						</LinkContainer>
						<Nav.Link href="/courses">
							<h5>Courses</h5>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
