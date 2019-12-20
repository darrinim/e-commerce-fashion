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
        <h2>All Styles</h2>
        <h3>Find your perfect look</h3>
          <Inventory />
      </div>
    )
  }
}


export default Store;
