import { call, put, takeEvery } from 'redux-saga/effects';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from '../auth/auth-actions';
import AuthAction from '../../interfaces/AuthAction';
import { axiosInstance } from '../../axiosInterceptors/interceptors';

const registerUserToServer = async (action: AuthAction<string>) => {
  const { data } = await axiosInstance.post('/auth/register', action.payload);
  return data;
};

function* workerRegister(action: AuthAction<string>) {
  try {
    const data: object = yield call(registerUserToServer, action);
    yield put(registerUser.success<object>(data));
  } catch (e) {
    yield put(registerUser.error(e.message));
  }
}

const loginUserToServer = async (action: AuthAction<string>) => {
  const { data } = await axiosInstance.post('/auth/login', action.payload);
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
function* workerLogin(action: AuthAction<string>) {
  try {
    const data: DataLogin = yield call(loginUserToServer, action);
    yield localStorage.setItem('access', data.access_token);
    yield localStorage.setItem('refresh', data.refresh_token);
    yield put(loginUser.success<object>(data));
  } catch (e) {
    yield put(loginUser.error(e.message));
  }
}

const logoutUserToServer = async () => {
  const { data } = await axiosInstance.get('/users/logout');
  return data;
};

function* workerLogout() {
  try {
    const data: object = yield call(logoutUserToServer);
    yield put(logoutUser.success<object>(data));
  } catch (e) {
    yield put(logoutUser.error(e.message));
  }
}

const fetchCurrentUserToServer = async () => {
  const { data } = await axiosInstance.get('/users/current');
  return data;
};

interface DataCurrentUser {
  name: string;
  email: string;
}
function* workerFetchCurrentUser() {
  try {
    const data: DataCurrentUser = yield call(fetchCurrentUserToServer);

    yield put(fetchCurrentUser.success<object>(data));
  } catch (e) {
    yield put(fetchCurrentUser.error(e.message));
  }
}

export function* watchAuth() {
  yield takeEvery(registerUser.types.request, workerRegister);
  yield takeEvery(loginUser.types.request, workerLogin);
  yield takeEvery(logoutUser.types.request, workerLogout);
  yield takeEvery(fetchCurrentUser.types.request, workerFetchCurrentUser);
}
