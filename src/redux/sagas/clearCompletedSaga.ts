//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { clearCompleted, fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const clearCompletedServer = async () => {
  const { data } = await axios.delete('/todos/clear-completed');
  return data;
};

export function* workerClearTodoCompleted() {
  try {
    const data = yield call(clearCompletedServer);
    yield put(clearCompleted.success(data));
  } catch (e) {
    yield put(clearCompleted.error(e));
  }
}

export function* watchClearCompleted() {
  yield takeEvery(types.clearCompletedRequest, workerClearTodoCompleted);
}
