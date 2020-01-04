import React from 'react';
import './total.css';
import { CartContext } from '../../contexts/CartContext';

class Total extends React.Component {

  static contextType = CartContext;

  render() {
    const { getCart, handleAddToCart, addCart, cartItems, cartCounter, items, removeCart, subtotal } = this.context;

    return(
      <div>Total = ${ subtotal }</div>
    )
  }
}

export default Total;
