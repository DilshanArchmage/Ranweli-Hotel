import React from "react";

import { Col, Row, Container, Button } from "react-bootstrap";

import seperator from "../../assests/Images/seperator.png";
import bird from "../../assests/Images/kingfish.png";
import responsibleTravelBanner from "../../assests/Images/responsibleTravelBanner.png";
import sustainableTourismBanner from "../../assests/Images/sustainableTourismBanner.png";
import environmentalBanner from "../../assests/Images/environmentalBanner.png";
import inner_banner10 from "../../assests/Images/inner_banner10.jpeg";
import AyurvedaBanner from "../../assests/Images/AyurvedaBanner.png";
import yogaBanner from "../../assests/Images/yogaBanner.png";
import meditationBanner from "../../assests/Images/meditationBanner.png";
import Footer from "../Footer/Footer";
import herbalGarden from "../../assests/Images/herbalGarden.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import srilankanBanner from "../../assests/Images/srilankanBanner.png";
import BirdsBanners from "../../assests/Images/150BirdsBanners.png";

export default function Ayurweda() {
	return (
		<div>
			<Container>
				<Row className="h">
				<Row>
					<div className="col-md-12 row-fluid head-img">
                 <img width="105%vh" src={inner_banner10}/>

                </div>
					</Row>
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Ayurveda</h2>
						</div>
						<div className="welcome-body">
							<p>
								<b>
									Please email ranweli@slt.lk for more information and rates.
								</b>
							</p>
							<p className="activity-body">
								Ranweli’s idyllic location provides tranquility and serenity
								providing excellent sensory stimulation and calming your mind..
							</p>

							<p>
								The Ranweli Ayurvedic centre offers guests authentic Ayurvedic
								health treatments using medicinal herbs. A qualified Ayurvedic
								doctor with many years of experience is in charge of the centre.
							</p>
							<p>
								We protect the natural habitat. The business operates and
								conducts operations in an environmentally friendly manner by
								using our resources efficiently and managing our waste and
								emissions to minimize the impact on the environment.
							</p>
							<p>Ranweli also offers Yoga facilities by special arrangement.</p>

							<br></br>
							<img className="separator" src={seperator} />
							<br></br>

							<p className="title2">Ayurvedic Centre</p>
							<img className="cycling" src={AyurvedaBanner} />
							<p className="activity-body">
								Ayurveda, the "science of life", is a 5000 year old science that
								has been handed down through the centuries by the ancient
								physicians. Ayurveda was practiced as a way of restoring ‘life’
								to the body.
							</p>
							<p className="activity-body">
								This ancient science is a complete health system for mind, body
								and spirit. Ayurveda emphasizes that "prevention is better than
								cure". Rather than treating the symptoms, the focus is on the
								entire body, diseases are cured while relaxation is enhanced.
							</p>
							<p className="activity-body">
								Ayurveda uses the elements, seasons and plants to discover areas
								of potential weakness. It operates on the assumption that the
								human body is composed of various combinations of the five
								elements: fire, water, air, earth and ether. These elements are
								displayed in each individual through body types, or 'doshas'.
								Maintaining the balance of your 'dosha' is the key to successful
								Ayurvedic practice and this is done through diet, exercise,
								massage and herbal medicine.
							</p>
							<p className="activity-body">
								At Ranweli’s Ayurvedic centre we offer health and beauty
								therapies, both short and long term treatments or simply a
								relaxing herbal oil massage.
							</p>

							<p className="title2">Yoga</p>
							<img className="cycling" src={yogaBanner} />
							<p className="activity-body">
								Yoga is offered on request by prior arrangement and is conducted
								by a professional Yoga instructor. Techniques offered include
								stress management, Yoga postures (Asanas), Yoga breath control
								(Pranayama), relaxation and reflection on philosophy and
								psychology.
							</p>

							<p className="title2">Meditation</p>
							<img className="cycling" src={meditationBanner} />
							<p className="activity-body">
								Programs conducted by a meditation instructor are offered by
								special arrangement. The two basic methods of meditation are
								taught: the 'Anapana sati' or mindfulness of breathing and the
								'Metta-bhavana' or cultivation of loving-kindness.
							</p>

							<p className="title2">Herbal Garden</p>
							<img className="cycling" src={herbalGarden} />

							<p className="activity-body">
								The Herbal garden is located in a coconut triangle as an
								exhibition plot and consists of 120 herbal plants. The herbal
								plants are of great interest to our guests especially to those
								interested in Herbal and Ayurveda treatments. Some of the herbal
								plants in the garden are also very important for the life-cycle
								of butterflies as host & nectaring plants.
							</p>

							<img className="separator" src={seperator} />
							<p>
								<br></br>
								<b>** PIED KINGFISHER </b>Ceyle rudis S.Gomara Kalapu-pilihuduwa
								30cm. Black and white. Male- Complete double breast bands.
								Female incomplete breast bands. Hovering habit. BrR.Lc. Common
							</p>
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
