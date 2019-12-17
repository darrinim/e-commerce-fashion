import React from 'react';
import './cart.css';
import { inventoryData } from '../../inventoryData.js';

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
    }
  }

  componentDidMount() {
    let getCart = JSON.parse(localStorage.getItem('cart'));
    let items = getCart.map( itemId => {
      return inventoryData.find( item => item.id === itemId)
    })
    this.setState({
      cartItems: items
    });
  }

  render() {
    console.log('check me out', this.state.cartItems);
    return(
      <div>

      </div>
    )
  }
}

export default Cart;
