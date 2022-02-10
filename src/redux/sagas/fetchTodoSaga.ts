import { call, put } from 'redux-saga/effects';
import {
  fetchTodosSuccess,
  fetchTodosRequest,
  fetchTodosError,
} from '../todos/todos-actions';
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

const getTodos = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

export function* workerFetchTodos() {
  try {
    yield put(fetchTodosRequest());
    const data: ResponseGenerator = yield call(getTodos);
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosError());
  }
}
