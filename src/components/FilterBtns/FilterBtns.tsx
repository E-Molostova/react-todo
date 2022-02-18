import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  filter: string;
  id?: string;
  handleFilter?: any;
}

const FilterBtns = ({ filter, handleFilter }: Props) => {
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

  ${(props: Props) =>
    props.filter === props.id.toLowerCase() &&
    css`
      background-color: rgba(236, 128, 109, 0.3);
    `}
`;

export default FilterBtns;
