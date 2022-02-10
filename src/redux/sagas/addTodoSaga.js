import { call, put, takeEvery } from 'redux-saga/effects';
import {
  addTodoRequest,
  addTodoError,
  addTodoSuccess,
} from '../todos/todos-actions';
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

const addTodo = async action => {
  const { data } = await axios.post('/todos', action.payload);
  return data;
};

export function* workerAddTodo(action) {
  try {
    yield put(addTodoRequest());
    yield call(addTodo(action.payload));
    yield put(addTodoSuccess(action.payload));
  } catch (error) {
    yield put(addTodoError());
  }
}

export function* watchAddTodos() {
  yield takeEvery(types.addRequest, addTodo);
  yield takeEvery(types.addSuccess, addTodo);
  yield takeEvery(types.addError, addTodo);
}
