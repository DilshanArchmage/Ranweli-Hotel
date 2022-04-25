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

          <ul className='partner-list'style={{flexWrap:'wrap'}} >
              <li style={{listStyle:'none',display:'inline-block',padding:'3px 10px'}}><h5>Partners |</h5></li>
              <a href=''><li style={{listStyle:'none',display:'inline-block'}}><img className='parentImage' width="100%vw"  src={partners_1}/></li></a>
              <a href='https://ecoclub.com/'><li style={{listStyle:'none',display:'inline-block'}}><img className='parentImage' width="100%vw" src={partners_2}/></li></a>
              <a href='https://www.responsibletravel.com/'><li style={{listStyle:'none',display:'inline-block'}}><img className='parentImage' width="100%vw" src={partners_3}/></li></a>
              <a href='https://ecotourism.org/'><li style={{listStyle:'none',display:'inline-block'}}><img className='parentImage' width="100%vw"  src={partners_4}/></li></a>
              <a href='http://www.birdlife.org/'><li style={{listStyle:'none',display:'inline-block'}}><img className='parentImage' width="100%vw" src={partners_5}/></li></a>
              <a href=''><li style={{listStyle:'none',display:'inline-block'}}><img className='parentImage' width="100%vw"  src={partners_6}/></li></a>
              <a href=''><li style={{listStyle:'none',display:'inline-block'}}><img className='parentImage' width="100%vw"  src={partners_7}/></li></a>
             
             
              
          </ul>
         
        </Row>
        <Row>
          <div className='col-md-4'>
            <p className='footer-subhedding'>Contact Ranweli</p>
            
              <div className='footerinfo' >
              <ul className=''>
              <li style={{listStyle:'square'}} className='footerinfo'> <img src={listmark}/>  Ranweli Holiday Village, Waikkal, Sri Lanka.</li>
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
           <a href='/resort' style={{textDecoration:'none'}}> <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Restaurant and Bars</li></a>
           <a href='/resort' style={{textDecoration:'none'}}> <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Sports Facilities</li></a>
           <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Ayurvedic Centre</li></a>
           <a href='/resort' style={{textDecoration:'none'}}> <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Eco/Jewellery Shop</li></a>
           <a href='/resort' style={{textDecoration:'none'}}> <li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Beachfront Poolp</li></a>
           <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Evening Entertainment</li></a>
          
            </ul>
            </div>
            
            </div>

            <div className='col-md-4'>

            <p className='footer-subhedding'>Activities</p>
            
            <div className='footerinfo' >
            <ul className=''>
            <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Bird Watching</li></a>
            <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Nature Walk</li></a>
            <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Cycling</li></a>
            <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> River Cruise</li></a>
            <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Tours Outside Ranweli</li></a>
            <a href='/resort' style={{textDecoration:'none'}}><li style={{listStyle:'square'}} className='footerinfo'><img src={listmark}/> Butterfly Watching</li></a>
          
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
        <div className='second-footer' style={{display:'flex',direction:'row',justifyContent:'center',color:'#b1a079'}}>
         <a href='/' className='footer-link2'>Home |</a> <a href='/resort' className='footer-link2'><p>The Resort |</p></a><a href='/accomadation' className='footer-link2'><p>Accommodation |</p></a><a href='/environment' className='footer-link2'><p>Nature & Culture |</p></a><a href='/ayurweda' className='footer-link2'><p>Ayurveda |</p></a><a href='/wedding' className='footer-link2'><p>Weddings |</p></a><a href='/reservation' className='footer-link2'><p>Rates & Reservations |</p></a><a href='/aboutus' className='footer-link2'><p>About Us |</p></a><a href='/partners' className='footer-link2'><p>Our Partners |</p></a><a href='/awards' className='footer-link2'><p>Awards & Recognition |</p></a><a href='/whatsnew' className='footer-link2'><p>What's New |</p></a><a href='/gallery' className='footer-link2'><p>Gallery |</p></a><a href='/contactus' className='footer-link2'><p>Contact Us  </p></a>
          <p className='copyright'>Copyright © Ranweli Holiday Village 2013. All Rights Reserved.</p>
          <br></br>
         <p >Designed & Developed by Archmage</p>
            
            
          </div>
    </div>
  )
}

