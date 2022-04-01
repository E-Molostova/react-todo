import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import styled from 'styled-components';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>

      {isLoggedIn && <NavLink to="/todos">Todos</NavLink>}
    </nav>
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

export default Navigation;
