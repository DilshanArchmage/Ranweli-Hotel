import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./Home.css";
import bird from "../../assests/Images/kingfish.png";
import seperator from "../../assests/Images/seperator.png";
import amenitiesBanner from "../../assests/Images/amenitiesBanner.png";
import activitiesBanner from "../../assests/Images/activitiesBanner.png";
import video_gallary from "../../assests/Images/video_gallary.jpeg";
import rightl_side_banner from "../../assests/Images/rightl_side_banner.png";
import BirdsBanners from "../../assests/Images/150BirdsBanners.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import srilankanBanner from "../../assests/Images/srilankanBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";

export default function Home() {
	return (
		<div>
			<Container className="home">
				<Row className="h">
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Ayubowan!</h2>
							<p className="home-welcomep">Welcome to Ranweli</p>
						</div>
						<div className="welcome-body">
							<p className="">
								<b>Ranweli Holiday Village</b> is an{" "}
								<b>eco-friendly resort located </b>on a 22-acre peninsula where
								mangrove forests and winding rivers converge to meet the sea.
								Located only <b>18 kms from Colombo’s International Airport</b>,
								Ranweli is the perfect base to explore the fascinating history,
								culture and nature of <b>Sri Lanka.</b>
							</p>

							<a href="/resort" style={{ textDecoration: "none" }}>
								<p className="home-link" href="/qq">
									Read More ....
								</p>
							</a>

							<img className="img-fluid separator" src={seperator} />
							<Row>
								<div className="col-md-6 ml-auto">
									<h3 className="sub-headers">
										<b>Facilities</b>
									</h3>
									<img
										className="banner1 img-fluid mr-auto"
										src={amenitiesBanner}
									/>
									<div className="list1 ">
										<ul>
											<a href="/sss" className="links">
												<li> Restaurant and Bars</li>
											</a>
											<a href="/sss" className="links">
												<li> Sports Facilities</li>
											</a>
											<a href="/sss" className="links">
												<li> Ayurvedic Centre</li>
											</a>
											<a href="/sss" className="links">
												<li> Eco/Jewellery Shop</li>
											</a>
											<a href="/sss" className="links">
												<li> Beachfront Pool</li>
											</a>
											<a href="/sss" className="links">
												<li> Evening Entertainment</li>
											</a>
											<a href="/sss" className="home-link2">
												<p>More Facilities</p>
											</a>
										</ul>
									</div>
								</div>
								<div className="col-md-6 banner2 ml-auto">
									<h3 className="sub-headers2">
										<b>Activities</b>
									</h3>

									<img
										className=" bannerimg2 img-fluid mr-auto"
										src={activitiesBanner}
									/>
									<div className="list2 mr-auto">
										<ul>
											<a href="/sss" className="links">
												<li> Bird Watching</li>
											</a>
											<a href="/sss" className="links">
												<li> Nature Walk</li>
											</a>
											<a href="/sss" className="links">
												<li> Cycling</li>
											</a>
											<a href="/sss" className="links">
												<li> River Cruise</li>
											</a>
											<a href="/sss" className="links">
												<li> Tours Outside Ranweli</li>
											</a>
											<a href="/ssdd" className="links">
												<li> Craft Demonstrations</li>
											</a>
											<a href="/sss" className="links">
												<li> Butterfly Watching</li>
											</a>
											<a href="/sss" className="home-link2">
												<p>More Activities</p>
											</a>
										</ul>
									</div>
								</div>
							</Row>
							<img className="separator" src={seperator} />

							<div className="col-md-12">
								<a href="/sss">
									<img
										className="banner3 img-fluid ml-auto"
										src={video_gallary}
									/>
								</a>
							</div>
							<br></br>
							<br></br>
							<Button
								variant="warning"
								href="https://web.archive.org/web/20200223120827/http:/ranweli.com/images/RANWELI_BROCHURE.pdf"
								className="btn"
							>
								Click here to view Ranweli brochure »
							</Button>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
						</div>
					</div>

					
					<div className="col-md-4">
						<h3 className="sub-headers1">
							<b>Holiday Check Award</b>
						</h3>
						<p className="welcome-body1">English German</p>
						<h3 className="sub-headers1">
							<b>Latest Achievement</b>
						</h3>

						<div className="col-md-12">
							<img
								style={{ paddingTop: "20px" }}
								className="banner6 img-fluid mr-auto"
								src={rightl_side_banner}
							/>
							<img
								style={{ paddingTop: "20px" }}
								className="banner6 img-fluid mr-auto"
								src={Tourism_Awards}
							/>
							<p className="welcome-body1">
								Ranweli Holiday Village has been recognized as a 2013 Wild Asia
								Responsible Tourism Awards Finalist.
							</p>
							<a href="/" className="home-link2">
								<p>Click here for more information</p>
							</a>
							<img className="separator2" src={seperator} />
							<img
								style={{ paddingTop: "20px" }}
								className="banner6 img-fluid mr-auto"
								src={srilankanBanner}
							/>
							<img
								style={{ paddingTop: "20px" }}
								className="banner6 img-fluid mr-auto"
								src={BirdsBanners}
							/>

							<p style={{ paddingTop: "30px" }} className="sub-headers1">
								News
							</p>
							<p className="title1">
								Sri Lanka, world's second best island - NatGeo
							</p>

							<p className="welcome-body2">
								National Geographic channel ranked Sri Lanka as the number two
								best island in the world.
							</p>
							<a href="/" style={{ textDecoration: "none" }}>
								<p className="home-link" href="/qq">
									Read More ....
								</p>
							</a>
						</div>
						<p className="title1">
							Sri Lanka, the number 1 Place to go in 2010
						</p>

						<p className="welcome-body2">
							Sri Lanka was ranked the number one place to go to by The New York
							Times..
						</p>
						<a href="/" style={{ textDecoration: "none" }}>
							<p className="home-link" href="/qq">
								Read More ....
							</p>
						</a>
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
