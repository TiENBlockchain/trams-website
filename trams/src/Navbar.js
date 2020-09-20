import React from 'react';
import './App.css';
import logo from './img/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="/">
            <img src={logo} alt="Trams Logo" width="80px" />
          </a>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Signin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
