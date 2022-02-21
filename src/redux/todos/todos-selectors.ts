import State from '../../interfaces/State';

export const getTodos = (state: State) => state.todos;
export const getLoading = (state: State) => state.loading;
export const getFilter = (state: State) => state.filter;
