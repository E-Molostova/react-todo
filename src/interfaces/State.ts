import authState from './AuthState';

export default interface State {
  todos: [];
  loading: string;
  filter: 'all' | 'completed' | 'active';
  auth: authState;
}
