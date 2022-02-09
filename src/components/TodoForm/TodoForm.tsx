import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/todos-actions';
import { FormStyled } from './TodoFormStyled';

// type Text = string;

const TodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(text));
    e.currentTarget.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        placeholder="What needs to be done?"
        className="mainInput"
        onChange={handleChange}
      ></input>
    </FormStyled>
  );
};

export default TodoForm;
