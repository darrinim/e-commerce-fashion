import React, { createContext, Component } from 'react';
import { inventoryData } from '../inventoryData';

export const CartContext = createContext();

class CartContextProvider extends Component {

  state = {
    items: inventoryData,
    cartCounter: null,
    cartItems: [],
  }

  addCart = (item) => {
    this.setState({
      cartItems:[...this.state.cartItems, item],
    }, () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
    })
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

    // BELOW WORKS
    // let removeItem = getCart.find( item => {
    //   return item.id === id
    // })
    // console.log('this is new', removeItem);

    let removeItem = getCart.find( item => {
      return item.id === id
    })
    console.log('this is new', removeItem);

    let cart = getCart.filter( items => {
      console.log('cart items.id =', items.id);
      return items.id !== id
    }) // filters through cart and returns items where id doesn't match the selected
    console.log('this is cart', cart);
    // set state to cart (above), sets those items in local storage again
    this.setState({
      cartItems: cart
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
  }

  render() {
    console.log('this is cartItems state', this.state.cartItems);
    return (
      // context provider allows us to send state/functions to it's children
      <CartContext.Provider value={{...this.state, addCart: this.addCart, handleAddToCart: this.handleAddToCart, getCart: this.getCart, removeCart: this.removeCart}}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}


export default CartContextProvider;
