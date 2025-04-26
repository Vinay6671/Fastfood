import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


export const Navbar = ({ setShowLogin }) => { // Destructure setShowLogin from props
  const [MENU, setMENU] = useState("HOME");

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.FoodApp} alt='' className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMENU("HOME")} className={MENU === "HOME" ? "active" : ""}>HOME</Link>
        <a href='#explore-menu' onClick={() => setMENU("MENU")} className={MENU === "MENU" ? "active" : ""}>MENU</a>
        <a href='#app-download' onClick={() => setMENU("MOBILE-APP")} className={MENU === "MOBILE-APP" ? "active" : ""}>MOBILE-APP</a>
        <a href='#footer' onClick={() => setMENU("CONTACT US")} className={MENU === "CONTACT US" ? "active" : ""}>CONTACT US</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
};