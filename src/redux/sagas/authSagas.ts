//@ts-nocheck
import { call, put, takeEvery } from 'redux-saga/effects';
import { registerUser, loginUser } from '../auth/auth-actions';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

interface Action {
  type: string;
  payload: {
    data?: string;
  };
}

const registerUserToServer = async (action: Action) => {
  //   console.log(action);
  //   console.log(action.payload);
  const { data } = await axios.post('/auth/register', action.payload);
  return data;
};

function* workerRegister(action: Action) {
  try {
    console.log(action);
    const data: object = yield call(registerUserToServer, action);
    console.log(data);
    yield put(registerUser.success<object>(data));
  } catch (e) {
    yield put(registerUser.error(e.message));
  }
}

const loginUserToServer = async (action: Action) => {
  console.log(action);
  console.log(action.payload);
  const { data } = await axios.post('/auth/login', action.payload);
  token.set(data.access_token);
  return data;
};

function* workerLogin(action: Action) {
  try {
    console.log(action);
    const data: object = yield call(loginUserToServer, action);
    console.log(data);
    yield put(loginUser.success<object>(data));
  } catch (e) {
    yield put(loginUser.error(e.message));
  }
}

export function* watchAuth() {
  yield takeEvery(registerUser.types.request, workerRegister);
  yield takeEvery(loginUser.types.request, workerLogin);
}
