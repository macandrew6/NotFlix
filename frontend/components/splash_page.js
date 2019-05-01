import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => {
  return (
    <div className="splash-page" height='100%'>
      <h2>NotFlix</h2>
      <h4>See what's next</h4>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Sign In</Link>
    </div>
  );
};

export default SplashPage;