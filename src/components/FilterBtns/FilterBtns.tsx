//@ts-nocheck
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodo, setFilter } from '../../redux/todos/todos-actions';
import styled, { css } from 'styled-components';

type Filter = 'All' | 'Active' | 'Completed';

const FilterBtns = ({ filter }) => {
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
      <FilterBtn
        filter={filter}
        type="button"
        id="All"
        className="all"
        onClick={handleFilter}
      >
        All
      </FilterBtn>
      <FilterBtn
        filter={filter}
        type="button"
        id="Active"
        onClick={handleFilter}
      >
        Active
      </FilterBtn>
      <FilterBtn
        filter={filter}
        type="button"
        id="Completed"
        onClick={handleFilter}
      >
        Completed
      </FilterBtn>
    </div>
  );
};

const FilterBtn = styled.button`
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 5px;

  &:hover,
  &:focus {
    border-radius: 5px;
    outline: solid 1px rgb(236, 128, 109);
  }

  ${props =>
    props.filter === props.id.toLowerCase() &&
    css`
      background-color: rgba(236, 128, 109, 0.3);
    `}
`;

export default FilterBtns;
