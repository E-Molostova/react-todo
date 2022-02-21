const createAction = (type: string) => {
  return {
    types: {
      request: `todos/${type}-request`,
      success: `todos/${type}-success`,
      error: `todos/${type}-error`,
    },
    request: <T>(data1?: T, data2?: T) => {
      return {
        type: `todos/${type}-request`,
        payload: {
          description: data1,
          data: data2,
        },
      };
    },
    success: <T>(data: T) => {
      return {
        type: `todos/${type}-success`,
        payload: data,
      };
    },
    error: (data: string) => {
      return {
        type: `todos/${type}-error`,
        payload: data,
      };
    },
  };
};

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
      type: 'todos/setFilterActive',
    };
  },
  completed: () => {
    return {
      type: 'todos/setFilterCompleted',
    };
  },
};
