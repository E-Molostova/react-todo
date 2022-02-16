import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter, getTodos } from '../../redux/todos/todos-selectors';
import TodoItem from '../TodoItem';
import styled from 'styled-components';

interface Todo {
  _id: string;
  description: string;
  completed: boolean;
}

const TodoList = () => {
  const todos = useSelector(getTodos);
  const filter = useSelector(getFilter);

  return (
    <TodoListStyled>
      {filter === 'all' &&
        todos.map(({ _id, description, completed }: Todo) => (
          <TodoItem
            key={_id}
            id={_id}
            description={description}
            completed={completed}
          />
        ))}
      {filter === 'active' &&
        todos
          .filter(({ completed }) => completed === false)
          .map(({ _id, description, completed }: Todo) => (
            <TodoItem
              key={_id}
              id={_id}
              description={description}
              completed={completed}
            />
          ))}
      {filter === 'completed' &&
        todos
          .filter(({ completed }) => completed === true)
          .map(({ _id, description, completed }: Todo) => (
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
