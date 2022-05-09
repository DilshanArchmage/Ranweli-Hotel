import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import bird from "../../assests/Images/kingfish.png";
import special_offer_inner from "../../assests/Images/special_offer_inner.jpeg";
import Footer from "../Footer/Footer";
import './Offers.css'

export default function Offers() {
  return (
    <div>
        <Container>
				<Row className=" oh">
        <img width="100%vw" style={{padding:'0px'}} src={special_offer_inner} />

					<div className="col-md-8">
						<div className="uper-body">
							

							<h2 className="home-welcome">Special Offers</h2>
							<br></br>
						
						<div className="welcome-body">
					<p>No special offer available at the moment.</p>
						
							<br></br>	<br></br>
						</div>
					</div>

					<div className="col-md-4">
						
					
					
					</div>
					</div>
					<br></br>
					<br></br>
				</Row>

				
			</Container>
			<Footer />
    </div>
  )
}