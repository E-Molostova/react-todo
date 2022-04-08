import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathToLoginPage, pathToRegisterPage } from '../../routes/mainRoutes';
import styled from 'styled-components';

const AuthNav = () => {
  return (
    <Div>
      <StyledNavLink to={pathToRegisterPage}>Registration</StyledNavLink>
      <StyledNavLink to={pathToLoginPage}>Log In</StyledNavLink>
    </Div>
  );
};

const Div = styled.div``;
const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }
`;

export default AuthNav;
