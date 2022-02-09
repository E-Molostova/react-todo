import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

import { put, call } from 'redux-saga/effects';
import { fetchTodos } from '../todos/todos-actions';

const getTodos = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

const addTodo = async todo => {
  await axios.post('/todos', todo);
};

// const deleteTodo = async id => {
//   await axios.delete(`/todos/${id}`);
// };

function* workerSaga() {
  const data = yield call(getTodos);
  yield put(fetchTodos(data));
}

// function* watchLoadData() {}

export default function* rootSaga() {
  yield workerSaga();
}
