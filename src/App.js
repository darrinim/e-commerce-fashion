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
import { inventoryData } from './inventoryData';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        items: inventoryData,
        cartCounter: null,
        cartItems: [],
      }
  }

  // addCart = () => {
  //   console.log('HEY LOOK');
  //   {/* BELOW IS FUNCTION TO UPDATE CART ITEMS NUMBER */}
  //   let newCartTotal = this.state.cartCounter + 1
  //
  //   this.setState(prevState => ({
  //     cartCounter: newCartTotal
  //   }))
  // }

  deleteCart = () => {
    console.log('DELETE YO');
    let deleteCartTotal = this.state.cartCounter - 1
    this.setState(prevState => ({
      cartCounter: deleteCartTotal
    }))
  }


  render() {
    console.log('YOOOOOOO', this.state.items);
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
        <Header
          cartCounter={this.state.cartCounter}
          cartItems={this.state.cartItems}
        />
        <div className="storeContainer">
          <LeftNav />
          <Store
            items={this.state.items}
            addCart={this.addCart}
            cartCounter={this.state.cartCounter}
            cartItems={this.state.cartItems}
          />
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
}

export default App;
