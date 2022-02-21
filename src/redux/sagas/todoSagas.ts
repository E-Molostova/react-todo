import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchTodo,
  addTodo,
  deleteTodo,
  toggleTodo,
  allCompleted,
  clearCompleted,
  editTodo,
} from '../todos/todos-actions';
import types from '../todos/todos-types';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
interface ActionAdd {
  type: string;
  payload: {
    description: string;
  };
}
interface ActionDelete {
  type: string;
  payload: string;
}
interface ActionEdit {
  type: string;
  payload: {
    todoId: string;
    newDescription?: string;
    completed?: boolean;
  };
}

const getTodosFromServer = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

function* workerFetchTodos(action: any) {
  try {
    const data: ResponseGenerator = yield call(getTodosFromServer);
    yield put(fetchTodo.success(data));
  } catch (e) {
    yield put(fetchTodo.error(action.payload));
  }
}

const addTodoToServer = async (action: ActionAdd) => {
  const { data } = await axios.post('/todos', action.payload);
  return data;
};

function* workerAddTodo(action: ActionAdd) {
  try {
    const data: string = yield call(addTodoToServer, action);
    yield put(addTodo.success(data));
  } catch (e) {
    yield put(addTodo.error(e));
  }
}

const deleteTodoFromServer = async (id: string) => {
  return await axios.delete(`/todos/${id}`);
};

function* workerDeleteTodo(action: ActionDelete) {
  try {
    yield call(deleteTodoFromServer, action.payload);
    yield put(deleteTodo.success(action.payload));
  } catch (e) {
    yield put(deleteTodo.error(e.message));
  }
}

const toggleTodoToServer = async (action: ActionEdit) => {
  const id = action.payload.todoId;
  const body = action.payload.completed;
  const { data } = await axios.put(`/todos/${id}`, { completed: body });
  return data;
};

function* workerToggleTodo(action: ActionEdit) {
  try {
    const data: ResponseGenerator = yield call(toggleTodoToServer, action);
    yield put(toggleTodo.success(data));
  } catch (e) {
    yield put(toggleTodo.error(e));
  }
}

const allCompletedServer = async () => {
  const { data } = await axios.put('/todos/toggle-completed');
  return data;
};

function* workerAllCompleted() {
  try {
    const data: ResponseGenerator = yield call(allCompletedServer);
    yield put(allCompleted.success(data));
  } catch (e) {
    yield put(allCompleted.error(e));
  }
}

const clearCompletedServer = async () => {
  const { data } = await axios.delete('/todos/clear-completed');
  return data;
};

function* workerClearTodoCompleted() {
  try {
    const data: ResponseGenerator = yield call(clearCompletedServer);
    yield put(clearCompleted.success(data));
  } catch (e) {
    yield put(clearCompleted.error(e));
  }
}

const editTodoToServer = async (action: ActionEdit) => {
  const id = action.payload.todoId;
  const body = action.payload.newDescription;
  const { data } = await axios.put(`/todos/${id}`, { description: body });
  return data;
};

export function* workerEditTodo(action: ActionEdit) {
  try {
    const data: ResponseGenerator = yield call(editTodoToServer, action);
    yield put(editTodo.success(data));
  } catch (e) {
    yield put(editTodo.error(e.message));
  }
}

export function* watchTodo() {
  yield takeEvery(types.fetchRequest, workerFetchTodos);
  yield takeEvery(types.addRequest, workerAddTodo);
  yield takeEvery(types.deleteRequest, workerDeleteTodo);
  yield takeEvery(types.toggleRequest, workerToggleTodo);
  yield takeEvery(types.allCompletedRequest, workerAllCompleted);
  yield takeEvery(types.clearCompletedRequest, workerClearTodoCompleted);
  yield takeEvery(types.editRequest, workerEditTodo);
}
