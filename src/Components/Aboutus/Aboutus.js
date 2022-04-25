import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

import bird from "../../assests/Images/kingfish.png";
import facebookbanner from "../../assests/Images/facebookbanner.png";
import flickrbanner from "../../assests/Images/flickrbanner.png";
import ranwelimap from "../../assests/Images/ranwelimap (2).png";
import inner_banner01 from "../../assests/Images/inner_banner01.jpeg";
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
					<img width="100%vw" style={{ padding: "0px" }} src={inner_banner01} />
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">About us</h2>
						</div>
						<div className="welcome-body">
							<p className="activity-body">
								Ranweli Holiday Village is an eco-friendly tourist resort fully
								committed to protect the environment.
							</p>
							<img className="separator" src={seperator} />
							<p className="title2">Our History</p>
							<p style={{ marginTop: "-20px" }} className="activity-body">
								Ranweli is considered an example of a property built more than
								25 years ago for traditional<i>“sun, sea and sand,”</i> which
								was completely transformed to become a model of environmental
								leadership and practice. The property was constructed in 1975
								using 100% local material and was based on the concept of a Sri
								Lankan village. It was refurbished in 1996 to meet the standards
								of an international Ecotourism facility and was further
								developed to provide facilities to offer an authentic
								soft-adventure experience, together with comfortable and rustic
								accommodation in idyllic surroundings.
							</p>
							<p className="title2">Our Mission</p>
							<p style={{ marginTop: "-20px" }} className="activity-body">
								We provide tranquil holidays with a nature and cultural
								experience
							</p>
							<p className="title2">Our Vision</p>
							<p style={{ marginTop: "-20px" }} className="activity-body">
								To be a Trail Blazer in Eco Tourism
								<br></br>
							</p>
							<p>
								<br></br>
								<i>
									<b>** WHITE-THROATED KINGFISHER </b>Halcyon smyrnensis
									S.Layasudu Pilihuduwa S.Kondaya 30cm. White throat and breast.
									Blue upperpart. BrR. All Zones.Very Common
								</i>
							</p>
							<br></br> <br></br>
						</div>
					</div>

					<div className="col-md-4">
						<div className="col-md-12">
							<a href="https://www.facebook.com/pages/Ranweli-Holiday-Village/176149999077507"><img width="100%vw" style={{ padding: "0px" }} src={facebookbanner} /></a>

							<a href='http://www.flickr.com/search/?q=ranweli'><img width="100%vw" style={{ padding: "0px" }} src={flickrbanner} /></a>
							<img width="100%vw" style={{ padding: "0px" }}  src={ranwelimap} />
						</div>
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
