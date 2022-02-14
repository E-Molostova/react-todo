import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTodos } from '../..//redux/todos/todos-selectors';

const FilterBtns = () => {
  const todos = useSelector(getTodos);
  console.log('todos in filter', todos);

  return (
    <div>
      <FilterBtn type="button" id="All">
        All
      </FilterBtn>
      <FilterBtn type="button" id="Active">
        Active
      </FilterBtn>
      <FilterBtn type="button" id="Completed">
        Completed
      </FilterBtn>
    </div>
  );
};

const FilterBtn = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  margin: 5px;

  &:hover,
  &:focus {
    border-radius: 5px;
    outline: solid 1px rgb(236, 128, 109);
  }
`;

export default FilterBtns;
