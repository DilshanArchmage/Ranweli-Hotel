import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import bird from "../../assests/Images/kingfish.png";
import Footer from "../Footer/Footer";
;

export default function Videos() {
	return (
		<div>
			<Container>
				<Row className="h">
					<div className="col-md-12"></div>
					<div className="col-md-12">
						<div className="uper-body">
						

							<h2 className="home-welcome">Videos</h2>
						
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
					</div>
				</Row>
				
			</Container>
			<Footer />
		</div>
	);
}
