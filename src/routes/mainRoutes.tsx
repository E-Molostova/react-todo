import React from 'react';
import HomePage from '../views/HomePage';
import TodosPage from '../views/TodosPage';
import RegisterPage from '../views/RegisterPage';
import LoginPage from '../views/LoginPage';

export const pathToHome = '/';
export const pathToTodos = '/todos';
export const pathToLoginPage = '/login';
export const pathToRegisterPage = '/register';

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
    name: 'Register',
    path: pathToRegisterPage,
    element: <RegisterPage />,
  },
  {
    name: 'Login',
    path: pathToLoginPage,
    element: <LoginPage />,
  },
];
