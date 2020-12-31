import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import img from "./logo.svg";

const Header = () => {
	return (
		<header >
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
				<LinkContainer to="/">
					<Navbar.Brand className="py-0">
						<img className="logo" alt="something" src={img} />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/about-us">
							<Nav.Link>
								<h4>About Us</h4>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/courses">
							<Nav.Link href="/courses">
								<h4>Courses</h4>
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
