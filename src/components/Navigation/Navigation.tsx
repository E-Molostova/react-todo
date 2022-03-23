import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
// import styled from 'styled-components';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn && <NavLink to="/todos">Todos</NavLink>}
    </nav>
  );
};

export default Navigation;
