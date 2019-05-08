import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logout, user }) => {
  return (
    <header className="nav-bar-container">
      <nav className="nav-1">
        <Link to="/browse" className="nav-bar-logo"></Link>
      </nav>
      <nav className="nav-2">
        <p>Hello <span>{user.email}</span></p>
        <button className="logout-btn" onClick={logout}>LOGOUT!</button>
      </nav>
    </header>
  );
};

export default NavBar;