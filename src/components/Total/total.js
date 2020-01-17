import React from 'react';
import './total.css';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

class Total extends React.Component {

  static contextType = CartContext;

  render() {
    const { subtotal, checkoutModal, checkout } = this.context;

    return(
      <div className="cartTotalWrap">

        {/* BELOW IS TO RENDER CART IS EMPTY IF CART IS EMPTY OR THE TOTAL */}
        {subtotal == 0 ?
          <>
            <p>Your cart is empty!</p>
            <Link to="/store">
              <h4 className="continue">Continue Shopping</h4>
            </Link>
          </>
          :
          <div className="cartTotal">
            <Link className="continueLink" to="/store">
              <h3 className="continue">Continue Shopping</h3>
            </Link>
            <h3>Subtotal ${ subtotal }</h3>
          </div>
        }

        {/* BELOW IS TO RENDER SHIPPING/DISCOUNTS DETAILS DYNAMICALLY IF ITEMS ARE IN CART */}
        { subtotal > 0 ?
          <div className="checkoutContainer">
            <p>Shipping and discounts will be added during checkout</p>
            <p>discounts are not eligible on sale items</p>
          </div>
          :
          null
        }

        {/* BELOW IS TO RENDER MODAL IF CHECKOUT BUTTON IS CLICKED */}
        { checkout === false ?
          <div className="checkoutReg">
            <button onClick={() => checkoutModal()} className="checkoutButton">Checkout</button>
          </div>
          :
          <div className="checkoutOuterThanks">
            <div className="checkoutInnerThanks">
              <div>
                <h2>Thank You!</h2>
                <i onClick={() => checkoutModal()} class="fas fa-times"></i>
              </div>
              <p>I truly appreciate you checking out my site. Good or bad, I would really appreciate any feedback. Feel free to email me at <a href="mailto:darrinj.im@gmail.com">darrinj.im@gmail.com</a>!
              </p>
              <p>Be sure to checkout my&nbsp;
                <a target="blank" href="https://github.com/darrinim">Github</a>, &nbsp;
                <a target="blank" href="https://www.linkedin.com/in/darrin-im/">LinkedIn</a>, and my &nbsp;
                <a target="blank" href="http://darrinim.com/">Portfolio</a>.
              </p>
              <p>😊</p>
              <p>-Darrin Im</p>
            </div>
          </div>
        }


      </div>
    )
  }
}

export default Total;
