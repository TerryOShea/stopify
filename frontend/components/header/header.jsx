import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="main-header">
    <h1><Link to="/">Stopify</Link></h1>
    <ul className="header-links">
      <li>Premium</li>
      <li>Help</li>
      <li>Download</li>
      <li className="header-links-divider">|</li>
      <li><Link to="/signup">Sign up</Link></li>
      <li><Link to="/login">Log in</Link></li>
    </ul>
  </header>
);

export default Header;
