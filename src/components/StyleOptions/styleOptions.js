import React from 'react';
import './styleOptions.css';
import { optionData } from '../../e-commerce-data';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


const StyleOptions = () => {

  return(
    <div className="styleOptionsContainer">

    <Fade
      distance="1px"
      delay={600}
      duration={2000}>
      <div className="styleOptionsWrap">
        { optionData.map( option => {
          return(
            <div className="styleOptions">

            <Link to={option.link}>
              <img
                className="optionImage"
                src={option.image}
                alt={option.type}
                />
              <p className="styleTitle">{option.type}</p>
            </Link>

            </div>
          )
        })}
      </div>
    </Fade>

    </div>

  )
}



export default StyleOptions;
