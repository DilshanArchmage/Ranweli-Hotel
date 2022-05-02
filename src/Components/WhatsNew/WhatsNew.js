import React, { useState, useMemo } from "react";

import { Col, Row, Container, Button } from "react-bootstrap";
import "./WhatsNew.css";
import Pagination from "./Pagination.js";
import bird from "../../assests/Images/kingfish.png";
import pdfIcon from "../../assests/Images/pdfIcon.jpeg";
import inner_banner06 from "../../assests/Images/inner_banner06.jpeg";
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
import data from "./data/data.json";
import "./Pagination.js";

let PageSize = 4;

export default function WhatsNew() {
	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<div>
			<Container>
				<Row className=" wh">
				<img width="100%vw" style={{padding:'0px'}} src={inner_banner06} />

					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">What's New</h2>
						</div>
						<div className="welcome-body">
							{currentTableData.map((item) => {
								return (
									<p className="title2">
										<b>{item.topic}</b>
										<Row>
											<div className="col-md-6">
												<br></br>
												<img className="timthumb" src={item.img} />
											</div>

											<div className="col-md-6">
												<p className="activity-body">{item.desc}</p>
												<Button
													variant="primary"
													className="submit1"
													type="submit"
													href={item.link}
												>
													Read More
												</Button>
											</div>
										</Row>
									</p>
								);
							})}
							<br></br>
							<>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={data.length}
									pageSize={PageSize}
									onPageChange={(page) => setCurrentPage(page)}
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
										<th></th>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612134604/http://ranweli.com/images/write_up/honeymooh_in_paradise.pdf"
										>
											<td> Honeymoon in paradise</td>
										</a>

										<td>
											<img src={pdfIcon} />
										</td>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612111053/http://ranweli.com/images/write_up/bird_friendly_eco_resort.pdf"
										>
											<td>Bird friendly eco resort</td>
										</a>
										<td>
											<img src={pdfIcon} />
										</td>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612080933/http://ranweli.com/images/write_up/ranweli_among_top_10_eco-destinations.pdf"
										>
											<td>Ranweli among top 10 eco-destinations</td>
										</a>
										<td>
											<img src={pdfIcon} />
										</td>
									</tr>
									<tr>
										<a
											style={{ textDecoration: "none" }}
											href="https://web.archive.org/web/20190612150301/http://ranweli.com/images/write_up/Ranweli_golden_lure.pdf"
										>
											<td>Ranweli's golden lure</td>
										</a>
										<td>
											<img src={pdfIcon} />
										</td>
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
