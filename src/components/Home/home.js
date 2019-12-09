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
          src="https://res.cloudinary.com/darrin-im/image/upload/v1575518925/fashion-landing_bnxm5x.jpg"
          className="homeImage"
          />
      </div>
      <RightNav />
    </div>
  )
}

export default Home;
