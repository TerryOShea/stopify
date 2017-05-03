import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      homepage here
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default Home;
