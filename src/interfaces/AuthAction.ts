export default interface AuthAction<T> {
  type: string;
  payload: T;
}
