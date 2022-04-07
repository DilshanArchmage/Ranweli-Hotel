import React from "react";
import { Nav, Container, Navbar, Button, Row } from "react-bootstrap";
import logo from "../../assests/Images/Ranweli_Logo.png";
import "./Navigationbar.css";

export default function NavigationBar() {
	return (
		<div className="col-md-12 ">
			<Navbar collapseOnSelect expand="lg" className="navigation-bar">
				<Container className="">
					<Navbar.Brand href="/">
						<img src={logo} className="nav-logo" />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						{/* <Nav className="me-auto">
   
     </Nav> */}

						<div className="navlink-menu">
							<Nav>
								<Nav.Link href="/about">About Us</Nav.Link>
								<Nav.Link href="/parnters">Our Partners</Nav.Link>
								<Nav.Link href="/award">Awards & Recognition</Nav.Link>
								<Nav.Link href="#deets">Blog</Nav.Link>
								<Nav.Link href="/whatsnew">What's New</Nav.Link>
								<Nav.Link href="/gallery">Gallery</Nav.Link>
								<Nav.Link href="/offers">Special Offers</Nav.Link>
								<Nav.Link href="/contact">Contact us</Nav.Link>

								<div className="secondNav"></div>
							</Nav>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
