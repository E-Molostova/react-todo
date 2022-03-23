import { createAction } from '@reduxjs/toolkit';

export const authRegisterRequest = createAction('auth/registerRequest');
export const authRegisterSuccess = createAction('auth/registerSuccess');
export const authRegisterError = createAction('auth/registerError');

export const authLoginRequest = createAction('auth/loginRequest');
export const authLoginSuccess = createAction('auth/loginSuccess');
export const authLoginError = createAction('auth/loginError');

export const authLogOutRequest = createAction('auth/logoutRequest');
export const authLogOutSuccess = createAction('auth/logoutSuccess');
export const authLogOutError = createAction('auth/logoutError');

export const fetchCurrentRequest = createAction('auth/fetchcurrentRequest');
export const fetchCurrentSuccess = createAction('auth/fetchcurrentSuccess');
export const fetchCurrentError = createAction('auth/fetchcurrentError');
