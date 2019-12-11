import React from 'react';
import Home from './components/Home/home';
import Header from './components/Header/header';
import StyleOptions from './components/StyleOptions/styleOptions';
import Hero from './components/Hero/hero';
import CreatedDesigned from './components/CreatedDesigned/createdDesigned';
import Reasons from './components/Reasons/reasons';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="homeCompContainer">
        <Home />
      </div>
      <StyleOptions />
      <CreatedDesigned />
      <Reasons />
      <Hero />
    </div>
  );
}

export default App;
