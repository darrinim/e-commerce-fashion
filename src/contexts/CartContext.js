import React, { createContext, Component } from 'react';
import { inventoryData } from '../inventoryData';

export const CartContext = createContext();

class CartContextProvider extends Component {

  state = {
    items: inventoryData,
    cartCounter: null,
    cartItems: [],
    activeItem: [],
    subtotal: 0,
    checkout: false,
  }

  checkoutModal = (e) => {
    this.setState({
      checkout: !this.state.checkout
    })
  }

  getTotal = () => {
    let getCart = JSON.parse(localStorage.getItem('cart') || "[]")
    let total = getCart.reduce((total, item) => total + item.quantity * item.price, 0)
    console.log('looooook here', total);
    this.setState({
      subtotal: total
    })
  }

  addCart = (item) => {
    let foundIndex = this.state.cartItems.findIndex( cartItem => cartItem.id === item.id )
    let newCart = this.state.cartItems

    if(foundIndex < 0) {
      item.quantity = 1
      this.setState({
        cartItems:[...newCart, item],
        subtotal: this.state.subtotal + item.price,
      }, () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
      })
    } else {
      newCart[foundIndex].quantity += 1
      this.setState({
        cartItems:[...newCart],
        subtotal: this.state.subtotal + item.price,
      }, () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
      })
    }
    // console.log('PLEASE WORK ADDCART', this.state.cartItems);
  }

  // removeCart = (id) => {
  //   // pass in id of item that we select
  //   let getCart = JSON.parse(localStorage.getItem('cart') || "[]")
  //   // get items from cart in local storage
  //   let cart = getCart.filter( items => {
  //     console.log('cart items.id =', items.id);
  //     return items.id !== id
  //   }) // filters through cart and returns items where id doesn't match the selected
  //   console.log('this is cart', cart);
  //   // set state to cart (above), sets those items in local storage again
  //   this.setState({
  //     cartItems: cart
  //   }, () => {
  //       localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
  //   })
  // }

  removeCart = (id) => {
    // pass in id of item that we select
    let getCart = JSON.parse(localStorage.getItem('cart') || "[]")
    // get items from cart in local storage
    console.log('this is the original getCart', getCart);

    let removeItem = getCart.find( item => {
      return item.id === id
    })

    let cart = getCart.filter( items => {
      console.log('cart items.id =', items.id);
      return items.id !== id
    }) // filters through cart and returns items where id doesn't match the selected

    this.setState({
      cartItems: cart,
      subtotal: this.state.subtotal - removeItem.price * removeItem.quantity,
    }, () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
    })
  }

  getCart = () => {
    // gets all items in cart in local storage
    let getCart = JSON.parse(localStorage.getItem('cart') || "[]")

    console.log('this is getCart initial', getCart);
    this.setState({
      cartItems: getCart
    });
  }

  componentDidMount() {
    this.getCart();
    this.getTotal();
  }

  render() {
    console.log('this is cartItems state', this.state.cartItems);
    return (
      // context provider allows us to send state/functions to it's children
      <CartContext.Provider
        value={{...this.state, addCart: this.addCart, handleAddToCart: this.handleAddToCart, getCart: this.getCart, removeCart: this.removeCart, clickItem: this.clickItem, getTotal: this.getTotal, checkoutModal: this.checkoutModal }}
      >
        {this.props.children}
      </CartContext.Provider>
    )
  }
}


export default CartContextProvider;
