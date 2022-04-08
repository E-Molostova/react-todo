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
import Todo from '../../interfaces/Todo';
import Action from '../../interfaces/Action';
import { axiosInstance } from '../../axiosInterceptors/interceptors';

const getTodosFromServer = async () => {
  const { data } = await axiosInstance.get('/todos');
  return data;
};

function* workerFetchTodos() {
  try {
    const data: Todo[] = yield call(getTodosFromServer);
    yield put(fetchTodo.success<Todo[]>(data));
  } catch (e) {
    yield put(fetchTodo.error(e.message));
  }
}

const addTodoToServer = async (action: Action) => {
  const { data } = await axiosInstance.post('/todos', action.payload);
  return data;
};

function* workerAddTodo(action: Action) {
  try {
    const data: Todo[] = yield call(addTodoToServer, action);
    yield put(addTodo.success<Todo[]>(data));
  } catch (e) {
    yield put(addTodo.error(e.message));
  }
}

const deleteTodoFromServer = async (id: string) => {
  return await axiosInstance.delete(`/todos/${id}`);
};

function* workerDeleteTodo(action: Action) {
  try {
    const { data } = yield call(deleteTodoFromServer, action.payload._id);
    console.log(data);
    yield put(deleteTodo.success<Todo[]>(data));
  } catch (e) {
    yield put(deleteTodo.error(e.message));
  }
}

const toggleTodoToServer = async (action: Action) => {
  const id = action.payload._id;
  const body = action.payload.completed;
  const { data } = await axiosInstance.put(`/todos/${id}`, {
    completed: !body,
  });
  return data;
};

function* workerToggleTodo(action: Action) {
  try {
    const data: Todo[] = yield call(toggleTodoToServer, action);
    yield put(toggleTodo.success<Todo[]>(data));
  } catch (e) {
    yield put(toggleTodo.error(e.message));
  }
}

const allCompletedServer = async () => {
  const { data } = await axiosInstance.put('/todos/toggle-completed');
  return data;
};

function* workerAllCompleted() {
  try {
    const data: Todo[] = yield call(allCompletedServer);
    yield put(allCompleted.success<Todo[]>(data));
  } catch (e) {
    yield put(allCompleted.error(e.message));
  }
}

const clearCompletedServer = async () => {
  const { data } = await axiosInstance.delete('/todos/clear-completed');
  return data;
};

function* workerClearTodoCompleted() {
  try {
    const data: Todo[] = yield call(clearCompletedServer);
    yield put(clearCompleted.success<Todo[]>(data));
  } catch (e) {
    yield put(clearCompleted.error(e.message));
  }
}

const editTodoToServer = async (action: Action) => {
  const id = action.payload._id;
  const body = action.payload.description;
  const { data } = await axiosInstance.put(`/todos/${id}`, {
    description: body,
  });
  return data;
};

export function* workerEditTodo(action: Action) {
  try {
    const data: Todo[] = yield call(editTodoToServer, action);
    yield put(editTodo.success<Todo[]>(data));
  } catch (e) {
    yield put(editTodo.error(e.message));
  }
}

export function* watchTodo() {
  yield takeEvery(fetchTodo.types.request, workerFetchTodos);
  yield takeEvery(addTodo.types.request, workerAddTodo);
  yield takeEvery(deleteTodo.types.request, workerDeleteTodo);
  yield takeEvery(toggleTodo.types.request, workerToggleTodo);
  yield takeEvery(allCompleted.types.request, workerAllCompleted);
  yield takeEvery(clearCompleted.types.request, workerClearTodoCompleted);
  yield takeEvery(editTodo.types.request, workerEditTodo);
}
