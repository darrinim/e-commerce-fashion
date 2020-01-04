import React from 'react';
import './item.css';
import { inventoryData } from '../../inventoryData.js';
import { CartContext } from '../../contexts/CartContext';
import { withRouter } from 'react-router-dom';

class Item extends React.Component {

  state = {
    activeItem: {}
  }

  componentDidMount() {
    console.log('look here', this.props);
    let itemId = this.props.match.params.id
    let singleItem = inventoryData.find( item => item.id === +itemId) // the plus sign converts to an integer
    console.log(singleItem);
    this.setState({
      activeItem: singleItem,
    })
  }

  static contextType = CartContext;

  render() {
    const { removeCart, addCart, cartItems, cartCounter, items } = this.context;
    const { activeItem } = this.state;
    return(
      <div className="itemContainer">
      {Object.keys(activeItem).length > 0 ?
        <>
          <div className="itemImgWrap">
            <img className="itemImg" src={activeItem.img} />
          </div>
          <div className="itemInfoWrap">
            <p className="the">The</p>
            <h2 className="itemName">{activeItem.name}</h2>
            <p className="itemPrice">${activeItem.price}</p>
            <p>{activeItem.description}</p>
            <p className="itemReview">"{activeItem.review}"</p>
            <button
              className="addCartButtonConst"
              onClick={() => addCart(activeItem)}>
              <i className="fas fa-shopping-cart"></i> &nbsp;Add to Cart</button>
            <a
              className="backLink"
              href="/store">Back to Store</a>
          </div>
        </>
        : null
      }

      </div>
    )
  }
}

export default withRouter(Item);
