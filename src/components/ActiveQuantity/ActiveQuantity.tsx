import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/todos/todos-selectors';
import styled from 'styled-components';

const ActiveQuantity = () => {
  const todos = useSelector(getTodos);
  const quantity = todos.filter((todo: any) => todo.completed === false).length;

  return <QuantityStyled>{quantity} items left</QuantityStyled>;
};

const QuantityStyled = styled.span`
  font-size: 14px;
`;

export default ActiveQuantity;
