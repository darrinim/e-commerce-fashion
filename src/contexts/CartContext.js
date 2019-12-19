import React, { createContext, Component } from 'react';
import { inventoryData } from '../inventoryData';

export const CartContext = createContext();

class CartContextProvider extends Component {

  state = {
    items: inventoryData,
    cartCounter: null,
    cartItems: [],
  }

  componentDidMount() {
    this.getCart();
  }

  addCart = (item) => {
    this.setState({
      cartItems:[...this.state.cartItems, item],
    }, () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
    })
    console.log('PLEASE WORK ADDCART', this.state.cartItems);
  }

  getCart = () => {
    let getCart = JSON.parse(localStorage.getItem('cart') || "[]")
    console.log('this is getCart', getCart);
    // let items = getCart.map( itemId => {
    //   console.log('itemID', itemId);
    //   return inventoryData.find( item => item.id === itemId)
    // })
    this.setState({
      cartItems: getCart
    });
      console.log('PLEASE WORK GETCART', this.state.cartItems);
  }


  // handleAddToCart = () => {
  //   let newCartTotal = this.state.cartCounter + 1
  //   this.setState((prevState, props) => ({
  //     cartCounter: newCartTotal,
  //   }))
  // }

  render() {
    return (
      <CartContext.Provider value={{...this.state, addCart: this.addCart, handleAddToCart: this.handleAddToCart, getCart: this.getCart}}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}


export default CartContextProvider;
