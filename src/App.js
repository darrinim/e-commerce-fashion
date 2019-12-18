import React from 'react';
import Home from './components/Home/home';
import Header from './components/Header/header';
import StyleOptions from './components/StyleOptions/styleOptions';
import Hero from './components/Hero/hero';
import CreatedDesigned from './components/CreatedDesigned/createdDesigned';
import Reasons from './components/Reasons/reasons';
import Fade from 'react-reveal/Fade';
import Trending from './components/Trending/trending';
import { Route, Switch } from 'react-router-dom';
import LeftNav from './components/LeftNav/leftNav';
import RightNav from './components/RightNav/rightNav';
import Store from './components/Store/store';
import './components/LeftNav/leftNav.css';
import './components/RightNav/rightNav.css';
import './App.css';
import { inventoryData } from './inventoryData';
import Cart from './components/Cart/cart';
import CartContextProvider from './contexts/CartContext';
import { CartContext } from './contexts/CartContext';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        items: inventoryData,
        cartCounter: null,
        cartItems: [],
      }
  }


  render() {
    
  return (
    <div className="App">

    <CartContextProvider>

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
          <Cart />

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


    </CartContextProvider>
    </div>
  );
}
}

export default App;
