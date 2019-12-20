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
        <div>
          <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' alt='glasses' />
          <p>yoooo</p>
        </div>
        <div>
          <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" alt='glasses' />
          <p>yoooo</p>
        </div>
        <div>
          <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg' alt='glasses' />
          <p>yoooo</p>
        </div>
        <div>
          <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1576090511/feature-sunglasses_vrwumq.jpg" alt='glasses' />
          <p>yoooo</p>
        </div>
      </Carousel>
    </div>
  )
  }
}

export default Trending;
