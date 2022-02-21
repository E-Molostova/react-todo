import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Loader from '../Loader';
import { getLoading } from '../../redux/todos/todos-selectors';

const TodosTitle = () => {
  const loading = useSelector(getLoading);
  return (
    <HeaderDiv>
      {loading && (
        <Loader
          width="40"
          height="40"
          color="tomato"
          secondaryColor="lightgray"
        />
      )}
      <HeaderTitle>todos</HeaderTitle>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  
`;
const HeaderTitle = styled.h1`
  padding: 10px;
  font-size: 90px;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin: 0;
`;

export default TodosTitle;
