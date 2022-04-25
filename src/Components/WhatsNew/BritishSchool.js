import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import pdfIcon from "../../assests/Images/pdfIcon.jpeg";
import bird from "../../assests/Images/kingfish.png";
import inner_banner06 from "../../assests/Images/inner_banner06.jpeg";

import bs_nature_walk from "../../assests/Images/bs_nature_walk.jpeg";
import bs_butterfuly from "../../assests/Images/bs_butterfuly.jpeg";
import bs_boat_trip from "../../assests/Images/bs_boat_trip.jpeg";
import craftDemonstrationsBanner from "../../assests/Images/craftDemonstrationsBanner.png";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import seperator from "../../assests/Images/seperator.png";
import "./WhatsNew.css";


export default function Aboutus() {
	return (
		<div>
			<Container>
				<Row className="h">
				<img width="100%vw" style={{padding:'0px'}} src={inner_banner06} />
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">
								The British School of Colombo Visited Ranweli
							</h2>
						</div>
						<div className="welcome-body">
							<br></br>
							<p className="activity-body">
								The British School of Colombo visited Ranweli for an Educational
								Tour for the 4th consecutive year in November 2012. All tours
								were professionally organized and conducted by the Eco
								Department of Ranweli Holiday Village.
							</p>
							<Row>
								<div className="col-md-4">
									<img src={bs_nature_walk} />
								</div>
								<div className="col-md-8">
									<p className="kactivity-body" style={{ paddingLeft: "20px" }}>
										The kids were enthralled by the Natural environment around
										the resort while on a nature tour. They observed terrestrial
										plants, the rich mangrove eco system and the importance of
										their role in the environment.
									</p>
								</div>
							</Row>
							<Row>
								<div className="col-md-4">
									<br></br>
									<img src={bs_butterfuly} />
								</div>
								<div className="col-md-8">
									<p className="wactivity-body" style={{ paddingLeft: "20px" }}>
										At the Butterfly Corner at Ranweli the students observed the
										"life cycle of the Butterfly" including their host plant and
										food plant.
									</p>
								</div>
							</Row>
							<Row>
								<div className="col-md-4">
									<br></br>
									<img src={bs_boat_trip} />
								</div>
								<div className="col-md-8">
									<p className="wactivity-body" style={{ paddingLeft: "20px" }}>
										
										While on a boat ride on the Gin Oya the children learnt
										about the unique eco system of the Mangrove Community.
									</p>
									<br></br>
								</div>
							</Row>
							<br></br> <br></br> <br></br> <br></br>
						</div>
					</div>

					<div className="col-md-4">
						<Row>
							<div className="col-md-12 whts-tab">
								<table>
									<tr>
										<th>Write Up</th>
										<th></th>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612134604/http://ranweli.com/images/write_up/honeymooh_in_paradise.pdf"
										>
											<td> Honeymoon in paradise</td>
										</a>

										<td>
											<img src={pdfIcon} />
										</td>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612111053/http://ranweli.com/images/write_up/bird_friendly_eco_resort.pdf"
										>
											<td>Bird friendly eco resort</td>
										</a>
										<td>
											<img src={pdfIcon} />
										</td>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612080933/http://ranweli.com/images/write_up/ranweli_among_top_10_eco-destinations.pdf"
										>
											<td>Ranweli among top 10 eco-destinations</td>
										</a>
										<td>
											<img src={pdfIcon} />
										</td>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612150301/http://ranweli.com/images/write_up/Ranweli_golden_lure.pdf"
										>
											<td>Ranweli's golden lure</td>
										</a>
										<td>
											<img src={pdfIcon} />
										</td>
									</tr>
								</table>
							</div>
						</Row>
					</div>
					<br></br>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
