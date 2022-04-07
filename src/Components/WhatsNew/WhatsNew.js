import React,{useState,useMemo} from "react";

import { Col, Row, Container, Button } from "react-bootstrap";
import "./WhatsNew.css";
import Pagination from './Pagination.js';
import bird from "../../assests/Images/kingfish.png";
import seperator from "../../assests/Images/seperator.png";
import room_types from "../../assests/Images/room_types.jpeg";
import timthumb1 from "../../assests/Images/timthumb (1).jpeg";
import timthumb2 from "../../assests/Images/timthumb (2).jpeg";
import timthumb3 from "../../assests/Images/timthumb (3).jpeg";
import butterflyWatchingBanner from "../../assests/Images/butterflyWatchingBanner.png";
import natureToursBanner from "../../assests/Images/natureToursBanner.png";
import Tourism_Awards from "../../assests/Images/Tourism_Awards.gif";
import Footer from "../Footer/Footer";
import archaeologicalToursBanner from "../../assests/Images/archaeologicalToursBanner.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import SecondNavBar from "../NavigationBar/SecondNavBar/SecondNavBar";
import timthumb from "../../assests/Images/timthumb.jpeg";
import data from './data/data.json'
import './Pagination.js' 


let PageSize=4;

export default function WhatsNew() {
	const[currentPage,setCurrentPage]=useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	  }, [currentPage]);
	
	return (
		<div>
			<Container>
				<Row className=" h">
					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">What's New</h2>
						</div>
						<div className="welcome-body">
							
						{currentTableData.map(item => {
                          return (
							  
							<p className="title2">
								 <b>{item.topic}</b> 
								 <Row>
								<div className="col-md-6">
									<br></br>
								<img className="timthumb" src={item.img} />
								</div>

								 <div className="col-md-6">
								 <p className="activity-body">
								 {item.desc}
								 </p>

								 </div>
								 

								 </Row>
								
							 		
							</p>
							
							
							  );
							 
							// <Row>
							// 	<div className="col-md-6">
							// 		<img className="timthumb" src={timthumb1} />
							// 	</div>
							// 	<div className="col-md-6">
							// 		<p className="activity-body">
							// 			The International School of Kuala Lumpur visited Ranweli for
							// 			the 3rd consecutive year from the 20th of October to the
							// 			26th of October 2012. The kids enjoyed different activities
							// 			organized by the Ranwe ........
							// 		</p>
							// 		<Button variant="primary" className="submit1" type="submit">
							// 			Read More
							// 		</Button>
							// 	</div>
							// </Row>
})}
							<br></br>
							<>
      
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
						</div>
					</div>

					<div className="col-md-4">
						<Row>
							<div className="col-md-12 whts-tab">
								<table>
									<tr>
										<th>Write Up</th>
									</tr>
									<tr>
										<td>Alfreds Futterkiste</td>
									</tr>
									<tr>
										<td>Centro comercial Moctezuma</td>
									</tr>
									<tr>
										<td>Ernst Handel</td>
									</tr>
									<tr>
										<td>Island Trading</td>
									</tr>
									<tr>
										<td>Laughing Bacchus Winecellars</td>
									</tr>
									<tr>
										<td>Magazzini Alimentari Riuniti</td>
									</tr>
								</table>
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
