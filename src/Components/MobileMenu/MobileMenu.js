import React from "react";
import { useState } from "react";
import "./MobileMenu.css";


//import logo from "../../assests/Images/Ranweli_Logo.png";
import { Navbar, Nav, Container, Row } from "react-bootstrap";

export default function MobileMenu() {
	return (
		
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className="mobile-menu"
			>
				<Container>
					<Navbar.Brand href="/">
						<img src="../../assests/Images/Ranweli_Logo.png" className="nav-logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav mobile-menu" />
					<Navbar.Collapse id="responsive-navbar-nav nav-collapse">
						<Nav>
						<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/activity">Activity</Nav.Link>
						
							<Nav.Link href="/resort">The Resort</Nav.Link>
							<Nav.Link href="/accomadation">Accomadation</Nav.Link>
							<Nav.Link href="/environment">Environment Policies</Nav.Link>
							<Nav.Link href="/ayuweda">Ayurveda</Nav.Link>
							<Nav.Link href="/wedding">Weddings</Nav.Link>
							<Nav.Link href="/reservation">Reservation</Nav.Link>
							<Nav.Link href="/about">About Us</Nav.Link><br></br>
							<Nav.Link href="/parnters">Our Partners</Nav.Link>
							<Nav.Link href="/award">Award & Recognition</Nav.Link>
							<Nav.Link href="http://ranweliholidayvillage.blogspot.com/">Blog</Nav.Link>
							<Nav.Link href="/whatsnew">What's New</Nav.Link>
							<Nav.Link href="/gallery">Gallery</Nav.Link>
							<Nav.Link href="/offers">Special Offers</Nav.Link>
							<Nav.Link href="/contact">Contact Us</Nav.Link>
							
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		
	);
}
