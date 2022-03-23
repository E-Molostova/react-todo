//@ts-nocheck
import { registerUser, loginUser } from './auth-actions';
import authState from '../../interfaces/AuthState';

const initialState: authState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case registerUser.types.success:
      return {
        ...state,
        user: action.payload.name,
        email: action.payload.email,
        isLoggedIn: true,
      };

    case loginUser.types.success:
      return {
        ...state,
        user: action.payload.user.name,
        email: action.payload.user.email,
        token: action.payload.access_token,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};
