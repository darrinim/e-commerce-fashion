import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return(

    <div className="headerContainer">
    <ul className="headerWrap">
      <Link className="title" to="/">
        <li>Home</li>
      </Link>
      <Link className="title" to="/store">
        <li>Shop</li>
      </Link>
      <Link className="title" to="/cart">
        <li>Cart</li>
      </Link>
    </ul>
      <Link className="title" to="/">
        <h1 className="storeTitle"><span className="sonnen">Sonnen</span>brille</h1>
      </Link>
    </div>

  )
}



export default Header;
