import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <p>home page</p>
      <Link to="/about">Go About Page</Link>
    </div>
  );
};

export default Home;
