import React from 'react';
import './App.css';
import TopCard from './TopCard';
import Card from './Card';
import london from './img/london.png';
import hawaii from './img/hawaii.png';
import japan from './img/japan.png';
import paris from './img/paris.png';
import mexico from './img/mexico.png';
import LongCard from './LongCard';
import twitter from './img/twitter.png';

function Headline() {
  return (
    <div className="headline">
      {/* <h3>TRAMS V1 is now live </h3> */}
      <div className="break"></div>
      <TopCard image="" title="" heading="" content="" />
      <div className="break"></div>
      <h1>TRAMS will take you to richest places in the cryptoworld</h1>
      <div className="break"></div>
      <Card
        link={london}
        tag="London"
        poolStart="TRAMS-ETH"
        poolEnd="UNI-V2 LP"
      />
      <Card
        link={paris}
        tag="Paris"
        poolStart="USDT-TRAMS"
        poolEnd="UNI-V2 LP"
      />
      <Card
        link={japan}
        tag="Japan"
        poolStart="USDC-TRAMS"
        poolEnd="UNI-V2 LP"
      />
      <div className="break"></div>
      <Card
        link={mexico}
        tag="Mexico"
        poolStart="DAI-TRAMS"
        poolEnd="UNI-V2 LP"
      />
      <Card
        link={hawaii}
        tag="Hawaii"
        poolStart="TRAMS-ETH"
        poolEnd="UNI-V2 LP"
      />
      <Card
        link="https://d6ce0no7ktiq.cloudfront.net/images/stickers/1264.png"
        tag="England"
        poolStart="TRAMS-ETH"
        poolEnd="UNI-V2 LP"
      />

      <div className="break"></div>

      <LongCard
        question="What is TRAMS?"
        answer="TRAMS is the staking token used to take part in TRAMS DEX governance. Liquidity providers will get the portion of the fees paid in form of reward token or TRAMS. "
      />

      <LongCard
        question="What is difference between TRAMSV1 and TRAMS?"
        answer="TRAMSV1 is the token provided to the initial backers of TRAMS project. The people having faith in TRAMS DEX can buy the TRAMSV1 tokens at half price now, which will be converted to TRAMS tokens and the previous TRAMSV1 will be burnt on launch of TRAMS DEX."
      />

      <LongCard
        question="What are the minimum requirements to buy TRAMSV1?"
        answer="Initial backers need to provide an ETH backing of at least $20,000 or more."
      />

      <LongCard
        question="How does the TRAMS token economics work?"
        answer="TRAMS will be launched on 28 October. The TRAMSV1 tokens will get burned on Ethereum and then converted to TRAMS tokens with a ratio of 1:1 [TRAMSV1:TRAMS]. There will be total supply of 20,000,000 TRAMS to avoid dilution. The transaction fee will be 0.30% and distributed as : 0.26% will be rewarded to the liquidity providers and the rest 0.04% will go to the TRAMS development team."
      />

      <div className="break"></div>

      <div>
        <a className="play-again" href="#">
          Buy TRAMSV1
        </a>
        <a
          className="main-menu"
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftrams.io&text=I%20just%20bought%20%23TRAMSV1.%20It's%20going%20to%20give%20me%20governance%20rights%20and%20a%20lot%20of%20LP%20rewards%20in%20the%20TRAMS%20DEX.%20You%20should%20also%20invest%20in%20it."
          target="_blank"
        >
          <img src={twitter} alt="Twitter logo" height="25px" /> Share
        </a>
      </div>
    </div>
  );
}

export default Headline;
