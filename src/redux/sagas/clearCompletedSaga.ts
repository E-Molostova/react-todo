//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { clearCompleted, fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const clearCompletedServer = async () => {
  return await axios.delete('/todos/clear-completed');
};

const getTodosFromServer = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

console.log(clearCompletedServer());

export function* workerClearTodoCompleted(action) {
  try {
    const data = yield call(clearCompletedServer);
    console.log(data);
    yield put(clearCompleted.success());
    // const data = yield call(getTodosFromServer);
    // yield put(fetchTodo.success(data));
  } catch (e) {
    console.log(e);
    yield put(clearCompleted.error(e));
  }
}

export function* watchClearCompleted() {
  yield takeEvery(types.clearCompletedRequest, workerClearTodoCompleted);
}
