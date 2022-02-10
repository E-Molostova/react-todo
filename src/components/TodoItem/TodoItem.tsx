import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAction } from '../../redux/todos/todos-actions';
import DeleteBtn from '../SvgComponents/DeleteBtn';
import { TodoItemStyled } from './TodoItemStyled';

interface Props {
  id: string;
  description: string;
  completed: boolean;
}
const TodoItem = ({ id, description, completed }: Props) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = (e: any) => {
    const id = e.currentTarget.parentNode.id;
    dispatch(deleteTodoAction(id));
  };

  return (
    <TodoItemStyled id={id}>
      <input type="checkbox" checked={completed} />
      <p className="description">{description}</p>
      <button type="button" className="deleteBtn">
        <DeleteBtn onClick={handleDeleteTodo} />
      </button>
    </TodoItemStyled>
  );
};

export default TodoItem;
