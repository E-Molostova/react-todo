import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

// interface ResponseGenerator {
//   config?: any;
//   data?: any;
//   headers?: any;
//   request?: any;
//   status?: number;
//   statusText?: string;
// }

const getTodos = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

export function* workerFetchTodos(action) {
  try {
    const data = yield call(getTodos);
    yield put(fetchTodo.success(data));
  } catch (e) {
    yield put(fetchTodo.error(action.payload));
  }
}

export function* watcherFetchTodos() {
  yield takeEvery(types.fetchRequest, workerFetchTodos);
}
