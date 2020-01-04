import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {

  return(
    <div className="heroContainer">
      <Link to="/store">
        <img
          className="heroImage"
          src="https://res.cloudinary.com/darrin-im/image/upload/v1576002738/hero-sunglasses_xyrbpu.jpg"
          alt='hero'
        />
      <p className="heroTitle">Signature Looks</p>
      </Link>
    </div>
  )
}


export default Hero;
