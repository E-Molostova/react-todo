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
  request: (todoId: string) => {
    return {
      type: types.deleteRequest,
      payload: todoId,
    };
  },
  success: (todoId: string) => {
    return {
      type: types.deleteSuccess,
      payload: todoId,
    };
  },
  error: (data: any) => {
    return {
      type: types.deleteError,
      payload: data,
    };
  },
};

export const toggleTodo = {
  request: (id: any, completed: boolean) => {
    return {
      type: types.toggleRequest,
      payload: {
        todoId: id,
        completed: !completed,
      },
    };
  },
  success: (data: any) => {
    return {
      type: types.toggleSuccess,
      payload: data,
    };
  },
  error: (data: any) => {
    return {
      type: types.toggleError,
      payload: data,
    };
  },
};

export const allCompleted = {
  request: () => {
    return {
      type: types.allCompletedRequest,
    };
  },
  success: (data: any) => {
    return {
      type: types.allCompletedSuccess,
      payload: data,
    };
  },
  error: (data: any) => {
    return {
      type: types.allCompletedError,
      payload: data,
    };
  },
};

export const clearCompleted = {
  request: () => {
    return {
      type: types.clearCompletedRequest,
    };
  },
  success: (data: any) => {
    return {
      type: types.clearCompletedSuccess,
      payload: data,
    };
  },
  error: () => {
    return {
      type: types.clearCompletedError,
    };
  },
};

export const setFilter = {
  active: () => {
    return {
      type: types.setFilterActiveSuccess,
    };
  },
  completed: () => {
    return {
      type: types.setFilterCompletedSuccess,
    };
  },
};

export const editTodo = {
  request: (id: any, description: string) => {
    return {
      type: types.editRequest,
      payload: {
        todoId: id,
        newDescription: description,
      },
    };
  },
  success: (data: any) => {
    return {
      type: types.editSuccess,
      payload: data,
    };
  },
  error: (data: any) => {
    return {
      type: types.editError,
      payload: data,
    };
  },
};
