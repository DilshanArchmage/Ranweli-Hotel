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

import Footer from "../Footer/Footer";
import the_resort from "../../assests/Images/the_resort.jpeg";

import BirdResort from "./BirdResort";
import "./Resort.css";
import seperator from "../../assests/Images/seperator.png";
import Facilities from "./Facilities";


export default function Resort() {
	return (
		<div>
			<Container>
				<Row className="rsh">
					<img width="100%vw" style={{ padding: "0px" }} src={the_resort} />

					<div className="col-md-8">
						<div className="uper-body">
							

							<h2 className="home-welcome">The Resort</h2>
						
						<div className="welcome-body">
							<p className="activity-body">
								Ranweli’s architecture blends with the unique and rich natural
								environment. The serene and idyllic location has been fully
								utilized in the layout of the land, featuring indigenous flora
								and fauna,and borders the wide sandy beach on one side, and the
								river on the other.
							</p>
							<p className="activity-body">
								{" "}
								The land was originally a coconut plantation surrounded by
								wetlands mainly mangroves.In conceptualizing Ranweli, the
								architects used the spacing of the rows of the coconut trees
								(known as the coconut grid by Agriculturists) as the discipline
								for the design. The bungalows, central areas and facilities were
								built by removing the minimum number of coconut trees. For each
								bungalow constructed, only one tree was removed and the tree
								trunks were used to construct the pillars.
							</p>
							<p className="activity-body">
								{" "}
								The connecting walkways open out into beautifully tended palm
								gardens leading to the heart of the resort. Architecturally and
								aesthetically the construction and furnishing of the village
								blends western standards of comfort and with the traditions of
								indigenous Sri Lankan culture.
							</p>
							<img className="separator" width="100%vw" style={{ padding: "0px" }}  src={seperator} />
							<br></br>
							<div className="col-md-12">
								<br></br>
								<Tabs
									style={{ listStyle: "none" }}
									defaultActiveKey="home"
									transition={false}
									id="facilities"
									className="mb-3"
								>
									<Tab
										className="hello"
										style={{ listStyle: "none" }}
										eventKey="home"
										title="Facilities"
										
									>
										<Facilities />
									</Tab>
									<Tab eventKey="profile" title="Activities" id="activities">
										<BirdResort />
									</Tab>
								</Tabs>
								<br></br><br></br>
							</div>
						</div>
					</div>
					</div>
					<br></br>

					<div className="col-md-4">
						<br></br>
						<img width="100%vw" style={{ padding: "0px" }}  src={ranwelimap} />
					</div>
				</Row>
				
			</Container>
			<Footer />
		</div>
	);
}
