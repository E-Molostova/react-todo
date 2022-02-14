import { call, put, fork, spawn, takeEvery } from 'redux-saga/effects';
import { watcherFetchTodos } from './fetchTodoSaga';
// import { watchAddTodo } from './addTodoSaga';
// import { watchDeleteTodo } from './deleteTodoSaga';

export default function* rootSaga() {
  yield fork(watcherFetchTodos);
  // yield spawn(watchAddTodo);
  // yield spawn(watchDeleteTodo);
}

// // const deleteTodo = async id => {
// //   await axios.delete(`/todos/${id}`);
// // };
