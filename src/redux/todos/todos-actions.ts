import types from './todos-types';

// const AddTodo = {
//   types: {
//     REQUEST: 'REQUEST',
//   },
//   request: (data: any) => {
//     type: 'REQUEST'
//     payload: data
//   }
// };

export const fetchTodosSuccess = (data: any) => ({
  type: types.fetchSuccess,
  payload: data,
});

export const fetchTodosRequest = () => ({
  type: types.fetchRequst,
});
export const fetchTodosError = () => ({
  type: types.fetchError,
});

export const addTodoSuccess = (text: string) => ({
  type: types.addSuccess,
  payload: text,
});

export const addTodoRequest = (text: string) => ({
  type: types.addRequest,
  payload: {
    description: text,
  },
});
export const addTodoError = () => ({
  type: types.addError,
});

export const deleteTodoSuccess = (todoId: string) => ({
  type: types.deleteSuccess,
  payload: todoId,
});

export const deleteTodoRequest = () => ({
  type: types.deleteRequest,
});
export const deleteTodoError = () => ({
  type: types.deleteError,
});
