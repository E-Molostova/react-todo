import { spawn } from 'redux-saga/effects';
import { watcherFetchTodos } from './fetchTodoSaga';
import { watchAddTodo } from './addTodoSaga';
import { watchDeleteTodo } from './deleteTodoSaga';
import { watchToggleTodo } from './toggleTodoSaga';

export default function* rootSaga() {
  yield spawn(watcherFetchTodos);
  yield spawn(watchAddTodo);
  yield spawn(watchDeleteTodo);
  yield spawn(watchToggleTodo);
}
