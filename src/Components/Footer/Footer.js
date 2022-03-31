import React from 'react'
import './Footer.css'
import { Container, Row } from 'react-bootstrap'
import partners_1 from '../../assests/Images/partners_1.jpeg'
import partners_2 from '../../assests/Images/partners_2.jpeg'
import partners_3 from '../../assests/Images/partners_3.jpeg'
import partners_4 from '../../assests/Images/partners_4.jpeg'
import partners_5 from '../../assests/Images/partners_5.jpeg'
import partners_6 from '../../assests/Images/partners_6.jpeg'
import partners_7 from '../../assests/Images/partners_7.jpeg'
import listmark from '../../assests/Images/listmark.jpeg'
import styles from './List.Module.css'; 

export default function Footer() {
  return (
    <div className='footer-body'>
        <Container>
        <Row className='partners' >
            {/* <div className='col-md-12'>
                  <h5>Partners | </h5>
                <div className='col-md-2'>
                    <img src={partners_1}/>
                </div>
                <div className='col-md-2'>
                <img src={partners_1}/>
                    </div>

               <div className='col-md-2'>
               <img src={partners_1}/>
                </div>

               <div className='col-md-2'>
               <img src={partners_1}/>
                </div>

               <div className='col-md-2'>
               <img src={partners_1}/>
                </div>

               <div className='col-md-2'>
               <img src={partners_1}/>
                </div>
                   */}
              

            {/* </div> */}

          <ul className='partner-list'style={{listStyle:'none',display:'inline-block',padding:'3px 12px'}} >
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><h5>Partners |</h5></li>
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><img className='parentImage' src={partners_1}/></li>
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><img className='parentImage' src={partners_2}/></li>
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><img className='parentImage' src={partners_3}/></li>
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><img className='parentImage' src={partners_4}/></li>
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><img className='parentImage'src={partners_5}/></li>
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><img className='parentImage' src={partners_6}/></li>
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><img className='parentImage' src={partners_7}/></li>
              
          </ul>
         
        </Row>
        <Row>
          <div className='col-md-4'>
            <p className='footer-subhedding'>Contact Ranweli</p>
            
              <div className='footerinfo' >
              <ul className=''>
              <li style={{listStyle:'square',paddingRight:'20px'}} className='footerinfo'> <img src={listmark}/>  Ranweli Holiday Village, Waikkal, Sri Lanka.</li>
              <li style={{listStyle:'square'}} className='footerinfo'> <img src={listmark}/> Phone: +94 31 2277359</li>
              <li style={{listStyle:'square'}} className='footerinfo'> <img src={listmark}/> Fax: +94 31 2277358</li>
              <li style={{listStyle:'square'}} className='footerinfo'> <img src={listmark}/> E-Mail: ranweli@slt.lk</li>
              </ul>
              </div>
            

          </div>

          <div className='col-md-4'>

          <p className='footer-subhedding'>Facilities</p>
            
            <div className='footerinfo' >
            <ul className=''>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Restaurant and Bars</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Sports Facilities</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Ayurvedic Centre</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Eco/Jewellery Shop</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Beachfront Poolp</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Evening Entertainment</li>
          
            </ul>
            </div>
            
            </div>

            <div className='col-md-4'>

            <p className='footer-subhedding'>Activities</p>
            
            <div className='footerinfo' >
            <ul className=''>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Bird Watching</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Nature Walk</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Cycling</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> River Cruise</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Tours Outside Ranweli</li>
            <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Butterfly Watching</li>
          
            </ul>
            </div>
            </div>
            
           
        </Row>
       
         
      
        </Container>
        <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        <div className='col-md-12 second-footer'>
          <p>Home |</p><p>The Resort |</p><p>Accommodation |</p><p>Accommodation |</p><p>Nature & Culture |</p><p>Ayurveda |</p><p>Weddings |</p><p>Rates & Reservations |</p><p>About Us |</p><p>Our Partners |</p><p>Awards & Recognition |</p><p>What's New |</p><p>Gallery |</p><p>Contact Us  </p>
          <p className='copyright'>Copyright © Ranweli Holiday Village 2013. All Rights Reserved.</p>
          <br></br>
         <p >Designed & Developed by Archmage</p>
            
            
          </div>
    </div>
  )
}

