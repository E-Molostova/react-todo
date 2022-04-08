import React, { useEffect } from 'react';
import TodosTitle from '../components/TodosTitle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import FooterForm from '../components/FooterForm';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pathToHome } from '../routes/mainRoutes';
import { getTodos } from '../redux/todos/todos-selectors';
import { fetchCurrentUser, logoutUser } from '../redux/auth/auth-actions';
import authSelectors from '../redux/auth/auth-selectors';

const TodosPage = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const navigate = useNavigate();

  useEffect(() => {
    const isToken = localStorage.getItem('access');
    if (isToken) {
      dispatch(fetchCurrentUser.request());
    } else {
      dispatch(logoutUser.request());
      return navigate(pathToHome);
    }
  }, []);

  return (
    <>
      {!isRefreshing && (
        <>
          <TodosTitle />
          <TodoForm />
          <TodoList />
          {todos.length !== 0 && <FooterForm />}
        </>
      )}
    </>
  );
};

export default TodosPage;
