import React from 'react';
import Container from '../components/Container';
import TodosTitle from '../components/TodosTitle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import FooterForm from '../components/FooterForm';
import { useSelector } from 'react-redux';
import { getTodos } from '../redux/todos/todos-selectors';

const TodosPage = () => {
  const todos = useSelector(getTodos);

  return (
    <Container>
      <TodosTitle />
      <TodoForm />
      <TodoList />
      {todos.length !== 0 && <FooterForm />}
    </Container>
  );
};

export default TodosPage;
