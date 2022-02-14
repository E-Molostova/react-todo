//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { deleteTodo, fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const deleteTodoFromServer = async (id: string) => {
  return await axios.delete(`/todos/${id}`);
};

const getTodosFromServer = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

export function* workerDeleteTodo(action) {
  try {
    yield put(deleteTodo.success(action.payload));
    yield call(deleteTodoFromServer, action.payload);
    const data = yield call(getTodosFromServer);
    yield put(fetchTodo.success(data));
  } catch (e) {
    yield put(deleteTodo.error(e.message));
  }
}

export function* watchDeleteTodo() {
  yield takeEvery(types.deleteRequest, workerDeleteTodo);
}
