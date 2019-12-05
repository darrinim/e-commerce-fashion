import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Home from './components/Home/home';
import Header from './components/Header/header';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
