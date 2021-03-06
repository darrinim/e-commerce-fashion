import React from 'react';
import './store.css';
import '../../components/LeftNav/leftNav.css';
import '../../components/RightNav/rightNav.css';
import Inventory from './Inventory/inventory';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Store extends React.Component {


  componentDidMount() {
     window.scrollTo(0, 0);
  }

  render() {
    return(
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >
        <div className="storeOuterContainer">
          <img
            className="storeHero"
            src="https://res.cloudinary.com/darrin-im/image/upload/v1577046136/landing-hero_copy_y5jzpg.jpg"
          />
          <h2 className="allStylesTitle">All Styles</h2>
          <h3 className="allStyleText">Find your perfect look</h3>

          <ul className="navStyles">
            <Link className="linkNav" to="/store/men">
              <li>Men</li>
            </Link>
            <Link className="linkNav" to="/store/women">
              <li>Women</li>
            </Link>
            <Link className="linkNav" to="/store">
              <li>All</li>
            </Link>
          </ul>
          <Inventory />
        </div>
      </Fade>
    )
  }
}


export default Store;
