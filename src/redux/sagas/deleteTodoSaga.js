import { fork, put, takeEvery } from 'redux-saga/effects';
import {
  deleteTodoSuccess,
  deleteTodoRequest,
  deleteTodoError,
} from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const deleteTodo = async action => {
  console.log(action.payload);
  const { data } = await axios.delete(`/todos/${action.payload}`);
  return data;
};

export function* workerDeleteTodo(action) {
  try {
    console.log(action.payload);
    yield put(deleteTodoRequest());
    yield call(deleteTodo(action.payload));
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(deleteTodoError(error));
  }
}

export function* watchDeleteTodo() {
  yield takeEvery(types.deleteRequest, deleteTodo);
  yield takeEvery(types.deleteSuccess, deleteTodo);
  yield takeEvery(types.deleteError, deleteTodo);
}
