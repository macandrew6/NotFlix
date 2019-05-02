import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => {
  return (
    <div className="splash-page" >
      <header>
        <Link 
          to="/"
          className="logo">
        </Link>
        <Link
          className="login-btn"
          to="/login">Sign In</Link>
      </header>
      <div className="content-container">
        <h2>See what's next.</h2>
        <h3>Watch anytime. Cancel anytime.</h3>
        <Link 
          className="signup-btn" 
          to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SplashPage;