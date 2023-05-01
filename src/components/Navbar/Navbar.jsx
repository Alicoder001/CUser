/** @format */

import React from 'react';
import './Navbar.css';
const Navbar = ({ len }) => {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>CUsers</h1>
        <h2 className='navbar-counter'>{len ? `Users: ${len}`  : 'No Users'}</h2>
      </div>
    </div>
  );
};

export default Navbar;
