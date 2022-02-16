import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../..//redux/todos/todos-selectors';
import styled from 'styled-components';

const FilterBtns = () => {
  const todos = useSelector(getTodos);

  const handleFilter = (e: any) => {
    const { id } = e.target;

    switch (id) {
      case 'All':
        console.log('show all');
        console.log(todos);
        break;

      case 'Active':
        console.log('show active');
        console.log(todos.filter((todo: any) => todo.completed === false));
        break;

      case 'Completed':
        console.log('show completed');
        console.log(todos.filter((todo: any) => todo.completed === true));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <FilterBtn type="button" id="All" onClick={handleFilter}>
        All
      </FilterBtn>
      <FilterBtn type="button" id="Active" onClick={handleFilter}>
        Active
      </FilterBtn>
      <FilterBtn type="button" id="Completed" onClick={handleFilter}>
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
