import React from 'react';
import './item.css';
import { inventoryData } from '../../inventoryData.js';
import { CartContext } from '../../contexts/CartContext';
import { Link, withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Item extends React.Component {

  state = {
    activeItem: {}
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    let itemId = this.props.match.params.id
    let singleItem = inventoryData.find( item => item.id === +itemId) // the plus sign converts to an integer
    this.setState({
      activeItem: singleItem,
    })
  }

  static contextType = CartContext;

  render() {

    const { addCart } = this.context;
    const { activeItem } = this.state;

    return(
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >
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
                  <i className="fas fa-shopping-cart"></i> &nbsp;Add to Cart
                </button>
                <Link to="/store" className="backLink">Back to Store</Link>
              </div>
            </>
            : null
          }
        </div>
      </Fade>
    )
  }
}

export default withRouter(Item);
