import React from 'react';
import './cart.css';
import { inventoryData } from '../../inventoryData.js';
import { CartContext } from '../../contexts/CartContext';
import Total from '../../components/Total/total';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Cart extends React.Component {

  componentDidMount() {
    /*
      -- WE DID THIS ON COMPONENTDIDMOUNT BECAUSE OTHERWISE WHEN WE SELECT AN ITEM, CART WOULDN'T BE UPDATED RIGHT AWAY, WOULD ONLY UPDATE UPON SECOND ITEM ADDED.
      -- USED .PARSE TO GRAB CART ITEMS FROM LOCAL STORAGE AND CONVERT IT TO JS OBJECT (DATA COMES AS A STRING)
      -- 'CART' IS WHAT WE SET OUR PARAMETER AS IN .SETITEM FOR LOCAL STORAGE, IT IS THE FIRST THING IT ACCEPTS. OBVIOUSLY WE THEN SET IT TO A VARIABLE
      -- WE THEN MAP OVER THE OBJECT WE RECEIVED FROM LOCAL STORAGE THAT WE SET TO GETCART, AND WE USED .FIND ON INVENTORYDATA (THE WHOLE DATA OBJECT) TO FIND THE MATCHING ITEM ID. THAT IS ALL SET TO A VARIABLE, AND RETURNED.
      -- WHEN WE ARE MAPPING, THE ITEMID IS THE ONLY THING WE ARE RETURNING, AND THE ONLY THING WE NEED. WE USED THAT ITEM ID TO SEARCH THROUGH THE DATA AND FIND THE MATCHING ITEM
      -- NEED THE || "[]" IN GETCART TO WORK, THIS CREATES THE CART KEY WITH THE EMPTY VALUE SO THAT THE APP DOESN'T CRASH FOR NEW USERS THAT DO NOT HAVE ANYTHING IN LOCAL STORAGE. SUPER ANNOYING ISSUE, DO NOT FORGET.
      */

    // let getCart = JSON.parse(localStorage.getItem('cart') || "[]")
    // let items = getCart.map( itemId => {
    //   return inventoryData.find( item => item.id === itemId)
    // })
    // this.setState({
    //   cartItems: items
    // });

    window.scrollTo(0, 0);
  }

  static contextType = CartContext;

  render() {

    const { cartItems, removeCart } = this.context;

    return(
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >
        <div className="cartContainer">
          <h2 className="cartTitle">Shopping Cart</h2>
          <div className="cartouterWrapper">
          {cartItems.map( item => {
            return(
              <div className="cartWrapper">
                <button className="removeButton" onClick={() => removeCart(item.id)}>
                  <i class="fas fa-times"></i>
                </button>
                <Link className="cartImageLink" to={`/store/${item.id}`}>
                  <img className="cartImage" src={item.img} />
                </Link>
                <p className="cart">{item.name}</p>
                <p className="cart">Quantity:&nbsp;{item.quantity}</p>
                <p className="cart">${item.price}</p>
              </div>
            )
          })}
          </div>
          <Total />
        </div>
      </Fade>
    )
  }
}

export default Cart;
