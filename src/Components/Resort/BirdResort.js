import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

import './BirdResort.css'
import bird from "../../assests/Images/kingfish.png";
import birdWatchingBanner from "../../assests/Images/birdWatchingBanner.png";
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

export default function Activities() {
	return (
		<div>
			<Container>
				<Row className="h">
					<div className="col-md-12">
						<div className="d-flex">
							

							
							<p className="bird-subtitle1">Bird Watching</p>
							
						</div>
						<div className="birdwelcome-body">
						<img className="resortbird-watching" src={birdWatchingBanner} />
							<p className="birdResortactivity-body">
								Sri Lanka is blessed with an abundant avifauna. There are 226
								resident birds, 133 migrants, 90 vagrants and 33 endemics (26
								definite and 7 proposed).
							</p>

							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								{" "}
								Ranweli is located in a coast wetland estuary and this
								contributes to a large diversity of over 130 species of birds.
								Bird watching on the river and mangroves by boat is offered as a
								special facility to our guests. A three-hour tour has been
								developed with the assistance of the Field Ornithology Group of
								Sri Lanka (FOGSL), an affiliate of Bird Life International (an
								international bird conservation organization)
							</p>
							<p>
								<b className="birdrest-subheading">Key Facts</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>
									Accompanied by an expert ornithologist
								</li>
								<li style={{ listStyle: "circle" }}>
									Duration: 3 hours, commencing at 07:00hrs. (Breakfast during
									tour)
								</li>
								<li style={{ listStyle: "circle" }}>
									Rates: US$ 30 per person; minimum 2 persons per tour
								</li>
								<li style={{ listStyle: "circle" }}>
									Reservations in advance at the reception
								</li>
								<br></br>
								<a href="/sss" className="home-link2">
									<p>Click here for more information</p>
								</a>
							</ul>

							<p className="bird-subtitle1">Cycling</p>
							<img className="resortbird-cycling"  src={cyclingBanner} />
							<p className="birdResortactivity-body">
								Two exciting tours on bicycles through the lush countryside is
								available. These provide an opportunity to enjoy the natural
								environment and view historical sites including many local
								Catholic churches and Buddhist temples. The guests will be
								accompanied by a member of the staff and will have an
								opportunity to interact with the local community in the
								villages. A route map with the descriptions of the sites will be
								provided to participants..
							</p>

							<p>
								<b className="birdrest-subheading">Key Facts</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>
									Accompanied by a Ranweli guide
								</li>
								<li style={{ listStyle: "circle" }}>
									Tour 1: 16 kms/2 hr duration - US$ 10 per person; minimum 2
									persons
								</li>
								<li style={{ listStyle: "circle" }}>
									Tour 2: 26 kms/4 hr duration - US$ 15 per person , minimum 2
									persons
								</li>
								<li style={{ listStyle: "circle" }}>
									Cycle Hires: Half day - US$ 05 per person, Full day: US$ 08
									per person
								</li>
								<li style={{ listStyle: "circle" }}>
									Reservation in advance with reception
								</li>
								<br></br>
							</ul>

							<p className="bird-subtitle1">River Cruise</p>
							<img className="resortbird-cycling"  src={riverCruiseBanner} />
							<p className="birdResortactivity-body">
								Glide along the waterways by canoe or motor boat in the environs
								of Ranweli and explore the unique ecosystem around the
								mangroves. Discover the numerous indigenous aquatic and
								terrestrial plants and enjoy a green wonderland of breathtaking
								beauty.
							</p>

							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								Observe water monitors (Varanus salvator) swimming lazily in the
								waterways or sunbathing on the branch of a tree and a variety of
								butterflies and dragonflies.
							</p>

							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								This fascinating and tranquil tour is provided from half an hour
								onwards. Alternatively you can choose to take a canoe and
								explore the waterways yourself.
							</p>

							<p>
								<b className="birdrest-subheading">Key Facts</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>
									Accompanied by an expert naturalist
								</li>
								<li style={{ listStyle: "circle" }}>
									Duration: 2 hours, commencing at 10:00hrs
								</li>
								<li style={{ listStyle: "circle" }}>
									Rates: US$ 15 per person
								</li>
								<li style={{ listStyle: "circle" }}>
									Reservation in advance with reception
								</li>
							</ul>
							<p style={{ fontStyle: "italic" }}>
								Rates are subject to change without notice
							</p>

							<p className="bird-subtitle1">Craft Demonstrations</p>
							<img className="resortbird-cycling" src={craftDemonstrationsBanner} />
							<p className="birdResortactivity-body">
								Ranweli is closely linked to our local village and the villagers
								often enjoy meeting the guests and sharing information about
								their traditional lifestyles, handicrafts and customs.
								Demonstrations of traditional Sri Lankan handicrafts and
								industries are offered. These are offered complimentary to our
								guests in order to enhance the cultural experience.
							</p>

							<p>
								<b className="birdrest-subheading">Programmes</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>Basket and mat weaving</li>
								<li style={{ listStyle: "circle" }}>Cadjan weaving</li>
								<li style={{ listStyle: "circle" }}>Pottery demonstration</li>
								<li style={{ listStyle: "circle" }}>
									Rope making from Coir fibre
								</li>
								<li style={{ listStyle: "circle" }}>Toddy tapping</li>
								<li style={{ listStyle: "circle" }}>
									Preparation of treacle, jaggery and vinegar from the sap of a
									palm flower
								</li>
								<li style={{ listStyle: "circle" }}>Sri Lankan cookery</li>
								<li style={{ listStyle: "circle" }}>
									Programme on the medicinal value of herbal drinks
								</li>
								<br></br>
							</ul>

							<p className="bird-subtitle1">Butterfly Tour</p>
							<img className="resortbird-cycling" src={butterflyWatchingBanner} />
							<p className="birdResortactivity-body">
								TWe organize guided tours in the surroundings of the hotel where
								you can observe over 50 species of butterflies.
							</p >
							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								You may also have the opportunity to witness the entire life
								cycle of the butterfly.
							</p>

							<p className="birdrest-subheading">
								<b >Key Facts</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>
									Accompanied by an expert naturalist
								</li>
								<li style={{ listStyle: "circle" }}>
									Reservation in advance with reception
								</li>

								<br></br>
							</ul>
							<p className="bird-subtitle1">Nature Tours</p>

							<img className="resortbird-cycling" src={natureToursBanner} />
							
							<p className="resortbird-subtitle2">
							Anaivilundawa Wildlife Sanctuary and International RAMSAR Site
							</p>
							<p style={{paddingTop:'5px'}}  className="birdResortactivity-body">
								Anaivilundawa, located only one hour from Ranweli, is a man made
								wetland constructed in the 12th Century AD and is located on the
								western migratory bird route. This is a sanctuary with prolific
								bird life in beautiful surroundings. The vegetation of the site
								consists of a scenic forest in the low country dry zone and in
								addition to birds, mammals such as mouse deer, hare, mongoose,
								squirrels, wild cats (such as civets), wild boar and fruit bats
								and reptiles and amphibians like land monitors, water monitors,
								lizards, geckoes, skinks, and tortoises can be sighted.
							</p>
							<p style={{paddingTop:'5px'}}  className="birdResortactivity-body">
								There are over 100 species of birds at this site. However, of
								special interest are species such as Spoonbills, Ibises,
								Darters, Harriers, species of Bee-eaters, and the Jungle Fowl an
								endemic species which is the national bird of Sri Lanka that are
								not found in the Ranweli environs.
							</p>

							<p className="birdrest-subheading">
								<b >Key Facts</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>
									Accompanied by an expert naturalist
								</li>
								<li style={{ listStyle: "circle" }}>
									Air-conditioned car or mini van
								</li>
								<li style={{ listStyle: "circle" }}>
									A picnic breakfast is included
								</li>
								<li style={{ listStyle: "circle" }}>
									Rate US$ 75 per person; minimum 2 persons
								</li>
							</ul>
							<p style={{marginLeft:'-40px'}} className="subtitle1">Sinharaja Biosphere Reserve</p>
							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								1 or 2 days tour can be arranged on special request to
								Sinharaja, Sri Lanka's premier undisturbed stretch of
								rainforest.
							</p>

							<a  href="/sss" className="home-link2">
								<p style={{marginLeft:'-40px'}}>Please inquire for rates from the Reception.</p>
							</a>

							<p className="bird-subtitle1">Special Archaeological Tours</p>
							<img className="resortbird-cycling" src={archaeologicalToursBanner} />
							<p style={{marginLeft:'-40px'}} className="subtitle1">Panduwasnuwara & Yapahuwa</p>
							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								This 1 day tour will take you to Panduwasnuwara one of the
								ancient Royal Capitals of Sri Lanka which is only an hours drive
								from Ranweli. This sprawling 50 acre moated and walled 'sleeping
								city, some of it still unexcavated, was an expertly planned and
								well laid out metropolis with a stately palace, royal audience
								hall, store houses, granaries, monastic complexes, shrines, bath
								houses, toilets and ponds. Beautifully proportioned platforms,
								terraces, pavements and doorways enhance its architecture.
								Handsome stone sculptures and carvings adorn it and rock
								inscriptions record events at the time..
							</p>
							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								After your visit to Panduwasnuwara you will be taken to
								Yapahuwa: a citadel built on a huge rock boulder in the style of
								the 5th Century Sigiriya rock fortress. Well defended with
								double ramparts and moats, Yapahuwa holds many attractions for
								sightseers which include the remains of the King's Palace, Royal
								audience hall and other stately structures such as shrines and
								baths.
							</p>

							<p>
								<b className="birdrest-subheading">Key Facts</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>
									English speaking guide, air-conditioned car or mini van.
								</li>
								<li style={{ listStyle: "circle" }}>
									US$ 125 per person – minimum 2 persons
								</li>
							</ul>

							<p className="bird-subtitle1">Wilpattu Tour</p>
							<img className="resortbird-cycling" src={archaeologicalToursBanner} />

							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								Wilpattu is one of the oldest National Parks in Sri Lanka and
								among the top national parks world renowned for its
								Leopard(Panthera pardus kotiya) population.It is located in the
								Northwest coast lowland dry zone of Sri Lanka and lies within
								the North-central & North-western providences. The area of the
								parks is 131693 ha.The unique feature of this park is the
								existence of "Willus" (Natural lakes) has nearly sixty
								lakes(Willu) and tanks spread throughout.
							</p>
							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								There are many types of vegetation to be found in Wilpattu;
								Littoral vegetation, including Salt grass and low scrub monsoon
								forest with tall emergents, such as Palu (Manilkara
								hexandra),Satin (Chloroxylon swietenia), Milla (Vitex
								altissima), Weera (Drypetes sepiaria), Ebony (Disopyros ebenum)
								etc. .
							</p>
							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								31 species of mammals have been identified within Wilpattu
								national park.The Elephant , Sloth bear,Leopard, Water Buffalo,
								Sambhur, Spotted Dears, Mongoose are some of residents. .
							</p>
							<p style={{paddingTop:'5px'}} className="birdResortactivity-body">
								Wilpattu National Parks is located 150 km (approximately) north
								of Ranweli Holiday Villge.
							</p>

							<p className="birdrest-subheading">
								<b>Key Facts</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "circle" }}>
									Rates: 200 US $ per person minimum 2 persons.
								</li>
								<li style={{ listStyle: "circle" }}>
									Reservation one day in advance with reception, Guest relation
									or Visitor Center
								</li>
							</ul>
						</div>
					</div>

				
				</Row>
				
			</Container>
		</div>
	);
}
