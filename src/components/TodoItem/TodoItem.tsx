import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  toggleTodo,
} from '../../redux/todos/todos-actions';
import Todo from '../../interfaces/Todo';
import { Check, Circle, Close } from '../SvgComponents';
import styled, { css } from 'styled-components';

const TodoItem = ({ _id, description, completed }: Todo) => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo.request<Todo>({ _id }));
  };

  const handleToggleTodo = () => {
    const data = { _id, completed };
    dispatch(toggleTodo.request<Todo>(data));
  };

  const handleEditing = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLParagraphElement;
    setText(target.textContent);
    setIsEditingMode(true);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    const data = { _id, description: text };
    dispatch(editTodo.request<Todo>(data));
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setIsEditingMode(false);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleBlur = () => {
    const data = { _id, description: text };
    dispatch(editTodo.request<Todo>(data));
    setIsEditingMode(false);
  };

  return (
    <TodoItemStyled>
      <LabelDiv isEditingMode={!isEditingMode} onClick={handleToggleTodo}>
        {completed ? <Check /> : <Circle />}
      </LabelDiv>

      {isEditingMode ? (
        <Input
          type="text"
          value={text}
          onChange={handleChangeText}
          onKeyDown={handleEnter}
          onBlur={handleBlur}
        />
      ) : (
        <Text completed={completed} onDoubleClick={handleEditing}>
          {description}
        </Text>
      )}
      {!isEditingMode && (
        <Button onClick={handleDeleteTodo} type="button">
          <Close />
        </Button>
      )}
    </TodoItemStyled>
  );
};

const Button = styled.button`
  margin-left: auto;
  border: none;
  background-color: inherit;
  opacity: 0;
  padding-right: 15px;
`;

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

  &:hover ${Button}, &:focus ${Button} {
    opacity: 1;
    padding-right: 15px;
  }
`;

const Input = styled.input`
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

interface LabelProps {
  isEditingMode: boolean;
}
const LabelDiv = styled.div`
  ${(props: LabelProps) =>
    !props.isEditingMode &&
    css`
      display: none;
    `}
`;

interface TextStyledProps {
  completed: boolean;
  onBlur?: any;
}
const Text = styled.p<TextStyledProps>`
  word-break: break-word;
  padding-right: 5px;
  margin-left: 5px;

  ${(props: TextStyledProps) =>
    props.completed &&
    css`
      text-decoration: line-through;
      color: rgb(177, 172, 172);
    `}
`;

export default TodoItem;
