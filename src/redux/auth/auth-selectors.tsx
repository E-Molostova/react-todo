import State from '../../interfaces/State';
const getIsLoggedIn = (state: State) => state.auth.isLoggedIn;
const getUserName = (state: State) => state.auth.user;
const getIsRefreshing = (state: State) => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
};

export default authSelectors;
