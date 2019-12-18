import React from 'react';
import './recycled.css';
import '../../Reasons/reasons.css';

const Recycled = () => {

  return(
    <div className="recycledContainer">
      <img
        className="recycledImg reasonImg"
        src="https://res.cloudinary.com/darrin-im/image/upload/v1576126429/recyclingplease_imxvbm.png"
        alt='recycled causes'
        />
        <div>
          <h3 className="reasonTitle">Recycling</h3>
          <p className="reasonText">Things that we recycle from here lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}

export default Recycled;
