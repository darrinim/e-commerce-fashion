import React from 'react';
import './inventory.css';
import { inventoryData } from '../../../inventoryData.js';
import { CartContext } from '../../../contexts/CartContext';

class Inventory extends React.Component {



  // addCart = (item) => {
  //
  //   console.log('add cart function', item)
  //   /* BELOW IS FUNCTION TO UPDATE CART ITEMS NUMBER */
  //   /*
  //     -- USED SPREAD OPERATOR SO THAT WE CAN ADD EACH ITEM TO THE CART IN ADDITION TO WHAT WAS ALREADY THERE
  //     -- SETSTATE CAN TAKE IN AN ADDITIONAL ARGUMENT (ALWAYS A CALLBACK FUNCTION?), WHICH WE USED TO SET THIS IN LOCAL STORAGE.
  //     -- DID THIS BECAUSE IF WE DID OUTSIDE OF THE SETSTATE, THE FIRST ITEM WE ADD TO THE CART WOULD NEVER BE ADDED TO LOCAL STORAGE.
  //      */
  //   this.setState({
  //     cartItems:[...this.state.cartItems, item],
  //   }, () => {
  //     /* BELOW IS TO SET OUR CART IN LOCAL STORAGE. WE DO THIS SO THAT WE DO NOT LOSE CART ITEMS UPON A PAGE REFRESH. NEED TO SEND DATA AS STRING, LOCAL STORAGE ONLY ACCEPTS STRINGS, SO USE JSON.STRINGIFY (USE JSON.PARSE TO CONVERT BACK TO OBJECT, SEE CART COMPONENT) */
  //     localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
  //   })
  // }



  static contextType = CartContext;

  render() {

  const { removeCart, addCart, cartItems, cartCounter, items } = this.context;

  return(
    <div className="inventoryContainer">
      { inventoryData.map( item => {
        return(
        <div className="itemWrapper">
          <div className="pureTest">
            <img className="itemImage" src={item.img} alt={item.name} />
          </div>
          <div className="itemContain">
            <p className="itemName">{item.name}</p>
            <p className="itemPrice">${item.price}</p>
            <button
              className="addCartButton"
              onClick={() => addCart(item)}>
              <i className="fas fa-shopping-cart"></i> &nbsp;Add to Cart</button>
          </div>
        </div>
        )
      })}
    </div>
  )
}
}

export default Inventory;
