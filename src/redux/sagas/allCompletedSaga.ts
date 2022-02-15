//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { allCompleted, fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const allCompletedServer = async () => {
  return await axios.put('todos/toggle-completed');
};

console.log(allCompletedServer());

const getTodosFromServer = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

console.log(getTodosFromServer());

export function* workerAllCompleted() {
  try {
    const data = yield call(allCompletedServer);
    console.log(data);
    yield put(allCompleted.success());
    // const data = yield call(getTodosFromServer);
    // yield put(fetchTodo.success(data));
  } catch (e) {
    console.log(e);
    yield put(allCompleted.error(e));
  }
}

export function* watchAllCompleted() {
  yield takeEvery(types.allCompletedRequest, workerAllCompleted);
}
