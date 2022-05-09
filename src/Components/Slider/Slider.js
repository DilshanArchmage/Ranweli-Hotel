import React from 'react'
import { Carousel } from 'react-bootstrap'
import slideimg1 from '../../assests/Images/slideimg1.jpeg'
import slideimg2 from '../../assests/Images/slideimg2.jpeg'
import slideimg3 from '../../assests/Images/slideimg3.jpeg'
import slideimg4 from '../../assests/Images/slideimg4.jpeg'
import slideimg5 from '../../assests/Images/slideimg5.jpeg'

export default function Slider() {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      width="100%vw"
      src={slideimg1}
      style={{padding:'0px'}}
      
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="100%vw"
      src={slideimg4}
      style={{padding:'0px'}}
      
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="100%vw"
      src={slideimg5}
      style={{padding:'0px'}}
     
    />
    

   
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      width="100%vw"
      src={slideimg3 }
      style={{padding:'0px'}}
     
    />
    

   
  </Carousel.Item>

  <Carousel.Item>
    <img
      width="100%vw"
      src={slideimg2 }
      style={{padding:'0px'}}
     
    />
    

   
  </Carousel.Item>
</Carousel>
    </div>
  )
}
