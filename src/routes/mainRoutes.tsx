import React from 'react';
import HomePage from '../views/HomePage';
import TodosPage from '../views/TodosPage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';

const pathToHome = '/';
const pathToTodos = '/todos';
const pathToLoginPage = '/login';
const pathToRegisterPage = '/register';

export const mainRoutes = [
  {
    name: 'Home',
    path: pathToHome,
    element: <HomePage />,
  },
  {
    name: 'Todos',
    path: pathToTodos,
    element: <TodosPage />,
  },
  {
    name: 'Login',
    path: pathToLoginPage,
    element: <LoginPage />,
  },
  {
    name: 'Register',
    path: pathToRegisterPage,
    element: <RegisterPage />,
  },
];
