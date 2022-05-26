import React from 'react'
import images from '../images'
import  './hero.css'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-section"> 
            <h1>Cari Cari</h1>
            <p>Live from their sofa to yours , Get closer to your favourite artists and never miss out</p>
        </div>
        <div className="hero-icons" >
             
             <img src={images.Element} alt="" />
             <img src={images.Default} alt="" />
             <img src={images.Default} alt="" />
             <img src={images.Default} alt="" />
        </div>
    </div>
  )
}

export default Hero