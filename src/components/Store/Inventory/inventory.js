import React from 'react';
import './inventory.css';
import { inventoryData } from '../../../inventoryData.js';

class Inventory extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        items: inventoryData,
        cartCounter: null,
        cartItems: [],
      }
  }


  addCart = (item) => {

    console.log('LOOOOOK', item)
    {/* BELOW IS FUNCTION TO UPDATE CART ITEMS NUMBER */}
    this.setState({
      cartItems:[...this.state.cartItems, item],
      // selected:men
    }, () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
    })
  }

  render() {
console.log('this is for the cart', this.state.cartItems);
  return(
    <div className="inventoryContainer">
      { inventoryData.map( item => {
        // if(item.style === 'this.state.selected' && this.state.selected !== 'all')
        return(
        <div className="itemWrapper">
          <img className="itemImage" src={item.img} />
          <p className="itemName">{item.name}</p>
          <p className="itemPrice">{item.price}</p>
          <button
            onClick={()=>this.addCart(item.id)}>Add to Cart</button>
        </div>
        )
      })}
    </div>
  )
}
}

export default Inventory;
