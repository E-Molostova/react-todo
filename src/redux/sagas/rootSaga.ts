import { spawn } from 'redux-saga/effects';
import { watchTodo } from './todoSagas';

export default function* rootSaga() {
  yield spawn(watchTodo);
}
