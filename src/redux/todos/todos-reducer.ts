//@ts-nocheck

import { combineReducers } from 'redux';
import types from './todos-types';

interface Action {
  type: string;
  payload: any;
  id: any;
}

const todos = (state: [] = [], action: Action) => {
  switch (action.type) {
    case types.fetchSuccess:
      return [...action.payload];

    case types.addSuccess:
      return [...state, action.payload];

    case types.deleteSuccess:
      return state.filter(todo => todo._id !== action.payload);

    case types.toggleSuccess:
      return state.map(todo => {
        if (todo._id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case types.allCompletedSuccess:
      const isAnyActive = state.some(todo => todo.completed === false);
      let newTodos;
      if (isAnyActive) {
        newTodos = todos.map(todo => {
          todo.completed = true;
          return todo;
        });
      } else {
        newTodos = todos.map(todo => {
          todo.completed = false;
          return todo;
        });
      }

    default:
      return state;
  }
};

const loading = (state = false, action: Action) => {
  switch (action.type) {
    case types.fetchRequest:
      return (state = true);
    case types.fetchSuccess:
      return (state = false);
    case types.fetchError:
      return (state = true);

    case types.addRequest:
      return (state = true);
    case types.addSuccess:
      return (state = false);
    case types.addError:
      return (state = true);

    case types.deleteRequest:
      return (state = true);
    case types.deleteSuccess:
      return (state = false);
    case types.deleteError:
      return (state = true);

    default:
      return state;
  }
};

export default combineReducers({
  todos,
  loading,
});
