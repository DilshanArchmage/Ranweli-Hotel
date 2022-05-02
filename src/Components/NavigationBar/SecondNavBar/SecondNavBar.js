import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./SecondNavBar.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function SecondNavBar() {
	return (
		<div>
			<div className="second-menu">
				< a href="/">Home</a>
				<a href="/activity">Activity</a>
				<a href="/resort">The Resort</a>
				<a href="/accomadation">Accomadation</a>
				<a href="/environment">Environment Policies</a>
				<a href="/ayurweda">Ayurveda</a>
				<a href="/wedding">Weddings</a>
				<a href="/reservation">Reservations</a>
			</div>
		</div>
	);
}
