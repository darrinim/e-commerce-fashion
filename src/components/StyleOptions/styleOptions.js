import React from 'react';
import './styleOptions.css';
import Mens from '../../components/Mens/mens';
import Womens from '../../components/Womens/womens';
import Brands from '../../components/Brands/brands';
import { optionData } from '../../e-commerce-data';


const StyleOptions = () => {

  return(

    <div className="styleOptionsContainer">
      <div className="styleOptionsWrap">
        { optionData.map( option => {
          return(
            <div className="styleOptions">
              <img
                className="optionImage"
                src={option.image} />
              <p className="styleTitle">{option.type}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}



export default StyleOptions;
