import React from 'react';
import { CartContext } from '../contexts/CartContext';

class Test extends React.Component {

  static contextType = CartContext;

  render() {
    const { getCart, handleAddToCart, addCart, cartItems, cartCounter, items, removeCart } = this.context;

    return(
      <div>
      { cartItems.map( item => {
        console.log('loooook', item.id);
        return (
          <button
            onClick={(e) => removeCart()}>remove
          </button>
        )
      })}
      </div>
    )
  }
}

export default Test;
