import React from "react";
import { Nav, Container, Navbar, Button, Row } from "react-bootstrap";
import logo from "../../assests/Images/Ranweli_Logo.png";
import "./Navigationbar.css";
import { AiFillFacebook } from "react-icons/ai";

export default function NavigationBar() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className="navigation-bar">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} className="nav-logo" />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						{/* <Nav className="me-auto">
   
     </Nav> */}

						<div className="navlink-menu">
							<div style={{ textAlign: "right", paddingTop: "-5px" }}>
								{/* <AiFillFacebook /> */}
							</div>
							<Nav>
								<Nav.Link className="nav-menu" href="#deets">
									About Us
								</Nav.Link>
								<Nav.Link href="#deets">Our Partners</Nav.Link>
								<Nav.Link href="#deets">Awards & Recognition</Nav.Link>
								<Nav.Link href="#deets">Blog</Nav.Link>
								<Nav.Link href="#deets">What's New</Nav.Link>
								<Nav.Link href="#deets">Gallery</Nav.Link>
								<Nav.Link href="#deets">Special Offers</Nav.Link>
								<Nav.Link href="#deets">Contact us</Nav.Link>

								<div className="secondNav"></div>
							</Nav>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
