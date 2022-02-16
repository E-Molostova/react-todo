interface State {
  todos: [];
  loading: string;
  filter: string;
}

export const getTodos = (state: State) => state.todos;
export const getLoading = (state: State) => state.loading;
export const getFilter = (state: State) => state.filter;
