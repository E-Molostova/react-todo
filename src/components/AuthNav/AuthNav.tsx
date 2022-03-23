import React from 'react';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
