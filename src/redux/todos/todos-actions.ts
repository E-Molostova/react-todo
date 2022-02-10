import types from './todos-types';

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
  payload: {
    description: text,
  },
});

export const addTodoRequest = () => ({
  type: types.addRequest,
});
export const addTodoError = () => ({
  type: types.addError,
});

export const deleteTodoAction = (todoId: string) => ({
  type: types.deleteSuccess,
  payload: todoId,
});

// export const;
