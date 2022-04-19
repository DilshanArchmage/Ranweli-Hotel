import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./SecondNavBar.css";
import { NavLink } from "react-router-dom";

export default function SecondNavBar() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className="secondnavigation-bar">
				<Container>
					{/* <Navbar.Brand href="#home">
                <img src={logo} className="nav-logo" />
            </Navbar.Brand> */}

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						{/* <Nav className="me-auto">

</Nav> */}

						<div className="navlink-menu">
							<div style={{ textAlign: "right", paddingTop: "-5px" }}>
								
							</div>
							<div className="secondnavlink-menu">
								<Nav>
									<Nav.Link href="/">Home</Nav.Link>
									<Nav.Link href="/activity">Activity</Nav.Link>
									<Nav.Link href="/resort">The Resort</Nav.Link>
									<Nav.Link href="/accomadation">Accomadation</Nav.Link>
									<Nav.Link href="/environment">Environment Policies</Nav.Link>
									<Nav.Link href="/ayurweda">Ayurveda</Nav.Link>
									<Nav.Link href="/reservation">Weddings</Nav.Link>
									<Nav.Link href="/reservation">Reservations</Nav.Link>

									<div className="secondNav"></div>
								</Nav>
							</div>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
