import React from 'react';
import './designed.css';
import '../../components/CreatedDesigned/createdDesigned.css';
import Fade from 'react-reveal/Fade';

const Designed = () => {

  return(
    <div className="designedContainer">
      <Fade distance="20px" left>
        <div className="designedTextWrapper">
          <h2 className="creDesTextTitle">Designed</h2>
          <p className="creDesText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </Fade>
      <Fade distance="20px" right>
        <div className="designedImgWrapper">
          <img
            className="featureImage test"
            alt='model glasses'
            src="https://res.cloudinary.com/darrin-im/image/upload/v1575958454/sunglasses-girl-matte.jpeg.crdownload_mclljt.jpg"
          />
        </div>
      </Fade>
    </div>
  )
}


export default Designed;
