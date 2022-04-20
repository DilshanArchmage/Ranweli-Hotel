import React from "react";

import { Col, Row, Container, Button, Form } from "react-bootstrap";

import seperator from "../../assests/Images/seperator.png";
import "./Reservations.css";
import bird from "../../assests/Images/kingfish.png";
import responsibleTravelBanner from "../../assests/Images/responsibleTravelBanner.png";
import sustainableTourismBanner from "../../assests/Images/sustainableTourismBanner.png";
import environmentalBanner from "../../assests/Images/environmentalBanner.png";
import contributionBanner2 from "../../assests/Images/contributionBanner2.png";
import AyurvedaBanner from "../../assests/Images/AyurvedaBanner.png";
import yogaBanner from "../../assests/Images/yogaBanner.png";
import meditationBanner from "../../assests/Images/meditationBanner.png";
import Footer from "../Footer/Footer";
import herbalGarden from "../../assests/Images/herbalGarden.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import srilankanBanner from "../../assests/Images/srilankanBanner.png";
import BirdsBanners from "../../assests/Images/150BirdsBanners.png";

export default function Reservations() {
	return (
		<div>
			<Container>
				<Row className="h">
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Reservations</h2>
						</div>
						<div className="welcome-body">
							<p>
								Please fill out the reservation form below and we will contact
								you.
							</p>

							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											Your Name : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control className="inputs" type="text" required/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											Your Email : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control type="email" className="inputs" required/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											Your Phone : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control type="number" className="inputs" required />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											Check-in Date (DD-MM-YY) :{" "}
											<span className="astric">*</span>
										</b>
									</span>
									<Form.Control type="date" className="inputs" required/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											Check-in Date (DD-MM-YY) :{" "}
											<span className="astric">*</span>
										</b>
									</span>
									<Form.Control type="date" className="inputs" required/>
								</Form.Group>

								<span className="activity-body">
									<b>
										Room Type : <span className="astric"></span>
									</b>
								</span>
								<Form.Select
									className="inputs"
									aria-label="Default select example"
									required
								>
									<option>Select Type</option>
									<option value="1">Single</option>
									<option value="2">Double</option>
									<option value="3">Triple</option>
								</Form.Select>

								<br></br>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											No. of Rooms Required : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control type="number" className="inputs" required/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>No. of Children : </b>
									</span>
									<Form.Control type="number" className="inputs" required/>
								</Form.Group>

								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<span className="activity-body">
										<b>Message : </b>
									</span>
									<Form.Control as="textarea" className="inputs" rows={3} />
								</Form.Group>
								<button variant="primary" className="contact-submit1" type="submit">
									Submit
								</button>
								<button variant="primary" className="contact-submit2" type="submit">
									Reset
								</button>
							</Form>
							<br></br>
							<br></br>
						</div>
					</div>

					<div className="col-md-4">
						<div className="col-md-12">
							<p className="title4">Phone:</p>
							<p className="title4-body">(94) 31 2277359</p>
							<p className="title4-body">(94) 31 5679334</p>
							<p className="title4-body">(94) 31 5679335</p>
							<p className="title4-body">(94) 771096739</p>
						</div>
						<p className="title4">Email:</p>
						<a href="/sss" className="home-link2">
							ranweli@slt.lk
						</a>

						<p className="title4">Fax:</p>
						<p className="title4-body">(94) 31 2277358</p>

						<p className="title4">Address:</p>
						<p className="title4-body">
							Ranweli Holiday Village, Waikkal, Sri Lanka.
						</p>
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
