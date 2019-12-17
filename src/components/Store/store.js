import React from 'react';
import './store.css';
import '../../components/LeftNav/leftNav.css';
import '../../components/RightNav/rightNav.css';
import { optionData } from '../../e-commerce-data';
import Inventory from './Inventory/inventory';

class Store extends React.Component {

  render() {
    return(
      <div className="storeOuterContainer">
        <h2>All Styles</h2>
        <h3>Find your perfect look</h3>

            <Inventory
              items={this.props.items}
              cartItems={this.props.cartItems}
              addCart={this.props.addCart}
            />

      </div>
    )
  }
}


export default Store;
