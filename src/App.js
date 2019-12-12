import React from 'react';
import Home from './components/Home/home';
import Header from './components/Header/header';
import StyleOptions from './components/StyleOptions/styleOptions';
import Hero from './components/Hero/hero';
import CreatedDesigned from './components/CreatedDesigned/createdDesigned';
import Reasons from './components/Reasons/reasons';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Trending from './components/Trending/trending';
import { Router, Route, Switch } from 'react-router-dom';
import LeftNav from './components/LeftNav/leftNav';
import RightNav from './components/RightNav/rightNav';
import Store from './components/Store/store';
import './components/LeftNav/leftNav.css';
import './components/RightNav/rightNav.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>

    <Route exact path="/" render={() => (
      <>
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >

        <Header />
        <div className="homeCompContainer">
          <Home />
        </div>
        <StyleOptions />

      </Fade>
        <CreatedDesigned />
        <Reasons />
        <Hero />
        <Trending />
        </>
    )}/>

    <Route exact path="/store" render={() => (
      <>
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >
        <Header />
        <div className="storeContainer">
          <LeftNav />
          <Store />
          <RightNav />
        </div>

      </Fade>
      </>
    )}/>

    <Route exact path="/store/women" render={() => (
      <>
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >
        <Header />
        <div className="storeContainer">
          <LeftNav />
          <Store />
          <RightNav />
        </div>

      </Fade>
      </>
    )}/>

    <Route exact path="/store/men" render={() => (
      <>
      <Fade
        distance="25%"
        bottom
        delay={300}
        duration={1000}
      >
        <Header />
        <div className="storeContainer">
          <LeftNav />
          <Store />
          <RightNav />
        </div>

      </Fade>
      </>
    )}/>

    </Switch>
    </div>
  );
}

export default App;
