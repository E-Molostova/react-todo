//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { addTodo, fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const addTodoToServer = async action => {
  await axios.post('/todos', action.payload);
};

const getTodosFromServer = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

export function* workerAddTodo(action) {
  try {
    yield call(addTodoToServer, action);
    // yield put(addTodo.success(action.payload));
    const data = yield call(getTodosFromServer);
    yield put(fetchTodo.success(data));
  } catch (e) {
    yield put(addTodo.error(action.payload));
  }
}

export function* watchAddTodo() {
  yield takeEvery(types.addRequest, workerAddTodo);
}
