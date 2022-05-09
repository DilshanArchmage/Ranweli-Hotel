import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import seperator from "../../assests/Images/seperator.png";
import bird from "../../assests/Images/kingfish.png";
import inner_banner10 from "../../assests/Images/inner_banner10.jpeg";
import AyurvedaBanner from "../../assests/Images/AyurvedaBanner.png";
import yogaBanner from "../../assests/Images/yogaBanner.png";
import meditationBanner from "../../assests/Images/meditationBanner.png";
import Footer from "../Footer/Footer";
import herbalGarden from "../../assests/Images/herbalGarden.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFax } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

import "./Ayurweda.css";

export default function Ayurweda() {
	return (
		<div>
			<Container>
				<Row className="h">
					<img width="100%vh" style={{ padding: "0px" }} src={inner_banner10} />

					<div className="col-md-8">
						<div className="uper-body">
							<h2 className="home-welcome">Ayurveda</h2>

							<div className="welcome-body">
								<p>
									<b>
										Please email{" "}
										<a
											className="home-linkac me-1"
											style={{ textDecoration: "underline" }}
										>
											ranweli@slt.lk
										</a>
										  for more information and rates.
									</b>
								</p>
								<p className="activity-body">
									Ranweli’s idyllic location provides tranquility and serenity
									providing excellent sensory stimulation and calming your mind.
								</p>

								<p className="activity-body">
									The Ranweli Ayurvedic centre offers guests authentic Ayurvedic
									health treatments using medicinal herbs. A qualified Ayurvedic
									doctor with many years of experience is in charge of the
									centre.
								</p>

								<p className="activity-body">
									Ranweli also offers Yoga facilities by special arrangement.
								</p>

								<br></br>
								<img className="separator" width="100%vw" src={seperator} />
								<br></br>

								<p className="title2">Ayurvedic Centre</p>
								<img className="resortbird-watching img-fluid w-100"  style={{marginTop:'-30px'}}  src={AyurvedaBanner} />
								<p className="activity-body">
									Ayurveda, the <i>"science of life", </i> is a 5000 year old
									science that has been handed down through the centuries by the
									ancient physicians. Ayurveda was practiced as a way of
									restoring '<i>life</i>'
									 to the body.
								</p>
								<p className="activity-body">
									This ancient science is a complete health system for mind,
									body and spirit. Ayurveda emphasizes that{" "}
									<i>"prevention is better than cure"</i>. Rather than treating
									the symptoms, the focus is on the entire body, diseases are
									cured while relaxation is enhanced.
								</p>
								<p className="activity-body">
									Ayurveda uses the elements, seasons and plants to discover
									areas of potential weakness. It operates on the assumption
									that the human body is composed of various combinations of the
									five elements: fire, water, air, earth and ether. These
									elements are displayed in each individual through body types,
									or <i>'doshas'</i> . Maintaining the balance of your{" "}
									<i>'dosha'</i> is the key to successful Ayurvedic practice and
									this is done through diet, exercise, massage and herbal
									medicine.
								</p>
								<p className="activity-body">
									At Ranweli’s Ayurvedic centre we offer health and beauty
									therapies, both short and long term treatments or simply a
									relaxing herbal oil massage.
								</p>

								<p className="title2">Yoga</p>
								<img className="resortbird-watching img-fluid w-100"  style={{marginTop:'-30px'}}  src={yogaBanner} />
								<p className="activity-body">
									Yoga is offered on request by prior arrangement and is
									conducted by a professional Yoga instructor. Techniques
									offered include stress management, Yoga postures (Asanas),
									Yoga breath control (Pranayama), relaxation and reflection on
									philosophy and psychology.
								</p>

								<p className="title2">Meditation</p>
								<img className="resortbird-watching img-fluid w-100"  style={{marginTop:'-30px'}}  src={meditationBanner} />
								<p className="activity-body">
									Programs conducted by a meditation instructor are offered by
									special arrangement. The two basic methods of meditation are
									taught: the{" "}
									<i>
										<b>'Anapana sati' </b>
									</i>
									or mindfulness of breathing and the
									<i>
										<b>'Metta-bhavana'</b>
									</i>{" "}
									or cultivation of loving-kindness.
								</p>

								<p className="title2">Herbal Garden</p>
								<img className="resortbird-watching img-fluid w-100"  style={{marginTop:'-30px'}}  src={herbalGarden} />

								<p className="activity-body">
									The Herbal garden is located in a coconut triangle as an
									exhibition plot and consists of 120 herbal plants. The herbal
									plants are of great interest to our guests especially to those
									interested in Herbal and Ayurveda treatments. Some of the
									herbal plants in the garden are also very important for the
									life-cycle of butterflies as host & nectaring plants.
								</p>

								<p style={{fontSize:'12px'}}>
									<br></br>
									<i>
										<b>** PIED KINGFISHER </b>Ceyle rudis S.Gomara
										Kalapu-pilihuduwa 30cm. Black and white. Male- Complete
										double breast bands. Female incomplete breast bands.
										Hovering habit. BrR.Lc. Common
									</i>
								</p>
								<br></br><br></br>
							</div>
						</div>{" "}
					</div>

					<div className="col-md-4">
						<br></br>
						<br></br>
						<br></br>
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
								<BsFillTelephoneOutboundFill /> (94) 77 1096739
							</p>
						</div>
						<p className="title4">Email:</p>
						<a href="/sss" className="home-linkac">
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
			</Container>
			<Footer />
		</div>
	);
}
