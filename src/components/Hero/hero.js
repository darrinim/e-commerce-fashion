import React from 'react';
import './hero.css';

const Hero = () => {

  return(
    <div className="heroContainer">
      <img
        className="heroImage"
        src="https://res.cloudinary.com/darrin-im/image/upload/v1576002738/hero-sunglasses_xyrbpu.jpg" />
      <p className="heroTitle">Signature Looks</p>
    </div>
  )
}


export default Hero;
