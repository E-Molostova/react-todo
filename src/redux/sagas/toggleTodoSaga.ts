import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toggleTodo } from '../todos/todos-actions';
import types from '../todos/todos-types';

interface Action {
  type: string;
  payload: {
    todoId: string;
    completed: boolean;
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

const toggleTodoToServer = async (action: Action) => {
  const id = action.payload.todoId;
  const body = action.payload.completed;
  const { data } = await axios.put(`/todos/${id}`, { completed: body });
  return data;
};

export function* workerToggleTodo(action: Action) {
  try {
    const data: ResponseGenerator = yield call(toggleTodoToServer, action);
    yield put(toggleTodo.success(data));
  } catch (e) {
    yield put(toggleTodo.error(e));
  }
}

export function* watchToggleTodo() {
  yield takeEvery(types.toggleRequest, workerToggleTodo);
}
