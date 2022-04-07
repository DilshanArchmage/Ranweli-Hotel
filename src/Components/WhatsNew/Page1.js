import React from "react";

import { Col, Row, Container, Button, Pagination } from "react-bootstrap";
import "./WhatsNew.css";

import bird from "../../assests/Images/kingfish.png";
import seperator from "../../assests/Images/seperator.png";
import room_types from "../../assests/Images/room_types.jpeg";
import timthumb1 from "../../assests/Images/timthumb (1).jpeg";
import timthumb2 from "../../assests/Images/timthumb (2).jpeg";
import timthumb3 from "../../assests/Images/timthumb (3).jpeg";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import timthumb from "../../assests/Images/timthumb.jpeg";

export default function Page1() {
  return (
    <div>
    <Container>
        <Row className="h">
        
            <div className="col-md-8">
            <div className="d-flex">
							

							<h2 className="home-welcome"></h2>
						</div>
						<div className="welcome-body">
							<p className="title2">
								<b>
									Ranweli receives EU SWITCH - Asia Greening Hotels AWARDS 2012
									Certificate
								</b>
							</p>
							<Row>
								<div className="col-md-6">
									<img className="timthumb" src={timthumb} />
								</div>
								<div className="col-md-6">
									<p className="activity-body">
										Ranweli receives EU SWITCH - Asia Greening Hotels AWARDS
										2012 Certificate of Merit for Energy and Water Conservation
										and Waste Management in the Large Hotels (over 50 rooms) &
										Boutique Hotels Cate ........
									</p>
									<Button variant="primary" className="submit1" type="submit">
										Read More
									</Button>
								</div>
							</Row>
							<br></br>

							<p className="title2">
								<b>The International School of Kuala Lumpur visited Ranweli</b>
							</p>
							<Row>
								<div className="col-md-6">
									<img className="timthumb" src={timthumb1} />
								</div>
								<div className="col-md-6">
									<p className="activity-body">
										The International School of Kuala Lumpur visited Ranweli for
										the 3rd consecutive year from the 20th of October to the
										26th of October 2012. The kids enjoyed different activities
										organized by the Ranwe ........
									</p>
									<Button variant="primary" className="submit1" type="submit">
										Read More
									</Button>
								</div>
							</Row>
							<br></br>

							<p className="title2">
								<b>Ranweli receives Trip Advisor Certificate</b>
							</p>

							<Row>
								<div className="col-md-6">
									<img className="timthumb" src={timthumb2} />
								</div>
								<div className="col-md-6">
									<p className="activity-body">
										Ranweli Holiday Village has achieved a Trip Advisor rating
										of By its guests and therefore has been awarded a
										Certificate of Excellence For the Year of 2012
									</p>
									<Button variant="primary" className="submit1" type="submit">
										Read More
									</Button>
								</div>
							</Row>
							<br></br>

							<p className="title2">
								<b>Avurudu 2012 at Ranweli</b>
							</p>
							<Row>
								<div className="col-md-6">
									<img className="timthumb" src={timthumb3} />
								</div>
								<div className="col-md-6">
									<p className="activity-body">
										Ranweli Holiday Village has achieved a Trip Advisor rating
										of By its guests and therefore has been awarded a
										Certificate of Excellence For the Year of 2012
									</p>
									<Button variant="primary" className="submit1" type="submit">
										Read More
									</Button>
								</div>
							</Row>

							<br></br>
							
						</div>
					</div>
               
                
            

            <div className="col-md-4">
               
            </div>
        </Row>
        <Footer />
    </Container>
</div>
  )
}
