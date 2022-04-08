import React from 'react';
import ActiveQuantity from '../ActiveQuantity';
import FilterButtons from '../FilterButtons';
import ClearButton from '../ClearBtn';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCompleted,
  fetchTodo,
  setFilter,
} from '../../redux/todos/todos-actions';
import { getFilter, getTodos } from '../../redux/todos/todos-selectors';

const FooterForm = () => {
  const todos = useSelector(getTodos);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const isAnyCompleted = todos.some(
    ({ completed }): Boolean => completed === true,
  );

  const handleClearCompleted = () => {
    dispatch(clearCompleted.request());
  };

  const handleFilter = (e: any) => {
    const { id } = e.target;

    switch (id) {
      case 'All':
        dispatch(fetchTodo.request());
        break;

      case 'Active':
        dispatch(setFilter.active());
        break;

      case 'Completed':
        dispatch(setFilter.completed());
        break;

      default:
        break;
    }
  };

  return (
    <FooterDiv>
      <ActiveQuantity />
      <FilterButtons filter={filter} handleFilter={handleFilter} />
      <ClearButton
        isAnyCompleted={isAnyCompleted}
        handleClearCompleted={handleClearCompleted}
        title="Clear completed"
      />
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
