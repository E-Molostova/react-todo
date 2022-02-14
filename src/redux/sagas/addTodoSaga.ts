//@ts-nocheck

import { fork, put, takeEvery } from 'redux-saga/effects';
import {
  addTodoRequest,
  addTodoError,
  addTodoSuccess,
  fetchTodosSuccess,
} from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const addTodo = async action => {
  const { data } = await axios.post('/todos', action.payload);
  return data;
};

export function* workerAddTodo(action) {
  try {
    // yield put(addTodoRequest());
    console.log(action);
    yield put(addTodoSuccess(action.payload));
    const data = yield call(addTodo, action);
    console.log(data);
    // yield put(fetchTodosSuccess(data));
    //     const data: ResponseGenerator = yield call(getTodos);
    //     yield put(fetchTodosSuccess(data));

    // yield put(addTodoRequest());
    // yield call(addTodo, action.payload);
  } catch (error) {
    // yield put(addTodoError());
  }
}

export function* watchAddTodo() {
  yield takeEvery(types.addRequest, workerAddTodo);
}
