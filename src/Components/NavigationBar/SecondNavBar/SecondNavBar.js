import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./SecondNavBar.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function SecondNavBar() {
	return (
		<div>
			<div className="second-menu secondnavlink-menu" >
				< a href="/" className="secondnavlink-menu">Home</a>
				<a href="/activity" className="secondnavlink-menu">Activity</a>
				<a href="/resort" className="secondnavlink-menu">The Resort</a>
				<a href="/accomadation" className="secondnavlink-menu">Accomadation</a>
				<a href="/environment" className="secondnavlink-menu">Environment Policies</a>
				<a href="/ayurweda" className="secondnavlink-menu">Ayurveda</a>
				<a href="/wedding" className="secondnavlink-menu">Weddings</a>
				<a href="/reservation" className="secondnavlink-menu">Reservations</a>
			</div>
		</div>
	);
}
