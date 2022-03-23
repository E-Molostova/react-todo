export default interface authState {
  user: { name: string; email: string };
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
