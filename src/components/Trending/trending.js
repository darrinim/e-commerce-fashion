import React from 'react';
import './trending.css';
import Carousel from 'nuka-carousel';

class Trending extends React.Component {
  state = {
  slideIndex: 0
};

  render() {
  return(
    <div className="trendingContainer">
      <h2 className="trendingTitle">Trending</h2>
      <Carousel
        frameOverflow
        slideIndex={this.state.slideIndex}
        framePadding='5%'
        cellAlign='center'
        cellSpacing={20}
        autoGenerateStyleTag={true}
        slidesToShow= {3}
        autoplay= { true }
        wrapAround= { true }
      >
        <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' alt='glasses' />
        <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" alt='glasses' />
        <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' alt='glasses' />
        <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" alt='glasses' />
      </Carousel>
    </div>
  )
  }
}

export default Trending;
