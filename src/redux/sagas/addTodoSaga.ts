import { call, put, takeEvery } from 'redux-saga/effects';
import { addTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

interface Action {
  type: string;
  payload: any;
}

const addTodoToServer = async (action: Action) => {
  const { data }: any = await axios.post('/todos', action.payload);
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
