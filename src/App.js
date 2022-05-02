import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import SecondNavBar from "./Components/NavigationBar/SecondNavBar/SecondNavBar";
import TopNavBar from "./Components/NavgBar/TopNavBar";
import {
	BrowserRouter,
	Routes,
	Link,
	Route,
	Navigate,
	NavLink,
} from "react-router-dom";
import Aboutus from "./Components/Aboutus/Aboutus";
import Activities from "./Components/Activities/Activities";
import Resort from "./Components/Resort/Resort";
import Accomadation from "./Components/Accomadation/Accomadation";
import EnvironmentPolicies from "./Components/EnvironmentPolicies/EnvironmentPolicies";
import Ayurweda from "./Components/Ayurweda/Ayurweda";
import Reservations from "./Components/Reservations/Reservations";
import WhatsNew from "./Components/WhatsNew/WhatsNew";
import Weddings from "./Components/Weddings/Weddings";

import Gallery from "./Components/Gallery/Gallery";
import Contactus from "./Components/Contactus/Contactus";
import Partners from "./Components/Partners/Partners";
import Offers from "./Components/Offers/Offers";
import Awards from "./Components/Awards/Awards";
import Videos from "./Components/Videos/Videos";
import Pagination from "./Components/WhatsNew/Pagination";
import BritishSchool from "./Components/WhatsNew/BritishSchool"
import AsianGreening from "./Components/WhatsNew/AsianGreening";
import KualaLumpurVisited from "./Components/WhatsNew/KualaLumpurVisited";
import Aurudu2012 from "./Components/WhatsNew/Aurudu2012";
import EchoLodge from "./Components/WhatsNew/EchoLodge";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Facilities from "./Components/Resort/Facilities";

function App() {
	return (
		<div>
			<Container>
				<section>
					<div className="body-container">
						{/* <NavigationBar /> */}
						{/* <div className="secondfooter">
							<SecondNavBar />
						</div> */}
						{/* <MobileMenu/> */}
						<TopNavBar />
						<SecondNavBar />
						<BrowserRouter>
							<Routes>
								<Route exact path="/" element={<Home />} />
								<Route path="/about" element={<Aboutus />} />
								<Route path="/activity" element={<Activities />} />
								<Route path="/resort" element={<Resort />} />
								<Route path="/accomadation" element={<Accomadation />} />
								<Route path="/environment" element={<EnvironmentPolicies />} />
								<Route path="/ayurweda" element={<Ayurweda />} />
								<Route path="/reservation" element={<Reservations />} />
								<Route path="/whatsnew" element={<WhatsNew />} />

								<Route path="/gallery" element={<Gallery />} />
								<Route path="/contact" element={<Contactus />} />
								<Route path="/video" element={<Videos />} />

								<Route path="/parnters" element={<Partners />} />
								<Route path="/offers" element={<Offers />} />
								<Route path="/award" element={<Awards />} />
								<Route path="/pagination" element={<Pagination />} />
								<Route path='/britishschool' element={<BritishSchool/>}/>
								<Route path='/asiangreening' element={<AsianGreening/>}/>
								<Route path='/kualalumpurvisit' element={<KualaLumpurVisited/>}/>
								<Route path='/aurudu2012' element={<Aurudu2012/>}/>
								<Route path='/echolodge' element={<EchoLodge/>}/>
								<Route path='/mobilenav' element={<MobileMenu/>}/>
								<Route path="/wedding" element={<Weddings/>}/>
								<Route path="/facilities" element={<Facilities/>}/>

							</Routes>
						</BrowserRouter>
					</div>
				</section>
			</Container>
		</div>
	);
}

export default App;
