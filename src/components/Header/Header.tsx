import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <HeaderTitle>todos</HeaderTitle>;
};

const HeaderTitle = styled.h1`
  padding: 10px;
  font-size: 90px;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin: 0;
`;

export default Header;
