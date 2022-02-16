//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { editTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const editTodoToServer = async action => {
  const id = action.payload.todoId;
  const body = action.payload.newDescription;
  const { data } = await axios.put(`/todos/${id}`, { description: body });
  return data;
};

export function* workerEditTodo(action) {
  try {
    const data = yield call(editTodoToServer, action);
    yield put(editTodo.success(data));
  } catch (e) {
    yield put(toggleTodo.error(e));
  }
}

export function* watchEditTodo() {
  yield takeEvery(types.editRequest, workerEditTodo);
}
