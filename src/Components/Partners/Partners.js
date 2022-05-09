import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import './Parners.css'
// import bird from "../../assests/Images/kingfish.png";
 import partnerlogos from "../../assests/Images/partnerlogos.png";
 import our_partners from "../../assests/Images/our_partners.jpeg";
import Footer from "../Footer/Footer";


export default function Partners() {
	return (
		<div>
			<Container>
				<Row className="ph">
				<img width="100%vw" style={{padding:'0px'}} src={our_partners} />

					<div className="col-md-8">
						
							<div className="uper-body">
							<h2 className="home-welcome">Our Partners</h2>
						
						<div className="welcome-body">
							<p className="title2">
							<br></br>
								<b>The International Ecotourism Society (TIES)</b>
							</p>

							<p className="activity-body" style={{ marginTop: "-25px" }}>
								Ranweli is a sponsor member of The International Ecotourism
								Society (TIES), based in Washington DC, USA. This society is
								widely regarded as the pre-eminent organization in the field of
								Ecotourism according to the Wall Street Journal. Late Mr.
								Chandra de Silva, CEO of Ranweli, was invited in 1998 to the
								Advisory Board of TIES, and was elected to the Board of
								Directors in 2004.
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.ecotourism.org/" className="home-linkay">
								www.ecotourism.org
							</a>

							<p className="title2">
							<br></br>
								<b>Ecoclub</b>
							</p>

							<p className="activity-body" style={{ marginTop: "-25px" }}>
								Ranweli is an ecolodge member of ecoclub.com. It was also the
								winner of the first annual ecolodge award, in 2004 for a
								bio-farming project at DBV Girls School.
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.ecoclub.com/" className="home-linkay">
								www.ecoclub.com
							</a>

							<p className="title2">
							<br></br>
								<b>Responsibletravel.com</b>
							</p>

							<p className="activity-body" style={{ marginTop: "-25px" }}>
								Consequent to winning the British Airways Tourism for Tomorrow
								Awards in 2003, we were invited to be featured in this web site.
							</p>
							<a href="https://www.responsibletravel.com/" className="home-linkay">
								www.responsibletravel.com
							</a>

							<p className="title2">
							<br></br>
								<b>Tour India</b>
							</p>

							<p className="activity-body" style={{ marginTop: "-25px" }}>
								A leading Ecotourism tour operator in Kerala.
							</p>
							<a href="http://www.tourindia.com/htm/homepage.html" className="home-linkay">
								www.tourindia.com
							</a>
							<p className="title2" >
							<br></br>
								<b>Field Ornithology Group of Sri Lanka (FOGSL)</b>
							</p>

							<p className="activity-body" style={{ marginTop: "-25px" }}>
								Field Ornithology Group of Sri Lanka (FOGSL) is a reputed NGO
								under the Department of Zoology, University of Colombo.
							</p>
							<a href="http://ww1.fogsl.net/" className="home-linkay">
								www.fogsl.net
								<br></br>
							</a>
							
							<p className="title2">
							<br></br>
								<b>Birdlife International</b>
							</p>

							<p className="activity-body" style={{ marginTop: "-25px" }}>
								We are an affiliate of Birdlife International
							</p>
							<a href="https://web.archive.org/web/20200217045815/http:/www.birdlife.org/" className="home-linkay">
								www.birdlife.org
							</a>

							<br></br>
							<br></br>

							<p style={{fontSize:'12px'}}>
								<i><b>** WHITE-THROATED KINGFISHER </b>Halcyon smyrnensis
								S.Layasudu Pilihuduwa S.Kondaya 30cm. White throat and breast.
								Blue upperpart. BrR. All Zones.Very Common</i><br></br>
								
							</p>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
						</div>
					</div>
							</div>

					

					<div className="col-md-4">
						<Row>
							<div className="col-md-12">
								<img className="acco-img" width="100%vw" src={partnerlogos} />
							</div>
						</Row>
					</div>

					<br></br>
					<br></br>
				</Row>

			
			</Container>
			<Footer />
		</div>
	);
}
