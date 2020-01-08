import React from 'react';
import './home.css';
import LeftNav from '../../components/LeftNav/leftNav';
import RightNav from '../../components/RightNav/rightNav';


const Home = () => {

  return(
    <div className="homeContainer">
      <LeftNav />
      <div className="homeImageWrap">
        <img
          alt='home'
          src="https://res.cloudinary.com/darrin-im/image/upload/v1575911012/fashion-landing_gr2lql.jpg"
          className="homeImage"
        />
      </div>
      <RightNav />
    </div>
  )
}

export default Home;
