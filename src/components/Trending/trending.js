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
        <div className="trendingImage">
          <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' alt='glasses' />
          <p>Aviators</p>
          <p>$40</p>
        </div>
        <div className="trendingImage">
          <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" alt='glasses' />
          <p>Spectacle</p>
          <p>$30</p>
        </div>
        <div className="trendingImage">
          <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' alt='glasses' />
          <p>Cat eye</p>
          <p>$50</p>
        </div>
        <div className="trendingImage">
          <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" alt='glasses' />
          <p>Ray Bans</p>
          <p>$90</p>
        </div>
      </Carousel>
    </div>
  )
  }
}

export default Trending;
