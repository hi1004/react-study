import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>about</h1>
      <p>about page</p>
      <p>현재 주소: {location.pathname}</p>
      <p>쿼리스트링: {location.search}</p>
      <p>해시: {location.hash}</p>
      <p>상태: {location.state}</p>
      <p>key: {location.key}</p>
    </div>
  );
};

export default About;
