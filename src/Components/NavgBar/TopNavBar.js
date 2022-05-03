import React from "react";
import "./TopNavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assests/Images/Ranweli_Logo.png";
import ranweli_fb_icon from "../../assests/Images/ranweli_fb_icon.png";
import ranweli_flickr_icon from "../../assests/Images/ranweli_flickr_icon.png";

export default function TopNavBar() {
	return (
		<div>
			<div className="navigation-bar">
				<Navbar
					collapseOnSelect
					className="top-nav"
					expand="lg"
					bg=""
					variant="dark"
				>
					<Container>
						<Navbar.Brand href="/">
							<img src={logo}  className="nav-logo" />
                            
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav id="container">
                            {/* <img src={ranweli_fb_icon} className="fb-link" />
                            <img src={ranweli_flickr_icon} className="fb-link" /> */}
							
                                <Nav.Link href="/about">About Us</Nav.Link>
								<Nav.Link href="/parnters">Our Partners</Nav.Link>
								<Nav.Link href="/award">Awards & Recognition</Nav.Link>
								<Nav.Link href="http://ranweliholidayvillage.blogspot.com/">Blog</Nav.Link>
								<Nav.Link href="/whatsnew">What's New</Nav.Link>
								<Nav.Link href="/gallery">Gallery</Nav.Link>
								<Nav.Link href="/offers">Special Offers</Nav.Link>
								<Nav.Link href="/contact">Contact us</Nav.Link>

								<div className="mobile-menu ">
									<Nav.Link href="/" >
										Home
									</Nav.Link>
									<Nav.Link href="/activity" >
										Activity
									</Nav.Link>
									<Nav.Link href="/resort" >
										The Resort
									</Nav.Link>
									<Nav.Link href="/accomadation" >
										Accomadation
									</Nav.Link>
									<Nav.Link href="/environment" >
										Environment Policies
									</Nav.Link>
									<Nav.Link href="/ayurweda" >
										Ayurveda
									</Nav.Link>
									<Nav.Link href="/wedding" className="secondnavlink-menu">
										Weddings
									</Nav.Link>
									<Nav.Link href="/reservation" className="secondnavlink-menu">
										Reservations
									</Nav.Link>
                             
                               </div>
							

								<div className="secondNav"></div>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	);
}
