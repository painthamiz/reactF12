import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../styles/screenbtns.css";
function CustBut() {
	return (
		<div className="btns row justify-content-md-center">
			<Link to="/output" className='col-md-auto'>
				<Button variant="warning">Main Screen Details</Button>
			</Link>
			<Link to="/phone" className='col-md-auto'>
				<Button variant="light">Phone Details</Button>
			</Link>

			{/* <Button variant="success">Main Screen Details</Button> */}
			<Link to="/contrOrg" className='col-md-auto'>
				<Button variant="light">Contract Org Details</Button>
			</Link>
		</div>
	);
}
export default CustBut;
