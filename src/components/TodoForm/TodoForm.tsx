import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoSuccess } from '../../redux/todos/todos-actions';
import { FormStyled } from './TodoFormStyled';

// type Text = string;

const TodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTodosSuccess);
  // }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('Enter task description please!');
    }
    dispatch(addTodoSuccess(text));
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
