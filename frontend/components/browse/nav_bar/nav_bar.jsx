import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logout }) => {
  return (
    <header className="nav-bar-container">
      <nav>
        <Link to="/browse" className="nav-bar-logo"></Link>
      </nav>
      <nav>
        <button onClick={logout}>LOGOUT!</button>
      </nav>
    </header>
  );
};

export default NavBar;