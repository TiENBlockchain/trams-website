import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Headline from './Headline';

function Content() {
  return (
    <div className="real-content">
      <Navbar />
      <Headline />
    </div>
  );
}

export default Content;
