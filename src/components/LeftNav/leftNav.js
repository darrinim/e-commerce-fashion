import React from 'react';
import './leftNav.css';

const LeftNav = () => {

  return(
    <div className="leftNavContainer">
      <ul className="leftNavWrap">
        <li>
          <i class="fab fa-facebook"></i>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-twitter"></i>
        </li>
      </ul>
    </div>
  )
}



export default LeftNav;
