import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/todos/todos-selectors';
import TodoItem from '../TodoItem';
import styled from 'styled-components';

interface Todo {
  _id: string;
  description: string;
  completed: boolean;
}

const TodoList = () => {
  const todos = useSelector(getTodos);

  return (
    <TodoListStyled>
      {todos.map(({ _id, description, completed }: Todo) => (
        <TodoItem
          key={_id}
          id={_id}
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
