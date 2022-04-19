import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

import seperator from "../../assests/Images/seperator.png";
import bird from "../../assests/Images/kingfish.png";
import responsibleTravelBanner from "../../assests/Images/responsibleTravelBanner.png";
import sustainableTourismBanner from "../../assests/Images/sustainableTourismBanner.png";
import environmentalBanner from "../../assests/Images/environmentalBanner.png";
import contributionBanner2 from "../../assests/Images/contributionBanner2.png";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import inner_banner09 from "../../assests/Images/inner_banner09.jpeg";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import srilankanBanner from "../../assests/Images/srilankanBanner.png";
import BirdsBanners from "../../assests/Images/150BirdsBanners.png";

export default function Videos() {
	return (
		<div>
			<Container>
				<Row className="h">
					<div className="col-md-12"></div>
					<div className="col-md-12">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Videos</h2>
						</div>
						<div className="welcome-body">
							<div className="col-md-12">
								<p className="title2">
									Ranweli Holiday Village, Negombo , Sri Lanka
								</p>
								<video width="100%vh" height="340" controls>
									<source
										src="hhttps://youtu.be/bF_AfJ4QBPo"
										type="video/mp4"
									/>
								</video>
							</div>

							<p className="title2">Ranweli Holiday Village Sri Lanka</p>
							<video width="100%vh" height="340" controls>
								<source src="https://youtu.be/sTFrWsOGFBc" type="video/mp4" />
							</video>

							<p className="title2">Fine Dine at Ranweli</p>
							<video width="100%vh" height="340" controls>
								<source src="https://youtu.be/sTFrWsOGFBc" type="video/mp4" />
							</video>
							<br></br>

							<p className="title2">Live with the Nature of Ranweli</p>

							<video width="100%vh" height="340" controls>
								<source src="https://youtu.be/sTFrWsOGFBc" type="video/mp4" />
							</video>
							<br></br>

							<p className="title2">Never be bored at Ranweli</p>

							<video width="100%vh" height="340" controls>
								<source src="https://youtu.be/sTFrWsOGFBc" type="video/mp4" />
							</video>
							<br></br>
							<p className="title2">Village explorer</p>

							<video width="100%vh" height="340" controls>
								<source src="https://youtu.be/sTFrWsOGFBc" type="video/mp4" />
							</video>
							<br></br>
							<p className="title2">Calm, Quiet and Relaxr</p>

							<video width="100%vh" height="340" controls>
								<source src="https://youtu.be/sTFrWsOGFBc" type="video/mp4" />
							</video>
							<br></br>
						</div>
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
