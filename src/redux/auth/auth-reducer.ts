import { AnyAction } from 'redux';
import {
  //   authRegisterRequest,
  authRegisterSuccess,
  //   authRegisterError,
  //   authLoginRequest,
  authLoginSuccess,
  //   authLoginError,
  //   authLogOutRequest,
  //   authLogOutSuccess,
  //   authLogOutError,
} from './auth-actions';
import authState from '../../interfaces/AuthState';

const initialState: authState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authReducer = (state = initialState, action: AnyAction) => {
  console.log(action.payload);
  switch (action.type) {
    case authRegisterSuccess:
      return (state.user = action.payload.name), (state.isLoggedIn = true);
    case authLoginSuccess:
      return (
        (state.user = action.payload.name),
        (state.token = action.payload.access_token),
        (state.isLoggedIn = true)
      );

    default:
      return state;
  }
};
