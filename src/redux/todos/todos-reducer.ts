import { combineReducers } from 'redux';
import types from './todos-types';

interface Action {
  type: string;
  payload: any;
  id: any;
}

const todos = (state: [] = [], action: Action) => {
  switch (action.type) {
    case types.FETCH:
      return [...state, ...action.payload];

    case types.ADD:
      return [...state, action.payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== action.payload);

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

// const loading = (state = false, action:Action) => {
//   switch (action.type) {
//     case :
//       return state=true;

//     default:
//       return state;
//   }
// };

// const loading = createReducer(false, {
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

export default combineReducers({
  todos,
  //   loading,
});
