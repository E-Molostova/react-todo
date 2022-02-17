import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './views/HomePage';
import TodosPage from './views/TodosPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import NotFound from './views/NotFound';
import '../src/App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
