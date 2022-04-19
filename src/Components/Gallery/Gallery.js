import React from "react";
import "./Gallery.css";

import { Col, Row, Container, Button } from "react-bootstrap";

import bird from "../../assests/Images/kingfish.png";
import seperator from "../../assests/Images/seperator.png";
import phoca_thumb_m_new_image3 from "../../assests/Images/phoca_thumb_m_new_image_3.jpeg";
import phoca_thumb_m_new_image4 from "../../assests/Images/phoca_thumb_m_new_image_4.jpeg";
import phoca_thumb_m_new_image5 from "../../assests/Images/phoca_thumb_m_new_image_5.jpeg";
import phoca_thumb_m_new_image6 from "../../assests/Images/phoca_thumb_m_new_image_6.jpeg";
import phoca_thumb_m_new_image7 from "../../assests/Images/phoca_thumb_m_new_image_7.jpeg";
import phoca_thumb_m_new_image8 from "../../assests/Images/phoca_thumb_m_new_image_8.jpeg";
import phoca_thumb_m_new_image9 from "../../assests/Images/phoca_thumb_m_new_image_9.jpeg";
import phoca_thumb_m_new_image10 from "../../assests/Images/phoca_thumb_m_new_image_10.jpeg";
import phoca_thumb_m_new_image11 from "../../assests/Images/phoca_thumb_m_new_image_11.jpeg";
import phoca_thumb_m_new_image12 from "../../assests/Images/phoca_thumb_m_new_image_12.jpeg";
import phoca_thumb_m_new_image13 from "../../assests/Images/phoca_thumb_m_new_image_13.jpeg";
import phoca_thumb_m_new_image14 from "../../assests/Images/phoca_thumb_m_new_image_14.jpeg";
import phoca_thumb_m_new_image15 from "../../assests/Images/phoca_thumb_m_new_image_15.jpeg";
import facebookbanner2 from "../../assests/Images/facebookbanner.png";
import flickrbanner from "../../assests/Images/flickrbanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import accomodation from "../../assests/Images/accomodation.jpeg";

export default function Gallery() {
	return (
		<div>
			<Container>
				<Row className=" h">
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Gallery</h2>
							<br></br>
						</div>
						<div className="welcome-body">
							<br></br> <br></br>
							<Row>
								<div className="col-md-12">
									<img className="timthumb1" src={phoca_thumb_m_new_image3} />
									<img className="timthumb1" src={phoca_thumb_m_new_image4} />
									<img className="timthumb1" src={phoca_thumb_m_new_image5} />
									<img className="timthumb1" src={phoca_thumb_m_new_image6} />
									<br></br>
								</div>
							</Row>
							<Row>
								<div className="col-md-12">
									<br></br>
									<img className="timthumb1" src={phoca_thumb_m_new_image7} />
									<img className="timthumb1" src={phoca_thumb_m_new_image8} />
									<img className="timthumb1" src={phoca_thumb_m_new_image9} />
									<img className="timthumb1" src={phoca_thumb_m_new_image10} />
								</div>
							</Row>
							<Row>
								<div className="col-md-12">
									<br></br>
									<img className="timthumb1" src={phoca_thumb_m_new_image11} />
									<img className="timthumb1" src={phoca_thumb_m_new_image12} />
									<img className="timthumb1" src={phoca_thumb_m_new_image13} />
									<img className="timthumb1" src={phoca_thumb_m_new_image14} />
								</div>
							</Row>
							<Row>
								<br></br>
								<div className="col-md-12">
									<br></br>
									<img className="timthumb1" src={phoca_thumb_m_new_image15} />
								</div>
							</Row>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
						</div>
					</div>

					<div className="col-md-4">
						<Row>
							<div className="col-md-12">
								<img className="acco-img" src={facebookbanner2} />
							</div>
						</Row>
						<Row>
							<div className="col-md-12">
								<img src={flickrbanner} />
							</div>
						</Row>
						<Row>
							<div>
								<video width="320" height="240" controls>
									<source
										src="https://web.archive.org/web/20220331102540/https://youtu.be/ws9rKGOlBMg"
										type="video/mp4"
									/>
									
								</video>
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
