import React from "react";

import { Col, Row, Container, Button} from "react-bootstrap";
import './Award.css'


import bird from "../../assests/Images/kingfish.png";
import seperator from "../../assests/Images/seperator.png";
import inner_banner03 from "../../assests/Images/inner_banner03.jpeg";
import icon_bulet1 from "../../assests/Images/icon_bulet1.jpeg";
import awards_list from "../../assests/Images/awards_list.jpeg";
import craftDemonstrationsBanner from "../../assests/Images/craftDemonstrationsBanner.png";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import accomodation from '../../assests/Images/accomodation.jpeg'

export default function Awards() {
  return (
    <div>
        <Container>
				
				<Row className=" h">
				<img width="100%vw" style={{padding:'0px'}} src={inner_banner03 } />
					
				
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Awards & Recognition</h2>
						</div>
						<div className="welcome-body ">
							<ul className="award-link">
                <div className="award-link">
                <li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> Ranweli Holiday Village has been awarded with Top Hotel Partner 2016!</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> Ranweli Holiday Village has been rewarded with a HolidayCheck Award 2014!</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> Ranweli Holiday Village has been recognized as a 2013 Wild Asia Responsible Tourism Awards Finalist.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>EUSWITCH Asia</b> Greening Hotels Awards 2013 - Ranweli Holiday Village has been adjudged the EUI SWITCH Asia <b>Best Green Hotel, Runner Up </b> in large Hotels (over 50 Rooms) & Boutique Hotels Category)</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>EU SWITCH Asia</b> - Greening Hotels Awards 2013 Ranweli Holiday Village has been adjudged the EUI SWITCH<b> Water Conservation Champion </b> in the Large Hotels (over 50 Rooms) & Boutique Hotels Category</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/>Ranweli Holiday Village has been rewarded with a HolidayCheck Award 2013!</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/>Ranweli has won the Trip Advisor Travellers' Choice Award 2013!</li>

                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>EU SWITCH - </b>Asia Greening Hotels AWARDS 2012 Certificate of Merit for Energy and Water Conservation and Waste Management in the Large Hotels (over 50 rooms) & Boutique Hotels Category</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>Ranweli receives Trip Advisor Certificate for 2012</b></li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> Ranweli was included in a recent publication and is the only Sri Lankan property included. The book <b>"Authentic Eco Lodges"</b> is written by <b>Mr. Hitesh Mehta</b> who is one of the world's leaders in sustainable landscapes and a visionary in his field.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>Ranweli receives food safety certifications</b>
                <p><b>HACCP -</b> Hazard Analysis Critical Control Point or HACCP is a systematic preventive approach to food safety and pharmaceutical safety that addresses physical, chemical, and biologicalhazards as a means of prevention rather than finished product inspection.
                <b>ISO 22000</b> - ISO 22000 is a standard developed by the International Organization for Standardization dealing with food safety,</p></li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> Ranweli Holiday Village named as one of the <b>Top 50 Eco-Lodges</b> of 2009 by the editors of <b>National Geographic Adventure</b> magazine.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> World Tourism Organization (WTO) recognizes Ranweli Holiday Village as one of the <b>Top 55 enterprises that promote good practices in Ecotourism</b> globally.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>British Airways Tourism for Tomorrow Awards :</b> Chosen as a highly commended project in the environmental experience category out of 75 entries from 38 countries in 2004.</li>                
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>USA Today ,</b> included Ranweli in an article titled "10 great places to tread lightly on Earth" in their August 2004 issue.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> Winner of the first annual Ecoclub <b>Ecolodge Award - </b>2004.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>Virgin Holidays Silver Award</b> for sustainable tourism - 2004.</li>               
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>Virgin Holidays Gold Award </b>for best Eco Friendly hotel - 2004.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>Association of Chartered Certified Accountants (ACCA) :</b> National award for sustainability; integration of business within the environment in 2004.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b>Entrepreneur of the Year Award :</b>The former CEO, Mr. Chandra De Silva was the recipient of this award in 1999 for introducing Sustainable Nature Tourism to Sri Lanka.</li>
                <br></br><li className="award-link"  style={{listStyle:'none'}}><img src={icon_bulet1}/> <b> Sri Lanka Green Award 1998</b> Presented by the Sri Lanka Environmental Journalists Forum (SLEJF) in recognition of outstanding practical achievements in the protection and improvement of the environment.</li>
                <br></br>
                <div className="col-md-12">
                <img className='separator' src={seperator}/>
                </div>
                <p>
								<br></br>
								<i><b>** WHITE-BELLIED DRONGO </b> Dicrurus caerulescens S. Podu Kauda
                 24cm. White vent Forked tail BrR-All Zones. Very common.</i>
							</p>







                </div>
              </ul>

						
							
						
						

						 

							
						
						
								
						</div>
					</div>

					<div className="col-md-4">
						<Row>
							<div className="col-md-12">
							<img className="acco-img" src={awards_list} />
							</div>

						</Row>
						
					</div>
					
					<br></br>
					<br></br>
				</Row>

				<Footer />
				
			</Container>
    </div>
  )
}
