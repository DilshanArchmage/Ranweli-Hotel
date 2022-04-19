import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import pdfIcon from "../../assests/Images/pdfIcon.jpeg";
import bird from "../../assests/Images/kingfish.png";
import bs_nature_walk from "../../assests/Images/bs_nature_walk.jpeg";
import bs_butterfuly from "../../assests/Images/bs_butterfuly.jpeg";
import bs_boat_trip from "../../assests/Images/bs_boat_trip.jpeg";
import photo07 from "../../assests/Images/photo07.jpeg";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import seperator from "../../assests/Images/seperator.png";

export default function Aboutus() {
	return (
		<div>
			<Container>
				<Row className="h">
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">
								Visit of the World’s Leading Eco Lodge Architect – ARQ. Hitesh
								Mehta
							</h2>
						</div>
						<div className="welcome-body">
							<br></br>
						
								<Row>
									<div className="col-md-4">
										<br></br>
										<img src={photo07} />
									</div>
									<div className="col-md-8">
										<p
											className="activity-body"
											style={{ paddingLeft: "20px" }}
										>
											Hitesh Mehta, the world leading ecolodge architect visited
											Ranweli Holiday Village to research material for his book
											'Leading Ecolodges of the World'. Ranweli Holiday Village
											will be among 35 around the world and the only one from
											Sri Lanka to be included in this publication by Harper
											Collins..
										</p>
									</div>
								</Row>
								<div className="col-md-12">
									<p className="activity-body">
										The picture shows left to right Messrs. Chandra de Silva
										former CEO, Hitesh Mehta and R. S. Wijewardene- Chairman.
										Mr. Mehta is a landscape architect, environmental planner
										and worked at Edward D. Stone Jr. and Associates, Florida
										which is one of the leading Ecotourism planning and
										landscape architectural firms in the world.
									</p>
								</div>

								<div className="col-md-12">
									<p className="activity-body">
										Mr. Mehta has been consulted on the design of several eco
										lodges in Eastern Africa including the famous Lobolo Lodge
										on the western shores of Lake Turkana. Other consultancies
										inter alia include eco lodges in Guyana, West Indies,
										Panama, Egypt, Kerala and Florida. He has also worked with
										the European Union on the diversification of tourism in
										Kenya and with USAID on the development of eco lodge
										guidelines for the Red sea.
									</p>
								</div>
							
							<div className="col-md-12">
								<p className="activity-body">
									Mr. Mehta is a Senior Director of The International Ecotourism
									Society (TIES) Washington D.C, and adjunct Professor at
									Florida International University. He is also one of the
									leading professionals in the field of planning and designing
									of eco lodges, has written several research papers on the
									subject and speaks regularly at conferences around the world.
									His web site on eco lodges is www.eco-mon.com the only one of
									its kind on the Internet.
								</p>
							</div>
                            
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
