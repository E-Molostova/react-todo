import types from './todos-types';

export const fetchTodos = (data: any) => ({
  type: types.FETCH,
  payload: data,
});

export const addTodo = (text: string) => ({
  type: types.ADD,
  payload: {
    description: text,
  },
});

export const deleteTodo = (todoId: string) => ({
  type: types.DELETE,
  payload: todoId,
});
