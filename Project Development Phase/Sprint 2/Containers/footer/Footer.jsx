import React from 'react';
import logo from '../../assets/DS.png';
import './footer.css';

const Footer = () => (
  <div className="ihd__footer section__padding">
    <div className="ihd__footer-links">
      <div className="ihd__footer-links_logo">
        <img src={logo} alt="logo" />
        <p>Coimbatore, India. <br /> All Rights Reserved</p>
      </div>
      <div className="ihd__footer-links_div">
        <h4>Get in touch</h4>
        <p>Manish Prahaladan</p>
        <p>manish_prahaladan@outlook.com</p>
        <p>Liju Daniel</p>
        <p>lijuudaniel@gmail.com</p>
        <p>Mohammed Safwan</p>
        <p>mdsafwan3102001@gmail.com</p>
        <p>Mohamed Afsal</p>
        <p>19eucs086@gmail.com</p>
      </div>
    </div>

    <div className="ihd__footer-copyright">
      <p>@2022 CardioCare. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
