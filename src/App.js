import React from 'react';
import Home from './components/Home/home';
import Header from './components/Header/header';
import StyleOptions from './components/StyleOptions/styleOptions';
import Hero from './components/Hero/hero';
import CreatedDesigned from './components/CreatedDesigned/createdDesigned';
import Reasons from './components/Reasons/reasons';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
    <Fade
      distance="25%"
      bottom
      delay={300}
      duration={1000}>

      <Header />
      <div className="homeCompContainer">
        <Home />
      </div>
      <StyleOptions />

    </Fade>
      <CreatedDesigned />
      <Reasons />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
