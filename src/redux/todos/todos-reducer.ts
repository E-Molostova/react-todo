import { combineReducers, AnyAction } from 'redux';
import {
  fetchTodo,
  addTodo,
  deleteTodo,
  toggleTodo,
  allCompleted,
  clearCompleted,
  editTodo,
} from './todos-actions';
import { registerUser, loginUser, logoutUser } from '../auth/auth-actions';
import { authReducer } from '../auth/auth-reducer';

const todos = (state: [] = [], action: AnyAction) => {
  switch (action.type) {
    case fetchTodo.types.success:
      return [...action.payload];
    case addTodo.types.success:
      return [...action.payload];
    case deleteTodo.types.success:
      return [...action.payload];
    case toggleTodo.types.success:
      return [...action.payload];
    case allCompleted.types.success:
      return [...action.payload];
    case clearCompleted.types.success:
      return [...action.payload];
    case editTodo.types.success:
      return [...action.payload];

    default:
      return state;
  }
};

const loading = (state = false, action: AnyAction) => {
  switch (action.type) {
    case fetchTodo.types.request:
      return (state = true);
    case fetchTodo.types.success:
      return (state = false);
    case fetchTodo.types.error:
      return (state = true);

    case addTodo.types.request:
      return (state = true);
    case addTodo.types.success:
      return (state = false);
    case addTodo.types.error:
      return (state = true);

    case deleteTodo.types.request:
      return (state = true);
    case deleteTodo.types.success:
      return (state = false);
    case deleteTodo.types.error:
      return (state = true);

    case toggleTodo.types.request:
      return (state = true);
    case toggleTodo.types.success:
      return (state = false);
    case toggleTodo.types.error:
      return (state = true);

    case clearCompleted.types.request:
      return (state = true);
    case clearCompleted.types.success:
      return (state = false);
    case clearCompleted.types.error:
      return (state = true);

    case allCompleted.types.request:
      return (state = true);
    case allCompleted.types.success:
      return (state = false);
    case allCompleted.types.error:
      return (state = true);

    case registerUser.types.request:
      return (state = true);
    case registerUser.types.success:
      return (state = false);
    case registerUser.types.error:
      return (state = true);

    case loginUser.types.request:
      return (state = true);
    case loginUser.types.success:
      return (state = false);
    case loginUser.types.error:
      return (state = false);

    case logoutUser.types.request:
      return (state = true);
    case logoutUser.types.success:
      return (state = false);
    case logoutUser.types.error:
      return (state = true);

    default:
      return state;
  }
};

const filter = (state = 'all', action: AnyAction) => {
  switch (action.type) {
    case fetchTodo.types.success:
      return (state = 'all');
    case 'setFilterActive':
      return (state = 'active');
    case 'setFilterCompleted':
      return (state = 'completed');

    default:
      return state;
  }
};

export default combineReducers({
  todos,
  loading,
  filter,
  auth: authReducer,
});
