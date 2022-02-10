import { call, put, fork, spawn, takeEvery } from 'redux-saga/effects';
import { workerFetchTodos } from './fetchTodoSaga';
import { watchAddTodos } from './addTodoSaga';

export default function* rootSaga() {
  yield spawn(workerFetchTodos);
  yield spawn(watchAddTodos);
}

// // const deleteTodo = async id => {
// //   await axios.delete(`/todos/${id}`);
// // };
