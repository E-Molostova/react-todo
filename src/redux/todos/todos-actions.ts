export const createAction = (type: string) => {
  return {
    types: {
      request: `${type}-request`,
      success: `${type}-success`,
      error: `${type}-error`,
    },
    request: <T>(data?: T) => {
      return {
        type: `${type}-request`,
        payload: data,
      };
    },
    success: <T>(data: T) => {
      return {
        type: `${type}-success`,
        payload: data,
      };
    },
    error: (data: string) => {
      return {
        type: `${type}-error`,
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
      type: 'setFilterActive',
    };
  },
  completed: () => {
    return {
      type: 'setFilterCompleted',
    };
  },
};
