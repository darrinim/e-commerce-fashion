import React from 'react';
import './created.css'
import '../../components/CreatedDesigned/createdDesigned.css';
import Fade from 'react-reveal/Fade';

const Created = () => {

  return(
    <div className="createdContainer">

      <Fade distance="20px" left>
        <div className="createdImgWrapper">
          <img
            className="featureImageCr test"
            alt='model glasses'
            src="https://res.cloudinary.com/darrin-im/image/upload/v1575958444/sunglasses-guy_gz0pq7.jpg"
          />
        </div>
      </Fade>

      <Fade distance="20px" right>
        <div className="createdTextWrapper">
          <h2 className="creDesTextTitle">Created</h2>
          <p className="creDesText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </Fade>
      
    </div>
  )
}


export default Created;
