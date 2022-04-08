import { createAction } from '../../units/redux-tools';

export const fetchTodo = createAction('fetchTodo');
export const addTodo = createAction('addTodo');
export const deleteTodo = createAction('deleteTodo');
export const toggleTodo = createAction('toggleTodo');
export const allCompleted = createAction('allCompleted');
export const clearCompleted = createAction('clearCompleted');
export const editTodo = createAction('editTodo');

export const setFilter = {
  active: () => {
    return {
      type: 'setFilterActive',
    };
  },
  completed: () => {
    return {
      type: 'setFilterCompleted',
    };
  },
};
