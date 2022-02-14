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

    // case types.TOGGLE:
    //   return state.map(({ id }) => {
    //     if (id === action.id) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   });

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
