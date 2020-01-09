import React from 'react';
import { inventoryData } from '../../inventoryData.js';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import Item from '../../components/Item/item';
import Fade from 'react-reveal/Fade';

class Women extends React.Component {


  componentDidMount() {
     window.scrollTo(0, 0);
  }

  static contextType = CartContext;

  render() {

    const { addCart, items} = this.context;
    let womensInventory = inventoryData.filter( items => items.type === "womens")

    return (
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >
        <div className="inventoryContainer">
          <div className="inventoryTitleWrap">
            <img
              className="storeHero"
              src="https://res.cloudinary.com/darrin-im/image/upload/v1577748533/store-hero_rlev2b.jpg"
            />
            <h2 className="allStylesTitle">All Styles</h2>
            <h3 className="allStyleText">Find your perfect look</h3>
            <ul className="navStyles">
              <Link to="/store/men">
                <li>Men</li>
              </Link>
              <Link to="/store/women">
                <li>Women</li>
              </Link>
              <Link to="/store">
                <li>All</li>
              </Link>
            </ul>
          </div>
          <div className="outerItemWrap">
            { womensInventory.map( item => {
              return (
                <div className="itemWrapper">
                  <div className="pureTest">
                    <Link to={`/store/${item.id}`}>
                      <img className="itemImage" src={item.img} alt={item.name} />
                    </Link>
                  </div>
                  <div className="itemContain">
                    <p className="itemName">{item.name}</p>
                    <p className="itemPrice">${item.price}</p>
                      <button
                        className="addCartButtonConst"
                        onClick={() => addCart(item)}>
                        <i className="fas fa-shopping-cart"></i> &nbsp;Add to Cart
                      </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Fade>
    )
  }
}

export default Women;
