import React from 'react';
import './inventory.css';
import { inventoryData } from '../../../inventoryData.js';

const Inventory = () => {

  return(
    <div className="inventoryContainer">
      { inventoryData.map( item => {
        return(
        <div className="itemWrapper">
          <img className="itemImage" src={item.img} />
          <p className="itemName">{item.name}</p>
          <p className="itemPrice">{item.price}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Inventory;
