import React from 'react';
import './header.css';

const Header = () => {

  return(
    <div className="headerContainer">
      <ul className="navWrap">
        <li>Home</li>
        <li>Shoes</li>
        <li>Pants</li>
        <li>Shirts</li>
      </ul>
      <h1 className="storeTitle">Sonnenbrille</h1>
    </div>
  )
}



export default Header;
