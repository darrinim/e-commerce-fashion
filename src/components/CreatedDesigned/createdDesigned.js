import React from 'react';
import './createdDesigned.css';
import Created from '../../components/Created/created';
import Designed from '../../components/Designed/designed';

class CreatedDesigned extends React.Component {

  render() {
    return(
      <div className="cdContainer">
        <Created />
        <Designed />
      </div>
    )
  }
}


export default CreatedDesigned;
