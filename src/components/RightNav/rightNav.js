import React from 'react';
import './rightNav.css';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

class RightNav extends React.Component {

  static contextType = CartContext;
  render() {
    // console.log(this.context);
    // object destructuring used to get those properties (cartItems, cartCounter, etc.) from this.context, and storing them in the same variable names to make it easier

    const { removeCart, getCart, handleAddToCart, addCart, cartItems, cartCounter, items } = this.context;

  return(
    <div className="rightNavContainer">
      <ul className="rightNavWrap sideNav">
        <li className="rightNavIcon cartImg">
          <Link to='/cart' className="cart">
{/*            <i className="fas fa-shopping-cart"></i>*/}
            <img className="newCart" src="https://res.cloudinary.com/darrin-im/image/upload/v1576522113/cart-icon_orxkjo.png" />
            <span className="cartNumber">&nbsp;{cartItems.length === 0 ? null : cartItems.length}</span>
          </Link>
        </li>
        <li className="rightNavIcon">
          <i class="fab fa-facebook"></i>
        </li>
        <li className="rightNavIcon">
          <i class="fab fa-instagram"></i>
        </li>
        <li className="rightNavIcon">
          <i class="fab fa-twitter"></i>
        </li>
      </ul>
    </div>
  )
}
}



export default RightNav;
