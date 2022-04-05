import { call, put, takeEvery } from 'redux-saga/effects';
import { registerUser, loginUser, logoutUser } from '../auth/auth-actions';
import Action from '../../interfaces/Action';
import { axiosInstance } from '../../axiosInterceptors/interceptors';

const registerUserToServer = async (action: Action) => {
  const { data } = await axiosInstance.post('/auth/register', action.payload);
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
function* workerLogin(action: Action) {
  try {
    const data: DataLogin = yield call(loginUserToServer, action);
    yield put(loginUser.success<object>(data));
    yield localStorage.setItem('access', data.access_token);
    yield localStorage.setItem('refresh', data.refresh_token);
  } catch (e) {
    yield put(loginUser.error(e.message));
  }
}

const logoutUserToServer = async () => {
  const { data } = await axiosInstance.get('/users/logout');
  return data;
};

function* workerLogout(action: Action) {
  try {
    const data: object = yield call(logoutUserToServer);
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
