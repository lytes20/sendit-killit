import React from 'react';
import Logo from '../images/nav_logo.png';
import '../css/Nav.css';

export default () => {
  return (
    <nav className='header'>
      <div>
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <ul>
        <li>Login</li>
      </ul>
    </nav>
  );
};
