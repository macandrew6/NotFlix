import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => {
  return (
    <div>
      <h2>NotFlix</h2>
      <h4>See what's next</h4>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Sign In</Link>
    </div>
  );
};

export default SplashPage;