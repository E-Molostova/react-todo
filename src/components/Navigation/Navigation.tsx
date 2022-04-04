import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { pathToHome, pathToTodos } from '../../routes/mainRoutes';
import authSelectors from '../../redux/auth/auth-selectors';
import styled from 'styled-components';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <NavLinkStyled to={pathToHome}>Home</NavLinkStyled>

      {isLoggedIn && <NavLink to={pathToTodos}>Todos</NavLink>}
    </Nav>
  );
};

const Nav = styled.nav``;
const NavLinkStyled = styled(NavLink)`
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
