import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
};

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
