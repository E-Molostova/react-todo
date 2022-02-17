import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getTodos } from '../../redux/todos/todos-selectors';
import { fetchTodo } from '../../redux/todos/todos-actions';
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

  const dispatch = useDispatch();

  const showTodos = () => {
    if (filter === 'all') {
      const todosToShow = todos;
      return todosToShow;
    }
    if (filter === 'active') {
      const todosToShow = todos.filter(({ completed }) => completed === false);
      return todosToShow;
    }
    if (filter === 'completed') {
      const todosToShow = todos.filter(({ completed }) => completed === true);
      if (todosToShow.length === 0) {
        dispatch(fetchTodo.request());
        const todosToShow = todos;
        return todosToShow;
      }
      return todosToShow;
    }
  };

  return (
    <TodoListStyled>
      {showTodos().map(({ _id, description, completed }: Todo) => (
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
