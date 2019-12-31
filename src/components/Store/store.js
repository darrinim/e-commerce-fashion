import React from 'react';
import './store.css';
import '../../components/LeftNav/leftNav.css';
import '../../components/RightNav/rightNav.css';
import Inventory from './Inventory/inventory';

class Store extends React.Component {



  render() {
    console.log('this is in the store component');
    return(
      <div className="storeOuterContainer">
      <img
        className="storeHero"
        src="https://res.cloudinary.com/darrin-im/image/upload/v1577748533/store-hero_rlev2b.jpg" />
        <h2 className="allStylesTitle">All Styles</h2>
        <h3 className="allStyleText">Find your perfect look</h3>
          <Inventory />
      </div>
    )
  }
}


export default Store;
