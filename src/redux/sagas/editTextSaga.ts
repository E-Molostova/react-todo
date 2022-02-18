import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { editTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';

interface Action {
  type: string;
  payload: {
    todoId: string;
    newDescription: string;
  };
}
interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const editTodoToServer = async (action: Action) => {
  const id = action.payload.todoId;
  const body = action.payload.newDescription;
  const { data } = await axios.put(`/todos/${id}`, { description: body });
  return data;
};

export function* workerEditTodo(action: Action) {
  try {
    const data: ResponseGenerator = yield call(editTodoToServer, action);
    yield put(editTodo.success(data));
  } catch (e) {
    yield put(editTodo.error(e.message));
  }
}

export function* watchEditTodo() {
  yield takeEvery(types.editRequest, workerEditTodo);
}
