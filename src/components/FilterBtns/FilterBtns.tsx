import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodo, setFilter } from '../../redux/todos/todos-actions';
import styled from 'styled-components';

const FilterBtns = () => {
  const dispatch = useDispatch();

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
