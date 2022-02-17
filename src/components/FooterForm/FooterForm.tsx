import React from 'react';
import ActiveQuantity from '../ActiveQuantity';
import FilterBtns from '../FilterBtns';
import ClearBtn from '../ClearBtn';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getFilter, getTodos } from '../../redux/todos/todos-selectors';

const FooterForm = () => {
  const todos = useSelector(getTodos);
  const filter = useSelector(getFilter);
  const isAnyCompleted = todos.some(
    ({ completed }): Boolean => completed === true,
  );

  return (
    <FooterDiv>
      <ActiveQuantity />
      <FilterBtns filter={filter} />
      <ClearBtn isAnyCompleted={isAnyCompleted} />
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 550px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px;
  margin: 0 auto;
`;

export default FooterForm;
