import React from 'react';
import './rightNav.css';

const RightNav = () => {

  return(
    <div className="rightNavContainer">
      <ul className="rightNavWrap sideNav">
        <li className="rightNavIcon cartImg">
          <button className="cart">
          <i className="fas fa-shopping-cart">
            <span></span>
          </i>
          </button>
        </li>
        <li className="rightNavIcon">
          <i class="fab fa-facebook"></i>
        </li>
        <li className="rightNavIcon">
          <i class="fab fa-instagram"></i>
        </li>
        <li className="rightNavIcon">
          <i class="fab fa-twitter"></i>
        </li>
      </ul>
    </div>
  )
}



export default RightNav;
