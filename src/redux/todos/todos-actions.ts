import types from './todos-types';

export const fetchTodo = {
  request: () => {
    return {
      type: types.fetchRequest,
    };
  },
  success: (data: any) => {
    return {
      type: types.fetchSuccess,
      payload: data,
    };
  },
  error: (data: any) => {
    return {
      type: types.fetchError,
      payload: data,
    };
  },
};

export const addTodo = {
  request: (text: string) => {
    return {
      type: types.addRequest,
      payload: {
        description: text,
      },
    };
  },
  success: (text: string) => {
    return {
      type: types.addSuccess,
      payload: text,
    };
  },
  error: (data: any) => {
    return {
      type: types.addError,
      payload: data,
    };
  },
};

export const deleteTodo = {
  request: () => {
    return {
      type: types.addRequest,
    };
  },
  success: (todoId: string) => {
    return {
      type: types.addSuccess,
      payload: todoId,
    };
  },
  error: (data: any) => {
    return {
      type: types.addError,
      payload: data,
    };
  },
};
