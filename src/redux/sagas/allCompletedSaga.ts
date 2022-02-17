import { call, put, takeEvery } from 'redux-saga/effects';
import { allCompleted } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const allCompletedServer = async () => {
  const { data } = await axios.put('/todos/toggle-completed');
  return data;
};

export function* workerAllCompleted() {
  try {
    const data: ResponseGenerator = yield call(allCompletedServer);
    yield put(allCompleted.success(data));
  } catch (e) {
    yield put(allCompleted.error(e));
  }
}

export function* watchAllCompleted() {
  yield takeEvery(types.allCompletedRequest, workerAllCompleted);
}
