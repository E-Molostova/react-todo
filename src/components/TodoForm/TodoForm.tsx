//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import types from '../../redux/todos/todos-types';
import { addTodo, fetchTodo } from '../../redux/todos/todos-actions';
import styled from 'styled-components';

const TodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo.request());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('Enter task description please!');
    }
    dispatch(addTodo.request(text));
    e.currentTarget.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        autoComplete="off"
        placeholder="What needs to be done?"
        className="mainInput"
        onChange={handleChange}
      ></InputStyled>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.004);
  position: relative;
`;

const InputStyled = styled.input`
  width: 550px;
  height: 65px;
  color: rgb(77, 77, 77);
  padding-left: 60px;
  font-size: 22px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.03) 0px -2px 1px 0px inset;
  position: relative;

  &::placeholder {
    font-size: 22px;
    color: rgb(177, 172, 172);
  }
`;

export default TodoForm;
