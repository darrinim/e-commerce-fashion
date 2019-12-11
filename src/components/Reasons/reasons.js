import React from 'react';
import './reasons.css';
import Charity from './Charity/charity';
import Recycled from './Recycled/recycled';
import Shipping from './Shipping/shipping';

const Reasons = () => {

  return(
    <div className="reasonsContainer">
      <Recycled />
      <Shipping />
      <Charity />
    </div>
  )
}

export default Reasons;
