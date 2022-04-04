import authState from './AuthState';

export default interface State {
  todos: [];
  loading: string;
  filter: string;
  auth: authState;
}
