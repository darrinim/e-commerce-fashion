import React from 'react';
import Home from './components/Home/home';
import Header from './components/Header/header';
import StyleOptions from './components/StyleOptions/styleOptions';
import OurStory from './components/OurStory/ourStory';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="homeCompContainer">
        <Home />
      </div>
      <StyleOptions />
      <OurStory />
    </div>
  );
}

export default App;
