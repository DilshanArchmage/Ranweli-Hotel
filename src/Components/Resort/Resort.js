import React from "react";
import {
	Col,
	Row,
	Container,
	Button,
	Nav,
	Tabs,
	Tab,
	Sonnet,
} from "react-bootstrap";

import bird from "../../assests/Images/kingfish.png";
import ranwelimap from "../../assests/Images/ranwelimap (1).png";
import cyclingBanner from "../../assests/Images/cyclingBanner.png";
import riverCruiseBanner from "../../assests/Images/riverCruiseBanner.png";
import craftDemonstrationsBanner from "../../assests/Images/craftDemonstrationsBanner.png";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import the_resort from "../../assests/Images/the_resort.jpeg";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import BirdResort from "./BirdResort";
import "./Resort.css";
import seperator from "../../assests/Images/seperator.png";
import Facilities from "./Facilities";

export default function Resort() {
	return (
		<div>
			<Container>
				<Row className="Rh">
				
					<div className=" ">
						<p>
							
						<img width="100%vw" src={the_resort}/>
						</p>
                 

                </div>
					
					

					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">The Resort</h2>
						</div>
						<div className="welcome-body">
							<p className="activity-body">
								Ranweli’s architecture blends with the unique and rich natural
								environment. The serene and idyllic location has been fully
								utilized in the layout of the land, featuring indigenous flora
								and fauna,and borders the wide sandy beach on one side, and the
								river on the other. The land was originally a coconut plantation
								surrounded by wetlands mainly mangroves. In conceptualizing
								Ranweli, the architects used the spacing of the rows of the
								coconut trees (known as the coconut grid by Agriculturists) as
								the discipline for the design. The bungalows, central areas and
								facilities were built by removing the minimum number of coconut
								trees. For each bungalow constructed, only one tree was removed
								and the tree trunks were used to construct the pillars. The
								connecting walkways open out into beautifully tended palm
								gardens leading to the heart of the resort. Architecturally and
								aesthetically the construction and furnishing of the village
								blends western standards of comfort and with the traditions of
								indigenous Sri Lankan culture..
							</p>
							<img className="separator" src={seperator} />
							<br></br>
							<div className="col-md-12">
								<br></br>
								<Tabs
									style={{ listStyle: "none" }}
									defaultActiveKey="home"
									transition={false}
									id="noanim-tab-example"
									className="mb-3"
								>
									<Tab
									className="hello"
										style={{ listStyle: "none" }}
										eventKey="home"
										title="Facilities"
									><Facilities/>

                  </Tab>
									<Tab eventKey="profile" title="Activities">
										<BirdResort />
									</Tab>
								</Tabs>
							</div>
						</div>
					</div>

					<div className="col-md-4">
				
							<img src={ranwelimap}/>

					
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
