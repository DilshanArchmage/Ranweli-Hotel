import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

import "./BirdResort.css";
import photo16 from "../../assests/Images/photo16.jpeg";
import restaurant_bar from "../../assests/Images/restaurant_bar.jpeg";
import eveningEntertainmentBanner from "../../assests/Images/eveningEntertainmentBanner.png";
import shopsBanner from "../../assests/Images/shopsBanner.png";
import craftDemonstrationsBanner from "../../assests/Images/craftDemonstrationsBanner.png";
import AyurvedaYogaBanner from "../../assests/Images/AyurvedaYogaBanner.png";
import otherFacilitiesBanner from "../../assests/Images/otherFacilitiesBanner.png";
import sport from "../../assests/Images/sport.jpeg";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import "./Facilities.css";

export default function Facilities() {
	return (
		<div>
			<Container>
				<Row className="h">
					<div className="col-md-12">
						<div className="d-flex">
							
					
						</div>
						<div className="birdwelcome-body">
						<p className="bird-subtitler" style={{marginTop:'35px'}} id="r1">Restaurant and Bars</p>
							<img
								className="resortbird-watching"
								// id="birdwelcome-body"
								style={{ marginLeft: " -45px" }}
								width="100%vw" style={{ padding: "0px" }} 
								src={restaurant_bar}
							/>
							<p className="birdResortactivity-body">
								Ranweli's restaurant, offers a delicious buffet and a' la carte
								Sri Lankan and International cuisine. Vegetarian meals are
								available on request and in all buffets.
							</p>

							<p
								style={{ paddingTop: "5px" }}
								className="birdResortactivity-body"
							>
								{" "}
								In addition to the main restaurant, a pavilion bar by the
								swimming pool, constructed with eco-friendly and biodegradable
								material, provides snacks and beverages. This is a favourite
								spot among the guests to enjoy the ambiance and sunset. Also a
								small fruit stall called the "Palathuru Masse" located next to
								the main bar, serves fresh fruit juices and herbal drinks of
								medicinal value.
							</p>
							<p
								style={{ paddingTop: "5px" }}
								className="birdResortactivity-body"
							>
								{" "}
								Whenever possible fresh produce is procured from the local
								community. We also have our own organic vegetable plots.
							</p>
							<p>
								<b className="birdrest-subheading">
									Unique Dining Experience - <i>Ferry Dinner</i>
								</b>
							</p>
							<img className="pht1" src={photo16} />

							<p
								style={{ paddingTop: "5px" }}
								className="birdResortactivity-body"
							>
								{" "}
								This romantic ferry cruise with special dinner is served on a
								beautifully decorated ferry. The ferry will glide along the
								scenic river bordering the resort with a personal butler, a chef
								and a ferryman in attendance to meet all your dining needs. The
								Guests can select any one of the three specially designed menus.
								The menus offer a five course dinner with a choice of seafood or
								Sri Lankan/Eastern dishes or meat, as the main course.
							</p>
							<p
								style={{ paddingTop: "5px" }}
								className="birdResortactivity-body"
							>
								{" "}
								Tea and coffee will be served at the end of the meal. A bottle
								of sparkling wine is served to complement the dinner.
							</p>

							<p className="bird-subtitle1" id="r2">Sports Facilities</p>
							<img className="resortbird-cycling" width="100%vw" style={{ padding: "0px" }}  src={sport} />
							<p className="birdResortactivity-body">
								In order to preserve the tranquility and ambiance of the
								property, Ranweli offers only soft-impact sports and games
								facilities to our guests.
							</p>

							<p>
								<b className="birdrest-subheading">Indoor</b>
								<p
									style={{ paddingTop: "5px" }}
									className="birdResortactivity-body"
								>
									Squash, Darts, Carrom, Chess, Pool Billiards and Table Tennis
								</p>
							</p>
							<p>
								<b className="birdrest-subheading">Outdoor</b>
								<p
									style={{ paddingTop: "5px" }}
									className="birdResortactivity-body"
								>
									Beach Volleyball, Boccia, Cycling
								</p>
							</p>
							<p>
								<b className="birdrest-subheading">Water Sports</b>
								<p
									style={{ paddingTop: "5px" }}
									className="birdResortactivity-body"
								>
									Canoeing, Paddle boating, River Cruises, Fishing
								</p>
							</p>

							<p className="bird-subtitle1" id='r3'>Shops</p>
							<img className="resortbird-cycling" width="100%vw" style={{ padding: "0px" }}   src={shopsBanner} />

							<p>
								<b className="birdrest-subheading">
									Souvenir Shop (Nature & Hands Gallery)
								</b>
								<p
									style={{ paddingTop: "5px" }}
									className="birdResortactivity-body"
								>
									Selected hand-crafted, eco friendly products, herbal
									cosmetics, wall hangings, hand bags, purses made of reed ware
									& rush as well as many other artifacts made of local material
									by our craftsmen using skills passed down the generations for
									centuries are available at the souvenir shop.
								</p>
							</p>

							<p>
								<b className="birdrest-subheading">Jewellery Shops</b>
								<p
									style={{ paddingTop: "5px" }}
									className="birdResortactivity-body"
								>
									A selection of precious and semi-precious stone jewellery by
									Colombo Gem Crafts and Sangems & Jewellery<a href='http://www.sangems.com/' style={{textDecoration:'underline'}} className="home-link2"> www.sangems.com</a> 
								</p>
							</p>

							<p className="bird-subtitle1" id="r6">Evening Entertainment</p>
							<img
								className="resortbird-cycling"
								width="100%vw" style={{ padding: "0px" }} 
								src={eveningEntertainmentBanner}
							/>
							<p>
								<b className="birdrest-subheading">
									We offer live entertainment daily. They include:
								</b>
							</p>

							<ul className="birdactivity-list1">
								<li style={{ listStyle: "square" ,fontWeight:'normal' }}>
									Cultural show / Sri Lankan Dance
								</li>
								<li style={{ listStyle: "square",fontWeight:'normal'  }}>Live band</li>
								<li style={{ listStyle: "square" ,fontWeight:'normal' }}>Calypso band</li>
								<li style={{ listStyle: "square",fontWeight:'normal'  }}>Magic show</li>
								<li style={{ listStyle: "square" ,fontWeight:'normal' }}>Oriental band</li>
							</ul>

							<p className="bird-subtitle1" id="r4">Ayurveda</p>
							<img className="resortbird-cycling" width="100%vw" style={{ padding: "0px" }}  src={AyurvedaYogaBanner} />
							<p className="birdResortactivity-body">
								Ranweli's idyllic location provides tranquility and serenity
								amidst an expanse of land covering over 22 acres and featuring
								indigenous flora, offering excellent stimulation while soothing
								your senses and cleansing your body and mind. An Ayurvedic
								centre was opened at Ranweli in June 2004 in order to offer
								guests authentic Ayurvedic health treatments using medicinal
								herbs. A qualified Ayurvedic doctor with many years of
								experience is in charge of the centre. Ranweli also offers Yoga
								facilities by special arrangement.
							</p>

							<a href="/sss" style={{textDecoration:'underline'}} className="home-link2">
								<p className='fas-link' style={{ marginLeft: "-40px" }}>More Ayurveda & Yoga</p>
							</a>

							<p className="bird-subtitle1" id="r5">Other Facilities</p>

							<img className="resortbird-cycling" width="100%vw" style={{ padding: "0px" }}  src={otherFacilitiesBanner} />

							<p>
								<b className="birdrest-subheading">
									Other Facilities At Ranweli
								</b>
							</p>
							<ul className="birdactivity-list1">
								<li style={{ listStyle: "square"  ,fontWeight:'normal'}}>Beach-front Pool</li>
								<li style={{ listStyle: "square"  ,fontWeight:'normal'}}>
									Seminar & Conference Facilities
								</li>
								<li style={{ listStyle: "square" ,fontWeight:'normal' }}>
									Internet Café, FAX & IDD facilities
								</li>
							</ul>
						</div>
					</div>
				</Row>
			</Container>
		</div>
	);
}
