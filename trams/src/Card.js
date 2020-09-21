import React from 'react';

export default function Card(props) {
  return (
    <div className="pool-card">
      <div className="station">
        <img src={props.link} tag={props.tag} height="100px" />
        <br />
        <h2>{props.tag} TRAMS</h2>
        <br />
        <div className="information">
          Deposit <strong>{props.poolStart}</strong>{' '}
          <strong>{props.poolEnd}</strong> <br></br>
          Earn <span className="logoColor">TRAMS</span>
        </div>
        <div className="coming-soon">
          <button className="treat-button">Coming Soon!</button>
        </div>
      </div>
    </div>
  );
}
