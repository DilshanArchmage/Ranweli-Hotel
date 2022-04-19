import React from "react";
import { useState } from "react";
import "./MobileMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MobileMenu() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className="mobile-menu">
			<FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)} />
		</nav>
	);
}
