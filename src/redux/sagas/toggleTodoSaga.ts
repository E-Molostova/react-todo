//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { toggleTodo, fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const toggleTodoToServer = async action => {
  const id = action.payload.todoId;
  const body = action.payload.completed;
  const { data } = await axios.put(`/todos/${id}`, { completed: body });
  return data;
};

export function* workerToggleTodo(action) {
  try {
    yield call(toggleTodoToServer, action);
    yield put(toggleTodo.success(action));
  } catch (e) {
    yield put(toggleTodo.error(e));
  }
}

export function* watchToggleTodo() {
  yield takeEvery(types.toggleRequest, workerToggleTodo);
}
