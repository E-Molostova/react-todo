import React from 'react';
import '../src/App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from './components/Container';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FooterForm from './components/FooterForm';
import { useSelector } from 'react-redux';
import { getTodos } from './redux/todos/todos-selectors';

const App = () => {
  const todos = useSelector(getTodos);

  return (
    <Container>
      <Header />

      <TodoForm />
      <TodoList />
      {todos.length !== 0 && <FooterForm />}
    </Container>
  );
};

export default App;
