import { combineReducers, AnyAction } from 'redux';
import types from './todos-types';

const todos = (state: [] = [], action: AnyAction) => {
  switch (action.type) {
    case types.fetchSuccess:
      return [...action.payload];
    case types.addSuccess:
      return [...action.payload];
    case types.deleteSuccess:
      return state.filter(({ _id }): any => _id !== action.payload);
    case types.toggleSuccess:
      return [...action.payload];
    case types.allCompletedSuccess:
      return [...action.payload];
    case types.clearCompletedSuccess:
      return [...action.payload];
    case types.editSuccess:
      return [...action.payload];

    default:
      return state;
  }
};

const loading = (state = false, action: AnyAction) => {
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

    case types.toggleRequest:
      return (state = true);
    case types.toggleSuccess:
      return (state = false);
    case types.toggleError:
      return (state = true);

    case types.clearCompletedRequest:
      return (state = true);
    case types.clearCompletedSuccess:
      return (state = false);
    case types.clearCompletedError:
      return (state = true);

    case types.allCompletedRequest:
      return (state = true);
    case types.allCompletedSuccess:
      return (state = false);
    case types.allCompletedError:
      return (state = true);

    default:
      return state;
  }
};

const filter = (state = 'all', action: AnyAction) => {
  switch (action.type) {
    case types.fetchSuccess:
      return (state = 'all');
    case types.setFilterActiveSuccess:
      return (state = 'active');
    case types.setFilterCompletedSuccess:
      return (state = 'completed');

    default:
      return state;
  }
};

export default combineReducers({
  todos,
  loading,
  filter,
});
