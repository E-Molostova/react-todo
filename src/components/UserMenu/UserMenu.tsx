import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';
import { pathToHome } from '../../routes/mainRoutes';
import { logoutUser } from '../../redux/auth/auth-actions';
import styled from 'styled-components';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    dispatch(logoutUser.request());
    return navigate(pathToHome);
  };

  return (
    <DivStyled>
      <SpanStyled>Welcome, {name}</SpanStyled>
      <ButtonStyled type="button" onClick={handleLogoutUser}>
        Log Out
      </ButtonStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  align-items: center;
`;
const SpanStyled = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;
const ButtonStyled = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font: inherit;
  background-color: blueviolet;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;
export default UserMenu;
