import { spawn } from 'redux-saga/effects';
import { watchTodo } from './todoSagas';
import { watchAuth } from './authSagas';

export default function* rootSaga() {
  yield spawn(watchTodo);
  yield spawn(watchAuth);
}
