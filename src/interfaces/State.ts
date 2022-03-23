export default interface State {
  todos: [];
  loading: string;
  filter: string;
  auth: {
    user: { name: string; email: string };
    token: string;
    isLoggedIn: boolean;
    isRefreshing: boolean;
  };
}
