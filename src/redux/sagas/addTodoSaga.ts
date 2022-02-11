//@ts-nocheck

import { call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  addTodoRequest,
  addTodoError,
  addTodoSuccess,
  fetchTodosSuccess,
} from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const getTodos = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

const addTodo = async action => {
  const { data } = await axios.post('/todos', action.payload);
  return data;
};

export function* workerAddTodo(action) {
  try {
    // console.log(action);
    // yield call(addTodo(action.payload));
    // yield put(addTodoSuccess(action.payload));

    yield put(addTodoSuccess(action.payload));
    yield call(addTodo, action.payload);
    const data = yield call(getTodos);
    yield put(fetchTodosSuccess(data));
    // console.log(data);
    // yield put(fetchTodosSuccess(data));
    //     const data: ResponseGenerator = yield call(getTodos);
    // yield put(fetchTodosSuccess(data));

    // yield put(addTodoRequest());
    // yield call(addTodo, action.payload);
  } catch (error) {
    // yield put(addTodoError());
  }
}

export function* watchAddTodo() {
  yield takeEvery(types.addRequest, workerAddTodo);
}
