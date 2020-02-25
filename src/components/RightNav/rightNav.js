import React from 'react';
import './rightNav.css';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

class RightNav extends React.Component {

  static contextType = CartContext;

  render() {

    const { cartItems } = this.context;
    {/* BELOW IS FOR CARTCOUNTER */}
    const cartTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return(
      <div className="rightNavContainer">
        <ul className="rightNavWrap sideNav">
          <li className="rightNavIcon cartImg">
            <Link to='/cart' className="cart">
              <img alt="cart" className="newCart" src="https://res.cloudinary.com/darrin-im/image/upload/v1576522113/cart-icon_orxkjo.png" />
              <span className="cartNumber">&nbsp;{cartTotalItems > 0 ? cartTotalItems : null}</span>
            </Link>
          </li>
          <li className="rightNavIcon">
            <a className="icon" target= "blank" href="https://www.linkedin.com/in/darrin-im/">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li className="rightNavIcon">
            <a className="icon" target= "blank" href="https://www.linkedin.com/in/darrin-im/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li className="rightNavIcon">
            <a className="icon" target= "blank" href="https://www.linkedin.com/in/darrin-im/">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}


export default RightNav;
