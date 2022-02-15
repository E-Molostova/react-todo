import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompleted } from '../../redux/todos/todos-actions';
import styled from 'styled-components';

const ClearBtn = () => {
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted.request());
  };
  return (
    <ClearBtnStyled type="button" id="clearBtn" onClick={handleClearCompleted}>
      Clear completed
    </ClearBtnStyled>
  );
};

const ClearBtnStyled = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  /* opacity: 0; */

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default ClearBtn;
