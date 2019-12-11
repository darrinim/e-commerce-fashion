import React from 'react';
import './footer.css';
import Carousel from 'nuka-carousel';

class Footer extends React.Component {
  state = {
  slideIndex: 0
};

  render() {
  return(
    <div className="footerContainer">
      <Carousel
        framePadding='10%'
        cellAlign='center'
        cellSpacing={20}
        autoGenerateStyleTag={true}
        slidesToShow= {3}
        autoplay= { true }
        wrapAround= { true }
      >
        <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' />
        <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" />
        <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' />
        <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" />
      </Carousel>
    </div>
  )
  }
}

export default Footer;
