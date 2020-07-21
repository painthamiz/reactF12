import React from "react";
import "../styles/nav.css";
import Button from "react-bootstrap/Button";

function Nav() {
	return (
		<div className = "navbar">
			<img
				src="/images/optum-logo-vector-removebg-preview.png"
				alt="optum-logo"/> 
			<div className="justify-content-end">
				<a href="/"><Button variant="unique">Search</Button></a>
			</div>
		</div>
	);
}

export default Nav;
