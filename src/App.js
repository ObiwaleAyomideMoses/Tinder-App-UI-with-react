import React from 'react'
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    //BEM clas naming convention
    <div className="app">
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
      {/* Header */}
      {/* Body */}
      {/* SwipeButton */}
    </div>
  );
}

export default App;
