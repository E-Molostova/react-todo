import React from 'react';
import '../src/App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FooterForm from './components/FooterForm';

const App = () => {
  return (
    <>
      <Header />
      <TodoForm />
      <TodoList />
      <FooterForm />
    </>
  );
};

export default App;
