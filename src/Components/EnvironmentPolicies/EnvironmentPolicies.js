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

export default function EnvironmentPolicies() {
	return (
		<div>
			<Container>
				<Row className="h">
				<img width="100%vw" style={{padding:'0px'}} src={inner_banner09} />

						
							
						
				
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Nature & Culture</h2>
						</div>
						<div className="welcome-body">
							<p className="activity-body">
								Sri Lanka is a green and fertile land of natural beauty with a
								tropical climate. Bio diversity the essence of an eco tourist
								destination is greater per square kilometer than any other
								country in Asia.
							</p>

							<p className="activity-body">
								Ranweli Holiday Village is an eco-friendly tourist resort
								committed to protecting the environment.
							</p>
							<p className="activity-body">
								We protect the natural habitat. The business operates and
								conducts operations in an environmentally friendly manner by
								using our resources efficiently and managing our waste and
								emissions to minimize the impact on the environment.
							</p>
							<p className="activity-body">
								By conducting regular meetings and through written
								communications, we make sure our employees, guests, suppliers
								and the public are aware of our eco-friendly policy. We design
								and maintain systems which are subject to continuous improvement
								in order to meet our short and long term environment protection
								goals.
							</p>
							<p className="activity-body">
								We undertake to comply government legislation and the
								expectations of the public in this regard. Let's save mother
								earth
							</p>
							<br></br>
							<img className="separator" src={seperator} />
							<br></br>

							<p className="title2">Responsible Travel</p>
							<img className="cycling" src={responsibleTravelBanner} />
							<p className="activity-body">
								Responsible Travel is a new way of travelling for those
								committed to respect and benefit local people and the
								environment.
							</p>
							<p className="activity-body">
								Our guests are encouraged to explore the unique eco-system of
								the mangrove habitat and the numerous indigenous aquatic and
								terrestrial plants in order to stimulate their interest in
								nature and introduce environmentally responsible tourism.
							</p>
							<p className="activity-body">
								During nature tours our clients are introduced to eco-friendly
								facilities and a detailed explanation of the eco-system is
								provided.
							</p>
							<p className="activity-body">
								Scientific information, written and verbal interpretation
								programs are provided to enhance the learning experience. A
								knowledge-based holiday with focus on conservation and
								sustainability of resources is thus achieved.
							</p>
							<p className="activity-body">
								Responsible Travel suits life's curious adventurers and
								enthusiasts.
							</p>

							<p className="title2">Sustainable Tourism</p>
							<img className="cycling" src={sustainableTourismBanner} />
							<p className="activity-body">
								Ranweli company directors and officials fulfill their
								obligations to society by lobbying provincial and central
								governmental authorities whenever possible to introduce
								environmentally friendly and sustainable tourism principles in
								policy making..
							</p>

							<p className="activity-body">
								The late Mr. Chandra de Silva, Director/CEO was the Founder
								President of the Ecotourism Society of Sri Lanka (ESSL) formed
								in 1999. He was invited as a visiting lecturer in Ecotourism for
								the Undergraduate Degree program in Forestry and Environment by
								the University of Sri Jayawardenapura a prestigious institution
								of higher learning in Sri Lanka. Mr. De Silva was also a member
								of the Board of Directors of The International Eco tourism
								Society [TIES] Washington D.C. and a Fellow of The Royal
								Geographical Society of the United Kingdom.
							</p>

							<p className="title2">Environmental Conservation</p>
							<img className="cycling" src={environmentalBanner} />
							<p className="activity-body">
								Ranweli is already well known for its Corporate Environmental
								Policies and commitment to conservation and environmental
								interpretation.
							</p>
							<p className="activity-body">
								<b>
									Our environmental conservation initiatives include the
									following:
								</b>
							</p>

							<ul className="activity-list1">
								<li style={{ listStyle: "circle",fontWeight:'normal'  }}>Solar energy for water heating</li>
								<li style={{ listStyle: "circle",fontWeight:'normal'  }}>Solid/liquid waste treatment technology</li>
								<li style={{ listStyle: "circle",fontWeight:'normal'  }}>Maximum use of recyclables</li>
								<li style={{ listStyle: "circle",fontWeight:'normal'  }}>Organic vegetable gardens</li>
							</ul>
							<br></br>

							<p className="title2">Contribution to the Community</p>
							<img className="cycling" src={contributionBanner2} />
							<p style={{ paddingTop: "20px" }}>
								<b>Local community</b>
							</p>
							<p style={{ paddingTop: "5px" }} className="activity-body">
								Ranweli has been able to establish a relationship with the local
								village by virtue of providing direct and indirect benefits to
								the community. Some of these are: use of primary building
								materials, contracting skilled and semi-skilled labour and
								purchase of vegetables and fruits, artifacts and arts and
								crafts.
							</p>
							<p className="activity-body">
								In July 2004, Ranweli received a €500 grant from Ecoclub{" "}
								<a className="home-link2" style={{textDecoration: "underline"}} href="https://ecoclub.com/about/projects">
									The Ecoclub Project
								</a>{" "}
								, to create an organic vegetable plot and greenhouse in a
								neighboring girls' school. This encouraged the community to
								initiate home gardens and grow organic vegetables.
							</p>
							<p className="activity-body">
								Ranweli believes that the degradation of the environment the
								vital resource base of tourism can be protected if the younger
								generation is actively involved in the protection of our natural
								and cultural resources.
							</p>
							<a
								href="http://ranweli.com/images/ranweli_report.pdf"
								style={{ textDecoration: "underline" }}
								className="home-link2"
							>
								<p>Click here to view Ranweli product brochure</p>
							</a>

							<p>
								<br></br>
								<i>
									<b>** COMMON IORA </b>Aegthina tiphia S.Iorava 15cm. White
									rump. Male- Blue-black upper parts. Female- greenish tinge
									with yellow upper parts. BrR. All Zones.Very Common
								</i>
							</p>
						</div>
					</div>

					<div className="col-md-4">
						<div className="col-md-12">
							<a href="/resort"><img style={{ paddingTop: "20px" }} src={srilankanBanner} /></a>
							<a href="/resort"><img style={{ paddingTop: "20px" }} src={BirdsBanners} /></a>
						</div>
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
