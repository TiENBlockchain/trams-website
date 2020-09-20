import React from 'react';
import './App.css';
import TopCard from './TopCard';
import Card from './Card';

function Headline() {
  return (
    <div className="headline">
      {/* <h3>TRAMS V1 is now live </h3> */}
      <div className="break"></div>
      <TopCard image="" title="" heading="" content="" />
    </div>
  );
}

export default Headline;
