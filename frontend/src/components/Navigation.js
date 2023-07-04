//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav className="global-navigation">
        <Link to="/">Index</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../order">Order</Link>
        <Link to="../stafflist">Staff List</Link>
        <Link to="../volunteering">Volunteering Log</Link>
        <Link to="../writing">Writing</Link>
    </nav>
  );
}

export default Navigation;
