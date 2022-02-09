import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import DeleteBtn from '../SvgComponents/DeleteBtn';
import { TodoItemStyled } from './TodoItemStyled';

interface Props {
  description: string;
  completed: boolean;
}
const TodoItem = ({ description, completed }: Props) => {
  return (
    <TodoItemStyled>
      <input type="checkbox" checked={completed} />
      <p className="description">{description}</p>
      <button type="button" className="deleteBtn">
        <DeleteBtn />
      </button>
    </TodoItemStyled>
  );
};

export default TodoItem;
