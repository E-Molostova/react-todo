//@ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  toggleTodo,
  fetchTodo,
} from '../../redux/todos/todos-actions';
import { getTodos } from '../../redux/todos/todos-selectors';
import { Check, Circle, DeleteBtn } from '../SvgComponents';
import styled, { css } from 'styled-components';

interface Props {
  id: string;
  description: string;
  completed: boolean;
}

const TodoItem = ({ id, description, completed }: Props) => {
  const [dblClick, setDblClick] = useState(true);
  const [text, setText] = useState('');

  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (e: any) => {
    const id = e.currentTarget.parentNode.id;
    dispatch(deleteTodo.request(id));
  };

  const handleToggleTodo = (e: any) => {
    const id = e.currentTarget.parentNode.id;
    const item = todos.find((todo: any) => todo._id === id);
    dispatch(toggleTodo.request(id, item.completed));
    dispatch(fetchTodo.request());
  };

  const handleEditing = (e: any) => {
    setText(e.target.textContent);
    setDblClick(false);
  };

  const handleChangeText = (e: any) => {
    const id = e.currentTarget.parentNode.id;
    setText(e.target.value);
    dispatch(editTodo.request(id, text));
  };

  const handleEnter = (e: any) => {
    const id = e.currentTarget.parentNode.id;
    if (e.key === 'Enter' || e.key === 'Escape') {
      setDblClick(true);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleBlur = (e: any) => {
    const id = e.currentTarget.parentNode.id;
    dispatch(editTodo.request(id, text));
    setDblClick(true);
  };

  return (
    <TodoItemStyled id={id}>
      {completed ? (
        <Check dblClick={!dblClick} onClick={handleToggleTodo} />
      ) : (
        <Circle dblClick={!dblClick} onClick={handleToggleTodo} />
      )}

      {dblClick ? (
        <TextStyled
          onBlur={handleBlur}
          completed={completed}
          onDoubleClick={handleEditing}
        >
          {description}
        </TextStyled>
      ) : (
        <InputStyled
          type="text"
          value={text}
          onChange={handleChangeText}
          onKeyDown={handleEnter}
          onBlur={handleBlur}
        />
      )}
      {dblClick && (
        <button onClick={handleDeleteTodo} type="button" className="deleteBtn">
          <DeleteBtn />
        </button>
      )}
    </TodoItemStyled>
  );
};

const TodoItemStyled = styled.li`
  display: flex;
  align-items: center;
  width: 550px;
  height: 65px;
  color: #4d4d4d;
  font-size: 24px;
  padding-left: 15px;
  background-color: #fff;
  border-bottom: solid 1px lightgray;
  height: 100%;

  &:hover .deleteBtn,
  &:focus .deleteBtn {
    opacity: 1;
    padding-right: 15px;
  }
  .deleteBtn {
    margin-left: auto;
    border: none;
    background-color: inherit;
    opacity: 0;
    padding-right: 15px;
  }
`;

const TextStyled = styled.p`
  word-break: break-word;
  padding-right: 5px;
  margin-left: 10px;

  ${props =>
    props.completed &&
    css`
      text-decoration: line-through;
      color: rgb(177, 172, 172);
    `}
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 15px;
  padding-left: 0;
  margin-left: 40px;
  outline: none;
  border: none;
  box-shadow: inset 0px 0px 10px 0px gray;
  white-space: nowrap;
  overflow: hidden;
`;

export default TodoItem;
