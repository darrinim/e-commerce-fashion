import React from 'react';
import './header.css';

const Header = (props) => {

  return(

    <div className="headerContainer">
      <h1 className="storeTitle"><span className="sonnen">Sonnen</span>brille</h1>
      <li className="cartImg">
        <button className="cart">
        <i className="fas fa-shopping-cart">
          <span>{props.cartCounter}</span>
        </i>
        </button>
      </li>
    </div>

  )
}



export default Header;
