import React from "react";
import { useState, useEffect } from "react";
//import './ReservationScript.js'

import { Col, Row, Container, Button, Form } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";

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
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFax } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

export default function Reservations() {
	const [value, setValue] = useState();
	const [DatePi, onChange] = useState(new Date());
	const [cidate, setDateo] = useState("");
	//const [formValues,setFormValues]=useState(initialValues);
	//const {register,handleSubmit,formState:{errors}}=useForm();
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
	const [user, setUser] = useState(null);

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
		const { user_name, email, cidate, codate, rooms, child } = form;
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
		if (!cidate) {
			newErrors.cidate = "Check-in-Date is Required";
		}

		if (!codate || codate.trim() == "") {
			newErrors.codate = "Check-out-Date is Required";
		}

		if (!rooms || rooms.trim() == "") {
			newErrors.rooms = "No. of rooms is Required";
		}
		if (!child || child.trim() == "") {
			newErrors.child = "No. of children is Required";
		}

		return newErrors;
	};

	// const handleReset = () => {
	// 	form.user_name=""
	// 	setForm({
	// 		...form,
	// 		[user_name]: value,
	// 	});

	// };

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
				<Row className="reh">
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
							<Form id="">
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

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<span className="activity-body">
										<b>
											Phone : <span className="astric">*</span>
										</b>
									</span>
									<PhoneInput value={value} id="phone" onChange={setValue} />
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

								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											Check-in-date : <span className="astric">*</span>
										</b>
									</span>

									<div>
										<DatePicker
											className="inputs"
											type="date"
											required
											onChange={(e) => setField("cidate", e.target.value)}
											isInvalid={!!errors.cidate}
											onChange={onChange}
											value={DatePi}
											isInvalid={!!errors.cidate}
										/>
									</div>
									<Form.Control.Feedback type="invalid">
										{errors.cidate}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											Check-out-date : <span className="astric">*</span>
										</b>
									</span>
									<br></br>

									<DatePicker
										className="inputs"
										type="date"
										required
										onChange={(e) => setField("cidate", e.target.value)}
										isInvalid={!!errors.cidate}
										onChange={onChange}
										value={cidate}
										isInvalid={!!errors.codate}
									/>
									{/* <Form.Control
										className="inputs"
										type="date"
										required
										onChange={(e) => setField("codate", e.target.value)}
										isInvalid={!!errors.codate}
										
									/> */}
									<Form.Control.Feedback type="invalid">
										{errors.codate}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											No. of Rooms Required : <span className="astric">*</span>
										</b>
									</span>
									<Form.Control
										className="inputs"
										type="number"
										required
										onChange={(e) => setField("rooms", e.target.value)}
										isInvalid={!!errors.rooms}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.rooms}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicEmail">
									<span className="activity-body">
										<b>
											No. of Childrens: <span className="astric">*</span>
										</b>
									</span>
									<Form.Control
										className="inputs"
										type="number"
										required
										onChange={(e) => setField("child", e.target.value)}
										isInvalid={!!errors.child}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.child}
									</Form.Control.Feedback>
								</Form.Group>

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
						<div className="col-md-12">
							<br></br>
							<br></br>
							<br></br>
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
