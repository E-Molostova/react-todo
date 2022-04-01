import React, { useEffect } from 'react';
import TodosTitle from '../components/TodosTitle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import FooterForm from '../components/FooterForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTodos } from '../redux/todos/todos-selectors';
import authSelectors from '../redux/auth/auth-selectors';

const TodosPage = () => {
  const todos = useSelector(getTodos);
  const name = useSelector(authSelectors.getUserName);
  const navigate = useNavigate();

  useEffect(() => {
    if (name === null) {
      return navigate('/');
    }
  }, [name]);

  return (
    <>
      <TodosTitle />
      <TodoForm />
      <TodoList />
      {todos.length !== 0 && <FooterForm />}
    </>
  );
};

export default TodosPage;
