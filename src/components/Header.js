import React from 'react';
import Logo from '../Images/nav_logo.png';
import '../css/Nav.css';

export default () => {
  return (
    <nav className='header'>
      <div>
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Orders</li>
        <li>Sign Out</li>
      </ul>
    </nav>
  );
};
