//@ts-nocheck
import { registerUser, loginUser, logoutUser } from './auth-actions';
import authState from '../../interfaces/AuthState';

const initialState: authState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  isRefreshing: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case registerUser.types.success:
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
        isLoggedIn: false,
        isRegistered: true,
      };

    case loginUser.types.success:
      return {
        ...state,
        user: {
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
        token: action.payload.access_token,
        isLoggedIn: true,
        isRegistered: true,
      };

    case logoutUser.types.success:
      return {
        ...state,
        user: {
          name: null,
          email: null,
        },
        token: null,
        isLoggedIn: false,
        isRegistered: true,
      };

    default:
      return state;
  }
};
