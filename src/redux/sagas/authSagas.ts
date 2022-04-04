import { call, put, takeEvery } from 'redux-saga/effects';
import { registerUser, loginUser, logoutUser } from '../auth/auth-actions';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const token = {
  set(token: string) {
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
  const { data } = await axios.post('/auth/register', action.payload);
  return data;
};

function* workerRegister(action: Action) {
  try {
    const data: object = yield call(registerUserToServer, action);
    yield put(registerUser.success<object>(data));
  } catch (e) {
    yield put(registerUser.error(e.message));
  }
}

const loginUserToServer = async (action: Action) => {
  const { data } = await axios.post('/auth/login', action.payload);
  token.set(data.access_token);
  return data;
};

interface DataLogin {
  access_token: string;
  refresh_token: string;
  user: {
    name: string;
    email: string;
  };
}
function* workerLogin(action: Action) {
  try {
    const data: DataLogin = yield call(loginUserToServer, action);
    yield put(loginUser.success<object>(data));
    yield localStorage.setItem('token', data.access_token);
  } catch (e) {
    yield put(loginUser.error(e.message));
  }
}

const logoutUserToServer = async (action: Action) => {
  const { data } = await axios.get('/users/logout', action.payload);
  token.unset();
  return data;
};

function* workerLogout(action: Action) {
  try {
    const data: object = yield call(logoutUserToServer, action);

    yield put(logoutUser.success<object>(data));
  } catch (e) {
    yield put(logoutUser.error(e.message));
  }
}

export function* watchAuth() {
  yield takeEvery(registerUser.types.request, workerRegister);
  yield takeEvery(loginUser.types.request, workerLogin);
  yield takeEvery(logoutUser.types.request, workerLogout);
}
