import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { clearCompleted } from '../todos/todos-actions';
import types from '../todos/todos-types';


interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const clearCompletedServer = async () => {
  const { data } = await axios.delete('/todos/clear-completed');
  return data;
};

export function* workerClearTodoCompleted() {
  try {
    const data: ResponseGenerator = yield call(clearCompletedServer);
    yield put(clearCompleted.success(data));
  } catch (e) {
    yield put(clearCompleted.error(e));
  }
}

export function* watchClearCompleted() {
  yield takeEvery(types.clearCompletedRequest, workerClearTodoCompleted);
}
