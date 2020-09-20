import React from 'react';

export default function TopCard() {
  return (
    <div className="card stop-game">
      {/* <div id="circle"></div>
      <h2>TRAMS</h2>
      <p>A fully decentralized protocol for automated liquidity provision</p> */}

      <div className="score">
        <div className="score-container">
          <h1>TRAMSV1</h1>

          <div className="final-score">21</div>
          <div className="result">Hours to go</div>

          <h4>Spread the love to earn more TRAMS</h4>

          <p>
            <a className="tweet" href="#">
              Invite
            </a>
          </p>

          <div>
            <a className="play-again" href="#">
              Buy TRAMSV1
            </a>
            <a className="main-menu" href="#">
              Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
