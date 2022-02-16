//@ts-nocheck
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/todos/todos-actions';
import { Check, Circle, DeleteBtn } from '../SvgComponents';
import { getTodos } from '../../redux/todos/todos-selectors';
import styled from 'styled-components';

interface Props {
  id: string;
  description: string;
  completed: boolean;
}

const TodoItem = ({ id, description, completed }: Props) => {
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
  };

  const handleEditing = (e: any) => {
    if (e.target.tagName === 'P') {
      const target = e.target;
      console.log(target);
      // const targetItem = e.target.parentNode;
      // const label = targetItem.children[1];
      // label.style.display = 'none';
      // const btn = targetItem.children[3];
      // btn.classList.add('editable');

      // target.setAttribute('contenteditable', 'true');

      // const editInput = React.createElement('input');
      // target.appendChild(editInput);
      // editInput.focus();
      // editInput.value = target.innerText;
      // target.innerText = editInput.value;

      // let [r, s] = [document.createRange(), window.getSelection()];
      // r.selectNodeContents(e.target);
      // r.collapse(false);
      // s.removeAllRanges();
      // s.addRange(r);

      // target.addEventListener('keydown', todoHandlers.handleEnterAndEscape);
      // target.addEventListener('blur', todoHandlers.handleBlur);
    }
  };

  return (
    <TodoItemStyled id={id}>
      {completed ? (
        <Check onClick={handleToggleTodo} />
      ) : (
        <Circle onClick={handleToggleTodo} />
      )}

      <TextStyled onDoubleClick={handleEditing}>{description}</TextStyled>
      <button onClick={handleDeleteTodo} type="button" className="deleteBtn">
        <DeleteBtn />
      </button>
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

  .todoCompleted {
    text-decoration: line-through;
    color: rgb(177, 172, 172);
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

  &[contenteditable] {
    width: 100%;
    margin-left: 40px;
    outline: none;
    box-shadow: inset 0px 0px 10px 0px gray;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default TodoItem;
