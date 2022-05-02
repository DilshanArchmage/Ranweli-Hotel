import React from "react";
import { useState } from "react";

import { Col, Row, Container, Button, Form } from "react-bootstrap";

import seperator from "../../assests/Images/seperator.png";
import "./Contactus.css";
import ReCAPTCHA from "react-google-recaptcha";

import bird from "../../assests/Images/kingfish.png";
import contact_us from "../../assests/Images/contact_us.jpeg";
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
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFax } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

export default function Contactus() {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const setField = (field, value) => {
		setForm({
			...form,
			[field]: value,
		});
		if (!!errors[field])
			setErrors({
				...errors,
				[field]: null,
			});
	};

	const findFormErrors = () => {
		const { user_name, email, cidate, message, rooms, child } = form;
		const newErrors = {};

		// NAME ERROS
		if (!user_name || user_name.trim() == "") {
			newErrors.user_name = "Name is Required";
		}
		///email
		if (!email || email.trim() == "") {
			newErrors.email = "Email is Required";
		}

		//date
		if (!cidate || cidate.trim() == "") {
			newErrors.cidate = "Subject is Required";
		}

		if (!message || message.trim() == "") {
			newErrors.message = "Message is Required";
		}

		if (!rooms || rooms.trim() == "") {
			newErrors.rooms = "Rooms is Required";
		}
		if (!child || child.trim() == "") {
			newErrors.child = "Rooms is Required";
		}

		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//get our new errors
		const newErrors = findFormErrors();
		//Conditional Login
		if (Object.keys(newErrors).length > 0) {
			//WE GOT ERRORS
			setErrors(newErrors);
		} else {
			console.log(form);
		}
	};

	return (
		<div>
			<Container>
				<Row className="ch">
					<img width="100%vw" style={{ padding: "0px" }} src={contact_us} />

					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Contact Us</h2>
						</div>
						<div className="welcome-body">
							<p>
								Have a suggestion on how to improve our service? Feedback about
								the site? Please use the form below to send us your thoughts,
								suggestions and questions.
							</p>

							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											Name : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control
										className="inputs"
										type="text"
										required
										onChange={(e) => setField("user_name", e.target.value)}
										isInvalid={!!errors.user_name}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.user_name}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											Email : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control
										className="inputs"
										type="email"
										required
										onChange={(e) => setField("email", e.target.value)}
										isInvalid={!!errors.email}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.email}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											Subject : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control
										className="inputs"
										type="text"
										required
										onChange={(e) => setField("cidate", e.target.value)}
										isInvalid={!!errors.cidate}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.cidate}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<span className="activity-body">
										<b>
											Message : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control
										as="textarea"
										className="inputs"
										rows={4}
										required
										onChange={(e) => setField("message", e.target.value)}
										isInvalid={!!errors.message}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.message}
									</Form.Control.Feedback>
								</Form.Group>

								<ReCAPTCHA
									width="100%vw"
									sitekey="6Lcgz5AfAAAAABUfpfiRLReta80Wx4x6vVXUmQQR"
									className="recaptcha"
									//  onChange={(token) => setToken(token)}
								/>
								<button
									variant="primary"
									className="contact-submit1"
									onClick={handleSubmit}
								>
									Submit
								</button>
								<button variant="primary" type="reset" className="contact-submit2">
									Reset
								</button>
							</Form>
							<br></br>
							<br></br>
						</div>
					</div>

					<div className="col-md-4">
					<br></br><br></br><br></br>
						<div className="col-md-12">
							<p className="title4">Phone:</p>
							<p className="title4-body">
								<BsFillTelephoneOutboundFill /> (94) 31 2277359
							</p>
							<p className="title4-body">
								<BsFillTelephoneOutboundFill /> (94) 31 5679334
							</p>
							<p className="title4-body">
								<BsFillTelephoneOutboundFill /> (94) 31 5679335
							</p>
							<p className="title4-body">
								<BsFillTelephoneOutboundFill /> (94) 771096739
							</p>
						</div>
						<p className="title4">Email:</p>
						<a href="/sss" className="home-link2">
							<AiTwotoneMail /> ranweli@slt.lk
						</a>

						<p className="title4">Fax:</p>
						<p className="title4-body">
							<FaFax /> (94) 31 2277358
						</p>

						<p className="title4">Address:</p>
						<p className="title4-body">
							<FaAddressCard /> Ranweli Holiday Village, Waikkal, Sri Lanka.
						</p>
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}
