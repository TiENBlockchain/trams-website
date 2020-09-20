import React from 'react';
import './App.css';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Content />
      <div className="wrapper">
        <div className="background"></div>
        <div className="rocks_1"></div>
        <div className="rocks_2"></div>
        <div className="rails"></div>
        <div className="train"></div>
        <div className="ground"></div>
        <div className="lights"></div>
        <div className="moon"></div>
      </div>
    </div>
  );
}

export default App;
