import React from 'react';
import heart from '../../assets/HUMAN-HEART.svg';
import './header.css';
import './header2.css';

const Header = () => (
  <div className="ihd__header section__padding" id="home">
    <div className="ihd__header-content">
      <h1 className="gradient__text">CardioCare Heart Disease Prediction Tool</h1>
      <p>CardioCare Heart Disease Prediction Tool provides you the option of diagnosing whether you have heart disease or not without visiting a hospital.</p>

      <div className="ihd__header-content__input">
        <button type="button">Get Started</button>
      </div>

    </div>

    <div className="ihd__header-image">
      <img src={heart} />
    </div>
  </div>
);

export default Header;
