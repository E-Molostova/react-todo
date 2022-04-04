import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter, getTodos } from '../../redux/todos/todos-selectors';
import Todo from '../../interfaces/Todo';
import TodoItem from '../TodoItem';
import styled from 'styled-components';

const TodoList = () => {
  const todos = useSelector(getTodos);
  const filter = useSelector(getFilter);

  const showTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(({ completed }) => completed === false);
      case 'completed':
        return todos.filter(({ completed }) => completed === true);
      default:
        break;
    }
  };

  return (
    <TodoListStyled>
      {showTodos().map(({ _id, description, completed }: Todo) => (
        <TodoItem
          key={_id}
          _id={_id}
          description={description}
          completed={completed}
        />
      ))}
    </TodoListStyled>
  );
};

const TodoListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export default TodoList;
