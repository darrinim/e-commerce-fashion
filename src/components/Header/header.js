import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return(

    <div className="headerContainer">
      <Link className="title" to="/">
        <h1 className="storeTitle"><span className="sonnen">Sonnen</span>brille</h1>
      </Link>
    </div>

  )
}



export default Header;
