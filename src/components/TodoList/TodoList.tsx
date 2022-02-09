import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/todos/todos-selectors';
import TodoItem from '../TodoItem';
import { TodoListStyled } from './TodoListSyled';

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
        <TodoItem key={_id} description={description} completed={completed} />
      ))}
    </TodoListStyled>
  );
};

export default TodoList;
