import React from 'react';
import styled from 'styled-components';

const TheHeader = () => {
  return (
    <header>
      <Logo href="/">News</Logo>
    </header>
  );
};

export default TheHeader;

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 3rem;
`;
