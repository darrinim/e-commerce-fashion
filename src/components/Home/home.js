import React from 'react';
import RightSplit from '../RightSplit/rightSplit';
import LeftSplit from '../LeftSplit/leftSplit';
import './home.css'


const Home = () => {

  return(
    <div className="homeContainer">
      <LeftSplit />
      <RightSplit />
    </div>
  )
}

export default Home;