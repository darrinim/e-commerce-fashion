import React from 'react';
import './trending.css';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';

class Trending extends React.Component {
  state = {
  slideIndex: 0
};

  render() {
  return(
    <div className="trendingContainer">
      <h2 className="trendingTitle">Trending</h2>
      <Carousel
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
          <Link to="/store">
            <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1577759132/item6_n6a0si.png' alt='glasses' />
          </Link>
          <p>Aviators</p>
          <p>$40</p>
        </div>
        <div className="trendingImage">
          <Link to="/store">
            <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1577758815/item4_xfowdg.png" alt='glasses' />
          </Link>
          <p>Spectacle</p>
          <p>$30</p>
        </div>
        <div className="trendingImage">
          <Link to="/store">
            <img className="homeImage" src='https://res.cloudinary.com/darrin-im/image/upload/v1577759132/item6_n6a0si.png' alt='glasses' />
          </Link>
          <p>Cat eye</p>
          <p>$50</p>
        </div>
        <div className="trendingImage">
          <Link to="/store">
            <img className="homeImage" src="https://res.cloudinary.com/darrin-im/image/upload/v1577758815/item4_xfowdg.png" alt='glasses' />
          </Link>
          <p>Ray Bans</p>
          <p>$90</p>
        </div>
      </Carousel>
    </div>
  )
  }
}

export default Trending;
