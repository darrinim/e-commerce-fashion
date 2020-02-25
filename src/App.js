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
import './App.css';
import { inventoryData } from './inventoryData';
import Cart from './components/Cart/cart';
import CartContextProvider from './contexts/CartContext';
import Footer from './components/Footer/footer';
import Item from './components/Item/item';
import Men from './components/Men/men';
import Women from './components/Women/women';


class App extends React.Component {

  componentDidMount() {
     window.scrollTo(0, 0);
  }


  render() {
    return (
      <div className="App">
        <CartContextProvider>
          <Switch>

            <Route exact path="/" render={() => (
              <>
                <Fade
                  distance="5%"
                  bottom
                  delay={300}
                  duration={1000}
                >
                {/*BELOW I ADDED THOSE DIVS SO THAT REACT-REVEAL DIDN'T ADD ADDITIONAL DIVS OUTSIDE OF HEADER*/}
                  <div>
                    <Header />
                    <div className="homeCompContainer">
                      <Home />
                    </div>
                    <StyleOptions />
                    <CreatedDesigned />
                    <Reasons />
                    <Hero />
                    <Trending />
                    <Footer />
                  </div>
                </Fade>
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
                  <div>
                    <Header/>
                    <div className="storeContainer">
                      <LeftNav />
                      <Store />
                      <RightNav />
                    </div>
                    <Footer />
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
                  <div>
                    <Header />
                    <div className="storeContainer">
                      <LeftNav />
                      <Women />
                      <RightNav />
                    </div>
                    <Footer />
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
                  <div>
                    <Header />
                    <div className="storeContainer">
                      <LeftNav />
                      <Men />
                      <RightNav />
                    </div>
                    <Footer />
                  </div>
                </Fade>
              </>
            )}/>

            <Route exact path="/cart" render={() => (
              <>
                <Header />
                <div className="storeContainer">
                  <LeftNav />
                  <Cart />
                  <RightNav />
                </div>
                <Footer />
              </>
            )}/>


            <Route exact path="/store/:id" render={() => (
              <>
                <Fade
                  distance="25%"
                  bottom
                  delay={300}
                  duration={1000}
                >
                  <div>
                    <Header/>
                    <div className="storeContainer">
                      <LeftNav />
                      <Item />
                      <RightNav />
                    </div>
                    <Footer />
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
