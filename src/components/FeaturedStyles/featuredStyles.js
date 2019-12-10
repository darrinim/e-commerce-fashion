import React from 'react';
import './featuredStyles.css';
import Created from '../../components/Created/created';
import Designed from '../../components/Designed/designed';
import 'pure-react-carousel/dist/react-carousel.es.css';

class FeaturedStyles extends React.Component {

  render() {
    return(
      <div className="featureContainer">
        <Created />
        <Designed />
      </div>
    )
  }
}


export default FeaturedStyles;
