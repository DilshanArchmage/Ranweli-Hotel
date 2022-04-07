import React from "react";

import { Col, Row, Container, Button } from "react-bootstrap";

import bird from "../../assests/Images/kingfish.png";
import partnerlogos from "../../assests/Images/partnerlogos.png";
import room_types from "../../assests/Images/room_types.jpeg";
import cyclingBanner from "../../assests/Images/cyclingBanner.png";
import riverCruiseBanner from "../../assests/Images/riverCruiseBanner.png";
import craftDemonstrationsBanner from "../../assests/Images/craftDemonstrationsBanner.png";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import accomodation from "../../assests/Images/accomodation.jpeg";

export default function Partners() {
	return (
		<div>
			<Container>
				<Row className=" h">
					<Row>
						<div className="col-md-12 row-fluid head-img">
							
						</div>
					</Row>

					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Our Partners</h2>
						</div>
						<div className="welcome-body">
							<p className="title2">
								<b>The International Ecotourism Society (TIES)</b>
							</p>

							<p className="activity-body">
								Ranweli is a sponsor member of The International Ecotourism
								Society (TIES), based in Washington DC, USA. This society is
								widely regarded as the pre-eminent organization in the field of
								Ecotourism according to the Wall Street Journal. Late Mr.
								Chandra de Silva, CEO of Ranweli, was invited in 1998 to the
								Advisory Board of TIES, and was elected to the Board of
								Directors in 2004.
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.ecotourism.org/" className="home-link2">
								<p>www.ecotourism.org</p>
							</a>

							<p className="title2">
								<b>Ecoclub</b>
							</p>

							<p className="activity-body">
								Ranweli is an ecolodge member of ecoclub.com. It was also the
								winner of the first annual ecolodge award, in 2004 for a
								bio-farming project at DBV Girls School.
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.ecoclub.com/" className="home-link2">
								<p>www.ecoclub.com</p>
							</a>

							<p className="title2">
								<b>Responsibletravel.com</b>
							</p>

							<p className="activity-body">
								Consequent to winning the British Airways Tourism for Tomorrow
								Awards in 2003, we were invited to be featured in this web site.
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.tourindia.com/htm/homepage.htm" className="home-link2">
								<p>www.responsibletravel.com</p>
							</a>

							<p className="title2">
								<b>Tour India</b>
							</p>

							<p className="activity-body">
								A leading Ecotourism tour operator in Kerala.
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.tourindia.com/htm/homepage.htm" className="home-link2">
								<p>www.tourindia.com</p>
							</a>
							<p className="title2">
								<b>Field Ornithology Group of Sri Lanka (FOGSL)</b>
							</p>

							<p className="activity-body">
								Field Ornithology Group of Sri Lanka (FOGSL) is a reputed NGO
								under the Department of Zoology, University of Colombo.
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.fogsl.net/" className="home-link2">
								<p>www.fogsl.net</p>
							</a>
							<p className="title2">
								<b>Birdlife International</b>
							</p>

							<p className="activity-body">
								We are an affiliate of Birdlife International
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.birdlife.org/" className="home-link2">
								<p>www.birdlife.org</p>
							</a>

							<br></br>

							<p>
								<br></br>
								<b>** WHITE-THROATED KINGFISHER </b>Halcyon smyrnensis
								S.Layasudu Pilihuduwa S.Kondaya 30cm. White throat and breast.
								Blue upperpart. BrR. All Zones.Very Common
							</p>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
						</div>
					</div>

					<div className="col-md-4">
						<Row>
							<div className="col-md-12">
								<img className="acco-img" src={partnerlogos} />
							</div>
						</Row>
					</div>

					<br></br>
					<br></br>
				</Row>

				<Footer />
			</Container>
		</div>
	);
}
