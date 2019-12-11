import React from 'react';
import './shipping.css'

const Shipping = () => {

  return(
    <div className="shippingContainer">
      <img
        className="shippingImg reasonImg"
        src="https://res.cloudinary.com/darrin-im/image/upload/v1576034020/shippingImg_totcla.png" />
        <div>
          <h3 className="reasonTitle">Shipping</h3>
          <p className="reasonText">Things that we ship to here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
  )
}

export default Shipping;
