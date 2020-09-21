import React from 'react';
import twitter from './img/twitter.png';
import social from './img/social-media.png';

export default function TopCard() {
  return (
    <div className="card stop-game">
      {/* <div id="circle"></div>
      <h2>TRAMS</h2>
      <p>A fully decentralized protocol for automated liquidity provision</p> */}

      <div className="score">
        <div className="score-container">
          <h1>TRAMSV1</h1>

          <div className="final-score">$1</div>
          <div className="result">TRAMSV1 Price</div>

          <h4>Spread the love to earn more TRAMS</h4>

          <p>
            <img src={social} alt="Twitter logo" height="25px" />{' '}
          </p>

          <div>
            <a className="play-again" href="#">
              Buy TRAMSV1
            </a>
            <a
              className="main-menu"
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftrams.io&text=I%20just%20bought%20%23TRAMSV1.%20It's%20going%20to%20give%20me%20governance%20rights%20and%20a%20lot%20of%20LP%20rewards%20in%20the%20TRAMS%20DEX.%20You%20should%20also%20invest%20in%20it."
              target="_blank"
            >
              <img src={twitter} alt="Twitter logo" height="25px" /> Tweet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
