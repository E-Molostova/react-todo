//@ts-nocheck
import { call, put, takeEvery } from 'redux-saga/effects';
import { deleteTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

interface Action {
  payload: string;
}

const deleteTodoFromServer = async (id: string) => {
  return await axios.delete(`/todos/${id}`);
};

export function* workerDeleteTodo(action: Action) {
  try {
    yield call(deleteTodoFromServer, action.payload);
    yield put(deleteTodo.success(action.payload));
  } catch (e) {
    yield put(deleteTodo.error(e.message));
  }
}

export function* watchDeleteTodo() {
  yield takeEvery(types.deleteRequest, workerDeleteTodo);
}
