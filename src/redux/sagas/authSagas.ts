
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  authRegisterRequest,
  authRegisterSuccess,
  authRegisterError,
  authLoginRequest,
  authLoginSuccess,
  authLoginError,
} from '../auth/auth-actions';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

interface Action {
  type: string;
  payload: {
    description?: string;
    data?: string;
  };
}

const registerUserToServer = async (action: Action) => {
  const { data } = await axios.post('/auth/register', action.payload);
  return data;
};

function* workerRegister(action: Action) {
  try {
    yield call(registerUserToServer, action);
    yield put(authRegisterSuccess());
  } catch (e) {
    yield put(authRegisterError());
  }
}

const loginUserToServer = async (action: Action) => {
  const { data } = await axios.post('/auth/login', action.payload);
  return data;
};

function* workerLogin(action: Action) {
  try {
    yield call(loginUserToServer, action);
    yield put(authLoginSuccess());
  } catch (e) {
    yield put(authLoginError());
  }
}


export function* watchAuth() {
    yield takeEvery(authRegisterRequest, workerRegister);
    yield takeEvery(authLoginRequest, workerLogin);
}
