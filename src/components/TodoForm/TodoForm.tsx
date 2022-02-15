//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import types from '../../redux/todos/todos-types';
import {
  addTodo,
  allCompleted,
  fetchTodo,
} from '../../redux/todos/todos-actions';
import CheckAll from '../SvgComponents/CheckAll';
import styled from 'styled-components';
import { getTodos } from '../../redux/todos/todos-selectors';

const TodoForm = () => {
  const [text, setText] = useState('');

  const todos = useSelector(getTodos);
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

  const handleAllCompleted = (e: any) => {
    dispatch(allCompleted.request());
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        autoComplete="off"
        placeholder="What needs to be done?"
        className="mainInput"
        onChange={handleChange}
      />
      <CheckAllStyled>
        {todos.length !== 0 && <CheckAll onClick={handleAllCompleted} />}
      </CheckAllStyled>
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

const CheckAllStyled = styled.div`
  position: absolute;
  top: 24px;
  left: 16px;
`;

export default TodoForm;
