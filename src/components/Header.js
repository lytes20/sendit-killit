import React from 'react';
import './Images/nav_logo.png';
import './css/userView.css';

export default () => {
  return (
    <div className="container">
      <nav>
        <a href="order.html"><img src="images/nav_logo.png" className="logo" alt="" /></a>
        <ul>
          <li>
            <a href="order.html">Home</a>
          </li>
          <li>
            <a href="delivery_orders.html" className="active-link">Orders</a>
          </li>
          <li>
            <a href="index.html" id="signout">Signout</a>
          </li>
        </ul>
      </nav>
    </div>  
  );
};
