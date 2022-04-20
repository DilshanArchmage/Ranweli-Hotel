import React from "react";

import { Col, Row, Container, Button } from "react-bootstrap";
import "./Accomadation.css";

import bird from "../../assests/Images/kingfish.png";
import seperator from "../../assests/Images/seperator.png";
import room_types from "../../assests/Images/room_types.jpeg";
import cyclingBanner from "../../assests/Images/cyclingBanner.png";
import riverCruiseBanner from "../../assests/Images/riverCruiseBanner.png";
import craftDemonstrationsBanner from "../../assests/Images/craftDemonstrationsBanner.png";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import accomodation from "../../assests/Images/accomodation.jpeg";

export default function Accomadation() {
	return (
		<div>
			<Container>
				<Row className=" h">
					<Row>
						<div className="col-md-12 row-fluid head-img">
							<img width="105%vh" src={accomodation} />
						</div>
					</Row>

					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Accommodation</h2>
						</div>
						<div className="welcome-body">
							<p className="activity-body">
								Ranweli offers 4 types of accommodation all constructed with
								local building materials, in a unique ethnic style that
								resembles a typical Sri Lankan village.
							</p>
							<p>
								{" "}
								16 Superior Deluxe Sea View Bungalows, 40 Deluxe Sea View
								Bungalows, 10 Standard Sea View Bungalows, 04 River View
								Bungalows, 17 Standard Rooms with 01 Suite provide comfortable
								accommodation.
							</p>
							<p>
								{" "}
								The interior décor includes terra cotta pots, brass lamps,
								artifacts produced by local craftsmen and hand-made local
								fabric.
							</p>

							<p className="title2">Deluxe Sea View Bungalows</p>

							<p className="activity-body">
								Beautifully designed and luxuriously furnished newly upgraded
								rooms include, large Wardrobe with individual Safe Lockers, Mini
								Fridge , Mini Bar, Tea / Coffee making facilities, Split Type
								A/C, Ceiling Fan, LED TV with cable connection, Telephone,
								Private Sitting area, Large comfort bed with 10" pocketed spring
								mattress, Luxurious bedding and newly fitted furniture.
							</p>

							<p>
								Spacious private Bathroom with Hot and Cold Rain Shower, Wall
								mounted telephone facility & Shower Cubical. It is also equipped
								with solar powered water heating.
							</p>

							<p>
								Each bungalow has an outdoor terrace and offers privacy and an
								excellent view of the exotic tropical setting which is perfect
								for a peaceful holiday.
							</p>

							<p className="title2">Standard Sea View Bungalows</p>

							<p className="activity-body">
								All rooms are air conditioned, with private bathrooms that are
								sunlit from an open court to provide ventilation and natural
								lighting, substantially conserving energy. Rooms are also
								equipped with a sitting area, ceiling fans, telephone and
								individual Safe Locker. The bathrooms are equipped with solar
								powered water heating.
							</p>

							<p className="title2">Standard Rooms</p>

							<p className="activity-body">
								Standard Rooms are based on 2 blocks 6 Rooms each with Sea View
								Or River View. River View Rooms have private balcony. Rooms are
								equipped with Mini Fridge , Tea / Coffee making facilities, A/C,
								sitting area, ceiling fan, telephone and individual Safe Locker.
								The bathrooms are equipped with solar powered water heating.
							</p>

							<p className="title2">Suite</p>

							<p className="activity-body">
								Named "Malkadol Cottage" this suite type accommodation is
								located at the southern end of our property ensuring absolutely
								privacy. The suits consists of a separate bedroom, bathroom,
								dining/sitting area, small kitchenette & outdoor terrace which
								provides a beautiful view of the ocean. Cottage includes
								Luxurious beddings and newly fitted furniture, Large Wardrobe
								with individual Safe Locker, T V, Split Type A/C, Hot & Cold
								Water, Mini Fridge , Tea, Coffee making facilities, Ceiling Fan,
								Telephone.
							</p>
							<p>
								Bathroom is equipped with solar powered water heating and it is
								sunlit from an open court to provide ventilation and natural
								lighting, substantially conserving energy.
							</p>

							<p>
								"Malkadol Cottage" is located about 500m away from the common
								areas including the restaurant & bars. Please email
								ranweli@slt.lk for rates and availability.
							</p>
							<br></br>
							<img className="separator" src={seperator} />
							<p>
								<br></br>
								<i>
									<b>** SPOTTED DOVE </b>Streptopelia chinensis S. Alu Kobeyiya
									30cm.Spotted Ashy-blue plumage. Black and white pattern on
									back of neck.BrR-All Zones. Very common
								</i>
							</p>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
						</div>
					</div>

					<div className="col-md-4">
						<Row>
							<div className="col-md-12">
								<img className="acco-img" src={room_types} />
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
