//@ts-nocheck

import { call, put, takeEvery } from 'redux-saga/effects';
import { toggleTodo, fetchTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const toggleTodoToServer = async action => {
  const id = action.payload.todoId;
  const body = action.payload.completed;
  console.log(body);
  return await axios.put(`/todos/${id}`, { completed: body });
};

const getTodosFromServer = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

export function* workerToggleTodo(action) {
  try {
    // yield put(toggleTodo.success(action));
    yield call(toggleTodoToServer, action);
    const data = yield call(getTodosFromServer);
    yield put(fetchTodo.success(data));
  } catch (e) {
    console.log(e);
    yield put(toggleTodo.error(e));
  }
  // try {
  //   yield put(deleteTodo.success(action.payload));
  //   yield call(deleteTodoFromServer, action.payload);
  //   const data = yield call(getTodosFromServer);
  //   yield put(fetchTodo.success(data));
  // } catch (e) {
  //   yield put(deleteTodo.error(e.message));
  // }
}

export function* watchToggleTodo() {
  yield takeEvery(types.toggleRequest, workerToggleTodo);
}
