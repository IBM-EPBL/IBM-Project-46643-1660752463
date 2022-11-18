/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../assets/DS.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ihd__navbar">
      <div className="ihd__navbar-links">
        <div className="ihd__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="ihd__navbar-links_container">
          <Link to="/"><p>Home</p></Link>
          <Link to="/causes"><p>Causes</p></Link>
          <Link to="/treatment"><p>Treatment</p></Link>
          <Link to="/prevention"><p>Prevention</p></Link>
          <Link to="/faqs"><p>FAQs</p></Link>
        </div>
      </div>
      <div className="ihd__navbar-sign">
        <p><Link to="/login">Login</Link></p>
        <Link to="/register"><button type="button">Register</button></Link>
      </div>
      <div className="ihd__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="ihd__navbar-menu_container scale-up-center">
            <div className="ihd__navbar-menu_container-links">
              <Link to="/">Home</Link>
              <Link to="/causes">Causes</Link>
              <Link to="/treatment">Treatment</Link>
              <Link to="/prevention">Prevention</Link>
              <Link to="/faqs"><p>FAQs</p></Link>
            </div>
            <div className="ihd__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
