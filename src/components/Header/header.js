import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { CartContext } from '../../contexts/CartContext';

class Header extends React.Component {

  static contextType = CartContext;

  render() {

    const { cartItems} = this.context;
    const cartTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
    <div className="headerOuterContainer">
      <Menu>
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
        </div>
      </Menu>
      {/* BELOW WAS NECESSARY TO GET STORE TITLE OUTSIDE OF BURGER MENU AND POSITIONED CORRECTLY */}
      <div className="titleWrapper">
        <Link className="title" to="/">
          <h1 className="storeTitle"><span className="sonnen">Sonnen</span>brille</h1>
        </Link>
      </div>
    </div>
    )
  }
}


export default Header;
