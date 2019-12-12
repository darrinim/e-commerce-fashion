import React from 'react';
import './charity.css';

const Charity = () => {

  return(
    <div className="charityContainer">
      <img
        className="charityImg reasonImg"
        src="https://res.cloudinary.com/darrin-im/image/upload/v1576126219/hearttest_j4gnrz.png" />
      <div>
        <h3 className="reasonTitle">Charity</h3>
        <p className="reasonText">Things that we donate to here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
    </div>
  )
}

export default Charity;
