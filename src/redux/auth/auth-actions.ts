import { createAction } from '../../units/redux-tools';

export const registerUser = createAction('registerUser');
export const loginUser = createAction('loginUser');
export const logoutUser = createAction('logoutUser');
export const fetchCurrentUser = createAction('fetchCurrentUser');
