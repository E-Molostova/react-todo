import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';

interface Action {
  type: string;
  payload: {
    description: string;
  };
}

const addTodoToServer = async (action: Action) => {
  const { data } = await axios.post('/todos', action.payload);
  return data;
};

export function* workerAddTodo(action: Action) {
  try {
    const data: string = yield call(addTodoToServer, action);
    yield put(addTodo.success(data));
  } catch (e) {
    yield put(addTodo.error(e));
  }
}

export function* watchAddTodo() {
  yield takeEvery(types.addRequest, workerAddTodo);
}
