import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_components/search_bar';

const NavBar = ({ logout, user, movies, fetchMovies }) => {
  return (
    <header className="nav-bar-container">
      <nav className="nav-1">
        <Link to="/browse" className="nav-bar-logo"></Link>
      </nav>
      <nav className="nav-2">
        <SearchBar movies={movies} fetchMovies={fetchMovies} />
        <p>Hello <span>{user.email}</span></p>
        <button className="logout-btn" onClick={logout}>LOGOUT!</button>
      </nav>
    </header>
  );
};

export default NavBar;