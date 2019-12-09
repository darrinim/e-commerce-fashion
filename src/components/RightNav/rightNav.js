import React from 'react';
import './rightNav.css';

const RightNav = () => {

  return(
    <div className="rightNavContainer">
      <ul className="rightNavWrap sideNav">
        <li className="leftNavIcon">
          <i class="fab fa-facebook"></i>
        </li>
        <li className="leftNavIcon">
          <i class="fab fa-instagram"></i>
        </li>
        <li className="leftNavIcon">
          <i class="fab fa-twitter"></i>
        </li>
      </ul>
    </div>
  )
}



export default RightNav;
