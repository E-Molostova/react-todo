import { call, put, fork, spawn, takeEvery } from 'redux-saga/effects';
import { workerFetchTodos } from './fetchTodoSaga';
import { watchAddTodo } from './addTodoSaga';
import { watchDeleteTodo } from './deleteTodoSaga';

export default function* rootSaga() {
  yield spawn(workerFetchTodos);
  yield spawn(watchAddTodo);
  // yield spawn(watchDeleteTodo);
}

// // const deleteTodo = async id => {
// //   await axios.delete(`/todos/${id}`);
// // };
