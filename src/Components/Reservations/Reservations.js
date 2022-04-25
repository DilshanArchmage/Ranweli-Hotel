import React from "react";
import { useState } from "react";

import { Col, Row, Container, Button, Form } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

import seperator from "../../assests/Images/seperator.png";
import "./Reservations.css";
import bird from "../../assests/Images/kingfish.png";
import inner_banner08 from "../../assests/Images/inner_banner08.jpeg";
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
import PhoneInput from "react-phone-input-2";

export default function Reservations() {
	const [value, setValue] = useState();
	//const [formValues,setFormValues]=useState(initialValues);
	//const {register,handleSubmit,formState:{errors}}=useForm();
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
		const { user_name } = form;
		const newErrors = {};

		// NAME ERROS
		if (!user_name || user_name.trim() == "") {
			newErrors.user_name = "Name is Required";
		}

		return newErrors;
	};

	const handleSubmit = async (e) => {
		debugger;
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
				<Row className="h">
					<img width="100%vw" style={{ padding: "0px" }} src={inner_banner08} />

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

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											E-mail : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control type="email" className="inputs" required />
								</Form.Group>
								{/* <Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											Phone : <span className="astric">*</span>
										</b>
										<PhoneInput value={value} onChange={setValue} />
									</span>
								
								</Form.Group> */}

								{/* 
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											Check-in-date : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control type="date" className="inputs" required />
								</Form.Group> */}

								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<span className="activity-body">
										<b>Message : </b>
									</span>
									<Form.Control
										as="textarea"
										className="inputs"
										rows={3}
										required
									/>
								</Form.Group>
								<ReCAPTCHA
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
								<button
									variant="primary"
									className="contact-submit2"
									type="submit"
								>
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
							<p className="title4-body">(94) 31 2277359 1</p>
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
