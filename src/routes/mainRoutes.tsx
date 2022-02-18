import React from 'react';
import HomePage from '../views/HomePage';
import TodosPage from '../views/TodosPage';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Todos',
    path: '/todos',
    element: <TodosPage />,
  },
  //   {
  //     name: 'Login',
  //     path: '/login',
  //     element: <LoginPage />,
  //   },
  //   {
  //     name: 'Register',
  //     path: '/register',
  //     element: <RegisterPage />,
  //   },
];
