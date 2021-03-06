import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./Home.css";
// import bird from "../../assests/Images/kingfish.png";
import seperator from "../../assests/Images/seperator.png";
import amenitiesBanner from "../../assests/Images/amenitiesBanner.png";
import activitiesBanner from "../../assests/Images/activitiesBanner.png";
import video_gallary from "../../assests/Images/video_gallary.jpeg";
import rightl_side_banner from "../../assests/Images/rightl_side_banner.png";
import BirdsBanners from "../../assests/Images/150BirdsBanners.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import srilankanBanner from "../../assests/Images/srilankanBanner.png";

import Slider from "../Slider/Slider";

export default function Home() {
	return (
		<div>
			<div className="slider">
				<Slider />
			</div>
			<Container className="home">
				{/* <div className="col-md-12"> */}

				{/* </div> */}
				<Row className="h">
					<div className="col-md-8">
						{/* <img className="birdimg" src={bird} /> */}
						<div className="uper-body">
							<h2 className="home-welcome">
								Ayubowan!
								<span className="home-welcomep ms-2">Welcome to Ranweli</span>
							</h2>
							{/* <p className="home-welcomep">Welcome to Ranweli</p> */}

							<div className="welcome-body">
								<p className="">
									<b>Ranweli Holiday Village</b> is an{" "}
									<b>eco-friendly resort located </b>on a 22-acre peninsula
									where mangrove forests and winding rivers converge to meet the
									sea. Located only{" "}
									<b>18 kms from Colombo’s International Airport</b>, Ranweli is
									the perfect base to explore the fascinating history, culture
									and nature of <b>Sri Lanka.</b>
								</p>

								<a href="/resort" style={{ textDecoration: "none" }}>
									<p className="home-link" href="/qq">
										Read More ....
									</p>
								</a>
							</div>

							<Row>
								<div className="col-md-12">
									<img className="separator img-fluid" src={seperator } />
								</div>
							</Row>
							<Row>
								<div className="col-md-6 ml-auto">
									<h3 className="sub-headers">
										<b>Facilities</b>
									</h3>
									<img
										className="banner1 img-fluid mr-auto"
										width="100%vw"
										style={{ padding: "0px" }}
										src={amenitiesBanner } 
									/>
									<div className="list1 ">
										<ul>
											<a href="/resort/?#r1" className="links">
												<li> Restaurant and Bars</li>
											</a>
											<a href="/resort/?#r2" className="links">
												<li> Sports Facilities</li>
											</a>
											<a href="/resort/?#r4" className="links">
												<li> Ayurvedic Centre</li>
											</a>
											<a href="/resort/?#r3" className="links">
												<li> Eco/Jewellery Shop</li>
											</a>
											<a href="/resort/?#r5" className="links">
												<li> Beachfront Pool</li>
											</a>
											<a href="/resort/?#r6" className="links">
												<li> Evening Entertainment</li>
											</a>
											<a href="/resort" className="home-link2">
												<p>More Facilities</p>
											</a>
										</ul>
									</div>
								</div>
								<div className="col-md-6 ml-auto">
									<h3 className="sub-headers">
										<b>Activities</b>
									</h3>
									<img
										className="banner1 img-fluid mr-auto"
										width="100%vw"
										style={{ padding: "0px" }}
										src={activitiesBanner}
									/>
									<div className="list2 mr-auto">
										<ul>
											<a href="/resort/?#bird" className="links">
												<li> Bird Watching</li>
											</a>
											<a href="/resort" className="links">
												<li> Nature Walk</li>
											</a>
											<a href="/resort" className="links">
												<li> Cycling</li>
											</a>
											<a href="/resort" className="links">
												<li> River Cruise</li>
											</a>
											<a href="/resort" className="links">
												<li> Tours Outside Ranweli</li>
											</a>
											<a href="/resort" className="links">
												<li> Craft Demonstrations</li>
											</a>
											<a href="/resort" className="links">
												<li> Butterfly Watching</li>
											</a>
											<a href="/resort" className="home-link2">
												<p>More Activities</p>
											</a>
										</ul>
									</div>
								</div>
							</Row>
							<Row>
								<div className="col-md-12">
									<img className="separator img-fluid" src={seperator }  />
								</div>
							</Row>
<br></br>
							<div className="video-gallery col-md-12">
								<a href="/video">
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
								src={Tourism_Awards }
							/>
							<p className="welcome-body1">
								Ranweli Holiday Village has been recognized as a 2013 Wild Asia
								Responsible Tourism Awards Finalist.
							</p>
							<a
								href="http://wildasia.org/wp-signup.php?new=tourism"
								className="home-link3"
							>
								<p>Click here for more information</p>
							</a>
							<Row>
								<div className="col-md-12">
									<img className="separator img-fluid" src={seperator} />
								</div>
							</Row>
							<a href="/resort">
								<img
									width="100%vw"
									className="banner6 img-fluid mr-auto"
									src={srilankanBanner}
								/>
							</a>
							<a href="/resort">
								<img
									width="100%vw"
									style={{ paddingTop: "20px" }}
									className="banner6 img-fluid mr-auto"
									src={BirdsBanners}
								/>
							</a>

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
							Times.
						</p>
						<a href="/" style={{ textDecoration: "none" }}>
							<p className="home-link" href="/qq">
								Read More ....
							</p>
						</a>
					</div>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}
