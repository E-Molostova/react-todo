import State from '../../interfaces/State';
const getIsLoggedIn = (state: State) => state.auth.isLoggedIn;
const getUserName = (state: State) => state.auth.user.name;
const getIsRefreshing = (state: State) => state.auth.isRefreshing;
const getIsRegistered = (state: State) => state.auth.isRegistered;
const getToken = (state: State) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
  getIsRegistered,
  getToken,
};

export default authSelectors;
