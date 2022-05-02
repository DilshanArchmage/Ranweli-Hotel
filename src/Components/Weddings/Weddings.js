import React, { useState, useMemo } from "react";

import { Col, Row, Container, Button } from "react-bootstrap";
import seperator from "../../assests/Images/seperator.png";
import bird from "../../assests/Images/kingfish.png";
import pdfIcon from "../../assests/Images/pdfIcon.jpeg";
import wedding from "../../assests/Images/wedding.jpeg";
import weddingPics from "../../assests/Images/weddingPics.jpeg";
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
import "./Weddings.css";

export default function Weddings() {
	return (
		<div>
			<Container>
				<Row className="wdh">
					<img width="100%vw" style={{ padding: "0px" }} src={wedding} />

					<div className="col-md-8">
						<div className="d-flex">
							<img className="birdimg" src={bird} />

							<h2 className="home-welcome">Wedding Ceremonies</h2>
						</div>
						<div className="welcome-body">
							<p className="activity-body">
								The wedding ceremony commences with the bride arriving in a
								decorated ferry from across the scenic river; the groom meets
								her at the entrance pier of the holiday village.
							</p>
							<p className="activity-body">
								The couple is then led in a procession with traditional drummers
								and dancers along the long walkway to the garden where the
								wedding ceremony takes place.
							</p>
							<p className="activity-body">
								Upon entering the garden the couple is welcomed by the master of
								the <i>'Poruwa'</i>ceremonies - the most important part of the
								wedding. The <i>'Poruwa'</i> is a raised platform on which the couple
								stand on for the nuptial rites. It is decorated with strands of
								Jasmine, Lotus or <i>Gokkola:</i> made of young coconut fronds of a
								pale yellow hue. Also clay pots <i>(Pun kalas)</i> are placed in front
								of the dais together with young coconut flowers and oil lamps.
								The <i>‘Pun kalas’</i>  are symbols of prosperity, happiness, health and
								wealth to the new couple.
							</p>
							<p className="activity-body">
								The wedding ceremony is conducted in accordance with traditional
								Buddhist rituals which have been observed for centuries. The
								bride is led to the left side of the <i>'Poruwa'</i> while the groom is
								ushered to the right. While the couple stands on the <i>'Poruwa'</i>,
								wedding hymns <i>(Mangala astaka) </i>are chanted, the purpose being to
								invoke the blessing of the Deities. Separately a bevy of young
								girls sing <i>‘Jayamangala gatha’</i>, at the conclusion of which the
								couple descend from the <i>'Poruwa'</i>and light the traditional oil
								lamp. The formal registration takes place in the presence of a
								Registrar and witnesses.
							</p>
							<p className="activity-body">
								Later the couple and guests are served with traditional Sri
								Lankan sweetmeats and in the evening the couple will enjoy a
								night cruise in a hand pulled ferry under the starry sky. While
								cruising amidst these serene surroundings a personal butler will
								serve them a freshly prepared gourmet meal accompanied with wine
								and champagne.
							</p>

							<img width="100%vw" src={weddingPics} />
							<br></br>
							<br></br>
							<img className="img-fluid separator" src={seperator} />
							<br></br>
							<br></br>
							<p>
								<br></br>
								<i>
									<b>** ALEXANDRINE PARAKEET </b>psittacula eupatria S. Labu
									Girawa 51cm.Red patch on shoulder. Male - rose-pink half
									collar. F.male - no ring.BrR. LC.Common.
								</i>
							</p>
						</div>
					</div>

					<div className="col-md-4">
						<Row>
							<p className="wedding-top">
								1st January 2014 to 31st December 2015
							</p>
							<div
								className="col-md-12 wed-tab"
								style={{ textAlign: "justify" }}
							>
								<table>
									<tr>
										<th>Standard Foreign Wedding Package (Rates in EURO)</th>
									</tr>
									<tr>
										<td>
											<div className="weddingTab-data">
												<p className="">
													Registration, stamp fees and translation of marriage
													documents
												</p>
												<p>
													Decorated stand (Poruwa) and venue; decorated ferrys
												</p>
												<p>Dancers, drummers and singers</p>
												<p>
													Bouquet for bride, button hole for groom. Fresh
													flowers from our garden or flowers from a florist.
												</p>
												<p>Wedding cake</p>
												<p>Traditional Sri Lankan sweets, fruits and drinks </p>
												<p>
													Special dinner with a bottle of wine on board raft
													(ferry dinner for the couple).
												</p>
											</div>
										</td>
									</tr>
									<tr>
										<p className="table-subhead">
											Total cost of wedding package 700
										</p>
										<hr></hr>

										<tr>
											<div className="inside-table">
												<table>
													
														<th>Extras</th>
													
														<th>Rates (EUR)</th>
													

													<tr>
														<td>
															<p>Photographs - 36 ( 4 R size )</p>
														</td>
														<td>
															<p>120</p>
														</td>
													</tr>
													<tr>
														<td>
															<p>Edited 60 minute video</p>
														</td>
														<td>
															<p>230</p>
														</td>
													</tr>
													<tr>
														<td>
															<p>
																Traditional Wedding Outfits for Bride & Groom
															</p>
														</td>
														<td>
															<p>290</p>
														</td>
													</tr>
													<tr>
														<td>
															<p>
																Hiring of traditional jewellery for the Bride
															</p>
														</td>
														<td>
															<p>65</p>
														</td>
													</tr>
													<tr>
														<td>
															<p>Hair dressing and make up</p>
														</td>
														<td>
															<p>105</p>
														</td>
													</tr>
													<tr>
														<td>
															<p>Wedding lunch/dinner for guests (per head)</p>
														</td>
														<td>
															<p>28</p>
														</td>
													</tr>
												</table>
											</div>
										</tr>
									</tr>

									<tr></tr>
									<tr></tr>
								</table>
								<div className="weeding-footer">
									<p>
										<br></br>
										 
											{" "}
											The above rates are inclusive of government taxes and
											service charges.
										 
									</p>
									<p>All rates are subject to change.</p>
								</div>
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
