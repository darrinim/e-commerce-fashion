import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { CartContext } from '../../contexts/CartContext';

class Header extends React.Component {

  static contextType = CartContext;

  render() {
    const { removeCart, getCart, handleAddToCart, addCart, cartItems, cartCounter, items } = this.context;
    const cartTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return(

    <div className="headerContainer">
      <div className="headerOuterWrap">
        <ul className="headerWrap">
          <Link className="title" to="/">
            <li>Home</li>
          </Link>
          <Link className="title" to="/store">
            <li>Shop</li>
          </Link>
          <Link className="title" to="/cart">
            <li>
              { cartTotalItems > 0 ?
                <li>Cart ({cartTotalItems})</li>
                :
                <li>Cart</li>
              }
            </li>
          </Link>
        </ul>
      </div>
      <Link className="title" to="/">
        <h1 className="storeTitle"><span className="sonnen">Sonnen</span>brille</h1>
      </Link>
    </div>

  )
}
}



export default Header;
