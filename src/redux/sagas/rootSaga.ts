import { spawn } from 'redux-saga/effects';
import { watcherFetchTodos } from './fetchTodoSaga';
import { watchAddTodo } from './addTodoSaga';
import { watchDeleteTodo } from './deleteTodoSaga';
import { watchToggleTodo } from './toggleTodoSaga';
import { watchAllCompleted } from './allCompletedSaga';
import { watchClearCompleted } from './clearCompletedSaga';
import { watchEditTodo } from './editTextSaga';

export default function* rootSaga() {
  yield spawn(watcherFetchTodos);
  yield spawn(watchAddTodo);
  yield spawn(watchDeleteTodo);
  yield spawn(watchToggleTodo);
  yield spawn(watchAllCompleted);
  yield spawn(watchClearCompleted);
  yield spawn(watchEditTodo);
}
