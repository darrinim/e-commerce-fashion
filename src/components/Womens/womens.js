import React from 'react';
import './womens.css';
import { optionData } from '../../e-commerce-data';

const Womens = () => {



  return(
    <div className="womensOptContainer optContainer">
      <div className="womensOptWrap optWrap">
        {optionData.map( option => {
          return(
            <div>
            </div>
          )
        })}
      </div>
    </div>

  )
}



export default Womens;
