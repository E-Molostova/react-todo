import React from 'react';
import { filterButtons } from './ButtonsConstants';
import styled, { css } from 'styled-components';

interface Props {
  filter: string;
  id?: string;
  handleFilter?: any;
}

const FilterButtons = ({ filter, handleFilter }: Props) => {
  return (
    <Div>
      {filterButtons.map(button => (
        <FilterBtn
          key={button.id}
          type="button"
          onClick={handleFilter}
          id={button.id}
          filter={filter}
        >
          {button.title}
        </FilterBtn>
      ))}
    </Div>
  );
};

const Div = styled.div``;

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

export default FilterButtons;
