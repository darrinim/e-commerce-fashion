import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import RightSplit from './components/RightSplit/rightSplit';

function App() {
  return (
    <div className="App">
      <div className="landingContainer">
        <Header />
         <Home />
      </div>
    </div>
  );
}

export default App;
