import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  allCompleted,
  fetchTodo,
} from '../../redux/todos/todos-actions';
import { getTodos } from '../../redux/todos/todos-selectors';
import { CheckAll } from '../SvgComponents';
import styled from 'styled-components';

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

  const handleAllCompleted = () => {
    dispatch(allCompleted.request());
  };

  const isAllCompleted = todos.every(
    ({ completed }): boolean => completed === true,
  );

  return (
    <StyledDiv>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          autoComplete="off"
          placeholder="What needs to be done?"
          className="mainInput"
          onChange={handleChange}
        />
      </FormStyled>
      <CheckAllStyled onClick={handleAllCompleted}>
        {todos.length !== 0 && <CheckAll isAllCompleted={isAllCompleted} />}
      </CheckAllStyled>
    </StyledDiv>
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

const StyledDiv = styled.div`
  position: relative;
`;

const CheckAllStyled = styled.div`
  position: absolute;
  top: 24px;
  left: 330px;
`;

export default TodoForm;
